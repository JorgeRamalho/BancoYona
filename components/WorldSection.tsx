import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TiltCard } from "@/components/effects/TiltCard";

const timelineSteps = [
  { year: "2019", label: "Fundacao" },
  { year: "2020", label: "Pandemia" },
  { year: "2022", label: "Superacao" },
  { year: "Hoje", label: "Vitoria" },
];

const journeyCards = [
  {
    number: "01",
    year: "2019",
    title: "Nasce em movimento",
    text: "Lancado no auge das fintechs, o Yona chega com conta digital, cartao colorido e linguagem simples — antes de o mundo mudar de vez.",
  },
  {
    number: "02",
    year: "2020",
    title: "A pandemia chega",
    text: "Ruas vazias, incerteza e medo. Enquanto muitos bancos travaram, o Yona manteve o app no ar, o atendimento humano e a confianca dos clientes.",
  },
  {
    number: "03",
    year: "2022",
    title: "Superacao com digital",
    text: "Reinventamos rotinas, ampliamos servicos no celular e provamos que proximidade nao depende de agencia — depende de presenca e tecnologia.",
  },
  {
    number: "04",
    year: "Hoje",
    title: "Passou, superou e venceu",
    text: "Saidos mais resilientes, com base fiel e produtos maduros. Uma nova inauguracao celebra quem esteve conosco desde 2019 e quem chega agora.",
  },
];

export function WorldSection() {
  return (
    <div className="section-wrap section-wrap--world">
      <SectionBackdrop variant="world" />
      <section className="section world-section section-inner" id="jornada-yona">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Nossa jornada</p>
          <h2>De 2019 a hoje: banco que atravessou a pandemia e saiu vitorioso.</h2>
          <p className="section-lead">
            O Banco Yona nao nasceu ontem. Veio antes da crise, enfrentou o pior momento da
            recente historia e emergiu mais forte — como os melhores bancos digitais do mercado
            financeiro.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <ol className="journey-timeline" aria-label="Linha do tempo Banco Yona">
            {timelineSteps.map((step, index) => (
              <li
                key={step.year}
                className={`journey-timeline-step${index === timelineSteps.length - 1 ? " is-current" : ""}`}
              >
                <span className="journey-timeline-year">{step.year}</span>
                <span className="journey-timeline-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <div className="world-grid journey-grid">
          {journeyCards.map((card, index) => (
            <ScrollReveal key={card.number} delay={index * 100}>
              <TiltCard className="world-card journey-card">
                <div className="journey-card-meta">
                  <span>{card.number}</span>
                  <em>{card.year}</em>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
