(() => {
  const figures = document.querySelectorAll('.lingua-gallery-grid figure, .finance-gallery-grid figure');
  if (!figures.length || typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;

  const english = document.documentElement.lang.toLowerCase().startsWith('en');
  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.innerHTML = '<button class="gallery-close" type="button" aria-label=""></button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.append(dialog);

  const close = dialog.querySelector('.gallery-close');
  const preview = dialog.querySelector('img');
  const caption = dialog.querySelector('figcaption');
  close.setAttribute('aria-label', english ? 'Close preview' : 'Zamknij podgląd');
  close.textContent = '×';
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  figures.forEach(figure => {
    const frame = figure.querySelector('.screen-frame, .monitor-frame');
    const image = frame?.querySelector('img');
    if (!image) return;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'gallery-trigger';
    trigger.setAttribute('aria-label', `${english ? 'Enlarge' : 'Powiększ'}: ${image.alt}`);
    frame.replaceWith(trigger);
    trigger.append(frame);
    trigger.addEventListener('click', () => {
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      caption.textContent = figure.querySelector('figcaption strong')?.textContent || '';
      dialog.showModal();
    });
  });
})();
