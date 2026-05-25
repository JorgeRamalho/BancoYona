const worldCards = [
  {
    number: "01",
    title: "Mobilidade e vida urbana",
    text: "Rotina de metro, bicicletas, apps de transporte, aeroportos cheios e gente resolvendo a vida no celular entre um compromisso e outro.",
  },
  {
    number: "02",
    title: "Fintechs em alta",
    text: "Bancos digitais, cartoes coloridos, onboarding sem agencia e uma linguagem mais simples substituiam a burocracia bancaria tradicional.",
  },
  {
    number: "03",
    title: "Conexao presencial",
    text: "Shows, cafes, escritorios compartilhados, viagens de fim de semana e encontros presenciais davam o tom de uma marca mais humana e social.",
  },
];

export function WorldSection() {
  return (
    <section className="section world-section" id="mundo-2019">
      <div className="section-heading">
        <p className="eyebrow">Como era o mundo?</p>
        <h2>2019 tinha pressa, rua cheia e otimismo digital.</h2>
      </div>
      <div className="world-grid">
        {worldCards.map((card) => (
          <article className="world-card" key={card.number}>
            <span>{card.number}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
