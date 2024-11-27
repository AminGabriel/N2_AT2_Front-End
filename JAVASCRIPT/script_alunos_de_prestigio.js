const images = document.querySelectorAll('.card-img-top');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener(`click`, () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex'; // Exibe o lightbox
    });
});

// Fecha o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
        lightboxImg.classList.remove('zoomed'); // Remove o zoom ao fechar
    }
});

// Alterna o zoom ao clicar na imagem
lightboxImg.addEventListener('click', () => {
    lightboxImg.classList.toggle('zoomed');
});