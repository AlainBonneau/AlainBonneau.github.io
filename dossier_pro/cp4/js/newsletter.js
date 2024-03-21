const newsLetter = document.getElementById("newsletter");
const openNewsLetter = document.getElementById("newsletter__open btn");
const closeNewsLetter = document.getElementById("newsletter__close btn");

openNewsLetter.addEventListener("click", (e) => {
  e.preventDefault();
  newsLetter.classList.toggle("newsletter--hidden");
});

closeNewsLetter.addEventListener("click", (e) => {
  e.preventDefault();
  newsLetter.classList.add("newsletter--hidden");
});

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;

//   if (scrollPosition > 500) {
//     newsLetter.classList.remove("newsletter--hidden");
//   } else {
//     newsLetter.classList.add("newsletter--hidden");
//   }
// });