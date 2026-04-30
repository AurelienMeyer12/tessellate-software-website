interface ModalData {
  name: string;
  role: string;
  link: string;
  img: string;
  bio: string;
}

(function() {
  const modal = document.getElementById('bio-modal');
  const closeBtn = document.getElementById('bio-close');
  const linkEl = document.getElementById('bio-link') as HTMLAnchorElement | null;
  const titleEl = document.getElementById('bio-title');
  const roleEl = document.getElementById('bio-role');
  const imgEl = document.getElementById('bio-img') as HTMLImageElement | null;
  const descEl = document.getElementById('bio-desc');
  let lastFocus: HTMLElement | null = null;

  if (!modal || !closeBtn || !titleEl || !roleEl || !imgEl || !descEl) {
    return;
  }

  function openModal(data: ModalData, trigger: HTMLElement | null) {
    lastFocus = trigger || (document.activeElement as HTMLElement);
    titleEl!.textContent = data.name;
    roleEl!.textContent = data.role;
    if (linkEl) linkEl.href = data.link;
    imgEl!.src = data.img;
    imgEl!.alt = 'Portrait of ' + data.name;
    descEl!.textContent = data.bio || '';
    modal!.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
    closeBtn!.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    modal!.removeAttribute('open');
    document.body.style.overflow = '';
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
        name: card.dataset.name || '',
        role: card.dataset.role || '',
        link: card.dataset.link || '',
        img: card.dataset.img || '',
        bio: card.dataset.bio || ''
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
