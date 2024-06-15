document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.animation');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    },
    { threshold: 0.1 }
  );

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});
