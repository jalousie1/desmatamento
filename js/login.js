document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    const users = [
      { username: "admin", password: "admin123" },
      { username: "chris", password: "senha" },
      // adicione mais usuários e senhas aqui
    ];

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = document.querySelector('input[name="username"]');
      const passwordInput = document.querySelector('input[name="password"]');

      const inputUsername = usernameInput.value;
      const inputPassword = passwordInput.value;

      const user = users.find(user => user.username === inputUsername && user.password === inputPassword);

      if (user) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página anterior
        window.history.back();
        
      } else {
        // Login inválido, exibir popup de erro
        alert("Usuário ou senha incorretos.");
      }
    });
});
