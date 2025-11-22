// === 1. Мгновенная установка темы до загрузки стилей ===
(function () {
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = saved || (prefersDark ? 'dark' : 'light');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // если localStorage недоступен — просто игнорируем
  }
})();

// === 2. Всё остальное — после загрузки DOM ===
document.addEventListener('DOMContentLoaded', () => {
  // Reveal-анимация
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add('visible');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Шапка + фон при скролле
  const header = document.querySelector('header');

  function handleScroll() {
    if (!header) return;

    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (window.scrollY > 20) document.body.classList.add('scrolled');
    else document.body.classList.remove('scrolled');
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Тема (light / dark)
  const themeToggle = document.querySelector('.theme-toggle');

  function updateThemeIcon() {
    if (!themeToggle) return;
    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon();
    });
  }

  // Логика формы (только на contacts.html)
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      form.classList.add('sent');
      formStatus.textContent = 'Спасибо! Сообщение отправлено (демо).';

      setTimeout(() => {
        form.reset();
        form.classList.remove('sent');
        formStatus.textContent = '';
      }, 2500);
    });
  }
});
