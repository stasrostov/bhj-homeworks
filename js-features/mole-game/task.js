document.addEventListener('DOMContentLoaded', function () {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    let deadCount = 0;
    let lostCount = 0;

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function onHoleClick(index) {
        const hole = getHole(index);

        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
        } else {
            lostCount++;
        }

        deadCounter.innerText = deadCount;
        lostCounter.innerText = lostCount;

        if (deadCount === 10) {
            alert('Вы победили! Убито 10 кротов!');
            resetCounters();
        } else if (lostCount === 5) {
            alert('Игра окончена! Проиграно 5 раз!');
            resetCounters();
        }

        hole.classList.remove('hole_has-mole');

        showRandomMole();
    }

    function resetCounters() {
        deadCount = 0;
        lostCount = 0;
        deadCounter.innerText = '0';
        lostCounter.innerText = '0';
    }

    function showRandomMole() {
        for (let i = 1; i <= 9; i++) {
            getHole(i).classList.remove('hole_has-mole');
        }

        const randomIndex = Math.floor(Math.random() * 9) + 1;

        getHole(randomIndex).classList.add('hole_has-mole');
    }

    showRandomMole();

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', () => onHoleClick(i));
    }
});
