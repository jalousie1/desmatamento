document.addEventListener("DOMContentLoaded", function() {
    // Obtém a referência ao botão de login
    const loginButton = document.getElementById("login-button");
    // Obtém a referência ao campo de senha
    const passwordField = document.getElementById("password");

    // Verifica se o botão de login e o campo de senha existem
    if (loginButton && passwordField) {
        // Adiciona um evento de clique ao botão de login
        loginButton.addEventListener("click", function() {
            // Obtém os valores do nome de usuário e senha
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Valores de usuário e senha de teste
            const Username = "admin";
            const Password = "admin123";

            // Verifica se as credenciais estão corretas
            if (username === Username && password === Password) {
                // Exibe uma mensagem de sucesso, salva o nome de usuário na sessão e redireciona para a página principal
                alert("Login bem sucedido!");
                sessionStorage.setItem("username", username);
                window.location.href = "index.html";
            } else {
                // Exibe uma mensagem de erro se as credenciais estiverem incorretas
                alert("Login falhou. Verifique as credenciais.");
            }
        });

        // Permite pressionar Enter para enviar o formulário de login
        passwordField.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                loginButton.click();
            }
        });
    }
});
