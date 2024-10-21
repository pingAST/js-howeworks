(() => {
    let playing = true,
        activeHole = 1,
        score = 0,
        misses = 0;

    const maxScore = 10;
    const maxMisses = 5;

    const getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index => getHole(index).className = 'hole',
        activateHole = index => getHole(index).className = 'hole hole_has-mole',
        updateScoreDisplay = () => {
            document.getElementById('dead').innerText = score;
            document.getElementById('lost').innerText = misses;
        },
        checkGameStatus = () => {
            if (score >= maxScore) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            } else if (misses >= maxMisses) {
                alert('Игра окончена! Вы проиграли.');
                resetGame();
            }
        },
        resetGame = () => {
            playing = true;
            score = 0;
            misses = 0;
            updateScoreDisplay();
            next();
        },
        next = () => setTimeout(() => {
            if (!playing) {
                return;
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next();
        }, 800);

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', () => {
            if (!playing) return;

            if (getHole(i).classList.contains('hole_has-mole')) {
                score++;
                updateScoreDisplay();
            } else {
                misses++;
                updateScoreDisplay();
            }

            checkGameStatus();
        });
    }

    next();
})();
