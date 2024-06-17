import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import { showModal } from './modal-popup.js';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.works-input-email');
const checkmark = document.querySelector('.checkmark');
const formSupportingText = document.querySelector('.form-supporting-text');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalBtn = document.getElementById('close-modal-btn');

window.addEventListener('DOMContentLoaded', fillText);

emailInput.addEventListener('input', handleEmailInput);

form.addEventListener('submit', sendData);

form.addEventListener('input', saveToLocalStorage);

closeModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-open');
  console.log('Modal closed');
});

function saveToLocalStorage() {
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

function handleEmailInput(event) {
  const email = event.target.value;

  if (validateEmail(email)) {
    checkmark.style.display = 'block';
    emailInput.classList.remove('invalid');
    formSupportingText.style.display = 'none';
  } else {
    checkmark.style.display = 'none';
    emailInput.classList.add('invalid');
    formSupportingText.style.display = 'block';
  }
}

function fillText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    const { email, message } = data;
    form.querySelector('[name="email"]').value = email;
    form.querySelector('[name="message"]').value = message;
    handleEmailInput({ target: emailInput });
  }
}

function sendData(event) {
  event.preventDefault();

  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  if (!email || !message) {
    iziToast.error({ title: 'Error', message: 'Please fill in all fields' });
    return;
  }
  if (!validateEmail(email)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address',
    });
    return;
  }
 checkmark.style.display = 'none'; // додала рядок, щоб забиралась галочка
  iziToast.info({ title: 'Info', message: 'Sending message...', close: false });

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    body: JSON.stringify({ email, comment: message }),
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        showModal('success', 'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.');
        form.reset();
        localStorage.removeItem('feedback-form-state');
      } else {
        iziToast.error({
          title: 'Error',
          message: 'There was an error. Please try again.',
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      iziToast.error({
        title: 'Error',
        message: 'There was an error. Please try again.',
      });
    });
}

function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

function showModal(type, message) {
  const modalWindow = document.querySelector('.backdrop');
  const modalMessage = document.querySelector('.modal-description');

  if (!modalWindow || !modalMessage) {
    console.error('Modal elements not found');
    return;
  }

  console.log('Opening modal with message:', message); // Debug message

  modalMessage.textContent = message;
  modalWindow.classList.add('is-open'); // Зміна: Додаємо клас 'is-open' до '.backdrop'
  console.log('Modal opened');
}


