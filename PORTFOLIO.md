# Banco Yona — Portfolio no GitHub

Landing page de banco digital desenvolvida com **HTML/CSS/JavaScript** e **Next.js/React**, pensada para demonstrar evolução profissional de produto, UI e engenharia front-end.

## Demo

- **GitHub Pages:** https://jorgeramalho.github.io/Projeto-BancoYona/
- **Stack:** Next.js 16, React 19, TypeScript, CSS modular global

## Linha do tempo dos commits (portfólio)

| Commit | Escopo | O que demonstra |
|--------|--------|-----------------|
| `feat(effects)` | Camada de interação | Scroll reveal, parallax, tilt 3D, backdrops por seção, acessibilidade (`prefers-reduced-motion`) |
| `feat(registration)` | Produto / conversão | Formulário completo de inauguração, validação e cupom personalizado |
| `feat(static)` | Engenharia dual | Paridade entre versão estática e React |
| `feat(brand-story)` | Narrativa de marca | Jornada 2019 → pandemia → superação → vitória |
| `feat(typography)` | Design system | Tipografia fintech (Plus Jakarta Sans + Inter) |
| `feat(footer)` | Confiança institucional | Rodapé com inovação, tecnologia e segurança da informação |
| `feat(theme)` | UX avançada | Tema escuro com persistência e anti-flash |
| `docs` | Documentação | README e fluxo Git/GitHub para portfólio |

## Histórico base do repositório

```
6f0c9d3  Initial Banco Yona Next.js landing page
9cca9cb  Configure GitHub Pages deployment
0128e75  Fix GitHub Pages workflow setup
→        Evolução em 8 commits temáticos (master atual)
```

## Destaques para recrutadores

1. **Duas entregas, um design** — mesmo `styles.css` alimenta `index.html` e Next.js.
2. **Commits atômicos** — histórico legível para code review e portfólio.
3. **CI/CD** — deploy automático via GitHub Actions em `master`.
4. **A11y e performance** — reduced motion, semântica HTML, export estático.

## Como publicar no GitHub

```bash
git pull origin master
git push origin master
```

Se o push falhar por autenticação:

```bash
gh auth login
git push origin master
```

## Autor

**Jorge Ramalho** — [github.com/JorgeRamalho](https://github.com/JorgeRamalho)
