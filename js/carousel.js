const hero = document.querySelector('.hero');
const images = [
    './images/img1.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
    './images/img4.jpg',
    './images/img5.jpg',
    './images/img6.jpg',
    './images/img7.jpg',

];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `linear-gradient(180deg, var(--color-bg-hero) 0%, var(--color-bg-hero)), url(${images[currentIndex]})`;
}

// Cambiar imagen cada 5 segundos
setInterval(changeBackground, 5000);
