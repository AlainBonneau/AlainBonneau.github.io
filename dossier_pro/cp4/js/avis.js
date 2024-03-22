document.addEventListener("DOMContentLoaded", function () {
  // Sélection des cases à cocher de filtrage
  const checkBoxes = document.querySelectorAll('input[name="rating"]');

  // Ajout d'un écouteur d'événement à chaque case à cocher
  checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      // Sélectionner les valeurs de toutes les cases cochées
      const checkedValues = Array.from(
        document.querySelectorAll('input[name="rating"]:checked')
      ).map(function (checkBox) {
        return parseInt(checkBox.value);
      });

      // Sélectionner tous les articles de commentaire
      const reviews = document.querySelectorAll(".review");

      // Parcourir tous les commentaires pour les afficher ou les masquer en fonction de leur note
      reviews.forEach(function (review) {
        const reviewRating = parseInt(review.getAttribute("data-rating"));

        // Vérifier si la note du commentaire est parmi les notes sélectionnées
        if (
          checkedValues.includes(reviewRating) ||
          checkedValues.length === 0
        ) {
          review.style.display = "block"; // Afficher le commentaire
        } else {
          review.style.display = "none"; // Masquer le commentaire
        }
      });
    });
  });
});
