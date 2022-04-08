let errors = {};
document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        errors = validateForm();
        if (Object.entries(errors).length !== 0) {
            displayErrors(errors);
        } else {
            deleteOldErrors();
            
            const newBook = {
                title: document.forms['newBook']['title'].value,
                first_publish_year: document.forms['newBook']['date'].value,
                description: document.forms['newBook']['description'].value,
                cover: document.forms['newBook']['cover'].value,
            }
            const card = displayBook(newBook);
            createDescription(newBook, card);
            displayDeleteButton(card);
            document.getElementById('newBook').reset();
            
        }
    })
});

function validateForm() {
    let errors = {};
    const newBook = {
        title: document.forms['newBook']['title'].value,
        date: document.forms['newBook']['date'].value,
        description: document.forms['newBook']['description'].value,
        cover: document.getElementById('cover'),
    }
    errors.title = textValidate(newBook.title, 5, 50);
    errors.date = dateValidate(newBook.date);
    errors.description = textValidate(newBook.description, 50, 300);
    errors.cover = imageValidate(newBook.cover);

    errors = checkErrors(errors);
    return errors;
}


function textValidate(input, min, max) {
    if (input == '') {
        return 'empty';
    } else if (input.length < min) {
        return 'min';
    } else if (input.length > max) {
        return 'max';
    } else if (input.match(/^[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]+$/gi)) {
        return 'special';
    } else if (input.match(/^[0-9]+$/gi)) {
        return 'number';
    }
}

function dateValidate(date) {
    if (date == '') {
        return 'empty';
    } else if (!date.match(/\d{4}(\-)\d{2}(\-)\d{2}/i)) {
        return 'format';
    } else if (new Date(date) > new Date()) {
        return 'today';
    }
}

function imageValidate(image) {
    if (image.value == '') {
        return 'empty';
    } else if (!(/(\.jpe?g|\.png)$/i.test(image.value))) {
        return 'format';
    } else if (Math.round(image.files[0].size / 1024) > 96) {
        return 'size';
    }
}

function checkErrors(errors) {
    for (const key in errors) {
        if (errors[key] === undefined) {
            delete errors[key];
        }
    }
    return errors;
}

function displayErrors(errors) {
    deleteOldErrors();
    const errorMsg = {
        title: {
            empty: 'Le titre ne peut pas être vide',
            min: 'Le titre doit au moins contenir 5 caractères',
            max: 'Le titre ne peut pas faire plus de 50 caractères',
            special: 'Le titre ne peut pas contenir que des caratères spéciaux',
            number: 'Le titre ne peut pas contenir que des chiffres',
        },
        date: {
            empty: 'La date ne peut pas être vide',
            format: 'La date n\'est pas au bon format',
            today: 'La date ne peut pas être après aujourdh\'ui',
        },
        description: {
            empty: 'La description ne peut pas être vide',
            min: 'La description doit au moins contenir 50 caractères',
            max: 'La description ne peut pas faire plus de 300 caractères',
            special: 'La description ne peut pas contenir que des caratères spéciaux',
            number: 'La description ne peut pas contenir que des chiffres',
        },
        cover: {
            empty: 'La couverture ne peut pas être vide',
            format: 'La couverture n\'est pas au bon format (formats acceptés : jpg, jpeg, png)',
            size: 'La couverture fait plus de 100ko',
        },
    };
    for (const key in errors) {
        const input = document.getElementById(key);
        const p = document.createElement('p');
        p.textContent = errorMsg[key][errors[key]];
        p.classList.add('error');
        input.after(p);
    }
    emptyErrorsObject();
}

function deleteOldErrors() {
    const errors = document.querySelectorAll('.error');

    errors.forEach(error => {
        error.remove();
    });
}

function emptyErrorsObject() {
    for (const key in errors) {
            delete errors[key];
    }
}

function displayDeleteButton(card) {
    const cardDatas = card.firstChild;
    cardDatas.innerHTML = '<button class="card-delete"><img src="img/delete.svg" alt="delete post" class="card-close icons"></button>'+cardDatas.innerHTML;
}