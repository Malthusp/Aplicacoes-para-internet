

const toggle = document.querySelector('.header__toggle');
const nav    = document.querySelector('.header__nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const header = document.querySelector('.header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); 
}

const navLinks = document.querySelectorAll('.header__nav-link[href^="#"]');
const sections = document.querySelectorAll('section[id]');

if (navLinks.length && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('header__nav-link--active'));
          const active = document.querySelector(`.header__nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('header__nav-link--active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => observer.observe(s));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      
      nav?.classList.remove('header__nav--open');
      toggle?.setAttribute('aria-expanded', 'false');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const skillFills = document.querySelectorAll('.skill-fill[data-width]');

if (skillFills.length) {
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width;
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  skillFills.forEach(fill => {
    fill.style.width = '0%';
    skillObserver.observe(fill);
  });
}

(function () {
  const KEYBOARD_CLASS = 'using-keyboard';

  function onFirstTab(e) {
    if (e.key !== 'Tab') return;
    document.body.classList.add(KEYBOARD_CLASS);
    
    document.addEventListener('mousedown', onMouseDown);
  }

  function onMouseDown() {
    document.body.classList.remove(KEYBOARD_CLASS);
    
    document.addEventListener('keydown', onFirstTab, { once: true });
    document.removeEventListener('mousedown', onMouseDown);
  }

  document.addEventListener('keydown', onFirstTab, { once: true });
})();

(function () {
  const STORAGE_KEY = 'theme';
  const themeBtn    = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeBtn) {
      themeBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
      );
    }
  }

applyTheme(document.documentElement.dataset.theme || 'light');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
