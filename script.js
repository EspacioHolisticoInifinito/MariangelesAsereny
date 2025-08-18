// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MODAL NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.nav-modal');
const closeModal = document.querySelector('.close-menu');

// Abrir modal al hacer clic en el botón hamburguesa
hamburger.addEventListener('click', () => {
  modal.style.display="flex";
});

// Cerrar modal al hacer clic en la X
closeModal.addEventListener('click', () => {
  modal.style.display="none";
});

// Opcional: cerrar modal al hacer clic en cualquier link dentro del modal
window.addEventListener("click", (e)=>{
    if(e.target === modal){
    modal.style.display="none";
  }
});

// ===== TESTIMONIAL SLIDER =====
const track = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const total = testimonials.length;

function showTestimonial(index) {
    track.style.transform = translateX(`-${index * 100}%`);
}

// Autoplay cada 2 segundos
let testimonialInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
}, 2000);

// Botones
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    showTestimonial(currentIndex);
    resetInterval();
});

// Reiniciar autoplay al usar botones
function resetInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        showTestimonial(currentIndex);
    }, 2000);
}

// Mostrar primer testimonio al cargar
showTestimonial(currentIndex);