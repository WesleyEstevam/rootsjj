const images = document.querySelectorAll(".carousel-image");
let index = 0;

function showNextImage() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(showNextImage, 3000); // Troca a imagem a cada 3 segundos
