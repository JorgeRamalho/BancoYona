"use client";

import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ParallaxGroup } from "@/components/effects/ParallaxGroup";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const heroStats = [
  { value: "2019", label: "Banco desde o lancamento" },
  { value: "24/7", label: "Ativo na pandemia" },
  { value: "Hoje", label: "Superou e venceu" },
];

const appActions = ["TED", "Cartao", "Investir", "Viagem"];

export function Hero() {
  return (
    <div className="section-wrap section-wrap--hero">
      <SectionBackdrop variant="hero" />
      <section className="hero section section-inner">
        <ScrollReveal className="hero-copy">
          <p className="eyebrow eyebrow-shine">Banco digital desde 2019</p>
          <h1>
            <span className="title-line">Nasceu em 2019.</span>
            <span className="title-line title-gradient">Passou, superou e venceu.</span>
          </h1>
          <p className="hero-text">
            O Banco Yona surgiu antes da pandemia, com a energia de quem vivia entre metro, cafe e
            planos para o futuro. Quando o mundo parou, seguimos digital, proximos e firmes. Atravessamos
            o periodo mais dificil, superamos cada desafio e hoje chegamos mais fortes — prontos para
            uma nova fase de crescimento.
          </p>
          <div className="hero-actions">
            <a className="button button-primary button-magnetic" href="#convite">
              Garantir cupom de inauguração
            </a>
            <a className="button button-ghost button-magnetic" href="#jornada-yona">
              Conhecer nossa jornada
            </a>
          </div>
          <div className="hero-stats" role="list" aria-label="Historia do Banco Yona">
            {heroStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 90} className="stat-chip">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ParallaxGroup className="hero-visual" intensity={22}>
          <div
            className="phone-card parallax-layer parallax-layer--phone"
            role="img"
            aria-label="Interface do aplicativo Banco Yona"
          >
            <div className="phone-top">
              <span />
            </div>
            <div className="app-card balance-card">
              <span>Saldo Yona</span>
              <strong>R$ 8.430,90</strong>
              <small>Cliente desde 2019</small>
            </div>
            <div className="app-grid">
              {appActions.map((action) => (
                <button key={action} type="button" className="app-action">
                  {action}
                </button>
              ))}
            </div>
            <div className="app-card movement-card">
              <span>Cafe Central</span>
              <strong>- R$ 18,70</strong>
            </div>
          </div>
          <div className="photo-card photo-one parallax-layer parallax-layer--photo-a" />
          <div className="photo-card photo-two parallax-layer parallax-layer--photo-b" />
          <div className="orb orb-coral parallax-layer parallax-layer--orb-a" />
          <div className="orb orb-blue parallax-layer parallax-layer--orb-b" />
        </ParallaxGroup>
      </section>
    </div>
  );
}
