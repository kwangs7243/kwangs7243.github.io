(() => {
  const dialog = document.querySelector('.image-lightbox');
  if (!dialog) return;

  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  const closeButton = dialog.querySelector('.image-lightbox-close');
  let opener = null;

  const close = () => {
    dialog.close();
    opener?.focus();
  };

  document.querySelectorAll('[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img')?.alt || '';
      caption.textContent = link.closest('figure')?.querySelector('figcaption strong')?.textContent || '';
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dialog.open) {
      event.preventDefault();
      close();
    }
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
})();
