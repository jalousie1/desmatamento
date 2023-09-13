window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('bg-grey');
    } else {
      navbar.classList.remove('bg-grey');
    }
  };