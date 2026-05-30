# Banco Yona

Landing page de lancamento do Banco Yona com identidade visual vibrante, efeitos dinamicos e cadastro para cupons de inauguracao.

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

## Git e GitHub (fluxo profissional)

```bash
# 1. Atualizar branch local
git pull origin master

# 2. Criar branch de feature
git checkout -b feat/nome-da-feature

# 3. Ver alteracoes
git status
git diff

# 4. Adicionar e commitar
git add .
git commit -m "feat: descricao clara da mudanca"

# 5. Enviar para o GitHub
git push -u origin feat/nome-da-feature

# 6. Abrir Pull Request no GitHub e fazer merge em master
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
