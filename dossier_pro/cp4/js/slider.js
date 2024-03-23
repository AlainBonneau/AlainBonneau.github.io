document.addEventListener("DOMContentLoaded", function () {
  // Je récupère les éléments du DOM.
  const sliderImage = document.querySelectorAll(".slider__img");
  const prevBtn = document.querySelector(".slider__btn[aria-label='Précédent']");
  const nextBtn = document.querySelector(".slider__btn[aria-label='Suivant']");
  // Je déclare une variable pour stocker l'index de l'image actuellement affichée.
  let currentSlide = 0;

  // J'ajoute une classe à l'image actuellement affichée et je retire cette classe aux autres images.
  function showSlide() {
    sliderImage.forEach((image, index) => {
      if (index === currentSlide) {
        image.classList.add("slider__img--current");
      } else {
        image.classList.remove("slider__img--current");
      }
    });
  }

  // Je déclare une fonction pour afficher l'image suivante.
  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImage.length;
    showSlide();
  }
  // Je déclare une fonction pour afficher l'image précédente.
  function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImage.length) % sliderImage.length;
    showSlide();
  }

  // J'ajoute un écouteur d'événement sur les boutons "Suivant" et "Précédent".
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
