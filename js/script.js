document.addEventListener('DOMContentLoaded', function() {
    const pathName = window.location.pathname;
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        if (pathName.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }

        link.addEventListener('mouseover', () => {
            link.style.fontSize = '1.2em'; // Aumenta o tamanho da fonte ao passar o mouse
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = ''; // Remove o tamanho da fonte definido, restaurando ao padrão
        });
    }
});
