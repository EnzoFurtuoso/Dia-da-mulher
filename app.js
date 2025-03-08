let index = 0;
const messages = [
    "O sorriso mais perfeito!",
    "A mulher mais linda desse mundo!",
    "Obrigado por ser tão incrivel e perfeita",
    "Sou completamente apaixonado por você, Te Amo!",
];

function showMessage(idx) {
    document.getElementById("message").textContent = messages[idx];
}
function nextSlide() {
    const carrossel = document.getElementById("carrossel");
    index = (index + 1) % messages.length;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
    showMessage(index);
}

function prevSlide() {
    const carrossel = document.getElementById("carrossel");
    index = (index - 1 + messages.length) % messages.length;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
    showMessage(index);
}

const presente = document.querySelector('.present');
presente.addEventListener('click', () => {
    window.open('musica.html', '_self');
});