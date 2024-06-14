// document.addEventListener('DOMContentLoaded', () => {
//   const img = document.querySelector('.about-me-img');

//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           img.classList.add('show');
//         } else {
//           img.classList.remove('show');
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   observer.observe(img);
// });

document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = [
    ...document.querySelectorAll(
      '.about-me-title, .info-title, .about-me-txt, .about-me-img'
    ),
  ];

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  elementsToAnimate.forEach(element => observer.observe(element));
});