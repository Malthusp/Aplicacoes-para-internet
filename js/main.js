/**
 * main.js — Scripts do Projeto
 * Portfólio Malthus A. P. da Costa
 * Aula 8 — Prof. Jeofton Costa
 */

// ── Smooth scroll para âncoras internas ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Animação das barras de habilidade ao entrar na viewport ──
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = getComputedStyle(entry.target).getPropertyValue('--w');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
  fill.style.width = '0%';
  observer.observe(fill);
});

// ── Botão de envio do formulário ─────────────────────────────
const btnSubmit = document.querySelector('.btn-submit');
if (btnSubmit) {
  btnSubmit.addEventListener('click', () => {
    const nome  = document.getElementById('nome')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    if (!nome || !email) {
      alert('Por favor, preencha nome e e-mail.');
      return;
    }
    alert(`Mensagem recebida, ${nome}! Retorno em breve.`);
  });
}
