export function initializeThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
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
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.className = 'light-theme';
      localStorage.setItem('theme', 'light-theme');
    }
  });
}
