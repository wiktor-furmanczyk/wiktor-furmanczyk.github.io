const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 761px)');
const wheelInertiaQuery = window.matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine)');
const siteHeader = document.querySelector('.site-header');
const scrollFocusTargets = document.querySelectorAll('.home-page .expertise-strip > div, .home-page .project-card, .home-page .blog-cta, .projects-page .showcase-project, .projects-page .projects-upcoming, .project-body .project-facts > article, .project-body .content-panel, .project-body .process-screens figure, .project-body .process-steps li, .project-body .lingua-gallery-grid figure, .project-body .project-status-bar, .project-body .product-meta-grid > *, .project-body .status-panel');
let parallaxFrame = 0;
let headerFrame = 0;
let scrollFocusFrame = 0;
let wheelScrollFrame = 0;
let wheelScrollTarget = 0;
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

  if (currentScroll <= 64 || scrollDelta < -10) siteHeader.classList.remove('is-hidden');
  else if (currentScroll > 120 && scrollDelta > 14) siteHeader.classList.add('is-hidden');

  if (Math.abs(scrollDelta) > 10 || currentScroll <= 64) lastHeaderScroll = currentScroll;
};

const requestHeaderUpdate = () => {
  if (headerFrame) return;
  headerFrame = window.requestAnimationFrame(updateHeaderVisibility);
};

const updateScrollFocus = () => {
  scrollFocusFrame = 0;
  if (motionQuery.matches) return;

  const viewportCenter = window.innerHeight / 2;
  const focusRange = window.innerHeight * 0.92;

  scrollFocusTargets.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const distance = bounds.top + bounds.height / 2 - viewportCenter;
    const normalizedDistance = Math.min(1, Math.abs(distance) / focusRange);

    if (normalizedDistance >= 1) {
      if (element.classList.contains('scroll-focus-target')) {
        element.classList.remove('scroll-focus-target');
        element.style.removeProperty('--focus-scale');
      }
      return;
    }

    const focus = (1 + Math.cos(normalizedDistance * Math.PI)) / 2;
    const scale = 1 + focus * (desktopQuery.matches ? 0.008 : 0.01);

    const scaleValue = scale.toFixed(5);
    if (element.style.getPropertyValue('--focus-scale') !== scaleValue) {
      element.style.setProperty('--focus-scale', scaleValue);
    }
    element.classList.add('scroll-focus-target');
  });
};

const requestScrollFocusUpdate = () => {
  if (motionQuery.matches || scrollFocusFrame) return;
  scrollFocusFrame = window.requestAnimationFrame(updateScrollFocus);
};

const cancelWheelScroll = () => {
  if (wheelScrollFrame) window.cancelAnimationFrame(wheelScrollFrame);
  wheelScrollFrame = 0;
  const scrollRoot = document.scrollingElement;
  wheelScrollTarget = scrollRoot ? scrollRoot.scrollTop : window.scrollY;
};

const updateWheelScroll = () => {
  wheelScrollFrame = 0;
  const scrollRoot = document.scrollingElement;
  if (!scrollRoot || motionQuery.matches || !wheelInertiaQuery.matches) return;

  const distance = wheelScrollTarget - scrollRoot.scrollTop;
  if (Math.abs(distance) < 0.6) {
    scrollRoot.scrollTop = wheelScrollTarget;
    return;
  }

  scrollRoot.scrollTop += distance * 0.2;
  wheelScrollFrame = window.requestAnimationFrame(updateWheelScroll);
};

const handleWheelScroll = (event) => {
  if (!wheelInertiaQuery.matches || motionQuery.matches || event.ctrlKey || event.deltaMode !== 1 || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.deltaY === 0) return;

  event.preventDefault();
  const scrollRoot = document.scrollingElement;
  if (!scrollRoot) return;
  if (!wheelScrollFrame) wheelScrollTarget = scrollRoot.scrollTop;

  const delta = event.deltaY * 16;
  const momentum = Math.sign(delta) * Math.min(12, Math.abs(delta) * 0.16);
  const maxScroll = scrollRoot.scrollHeight - window.innerHeight;
  wheelScrollTarget = Math.max(0, Math.min(maxScroll, wheelScrollTarget + delta + momentum));
  if (!wheelScrollFrame) wheelScrollFrame = window.requestAnimationFrame(updateWheelScroll);
};

const resetScrollFocus = () => {
  if (scrollFocusFrame) window.cancelAnimationFrame(scrollFocusFrame);
  scrollFocusFrame = 0;
  scrollFocusTargets.forEach((element) => {
    element.classList.remove('scroll-focus-target');
    element.style.removeProperty('--focus-scale');
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
window.addEventListener('wheel', handleWheelScroll, { passive: false });
window.addEventListener('pointerdown', cancelWheelScroll, { passive: true });
window.addEventListener('keydown', cancelWheelScroll, { passive: true });
window.addEventListener('resize', requestScrollFocusUpdate, { passive: true });
window.addEventListener('pointermove', (event) => {
  if (motionQuery.matches || !desktopQuery.matches) return;
  pointerX = ((event.clientX / window.innerWidth) - 0.5) * 14;
  pointerY = ((event.clientY / window.innerHeight) - 0.5) * 10;
  requestParallaxUpdate();
}, { passive: true });
observeMediaQuery(motionQuery, () => {
  cancelWheelScroll();
  resetParallax();
  resetScrollFocus();
});
observeMediaQuery(desktopQuery, resetParallax);
requestParallaxUpdate();
requestScrollFocusUpdate();
