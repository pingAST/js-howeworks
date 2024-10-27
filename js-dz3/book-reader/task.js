document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    const fontSizeLinks = document.querySelectorAll('.font-size');
    fontSizeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

            link.classList.add('font-size_active');
            book.classList.remove('book_fs-small', 'book_fs-big');

            const size = link.dataset.size;
            if (size) {
                book.classList.add(`book_fs-${size}`);
            }
        });
    });

    // Обработка изменения цвета текста
    const textColorLinks = document.querySelectorAll('.color[data-text-color]');
    textColorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            textColorLinks.forEach(link => link.classList.remove('color_active'));

            link.classList.add('color_active');
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

            const textColor = link.dataset.textColor;
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
        });
    });

    // Обработка изменения цвета фона
    const bgColorLinks = document.querySelectorAll('.color[data-bg-color]');
    bgColorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            bgColorLinks.forEach(link => link.classList.remove('color_active'));

            link.classList.add('color_active');
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

            const bgColor = link.dataset.bgColor;
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        });
    });
});
