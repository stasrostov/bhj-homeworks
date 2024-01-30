const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach(revealElement => {
        const elementPosition = revealElement.getBoundingClientRect();

        if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
            revealElement.classList.add('reveal_active');
        } else {
            revealElement.classList.remove('reveal_active');
        }
    });
});
