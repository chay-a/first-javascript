
getBooks();



function getBooks() {
    fetch('https://openlibrary.org/search.json?q=harry+potter&page=1&limit=5')
    .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then(response => feedCreation(response))
    .catch(error => console.log('Erreur : '+ error));
}

function feedCreation(response) {
    for (let i = 0; i < response.docs.length; i++) {
        // getBook(response.docs[i].key, card);
        const card = document.createElement("div");
        card.classList.add('card');
        const feed = document.querySelector('.feed');
        feed.append(card);
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        card.append(cardHeader);
        const cardDatas = document.createElement('div');
        cardDatas.classList.add('card-datas');
        cardHeader.append(cardDatas);
        const cardDate = document.createElement('p');
        cardDate.classList.add('card-date');
        cardDate.textContent = response.docs[i].first_publish_year;
        const cardName = document.createElement('p');
        cardName.classList.add('card-name');
        cardName.textContent = response.docs[i].title;
        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', 'https://covers.openlibrary.org/b/id/'+response.docs[i].cover_i+'-S.jpg');
        cardImg.classList.add('card-profile');
        cardDatas.append(cardDate, cardName, cardImg);
        getBook(response.docs[i].key, card);
    }
}

function getBook(key, parent) {
    fetch("https://openlibrary.org"+key+'.json')
    .then(response => response.json())
    .then(response => createDescription(response, parent))
    .catch(error => alert("Erreur : " + error));
}

function createDescription(response, parent) {
    console.log(response);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    parent.append(cardBody);
    const description = document.createElement('p');
    description.textContent = response.description;
    cardBody.append(description);
    console.log(description);
}