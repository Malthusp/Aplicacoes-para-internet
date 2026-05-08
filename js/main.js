/**
 * main.js — Scripts do Projeto
 * Portfólio Malthus A. P. da Costa
 * Aula 09 — Componentes: Navbar, Cards, Footer
 * Prof. Jeofton Costa
 */

/* ── 1. HAMBURGER MENU ──────────────────────────────────────── */
const toggle = document.querySelector('.header__toggle');
const nav    = document.querySelector('.header__nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── 2. SCROLL — adiciona .header--scrolled após 80px ────────── */
const header = document.querySelector('.header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // checar estado inicial
}

/* ── 3. NAV LINK ATIVO — marca seção visível ─────────────────── */
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

/* ── 4. SMOOTH SCROLL para âncoras ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // Fechar menu mobile se aberto
      nav?.classList.remove('header__nav--open');
      toggle?.setAttribute('aria-expanded', 'false');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── 5. ANO AUTOMÁTICO NO COPYRIGHT ──────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── 6. ANIMAÇÃO DAS SKILL BARS (IntersectionObserver) ───────── */
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
