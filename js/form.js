document.addEventListener("DOMContentLoaded", function(){
    const submit = document.getElementById('submit');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        validateForm();
    })
});

function validateForm() {
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
            image: 'La couverture ne\'est pas une image',
            format: 'La couverture n\'est pas au bon format (formats acceptés : jpg, jpeg, png)',
            size: 'La couverture fait plus de 100ko',
        },
    };
    const newBook = {
        title: document.forms['newBook']['title'].value,
        date: document.forms['newBook']['date'].value,
        description: document.forms['newBook']['description'].value,
        cover: document.forms['newBook']['cover'].value
    }

}