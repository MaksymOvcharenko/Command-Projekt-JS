const modalButton = document.querySelector('#close-modal-btn');
const modalWindow = document.querySelector('.backdrop');

modalButton.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
});

window.addEventListener('click', event => {
  if (event.target === modalWindow) {
    return hideModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    return hideModal();
  }
});

function showModal() {
  modalWindow.classList.add('is-open');
}
function hideModal() {
  modalWindow.classList.remove('is-open');
}
