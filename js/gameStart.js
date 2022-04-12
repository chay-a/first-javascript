let difficulty;
const difficulties = ['facile', 'moyen', 'difficile'];
document.addEventListener("DOMContentLoaded", function (event) {
    const difficultyTigger = document.getElementById('difficulty-selection');
    difficultyTigger.addEventListener('click', function () {
        displayDifficulties();
    });
    const difficultyList = document.querySelectorAll('#difficulty-menu p');
    difficultyList.forEach(item => item.addEventListener('click', function (e) {
        getDifficulty(e);
        addNewGameLS();
        displayGame(difficulty);
    }))
})

function displayDifficulties() {
    const difficultyList = document.getElementById('difficulty-menu');
    difficultyList.style.display = 'block';
}

function getDifficulty(e) {
    difficulty = e.target.textContent;
}

function addNewGameLS() {
    if (localStorage.getItem(difficulty + 'GamesNb')) {
        localStorage[difficulty + 'GamesNb']++;
    } else {
        localStorage.setItem(difficulty + 'GamesNb', 1);
    }
}

function setLocalStorage() {
    for (let i = 0; i < difficulties.length; i++) {
        localStorage.setItem(difficulties[i] + 'GamesNb', 0);
        localStorage.setItem(difficulties[i] + 'Defeat', 0);
        localStorage.setItem(difficulties[i] + 'Victory', 0);
        localStorage.setItem(difficulties[i] + 'Best', 0);
    }
}