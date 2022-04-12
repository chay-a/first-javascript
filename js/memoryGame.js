let cardFlipped = 0;
let pairFound = 0;
let firstCard, secondCard;

function gameStart() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flip));
}

function flip() {
    cardFlipped++;
    if (cardFlipped <= 2) {
        this.classList.add('flip');
        if (cardFlipped == 1) {
            firstCard = this;
        } else if (cardFlipped == 2) {
            secondCard = this;
        }
    }
    if (cardFlipped == 2) {
        checkSameCards(firstCard, secondCard);
        cardFlipped = 0;
    }
    isWin();
}


function checkSameCards(firstCard, secondCard) {
    if (firstCard.firstChild.getAttribute('src') !== secondCard.firstChild.getAttribute('src')) {
        setTimeout(function () {
            removeFlip(firstCard, secondCard);
        }, 1000);
        removeTry();
    } else {
        pairFound += 1;
    }
}

function removeFlip(firstCard, secondCard) {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}

function removeTry() {
    const tries = document.getElementById('try');
    let nbTries = parseInt(tries.textContent);
    nbTries--;
    tries.textContent = nbTries;
}

function isWin() {
    const tries = document.getElementById('try');
    const pair = document.getElementById('pairs');
    let nbTries = parseInt(tries.textContent);
    let nbPairs = parseInt(pair.textContent);
    if (nbTries == 0 && nbPairs !== pairFound) {
        setTimeout(function () {
            displayResult('défaite');
            addDefeatLS();
        }, 1000);
    } else if (nbTries > 0 && nbPairs == pairFound) {
        setTimeout(function () {
            displayResult('victoire');
            startConfetti();
            addVictoryLS(nbTries);
        }, 1000);
    }
}

function displayResult(resultString) {
    const result = document.getElementById("result");
    result.innerHTML = '<p>Résultat : ' + resultString + '</p>' + result.innerHTML;
    const stat = document.createElement('div');
    stat.style.display = 'flex';
    result.append(stat);
    displayLS(stat);
    result.style.display = 'block';
}

function addDefeatLS(){
    if (localStorage.getItem(difficulty+'Defeat')) {
        localStorage[difficulty+'Defeat']++ ;
    } else {
        localStorage.setItem(difficulty+'Defeat', 1);
    }
}

function addVictoryLS(nbTries){
    if (localStorage.getItem(difficulty+'Victory')) {
        localStorage[difficulty+'Victory']++;
        checkBestPlay(nbTries);
    } else {
        localStorage.setItem(difficulty+'Victory', 1);
    }
}

function checkBestPlay(nbTries) {
    if (localStorage.getItem(difficulty+'Best')) {
        if (nbTries > localStorage.getItem(difficulty+'Best')) {
            localStoragelocalStorage[difficulty+'Best'] = nbTries;
        }
    } else {
        localStorage.setItem(difficulty+'Best', nbTries);
    }
}

function displayLS(parent) {
    for (let i = 0; i < difficulties.length; i++) {
        const difficultyDisplay = document.createElement('div');
        const difficultyName = document.createElement('h2');
        difficultyName.textContent = difficulties[i];
        const nbGame = document.createElement('p');
        const victory = document.createElement('p');
        const defeat = document.createElement('p');
        const best = document.createElement('p');
        nbGame.textContent = 'Nombre de parties : '+localStorage.getItem(difficulties[i]+'GamesNb');
        victory.textContent = 'Nombre de victoire : '+localStorage.getItem(difficulties[i]+'Victory');
        defeat.textContent = 'Nombre de défaite : '+localStorage.getItem(difficulties[i]+'Defeat');
        best.textContent = 'Meilleur score : '+localStorage.getItem(difficulties[i]+'Best');
        difficultyDisplay.append(difficultyName, nbGame, victory, defeat, best);
        parent.append(difficultyDisplay);
    }
}