document.addEventListener("DOMContentLoaded", function (event) {
    const gamesLink = document.querySelector('#games');
    gamesLink.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = document.querySelector('.dropdown');
        if (dropdown.style.display == "none") {
            
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";

        }
    })
})