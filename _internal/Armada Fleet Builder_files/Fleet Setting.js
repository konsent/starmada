let initialFaction = localStorage.getItem('selectedFleetFaction');

let cardset = null
if (localStorage.getItem('legacyEnable') === 'true') {
    cardset = cards_legacy;
} else {
    cardset = removeLegacyCards(cards_legacy)
}

let uploadedFleetData = null;
try {
    const storedData = localStorage.getItem('uploadedFleetData');
    if (storedData) {
        uploadedFleetData = JSON.parse(storedData);
        localStorage.removeItem('uploadedFleetData'); // Clear after use
        console.log('Loaded fleet data from localStorage:', uploadedFleetData);
        localStorage.removeItem('uploadedFleetData')
    }
} catch (e) {
    console.error('Error parsing uploaded fleet data from localStorage:', e);
    uploadedFleetData = null;
}

window.fleetBuilder = {
    cards: cardset,
    faq: faq,
    fleet: uploadedFleetData || {
        id: null,
        version: '1.6.1',
        name: '새 아르마다 함대',
        faction: initialFaction,
        ships: [],
        squadrons: [],
        assault: null,
        defense: null,
        navigation: null,
        commander: null,
        points: {
            total: 0,
            squadron: 0
        }
    },
    stock: false,
    user: true,
    owner: false,
};