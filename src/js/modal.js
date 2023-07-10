(() => {
  const refs = {
    openModalBtn: document.querySelector('.data-modal-open'),
    openModalBtn: document.querySelector('.data-modal-open-2'),
    openModalBtn: document.querySelector('.data-modal-open-3'),
    openModalBtn: document.querySelector('.data-modal-open-4'),
    closeModalBtn: document.querySelector('.data-modal-close'),
    modal: document.querySelector('.data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
