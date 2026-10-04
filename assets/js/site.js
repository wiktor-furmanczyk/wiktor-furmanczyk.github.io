const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');

if (toggle && navigation) {
  const toggleLabel = toggle.querySelector('.sr-only');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    if (toggleLabel) toggleLabel.textContent = 'Otwórz menu';
  };

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    navigation.classList.toggle('is-open', willOpen);
    if (toggleLabel) toggleLabel.textContent = willOpen ? 'Zamknij menu' : 'Otwórz menu';
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !event.target.closest('.header-inner')) closeMenu();
  });
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 761px)');
let parallaxFrame = 0;
let pointerX = 0;
let pointerY = 0;

const updateParallax = () => {
  parallaxFrame = 0;
  const offset = Math.min(window.scrollY, 2400);
  document.documentElement.style.setProperty('--parallax-slow', `${offset * -0.018}px`);
  document.documentElement.style.setProperty('--parallax-fast', `${offset * -0.035}px`);
  document.documentElement.style.setProperty('--parallax-art', `${offset * -0.012}px`);
  document.documentElement.style.setProperty('--pointer-x', `${pointerX}px`);
  document.documentElement.style.setProperty('--pointer-y', `${pointerY}px`);
  document.documentElement.style.setProperty('--art-x', `${pointerX * -0.35}px`);
  document.documentElement.style.setProperty('--art-y', `${pointerY * -0.25}px`);
  document.documentElement.style.setProperty('--network-x', `${pointerX * 0.45}px`);
  document.documentElement.style.setProperty('--network-y', `${pointerY * 0.35}px`);
  document.documentElement.style.setProperty('--wave-x', `${pointerX * -0.65}px`);
  document.documentElement.style.setProperty('--wave-y', `${pointerY * -0.5}px`);
};

const requestParallaxUpdate = () => {
  if (motionQuery.matches || !desktopQuery.matches || parallaxFrame) return;
  parallaxFrame = window.requestAnimationFrame(updateParallax);
};

const resetParallax = () => {
  if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
  parallaxFrame = 0;
  document.documentElement.style.setProperty('--parallax-slow', '0px');
  document.documentElement.style.setProperty('--parallax-fast', '0px');
  document.documentElement.style.setProperty('--parallax-art', '0px');
  document.documentElement.style.setProperty('--pointer-x', '0px');
  document.documentElement.style.setProperty('--pointer-y', '0px');
  document.documentElement.style.setProperty('--art-x', '0px');
  document.documentElement.style.setProperty('--art-y', '0px');
  document.documentElement.style.setProperty('--network-x', '0px');
  document.documentElement.style.setProperty('--network-y', '0px');
  document.documentElement.style.setProperty('--wave-x', '0px');
  document.documentElement.style.setProperty('--wave-y', '0px');
  requestParallaxUpdate();
};

const observeMediaQuery = (query) => {
  if (query.addEventListener) query.addEventListener('change', resetParallax);
  else query.addListener(resetParallax);
};

window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
window.addEventListener('pointermove', (event) => {
  if (motionQuery.matches || !desktopQuery.matches) return;
  pointerX = ((event.clientX / window.innerWidth) - 0.5) * 14;
  pointerY = ((event.clientY / window.innerHeight) - 0.5) * 10;
  requestParallaxUpdate();
}, { passive: true });
observeMediaQuery(motionQuery);
observeMediaQuery(desktopQuery);
requestParallaxUpdate();

const homeSections = [...document.querySelectorAll('.home-page main section[id], .home-page footer#kontakt')];
const sectionLinks = [...document.querySelectorAll('.site-nav a[href*="#"]')];

if (homeSections.length && sectionLinks.length && 'IntersectionObserver' in window) {
  const linksBySection = new Map(sectionLinks.map((link) => [link.hash.slice(1), link]));
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = linksBySection.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        sectionLinks.forEach((item) => item.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'location');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  homeSections.forEach((section) => sectionObserver.observe(section));
}
