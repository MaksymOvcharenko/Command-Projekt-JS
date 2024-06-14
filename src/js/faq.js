import Accordion from 'accordion-js';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {});
