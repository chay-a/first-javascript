let allImg;
function displayGame(difficulty) {
    let api = apiUrl(difficulty);
    fetch(api)
        .then(response => response.json())
        .then(response => {
            setupGame(response),
            gameStart();
        })
        .catch(error => console.error(error));
}

function apiUrl(difficulty) {
    if (difficulty === "facile") {
        return apiUrl = "https://mocki.io/v1/278bb667-340f-46f4-90a5-4eea31e27241";
    }
}

function setupGame(infos) {
    allImg = infos.frontImg.concat(infos.frontImg);
    for (let i = 0; i < infos.pairs * 2; i++) {
        cardCreation(infos.backImg);
    }
}

function cardCreation(backImg) {
    let card = document.createElement('div');
    card.classList.add('card');
    randomFront(card);
    sideCreation(card, 'back', backImg);
    const game = document.getElementById('game');
    game.append(card);
}

function sideCreation(parent, side, src) {
    let img = document.createElement('img');
    img.classList.add(side);
    img.setAttribute('src', 'img/memory/' + src);
    parent.append(img);
}

function randomFront(parent) {
    let index = getRndInteger(0, allImg.length - 1);
    sideCreation(parent, 'front', allImg[index]);
    allImg.splice(index, 1);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}