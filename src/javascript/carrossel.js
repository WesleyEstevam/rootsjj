document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel-image");
  let index = 0;

  if (images.length > 0) {
    images[index].classList.add("active"); // Garante que a primeira imagem comece ativa

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  }
});
