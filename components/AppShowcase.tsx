"use client";

import Image from "next/image";
import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ParallaxGroup } from "@/components/effects/ParallaxGroup";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const quickActions = ["TED", "Boleto", "Cartao", "Metas"];

const transactions = [
  { label: "Cafe Central", value: "- R$ 18,70" },
  { label: "Passagem urbana", value: "- R$ 4,30" },
  { label: "Reserva viagem", value: "+ R$ 250,00" },
];

export function AppShowcase() {
  return (
    <div className="section-wrap section-wrap--app">
      <SectionBackdrop variant="app" />
      <section className="section app-showcase-section section-inner" id="app-yona">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">App Banco Yona</p>
          <h2>Pessoas reais, cidade viva e o banco na palma da mao.</h2>
          <p>
            A campanha visual coloca o celular de frente, com a tela do app em destaque, cercado por
            fotos de clientes em cafes, coworkings e encontros urbanos.
          </p>
        </ScrollReveal>

        <ParallaxGroup className="app-showcase" intensity={14}>
          <ScrollReveal as="figure" className="people-photo people-photo-main parallax-layer">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=82"
              alt="Pessoas conversando em um coworking com notebook e celular"
              fill
              sizes="(max-width: 980px) 100vw, 34vw"
            />
            <figcaption>Coworkings, reunioes presenciais e planos grandes.</figcaption>
          </ScrollReveal>

          <div
            className="front-phone parallax-layer parallax-layer--phone"
            aria-label="Tela frontal do aplicativo Banco Yona"
          >
            <div className="phone-top">
              <span />
            </div>
            <div className="app-home">
              <div className="app-home-header">
                <div>
                  <span>Bom dia, Marina</span>
                  <strong>Banco Yona</strong>
                </div>
                <span className="app-avatar">M</span>
              </div>

              <div className="cash-card">
                <span>Saldo disponivel</span>
                <strong>R$ 8.430,90</strong>
                <small>Conta ativa desde 2019 — pandemia superada</small>
              </div>

              <div className="quick-actions" aria-label="Acoes do app Banco Yona">
                {quickActions.map((action) => (
                  <button key={action} type="button" className="app-action">
                    {action}
                  </button>
                ))}
              </div>

              <div className="yona-card-preview">
                <span>Yona Coral</span>
                <strong>**** 2019</strong>
              </div>

              <div className="timeline">
                {transactions.map((transaction) => (
                  <div className="timeline-row" key={transaction.label}>
                    <span>{transaction.label}</span>
                    <strong>{transaction.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ScrollReveal
            as="figure"
            delay={120}
            className="people-photo people-photo-side parallax-layer"
          >
            <Image
              src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?auto=format&fit=crop&w=900&q=82"
              alt="Pessoa usando celular em uma cafeteria"
              fill
              sizes="(max-width: 980px) 100vw, 30vw"
            />
            <figcaption>Resiliencia digital: presente antes, durante e depois da pandemia.</figcaption>
          </ScrollReveal>
        </ParallaxGroup>
      </section>
    </div>
  );
}
