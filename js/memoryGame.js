let cardFlipped = 0;

function gameStart() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flip));
}

function flip() {
    cardFlipped++;
    if (cardFlipped <= 2) {
        this.classList.add('flip');
    }
    if (cardFlipped == 2) {
        checkSameCards();
        cardFlipped = 0;
    }
}


function checkSameCards() {
    const flippedCards = document.querySelectorAll('.flip');
    console.log(flippedCards[0],flippedCards[1]);
    if (flippedCards[0].firstChild.getAttribute('src') !== flippedCards[1].firstChild.getAttribute('src')) {
        setTimeout(function () {
            removeFlip(flippedCards);
        }, 1000);
    }
}

function removeFlip(flippedCards) {
    flippedCards.forEach(flippedCard => {
        flippedCard.classList.remove('flip');
    });
}

{

}