document.addEventListener("DOMContentLoaded", function(){
    const submit = document.getElementById('submit');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        
        const errors = validateForm();
        
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
    } else if (input.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi)) {
        return 'special';
    } else if (input.match(/[0-9]/gi)) {
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