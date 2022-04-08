document.addEventListener("DOMContentLoaded", function (event) {
    const column = document.getElementById('column');
    const columns = document.getElementById('columns');

    column.addEventListener('click', function () {
        toggleView('column')
    });

    columns.addEventListener('click', function () {
        toggleView('row')
    })
})

function toggleView(direction) {
    const instagram = document.querySelector('.instagram');
        instagram.style.flexDirection = direction;
}