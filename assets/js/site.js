const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 761px)');
let parallaxFrame = 0;
let pointerX = 0;
let pointerY = 0;

const updateParallax = () => {
  parallaxFrame = 0;
  const offset = Math.min(window.scrollY, 2400);
  document.documentElement.style.setProperty('--parallax-art', `${offset * -0.01}px`);
  document.documentElement.style.setProperty('--art-x', `${pointerX * -0.22}px`);
  document.documentElement.style.setProperty('--art-y', `${pointerY * -0.18}px`);
};

const requestParallaxUpdate = () => {
  if (motionQuery.matches || !desktopQuery.matches || parallaxFrame) return;
  parallaxFrame = window.requestAnimationFrame(updateParallax);
};

const resetParallax = () => {
  if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
  parallaxFrame = 0;
  document.documentElement.style.setProperty('--parallax-art', '0px');
  document.documentElement.style.setProperty('--art-x', '0px');
  document.documentElement.style.setProperty('--art-y', '0px');
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
