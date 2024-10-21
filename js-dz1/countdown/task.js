document.addEventListener('DOMContentLoaded', () => {

    const timerElement = document.getElementById('timer');
    let timeLeft = parseInt(timerElement.textContent, 10);

    const countdown = () => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            alert('Вы победили в конкурсе!');
        }
    };

    const timerInterval = setInterval(countdown, 1000);
});
