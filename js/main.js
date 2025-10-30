import { initRouter, navigateTo } from './spa.js';

window.addEventListener('DOMContentLoaded', () => {
  initRouter();

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('[data-link]');
    if (!a) return;
    e.preventDefault();
    const route = a.getAttribute('data-link');
    navigateTo(route);
  });

  const route = location.hash.replace('#', '') || 'home';
  history.replaceState({ route }, '', `#${route}`);

  initThemeToggle();
});

// theme toggle: supports light, dark and high-contrast modes
function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const root = document.documentElement;

  // load saved theme
  const saved = localStorage.getItem('greenlife:theme');
  if (saved) root.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    let next = 'dark';
    if (current === 'dark') next = 'high-contrast';
    if (current === 'high-contrast') next = 'light';
    if (current === 'light') next = 'dark';
    root.setAttribute('data-theme', next === 'light' ? '' : next);
    localStorage.setItem('greenlife:theme', next === 'light' ? '' : next);
    btn.setAttribute('aria-pressed', String(next !== 'light'));
  });
}
