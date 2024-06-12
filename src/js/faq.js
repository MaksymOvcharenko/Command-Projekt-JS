import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion(accordions, {});
const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);

// Ініціалізація акордеону для знайдених елементів
accordions.forEach(container => {
  const triggers = container.querySelectorAll('.ac-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.closest('.ac').querySelector('.ac-panel');
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        // Закриває всі інші панелі в цьому акордеоні
        container
          .querySelectorAll('.ac-panel')
          .forEach(p => (p.style.display = 'none'));
        panel.style.display = 'block';
      }
      console.log('Opened:', panel);
    });
  });
});
