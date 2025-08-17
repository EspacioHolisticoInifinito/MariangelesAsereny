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
  // Abrir menú
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
  });

  // Cerrar menú
  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
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
  const cartItemsList = document.getElementById('cart-items');
  if (!cartBtn || !cartModal || !closeModal || !checkoutBtn || !cartItemsList) return;

  let cartItems = [];

  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    renderCart();
  });

  closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });

  checkoutBtn.addEventListener('click', () => {
    alert('Redirigiendo a medios de pago...');
    // Aquí se puede agregar la redirección real
  });

  function addToCart(name, price) {
    if (!name || !price) return;
    cartItems.push({ name, price });
    renderCart();
  }

  function renderCart() {
    if (!cartItemsList) return;
    cartItemsList.innerHTML = '';
    if (!cartItems || cartItems.length === 0) {
      cartItemsList.innerHTML = '<li>El carrito está vacío</li>';
      return;
    }

    cartItems.forEach(item => {
      const li = document.createElement('li');
      const itemName = item.name || 'Producto';
      const itemPrice = item.price || '0';
      li.textContent = itemName + ' - $' + itemPrice;
      cartItemsList.appendChild(li);
    });
  }

  const addCartBtns = document.querySelectorAll('.add-cart');
  if (addCartBtns && addCartBtns.length > 0) {
    addCartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const courseCard = btn.parentElement;
        if (!courseCard) return;
        const nameElem = courseCard.querySelector('h3');
        const priceElem = courseCard.querySelector('.price');
        if (!nameElem || !priceElem) return;
        const name = nameElem.textContent || 'Curso';
        const price = priceElem.textContent.replace('$','') || '0';
        addToCart(name, price);
      });
    });
  }
})();

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
})()

