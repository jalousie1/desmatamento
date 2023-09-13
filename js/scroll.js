window.onscroll = function() { // Define uma função para ser executada quando ocorrer uma rolagem na janela do navegador
  var navbar = document.querySelector('.navbar');   // Seleciona o elemento HTML que possui a classe CSS "navbar"
  if (window.scrollY > 100) {  // Verifica se a posição vertical de rolagem é maior que 100 pixels
      navbar.classList.add('bg-grey'); // Se a condição for verdadeira, adiciona a classe 'bg-grey' à barra de navegação
  } else {
      navbar.classList.remove('bg-grey'); // Se a condição for falsa, remove a classe 'bg-grey' da barra de navegação
  }
};