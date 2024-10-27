document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            reveal.classList.add('reveal_active');
        }
    });
});
