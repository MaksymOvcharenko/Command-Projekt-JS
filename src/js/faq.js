import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// const accordions = Array.from(
//   document.querySelectorAll('.accordion-container')
// );
// new Accordion(accordions, {});
const acTriggers = document.querySelectorAll('.ac-trigger');
acTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const panel = trigger.closest('.ac').querySelector('.ac-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    if (panel.style.display === 'block') {
      // Close other panels
      document.querySelectorAll('.ac-panel').forEach(otherPanel => {
        if (otherPanel !== panel) {
          otherPanel.style.display = 'none';
        }
      });
    }
  });
});
