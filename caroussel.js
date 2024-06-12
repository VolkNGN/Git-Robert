const carousel = document.querySelector('.carousel');
const photos = carousel.querySelectorAll('.carousel__photo');
const nextButton = carousel.querySelector('.carousel__button--next');
const prevButton = carousel.querySelector('.carousel__button--prev');

let currentPhotoIndex = 0;

nextButton.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateCarousel();
});

function updateCarousel() {
  photos.forEach((photo, index) => {
    photo.classList.toggle('initial', index === currentPhotoIndex);
  });
}

// Initialize the carousel
updateCarousel();