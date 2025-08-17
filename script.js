/* ==========================
   NAVBAR SCROLL
========================== */
(function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();

/* ==========================
   HAMBURGER MENU
========================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

if (hamburger && navLinks && closeMenu) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
  });

  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
}

/* ==========================
   CARRITO GLOBAL
========================== */
let cartItems = [];

function addToCart(name, price) {
  if (!name || !price) return;
  cartItems.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartItemsList = document.getElementById('cart-items');
  if (!cartItemsList) return;

  cartItemsList.innerHTML = '';
  if (!cartItems || cartItems.length === 0) {
    cartItemsList.innerHTML = '<li>El carrito está vacío</li>';
    return;
  }

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - $' + item.price;
    cartItemsList.appendChild(li);
  });
}

/* ==========================
   MODAL CARRITO
========================== */
(function() {
  const cartBtn = document.getElementById('cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const closeModal = document.querySelector('.modal .close');
  const checkoutBtn = document.getElementById('checkout-btn');
  if (!cartBtn || !cartModal || !closeModal || !checkoutBtn) return;

  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    renderCart();
  });

  closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
  });

  checkoutBtn.addEventListener('click', () => {
    alert('Redirigiendo a medios de pago...');
  });
})();

/* ==========================
   TARJETAS SERVICIOS
========================== */
const serviceCards = document.querySelectorAll('#servicios .card');

serviceCards.forEach(card => {
  // Girar tarjeta al hacer clic
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // Botones dentro de la parte trasera
  const addBtn = card.querySelector('.btn-primary');
  const viewBtn = card.querySelector('.btn-secondary');

  if (addBtn) {
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // no hace que la tarjeta gire
      const name = card.querySelector('h3')?.textContent || 'Producto';
      const price = card.querySelector('.price')?.textContent.replace('$','') || '0';
      addToCart(name, price);
      card.classList.remove('flipped'); // vuelve al frente
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = card.querySelector('h3')?.textContent || 'Producto';
      const price = card.querySelector('.price')?.textContent.replace('$','') || '0';
      addToCart(name, price);
      const cartModal = document.getElementById('cart-modal');
      if (cartModal) cartModal.style.display = 'block';
      card.classList.remove('flipped'); // vuelve al frente
    });
  }
});

/* ==========================
   SLIDER TESTIMONIOS
========================== */
(function() {
  const track = document.querySelector('.testimonial-track');
  const prevBtn = document.querySelector('.testimonial-slider .prev');
  const nextBtn = document.querySelector('.testimonial-slider .next');
  if (!track || !prevBtn || !nextBtn) return;

  let index = 0;

  function updateSlider() {
    const slide = track.querySelector('.testimonial');
    if (!slide) return;
    const slideWidth = slide.offsetWidth + 20; // margen
    const translateX = -slideWidth * index;
    track.style.transform = 'translateX(' + translateX + 'px)';
  }

  prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = track.children.length - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    index++;
    if (index >= track.children.length) index = 0;
    updateSlider();
  });

  setInterval(() => {
    index++;
    if (index >= track.children.length) index = 0;
    updateSlider();
  }, 5000);
})();

//Contador de carrito
function addToCart(name, price) {
  if (!name || !price) return;
  cartItems.push({ name, price });
  renderCart();
  updateCartCount(); // actualizamos el contador
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (!cartCount) return;

  if (cartItems.length > 0) {
    cartCount.style.display = 'inline-flex';//se ve
    cartCount.textContent = cartItems.length;
  }else{
    cartCount.style.display='none'
  }
  }
