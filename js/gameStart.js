let difficulty;
document.addEventListener("DOMContentLoaded", function (event) {
    const difficultyTigger = document.getElementById('difficulty-selection');
    difficultyTigger.addEventListener('click', function () {
        displayDifficulties();
    });
    const difficultyList = document.querySelectorAll('#difficulty-menu p');
    difficultyList.forEach(item => item.addEventListener('click', function (e) {
        getDifficulty(e);
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