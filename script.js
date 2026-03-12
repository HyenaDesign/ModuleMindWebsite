const navbar = document.querySelector(".nv");
const menuToggle = document.querySelector(".menu-toggle");

window.addEventListener("scroll", function () {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("menu-open");
  });
}