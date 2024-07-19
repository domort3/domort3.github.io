document.addEventListener('DOMContentLoaded', function() {
    // Typed effect for header profession
    const typedElement = document.getElementById('typed');
    const professions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'AI Enthusiast'];
    let professionIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < professions[professionIndex].length) {
            typedElement.textContent += professions[professionIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typedElement.textContent = professions[professionIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            professionIndex = (professionIndex + 1) % professions.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();

    // Project card expansion
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});