document.addEventListener("DOMContentLoaded", function (event) {
    const gamesLink = document.querySelector('#games');
    gamesLink.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('close');
    })
})