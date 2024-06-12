const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', fillText);

form.addEventListener('input', handleInput); // обробник події на  введення даних
form.addEventListener('submit', sendData);// обробник події відправки форми

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
}
// оновлення значення обєкту при введенні даних в форму

function fillText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    const { email, message } = data;
    form.querySelector('[name="email"]').value = email;
    form.querySelector('[name="message"]').value = message;
  }
} //отримання даних  заповненої форми: мейлу та повідомлення

function sendData(event) {
  event.preventDefault(); //зупиняємо стандартну відправку форми
  
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  } // перевірили чи всі дані введені
 if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  } // перевіряємо чи  валідний email
  console.log({ email, message });

  // localStorage.removeItem('feedback-form-state');
  // form.reset();

  fetch('/url-for-post-request', { // Відправляємо POST-запит на сервер, не знаю яке посилання
    method: 'POST',
    body: JSON.stringify({ email, message }), // Відправка даних у форматі JSON
    headers: {
      'Content-Type': 'application/json' // Встановлення заголовка Content-Type
    }
  })
  .then(response => {
    if (response.ok) { // Перевірка відповіді від сервера
      showModal('success', 'Your message has been sent successfully.'); // Показ повідомлення, що все ок
      form.reset(); // Очищення форми
    } else {
      showModal('error', 'There was an error. Please try again.'); // Показ повідомлення, що є помилка
    }
  })
  .catch(error => { // Обробка помилок відправлення запиту
    console.error('Error:', error);
    showModal('error', 'There was an error. Please try again.'); // Показ повідомлення про помилку
  });
}
function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

function showModal(type, message) { 
  // має показуватись модальне вікно з потрібним повідомленням
}
