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

  const menu = document.getElementById("header-softcom"); // colocar em cache
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      menu.classList.add("header-scroll");
      for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
        document.querySelectorAll(".header-link")[i].style.color = "#fff"
      }
      document.querySelector(".header-fale-conosco").style.color = "#fff"
      document.querySelectorAll(".header-proposta")[0].style.color = "#fff"
      document.querySelectorAll(".header-proposta")[1].style.color = "#fff"
      document.querySelectorAll(".mensage-icon")[0].style.filter = "none"
      document.querySelectorAll(".mensage-icon")[1].style.filter = "none"
      document.querySelector(".softcom-logo").src = "assets/softcom-yellow.png"
    } else {
      menu.classList.remove("header-scroll");
      for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
        document.querySelectorAll(".header-link")[i].style.color = "#000"
      }
      document.querySelector(".header-fale-conosco").style.color = "#000"
      document.querySelectorAll(".header-proposta")[0].style.color = "#000"
      document.querySelectorAll(".header-proposta")[1].style.color = "#000"
      document.querySelectorAll(".mensage-icon")[0].style.filter = "brightness(0%)"
      document.querySelectorAll(".mensage-icon")[1].style.filter = "brightness(0%)"
      document.querySelector(".softcom-logo").src = "assets/softcom-black.png"
    }
  });