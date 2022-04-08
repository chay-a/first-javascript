document.addEventListener("DOMContentLoaded", function (event) {
    const column = document.getElementById('column');
    const columns = document.getElementById('columns');

    column.addEventListener('click', function () {
        toggleView('column')
    });

    columns.addEventListener('click', function () {
        toggleView('row')
    });
    let i = 0;
    const send = document.getElementById('imgSend');
    const add = document.getElementById('add');
    add.addEventListener('click', function (e) {
        e.preventDefault();
        if (i < 5) {
            const form = document.getElementById('formImg');
            const input = document.createElement('input');
            input.type = 'text';
            input.classList.add('img-input');
            form.append(input);
            i++;
        } else {
            console.log('non');
        }
        send.style.display = 'block';
    });
    send.addEventListener('click', function (e) {
        e.preventDefault();
        const imgUrl = document.querySelectorAll('.img-input');
        for (const img  of imgUrl) {
            if (imgUrlValidate(img.value)) {
                displayImg(img);
            }
        }
    });
})

function toggleView(direction) {
    const instagram = document.querySelector('.instagram');
    instagram.style.flexDirection = direction;
}

function displayImg(img) {
    const instagram = document.querySelector('.instagram');
    const image = document.createElement('img');
    image.setAttribute('src', img.value);
    instagram.prepend(image);
}