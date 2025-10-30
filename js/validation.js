import { maskPhone } from './mask.js';

function showMessage(container, text, type = 'error') {
  container.textContent = text;
  container.className = `feedback ${type}`;
}

export function setupCadastroHandlers(rootNode) {
  const form = (rootNode && rootNode.querySelector('#cadastroForm')) || document.querySelector('#cadastroForm');
  if (!form) return;

  const feedback = form.querySelector('#formFeedback');
  const telefone = form.querySelector('#telefone');
  const nome = form.querySelector('#nome');
  const email = form.querySelector('#email');

  telefone.addEventListener('input', (e) => maskPhone(e.target));

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    feedback.textContent = '';

    const errors = [];
    if (!nome.value || nome.value.trim().length < 3) errors.push('Nome precisa ter ao menos 3 caracteres.');
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) errors.push('Email inválido.');
    if (telefone.value && telefone.value.replace(/\D/g, '').length < 10) errors.push('Telefone incompleto.');

    if (errors.length) {
      showMessage(feedback, errors.join('\n'), 'error');
      return false;
    }

    const data = {
      nome: nome.value.trim(),
      email: email.value.trim(),
      telefone: telefone.value.trim(),
      mensagem: form.querySelector('#mensagem').value.trim(),
      createdAt: new Date().toISOString()
    };

    const stored = JSON.parse(localStorage.getItem('greenlife:cadastros') || '[]');
    stored.push(data);
    localStorage.setItem('greenlife:cadastros', JSON.stringify(stored));

    showMessage(feedback, 'Cadastro enviado com sucesso!', 'success');
    form.reset();
    return true;
  });
}