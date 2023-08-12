document.addEventListener("DOMContentLoaded", function() {
    // Obtém o caminho da URL atual
    const pathName = window.location.pathname;
    // Seleciona todos os links de navegação
    const links = document.querySelectorAll('nav a');
    // Obtém a referência ao elemento onde o nome do usuário será exibido
    const usernameDisplay = document.getElementById("username");
    // Obtém o nome de usuário armazenado na sessão
    const storedUsername = sessionStorage.getItem("username");
    // Obtém a referência ao link de login
    const loginLink = document.getElementById("login-link");

    // Itera sobre os links de navegação
    for (const link of links) {
        // Adiciona a classe 'active' ao link atual se estiver na página correspondente
        if (pathName.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }

        // Adiciona e remove estilo de fonte ao passar o mouse
        link.addEventListener('mouseover', () => {
            link.style.fontSize = '1.2em';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = '';
        });
    }

    // Verifica se há um elemento para exibir o nome de usuário
    if (usernameDisplay) {
        // Verifica se há um nome de usuário armazenado na sessão
        if (storedUsername) {
            // Exibe o nome de usuário e oculta o link de login
            usernameDisplay.textContent = `${storedUsername}`;
            if (loginLink) {
                loginLink.style.display = "none";
            }
        } else {
            // Limpa o conteúdo do nome de usuário e exibe o link de login
            usernameDisplay.textContent = "";
            if (loginLink) {
                loginLink.style.display = "block";
            }
        }
    }
});
