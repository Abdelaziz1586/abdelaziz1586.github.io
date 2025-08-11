document.addEventListener('DOMContentLoaded', () => {

    // --- Mouse-follow background effect ---
    const backgroundFx = document.querySelector('.background-fx');
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            backgroundFx.style.setProperty('--mouse-x', `${e.clientX}px`);
            backgroundFx.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- On-Scroll Reveal Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});