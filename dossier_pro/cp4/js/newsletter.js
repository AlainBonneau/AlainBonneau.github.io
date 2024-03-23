// Je récupère les éléments du DOM.
const newsLetter = document.getElementById("newsletter");
const openNewsLetter = document.getElementById("newsletter__open");
const closeNewsLetter = document.getElementById("newsletter__close");

// J'ajoute un écouteur d'événement sur le bouton d'ouverture de la newsletter.
openNewsLetter.addEventListener("click", (e) => {
  e.preventDefault();
  newsLetter.classList.toggle("newsletter--hidden");
});

// J'ajoute un écouteur d'événement sur le bouton de fermeture de la newsletter.
closeNewsLetter.addEventListener("click", (e) => {
  e.preventDefault();
  newsLetter.classList.add("newsletter--hidden");
});
