// script.js
document.addEventListener("click", function (event) {
  const submenus = document.querySelectorAll(".submenu");
  for (const submenu of submenus) {
    if (
      event.target !== submenu &&
      event.target.dataset.submenu !== submenu.id
    ) {
      submenu.style.display = "none";
    }
  }
});

var swiper = new Swiper(".swiper-container", {
  loop: true, // Para que el slider sea cíclico
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
