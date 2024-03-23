// Je récupère les éléments du DOM.
const darkTheme = document.getElementById("theme-dark");
const greenTheme = document.getElementById("theme-green");
const redTheme = document.getElementById("theme-red");
const blueTheme = document.getElementById("theme-blue");

// J'ajoute un écouteur d'événement sur le bouton du thème sombre.
darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
});

// J'ajoute un écouteur d'événement sur le bouton du thème vert.
greenTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-red", "theme-blue");
  document.body.classList.add("theme-green");
});

// J'ajoute un écouteur d'événement sur le bouton du thème rouge.
redTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-blue");
  document.body.classList.add("theme-red");
});

// J'ajoute un écouteur d'événement sur le bouton du thème bleu.
blueTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-red");
  document.body.classList.add("theme-blue");
});
