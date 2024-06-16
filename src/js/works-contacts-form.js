import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showModal } from './modal';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.works-input-email');
const checkmark = document.querySelector('.checkmark');
const formSupportingText = document.querySelector('.form-supporting-text');

window.addEventListener('DOMContentLoaded', fillText);

emailInput.addEventListener('input', handleEmailInput);

form.addEventListener('submit', sendData);

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
    handleEmailInput(); 
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
  
  form.querySelector('[name="email"]').value = '';
  form.querySelector('[name="message"]').value = '';
  checkmark.style.display = 'none';
  emailInput.classList.remove('invalid');
  formSupportingText.style.display = 'none'; 

  iziToast.info({ title: 'Info', message: 'Sending message...', close: false });

  fetch('./url-for-post-request', {
    method: 'POST',
    body: JSON.stringify({ email, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        showModal('success', 'Your message has been sent successfully.');
        form.reset(); 
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

