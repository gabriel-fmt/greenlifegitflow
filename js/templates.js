import { setupCadastroHandlers } from './validation.js';

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

export function getTemplate(name) {
  switch (name) {
    case 'projetos':
      return projetosTemplate();
    case 'cadastro':
      return cadastroTemplate();
    case 'home':
    default:
      return homeTemplate();
  }
}

function homeTemplate() {
  return `
    <section class="hero">
      <h1>GreenLife — Protegendo nosso planeta</h1>
      <p>Bem-vindo! Conheça nossos projetos e participe.</p>
      <div class="cards">
        <article class="card">
          <img src="img/reflorestada.png" alt="Reflorestamento">
          <h3>Reflorestamento</h3>
        </article>
        <article class="card">
          <img src="img/reciclagem.jpg" alt="Reciclagem">
          <h3>Reciclagem</h3>
        </article>
      </div>
    </section>
  `;
}

function projetosTemplate() {
  return `
    <section>
      <h2>Projetos</h2>
      <p>Aqui estão alguns dos nossos projetos em andamento.</p>
      <ul class="project-list">
        <li>Projeto A — Reflorestamento comunitário</li>
        <li>Projeto B — Educação ambiental</li>
        <li>Projeto C — Coleta seletiva local</li>
      </ul>
    </section>
  `;
}

function cadastroTemplate() {
  const html = `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="cadastroForm" novalidate>
        <label>Nome
          <input id="nome" name="nome" required minlength="3" />
        </label>
        <label>Telefone
          <input id="telefone" name="telefone" placeholder="(00) 00000-0000" />
        </label>
        <label>Email
          <input id="email" name="email" type="email" required />
        </label>
        <label>Mensagem
          <textarea id="mensagem" name="mensagem" rows="4"></textarea>
        </label>
        <div class="form-actions">
          <button type="submit">Enviar</button>
        </div>
        <div id="formFeedback" aria-live="polite"></div>
      </form>
    </section>
  `;
  const node = createElementFromHTML(html);
  setTimeout(() => setupCadastroHandlers(node), 0);
  return node;
}