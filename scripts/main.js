// Nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.getAttribute('data-open') === 'true';
    navMenu.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade');
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

revealEls.forEach(el => io.observe(el));

// Stagger via delay classes
const allWithDelay = document.querySelectorAll('[class*="reveal-delay-"]');
allWithDelay.forEach((el) => {
  const delay = Array.from(el.classList)
    .find(c => c.startsWith('reveal-delay-'))
    ?.split('-')
    ?.pop();
  if (delay) {
    el.style.animationDelay = `${Number(delay) * 120}ms`;
  }
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Copy email + toast
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.style.animation = 'fade-in-soft .2s ease-out';
  window.clearTimeout((toast)._timeout);
  (toast)._timeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

const copyButtons = document.querySelectorAll('.copy-email');
copyButtons.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email') || '';
    try {
      await navigator.clipboard.writeText(email);
      showToast('Copied email');
    } catch {
      showToast(email);
    }
  });
});