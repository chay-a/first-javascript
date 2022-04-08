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
