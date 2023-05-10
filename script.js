document.addEventListener("DOMContentLoaded", function() {
    var solucoesDropdown = document.getElementById("solucoes-dropdown");
    var solucoesLink = document.getElementById("solucoes");
  
    solucoesLink.addEventListener("mouseenter", function() {
      solucoesDropdown.style.display = "block";
    });
  
    solucoesLink.addEventListener("mouseleave", function() {
      solucoesDropdown.style.display = "none";
    });
  });

  const meuHeader = document.getElementById('header-softcom');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      meuHeader.classList.add('header');
      meuHeader.classList.remove('header');
    } else {
      meuHeader.classList.add('header-transp');
      meuHeader.classList.remove('header-scroll');
    }
  });