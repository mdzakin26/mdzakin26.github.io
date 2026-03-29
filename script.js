document.addEventListener('DOMContentLoaded', () => {
  // Collapse mobile nav when link clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapse).hide();
      }
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const obsOptions = { root: null, rootMargin: '0px', threshold: 0.45 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (entry.isIntersecting) {
        navLinks.forEach(n => n.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }, obsOptions);
  sections.forEach(s => observer.observe(s));

  // Reveal on scroll (simple)
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, {threshold: 0.15});
  reveals.forEach(r => revealObs.observe(r));

  // Project card click -> simple modal fallback
  document.querySelectorAll('.project-card .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Preview not yet activated — would you like me to add a modal detail for this project?');
    });
  });
});
