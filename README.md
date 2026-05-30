# Banco Yona

Landing page de lancamento do Banco Yona com identidade visual vibrante, efeitos dinamicos, cadastro para cupons de inauguracao e tema escuro.

> **Portfolio:** veja a narrativa completa dos commits em [PORTFOLIO.md](./PORTFOLIO.md)

## Duas formas de rodar o projeto

### 1. Versao estatica (HTML + CSS + JavaScript)

Abra `index.html` no navegador ou use um servidor local simples:

```bash
npx serve .
```

Arquivos principais:

- `index.html` — estrutura da pagina
- `styles.css` — estilos globais, gradientes e animacoes
- `script.js` — navegacao, parallax, scroll reveal, formulario de cupom

### 2. Versao React (Next.js + TypeScript)

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Componentes em `app/` e `components/`. O CSS e o mesmo arquivo `styles.css`.

## Identidade visual

- Cores: `#111A3D`, `#00C2B8`, `#FF6B5F`, `#FFD166`
- Tipografia: **Plus Jakarta Sans** (titulos fintech) + **Inter** (textos e dados financeiros)
- Efeitos: parallax, scroll reveal, tilt cards, barra de progresso, aura no cursor
- **Tema escuro**: botao no header, preferencia salva em `localStorage` (`yona-theme`)

## Cadastro de inauguracao

Formulario com: nome, data de nascimento, cidade, telefone, e-mail e endereco. Ao enviar, o cliente recebe um codigo de cupom exclusivo (simulado no front-end).

## Historico de commits (portfolio)

```text
05a089f feat(effects): add dynamic interactions and brand backdrops
8f053c7 feat(registration): add inauguration signup with coupon flow
1fc9122 feat(static): sync index.html and script.js with React experience
d8148be feat(brand-story): reinforce 2019 journey through pandemic to victory
cc33c9e feat(typography): adopt Plus Jakarta Sans and Inter for fintech UI
d53cd55 feat(footer): add institutional footer for innovation and security
adce935 feat(theme): add dark mode with persisted user preference
3f8bcdc docs: document portfolio stack, features and GitHub workflow
```

## Git e GitHub (fluxo profissional)

```bash
# 1. Atualizar branch local
git pull origin master

# 2. Criar branch de feature
git checkout -b feat/nome-da-feature

# 3. Ver alteracoes
git status
git diff

# 4. Commits tematicos (preferir varios commits pequenos)
git add caminhos/relevantes
git commit -m "feat(escopo): descricao clara"

# 5. Enviar para o GitHub
git push -u origin feat/nome-da-feature

# 6. Abrir Pull Request e fazer merge em master
gh pr create --title "feat: titulo" --body "Resumo para portfolio"
```

Deploy automatico no GitHub Pages apos merge em `master`:

```text
https://jorgeramalho.github.io/Projeto-BancoYona/
```

## Scripts npm

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento Next.js |
| `npm run build` | Build estatico para producao |
| `npm run start` | Servidor de producao |
| `npm run lint` | Verificacao ESLint |
