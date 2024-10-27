document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function changeCase() {
        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;

        const nextCase = cases[currentIndex];
        const speed = nextCase.dataset.speed;
        const color = nextCase.dataset.color;

        nextCase.style.color = color;
        nextCase.classList.add('rotator__case_active');

        setTimeout(changeCase, speed);
    }
    changeCase();
});
