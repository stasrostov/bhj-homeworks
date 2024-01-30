const fontControls = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');

fontControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
        fontControls.forEach(c => c.classList.remove('font-size_active'));
        control.classList.add('font-size_active');
        const fontSize = control.dataset.size;

        if (fontSize === 'small') {
            bookElement.classList.remove('book_fs-big');
            bookElement.classList.add('book_fs-small');
        } else if (fontSize === 'big') {
            bookElement.classList.remove('book_fs-small');
            bookElement.classList.add('book_fs-big');
        } else {
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
        }
    });
});
