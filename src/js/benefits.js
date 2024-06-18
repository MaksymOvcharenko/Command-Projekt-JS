document.addEventListener('DOMContentLoaded', () => {
  const benefitsList = document.querySelector('.benefits-list');

  benefitsList.addEventListener('mouseover', event => {
    const item = event.target.closest('.benefits-item');
    if (item) {
      item.classList.add('active');
      benefitsList.classList.add('dimmed');
      benefitsList.querySelectorAll('.benefits-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.add('dimmed');
        }
      });
    }
  });

  benefitsList.addEventListener('mouseout', event => {
    const item = event.target.closest('.benefits-item');
    if (item) {
      item.classList.remove('active');
      benefitsList.classList.remove('dimmed');
      benefitsList.querySelectorAll('.benefits-item').forEach(otherItem => {
        otherItem.classList.remove('dimmed');
      });
    }
  });
});

//* Animation

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const elements = document.querySelectorAll('.animation');
  elements.forEach(el => observer.observe(el));
});
