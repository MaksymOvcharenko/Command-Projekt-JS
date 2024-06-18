export const themeToggle = document.querySelector('#theme-toggle');
export const themeToggleMobile = document.querySelector('#theme-toggle-mobile');
export const themeToggleMobilePlace = document.querySelector('#mobile-menus');

export function initializeThemeSwitcher(themeToggle) {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.body.className = savedTheme;
    if (savedTheme === 'dark-theme') {
      themeToggle.checked = true;
      applyDarkThemeStyles();
    } else {
      applyLightThemeStyles();
    }
  } else {
    applyLightThemeStyles();
  }

  themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
      document.body.className = 'dark-theme';
      applyDarkThemeStyles();
      themeToggleMobilePlace.classList.add('dark-theme-mobile');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.className = 'light-theme';
      applyLightThemeStyles();
      localStorage.setItem('theme', 'light-theme');
      themeToggleMobilePlace.classList.remove('dark-theme-mobile');
    }
  });
}

function applyDarkThemeStyles() {
  document.documentElement.style.setProperty('--accet-green', '#14c57c');
  document.documentElement.style.setProperty('--color-text', '#f0f0f0');
  document.documentElement.style.setProperty('--bg-color', '#292929');
  document.documentElement.style.setProperty('--light-grey', '#2a2d32');
  document.documentElement.style.setProperty('--bg-skills', '#214136');
}

function applyLightThemeStyles() {
  document.documentElement.style.setProperty('--accet-green', '#00b068');
  document.documentElement.style.setProperty('--color-text', '#292929');
  document.documentElement.style.setProperty('--bg-color', '#f0f0f0');
  document.documentElement.style.setProperty('--light-grey', '#e4e5e6');
  document.documentElement.style.setProperty('--bg-skills', '#bcdfd1');
}

document.addEventListener('DOMContentLoaded', function () {
  initializeThemeSwitcher(themeToggle);
  initializeThemeSwitcher(themeToggleMobile);
});
