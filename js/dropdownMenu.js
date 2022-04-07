document.addEventListener("DOMContentLoaded", function (event) {
    const gamesLink = document.querySelector('#games');
    gamesLink.addEventListener('click', function(e) {
        toggleMenu(e);
    });
    const gamesLinkMobile = document.querySelector('#gamesMobile');
    gamesLinkMobile.addEventListener('click', function(e) {
        toggleMenu(e, '-mobile');
    })
})

function toggleMenu(e, mobile = '') {
    e.preventDefault();
    const dropdown = document.querySelector('.dropdown'+ mobile);
    dropdown.classList.toggle('close');
}