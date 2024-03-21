const darkTheme = document.getElementById("theme-dark");
const greenTheme = document.getElementById("theme-green");
const redTheme = document.getElementById("theme-red");
const blueTheme = document.getElementById("theme-blue");

darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
});

greenTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-red", "theme-blue");
  document.body.classList.add("theme-green");
});

redTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-blue");
  document.body.classList.add("theme-red");
});

blueTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-red");
  document.body.classList.add("theme-blue");
});
