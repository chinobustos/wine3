let index = 0;
const intervalTime = 3000; // Tiempo entre imágenes (3 segundos)
const sliderBox = document.querySelector('.slider-box ul');
const totalSlides = sliderBox.children.length;

// Función para mover el slider automáticamente
function autoSlide() {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  sliderBox.style.transform = `translateX(${-index * 100}%)`;
}

// Inicia el slider automático
let autoSlider = setInterval(autoSlide, intervalTime);

// Pausa y reinicia el slider en caso de interacción manual
sliderBox.addEventListener('mouseover', () => clearInterval(autoSlider));
sliderBox.addEventListener('mouseout', () => autoSlider = setInterval(autoSlide, intervalTime));


