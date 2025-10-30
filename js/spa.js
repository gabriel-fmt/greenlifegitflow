import { getTemplate } from './templates.js';

const appEl = () => document.getElementById('app');

export function navigateTo(route) {
  const content = getTemplate(route);
  render(content);
  history.pushState({ route }, '', `#${route}`);
}

export function render(content) {
  const el = appEl();
  if (typeof content === 'string') el.innerHTML = content;
  else {
    el.innerHTML = '';
    el.appendChild(content);
  }
}

export function initRouter() {
  const initial = location.hash.replace('#', '') || 'home';
  render(getTemplate(initial));
  window.addEventListener('popstate', (e) => {
    const route = (e.state && e.state.route) || location.hash.replace('#', '') || 'home';
    render(getTemplate(route));
  });
}