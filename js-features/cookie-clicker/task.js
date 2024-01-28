document.addEventListener('DOMContentLoaded', function () {
    const clickerCounter = document.getElementById('clicker__counter');
    const cookieImage = document.getElementById('cookie');

    let counter = 0;

    cookieImage.addEventListener('click', function () {
        counter++;

        clickerCounter.innerText = counter;

        if (cookieImage.width === 200) {
            cookieImage.width *= 0.9;
            cookieImage.height *= 0.9;
        } else {
            cookieImage.width = 200;
            cookieImage.height = 127;
        }
    });
});
