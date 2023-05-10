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

(function () {
    var menu = document.getElementById('header-softcom'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('header-scroll'); // > 0 ou outro valor desejado
        else menu.classList.remove('header-scroll');
    });
})();