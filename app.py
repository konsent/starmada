import re
from pathlib import Path
from csv import reader
from flask import Flask, request
from PIL import Image
from io import BytesIO
import base64
from datetime import datetime
from shutil import rmtree
from math import ceil

app = Flask(__name__)

# --- 1. 함대 텍스트 파싱 함수 ---
def parse_fleet_text(fleet_text):
    # 입력받은 텍스트를 줄 단위로 리스트로 분리
    Fleet = []
    for line in fleet_text.splitlines():
        if line.strip() == '':
            continue

        # 오타 및 중복 이름 보정
        line = line.replace('GAllia', 'Gallia')
        line = line.replace('Darth Vader (1)', 'Darth Vader (officer) (1)')
        line = line.replace('Darth Vader (4)', 'Darth Vader (officer) (4)')
        line = line.replace('Darth Vader (3)', 'Darth Vader (boarding) (3)')
        line = line.replace('다스 베이더 (4)', '다스 베이더 (officer) (4)')
        line = line.replace('다스 베이더 (3)', '다스 베이더 (boarding) (3)')
        line = line.replace('Ahsoka Tano (2)', 'Ahsoka Tano (Rebel) (2)')
        line = line.replace('Ahsoka Tano (6)', 'Ahsoka Tano (Republic) (6)')
        line = line.replace('아소카 타노 (2)', 'Ahsoka Tano (Rebel) (2)')
        line = line.replace('아소카 타노 (6)', 'Ahsoka Tano (Republic) (6)')

        # 괄호 숫자 제거 및 불필요 공백 제거
        line = re.sub(r'\((\d+)\)', '', line.strip())
        line = line.replace(' !', '').strip()
        Fleet.append(line)
        if 'Total Points:' in line:
            break

    # 함대 정보(헤더) 파싱
    FleetInfo = {}
    for item_string in Fleet:
        if item_string == 'Squadrons:':
            break
        parts = item_string.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            value = parts[1].strip()
            FleetInfo[key] = value
        else:
            break

    Name = FleetInfo.get('Name')
    Faction = FleetInfo.get('Faction', '').replace('Empire', 'Imperial')
    Commander = FleetInfo.get('Commander', '')
    Fleetlist = [[Faction, FleetInfo.get('Assault',''), FleetInfo.get('Defense',''), FleetInfo.get('Navigation','')]]

    # 본문 카드 리스트부터 시작
    Fleet_body = Fleet[len(FleetInfo):]

    ship = True
    for card in Fleet_body:
        if card.strip() == 'Squadrons:':  # 스쿼드론 구분
            Fleetlist.append([])
            ship = False
            continue
        elif card.startswith('Total Points:'):
            break
        elif card.startswith('='):
            continue
        elif not card.startswith('•'):  # 함선 이름
            Fleetlist.append([card.strip()])
        else:  # 업그레이드 또는 스쿼드론
            if ship:
                Fleetlist[-1].append(card[2:].strip())
            else:
                squadron = re.sub(r'^\d+\s*x\s*', '', card[2:])
                # 진영별 스쿼드론 이름 보정
                if Faction == 'Rebel':
                    squadron = squadron.replace('Hera Syndulla - Ghost', 'Hera Syndulla (Ghost)')
                    squadron = squadron.replace('Hera Syndulla - X-wing Squadron', 'Hera Syndulla (X-wing)')
                elif Faction == 'Imperial':
                    squadron = squadron.replace('Darth Vader - TIE Advanced Squadron', 'Darth Vader (TIE Advanced)')
                    squadron = squadron.replace('Darth Vader - TIE Defender Squadron', 'Darth Vader (TIE Defender)')
                elif Faction == 'Republic':
                    squadron = squadron.replace('Anakin Skywalker - BTL-B Y-wing Squadron', 'Anakin Skywalker (BTL-B)')
                    squadron = squadron.replace('Anakin Skywalker - Delta-7 Aethersprite Squadron', 'Anakin Skywalker (Delta-7)')
                    squadron = squadron.replace('Anakin Skywalker - Twilight', 'Anakin Skywalker (Twilight)')
                squadron = squadron.split(' - ')[0]
                Fleetlist[-1].append(squadron.strip())

    # 함장은 (commander) 태그 추가
    for i in range(1, len(Fleetlist)):
        for j in range(len(Fleetlist[i])):
            if str(Fleetlist[i][j]) == str(Commander):
                Fleetlist[i][j] += ' (commander)'

    # 빈 칸은 'Blank' 처리
    for i in range(1, 4):
        if str(Fleetlist[0][i]) == '':
            Fleetlist[0][i] = 'Blank'

    # 함선 이름에 진영 추가
    for i in range(1, len(Fleetlist) - 1):
        Fleetlist[i][0] += f' ({Faction})'

    return Name, Faction, Commander, Fleetlist


