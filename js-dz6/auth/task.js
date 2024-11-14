document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const userId = localStorage.getItem('user_id');
    if (userId) {
        showWelcome(userId);
    } else {
        document.getElementById('signin').classList.add('signin_active');
    }

    signinForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);
        const data = {
            login: formData.get('login'),
            password: formData.get('password'),
        };

        try {
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                localStorage.setItem('user_id', result.user_id);
                showWelcome(result.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при авторизации');
        }
    });

    function showWelcome(userId) {
        document.getElementById('signin').classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
    }
});
