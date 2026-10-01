/**
 * BOGO Minimal Marketing Website
 * Strict implementation: IntersectionObserver section reveals with staggered brand items.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-section, .brands-grid, .formats-grid').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  // Set stagger delay indices for brand grid items (40ms increments)
  const brandItems = document.querySelectorAll('.brands-grid .brand-item');
  brandItems.forEach((item, index) => {
    item.style.setProperty('--stagger-delay', `${index * 40}ms`);
  });

  // Set stagger delay indices for format grid items (40ms increments)
  const formatItems = document.querySelectorAll('.formats-grid .format-item');
  formatItems.forEach((item, index) => {
    item.style.setProperty('--stagger-delay', `${index * 40}ms`);
  });

  // IntersectionObserver for one-time scroll reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // If it's a section containing grids, trigger the grid animation as well
        const grid = entry.target.querySelector('.brands-grid, .formats-grid');
        if (grid) {
          grid.classList.add('is-revealed');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-section').forEach(section => {
    revealObserver.observe(section);
  });
});
