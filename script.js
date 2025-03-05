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

  if (!search.contains(e.target) && !searchIcon.contains(e.target)) {
    search.classList.remove("active");
  }

  if (!cart.contains(e.target) && !shopCart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

const searchIcon = document.getElementById("search");
const search = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.getElementById("search").onclick = (e) => {
  search.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const shopCart = document.getElementById("shoping-cart-button");
const cart = document.querySelector(".shooping-cart");

document.getElementById("shoping-cart-button").onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
};

// modal box

const itemDetailModal = document.getElementById("item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "flex";
  };
});

// click tombol close

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