# --- 2. CSV에서 카드-이미지 경로 매핑 불러오기 ---
def read_csv_to_dict(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        readdata = reader(file)
        data = []
        for row in readdata:
            if any(cell.strip() for cell in row):
                data.append(row)

    header = [h.strip() for h in data[0]]
    eng_col_index = header.index('Eng')
    kor_col_index = header.index('Kor')

    eng_kor_map = {}
    for row in data[1:]:
        if row[eng_col_index].strip():
            eng_kor_map[row[eng_col_index].strip()] = row[kor_col_index].strip()
    return eng_kor_map


# --- 3. 이미지 파일 경로 얻기 함수 ---
def maindata(eng_string, mainmap):
    return mainmap.get(eng_string.strip())


def upgradedata(eng_string, upgrademap):
    return upgrademap.get(eng_string.strip())


# --- 4. 이미지 불러오기 ---
def load_images(Fleetlist):
    # 실행 스크립트 기준 resources 폴더와 csv파일 위치 설정
    script_path = Path(__file__).resolve()
    if script_path.parent.name == '_internal':  # exe일 경우
        script_dir = script_path.parent.parent
    else:
        script_dir = script_path.parent

    resources_folder = script_dir / 'resources'
    main_link_filename = resources_folder / 'Card Link.csv'
    upgrade_link_filename = resources_folder / 'Upgrade Link.csv'

    mainmap = read_csv_to_dict(main_link_filename)
    upgrademap = read_csv_to_dict(upgrade_link_filename)

    ImageList = [[] for _ in range(len(Fleetlist))]

    address = script_dir.as_posix()

    try:
        # 첫 줄 (진영 + Objective 같은 부분)
        for i in range(len(Fleetlist[0])):
            link = maindata(str(Fleetlist[0][i]), mainmap)
            if not link:
                return None, f'"{Fleetlist[0][i]}" 카드 링크를 찾을 수 없습니다.'
            full_path = Path(address + link)
            ImageList[0].append(Image.open(full_path))

        # 함선 및 업그레이드 이미지
        for i in range(1, len(Fleetlist) - 1):
            link = maindata(str(Fleetlist[i][0]), mainmap)
            if not link:
                return None, f'"{Fleetlist[i][0]}" 카드 링크를 찾을 수 없습니다.'
            full_path = Path(address + link)
            ImageList[i].append(Image.open(full_path))

            for j in range(1, len(Fleetlist[i])):
                link = upgradedata(str(Fleetlist[i][j]), upgrademap)
                if not link:
                    return None, f'"{Fleetlist[i][j]}" 업그레이드 카드 링크를 찾을 수 없습니다.'
                full_path = Path(address + link)
                ImageList[i].append(Image.open(full_path))

        # 스쿼드론 이미지
        last_index = len(Fleetlist) - 1
        for i in range(len(Fleetlist[last_index])):
            link = maindata(str(Fleetlist[last_index][i]), mainmap)
            if not link:
                return None, f'"{Fleetlist[last_index][i]}" 카드 링크를 찾을 수 없습니다.'
            full_path = Path(address + link)
            ImageList[last_index].append(Image.open(full_path))

    except Exception as e:
        return None, f'이미지 불러오기 중 오류 발생: {e}'

    return ImageList, None


# --- 5. 이미지 병합 및 저장 함수 ---
def flatten_image(image, background):
    if image.mode != 'RGBA':
        image = image.convert('RGBA')
    bg = background.copy()
    bg.paste(image, (0, 0), image)
    bg = bg.convert('RGB')
    return bg


def create_fleet_images(Name, Faction, Fleetlist, ImageList):
    script_path = Path(__file__).resolve()
    if script_path.parent.name == '_internal':
        script_dir = script_path.parent.parent
    else:
        script_dir = script_path.parent

    address = script_dir.as_posix()

    # 저장 경로
    directory_name = f"{Name} ({datetime.today().strftime('%Y%m%d')}) ({Faction})"
    file_path = Path(address) / 'Fleetlist' / directory_name
    if file_path.exists():
        rmtree(file_path)
    file_path.mkdir(parents=True, exist_ok=True)
    FileName = str(file_path)

    background = Image.new('RGBA', (3508, 2480), (255, 255, 255, 0))

    output = []
    FleetImage = [None] * len(Fleetlist)

    ShipCount = len(Fleetlist) - 2  # 마지막은 스쿼드론

    # Objective, 진영 등 상단 이미지 (첫 줄)
    FleetImage[0] = background.copy()
    for i in range(3):
        FleetImage[0].paste(ImageList[0][i + 1], (100 + 800 * i, 100))
    FleetImage[0].paste(ImageList[0][0], (3100, 100))
    temp = flatten_image(FleetImage[0], background)
    temp.save(FileName + '/Objectives.webp', format='WEBP', quality=100)
    output.append(temp)

    # 함선 및 업그레이드 이미지 병합
    for ShipNumber in range(1, ShipCount + 1):
        # SSD 및 스타 드레드노트인 경우와 아닌 경우 분리 처리
        is_large_ship = ('SSD' in Fleetlist[ShipNumber][0]) or ('Star Dreadnought' in Fleetlist[ShipNumber][0])

        UpgradeCount = len(Fleetlist[ShipNumber]) - 1

        if not is_large_ship:
            if UpgradeCount <= 6:
                FleetImage[ShipNumber] = background.copy()
                FleetImage[ShipNumber].paste(ImageList[ShipNumber][0], (100, 100))
                for UpgradeNumber in range(UpgradeCount):
                    x = 1000 + 800 * (UpgradeNumber % 3)
                    y = 100 + 1100 * (UpgradeNumber // 3)
                    FleetImage[ShipNumber].paste(ImageList[ShipNumber][UpgradeNumber + 1], (x, y))
                temp = flatten_image(FleetImage[ShipNumber], background)
                temp.save(FileName + f'/Ship{ShipNumber}.webp', format='WEBP', quality=100)
                output.append(temp)

            else:
                FleetImage[ShipNumber] = Image.new('RGBA', (7016, 2480), (255, 255, 255, 0))
                FleetImage[ShipNumber].paste(ImageList[ShipNumber][0], (100, 100))
                col_count = (UpgradeCount + 1) // 2
                for UpgradeNumber in range(UpgradeCount):
                    x = 1000 + 800 * (UpgradeNumber % col_count)
                    y = 100 + 1100 * (UpgradeNumber // col_count)
                    FleetImage[ShipNumber].paste(ImageList[ShipNumber][UpgradeNumber + 1], (x, y))

                Ship1Cropped = FleetImage[ShipNumber].crop((0, 0, 3400, 2480))
                Ship2Cropped = FleetImage[ShipNumber].crop((3400, 0, 6600, 2480))

                Ship1Resized = background.copy()
                Ship2Resized = background.copy()
                Ship1Resized.paste(Ship1Cropped, (0, 0))
                Ship2Resized.paste(Ship2Cropped, (100, 0))

                temp = flatten_image(Ship1Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(1).webp', format='WEBP', quality=100)
                output.append(temp)
                temp = flatten_image(Ship2Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(2).webp', format='WEBP', quality=100)
                output.append(temp)
        else:
            # 큰 함선 업그레이드 이미지 처리
            if UpgradeCount <= 4:
                FleetImage[ShipNumber] = background.copy()
                FleetImage[ShipNumber].paste(ImageList[ShipNumber][0], (100, 100))
                for UpgradeNumber in range(UpgradeCount):
                    x = 1673 + 800 * (UpgradeNumber % 2)
                    y = 100 + 1100 * (UpgradeNumber // 2)
                    FleetImage[ShipNumber].paste(ImageList[ShipNumber][UpgradeNumber + 1], (x, y))
                temp = flatten_image(FleetImage[ShipNumber], background)
                temp.save(FileName + f'/Ship{ShipNumber}.webp', format='WEBP', quality=100)
                output.append(temp)

            elif UpgradeCount <= 12:
                FleetImage[ShipNumber] = Image.new('RGBA', (7016, 2480), (255, 255, 255, 0))
                FleetImage[ShipNumber].paste(ImageList[ShipNumber][0], (100, 100))
                cols = ceil(UpgradeCount / 2)
                for UpgradeNumber in range(UpgradeCount):
                    x = 1673 + 800 * (UpgradeNumber % cols)
                    y = 100 + 1100 * (UpgradeNumber // cols)
                    FleetImage[ShipNumber].paste(ImageList[ShipNumber][UpgradeNumber + 1], (x, y))

                Ship1Cropped = FleetImage[ShipNumber].crop((0, 0, 3273, 2480))
                Ship2Cropped = FleetImage[ShipNumber].crop((3273, 0, 6473, 2480))

                Ship1Resized = background.copy()
                Ship2Resized = background.copy()
                Ship1Resized.paste(Ship1Cropped, (0, 0))
                Ship2Resized.paste(Ship2Cropped, (100, 0))

                temp = flatten_image(Ship1Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(1).webp', format='WEBP', quality=100)
                output.append(temp)
                temp = flatten_image(Ship2Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(2).webp', format='WEBP', quality=100)
                output.append(temp)

            else:
                FleetImage[ShipNumber] = Image.new('RGBA', (10524, 2480), (255, 255, 255, 0))
                FleetImage[ShipNumber].paste(ImageList[ShipNumber][0], (100, 100))
                cols = ceil(UpgradeCount / 2)
                for UpgradeNumber in range(UpgradeCount):
                    x = 1673 + 800 * (UpgradeNumber % cols)
                    y = 100 + 1100 * (UpgradeNumber // cols)
                    FleetImage[ShipNumber].paste(ImageList[ShipNumber][UpgradeNumber + 1], (x, y))

                Ship1Cropped = FleetImage[ShipNumber].crop((0, 0, 3273, 2480))
                Ship2Cropped = FleetImage[ShipNumber].crop((3273, 0, 6473, 2480))
                Ship3Cropped = FleetImage[ShipNumber].crop((6473, 0, 9673, 2480))

                Ship1Resized = background.copy()
                Ship2Resized = background.copy()
                Ship3Resized = background.copy()
                Ship1Resized.paste(Ship1Cropped, (0, 0))
                Ship2Resized.paste(Ship2Cropped, (100, 0))
                Ship3Resized.paste(Ship3Cropped, (100, 0))

                temp = flatten_image(Ship1Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(1).webp', format='WEBP', quality=100)
                output.append(temp)
                temp = flatten_image(Ship2Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(2).webp', format='WEBP', quality=100)
                output.append(temp)
                temp = flatten_image(Ship3Resized, background)
                temp.save(FileName + f'/Ship{ShipNumber}(3).webp', format='WEBP', quality=100)
                output.append(temp)

    # 스쿼드론 페이지 이미지 처리
    SquadronCount = len(Fleetlist[ShipCount + 1])
    if SquadronCount > 0:
        SquadronPageCount = SquadronCount // 8 + 1
        FleetImage[ShipCount + 1] = [background.copy() for _ in range(SquadronPageCount)]

        for SquadronNumber in range(SquadronCount):
            page_idx = SquadronNumber // 8
            x = 100 + 800 * (SquadronNumber % 4)
            y = 100 + 1100 * ((SquadronNumber % 8) // 4)
            FleetImage[ShipCount + 1][page_idx].paste(ImageList[ShipCount + 1][SquadronNumber], (x, y))

        for page_idx in range(SquadronPageCount):
            temp = flatten_image(FleetImage[ShipCount + 1][page_idx], background)
            temp.save(FileName + f'/Squadrons({page_idx+1}).webp', format='WEBP', quality=100)
            output.append(temp)

    return output


# --- 6. 웹 UI 및 라우팅 ---

# # 루트 페이지: 텍스트 입력 폼 보여줌
# @app.route('/', methods=['GET'])
# def index():
#     return '''
#     <!doctype html>
#     <html>
#     <head>
#       <meta charset="utf-8">
#       <title>함대 이미지 생성기</title>
#     </head>
#     <body>
#       <h1>함대 텍스트 입력</h1>
#       <form method="post" action="/generate">
#         <textarea name="fleet_text" rows="20" cols="80" placeholder="여기에 함대 텍스트를 붙여넣으세요"></textarea><br/>
#         <button type="submit">생성</button>
#       </form>
#       <p>※ 입력 텍스트 예시:</p>
#       <pre>Name: Untitled Fleet
# Faction: Imperial
# Commander: Grand Moff Tarkin

# Assault:
# Defense:
# Navigation:

# ISD Kuat Refit (112)
# • Grand Moff Tarkin (28)
# • Wulff Yularen (7)
# • Veteran Gunners (5)
# • High-Capacity Ion Turbines (6)
# • Assault Concussion Missiles (5)
# = 163 Points

# Onager Testbed (116)
# • Weapons Liaison (3)
# • Gunnery Team (7)
# • Local Fire Control (4)
# • Orbital Bombardment Particle Cannons (5)
# • Cataclysm (5)
# = 140 Points

# Squadrons:
# • Howlrunner (16)
# • Mauler Mithel (15)
# • Boba Fett (24)
# • Darth Vader (TIE Advanced) (21)
# • Soontir Fel (18)
# = 94 Points

# Total Points: 397</pre>
#     </body>
#     </html>
#     '''

# # 이미지 생성 및 결과 출력
# @app.route('/generate', methods=['POST'])
# def generate():
#     fleet_text = request.form.get('fleet_text', '')
#     if not fleet_text.strip():
#         return '함대 텍스트를 입력하세요', 400

#     try:
#         # 1. 텍스트 파싱
#         Name, Faction, Commander, Fleetlist = parse_fleet_text(fleet_text)

#         # 2. 이미지 로드
#         ImageList, error = load_images(Fleetlist)
#         if error:
#             return f"<h2>오류 발생:</h2><p>{error}</p>"

#         # 3. 이미지 합성
#         output_images = create_fleet_images(Name, Faction, Fleetlist, ImageList)

#         # 4. 이미지들을 웹에서 바로 보여주기 위한 base64 변환
#         images_html = ''
#         for idx, img in enumerate(output_images):
#             img_io = BytesIO()
#             img.save(img_io, 'WEBP')
#             img_io.seek(0)
#             img_b64 = base64.b64encode(img_io.read()).decode('ascii')
#             images_html += f'''

#             <div style="margin-bottom:30px;">
#             <img src="data:image/webp;base64,{img_b64}" style="max-width:90%;border:1px solid #333;"/><br/>
#             <a download="fleet_image_{idx+1}.webp" href="data:image/webp;base64,{img_b64}" style="font-size:16px;">이미지 저장</a>
#             </div>
#             '''

#         return f'''
#         <!doctype html>
#         <html>
#         <head>
#           <meta charset="utf-8">
#           <title>생성된 함대 이미지</title>
#         </head>
#         <body>
#           <h1>생성된 이미지들</h1>
#           {images_html}
#           <a href="/" style="font-size:18px;">새로 입력하기</a>
#         </body>
#         </html>
#         '''

#     except Exception as e:
#         return f"<h2>오류 발생:</h2><pre>{e}</pre>"



# 루트 페이지: 텍스트 입력 폼 보여줌 (CSS 적용)
@app.route('/', methods=['GET'])
def index():
    return '''
    <!doctype html>
    <html lang="ko">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>함대 이미지 생성기</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f7fa;
          color: #333;
          margin: 0; padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          margin-bottom: 10px;
          color: #222;
        }
        form {
          width: 100%;
          max-width: 900px;
          background: white;
          padding: 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          border-radius: 8px;
        }
        textarea {
          width: 100%;
          height: 300px;
          font-size: 14px;
          font-family: monospace;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
          box-sizing: border-box;
        }
        button {
          margin-top: 15px;
          background: #0078d7;
          color: white;
          font-weight: 600;
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s ease;
          display: block;
          width: 100%;
        }
        button:hover {
          background: #005fa3;
        }
        pre {
          background: #222;
          color: #eee;
          padding: 15px;
          border-radius: 6px;
          max-height: 250px;
          overflow-y: auto;
          font-size: 13px;
          line-height: 1.4;
          margin-top: 20px;
          white-space: pre-wrap;
          word-break: break-word;
        }
        p {
          max-width: 900px;
          margin-top: 20px;
          font-size: 14px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>함대 텍스트 입력</h1>
      <form method="post" action="/generate" autocomplete="off" spellcheck="false">
        <textarea name="fleet_text" placeholder="여기에 함대 텍스트를 붙여넣으세요"></textarea>
        <button type="submit">이미지 생성</button>
      </form>
    '''


# 이미지 생성 및 결과 출력 (확대 모달 기능 포함)
@app.route('/generate', methods=['POST'])
def generate():
    fleet_text = request.form.get('fleet_text', '')
    if not fleet_text.strip():
        return '함대 텍스트를 입력하세요', 400

    try:
        Name, Faction, Commander, Fleetlist = parse_fleet_text(fleet_text)
        ImageList, error = load_images(Fleetlist)
        if error:
            return f"<h2>오류 발생:</h2><p>{error}</p>"

        output_images = create_fleet_images(Name, Faction, Fleetlist, ImageList)

        images_html = ''
        for idx, img in enumerate(output_images):
            img_io = BytesIO()
            img.save(img_io, 'WEBP')
            img_io.seek(0)
            img_b64 = base64.b64encode(img_io.read()).decode('ascii')
            images_html += f'''
            <div class="image-wrapper">
              <img src="data:image/webp;base64,{img_b64}" alt="Fleet Image {idx+1}" class="clickable-image" />
              <a download="fleet_image_{idx+1}.webp" href="data:image/webp;base64,{img_b64}" class="btn-download">이미지 저장</a>
            </div>
            '''

        return f'''
        <!doctype html>
        <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>생성된 함대 이미지</title>
          <style>
            body {{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: #f5f7fa;
              color: #333;
              margin: 0; padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }}
            h1 {{
              margin-bottom: 20px;
              color: #222;
            }}
            .image-wrapper {{
              background: white;
              border-radius: 10px;
              padding: 20px;
              margin-bottom: 30px;
              box-shadow: 0 8px 20px rgba(0,0,0,0.12);
              max-width: 95vw;
              width: 850px;
              text-align: center;
            }}
            img.clickable-image {{
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              border: 1px solid #ccc;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              cursor: zoom-in;
              transition: transform 0.3s ease;
            }}
            img.clickable-image:hover {{
              transform: scale(1.02);
            }}
            .btn-download {{
              display: inline-block;
              margin-top: 15px;
              background: #0078d7;
              color: white;
              font-weight: 600;
              padding: 10px 22px;
              border-radius: 6px;
              text-decoration: none;
              transition: background 0.3s ease;
            }}
            .btn-download:hover {{
              background: #005fa3;
            }}
            a.back-link {{
              font-size: 16px;
              color: #555;
              margin-top: 15px;
              text-decoration: none;
            }}
            a.back-link:hover {{
              text-decoration: underline;
            }}

            /* 모달 배경 */
            .modal {{
              display: none;
              position: fixed;
              z-index: 9999;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0,0,0,0.8);
              align-items: center;
              justify-content: center;
            }}
            /* 모달 이미지 */
            .modal-content {{
              max-width: 90vw;
              max-height: 90vh;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(255,255,255,0.3);
              cursor: zoom-out;
              animation: zoomIn 0.3s ease forwards;
            }}
            /* 닫기 버튼 */
            .modal-close {{
              position: fixed;
              top: 20px;
              right: 30px;
              font-size: 35px;
              font-weight: bold;
              color: white;
              cursor: pointer;
              user-select: none;
              z-index: 10000;
            }}
            @keyframes zoomIn {{
              from {{ transform: scale(0.7); opacity: 0; }}
              to {{ transform: scale(1); opacity: 1; }}
            }}
          </style>
        </head>
        <body>
          <h1>{Name} ({Faction})</h1>
          {images_html}
          <a href="/" class="back-link">&larr; 새로 입력하기</a>

          <!-- 모달 구조 -->
          <div id="imgModal" class="modal">
            <span class="modal-close" id="modalClose">&times;</span>
            <img class="modal-content" id="modalImage" />
          </div>

          <script>
            const modal = document.getElementById('imgModal');
            const modalImg = document.getElementById('modalImage');
            const modalClose = document.getElementById('modalClose');

            // 이미지 클릭시 모달 열기
            document.querySelectorAll('.clickable-image').forEach(img => {{
              img.addEventListener('click', () => {{
                modal.style.display = 'flex';
                modalImg.src = img.src;
              }});
            }});

            // 닫기 버튼 클릭 또는 모달 배경 클릭 시 모달 닫기
            modalClose.addEventListener('click', () => {{
              modal.style.display = 'none';
              modalImg.src = '';
            }});

            modal.addEventListener('click', e => {{
              if(e.target === modal) {{
                modal.style.display = 'none';
                modalImg.src = '';
              }}
            }});

            // ESC 키 누르면 모달 닫기
            document.addEventListener('keydown', e => {{
              if(e.key === 'Escape' && modal.style.display === 'flex') {{
                modal.style.display = 'none';
                modalImg.src = '';
              }}
            }});
          </script>
        </body>
        </html>
        '''
    except Exception as e:
        return f"<h2>오류 발생:</h2><pre>{e}</pre>"



# --- 7. 메인 실행 ---
if __name__ == '__main__':
    app.run(debug=True)

