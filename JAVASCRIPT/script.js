// script.js
const image = document.getElementById("zoom-image");

image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.5)"; // Define o nível de zoom
});

image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)"; // Retorna ao tamanho original
});