const slides = document.getElementsByClassName("carousel__photo");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

// fonction pour cacher tous les slides sauf le courant
function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

// fonction pour afficher le slide courant
function showCurrentSlide() {
  hideAllSlides();
  slides[position].classList.add("carousel-item-visible");
  slides[position].classList.remove("carousel-item-hidden");
}

// gestion des événements pour les boutons next et prev
nextButton.addEventListener("click", () => {
  position = (position + 1) % numberOfSlides;
  showCurrentSlide();
});

prevButton.addEventListener("click", () => {
  position = (position - 1 + numberOfSlides) % numberOfSlides;
  showCurrentSlide();
});

// initialisation du carrousel
showCurrentSlide();