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
