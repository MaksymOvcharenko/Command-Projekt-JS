import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.works-input-email');
const checkmark = document.querySelector('.checkmark');
const formSupportingText = document.querySelector('.form-supporting-text');

window.addEventListener('DOMContentLoaded', fillText);

emailInput.addEventListener('input', handleEmailInput); // слухач подій для введення емейлу

form.addEventListener('submit', sendData); // обробник події відправки форми

function handleEmailInput(event) {
  const email = event.target.value; // отримуємо значення емейлу з події

  if (validateEmail(email)) {
    checkmark.style.display = 'block'; // показуємо чекмарк
    emailInput.classList.remove('invalid');
    formSupportingText.style.display = 'none'; // ховаємо текст підтримки
  } else {
    checkmark.style.display = 'none'; // ховаємо чекмарк
    emailInput.classList.add('invalid');
    formSupportingText.style.display = 'block'; // показуємо текст підтримки
  }
}

function fillText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    const { email, message } = data;
    form.querySelector('[name="email"]').value = email;
    form.querySelector('[name="message"]').value = message;
    handleEmailInput(); // перевірка валідності емейлу після заповнення форми
  }
}

function sendData(event) {
  event.preventDefault(); // зупиняємо стандартну відправку форми

  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  if (!email || !message) {
    iziToast.error({ title: 'Error', message: 'Please fill in all fields' });
    return;
  } // перевіряємо чи всі дані введені
  if (!validateEmail(email)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address',
    });
    return;
  }// перевіряємо чи  валідний email 
  
  form.querySelector('[name="email"]').value = '';
  form.querySelector('[name="message"]').value = '';  // очищаємо поля вводу
  checkmark.style.display = 'none';
  emailInput.classList.remove('invalid');
  formSupportingText.style.display = 'none'; // очищення стилів та текстів
 

  iziToast.info({ title: 'Info', message: 'Sending message...', close: false });

  fetch('/url-for-post-request', {
    // Відправляємо POST-запит на сервер, не знаю яке посилання
    method: 'POST',
    body: JSON.stringify({ email, message }), // Відправка даних у форматі JSON
    headers: {
      'Content-Type': 'application/json', // Встановлення заголовка Content-Type
    },
  })
    .then(response => {
      if (response.ok) {
        // Перевірка відповіді від сервера
        showModal('success', 'Your message has been sent successfully.'); // Показ повідомлення, що все ок
        form.reset(); // Очищення форми
      } else {
        iziToast.error({
          title: 'Error',
          message: 'There was an error. Please try again.',
        }); // Показ повідомлення, що є помилка
      }
    })
    .catch(error => {
      // Обробка помилок відправлення запиту
      console.error('Error:', error);
      iziToast.error({
        title: 'Error',
        message: 'There was an error. Please try again.',
      }); // Показ повідомлення про помилку
    });
}

function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

function showModal(type, message) {
  // функція для показу модального вікна
}
