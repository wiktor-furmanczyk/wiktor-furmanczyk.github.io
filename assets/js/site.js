const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const focusTargets = document.querySelectorAll('.home-page .expertise-strip > div, .home-page .project-card, .home-page .blog-cta, .projects-page .showcase-project, .projects-page .projects-upcoming, .project-body .project-facts > article, .project-body .content-panel, .project-body .process-screens figure, .project-body .process-steps li, .project-body .lingua-gallery-grid figure, .project-body .project-status-bar, .project-body .product-meta-grid > *, .project-body .status-panel');

let focusObserver;

const updateFocusMode = () => {
  if (focusObserver) focusObserver.disconnect();
  if (motionQuery.matches) {
    focusTargets.forEach((element) => element.classList.remove('scroll-focus-target'));
    return;
  }

  const inset = Math.round(window.innerHeight * 0.3);
  focusObserver = new IntersectionObserver((entries) => {
    if (motionQuery.matches) return;
    entries.forEach((entry) => {
      entry.target.classList.toggle('scroll-focus-target', entry.isIntersecting);
    });
  }, { rootMargin: `-${inset}px 0px -${inset}px 0px` });
  focusTargets.forEach((element) => focusObserver.observe(element));
};

if ('IntersectionObserver' in window) {
  focusTargets.forEach((element) => element.classList.add('scroll-focus-item'));
  updateFocusMode();
  if (motionQuery.addEventListener) motionQuery.addEventListener('change', updateFocusMode);
  else motionQuery.addListener(updateFocusMode);

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(updateFocusMode, 160);
  }, { passive: true });
}
