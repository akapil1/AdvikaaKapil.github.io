document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust for fixed navbar height
        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
});
