document.addEventListener("DOMContentLoaded", function (event) {
    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', function () {
        getBooks();
    })
    document.getElementById('search').addEventListener('click', function () {
        const research = document.getElementById('searchInput').value;
        const encodedResearch = encodeURIComponent(research);
        getBooks(encodedResearch);
    })
    document.addEventListener('dblclick', function (e) {
        deleteItem(e, 'DIV', 'card');
    })
});