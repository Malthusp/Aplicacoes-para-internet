# Portfólio — Malthus Albuquerque Pereira da Costa

## Aula 8 — Planejamento da Interface do Projeto

**Disciplina:** Aplicações para Internet · Engenharia de Interface  
**Professor:** Jeofton Costa  
**Data:** 29/04/2026  

---

## 1. Definição do Problema

### Contexto
Este projeto é um portfólio pessoal de desenvolvedor web. O domínio é a apresentação profissional de habilidades, projetos realizados e informações de contato para recrutadores e colegas da área de tecnologia.

### Público-Alvo
- **Idade:** 25–45 anos
- **Contexto de uso:** Navegação durante processo seletivo ou networking profissional
- **Dispositivo principal:** Desktop (60%) e mobile (40%)

### Dor Principal
Recrutadores e potenciais contratantes não conseguem avaliar rapidamente o perfil técnico e os projetos do desenvolvedor, pois as informações estão dispersas em múltiplas plataformas (LinkedIn, GitHub, e-mail) sem um ponto central e visualmente organizado.

### Critério de Sucesso
O usuário consegue identificar o nome, a especialidade, pelo menos três projetos e um meio de contato em menos de 30 segundos, sem precisar rolar a página no desktop.

---

## 2. Wireframe da Página Principal

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER  [Logo M.A]          [Sobre] [Projetos] [Contato]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO SECTION                        ┌──────────────┐      │
│  ┌─────────────────────────────┐     │  Decoração   │      │
│  │  <p> eyebrow text           │     │  Rings CSS   │      │
│  │  <h1> Nome Principal        │     │  </> ícone   │      │
│  │  <p>  Subtítulo/Desc        │     └──────────────┘      │
│  │  <a>  CTA Button            │                            │
│  └─────────────────────────────┘                            │
│                                                             │
├─────────────────┬───────────────────────┬───────────────────┤
│  SIDEBAR        │  CONTEÚDO PRINCIPAL   │  ASIDE DIREITO    │
│  <aside>        │  <section.content>    │  <aside>          │
│                 │                       │                   │
│  [Avatar MAC]   │  H2 01 Sobre Mim      │  [Checklist]      │
│  Nome           │  <p> texto            │                   │
│  Cargo          │                       │  [Breakpoints]    │
│  ─────          │  H2 02 Projetos       │                   │
│  Info list      │  [card][card][card]   │  [Form Contato]   │
│  📍 Local       │  [card][card][card]   │  <form>           │
│  🎓 Curso       │                       │  input nome       │
│  👨‍💻 Prof        │  H2 03 Habilidades    │  input email      │
│  📅 Ano         │  [skill bars...]      │  textarea         │
│  ─────          │                       │  [btn Enviar]     │
│  Tech tags      │                       │                   │
└─────────────────┴───────────────────────┴───────────────────┘
│  FOOTER                                                     │
│  <footer>  Nome · Disciplina · Aula                         │
└─────────────────────────────────────────────────────────────┘

── RESPONSIVIDADE MOBILE (< 768px) ──────────────────────────
┌──────────────────────┐
│ HEADER               │
│ [Logo]  [☰ hamburger]│
├──────────────────────┤
│ HERO                 │
│ H1 Nome              │
│ p  Descrição         │
│ [CTA]                │
├──────────────────────┤
│ SIDEBAR (largura 100%)│
│ Avatar, nome, tags   │
├──────────────────────┤
│ CONTEÚDO (col única) │
│ H2 Sobre             │
│ H2 Projetos          │
│ cards empilhados     │
│ H2 Habilidades       │
├──────────────────────┤
│ ASIDE (largura 100%) │
│ Checklist, Form      │
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘

Hierarquia: H1 (nome principal) → H2 (seções) → H3 (cards/items)
```

**Elementos HTML por seção:**
| Seção | Tags Semânticas |
|---|---|
| Header | `<header>`, `<nav>`, `<ul>/<li>/<a>` |
| Hero | `<section>`, `<h1>`, `<p>`, `<a>` |
| Sidebar | `<aside>`, `<h2>`, `<ul>`, `<span>` |
| Conteúdo | `<section>`, `<h2>`, `<article class="card">`, `<h3>` |
| Aside direito | `<aside>`, `<form>`, `<input>`, `<textarea>`, `<button>` |
| Footer | `<footer>`, `<p>` |

**Responsividade:**
- Nav vira menu hamburger em mobile (< 768px)
- Layout 3 colunas colapsa para 1 coluna em mobile
- Sidebar e aside passam para largura 100%

---

## 3. Paleta de Cores

**Nome da paleta:** Terracota & Noite  
**Inspiração:** Azul contrastando com azul-noite profundo/branco.

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#d4622a` | Destaque, CTAs, links |
| `--color-text-primary` | `#1a1a2e` | Texto principal |
| `--color-bg-primary` | `#f7f5f0` | Fundo da página |
| `--color-bg-secondary` | `#ffffff` | Cards, superfícies |
| `--color-border` | `#e2ddd5` | Bordas e divisores |
| `--color-success` | `#16a34a` | Indicadores positivos |
| `--color-muted` | `#6b6b85` | Textos secundários |

**Contraste verificado:** `#d4622a` sobre `#f7f5f0` → ratio 3.8:1 (AA para texto grande)  
**Contraste verificado:** `#1a1a2e` sobre `#f7f5f0` → ratio 16.2:1 (AAA ✅)

---

## 4. Tipografia

| Token | Valor | Uso |
|---|---|---|
| `--font-heading` | DM Serif Display | H1, títulos principais |
| `--font-body` | DM Sans | Corpo, UI, botões |
| `--fs-h1` | clamp(1.75rem, 5vw, 3.5rem) | Título hero |
| `--fs-h2` | clamp(1.25rem, 3vw, 1.875rem) | Seções |
| `--fs-h3` | clamp(1rem, 2.5vw, 1.25rem) | Cards |
| `--fs-base` | clamp(0.875rem, 2vw, 1rem) | Corpo de texto |

---

## 5. Estrutura de Arquivos (ITCSS)

```
projeto/
├── index.html
├── README.md
├── assets/
│   └── wireframe.png  (wireframe ASCII acima)
├── css/
│   ├── variables.css   ← Settings/Tokens
│   ├── reset.css       ← Reset global
│   ├── base.css        ← Estilos base (body, tipografia)
│   ├── layout.css      ← Grid, main layout
│   ├── utilities.css   ← Classes utilitárias
│   └── components/
│       ├── nav.css
│       ├── hero.css
│       ├── card.css
│       └── footer.css
└── js/
    └── main.js
```
