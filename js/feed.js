$(document).ready(function() {
    getBooks();
    $('refresh').click(function() {
        getBooks();
    });
});

let getBooks = function () {
    $.ajax(
        {
            url: 'https://openlibrary.org/search.json?q=harry+potter&page=1&limit=5',
            method: "GET",
            dataType: "json",
        })
    .done(function (response) {
        feedCreation(response);
        console.log('traitement');
    })
};

let getBook = function(key, parent) {
    $.ajax({
        url: "https://openlibrary.org"+key+'.json',
        method: "GET",
        dataType: "json",
    })
    .done(
        function (response) {
            createDescription(response, parent);
        }
    );
}
console.log("fin traitement")
let feedCreation = function (response) {
    for (let i = 0; i < response.docs.length; i++) {
        const card = $("<div>");
        card.addClass("card");
        $('.feed').append(card);
        const cardHeader = $("<div>").addClass('card-header');
        card.append(cardHeader);
        const cardDatas = $("<div>").addClass('card-datas');
        cardHeader.append(cardDatas)
        const cardDate = $("<p>").addClass("card-date");
        cardDate.text(response.docs[i].first_publish_year);
        const cardName = $("<p>").addClass('card-name');
        cardName.text(response.docs[i].title);
        const cardImg = $('<img>').attr('src', 'https://covers.openlibrary.org/b/id/'+response.docs[i].cover_i+'-S.jpg').addClass('card-profile');
        cardDatas.append(cardDate, cardName, cardImg);
        getBook(response.docs[i].key, card);
    }
}

let createDescription = function (response, parent) {
    const cardBody = $('<div>').addClass('card-body');
    parent.append(cardBody);
    cardBody.append($('<p>').text(response.description));
}