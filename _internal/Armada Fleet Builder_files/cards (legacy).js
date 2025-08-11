function removeLegacyCards(cardsData) {
    const filteredCards = {};
    for (const category in cardsData) {
        filteredCards[category] = cardsData[category].filter(card => {
            return card.legacy !== true;
        });
    }
    return filteredCards; 
}


var cards_legacy = {
    "ship": [
        {
            "id": 1043,
            "title": "마크 2 어썰트 프리깃 A",
            "image": "resources/함선 카드/함선 (반군)/마크 2 어썰트 프리깃 A.webp",
            "set": "ship",
            "type": "assault-frigate",
            "points": 77,
            "faction": "rebel",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1044,
            "title": "마크 2 어썰트 프리깃 B",
            "image": "resources/함선 카드/함선 (반군)/마크 2 어썰트 프리깃 B.webp",
            "set": "ship",
            "type": "assault-frigate",
            "points": 72,
            "faction": "rebel",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1045,
            "title": "CR90 초계함 A",
            "image": "resources/함선 카드/함선 (반군)/CR90 초계함 A.webp",
            "set": "ship",
            "type": "corvette",
            "points": 44,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1046,
            "title": "CR90 초계함 B",
            "image": "resources/함선 카드/함선 (반군)/CR90 초계함 B.webp",
            "set": "ship",
            "type": "corvette",
            "points": 39,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "ion-cannons": null,
                "title": null
            }
        },
        {
            "id": 1277,
            "title": "GR-75 전투 개량함",
            "image": "resources/함선 카드/함선 (반군)/GR-75 전투 개량함.webp",
            "set": "ship",
            "type": "gr-75",
            "points": 24,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "officer": null,
                "fleet-support": null,
                "offensive-retrofit": null,
                "title": null
            }
        },
        {
            "id": 1276,
            "title": "GR-75 중형 수송선",
            "image": "resources/함선 카드/함선 (반군)/GR-75 중형 수송선.webp",
            "set": "ship",
            "type": "gr-75",
            "points": 18,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "officer": null,
                "fleet-support": null,
                "offensive-retrofit": null,
                "title": null
            }
        },
        {
            "id": 2783,
            "title": "해머헤드 정찰 초계함",
            "image": "resources/함선 카드/함선 (반군)/해머헤드 정찰 초계함.webp",
            "set": "ship",
            "type": "hammerhead",
            "points": 41,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 2781,
            "title": "해머헤드 어뢰 초계함",
            "image": "resources/함선 카드/함선 (반군)/해머헤드 어뢰 초계함.webp",
            "set": "ship",
            "type": "hammerhead",
            "points": 36,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1186,
            "title": "MC30c 정찰 프리깃",
            "image": "resources/함선 카드/함선 (반군)/MC30c 정찰 프리깃.webp",
            "set": "ship",
            "type": "mc30c-frigate",
            "points": 69,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1187,
            "title": "MC30c 어뢰 프리깃",
            "image": "resources/함선 카드/함선 (반군)/MC30c 어뢰 프리깃.webp",
            "set": "ship",
            "type": "mc30c-frigate",
            "points": 63,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1002,
            "title": "MC75 장갑 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC75 장갑 순양함.webp",
            "set": "ship",
            "type": "mc75-cruiser",
            "points": 99,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1003,
            "title": "MC75 폭격 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC75 폭격 순양함.webp",
            "set": "ship",
            "type": "mc75-cruiser",
            "points": 95,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "ordnance-2": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1188,
            "title": "MC80 강습 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC80 강습 순양함.webp",
            "set": "ship",
            "type": "mc80-cruiser",
            "points": 110,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "defensive-retrofit-2": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1189,
            "title": "MC80 사령 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC80 사령 순양함.webp",
            "set": "ship",
            "type": "mc80-cruiser",
            "points": 102,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1275,
            "title": "MC80 전투 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC80 전투 순양함.webp",
            "set": "ship",
            "type": "mc80-liberty",
            "points": 103,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "support-team": null,
                "ion-cannons": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            }
        },
        {
            "id": 1274,
            "title": "MC80 은하 순양함",
            "image": "resources/함선 카드/함선 (반군)/MC80 은하 순양함.webp",
            "set": "ship",
            "type": "mc80-liberty",
            "points": 96,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "support-team": null,
                "ion-cannons": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            }
        },
        {
            "id": 1047,
            "title": "네뷸론-B 호위 프리깃",
            "image": "resources/함선 카드/함선 (반군)/네뷸론-B 호위 프리깃.webp",
            "set": "ship",
            "type": "nebulon-b",
            "points": 57,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1048,
            "title": "네뷸론-B 지원형 개수함",
            "image": "resources/함선 카드/함선 (반군)/네뷸론-B 지원형 개수함.webp",
            "set": "ship",
            "type": "nebulon-b",
            "points": 51,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1334,
            "title": "개조형 펠타 급 강습함",
            "image": "resources/함선 카드/함선 (반군)/개조형 펠타 급 강습함.webp",
            "set": "ship",
            "type": "pelta",
            "points": 56,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "fleet-command": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1335,
            "title": "개조형 펠타 급 사령함",
            "image": "resources/함선 카드/함선 (반군)/개조형 펠타 급 사령함.webp",
            "set": "ship",
            "type": "pelta",
            "points": 60,
            "faction": "rebel",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "fleet-command": null,
                "offensive-retrofit": null,
                "title": null
            }
        },
        {
            "id": 1454,
            "title": "마크 1 스타호크 급 전함",
            "image": "resources/함선 카드/함선 (반군)/마크 1 스타호크 급 전함.webp",
            "set": "ship",
            "type": "starhawk",
            "points": 140,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "super-weapon": null,
                "title": null
            }
        },
        {
            "id": 1455,
            "title": "마크 2 스타호크 급 전함",
            "image": "resources/함선 카드/함선 (반군)/마크 2 스타호크 급 전함.webp",
            "set": "ship",
            "type": "starhawk",
            "points": 150,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "super-weapon": null,
                "title": null
            }
        },
        {
            "id": 4201,
            "title": "프로비던스 급 모함",
            "image": "resources/함선 카드/함선 (반군)/프로비던스 급 모함.webp",
            "set": "ship",
            "type": "providence",
            "points": 95,
            "faction": "rebel",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "weapons-team-2": null,
                "offensive-retrofit-2": null,
                "support-team": null,
                "support-team-2": null
            },
            "traits" : ["comms", "transport"],
            "unique": true
        },
        {
            "id": 1330,
            "title": "아퀴텐즈 급 사령 순양함",
            "image": "resources/함선 카드/함선 (제국)/아퀴텐즈 급 사령 순양함.webp",
            "set": "ship",
            "type": "arquitens",
            "points": 55,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1331,
            "title": "아퀴텐즈 급 경 순양함",
            "image": "resources/함선 카드/함선 (제국)/아퀴텐즈 급 경 순양함.webp",
            "set": "ship",
            "type": "arquitens",
            "points": 52,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1049,
            "title": "글래디에이터 1급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/글래디에이터 1급 은하 구축함.webp",
            "set": "ship",
            "type": "gladiator-class-star-destroyer",
            "points": 56,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "support-team": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1050,
            "title": "글래디에이터 2급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/글래디에이터 2급 은하 구축함.webp",
            "set": "ship",
            "type": "gladiator-class-star-destroyer",
            "points": 62,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "support-team": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1291,
            "title": "고잔티 급 강습 수송함",
            "image": "resources/함선 카드/함선 (제국)/고잔티 급 강습 수송함.webp",
            "set": "ship",
            "type": "gozanti",
            "points": 26,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "officer": null,
                "fleet-support": null,
                "offensive-retrofit": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 1290,
            "title": "고잔티 급 순양함",
            "image": "resources/함선 카드/함선 (제국)/고잔티 급 순양함.webp",
            "set": "ship",
            "type": "gozanti",
            "points": 23,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "officer": null,
                "fleet-support": null,
                "offensive-retrofit": null,
                "title": null
            }
        },
        {
            "id": 1203,
            "title": "임페리얼 1급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/임페리얼 1급 은하 구축함.webp",
            "set": "ship",
            "type": "imperial-class-star-destroyer",
            "points": 110,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1204,
            "title": "임페리얼 2급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/임페리얼 2급 은하 구축함.webp",
            "set": "ship",
            "type": "imperial-class-star-destroyer",
            "points": 120,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1278,
            "title": "임페리얼 은하 구축함 사이문 1 개수형",
            "image": "resources/함선 카드/함선 (제국)/임페리얼 은하 구축함 사이문 1 개수형.webp",
            "set": "ship",
            "type": "imperial-class-star-destroyer",
            "points": 112,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "fleet-command": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            }
        },
        {
            "id": 1279,
            "title": "임페리얼 은하 구축함 쿠앗 개수형",
            "image": "resources/함선 카드/함선 (제국)/임페리얼 은하 구축함 쿠앗 개수형.webp",
            "set": "ship",
            "type": "imperial-class-star-destroyer",
            "points": 112,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ion-cannons": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1293,
            "title": "인터딕터 전투형 개수함",
            "image": "resources/함선 카드/함선 (제국)/인터딕터 전투형 개수함.webp",
            "set": "ship",
            "type": "interdictor",
            "points": 93,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "offensive-retrofit": null,
                "experimental-retrofit": null,
                "ion-cannons": null,
                "title": null
            }
        },
        {
            "id": 1292,
            "title": "인터딕터 진압형 개수함",
            "image": "resources/함선 카드/함선 (제국)/인터딕터 진압형 개수함.webp",
            "set": "ship",
            "type": "interdictor",
            "points": 90,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "offensive-retrofit": null,
                "experimental-retrofit": null,
                "experimental-retrofit-2": null,
                "ion-cannons": null,
                "title": null
            }
        },
        {
            "id": 1448,
            "title": "오나거 급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/오나거 급 은하 구축함.webp",
            "set": "ship",
            "type": "onager",
            "points": 120,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "weapons-team-2": null,
                "turbolasers": null,
                "super-weapon": null,
                "title": null
            },
            "version": "1.5.4"
        },
        {
            "id": 1449,
            "title": "오나거 급 실험함",
            "image": "resources/함선 카드/함선 (제국)/오나거 급 실험함.webp",
            "set": "ship",
            "type": "onager",
            "points": 116,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "weapons-team-2": null,
                "support-team": null,
                "super-weapon": null,
                "title": null
            },
            "version": "1.5.4"
        },
        {
            "id": 2666,
            "title": "퀘이사 파이어 1급 순양 모함",
            "image": "resources/함선 카드/함선 (제국)/퀘이사 파이어 1급 순양 모함.webp",
            "set": "ship",
            "type": "quasar",
            "points": 54,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "title": null
            }
        },
        {
            "id": 2664,
            "title": "퀘이사 파이어 2급 순양 모함",
            "image": "resources/함선 카드/함선 (제국)/퀘이사 파이어 2급 순양 모함.webp",
            "set": "ship",
            "type": "quasar",
            "points": 61,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team-2": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "title": null
            }
        },
        {
            "id": 1201,
            "title": "레이더 1급 초계함",
            "image": "resources/함선 카드/함선 (제국)/레이더 1급 초계함.webp",
            "set": "ship",
            "type": "raider-class-corvette",
            "points": 44,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1202,
            "title": "레이더 2급 초계함",
            "image": "resources/함선 카드/함선 (제국)/레이더 2급 초계함.webp",
            "set": "ship",
            "type": "raider-class-corvette",
            "points": 48,
            "faction": "imperial",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "title": null
            }
        },
        {
            "id": 1051,
            "title": "빅토리 1급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/빅토리 1급 은하 구축함.webp",
            "set": "ship",
            "type": "victory-class-star-destroyer",
            "points": 73,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "turbolasers": null,
                "ordnance": null,
                "title": null
            }
        },
        {
            "id": 1052,
            "title": "빅토리 2급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/빅토리 2급 은하 구축함.webp",
            "set": "ship",
            "type": "victory-class-star-destroyer",
            "points": 80,
            "faction": "imperial",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "turbolasers": null,
                "ion-cannons": null,
                "title": null
            },
            "version": "1.6.0"
        },
        {
            "id": 4200,
            "title": "베나터 2급 은하 구축함",
            "image": "resources/함선 카드/함선 (제국)/베나터 2급 은하 구축함.webp",
            "set": "ship",
            "type": "venator",
            "points": 100,
            "faction": "imperial",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "ordnance-2": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["bombard"],
            "unique": true
        },
        {
            "divider": true
        },
        {
            "id": 1053,
            "title": "은하 드레드노트 사령 시제함",
            "image": "resources/함선 카드/함선 (제국)/은하 드레드노트 사령 시제함.webp",
            "set": "ship",
            "type": "super-star-destroyer",
            "points": 220,
            "faction": "imperial",
            "size": "huge",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "officer-3": null,
                "fleet-command": null,
                "fleet-command-2": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1054,
            "title": "은하 드레드노트 강습 시제함",
            "image": "resources/함선 카드/함선 (제국)/은하 드레드노트 강습 시제함.webp",
            "set": "ship",
            "type": "super-star-destroyer",
            "points": 250,
            "faction": "imperial",
            "size": "huge",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "officer-3": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "ion-cannons": null,
                "ion-cannons-2": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            }
        },
        {
            "id": 1055,
            "title": "이제큐터 1급 은하 드레드노트",
            "image": "resources/함선 카드/함선 (제국)/이제큐터 1급 은하 드레드노트.webp",
            "set": "ship",
            "type": "super-star-destroyer",
            "points": 381,
            "faction": "imperial",
            "size": "huge",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "officer-3": null,
                "officer-4": null,
                "fleet-command": null,
                "fleet-command-2": null,
                "fleet-command-3": null,
                "fleet-command-4": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            }
        },
        {
            "id": 1056,
            "title": "이제큐터 2급 은하 드레드노트",
            "image": "resources/함선 카드/함선 (제국)/이제큐터 2급 은하 드레드노트.webp",
            "set": "ship",
            "type": "super-star-destroyer",
            "points": 411,
            "faction": "imperial",
            "size": "huge",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "officer-3": null,
                "officer-4": null,
                "fleet-command": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "ion-cannons": null,
                "ion-cannons-2": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            }
        },
        {
            "id": 4005,
            "title": "어클레메이터 1급 강습함",
            "image": "resources/함선 카드/함선 (공화국)/어클레메이터 1급 강습함.webp",
            "set": "ship",
            "type": "acclamator",
            "points": 64,
            "faction": "republic",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["clone", "transport"],
            "version": "1.6.0"
        },
        {
            "id": 4006,
            "title": "어클레메이터 2급 강습함",
            "image": "resources/함선 카드/함선 (공화국)/어클레메이터 2급 강습함.webp",
            "set": "ship",
            "type": "acclamator",
            "points": 71,
            "faction": "republic",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["clone", "bombard", "transport"]
        },
        {
            "id": 4007,
            "title": "컨슐러 무장 순양함",
            "image": "resources/함선 카드/함선 (공화국)/컨슐러 무장 순양함.webp",
            "set": "ship",
            "type": "consular",
            "points": 37,
            "faction": "republic",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "title": null
            },
            "traits": ["senate", "comms"]
        },
        {
            "id": 4008,
            "title": "컨슐러 급 챠저 c70",
            "image": "resources/함선 카드/함선 (공화국)/컨슐러 급 챠저 c70.webp",
            "set": "ship",
            "type": "consular",
            "points": 42,
            "faction": "republic",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "offensive-retrofit": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["clone"],
            "version": "1.6.0"
        },
        {
            "id": 4062,
            "title": "펠타 급 의료 프리깃",
            "image": "resources/함선 카드/함선 (공화국)/펠타 급 의료 프리깃.webp",
            "set": "ship",
            "type": "pelta-republic",
            "points": 49,
            "faction": "republic",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "fleet-support": null,
                "offensive-retrofit": null,
                "title": null
            },
            "traits": ["clone", "medical"]
        },
        {
            "id": 4063,
            "title": "펠타 급 수송 프리깃",
            "image": "resources/함선 카드/함선 (공화국)/펠타 급 수송 프리깃.webp",
            "set": "ship",
            "type": "pelta-republic",
            "points": 45,
            "faction": "republic",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "fleet-support": null,
                "defensive-retrofit": null,
                "title": null
            },
            "traits": ["clone", "transport"]
        },
        {
            "id": 4064,
            "title": "베나터 1급 은하 구축함",
            "image": "resources/함선 카드/함선 (공화국)/베나터 1급 은하 구축함.webp",
            "set": "ship",
            "type": "venator",
            "points": 90,
            "faction": "republic",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "fleet-command": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["clone", "jedi", "comms"]
        },
        {
            "id": 4065,
            "title": "베나터 2급 은하 구축함",
            "image": "resources/함선 카드/함선 (공화국)/베나터 2급 은하 구축함.webp",
            "set": "ship",
            "type": "venator",
            "points": 100,
            "faction": "republic",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            },
            "traits": ["clone", "bombard"]
        },
        {
            "id": 4202,
            "title": "빅토리 1급 은하 구축함",
            "image": "resources/함선 카드/함선 (공화국)/빅토리 1급 은하 구축함.webp",
            "set": "ship",
            "type": "victory-class-star-destroyer",
            "points": 73,
            "faction": "republic",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "ordnance-2": null
            },
            "traits": ["clone"],
            "version": "1.6.0"
        },
        {
            "id": 4001,
            "title": "하드셀 급 전투형 개수함",
            "image": "resources/함선 카드/함선 (분리주의)/하드셀 급 전투형 개수함.webp",
            "set": "ship",
            "type": "hardcell",
            "points": 50,
            "faction": "separatist",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "offensive-retrofit": null,
                "defensive-retrofit": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid", "transport"],
            "version": "1.6.0"
        },
        {
            "id": 4002,
            "title": "하드셀 급 수송선",
            "image": "resources/함선 카드/함선 (분리주의)/하드셀 급 수송선.webp",
            "set": "ship",
            "type": "hardcell",
            "points": 47,
            "faction": "separatist",
            "size": "small",
            "upgrades": {
                "commander": null,
                "officer": null,
                "officer-2": null,
                "support-team": null,
                "fleet-support": null,
                "title": null
            },
            "traits" : ["droid", "transport"]
        },
        {
            "id": 4003,
            "title": "뮤니피센트 급 통신 프리깃",
            "image": "resources/함선 카드/함선 (분리주의)/뮤니피센트 급 통신 프리깃.webp",
            "set": "ship",
            "type": "munificent",
            "points": 70,
            "faction": "separatist",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "offensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid", "bombard", "comms"]
        },
        {
            "id": 4004,
            "title": "뮤니피센트 급 은하 프리깃",
            "image": "resources/함선 카드/함선 (분리주의)/뮤니피센트 급 은하 프리깃.webp",
            "set": "ship",
            "type": "munificent",
            "points": 73,
            "faction": "separatist",
            "size": "medium",
            "upgrades": {
                "commander": null,
                "officer": null,
                "support-team": null,
                "defensive-retrofit": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid", "bombard", "transport"]
        },
        {
            "id": 4059,
            "title": "프로비던스 급 모함",
            "image": "resources/함선 카드/함선 (분리주의)/프로비던스 급 모함.webp",
            "set": "ship",
            "type": "providence",
            "points": 102,
            "faction": "separatist",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "defensive-retrofit": null,
                "fleet-command": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "ion-cannons": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid", "comms", "transport"],
            "version": "1.6.0"
        },
        {
            "id": 4058,
            "title": "프로비던스 급 드레드노트",
            "image": "resources/함선 카드/함선 (분리주의)/프로비던스 급 드레드노트.webp",
            "set": "ship",
            "type": "providence",
            "points": 97,
            "faction": "separatist",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "ion-cannons": null,
                "turbolasers": null,
                "turbolasers-2": null,
                "title": null
            },
            "traits" : ["droid", "bombard", "transport"],
            "version": "1.6.0"
        },
        {
            "id": 4060,
            "title": "리큐센트 급 경 구축함",
            "image": "resources/함선 카드/함선 (분리주의)/리큐센트 급 경 구축함.webp",
            "set": "ship",
            "type": "recusant",
            "points": 85,
            "faction": "separatist",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "ordnance": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid"]
        },
        {
            "id": 4061,
            "title": "리큐센트 급 지원 구축함",
            "image": "resources/함선 카드/함선 (분리주의)/리큐센트 급 지원 구축함.webp",
            "set": "ship",
            "type": "recusant",
            "points": 90,
            "faction": "separatist",
            "size": "large",
            "upgrades": {
                "commander": null,
                "officer": null,
                "weapons-team": null,
                "offensive-retrofit": null,
                "offensive-retrofit-2": null,
                "turbolasers": null,
                "title": null
            },
            "traits" : ["droid"]
        },
        {
            "id": 4203,
            "title": "고잔티 급 순양함",
            "image": "resources/함선 카드/함선 (분리주의)/고잔티 급 순양함.webp",
            "set": "ship",
            "type": "gozanti",
            "points": 24,
            "faction": "separatist",
            "size": "small",
            "upgrades": {
                "officer": null,
                "weapons-team": null,
                "ion-cannons": null
            },
            "traits" : ["droid"],
            "version": "1.6.0"
        }
    ],
    "squadron": [
        {
            "id": 1345,
            "title": "빅스 다크라이터",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/빅스 다크라이터.webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 19,
            "faction": "rebel",
            "keywords": ["폭격기", "호위"],
            "unique": true
        },
        {
            "id": 1351,
            "title": "코란 혼",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/코란 혼.webp",
            "set": "squadron",
            "type": "e-wing",
            "points": 22,
            "faction": "rebel",
            "keywords": ["폭격기", "로그", "저격"],
            "unique": true
        },
        {
            "id": 1352,
            "title": "대거 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/대거 비행대.webp",
            "set": "squadron",
            "type": "b-wing",
            "points": 15,
            "faction": "rebel",
            "keywords": ["폭격기", "군집"],
            "unique": true
        },
        {
            "id": 1260,
            "title": "대쉬 렌더",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/대쉬 렌더.webp",
            "set": "squadron",
            "type": "yt-2400",
            "points": 24,
            "faction": "rebel",
            "keywords": ["폭격기", "로그"],
            "unique": true
        },
        {
            "id": 1133,
            "title": "″더치″ 반더",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/″더치″ 반더.webp",
            "set": "squadron",
            "type": "y-wing",
            "points": 16,
            "faction": "rebel",
            "keywords": ["폭격기", "육중"],
            "unique": true
        },
        {
            "id": 6000,
            "title": "펜 라우",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/펜 라우.webp",
            "set": "squadron",
            "type": "mandalorian-gauntlet-fighter",
            "points": 24,
            "faction": "rebel",
            "keywords": ["습격", "호위"],
            "unique": true
        },
        {
            "id": 1355,
            "title": "황금 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/황금 비행대.webp",
            "set": "squadron",
            "type": "y-wing",
            "points": 12,
            "faction": "rebel",
            "keywords": ["폭격기"],
            "unique": true
        },
        {
            "id": 1356,
            "title": "녹색 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/녹색 비행대.webp",
            "set": "squadron",
            "type": "a-wing",
            "points": 12,
            "faction": "rebel",
            "keywords": ["폭격기", "역습"],
            "unique": true
        },
        {
            "id": 1258,
            "title": "한 솔로",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/한 솔로.webp",
            "set": "squadron",
            "type": "yt-1300",
            "points": 26,
            "faction": "rebel",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 1357,
            "title": "헤라 신둘라 (고스트)",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/헤라 신둘라 (고스트).webp",
            "set": "squadron",
            "type": "vcx-100-freighter",
            "points": 28,
            "faction": "rebel",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 4206,
            "title": "헤라 신둘라 (X윙)",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/헤라 신둘라 (X윙 스쿼드론).webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 23,
            "faction": "rebel",
            "keywords": ["회피", "폭격기"],
            "unique": true
        },
        {
            "id": 1259,
            "title": "잔 오스",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/잔 오스.webp",
            "set": "squadron",
            "type": "hwk-290",
            "points": 19,
            "faction": "rebel",
            "keywords": ["역습", "첩보"],
            "unique": true
        },
        {
            "id": 1430,
            "title": "케이넌 제러스",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/케이넌 제러스.webp",
            "set": "squadron",
            "type": "hwk-290",
            "points": 19,
            "faction": "rebel",
            "keywords": ["습격", "은폐", "로그"],
            "unique": true
        },
        {
            "id": 1358,
            "title": "켓수 온요",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/켓수 온요.webp",
            "set": "squadron",
            "type": "lancer-pursuit-craft",
            "points": 22,
            "faction": "rebel",
            "keywords": ["폭격기","돌파", "로그"],
            "unique": true
        },
        {
            "id": 1134,
            "title": "키얀 팔랜더",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/키얀 팔랜더.webp",
            "set": "squadron",
            "type": "b-wing",
            "points": 18,
            "faction": "rebel",
            "keywords": ["폭격기"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1431,
            "title": "란도 칼리시안",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/란도 칼리시안.webp",
            "set": "squadron",
            "type": "yt-1300",
            "points": 24,
            "faction": "rebel",
            "keywords": ["돌파", "로그"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1347,
            "title": "블라운트 중위",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/블라운트 중위.webp",
            "set": "squadron",
            "type": "z-95",
            "points": 14,
            "faction": "rebel",
            "keywords": ["군집"],
            "unique": true
        },
        {
            "id": 1135,
            "title": "루크 스카이워커",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/루크 스카이워커.webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 20,
            "faction": "rebel",
            "keywords": ["폭격기", "호위"],
            "unique": true
        },
        {
            "id": 1432,
            "title": "말레 후라",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/말레 후라.webp",
            "set": "squadron",
            "type": "scurrg-h-6-bomber",
            "points": 21,
            "faction": "rebel",
            "keywords": ["폭격기","돌파"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1433,
            "title": "마트 마틴",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/마트 마틴.webp",
            "set": "squadron",
            "type": "yt-2400",
            "points": 22,
            "faction": "rebel",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 1405,
            "title": "노라 웩슬리",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/노라 웩슬리.webp",
            "set": "squadron",
            "type": "y-wing",
            "points": 17,
            "faction": "rebel",
            "keywords": ["폭격기"],
            "unique": true
        },
        {
            "id": 1261,
            "title": "님",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/님.webp",
            "set": "squadron",
            "type": "scurrg-h-6-bomber",
            "points": 21,
            "faction": "rebel",
            "keywords": ["폭격기","돌파"],
            "unique": true
        },
        {
            "id": 1363,
            "title": "로그 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/로그 비행대.webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 14,
            "faction": "rebel",
            "keywords": ["폭격기", "로그"],
            "unique": true
        },
        {
            "id": 1365,
            "title": "샤라 베이",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/샤라 베이.webp",
            "set": "squadron",
            "type": "a-wing",
            "points": 17,
            "faction": "rebel",
            "keywords": ["역습"],
            "unique": true
        },
        {
            "id": 1367,
            "title": "텐 넘브",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/텐 넘브.webp",
            "set": "squadron",
            "type": "b-wing",
            "points": 19,
            "faction": "rebel",
            "keywords": ["폭격기"],
            "unique": true
        },
        {
            "id": 1136,
            "title": "타이쵸 첼추",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/타이쵸 첼추.webp",
            "set": "squadron",
            "type": "a-wing",
            "points": 16,
            "faction": "rebel",
            "keywords": ["역습"],
            "unique": true
        },
        {
            "id": 1137,
            "title": "웨지 안틸레스",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/웨지 안틸레스.webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 19,
            "faction": "rebel",
            "keywords": ["폭격기", "호위"],
            "unique": true
        },
        {
            "id": 1346,
            "title": "흑색 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/흑색 비행대.webp",
            "set": "squadron",
            "type": "tie-fighter",
            "points": 9,
            "faction": "imperial",
            "keywords": ["역습", "호위"],
            "unique": true
        },
        {
            "id": 1253,
            "title": "보바 펫",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/보바 펫.webp",
            "set": "squadron",
            "type": "firespray-31",
            "points": 24,
            "faction": "imperial",
            "keywords": ["폭격기", "로그"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1257,
            "title": "보스크",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/보스크.webp",
            "set": "squadron",
            "type": "yv-666",
            "points": 23,
            "faction": "imperial",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 1348,
            "title": "조너스 대위",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/조너스 대위.webp",
            "set": "squadron",
            "type": "tie-bomber",
            "points": 16,
            "faction": "imperial",
            "keywords": ["폭격기","돌파", "육중"],
            "unique": true
        },
        {
            "id": 1349,
            "title": "사이에나 리",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/사이에나 리.webp",
            "set": "squadron",
            "type": "tie-interceptor",
            "points": 17,
            "faction": "imperial",
            "keywords": ["역습", "군집"],
            "unique": true
        },
        {
            "id": 1350,
            "title": "젠돈 대령",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/젠돈 대령.webp",
            "set": "squadron",
            "type": "lambda-shuttle",
            "points": 23,
            "faction": "imperial",
            "keywords": ["육중", "중계"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1124,
            "title": "다스 베이더 (TIE 어드밴스드)",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/다스 베이더 (TIE 어드밴스드 스쿼드론).webp",
            "set": "squadron",
            "type": "tie-advanced",
            "points": 21,
            "faction": "imperial",
            "keywords": ["호위"],
            "unique": true
        },
        {
            "id": 4204,
            "title": "다스 베이더 (TIE 디펜더)",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/다스 베이더 (TIE 디펜더 스쿼드론).webp",
            "set": "squadron",
            "type": "tie-defender",
            "points": 25,
            "faction": "imperial",
            "keywords": ["숙달", "폭격기", "로그"],
            "unique": true
        },
        {
            "id": 1255,
            "title": "덴가",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/덴가.webp",
            "set": "squadron",
            "type": "jumpmaster-5000",
            "points": 20,
            "faction": "imperial",
            "keywords": ["첩보", "군집"],
            "unique": true
        },
        {
            "id": 1354,
            "title": "감마 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/감마 비행대.webp",
            "set": "squadron",
            "type": "tie-bomber",
            "points": 10,
            "faction": "imperial",
            "keywords": ["폭격기","돌파"],
            "unique": true
        },
        {
            "id": 1022,
            "title": "갈 색슨",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/갈 색슨.webp",
            "set": "squadron",
            "type": "mandalorian-gauntlet-fighter",
            "points": 20,
            "faction": "imperial",
            "keywords": ["습격", "로그"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1434,
            "title": "혼도 오나카",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/혼도 오나카.webp",
            "set": "squadron",
            "type": "firespray-31",
            "points": 24,
            "faction": "imperial",
            "keywords": ["폭격기","돌파", "로그"],
            "unique": true
        },
        {
            "id": 1125,
            "title": "″하울러너″",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/″하울러너″.webp",
            "set": "squadron",
            "type": "tie-fighter",
            "points": 16,
            "faction": "imperial",
            "keywords": ["군집"],
            "unique": true
        },
        {
            "id": 1254,
            "title": "IG-88",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/IG-88.webp",
            "set": "squadron",
            "type": "aggressor-assault-fighter",
            "points": 19,
            "faction": "imperial",
            "keywords": ["역습", "로그"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1435,
            "title": "IG-88B",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/IG-88B.webp",
            "set": "squadron",
            "type": "aggressor-assault-fighter",
            "points": 19,
            "faction": "imperial",
            "keywords": ["역습", "로그"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1361,
            "title": "마렉 스틸",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/마렉 스틸.webp",
            "set": "squadron",
            "type": "tie-defender",
            "points": 21,
            "faction": "imperial",
            "keywords": ["폭격기","돌파"],
            "unique": true
        },
        {
            "id": 1126,
            "title": "라이머 소령",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/라이머 소령.webp",
            "set": "squadron",
            "type": "tie-bomber",
            "points": 16,
            "faction": "imperial",
            "keywords": ["폭격기", "육중"],
            "unique": true
        },
        {
            "id": 1127,
            "title": "″모울러″ 미텔",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/″모울러″ 미텔.webp",
            "set": "squadron",
            "type": "tie-fighter",
            "points": 15,
            "faction": "imperial",
            "keywords": ["군집"],
            "unique": true
        },
        {
            "id": 1436,
            "title": "모랄로 이발",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/모랄로 이발.webp",
            "set": "squadron",
            "type": "yv-666",
            "points": 22,
            "faction": "imperial",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 1362,
            "title": "모나 키",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/모나 키.webp",
            "set": "squadron",
            "type": "vt-49-decimator",
            "points": 27,
            "faction": "imperial",
            "keywords": ["역습", "로그"],
            "unique": true
        },
        {
            "id": 1364,
            "title": "세이버 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/세이버 비행대.webp",
            "set": "squadron",
            "type": "tie-interceptor",
            "points": 12,
            "faction": "imperial",
            "keywords": ["저격", "군집"],
            "unique": true
        },
        {
            "id": 1128,
            "title": "순티르 펠",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/순티르 펠.webp",
            "set": "squadron",
            "type": "tie-interceptor",
            "points": 18,
            "faction": "imperial",
            "keywords": ["역습", "군집"],
            "unique": true
        },
        {
            "id": 1437,
            "title": "텔 트레부라",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/텔 트레부라.webp",
            "set": "squadron",
            "type": "jumpmaster-5000",
            "points": 17,
            "faction": "imperial",
            "keywords": ["돌파", "로그"],
            "unique": true
        },
        {
            "id": 1366,
            "title": "템페스트 비행대",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/템페스트 비행대.webp",
            "set": "squadron",
            "type": "tie-advanced",
            "points": 13,
            "faction": "imperial",
            "keywords": ["폭격기", "호위"],
            "unique": true
        },
        {
            "id": 1370,
            "title": "발렌 루도",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/발렌 루도.webp",
            "set": "squadron",
            "type": "tie-fighter",
            "points": 13,
            "faction": "imperial",
            "keywords": ["군집"],
            "unique": true
        },
        {
            "id": 6001,
            "title": "벌트 스케리스",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/벌트 스케리스.webp",
            "set": "squadron",
            "type": "tie-interceptor",
            "points": 18,
            "faction": "imperial",
            "keywords": ["역습", "군집"],
            "unique": true
        },
        {
            "id": 1373,
            "title": "″위스퍼″",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/″위스퍼″.webp",
            "set": "squadron",
            "type": "tie-phantom",
            "points": 18,
            "faction": "imperial",
            "keywords": ["은폐"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1375,
            "title": "제르틱 스트롬",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/제르틱 스트롬.webp",
            "set": "squadron",
            "type": "tie-advanced",
            "points": 15,
            "faction": "imperial",
            "keywords": ["호위"],
            "unique": true
        },
        {
            "id": 4041,
            "title": "아소카 타노",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/아소카 타노.webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 23,
            "faction": "republic",
            "keywords": ["숙달", "역습","돌파"],
            "unique": true
        },
        {
            "id": 4044,
            "title": "아나킨 스카이워커 (BTL-B)",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/아나킨 스카이워커 (BTL-B Y윙 스쿼드론).webp",
            "set": "squadron",
            "type": "btl-b",
            "points": 18,
            "faction": "republic",
            "keywords": ["숙달", "폭격기", "육중"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4205,
            "title": "아나킨 스카이워커 (델타-7)",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/아나킨 스카이워커 (델타-7 이텔스프라이트 스쿼드론).webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 24,
            "faction": "republic",
            "keywords": ["숙달", "역습", "회피"],
            "unique": true
        },
        {
            "id": 20250604,
            "title": "아나킨 스카이워커 (트와일라잇)",
            "image": "resources/Legacy/Legacy Wave 0/아나킨 스카이워커 (트와일라잇).webp",
            "set": "squadron",
            "type": "g9-rigger",
            "points": 24,
            "faction": "republic",
            "keywords": ["숙달", "로그", "척후"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 4038,
            "title": "″액스″",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/″액스″.webp",
            "set": "squadron",
            "type": "v-19",
            "points": 17,
            "faction": "republic",
            "keywords": ["호위", "군집"],
            "unique": true
        },
        {
            "id": 20250607,
            "title": "″파이브 세븐″",
            "image": "resources/Legacy/Legacy Wave 0/″파이브 세븐″.webp",
            "set": "squadron",
            "type": "laat-i",
            "points": 21,
            "faction": "republic",
            "keywords": ["돌파", "습격"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 4045,
            "title": "″킥백″",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/″킥백″.webp",
            "set": "squadron",
            "type": "v-19",
            "points": 16,
            "faction": "republic",
            "keywords": ["호위", "군집"],
            "unique": true
        },
        {
            "id": 4042,
            "title": "킷 피스토",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/킷 피스토.webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 24,
            "faction": "republic",
            "keywords": ["숙달", "역습", "첩보"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4039,
            "title": "루미나라 언둘리",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/루미나라 언둘리.webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 23,
            "faction": "republic",
            "keywords": ["숙달", "역습"],
            "unique": true
        },
        {
            "id": 6002,
            "title": "″매치스틱″",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/″매치스틱″.webp",
            "set": "squadron",
            "type": "btl-b",
            "points": 16,
            "faction": "republic",
            "keywords": ["폭격기", "육중"],
            "unique": true,
            "version": "1.5.4"
        },
        {
            "id": 4043,
            "title": "″오드 볼″",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/″오드 볼″.webp",
            "set": "squadron",
            "type": "arc-170",
            "points": 20,
            "faction": "republic",
            "keywords": ["폭격기", "역습"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4040,
            "title": "플로 쿤",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/플로 쿤.webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 24,
            "faction": "republic",
            "keywords": ["숙달", "역습"],
            "unique": true
        },
        {
            "id": 20250605,
            "title": "R2-D2",
            "image": "resources/Legacy/Legacy Wave 0/R2-D2.webp",
            "set": "squadron",
            "type": "g9-rigger",
            "points": 17,
            "faction": "republic",
            "keywords": ["로그"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 4046,
            "title": "박토이드 시제기",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/박토이드 시제기.webp",
            "set": "squadron",
            "type": "hyena",
            "points": 16,
            "faction": "separatist",
            "keywords": ["ai", "폭격기", "육중"],
            "unique": true
        },
        {
            "id": 20250609,
            "title": "두쿠 백작",
            "image": "resources/Legacy/Legacy Wave 0/두쿠 백작.webp",
            "set": "squadron",
            "type": "star-courier",
            "points": 21,
            "faction": "separatist",
            "keywords": ["숙달", "은폐"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 20250610,
            "title": "다스 몰",
            "image": "resources/Legacy/Legacy Wave 0/다스 몰.webp",
            "set": "squadron",
            "type": "star-courier",
            "points": 24,
            "faction": "separatist",
            "keywords": ["로그", "은폐", "회피"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 4047,
            "title": "DBS-404",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/DBS-404.webp",
            "set": "squadron",
            "type": "hyena",
            "points": 17,
            "faction": "separatist",
            "keywords": ["ai", "폭격기", "육중"],
            "unique": true
        },
        {
            "id": 4014,
            "title": "DFS-311",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/DFS-311.webp",
            "set": "squadron",
            "type": "vulture",
            "points": 16,
            "faction": "separatist",
            "keywords": ["ai", "첩보", "군집"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 20250612,
            "title": "DGS-047",
            "image": "resources/Legacy/Legacy Wave 0/DGS-047.webp",
            "set": "squadron",
            "type": "hmp-gunship",
            "points": 20,
            "faction": "separatist",
            "keywords": ["AI", "습격"],
            "unique": true,
            "legacy": true
        },
        {
            "id": 4048,
            "title": "DIS-T81",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/DIS-T81.webp",
            "set": "squadron",
            "type": "tri-fighter",
            "points": 17,
            "faction": "separatist",
            "keywords": ["ai", "역습", "저격", "군집"],
            "unique": true
        },
        {
            "id": 4049,
            "title": "그리버스 장군",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/그리버스 장군.webp",
            "set": "squadron",
            "type": "belbullab-22",
            "points": 22,
            "faction": "separatist",
            "keywords": ["중계", "장막"],
            "unique": true
        },
        {
            "id": 4037,
            "title": "하오 찰 시제기",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/하오 찰 시제기.webp",
            "set": "squadron",
            "type": "vulture",
            "points": 16,
            "faction": "separatist",
            "keywords": ["ai", "군집"],
            "unique": true
        },
        {
            "id": 6008,
            "title": "장고 펫",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/장고 펫.webp",
            "set": "squadron",
            "type": "firespray-31",
            "points": 22,
            "faction": "separatist",
            "keywords": ["폭격기","돌파", "로그"],
            "unique": true
        },
        {
            "id": 4050,
            "title": "플락-아포크 시제기",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/플락-아포크 시제기.webp",
            "set": "squadron",
            "type": "tri-fighter",
            "points": 18,
            "faction": "separatist",
            "keywords": ["ai", "역습", "군집"],
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 6003,
            "title": "왓 탐보",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/왓 탐보.webp",
            "set": "squadron",
            "type": "belbullab-22",
            "points": 18,
            "faction": "separatist",
            "keywords": ["호위", "중계", "장막"],
            "unique": true,
            "version": "1.5.4"
        },
        {
            "divider": true
        },
        {
            "id": 1129,
            "title": "A윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/A윙 스쿼드론.webp",
            "set": "squadron",
            "type": "a-wing",
            "points": 11,
            "faction": "rebel",
            "keywords": ["역습"]
        },
        {
            "id": 1130,
            "title": "B윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/B윙 스쿼드론.webp",
            "set": "squadron",
            "type": "b-wing",
            "points": 14,
            "faction": "rebel",
            "keywords": ["폭격기"]
        },
        {
            "id": 1353,
            "title": "E윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/E윙 스쿼드론.webp",
            "set": "squadron",
            "type": "e-wing",
            "points": 14,
            "faction": "rebel",
            "keywords": ["폭격기", "저격"],
            "version": "1.6.0"
        },
        {
            "id": 1267,
            "title": "HWK-290",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/HWK-290.webp",
            "set": "squadron",
            "type": "hwk-290",
            "points": 12,
            "faction": "rebel",
            "keywords": ["역습", "첩보"]
        },
        {
            "id": 1360,
            "title": "랜서 급 추격정",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/랜서 급 추격정.webp",
            "set": "squadron",
            "type": "lancer-pursuit-craft",
            "points": 14,
            "faction": "rebel",
            "keywords": ["폭격기","돌파", "로그"],
            "version": "1.6.0"
        },
        {
            "id": 1268,
            "title": "스컬그 H-6 폭격기",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/스컬그 H-6 폭격기.webp",
            "set": "squadron",
            "type": "scurrg-h-6-bomber",
            "points": 16,
            "faction": "rebel",
            "keywords": ["폭격기","돌파", "육중"]
        },
        {
            "id": 1371,
            "title": "VCX-100 화물선",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/VCX-100 화물선.webp",
            "set": "squadron",
            "type": "vcx-100-freighter",
            "points": 15,
            "faction": "rebel",
            "keywords": ["육중", "중계", "전략"]
        },
        {
            "id": 1131,
            "title": "X윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/X윙 스쿼드론.webp",
            "set": "squadron",
            "type": "x-wing",
            "points": 13,
            "faction": "rebel",
            "keywords": ["폭격기", "호위"]
        },
        {
            "id": 1132,
            "title": "Y윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/Y윙 스쿼드론.webp",
            "set": "squadron",
            "type": "y-wing",
            "points": 10,
            "faction": "rebel",
            "keywords": ["폭격기", "육중"]
        },
        {
            "id": 1265,
            "title": "YT-1300",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/YT-1300.webp",
            "set": "squadron",
            "type": "yt-1300",
            "points": 13,
            "faction": "rebel",
            "keywords": ["역습", "호위"]
        },
        {
            "id": 1266,
            "title": "YT-2400",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/YT-2400.webp",
            "set": "squadron",
            "type": "yt-2400",
            "points": 16,
            "faction": "rebel",
            "keywords": ["로그"]
        },
        {
            "id": 1374,
            "title": "Z-95 헤드헌터 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (반군)/Z-95 헤드헌터 스쿼드론.webp",
            "set": "squadron",
            "type": "z-95",
            "points": 7,
            "faction": "rebel",
            "keywords": ["군집"]
        },
        {
            "id": 1270,
            "title": "어그레서 강습 전투기",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/어그레서 강습 전투기.webp",
            "set": "squadron",
            "type": "aggressor-assault-fighter",
            "points": 15,
            "faction": "imperial",
            "keywords": ["역습", "로그"],
            "version": "1.6.0"
        },
        {
            "id": 1242,
            "title": "파이어스프레이-31",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/파이어스프레이-31.webp",
            "set": "squadron",
            "type": "firespray-31",
            "points": 18,
            "faction": "imperial",
            "keywords": ["폭격기", "로그"]
        },
        {
            "id": 1271,
            "title": "점프마스터 5000",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/점프마스터 5000.webp",
            "set": "squadron",
            "type": "jumpmaster-5000",
            "points": 12,
            "faction": "imperial",
            "keywords": ["첩보", "군집"]
        },
        {
            "id": 1359,
            "title": "람다 급 왕복정",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/람다 급 왕복정.webp",
            "set": "squadron",
            "type": "lambda-shuttle",
            "points": 15,
            "faction": "imperial",
            "keywords": ["육중", "중계", "전략"]
        },
        {
            "id": 1009,
            "title": "만달로리안 건틀렛 전투기",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/만달로리안 건틀렛 전투기.webp",
            "set": "squadron",
            "type": "mandalorian-gauntlet-fighter",
            "points": 18,
            "faction": "imperial",
            "keywords": ["습격", "로그"],
            "version": "1.6.0"
        },
        {
            "id": 1120,
            "title": "TIE 어드밴스드 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 어드밴스드 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-advanced",
            "points": 12,
            "faction": "imperial",
            "keywords": ["호위"]
        },
        {
            "id": 1121,
            "title": "TIE 폭격기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 폭격기 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-bomber",
            "points": 9,
            "faction": "imperial",
            "keywords": ["폭격기", "육중"]
        },
        {
            "id": 1368,
            "title": "TIE 디펜더 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 디펜더 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-defender",
            "points": 16,
            "faction": "imperial",
            "keywords": ["폭격기"]
        },
        {
            "id": 1122,
            "title": "TIE 전투기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 전투기 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-fighter",
            "points": 8,
            "faction": "imperial",
            "keywords": ["군집"]
        },
        {
            "id": 1123,
            "title": "TIE 요격기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 요격기 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-interceptor",
            "points": 11,
            "faction": "imperial",
            "keywords": ["역습", "군집"]
        },
        {
            "id": 1369,
            "title": "TIE 팬텀 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/TIE 팬텀 스쿼드론.webp",
            "set": "squadron",
            "type": "tie-phantom",
            "points": 14,
            "faction": "imperial",
            "keywords": ["은폐"]
        },
        {
            "id": 1372,
            "title": "VT-49 데시메이터",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/VT-49 데시메이터.webp",
            "set": "squadron",
            "type": "vt-49-decimator",
            "points": 22,
            "faction": "imperial",
            "keywords": ["역습", "육중", "로그"]
        },
        {
            "id": 1269,
            "title": "YV-666",
            "image": "resources/스쿼드론 카드/스쿼드론 (제국)/YV-666.webp",
            "set": "squadron",
            "type": "yv-666",
            "points": 15,
            "faction": "imperial",
            "keywords": ["돌파", "육중", "로그"]
        },
        {
            "id": 4010,
            "title": "ARC-170 은하전투기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/ARC-170 은하전투기 스쿼드론.webp",
            "set": "squadron",
            "type": "arc-170",
            "points": 15,
            "faction": "republic",
            "keywords": ["폭격기", "역습"]
        },
        {
            "id": 4011,
            "title": "BTL-B Y윙 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/BTL-B Y윙 스쿼드론.webp",
            "set": "squadron",
            "type": "btl-b",
            "points": 10,
            "faction": "republic",
            "keywords": ["폭격기", "육중"]
        },
        {
            "id": 4012,
            "title": "델타-7 이텔스프라이트 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/델타-7 이텔스프라이트 스쿼드론.webp",
            "set": "squadron",
            "type": "delta-7",
            "points": 17,
            "faction": "republic",
            "keywords": ["숙달", "역습", "회피"]
        },
        {
            "id": 20250603,
            "title": "G9 리거 급 화물선",
            "image": "resources/Legacy/Legacy Wave 0/G9 리거 급 화물선.webp",
            "set": "squadron",
            "type": "g9-rigger",
            "points": 14,
            "faction": "republic",
            "keywords": ["로그"],
            "legacy": true
        },
        {
            "id": 20250604,
            "title": "LAAT/i 건쉽",
            "image": "resources/Legacy/Legacy Wave 0/LAAT_i 건쉽.webp",
            "set": "squadron",
            "type": "laat-i",
            "points": 14,
            "faction": "republic",
            "keywords": ["돌파", "습격", "육중"],
            "legacy": true
        },
        {
            "id": 4013,
            "title": "V-19 토렌트 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (공화국)/V-19 토렌트 스쿼드론.webp",
            "set": "squadron",
            "type": "v-19",
            "points": 12,
            "faction": "republic",
            "keywords": ["호위", "군집"]
        },
        {
            "id": 4015,
            "title": "벨불라브-22 은하전투기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/벨불라브-22 은하전투기 스쿼드론.webp",
            "set": "squadron",
            "type": "belbullab-22",
            "points": 15,
            "faction": "separatist",
            "keywords": ["중계", "장막"]
        },
        {
            "id": 4016,
            "title": "드로이드 트라이 전투기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/드로이드 트라이 전투기 스쿼드론.webp",
            "set": "squadron",
            "type": "tri-fighter",
            "points": 11,
            "faction": "separatist",
            "keywords": ["ai", "역습", "군집"]
        },
        {
            "id": 20250611,
            "title": "HMP 드로이드 건쉽",
            "image": "resources/Legacy/Legacy Wave 0/HMP 드로이드 건쉽.webp",
            "set": "squadron",
            "type": "hmp-gunship",
            "points": 13,
            "faction": "separatist",
            "keywords": ["AI", "습격", "육중"],
            "legacy": true
        },
        {
            "id": 4017,
            "title": "하이에나 급 드로이드 폭격기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/하이에나 급 드로이드 폭격기 스쿼드론.webp",
            "set": "squadron",
            "type": "hyena",
            "points": 11,
            "faction": "separatist",
            "keywords": ["ai", "폭격기", "육중"]
        },
        {
            "id": 20250608,
            "title": "스타 커리어",
            "image": "resources/Legacy/Legacy Wave 0/스타 커리어.webp",
            "set": "squadron",
            "type": "star-courier",
            "points": 17,
            "faction": "separatist",
            "keywords": ["로그", "첩보"],
            "legacy": true
        },
        {
            "id": 4018,
            "title": "벌처 급 드로이드 전투기 스쿼드론",
            "image": "resources/스쿼드론 카드/스쿼드론 (분리주의)/벌처 급 드로이드 전투기 스쿼드론.webp",
            "set": "squadron",
            "type": "vulture",
            "points": 8,
            "faction": "separatist",
            "keywords": ["ai", "군집"]
        }
    ],
    "assault": [
        {
            "id": 1144,
            "title": "포격 증강",
            "image": "resources/목표 카드/목표 (공격)/포격 증강.webp",
            "set": "assault"
        },
        {
            "id": 1376,
            "title": "봉쇄선 돌파",
            "image": "resources/목표 카드/목표 (공격)/봉쇄선 돌파.webp",
            "set": "assault"
        },
        {
            "id": 1377,
            "title": "근거리 정보 탐지",
            "image": "resources/목표 카드/목표 (공격)/근거리 정보 탐지.webp",
            "set": "assault"
        },
        {
            "id": 1500,
            "title": "이온 폭풍",
            "image": "resources/목표 카드/목표 (공격)/이온 폭풍.webp",
            "set": "assault"
        },
        {
            "id": 1501,
            "title": "파멸의 표식",
            "image": "resources/목표 카드/목표 (공격)/파멸의 표식.webp",
            "set": "assault"
        },
        {
            "id": 1145,
            "title": "지명 수배자",
            "image": "resources/목표 카드/목표 (공격)/지명 수배자.webp",
            "set": "assault"
        },
        {
            "id": 1146,
            "title": "개시 사격",
            "image": "resources/목표 카드/목표 (공격)/개시 사격.webp",
            "set": "assault"
        },
        {
            "id": 1147,
            "title": "정밀 타격",
            "image": "resources/목표 카드/목표 (공격)/정밀 타격.webp",
            "set": "assault"
        },
        {
            "id": 1502,
            "title": "균열 공격",
            "image": "resources/목표 카드/목표 (공격)/균열 공격.webp",
            "set": "assault"
        },
        {
            "id": 1378,
            "title": "우주 정거장 공격",
            "image": "resources/목표 카드/목표 (공격)/우주 정거장 공격.webp",
            "set": "assault"
        },
        {
            "id": 1503,
            "title": "기습 공격",
            "image": "resources/목표 카드/목표 (공격)/기습 공격.webp",
            "set": "assault"
        },
        {
            "id": 1379,
            "title": "조준용 표지",
            "image": "resources/목표 카드/목표 (공격)/조준용 표지.webp",
            "set": "assault"
        }
    ],
    "defense": [
        {
            "id": 1508,
            "title": "폐광산 시설",
            "image": "resources/목표 카드/목표 (수비)/폐광산 시설.webp",
            "set": "defense"
        },
        {
            "id": 1509,
            "title": "소행성대 전술",
            "image": "resources/목표 카드/목표 (수비)/소행성대 전술.webp",
            "set": "defense"
        },
        {
            "id": 1387,
            "title": "VIP 생포",
            "image": "resources/목표 카드/목표 (수비)/VIP 생포.webp",
            "set": "defense"
        },
        {
            "id": 1148,
            "title": "전초 기지 경쟁",
            "image": "resources/목표 카드/목표 (수비)/전초 기지 경쟁.webp",
            "set": "defense"
        },
        {
            "id": 1384,
            "title": "전투기 매복",
            "image": "resources/목표 카드/목표 (수비)/전투기 매복.webp",
            "set": "defense"
        },
        {
            "id": 1149,
            "title": "화력 유도",
            "image": "resources/목표 카드/목표 (수비)/화력 유도.webp",
            "set": "defense"
        },
        {
            "id": 1150,
            "title": "함대 매복",
            "image": "resources/목표 카드/목표 (수비)/함대 매복.webp",
            "set": "defense"
        },
        {
            "id": 1510,
            "title": "현존함대",
            "image": "resources/목표 카드/목표 (수비)/현존함대.webp",
            "set": "defense"
        },
        {
            "id": 1151,
            "title": "초공간 강습",
            "image": "resources/목표 카드/목표 (수비)/초공간 강습.webp",
            "set": "defense"
        },
        {
            "id": 1385,
            "title": "교란 장벽",
            "image": "resources/목표 카드/목표 (수비)/교란 장벽.webp",
            "set": "defense"
        },
        {
            "id": 1386,
            "title": "행성 이온포",
            "image": "resources/목표 카드/목표 (수비)/행성 이온포.webp",
            "set": "defense"
        },
        {
            "id": 1511,
            "title": "균열 매복",
            "image": "resources/목표 카드/목표 (수비)/균열 매복.webp",
            "set": "defense"
        }
    ],
    "navigation": [
        {
            "id": 1152,
            "title": "위험 지역",
            "image": "resources/목표 카드/목표 (항해)/위험 지역.webp",
            "set": "navigation"
        },
        {
            "id": 1504,
            "title": "저주받은 우주 정거장",
            "image": "resources/목표 카드/목표 (항해)/저주받은 우주 정거장.webp",
            "set": "navigation"
        },
        {
            "id": 1505,
            "title": "초공간 이주",
            "image": "resources/목표 카드/목표 (항해)/초공간 이주.webp",
            "set": "navigation"
        },
        {
            "id": 1506,
            "title": "들끓는 우주",
            "image": "resources/목표 카드/목표 (항해)/들끓는 우주.webp",
            "set": "navigation"
        },
        {
            "id": 1153,
            "title": "정보 수집",
            "image": "resources/목표 카드/목표 (항해)/정보 수집.webp",
            "set": "navigation"
        },
        {
            "id": 1154,
            "title": "기뢰 부설 지역",
            "image": "resources/목표 카드/목표 (항해)/기뢰 부설 지역.webp",
            "set": "navigation"
        },
        {
            "id": 1380,
            "title": "항행 위협",
            "image": "resources/목표 카드/목표 (항해)/항행 위협.webp",
            "set": "navigation"
        },
        {
            "id": 1381,
            "title": "구호품 보급",
            "image": "resources/목표 카드/목표 (항해)/구호품 보급.webp",
            "set": "navigation"
        },
        {
            "id": 1382,
            "title": "센서 망",
            "image": "resources/목표 카드/목표 (항해)/센서 망.webp",
            "set": "navigation"
        },
        {
            "id": 1383,
            "title": "태양 코로나",
            "image": "resources/목표 카드/목표 (항해)/태양 코로나.webp",
            "set": "navigation"
        },
        {
            "id": 1155,
            "title": "지리적 우위",
            "image": "resources/목표 카드/목표 (항해)/지리적 우위.webp",
            "set": "navigation"
        },
        {
            "id": 1507,
            "title": "불안정한 광산",
            "image": "resources/목표 카드/목표 (항해)/불안정한 광산.webp",
            "set": "navigation"
        }
    ],
    "commander": [
        {
            "id": 1178,
            "title": "아크바 제독",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/아크바 제독.webp",
            "set": "commander",
            "points": 38,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1283,
            "title": "라더스 제독",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/라더스 제독.webp",
            "set": "commander",
            "points": 26,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 6004,
            "title": "아나킨 스카이워커",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/아나킨 스카이워커.webp",
            "set": "commander",
            "points": 27,
            "faction": "republic",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1392,
            "title": "사토 사령관",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/사토 사령관.webp",
            "set": "commander",
            "points": 27,
            "faction": "rebel",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 1071,
            "title": "감 벨 이블리스",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/감 벨 이블리스.webp",
            "set": "commander",
            "points": 25,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1305,
            "title": "크라켄 장군",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/크라켄 장군.webp",
            "set": "commander",
            "points": 26,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1072,
            "title": "도돈나 장군",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/도돈나 장군.webp",
            "set": "commander",
            "points": 20,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 6005,
            "title": "드레이븐 장군",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/드레이븐 장군.webp",
            "set": "commander",
            "points": 20,
            "faction": "rebel",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1306,
            "title": "마딘 장군",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/마딘 장군.webp",
            "set": "commander",
            "points": 30,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1181,
            "title": "라이칸 장군",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/라이칸 장군.webp",
            "set": "commander",
            "points": 34,
            "faction": "rebel",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 20250601,
            "title": "키아디 문디",
            "image": "resources/Legacy/Legacy Wave 0/키아디 문디.webp",
            "set": "commander",
            "points": 30,
            "faction": "republic",
            "unique": true,
            "legacy": true
        },
        {
            "id": 1447,
            "title": "크리스타 아가테",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/크리스타 아가테.webp",
            "set": "commander",
            "points": 25,
            "faction": "rebel",
            "unique": true,
            "version": "1.5.4"
        },
        {
            "id": 2785,
            "title": "레아 오르가나",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/레아 오르가나.webp",
            "set": "commander",
            "points": 28,
            "faction": "rebel",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 1074,
            "title": "몬 모스마",
            "image": "resources/업그레이드 카드/함장/함장 (반군)/몬 모스마.webp",
            "set": "commander",
            "points": 27,
            "faction": "rebel",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 1304,
            "title": "콘스탄틴 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/콘스탄틴 제독.webp",
            "set": "commander",
            "points": 23,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1069,
            "title": "모티 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/모티 제독.webp",
            "set": "commander",
            "points": 24,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1179,
            "title": "오젤 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/오젤 제독.webp",
            "set": "commander",
            "points": 20,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1061,
            "title": "피에트 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/피에트 제독.webp",
            "set": "commander",
            "points": 22,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1070,
            "title": "스크리드 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/스크리드 제독.webp",
            "set": "commander",
            "points": 24,
            "faction": "imperial",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 2670,
            "title": "슬론 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/슬론 제독.webp",
            "set": "commander",
            "points": 24,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1180,
            "title": "다스 베이더",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/다스 베이더.webp",
            "set": "commander",
            "points": 34,
            "faction": "imperial",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1182,
            "title": "팰퍼틴 황제",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/팰퍼틴 황제.webp",
            "set": "commander",
            "points": 35,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1441,
            "title": "로모디 장군",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/로모디 장군.webp",
            "set": "commander",
            "points": 28,
            "faction": "imperial",
            "unique": true,
            "version": "1.5.4"
        },
        {
            "id": 1303,
            "title": "타게 장군",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/타게 장군.webp",
            "set": "commander",
            "points": 25,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1284,
            "title": "쓰론 대 제독",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/쓰론 대 제독.webp",
            "set": "commander",
            "points": 32,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1073,
            "title": "대 모프 타킨",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/대 모프 타킨.webp",
            "set": "commander",
            "points": 28,
            "faction": "imperial",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 1400,
            "title": "모프 제제로드",
            "image": "resources/업그레이드 카드/함장/함장 (제국)/모프 제제로드.webp",
            "set": "commander",
            "points": 23,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 4067,
            "title": "타킨 제독",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/타킨 제독.webp",
            "set": "commander",
            "points": 30,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4069,
            "title": "율라렌 제독",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/율라렌 제독.webp",
            "set": "commander",
            "points": 24,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4020,
            "title": "베일 오르가나",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/베일 오르가나.webp",
            "set": "commander",
            "points": 28,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4083,
            "title": "루미나라 언둘리",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/루미나라 언둘리.webp",
            "set": "commander",
            "points": 25,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4022,
            "title": "오비완 케노비",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/오비완 케노비.webp",
            "set": "commander",
            "points": 22,
            "faction": "republic",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4089,
            "title": "플로 쿤",
            "image": "resources/업그레이드 카드/함장/함장 (공화국)/플로 쿤.webp",
            "set": "commander",
            "points": 26,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4068,
            "title": "트렌치 제독",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/트렌치 제독.webp",
            "set": "commander",
            "points": 32,
            "faction": "separatist",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4035,
            "title": "두쿠 백작",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/두쿠 백작.webp",
            "set": "commander",
            "points": 27,
            "faction": "separatist",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 20250602,
            "title": "돌테이 도파인",
            "image": "resources/Legacy/Legacy Wave 0/돌테이 도파인.webp",
            "set": "commander",
            "points": 28,
            "faction": "separatist",
            "unique": true,
            "legacy": true
        },
        {
            "id": 4077,
            "title": "그리버스 장군",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/그리버스 장군.webp",
            "set": "commander",
            "points": 20,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 4021,
            "title": "크라켄",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/크라켄.webp",
            "set": "commander",
            "points": 30,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 4084,
            "title": "마 툭",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/마 툭.webp",
            "set": "commander",
            "points": 28,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 4097,
            "title": "TF-1726",
            "image": "resources/업그레이드 카드/함장/함장 (분리주의)/TF-1726.webp",
            "set": "commander",
            "points": 26,
            "faction": "separatist",
            "unique": true
        }
    ],
    "officer": [
        {
            "id": 1075,
            "title": "아다르 탈론",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/아다르 탈론.webp",
            "set": "officer",
            "points": 10,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 4066,
            "title": "아디 갈리아",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/아디 갈리아.webp",
            "set": "officer",
            "points": 3,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 1076,
            "title": "키라노 제독",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/키라노 제독.webp",
            "set": "officer",
            "points": 10,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1205,
            "title": "몬테페라트 제독",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/몬테페라트 제독.webp",
            "set": "officer",
            "points": 5,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1066,
            "title": "오젤 제독",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/오젤 제독.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1308,
            "title": "타이터스 제독",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/타이터스 제독.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1307,
            "title": "칼러스 요원",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/칼러스 요원.webp",
            "set": "officer",
            "points": 3,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1388,
            "title": "아소카 타노",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/아소카 타노.webp",
            "set": "officer",
            "points": 2,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 4070,
            "title": "아소카 타노",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/아소카 타노.webp",
            "set": "officer",
            "points": 6,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 6006,
            "title": "아사즈 벤트리스",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/아사즈 벤트리스.webp",
            "set": "officer",
            "points": 2,
            "faction": "separatist",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 4103,
            "title": "베리스 오피",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/베리스 오피.webp",
            "set": "officer",
            "points": 6,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 1012,
            "title": "브룬손 대위",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/브룬손 대위.webp",
            "set": "officer",
            "points": 9,
            "faction": "imperial",
            "unique": true,
            "version": "1.5.0"
        },
        {
            "id": 1206,
            "title": "니다 대령",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/니다 대령.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1407,
            "title": "렉스 대위",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/렉스 대위.webp",
            "set": "officer",
            "points": 5,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 4024,
            "title": "잭 클론 대위",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/잭 클론 대위.webp",
            "set": "officer",
            "points": 5,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4073,
            "title": "실버 클론 대위",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/실버 클론 대위.webp",
            "set": "officer",
            "points": 4,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 4072,
            "title": "울프 클론 사령관",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/울프 클론 사령관.webp",
            "set": "officer",
            "points": 6,
            "faction": "republic",
            "unique": true
        },
        {
            "id": 1309,
            "title": "아레스코 교장",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/아레스코 교장.webp",
            "set": "officer",
            "points": 7,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1460,
            "title": "벡 중령",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/벡 중령.webp",
            "set": "officer",
            "points": 3,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1067,
            "title": "게런트 중령",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/게런트 중령.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1409,
            "title": "반토 중령",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/반토 중령.webp",
            "set": "officer",
            "points": 7,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1410,
            "title": "월다 중령",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/월다 중령.webp",
            "set": "officer",
            "points": 4,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1062,
            "title": "다스 베이더",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/다스 베이더.webp",
            "set": "officer",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 1078,
            "title": "이사드 국장",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/이사드 국장.webp",
            "set": "officer",
            "points": 3,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1063,
            "title": "크레닉 국장",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/크레닉 국장.webp",
            "set": "officer",
            "points": 8,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1064,
            "title": "팰퍼틴 황제",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/팰퍼틴 황제.webp",
            "set": "officer",
            "points": 3,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1408,
            "title": "에즈라 브리저",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/에즈라 브리저.webp",
            "set": "officer",
            "points": 3,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1016,
            "title": "드레이븐 장군",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/드레이븐 장군.webp",
            "set": "officer",
            "points": 3,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 6007,
            "title": "프라이스 총독",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/프라이스 총독.webp",
            "set": "officer",
            "points": 6,
            "faction": "imperial",
            "unique": true,
            "version": "1.6.0"
        },
        {
            "id": 2791,
            "title": "혼도 오나카",
            "image": "resources/업그레이드 카드/장교/혼도 오나카.webp",
            "set": "officer",
            "points": 2,
            "unique": true
        },
        {
            "id": 1512,
            "title": "아이덴 버시오",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/아이덴 버시오.webp",
            "set": "officer",
            "points": 6,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1014,
            "title": "고란 교관",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/고란 교관.webp",
            "set": "officer",
            "points": 7,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1445,
            "title": "크리스타 아가테",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/크리스타 아가테.webp",
            "set": "officer",
            "points": 5,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1207,
            "title": "란도 칼리시안",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/란도 칼리시안.webp",
            "set": "officer",
            "points": 4,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1080,
            "title": "레아 오르가나",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/레아 오르가나.webp",
            "set": "officer",
            "points": 3,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1065,
            "title": "리라 웨섹스",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/리라 웨섹스.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1398,
            "title": "달린 소령",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/달린 소령.webp",
            "set": "officer",
            "points": 7,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1399,
            "title": "투아 장관",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/투아 장관.webp",
            "set": "officer",
            "points": 2,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 4088,
            "title": "파셀 아르젠테",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/파셀 아르젠테.webp",
            "set": "officer",
            "points": 6,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 1081,
            "title": "레이무스 안틸레스",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/레이무스 안틸레스.webp",
            "set": "officer",
            "points": 7,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1452,
            "title": "리바 디메슨",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/리바 디메슨.webp",
            "set": "officer",
            "points": 4,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 4057,
            "title": "룬 하코",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/룬 하코.webp",
            "set": "officer",
            "points": 4,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 1513,
            "title": "사빈 렌",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/사빈 렌.webp",
            "set": "officer",
            "points": 4,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 4092,
            "title": "산 힐",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/산 힐.webp",
            "set": "officer",
            "points": 3,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 4093,
            "title": "슈 마이",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/슈 마이.webp",
            "set": "officer",
            "points": 4,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 1313,
            "title": "토린 파",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/토린 파.webp",
            "set": "officer",
            "points": 7,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1008,
            "title": "그린트 감독관",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/그린트 감독관.webp",
            "set": "officer",
            "points": 5,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 2672,
            "title": "대 심문관",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/대 심문관.webp",
            "set": "officer",
            "points": 4,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 4098,
            "title": "TI-99",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/TI-99.webp",
            "set": "officer",
            "points": 4,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 4099,
            "title": "틱케스",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/틱케스.webp",
            "set": "officer",
            "points": 2,
            "faction": "separatist",
            "unique": true
        },
        {
            "id": 1208,
            "title": "왈렉스 블리섹스",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/왈렉스 블리섹스.webp",
            "set": "officer",
            "points": 5,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 4023,
            "title": "왓 탐보",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/왓 탐보.webp",
            "set": "officer",
            "points": 9,
            "faction": "separatist",
            "unique": true,
            "version": "1.5.4"
        },
        {
            "id": 1459,
            "title": "웨지 안틸레스",
            "image": "resources/업그레이드 카드/장교/장교 (반군)/웨지 안틸레스.webp",
            "set": "officer",
            "points": 4,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1084,
            "title": "월프 율라렌",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/월프 율라렌.webp",
            "set": "officer",
            "points": 7,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 1311,
            "title": "항로 해석 장교",
            "image": "resources/업그레이드 카드/장교/항로 해석 장교.webp",
            "set": "officer",
            "points":2
        },
        {
            "id": 4026,
            "title": "클론 항해 장교",
            "image": "resources/업그레이드 카드/장교/장교 (공화국)/클론 항해 장교.webp",
            "set": "officer",
            "points": 4,
            "faction": "republic"
        },
        {
            "id": 1393,
            "title": "피해 대책 장교",
            "image": "resources/업그레이드 카드/장교/피해 대책 장교.webp",
            "set": "officer",
            "points": 3,
            "version": "1.6.0"
        },
        {
            "id": 1077,
            "title": "방어 연락 담당자",
            "image": "resources/업그레이드 카드/장교/방어 연락 담당자.webp",
            "set": "officer",
            "points":3
        },
        {
            "id": 1225,
            "title": "책임 기술자",
            "image": "resources/업그레이드 카드/장교/책임 기술자.webp",
            "set": "officer",
            "points":6
        },
        {
            "id": 1411,
            "title": "방어막 전문 기술자",
            "image": "resources/업그레이드 카드/장교/방어막 전문 기술자.webp",
            "set": "officer",
            "points":5
        },
        {
            "id": 1310,
            "title": "비행대 사령관",
            "image": "resources/업그레이드 카드/장교/비행대 사령관.webp",
            "set": "officer",
            "points":3
        },
        {
            "id": 1079,
            "title": "첩보 장교",
            "image": "resources/업그레이드 카드/장교/첩보 장교.webp",
            "set": "officer",
            "points":7
        },
        {
            "id": 1228,
            "title": "항해 장교",
            "image": "resources/업그레이드 카드/장교/항해 장교.webp",
            "set": "officer",
            "points":6
        },
        {
            "id": 1312,
            "title": "숙련된 일등 장교",
            "image": "resources/업그레이드 카드/장교/숙련된 일등 장교.webp",
            "set": "officer",
            "points":1
        },
        {
            "id": 1209,
            "title": "지원 장교",
            "image": "resources/업그레이드 카드/장교/지원 장교.webp",
            "set": "officer",
            "points": 2,
            "version": "1.6.0"
        },
        {
            "id": 4025,
            "title": "T-시리즈 전술 드로이드",
            "image": "resources/업그레이드 카드/장교/장교 (분리주의)/T-시리즈 전술 드로이드.webp",
            "set": "officer",
            "points": 4,
            "faction": "separatist"
        },
        {
            "id": 1227,
            "title": "전술 전문가",
            "image": "resources/업그레이드 카드/장교/전술 전문가.webp",
            "set": "officer",
            "points":6
        },
        {
            "id": 1082,
            "title": "베테랑 대위",
            "image": "resources/업그레이드 카드/장교/베테랑 대위.webp",
            "set": "officer",
            "points": 2,
            "version": "1.6.0"
        },
        {
            "id": 1083,
            "title": "무기 연락 담당자",
            "image": "resources/업그레이드 카드/장교/무기 연락 담당자.webp",
            "set": "officer",
            "points":3
        },
        {
            "id": 1226,
            "title": "비행 지휘관",
            "image": "resources/업그레이드 카드/장교/비행 지휘관.webp",
            "set": "officer",
            "points":6
        }
    ],
    "support-team": [
        {
            "id": 1412,
            "title": "보조 방어막 담당",
            "image": "resources/업그레이드 카드/지원 담당/보조 방어막 담당.webp",
            "set": "support-team",
            "points":3
        },
        {
            "id": 4029,
            "title": "예비 전투 드로이드",
            "image": "resources/업그레이드 카드/지원 담당/예비 전투 드로이드.webp",
            "set": "support-team",
            "points": 4,
            "faction": "separatist",
            "required": ["droid"]
        },
        {
            "id": 1088,
            "title": "엔진 기술자",
            "image": "resources/업그레이드 카드/지원 담당/엔진 기술자.webp",
            "set": "support-team",
            "points":8
        },
        {
            "id": 1089,
            "title": "수리 담당",
            "image": "resources/업그레이드 카드/지원 담당/수리 담당.webp",
            "set": "support-team",
            "points": 3,
            "version": "1.6.0"
        },
        {
            "id": 1316,
            "title": "전투기 합동 담당",
            "image": "resources/업그레이드 카드/지원 담당/전투기 합동 담당.webp",
            "set": "support-team",
            "points":3
        },
        {
            "id": 1317,
            "title": "의료 담당",
            "image": "resources/업그레이드 카드/지원 담당/의료 담당.webp",
            "set": "support-team",
            "points":1
        },
        {
            "id": 1090,
            "title": "항해 담당",
            "image": "resources/업그레이드 카드/지원 담당/항해 담당.webp",
            "set": "support-team",
            "points":4
        },
        {
            "id": 1262,
            "title": "방어막 투사 전문가",
            "image": "resources/업그레이드 카드/지원 담당/방어막 투사 전문가.webp",
            "set": "support-team",
            "points":6
        }
    ],
    "fleet-command": [
        {
            "id": 1390,
            "title": "전투기는 나를 따르라!",
            "image": "resources/업그레이드 카드/함대 명령/전투기는 나를 따르라!.webp",
            "set": "fleet-command",
            "points": 5,
            "unique": true
        },
        {
            "id": 1395,
            "title": "포위 대형으로!",
            "image": "resources/업그레이드 카드/함대 명령/포위 대형으로!.webp",
            "set": "fleet-command",
            "points": 5,
            "unique": true
        },
        {
            "id": 4079,
            "title": "불시착",
            "image": "resources/업그레이드 카드/함대 명령/불시착.webp",
            "set": "fleet-command",
            "points": 3,
            "unique": true,
            "faction": ["republic", "separatist"]
        },
        {
            "id": 1282,
            "title": "화력을 강화하라!",
            "image": "resources/업그레이드 카드/함대 명령/화력을 강화하라!.webp",
            "set": "fleet-command",
            "points": 6,
            "unique": true
        },
        {
            "id": 4081,
            "title": "제다이 인질",
            "image": "resources/업그레이드 카드/함대 명령/제다이 인질.webp",
            "set": "fleet-command",
            "points": 3,
            "unique": true,
            "faction": "separatist"
        },
        {
            "id": 4085,
            "title": "보급 임무",
            "image": "resources/업그레이드 카드/함대 명령/보급 임무.webp",
            "set": "fleet-command",
            "points": 5,
            "unique": true,
            "faction": "republic",
            "version": "1.6.0"
        },
        {
            "id": 1404,
            "title": "방어막을 최대로!",
            "image": "resources/업그레이드 카드/함대 명령/방어막을 최대로!.webp",
            "set": "fleet-command",
            "points": 6,
            "unique": true
        },
        {
            "id": 1413,
            "title": "회피 기동하라!",
            "image": "resources/업그레이드 카드/함대 명령/회피 기동하라!.webp",
            "set": "fleet-command",
            "points": 6,
            "unique": true
        }
    ],
    "fleet-support": [
        {
            "id": 1294,
            "title": "폭격기 사령 본부",
            "image": "resources/업그레이드 카드/함대 지원/폭격기 사령 본부.webp",
            "set": "fleet-support",
            "points":8
        },
        {
            "id": 1295,
            "title": "통신망",
            "image": "resources/업그레이드 카드/함대 지원/통신망.webp",
            "set": "fleet-support",
            "points":2
        },
        {
            "id": 1298,
            "title": "전파방해장",
            "image": "resources/업그레이드 카드/함대 지원/전파방해장.webp",
            "set": "fleet-support",
            "points":2
        },
        {
            "id": 4053,
            "title": "탄약 재보급",
            "image": "resources/업그레이드 카드/함대 지원/탄약 재보급.webp",
            "set": "fleet-support",
            "points":3
        },
        {
            "id": 4054,
            "title": "부품 재보급",
            "image": "resources/업그레이드 카드/함대 지원/부품 재보급.webp",
            "set": "fleet-support",
            "points":3
        },
        {
            "id": 1296,
            "title": "수리팀",
            "image": "resources/업그레이드 카드/함대 지원/수리팀.webp",
            "set": "fleet-support",
            "points": 3,
            "version": "1.6.0"
        },
        {
            "id": 1297,
            "title": "슬라이서 도구",
            "image": "resources/업그레이드 카드/함대 지원/슬라이서 도구.webp",
            "set": "fleet-support",
            "points":7
        }
    ],
    "weapons-team": [
        {
            "id": 1006,
            "title": "케이트켄과 숄란",
            "image": "resources/업그레이드 카드/무기 담당/케이트켄과 숄란.webp",
            "set": "weapons-team",
            "points": 6,
            "faction": "rebel",
            "unique": true
        },
        {
            "id": 1443,
            "title": "바닐리안 포병 대장",
            "image": "resources/업그레이드 카드/무기 담당/바닐리안 포병 대장.webp",
            "set": "weapons-team",
            "points": 6,
            "faction": "imperial",
            "unique": true
        },
        {
            "id": 4019,
            "title": "클론 포수",
            "image": "resources/업그레이드 카드/무기 담당/클론 포수.webp",
            "set": "weapons-team",
            "points": 4,
            "faction": "republic",
            "required": ["clone"]
        },
        {
            "id": 1315,
            "title": "화력 제어 담당",
            "image": "resources/업그레이드 카드/무기 담당/화력 제어 담당.webp",
            "set": "weapons-team",
            "points":2
        },
        {
            "id": 1085,
            "title": "비행대 관제관",
            "image": "resources/업그레이드 카드/무기 담당/비행대 관제관.webp",
            "set": "weapons-team",
            "points":6
        },
        {
            "id": 1086,
            "title": "포격 담당",
            "image": "resources/업그레이드 카드/무기 담당/포격 담당.webp",
            "set": "weapons-team",
            "points":7
        },
        {
            "id": 1471,
            "title": "국지 사격 제어",
            "image": "resources/업그레이드 카드/무기 담당/국지 사격 제어.webp",
            "set": "weapons-team",
            "points":4
        },
        {
            "id": 1211,
            "title": "어뢰 전문가",
            "image": "resources/업그레이드 카드/무기 담당/어뢰 전문가.webp",
            "set": "weapons-team",
            "points":4
        },
        {
            "id": 1210,
            "title": "냉혹한 전략가",
            "image": "resources/업그레이드 카드/무기 담당/냉혹한 전략가.webp",
            "set": "weapons-team",
            "points":4
        },
        {
            "id": 1087,
            "title": "센서 담당",
            "image": "resources/업그레이드 카드/무기 담당/센서 담당.webp",
            "set": "weapons-team",
            "points":5
        },
        {
            "id": 1314,
            "title": "베테랑 포수",
            "image": "resources/업그레이드 카드/무기 담당/베테랑 포수.webp",
            "set": "weapons-team",
            "points":5
        },
        {
            "id": 1414,
            "title": "무기 배열 기술자",
            "image": "resources/업그레이드 카드/무기 담당/무기 배열 기술자.webp",
            "set": "weapons-team",
            "points": 4,
            "version": "1.6.0"
        },
        {
            "divider": true
        },
        {
            "id": 2790,
            "title": "참 신둘라",
            "image": "resources/업그레이드 카드/승선조/참 신둘라.webp",
            "set": "weapons-team",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "dual": "offensive-retrofit"
        },
        {
            "id": 1005,
            "title": "진 어소",
            "image": "resources/업그레이드 카드/승선조/진 어소.webp",
            "set": "weapons-team",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "dual": "offensive-retrofit"
        },
        {
            "id": 1013,
            "title": "다스 베이더",
            "image": "resources/업그레이드 카드/승선조/다스 베이더.webp",
            "set": "weapons-team",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "dual": "offensive-retrofit"
        },
        {
            "id": 1453,
            "title": "쉬리브 슈가브",
            "image": "resources/업그레이드 카드/승선조/쉬리브 슈가브.webp",
            "set": "weapons-team",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "dual": "offensive-retrofit",
            "version": "1.6.0"
        },
        {
            "id": 2052,
            "title": "승선 기술자",
            "image": "resources/업그레이드 카드/승선조/승선 기술자.webp",
            "set": "weapons-team",
            "points": 2,
            "dual": "offensive-retrofit"
        },
        {
            "id": 2053,
            "title": "승선 트루퍼",
            "image": "resources/업그레이드 카드/승선조/승선 트루퍼.webp",
            "set": "weapons-team",
            "points": 3,
            "dual": "offensive-retrofit"
        }
    ],
    "offensive-retrofit": [
        {
            "id": 1415,
            "title": "고성능 전파망",
            "image": "resources/업그레이드 카드/공격 장비/고성능 전파망.webp",
            "set": "offensive-retrofit",
            "points": 5,
            "modification": true
        },
        {
            "id": 4071,
            "title": "B2 로켓 트루퍼",
            "image": "resources/업그레이드 카드/공격 장비/B2 로켓 트루퍼.webp",
            "set": "offensive-retrofit",
            "points": 7,
            "faction": "separatist"
        },
        {
            "id": 1230,
            "title": "통신기 증폭",
            "image": "resources/업그레이드 카드/공격 장비/통신기 증폭.webp",
            "set": "offensive-retrofit",
            "points":4
        },
        {
            "id": 2673,
            "title": "일회용 축전지",
            "image": "resources/업그레이드 카드/공격 장비/일회용 축전지.webp",
            "set": "offensive-retrofit",
            "points":3
        },
        {
            "id": 1091,
            "title": "확장 격납 구간",
            "image": "resources/업그레이드 카드/공격 장비/확장 격납 구간.webp",
            "set": "offensive-retrofit",
            "points":5
        },
        {
            "id": 1472,
            "title": "기함 함교",
            "image": "resources/업그레이드 카드/공격 장비/기함 함교.webp",
            "set": "offensive-retrofit",
            "points": 0,
            "modification": true,
            "unique": true
        },
        {
            "id": 4076,
            "title": "대공포",
            "image": "resources/업그레이드 카드/공격 장비/대공포.webp",
            "set": "offensive-retrofit",
            "points":3
        },
        {
            "id": 1019,
            "title": "경화 격벽",
            "image": "resources/업그레이드 카드/공격 장비/경화 격벽.webp",
            "set": "offensive-retrofit",
            "points":5
        },
        {
            "id": 4027,
            "title": "하이퍼스페이스 링",
            "image": "resources/업그레이드 카드/공격 장비/하이퍼스페이스 링.webp",
            "set": "offensive-retrofit",
            "points": 3,
            "faction": "republic"
        },
        {
            "id": 4036,
            "title": "초파장 신호 증폭기",
            "image": "resources/업그레이드 카드/공격 장비/초파장 신호 증폭기.webp",
            "set": "offensive-retrofit",
            "points": 3,
            "faction": "separatist"
        },
        {
            "id": 1212,
            "title": "파일론 Q7 견인 광선",
            "image": "resources/업그레이드 카드/공격 장비/파일론 Q7 견인 광선.webp",
            "set": "offensive-retrofit",
            "points": 6,
            "modification": true
        },
        {
            "id": 1092,
            "title": "국지 방어 재편성",
            "image": "resources/업그레이드 카드/공격 장비/국지 방어 재편성.webp",
            "set": "offensive-retrofit",
            "points":5
        },
        {
            "id": 1416,
            "title": "근접 기뢰",
            "image": "resources/업그레이드 카드/공격 장비/근접 기뢰.webp",
            "set": "offensive-retrofit",
            "points":4
        },
        {
            "id": 1214,
            "title": "4단 터보레이저 포탑",
            "image": "resources/업그레이드 카드/공격 장비/4단 터보레이저 포탑.webp",
            "set": "offensive-retrofit",
            "points":5
        },
        {
            "id": 1402,
            "title": "고속 발진 구역",
            "image": "resources/업그레이드 카드/공격 장비/고속 발진 구역.webp",
            "set": "offensive-retrofit",
            "points":6
        },
        {
            "id": 1417,
            "title": "예비 격납 갑판",
            "image": "resources/업그레이드 카드/공격 장비/예비 격납 갑판.webp",
            "set": "offensive-retrofit",
            "points": 4,
            "version": "1.6.0"
        },
        {
            "id": 4094,
            "title": "SPHA-T",
            "image": "resources/업그레이드 카드/공격 장비/SPHA-T.webp",
            "set": "offensive-retrofit",
            "points": 7,
            "faction": "republic",
            "modification": true
        },
        {
            "divider": true
        },
        {
            "id": 2790,
            "title": "참 신둘라",
            "image": "resources/업그레이드 카드/승선조/참 신둘라.webp",
            "set": "offensive-retrofit",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "dual": "weapons-team"
        },
        {
            "id": 1005,
            "title": "진 어소",
            "image": "resources/업그레이드 카드/승선조/진 어소.webp",
            "set": "offensive-retrofit",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "dual": "weapons-team"
        },
        {
            "id": 1013,
            "title": "다스 베이더",
            "image": "resources/업그레이드 카드/장교/장교 (제국)/다스 베이더.webp",
            "set": "offensive-retrofit",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "dual": "weapons-team"
        },
        {
            "id": 1453,
            "title": "쉬리브 슈가브",
            "image": "resources/업그레이드 카드/승선조/쉬리브 슈가브.webp",
            "set": "offensive-retrofit",
            "points": 6,
            "faction": "rebel",
            "unique": true,
            "dual": "weapons-team"
        },
        {
            "id": 2052,
            "title": "승선 기술자",
            "image": "resources/업그레이드 카드/승선조/승선 기술자.webp",
            "set": "offensive-retrofit",
            "points": 2,
            "dual": "weapons-team"
        },
        {
            "id": 2053,
            "title": "승선 트루퍼",
            "image": "resources/업그레이드 카드/승선조/승선 트루퍼.webp",
            "set": "offensive-retrofit",
            "points": 3,
            "dual": "weapons-team"
        }
    ],
    "defensive-retrofit": [
        {
            "id": 1093,
            "title": "고성능 방어막 발생기",
            "image": "resources/업그레이드 카드/방어 장비/고성능 방어막 발생기.webp",
            "set": "defensive-retrofit",
            "points":6
        },
        {
            "id": 1218,
            "title": "클러스터 폭탄",
            "image": "resources/업그레이드 카드/방어 장비/클러스터 폭탄.webp",
            "set": "defensive-retrofit",
            "points":5
        },
        {
            "id": 1018,
            "title": "조기 경보 체제",
            "image": "resources/업그레이드 카드/방어 장비/조기 경보 체제.webp",
            "set": "defensive-retrofit",
            "points":7
        },
        {
            "id": 1094,
            "title": "전파 방해 공격",
            "image": "resources/업그레이드 카드/방어 장비/전파 방해 공격.webp",
            "set": "defensive-retrofit",
            "points":7
        },
        {
            "id": 4032,
            "title": "대응 포격",
            "image": "resources/업그레이드 카드/방어 장비/대응 포격.webp",
            "set": "defensive-retrofit",
            "points":4
        },
        {
            "id": 1219,
            "title": "잉여 방어막",
            "image": "resources/업그레이드 카드/방어 장비/잉여 방어막.webp",
            "set": "defensive-retrofit",
            "points": 8,
            "modification": true
        },
        {
            "id": 1403,
            "title": "강화 방폭문",
            "image": "resources/업그레이드 카드/방어 장비/강화 방폭문.webp",
            "set": "defensive-retrofit",
            "points":5
        },
        {
            "id": 4096,
            "title": "열 방어막",
            "image": "resources/업그레이드 카드/방어 장비/열 방어막.webp",
            "set": "defensive-retrofit",
            "points": 5,
            "faction": ["republic", "separatist"]
        }
    ],
    "experimental-retrofit": [
        {
            "id": 1300,
            "title": "G-8 투사 실험체",
            "image": "resources/업그레이드 카드/실험기 장비/G-8 투사 실험체.webp",
            "set": "experimental-retrofit",
            "points": 8,
            "unique": true
        },
        {
            "id": 1302,
            "title": "중력 이동 궤도 조정",
            "image": "resources/업그레이드 카드/실험기 장비/중력 이동 궤도 조정.webp",
            "set": "experimental-retrofit",
            "points": 2,
            "unique": true
        },
        {
            "id": 1299,
            "title": "G7-X 중력 우물 발생기",
            "image": "resources/업그레이드 카드/실험기 장비/G7-X 중력 우물 발생기.webp",
            "set": "experimental-retrofit",
            "points":2
        },
        {
            "id": 1301,
            "title": "표적 혼선 장치",
            "image": "resources/업그레이드 카드/실험기 장비/표적 혼선 장치.webp",
            "set": "experimental-retrofit",
            "points":5
        }
    ],
    "ordnance": [
        {
            "id": 1102,
            "title": "강습 타격 미사일",
            "image": "resources/업그레이드 카드/어뢰/강습 타격 미사일.webp",
            "set": "ordnance",
            "points": 5,
            "version": "1.5.0"
        },
        {
            "id": 1223,
            "title": "강습 양자 어뢰",
            "image": "resources/업그레이드 카드/어뢰/강습 양자 어뢰.webp",
            "set": "ordnance",
            "points": 4,
            "version": "1.5.0"
        },
        {
            "id": 1103,
            "title": "확장 발사체",
            "image": "resources/업그레이드 카드/어뢰/확장 발사체.webp",
            "set": "ordnance",
            "points": 8,
            "modification": true,
            "version": "1.6.0"
        },
        {
            "id": 2789,
            "title": "외연 발사대",
            "image": "resources/업그레이드 카드/어뢰/외연 발사대.webp",
            "set": "ordnance",
            "points": 4,
            "version": "1.5.0"
        },
        {
            "id": 1396,
            "title": "플레셰트 어뢰",
            "image": "resources/업그레이드 카드/어뢰/플레셰트 어뢰.webp",
            "set": "ordnance",
            "points":3
        },
        {
            "id": 1021,
            "title": "폭격 포드",
            "image": "resources/업그레이드 카드/어뢰/폭격 포드.webp",
            "set": "ordnance",
            "points":3
        },
        {
            "id": 1224,
            "title": "고속 재장전",
            "image": "resources/업그레이드 카드/어뢰/고속 재장전.webp",
            "set": "ordnance",
            "points": 4,
            "modification": true,
            "version": "1.6.0"
        },
        {
            "id": 1004,
            "title": "광범위 일제 사격",
            "image": "resources/업그레이드 카드/어뢰/광범위 일제 사격.webp",
            "set": "ordnance",
            "points":2
        }
    ],
    "ion-cannons": [
        {
            "id": 1020,
            "title": "중 이온 포좌",
            "image": "resources/업그레이드 카드/이온포/중 이온 포좌.webp",
            "set": "ion-cannons",
            "points":9
        },
        {
            "id": 1321,
            "title": "고용량 이온 발생관",
            "image": "resources/업그레이드 카드/이온포/고용량 이온 발생관.webp",
            "set": "ion-cannons",
            "points": 6,
            "modification": true,
            "version": "1.6.0"
        },
        {
            "id": 1099,
            "title": "이온포 포대",
            "image": "resources/업그레이드 카드/이온포/이온포 포대.webp",
            "set": "ion-cannons",
            "points":5
        },
        {
            "id": 1100,
            "title": "선두 타격",
            "image": "resources/업그레이드 카드/이온포/선두 타격.webp",
            "set": "ion-cannons",
            "points": 5,
            "version": "1.6.0"
        },
        {
            "id": 1320,
            "title": "MS-1이온포",
            "image": "resources/업그레이드 카드/이온포/MS-1이온포.webp",
            "set": "ion-cannons",
            "points":2
        },
        {
            "id": 1272,
            "title": "NK-7 이온포",
            "image": "resources/업그레이드 카드/이온포/NK-7 이온포.webp",
            "set": "ion-cannons",
            "points": 6,
            "version": "1.6.0"
        },
        {
            "id": 1101,
            "title": "펄스 과부화",
            "image": "resources/업그레이드 카드/이온포/펄스 과부화.webp",
            "set": "ion-cannons",
            "points": 6,
            "version": "1.6.0"
        },
        {
            "id": 4090,
            "title": "국지 방어 이온포",
            "image": "resources/업그레이드 카드/이온포/국지 방어 이온포.webp",
            "set": "ion-cannons",
            "points": 6,
            "version": "1.6.0"
        },
        {
            "id": 1222,
            "title": "SW-7 이온 포대",
            "image": "resources/업그레이드 카드/이온포/SW-7 이온 포대.webp",
            "set": "ion-cannons",
            "points":5
        }
    ],
    "turbolasers": [
        {
            "id": 4074,
            "title": "DBY-827 중 터보레이저",
            "image": "resources/업그레이드 카드/터보레이저/DBY-827 중 터보레이저.webp",
            "set": "turbolasers",
            "points":3
        },
        {
            "id": 1394,
            "title": "쌍열 터보레이저 포탑",
            "image": "resources/업그레이드 카드/터보레이저/쌍열 터보레이저 포탑.webp",
            "set": "turbolasers",
            "points": 4,
            "modification": true,
            "version": "1.6.0"
        },
        {
            "id": 1095,
            "title": "강화 무장",
            "image": "resources/업그레이드 카드/터보레이저/강화 무장.webp",
            "set": "turbolasers",
            "points": 10,
            "modification": true
        },
        {
            "id": 1096,
            "title": "H9 터보레이저",
            "image": "resources/업그레이드 카드/터보레이저/H9 터보레이저.webp",
            "set": "turbolasers",
            "points": 8,
            "modification": true,
            "version": "1.5.0"
        },
        {
            "id": 1470,
            "title": "집중 포화 구역",
            "image": "resources/업그레이드 카드/터보레이저/집중 포화 구역.webp",
            "set": "turbolasers",
            "points": 2,
            "version": "1.6.0"
        },
        {
            "id": 1220,
            "title": "중 터보레이저 포탑",
            "image": "resources/업그레이드 카드/터보레이저/중 터보레이저 포탑.webp",
            "set": "turbolasers",
            "points": 4,
            "version": "1.6.0"
        },
        {
            "id": 1418,
            "title": "연동 터보레이저 타워",
            "image": "resources/업그레이드 카드/터보레이저/연동 터보레이저 타워.webp",
            "set": "turbolasers",
            "points":7
        },
        {
            "id": 3137,
            "title": "4단 포탑 배열",
            "image": "resources/업그레이드 카드/터보레이저/4단 포탑 배열.webp",
            "set": "turbolasers",
            "points": 5,
            "modification": true
        },
        {
            "id": 1319,
            "title": "4단 터보레이저 포",
            "image": "resources/업그레이드 카드/터보레이저/4단 터보레이저 포.webp",
            "set": "turbolasers",
            "points": 10,
            "modification": true,
            "version": "1.5.0"
        },
        {
            "id": 1229,
            "title": "고정 포탑",
            "image": "resources/업그레이드 카드/터보레이저/고정 포탑.webp",
            "set": "turbolasers",
            "points": 6,
            "modification": true
        },
        {
            "id": 1318,
            "title": "중앙선 무장",
            "image": "resources/업그레이드 카드/터보레이저/중앙선 무장.webp",
            "set": "turbolasers",
            "points": 9,
            "modification": true
        },
        {
            "id": 4028,
            "title": "회전형 주포 배열",
            "image": "resources/업그레이드 카드/터보레이저/회전형 주포 배열.webp",
            "set": "turbolasers",
            "points": 8,
            "faction": ["republic", "separatist"],
            "modification": true
        },
        {
            "id": 1221,
            "title": "터보레이저 재정렬 회로",
            "image": "resources/업그레이드 카드/터보레이저/터보레이저 재정렬 회로.webp",
            "set": "turbolasers",
            "points":7
        },
        {
            "id": 1097,
            "title": "XI7 터보레이저",
            "image": "resources/업그레이드 카드/터보레이저/XI7 터보레이저.webp",
            "set": "turbolasers",
            "points":6
        },
        {
            "id": 1098,
            "title": "XX-9 터보레이저",
            "image": "resources/업그레이드 카드/터보레이저/XX-9 터보레이저.webp",
            "set": "turbolasers",
            "points": 2,
            "version": "1.6.0"
        }
    ],
    "super-weapon": [
        {
            "id": 1446,
            "title": "매그나이트 수정 견인 광선 배열",
            "image": "resources/업그레이드 카드/슈퍼 무기/매그나이트 수정 견인 광선 배열.webp",
            "set": "super-weapon",
            "points": 10,
            "faction": "rebel",
            "ship": "starhawk"
        },
        {
            "id": 1450,
            "title": "궤도 폭격용 입자포",
            "image": "resources/업그레이드 카드/슈퍼 무기/궤도 폭격용 입자포.webp",
            "set": "super-weapon",
            "points": 5,
            "modification": true,
            "faction": "imperial",
            "ship": "onager"
        },
        {
            "id": 1457,
            "title": "집광 초중 터보레이저",
            "image": "resources/업그레이드 카드/슈퍼 무기/집광 초중 터보레이저.webp",
            "set": "super-weapon",
            "points": 7,
            "modification": true,
            "faction": "imperial",
            "ship": "onager"
        }
    ],
    "title": [
        {
            "id": 1237,
            "title": "애드머니션",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/애드머니션.webp",
            "set": "title",
            "points": 10,
            "faction": "rebel",
            "unique": true,
            "ship": "mc30c-frigate",
            "version": "1.6.0"
        },
        {
            "id": 1057,
            "title": "어나힐레이터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/어나힐레이터.webp",
            "set": "title",
            "points": 8,
            "faction": "imperial",
            "unique": true,
            "ship": "super-star-destroyer"
        },
        {
            "id": 1440,
            "title": "애미티",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/애미티.webp",
            "set": "title",
            "points": 6,
            "faction": "rebel",
            "unique": true,
            "ship": "starhawk"
        },
        {
            "id": 1010,
            "title": "애스퍼레이션",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/애스퍼레이션.webp",
            "set": "title",
            "points": 3,
            "faction": "rebel",
            "unique": true,
            "ship": "mc75-cruiser"
        },
        {
            "id": 1232,
            "title": "어벤저",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/어벤저.webp",
            "set": "title",
            "points": 5,
            "faction": "imperial",
            "unique": true,
            "ship": "imperial-class-star-destroyer"
        },
        {
            "id": 4055,
            "title": "비스트 오브 버든",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/비스트 오브 버든.webp",
            "set": "title",
            "points": 6,
            "faction": "separatist",
            "unique": true,
            "ship": "hardcell"
        },
        {
            "id": 1326,
            "title": "브라이트 호프",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/브라이트 호프.webp",
            "set": "title",
            "points": 2,
            "faction": "rebel",
            "unique": true,
            "ship": "gr-75"
        },
        {
            "id": 1442,
            "title": "카타클리즘",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/카타클리즘.webp",
            "set": "title",
            "points": 5,
            "faction": "imperial",
            "unique": true,
            "ship": "onager"
        },
        {
            "id": 1391,
            "title": "센티코어",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/센티코어.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "arquitens"
        },
        {
            "id": 1280,
            "title": "키메라",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/키메라.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "imperial-class-star-destroyer"
        },
        {
            "id": 1444,
            "title": "콩코드",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/콩코드.webp",
            "set": "title",
            "points": 12,
            "faction": "rebel",
            "unique": true,
            "ship": "starhawk"
        },
        {
            "id": 1107,
            "title": "커럽터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/커럽터.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "victory-class-star-destroyer",
            "version": "1.6.0"
        },
        {
            "id": 1419,
            "title": "콜버스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/콜버스.webp",
            "set": "title",
            "points": 2,
            "faction": "imperial",
            "unique": true,
            "ship": "raider-class-corvette"
        },
        {
            "id": 1239,
            "title": "디파이언스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/디파이언스.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-cruiser"
        },
        {
            "id": 1118,
            "title": "데몰리셔",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/데몰리셔.webp",
            "set": "title",
            "points": 10,
            "faction": "imperial",
            "unique": true,
            "ship": "gladiator-class-star-destroyer"
        },
        {
            "id": 1233,
            "title": "데바스테이터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/데바스테이터.webp",
            "set": "title",
            "points": 10,
            "faction": "imperial",
            "unique": true,
            "ship": "imperial-class-star-destroyer"
        },
        {
            "id": 1110,
            "title": "도돈나의 긍지",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/도돈나의 긍지.webp",
            "set": "title",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "ship": "corvette",
            "version": "1.6.0"
        },
        {
            "id": 1108,
            "title": "도미네이터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/도미네이터.webp",
            "set": "title",
            "points": 7,
            "faction": "imperial",
            "unique": true,
            "ship": "victory-class-star-destroyer",
            "version": "1.6.0"
        },
        {
            "id": 1058,
            "title": "이클립스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/이클립스.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "super-star-destroyer"
        },
        {
            "id": 1327,
            "title": "인데버",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/인데버.webp",
            "set": "title",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-liberty"
        },
        {
            "id": 1059,
            "title": "이제큐터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/이제큐터.webp",
            "set": "title",
            "points": 2,
            "faction": "imperial",
            "unique": true,
            "ship": "super-star-destroyer"
        },
        {
            "id": 4075,
            "title": "FB-88",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/FB-88.webp",
            "set": "title",
            "points": 4,
            "faction": "republic",
            "unique": true,
            "ship": "pelta-republic"
        },
        {
            "id": 4056,
            "title": "포먼의 분투",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/포먼의 분투.webp",
            "set": "title",
            "points": 5,
            "faction": "separatist",
            "unique": true,
            "ship": "hardcell"
        },
        {
            "id": 1238,
            "title": "포어사이트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/포어사이트.webp",
            "set": "title",
            "points": 10,
            "faction": "rebel",
            "unique": true,
            "ship": "mc30c-frigate",
            "version": "1.6.0"
        },
        {
            "id": 1116,
            "title": "갤런트 헤이븐",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/갤런트 헤이븐.webp",
            "set": "title",
            "points": 8,
            "faction": "rebel",
            "unique": true,
            "ship": "assault-frigate"
        },
        {
            "id": 2788,
            "title": "가렐의 영광",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/가렐의 영광.webp",
            "set": "title",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "ship": "hammerhead"
        },
        {
            "id": 4078,
            "title": "길디드 이지스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/길디드 이지스.webp",
            "set": "title",
            "points": 5,
            "faction": "separatist",
            "unique": true,
            "ship": "recusant"
        },
        {
            "id": 1397,
            "title": "정의의 손길",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/정의의 손길.webp",
            "set": "title",
            "points": 2,
            "faction": "imperial",
            "unique": true,
            "ship": "arquitens",
            "version": "1.6.0"
        },
        {
            "id": 1420,
            "title": "해로우",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/해로우.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "victory-class-star-destroyer"
        },
        {
            "id": 1240,
            "title": "홈 원",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/홈 원.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-cruiser",
            "version": "1.6.0"
        },
        {
            "id": 4030,
            "title": "임플래커블",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/임플래커블.webp",
            "set": "title",
            "points": 4,
            "faction": "republic",
            "unique": true,
            "ship": "acclamator"
        },
        {
            "id": 1235,
            "title": "임페추어스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/임페추어스.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "raider-class-corvette"
        },
        {
            "id": 1241,
            "title": "인디펜던스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/인디펜던스.webp",
            "set": "title",
            "points": 8,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-cruiser"
        },
        {
            "id": 1119,
            "title": "인시디어스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/인시디어스.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "gladiator-class-star-destroyer"
        },
        {
            "id": 1236,
            "title": "인스티게이터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/인스티게이터.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "raider-class-corvette"
        },
        {
            "id": 1324,
            "title": "인터딕터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/인터딕터.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "interdictor"
        },
        {
            "id": 4080,
            "title": "인빈서블",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/인빈서블.webp",
            "set": "title",
            "points": 5,
            "faction": "separatist",
            "unique": true,
            "ship": "providence"
        },
        {
            "id": 4102,
            "title": "invisible-hand.png",
            "image":  "invisible-hand.png",
            "set": "title",
            "points": 8,
            "faction": "separatist",
            "unique": true,
            "ship": "providence",
            "version": "1.6.0"
        },
        {
            "id": 1111,
            "title": "제이나의 여명",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/제이나의 여명.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "corvette",
            "version": "1.6.0"
        },
        {
            "id": 1421,
            "title": "리버레이터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/리버레이터.webp",
            "set": "title",
            "points": 2,
            "faction": "rebel",
            "unique": true,
            "ship": "corvette"
        },
        {
            "id": 1328,
            "title": "리버티",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/리버티.webp",
            "set": "title",
            "points": 3,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-liberty"
        },
        {
            "id": 4082,
            "title": "루시드 보이스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/루시드 보이스.webp",
            "set": "title",
            "points": 6,
            "faction": "separatist",
            "unique": true,
            "ship": "providence",
            "version": "1.6.0"
        },
        {
            "id": 1329,
            "title": "몬 카렌",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/몬 카렌.webp",
            "set": "title",
            "points": 6,
            "faction": "rebel",
            "unique": true,
            "ship": "mc80-liberty",
            "version": "1.5.0"
        },
        {
            "id": 4031,
            "title": "네부타 비",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/네부타 비.webp",
            "set": "title",
            "points": 5,
            "faction": "republic",
            "unique": true,
            "ship": "acclamator"
        },
        {
            "id": 4086,
            "title": "노바 디파이언트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/노바 디파이언트.webp",
            "set": "title",
            "points": 4,
            "faction": "separatist",
            "unique": true,
            "ship": "recusant"
        },
        {
            "id": 1117,
            "title": "파라곤",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/파라곤.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "assault-frigate"
        },
        {
            "id": 4087,
            "title": "패이트리어트 피스트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/패이트리어트 피스트.webp",
            "set": "title",
            "points": 6,
            "faction": "separatist",
            "unique": true,
            "ship": "recusant"
        },
        {
            "id": 1401,
            "title": "피닉스 홈",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/피닉스 홈.webp",
            "set": "title",
            "points": 3,
            "faction": "rebel",
            "unique": true,
            "ship": "pelta"
        },
        {
            "id": 1281,
            "title": "프로펀디티",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/프로펀디티.webp",
            "set": "title",
            "points": 7,
            "faction": "rebel",
            "unique": true,
            "ship": "mc75-cruiser"
        },
        {
            "id": 2667,
            "title": "퍼수언트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/퍼수언트.webp",
            "set": "title",
            "points": 2,
            "faction": "imperial",
            "unique": true,
            "ship": "quasar"
        },
        {
            "id": 1325,
            "title": "퀀텀 스톰",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/퀀텀 스톰.webp",
            "set": "title",
            "points": 1,
            "faction": "rebel",
            "unique": true,
            "ship": "gr-75"
        },
        {
            "id": 4051,
            "title": "레이디언트 VII",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/레이디언트 VII.webp",
            "set": "title",
            "points": 1,
            "faction": "republic",
            "unique": true,
            "ship": "consular"
        },
        {
            "id": 1451,
            "title": "레이크헬",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/레이크헬.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "onager"
        },
        {
            "id": 1060,
            "title": "라바저",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/라바저.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "super-star-destroyer"
        },
        {
            "id": 1113,
            "title": "리뎀션",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/리뎀션.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "nebulon-b",
            "version": "1.6.0"
        },
        {
            "id": 1234,
            "title": "릴렌틀리스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/릴렌틀리스.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "imperial-class-star-destroyer"
        },
        {
            "id": 4091,
            "title": "레졸루트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/레졸루트.webp",
            "set": "title",
            "points": 4,
            "faction": "republic",
            "unique": true,
            "ship": "venator",
            "version": "1.6.0"
        },
        {
            "id": 1114,
            "title": "살베이션",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/살베이션.webp",
            "set": "title",
            "points": 7,
            "faction": "rebel",
            "unique": true,
            "ship": "nebulon-b"
        },
        {
            "id": 4034,
            "title": "사 날라오",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/사 날라오.webp",
            "set": "title",
            "points": 5,
            "faction": "separatist",
            "unique": true,
            "ship": "munificent"
        },
        {
            "id": 1011,
            "title": "소버린",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/소버린.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "imperial-class-star-destroyer"
        },
        {
            "id": 2668,
            "title": "스퀄",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/스퀄.webp",
            "set": "title",
            "points": 7,
            "faction": "imperial",
            "unique": true,
            "ship": "quasar",
            "version": "1.6.0"
        },
        {
            "id": 2669,
            "title": "스트롱홀드",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/스트롱홀드.webp",
            "set": "title",
            "points": 3,
            "faction": "imperial",
            "unique": true,
            "ship": "quasar",
            "version": "1.6.0"
        },
        {
            "id": 1456,
            "title": "썬더",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/썬더.webp",
            "set": "title",
            "points": 10,
            "faction": "imperial",
            "unique": true,
            "ship": "onager"
        },
        {
            "id": 1323,
            "title": "서프레서",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/서프레서.webp",
            "set": "title",
            "points": 4,
            "faction": "imperial",
            "unique": true,
            "ship": "gozanti"
        },
        {
            "id": 4052,
            "title": "스위프트 리턴",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/스위프트 리턴.webp",
            "set": "title",
            "points": 3,
            "faction": "republic",
            "unique": true,
            "ship": "consular"
        },
        {
            "id": 1112,
            "title": "탄티비 IV",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/탄티비 IV.webp",
            "set": "title",
            "points": 3,
            "faction": "rebel",
            "unique": true,
            "ship": "corvette"
        },
        {
            "id": 4095,
            "title": "TB-73",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/TB-73.webp",
            "set": "title",
            "points": 5,
            "faction": "republic",
            "unique": true,
            "ship": "pelta-republic"
        },
        {
            "id": 4033,
            "title": "진보의 물결 XII",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (분리주의)/진보의 물결 XII.webp",
            "set": "title",
            "points": 2,
            "faction": "separatist",
            "unique": true,
            "ship": "munificent"
        },
        {
            "id": 4100,
            "title": "트랜퀄리티",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/트랜퀄리티.webp",
            "set": "title",
            "points": 7,
            "faction": "republic",
            "unique": true,
            "ship": "venator",
            "version": "1.5.4"
        },
        {
            "id": 4101,
            "title": "트라이엄펀트",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (공화국)/트라이엄펀트.webp",
            "set": "title",
            "points": 5,
            "faction": "republic",
            "unique": true,
            "ship": "venator"
        },
        {
            "id": 1458,
            "title": "유니티",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/유니티.webp",
            "set": "title",
            "points": 10,
            "faction": "rebel",
            "unique": true,
            "ship": "starhawk"
        },
        {
            "id": 1422,
            "title": "뱅가드",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/뱅가드.webp",
            "set": "title",
            "points": 4,
            "faction": "rebel",
            "unique": true,
            "ship": "nebulon-b"
        },
        {
            "id": 1322,
            "title": "벡터",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/벡터.webp",
            "set": "title",
            "points": 2,
            "faction": "imperial",
            "unique": true,
            "ship": "gozanti"
        },
        {
            "id": 1109,
            "title": "워로드",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/워로드.webp",
            "set": "title",
            "points": 8,
            "faction": "imperial",
            "unique": true,
            "ship": "victory-class-star-destroyer"
        },
        {
            "id": 1115,
            "title": "야바리스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/야바리스.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "unique": true,
            "ship": "nebulon-b"
        },
        {
            "id": 1001,
            "title": "몬 칼라마리 탈출 함대",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/몬 칼라마리 탈출 함대.webp",
            "set": "title",
            "points": 5,
            "faction": "rebel",
            "ship": "multi",
            "ships": [
                "mc30c-frigate",
                "mc75-cruiser",
                "mc80-cruiser",
                "mc80-liberty"
            ]
        },
        {
            "id": 1007,
            "title": "제7함대 은하 구축함",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (제국)/제7함대 은하 구축함.webp",
            "set": "title",
            "points": 5,
            "faction": "imperial",
            "ship": "multi",
            "ships": [
                "gladiator-class-star-destroyer",
                "imperial-class-star-destroyer",
                "victory-class-star-destroyer",
                "onager",
                "venator"
            ]
        },
        {
            "id": 2787,
            "title": "태스크 포스 안틸레스",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/태스크 포스 안틸레스.webp",
            "set": "title",
            "points": 3,
            "faction": "rebel",
            "ship": "hammerhead"
        },
        {
            "id": 2786,
            "title": "태스크 포스 오르가나",
            "image": "resources/업그레이드 카드/타이틀/타이틀 (반군)/태스크 포스 오르가나.webp",
            "set": "title",
            "points": 1,
            "faction": "rebel",
            "ship": "hammerhead"
        }
    ]
};
