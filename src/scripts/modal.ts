interface ModalData {
  name: string;
  role: string;
  link: string;
  img: string;
  bio: string;
}

(function() {
  const modal = document.getElementById('bio-modal') as HTMLElement | null;
  const closeBtn = document.getElementById('bio-close') as HTMLButtonElement | null;
  const titleEl = document.getElementById('bio-title') as HTMLElement | null;
  const roleEl = document.getElementById('bio-role') as HTMLElement | null;
  const imgEl = document.getElementById('bio-img') as HTMLImageElement | null;
  const descEl = document.getElementById('bio-desc') as HTMLElement | null;
  let lastFocus: HTMLElement | null = null;

  if (!modal || !closeBtn || !titleEl || !roleEl || !imgEl || !descEl) {
    return;
  }

  function openModal(data: ModalData, trigger: HTMLElement | null) {
    lastFocus = trigger || (document.activeElement as HTMLElement);
    titleEl.textContent = data.name;
    roleEl.textContent = data.role;
    imgEl.src = data.img;
    imgEl.alt = 'Headshot of ' + data.name;
    descEl.textContent = data.bio || '';
    modal.setAttribute('open', '');
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    modal.removeAttribute('open');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  document.querySelectorAll('.js-open-bio').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = (e.currentTarget as HTMLElement).closest('.member') as HTMLElement | null;
      if (!card) return;
      
      const data: ModalData = {
        name: card.getAttribute('data-name') || '',
        role: card.getAttribute('data-role') || '',
        link: card.getAttribute('data-link') || '',
        img: card.getAttribute('data-img') || '',
        bio: card.getAttribute('data-bio') || ''
      };
      openModal(data, e.currentTarget as HTMLElement);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
})();

