// Reveal on scroll
(function() {
  const elements = Array.from(document.querySelectorAll('.reveal'));
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
})();

// Mobile navbar toggle
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
})();

// Optional: close menu when clicking a link on mobile
(function() {
  const links = document.querySelectorAll('.nav-links a');
  const list = document.querySelector('.nav-links');
  if (!links || !list) return;
  links.forEach(a => a.addEventListener('click', () => list.classList.remove('open')));
})();