(() => {
  const carousel = document.querySelector('[data-project-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.project-carousel-track');
  const cards = [...track.querySelectorAll('.project-card')];
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const count = carousel.querySelector('.project-carousel-count');
  const separator = document.documentElement.lang.startsWith('pl') ? ' z ' : ' of ';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let mouseOver = false;
  let pauseUntil = 0;

  function dimensions() {
    const step = cards.length > 1
      ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left
      : track.clientWidth;
    const visible = Math.max(1, Math.round((track.clientWidth + 20) / step));
    return { step, visible, last: Math.max(0, cards.length - visible) };
  }

  function update() {
    const { step, visible, last } = dimensions();
    const first = Math.min(last, Math.max(0, Math.round(track.scrollLeft / step)));
    previous.disabled = first === 0;
    next.disabled = first === last;
    count.textContent = `${first + 1}–${Math.min(cards.length, first + visible)}${separator}${cards.length}`;
  }

  function move(direction, automatic = false) {
    const { step, last } = dimensions();
    const current = Math.min(last, Math.max(0, Math.round(track.scrollLeft / step)));
    const first = automatic && current === last
      ? 0
      : Math.min(last, Math.max(0, current + direction));
    if (!automatic) pauseUntil = Date.now() + 12000;
    track.scrollTo({
      left: first * step,
      behavior: reducedMotion.matches ? 'auto' : 'smooth'
    });
  }

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  carousel.addEventListener('mouseenter', () => { mouseOver = true; });
  carousel.addEventListener('mouseleave', () => { mouseOver = false; });
  track.addEventListener('pointerdown', () => { pauseUntil = Date.now() + 12000; });
  track.addEventListener('keydown', () => { pauseUntil = Date.now() + 12000; });
  track.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      update();
    });
  }, { passive: true });
  window.addEventListener('resize', update);
  window.setInterval(() => {
    if (document.hidden || reducedMotion.matches || mouseOver ||
        carousel.contains(document.activeElement) || Date.now() < pauseUntil) return;
    move(1, true);
  }, 7000);
  update();
})();
