// ==========================================
// FreshGuard Labs - Animaciones avanzadas
// Efecto de escritura, GSAP, Swiper
// ==========================================

// Inicializar AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-out-quad'
});

// ----- EFECTO DE ESCRITURA EN EL HERO -----
const typingTextElement = document.getElementById('typingText');
const phrases = ['“Protección que viene de la Naturaleza”', '“Ciencia limpia para tu piel”', '“Frescura que respira”'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 500);
    return;
  }
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}
typeEffect();

// ----- GSAP y ScrollTrigger -----
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada para secciones (más dinámica)
gsap.utils.toArray('section').forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
});

// Animación especial para títulos principales
gsap.utils.toArray('h2').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1)'
  });
});

// Animación para los iconos flotantes (movimiento continuo)
gsap.to('.floating-icon', {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
  stagger: 0.2
});

// ----- Navbar scroll -----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.add('bg-white', 'shadow-md');
    navbar.classList.remove('bg-white/95', 'backdrop-blur-md');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('bg-white', 'shadow-md');
    navbar.classList.add('bg-white/95', 'backdrop-blur-md');
  }
});

// ----- Menú hamburguesa -----
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// ----- Botón volver arriba -----
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----- Cerrar menú al redimensionar -----
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// ----- Inicializar Swiper (carrusel de fotos) -----
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 800,
});

console.log('FreshGuard Labs - Web con carrusel corregido y animaciones GSAP');