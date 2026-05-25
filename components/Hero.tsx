const heroStats = [
  { value: "24h", label: "Conta digital" },
  { value: "0", label: "Tarifa de abertura" },
  { value: "2019", label: "Energia de lancamento" },
];

const appActions = ["TED", "Cartao", "Investir", "Viagem"];

export function Hero() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Lancamento 2019</p>
        <h1>O banco para um mundo em movimento.</h1>
        <p className="hero-text">
          Antes das chamadas por video virarem rotina, o Banco Yona nasce para quem vivia entre
          metro, cafe, viagens, coworkings e planos para o futuro.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#convite">
            Quero ser avisado
          </a>
          <a className="button button-ghost" href="#identidade">
            Ver identidade visual
          </a>
        </div>
        <dl className="hero-stats" aria-label="Diferenciais do Banco Yona">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-visual" role="img" aria-label="Pessoa usando celular em ambiente urbano">
        <div className="phone-card">
          <div className="phone-top">
            <span />
          </div>
          <div className="app-card balance-card">
            <span>Saldo Yona</span>
            <strong>R$ 8.430,90</strong>
            <small>+12% este mes</small>
          </div>
          <div className="app-grid">
            {appActions.map((action) => (
              <span key={action}>{action}</span>
            ))}
          </div>
          <div className="app-card movement-card">
            <span>Cafe Central</span>
            <strong>- R$ 18,70</strong>
          </div>
        </div>
        <div className="photo-card photo-one" />
        <div className="photo-card photo-two" />
        <div className="orb orb-coral" />
        <div className="orb orb-blue" />
      </div>
    </section>
  );
}
