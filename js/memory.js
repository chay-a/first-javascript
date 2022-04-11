function Game(difficulty) {
    let api = apiUrl(difficulty);
    fetch(api)
        .then(response => response.json())
        .then(response => setupGame(response))
        .catch(error => console.error(error));
}

function apiUrl(difficulty) {
    if (difficulty === "facile") {
        return apiUrl = "https://mocki.io/v1/278bb667-340f-46f4-90a5-4eea31e27241";
    }
}

function setupGame(infos) {
    const allImg = infos.FrontImg.concat(infos.frontImg);
    for (let i = 0; i < infos.pairs * 2; i++) {
        cardCreation(infos.backImg, infos.frontImg);
    }
}

function cardCreation(backImg) {
    let card = document.createElement('div');
    card.classList.add('card');
    sideCreation(card, 'back', backImg);
    randomFront(card);
}

function sideCreation(parent, side, src) {
    let sideDiv = document.createElement('div');
    sideDiv.classList.add(side);
    let img = document.createElement('img');
    img.setAttribute('src', src);
    sideDiv.append(img);
    parent.append(sideDiv);
}

function randomFront(parent) {
    let index = getRndInteger(0, allImg.length + 1);
    sideCreation(parent, 'front', allImg[index]);
    allImg.splice(index, 1);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}