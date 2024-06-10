export const themeToggle = document.querySelector('#theme-toggle');
export const themeToggleMobile = document.querySelector('#theme-toggle-mobile');
export const themeToggleMobilePlace = document.querySelector('#mobile-menus');
export function initializeThemeSwitcher(themeToggle) {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.body.className = savedTheme;
    if (savedTheme === 'dark-theme') {
      themeToggle.checked = true;
    }
  }

  themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
      document.body.className = 'dark-theme';
      themeToggleMobilePlace.classList.add('dark-theme-mobile');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.className = 'light-theme';
      themeToggleMobilePlace.classList.remove('dark-theme-mobile');
      localStorage.setItem('theme', 'light-theme');
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  initializeThemeSwitcher(themeToggleMobile);
});
document.addEventListener('DOMContentLoaded', function () {
  initializeThemeSwitcher(themeToggle);
});
