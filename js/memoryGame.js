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
        }, 1000);
    } else if (nbTries > 0 && nbPairs == pairFound) {
        setTimeout(function () {
            displayResult('victoire');
        }, 1000);
    }
}

function displayResult(resultString) {
    const result = document.getElementById("result");
    result.innerHTML = '<p>Résultat : ' + resultString + '</p>';
    result.style.display = 'block';
}