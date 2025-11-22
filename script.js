// Переключение темы
const themeToggle = document.querySelector('.theme-toggle');

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

(function syncThemeOnLoad() {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  } catch (e) {
    // если localStorage недоступен
  }
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

// Скролл — тень у шапки и фон body
const header = document.querySelector('header');

function handleScroll() {
  const scrolled = window.scrollY > 10;
  document.body.classList.toggle('scrolled', scrolled);
  if (header) header.classList.toggle('scrolled', scrolled);
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// Reveal-анимация
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((el) => observer.observe(el));
} else {
  // fallback: сразу показать
  revealItems.forEach((el) => el.classList.add('visible'));
}

// Форма контактов — фейковая отправка
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;

    if (formStatus) {
      formStatus.textContent = 'Спасибо! Сообщение не отправилось, но форма уже готова к интеграции 🙂';
    }
    contactForm.classList.add('sent');

    setTimeout(() => {
      contactForm.classList.remove('sent');
    }, 1500);
  });
}
