(() => {
  const carousel = document.querySelector('[data-project-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.project-carousel-track');
  const cards = [...track.querySelectorAll('.project-card')];
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const count = carousel.querySelector('.project-carousel-count');
  const language = document.documentElement.lang;
  const separator = language.startsWith('pl') ? ' z ' : language.startsWith('zh') ? '，共 ' : ' of ';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let mouseOver = false;
  let pauseUntil = 0;
  let drag = null;
  let suppressClickUntil = 0;

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
    count.textContent = language.startsWith('zh')
      ? `第 ${first + 1}–${Math.min(cards.length, first + visible)} 个${separator}${cards.length} 个`
      : `${first + 1}–${Math.min(cards.length, first + visible)}${separator}${cards.length}`;
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
  track.addEventListener('dragstart', (event) => event.preventDefault());
  track.addEventListener('pointerdown', (event) => {
    pauseUntil = Date.now() + 12000;
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, scrollLeft: track.scrollLeft, moved: false };
  });
  track.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const distance = event.clientX - drag.x;
    if (!drag.moved && Math.abs(distance) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    track.scrollLeft = drag.scrollLeft - distance;
  });
  function endDrag(event) {
    if (!drag || event.pointerId !== drag.id) return;
    if (drag.moved) {
      suppressClickUntil = Date.now() + 350;
      track.classList.remove('is-dragging');
      const { step, last } = dimensions();
      const first = Math.min(last, Math.max(0, Math.round(track.scrollLeft / step)));
      track.scrollTo({ left: first * step, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    }
    drag = null;
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('click', (event) => {
    if (Date.now() >= suppressClickUntil) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickUntil = 0;
  }, true);
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
