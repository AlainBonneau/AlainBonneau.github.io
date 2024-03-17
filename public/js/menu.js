const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const headerNavLink = document.querySelector(".header-navbar__mobile");

function toggleMobileMenu() {
  headerNavLink.classList.toggle("mobile-menu");
}

openMenu.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);