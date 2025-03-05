// toggle class active

const navbar = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
