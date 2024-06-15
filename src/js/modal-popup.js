const modalButton = document.querySelector('#close-modal-btn');
const modalWindow = document.querySelector('.backdrop');

modalButton.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
});

window.addEventListener('click', function (event) {
  if (event.target === modalWindow) {
    modalWindow.classList.remove('is-open');
  }
});
