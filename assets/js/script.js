// ==========================================
// FreshGuard Labs - Interactividad avanzada
// ==========================================

// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-out-quad'
});

// ----- Navbar transparente a sólido al hacer scroll -----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.add('bg-white', 'shadow-md');
    navbar.classList.remove('bg-white/90', 'backdrop-blur-md');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('bg-white', 'shadow-md');
    navbar.classList.add('bg-white/90', 'backdrop-blur-md');
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

  // Cerrar menú al hacer clic en un enlace
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

// Cerrar menú al redimensionar (si pasa a escritorio)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

console.log('FreshGuard Labs - Sitio profesional activo');