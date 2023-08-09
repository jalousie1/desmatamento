document.addEventListener('DOMContentLoaded', function() {
    const pathName = window.location.pathname;
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        if (pathName.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    }
});
