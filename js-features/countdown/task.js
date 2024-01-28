document.addEventListener('DOMContentLoaded', function () {
    let seconds = 59;

    function countdown() {
        seconds--;

        if (seconds <= 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(timerInterval);
        } else {
            updateTimerDisplay();
        }
    }


    function updateTimerDisplay() {
        document.getElementById("timer").innerText = seconds;
    }

    updateTimerDisplay();

    const timerInterval = setInterval(countdown, 1000);
});
