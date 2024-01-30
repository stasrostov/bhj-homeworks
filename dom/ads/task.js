const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const rotatorCases = rotator.querySelectorAll('.rotator__case');

    let currentIndex = 0;

    const rotateText = () => {
        rotatorCases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % rotatorCases.length;
        rotatorCases[currentIndex].classList.add('rotator__case_active');
    };

    setInterval(rotateText, 1000);
});
