const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const headerNavLink = document.querySelector(".header-navbar__mobile");

openMenu.addEventListener("click", () => {
  headerNavLink.classList.add("mobile-menu");
});

closeMenu.addEventListener("click", () => {
  headerNavLink.classList.remove("mobile-menu");
});
