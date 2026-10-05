const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 761px)');
const scrollFocusQuery = window.matchMedia('(max-width: 760px)');
const siteHeader = document.querySelector('.site-header');
const scrollFocusTargets = document.querySelectorAll('.home-page .expertise-strip > div, .home-page .project-card, .home-page .blog-cta, .projects-page .showcase-project, .projects-page .projects-upcoming, .project-body .project-facts > article, .project-body .content-panel, .project-body .process-screens figure, .project-body .lingua-gallery-grid figure, .project-body .product-meta-grid > *, .project-body .status-panel');
let parallaxFrame = 0;
let headerFrame = 0;
let scrollFocusFrame = 0;
let lastHeaderScroll = window.scrollY;
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

const updateHeaderVisibility = () => {
  headerFrame = 0;
  if (!siteHeader) return;

  const currentScroll = window.scrollY;
  const scrollDelta = currentScroll - lastHeaderScroll;

  if (currentScroll <= 64 || scrollDelta < -5) siteHeader.classList.remove('is-hidden');
  else if (currentScroll > 96 && scrollDelta > 5) siteHeader.classList.add('is-hidden');

  if (Math.abs(scrollDelta) > 5 || currentScroll <= 64) lastHeaderScroll = currentScroll;
};

const requestHeaderUpdate = () => {
  if (headerFrame) return;
  headerFrame = window.requestAnimationFrame(updateHeaderVisibility);
};

const updateScrollFocus = () => {
  scrollFocusFrame = 0;
  if (!scrollFocusQuery.matches || motionQuery.matches) return;

  const viewportCenter = window.innerHeight / 2;
  const focusRange = window.innerHeight * 0.72;

  scrollFocusTargets.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const distance = bounds.top + bounds.height / 2 - viewportCenter;
    const normalizedDistance = Math.min(1, Math.abs(distance) / focusRange);

    if (normalizedDistance >= 1) {
      if (element.classList.contains('scroll-focus-target')) {
        element.classList.remove('scroll-focus-target');
        element.style.removeProperty('--focus-scale');
        element.style.removeProperty('--focus-depth');
        element.style.removeProperty('--focus-tilt');
      }
      return;
    }

    const focus = (1 + Math.cos(normalizedDistance * Math.PI)) / 2;
    const scale = 1 + focus * 0.014;
    const depth = -3 + focus * 8;
    const tilt = -(distance / focusRange) * (1 - focus) * 1.2;

    element.style.setProperty('--focus-scale', scale.toFixed(3));
    element.style.setProperty('--focus-depth', `${depth.toFixed(1)}px`);
    element.style.setProperty('--focus-tilt', `${tilt.toFixed(2)}deg`);
    element.classList.add('scroll-focus-target');
  });
};

const requestScrollFocusUpdate = () => {
  if (!scrollFocusQuery.matches || motionQuery.matches || scrollFocusFrame) return;
  scrollFocusFrame = window.requestAnimationFrame(updateScrollFocus);
};

const resetScrollFocus = () => {
  if (scrollFocusFrame) window.cancelAnimationFrame(scrollFocusFrame);
  scrollFocusFrame = 0;
  scrollFocusTargets.forEach((element) => {
    element.classList.remove('scroll-focus-target');
    element.style.removeProperty('--focus-scale');
    element.style.removeProperty('--focus-depth');
    element.style.removeProperty('--focus-tilt');
  });
  requestScrollFocusUpdate();
};

const resetParallax = () => {
  if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
  parallaxFrame = 0;
  document.documentElement.style.setProperty('--parallax-art', '0px');
  document.documentElement.style.setProperty('--art-x', '0px');
  document.documentElement.style.setProperty('--art-y', '0px');
  requestParallaxUpdate();
};

const observeMediaQuery = (query, callback) => {
  if (query.addEventListener) query.addEventListener('change', callback);
  else query.addListener(callback);
};

window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
window.addEventListener('scroll', requestScrollFocusUpdate, { passive: true });
window.addEventListener('resize', requestScrollFocusUpdate, { passive: true });
window.addEventListener('pointermove', (event) => {
  if (motionQuery.matches || !desktopQuery.matches) return;
  pointerX = ((event.clientX / window.innerWidth) - 0.5) * 14;
  pointerY = ((event.clientY / window.innerHeight) - 0.5) * 10;
  requestParallaxUpdate();
}, { passive: true });
observeMediaQuery(motionQuery, () => {
  resetParallax();
  resetScrollFocus();
});
observeMediaQuery(desktopQuery, resetParallax);
observeMediaQuery(scrollFocusQuery, resetScrollFocus);
requestParallaxUpdate();
requestScrollFocusUpdate();
