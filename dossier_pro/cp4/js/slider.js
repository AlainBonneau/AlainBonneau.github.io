document.addEventListener("DOMContentLoaded", function () {
  const sliderImage = document.querySelectorAll(".slider__img");
  const prevBtn = document.querySelector(".slider__btn[aria-label='Précédent']");
  const nextBtn = document.querySelector(".slider__btn[aria-label='Suivant']");
  let currentSlide = 0;

  function showSlide() {
    sliderImage.forEach((image, index) => {
      if (index === currentSlide) {
        image.classList.add("slider__img--current");
      } else {
        image.classList.remove("slider__img--current");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImage.length;
    showSlide();
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImage.length) % sliderImage.length;
    showSlide();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
