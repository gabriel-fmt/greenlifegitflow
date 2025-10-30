# GreenLife — versão SPA (Entregável)

## Como usar
- Estrutura organizada em pastas.
- Abra `index.html` no navegador.
- Suba no GitHub como repositório **público**.

## Estrutura modular
- `js/main.js`: inicializa o SPA
- `js/spa.js`: controle de rotas
- `js/templates.js`: templates
- `js/validation.js`: validação e armazenamento local
- `js/mask.js`: máscaras de input


---

## 🏷️ Versionamento & GitFlow (exigido)

Este repositório sugere a estratégia **GitFlow** para organização das entregas:

- `main` — branch de produção (sempre estável).  
- `develop` — branch de integração com as últimas features.  
- `feature/*` — ramas para funcionalidades (ex: `feature/spa-improvements`).  
- `release/*` — preparo de release (ex: `release/v1.0.0`).  
- `hotfix/*` — correções emergenciais em produção.

**Commits semânticos recomendados:** `feat:`, `fix:`, `chore:`, `docs:`.

**Releases:** Use tags `vMAJOR.MINOR.PATCH` e abra PRs de `release/*` para `main` com changelog.

---

## ♿ Acessibilidade (WCAG 2.1 AA) — o que foi feito

- Skip link funcional (pular para o conteúdo).  
- Navegação por teclado (tab/shift+tab) com focus visível.  
- Menus/Modais fecham com ESC.  
- Roles ARIA e aria-live em notificações.  
- Modo escuro e modo de alto contraste ativáveis (botão no header).

---

## 🚀 Build de Produção (simplificado)

Na pasta `greenlifejs_dist/` há uma versão simplificada para deploy com arquivos minificados:

- `css/style.min.css` — CSS minificado.  
- `js/*.min.js` — JS minificado.  
- `index.html` — arquivo referenciando os assets minificados.  
- `img/` — imagens otimizadas quando possível.

Para um pipeline profissional, recomenda-se usar `esbuild`, `webpack` ou `gulp` para minificação e compressão de imagens.

---

## 📦 Entrega Final

- Garanta que o repositório no GitHub esteja público.  
- Crie branches seguindo GitFlow e registre o histórico de commits/PRs.  
- Faça um release final (`release/v1.0.0`) e marque `main` com a tag.

