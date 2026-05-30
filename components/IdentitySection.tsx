"use client";

import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const colors = [
  { className: "navy", hex: "#111A3D", name: "Azul Yona" },
  { className: "teal", hex: "#00C2B8", name: "Turquesa Digital" },
  { className: "coral", hex: "#FF6B5F", name: "Coral Humano" },
  { className: "yellow", hex: "#FFD166", name: "Luz de Lancamento" },
];

export function IdentitySection() {
  return (
    <div className="section-wrap section-wrap--identity">
      <SectionBackdrop variant="identity" />
      <section className="section identity-section section-inner" id="identidade">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Identidade visual</p>
          <h2>Confiante como banco, moderno como fintech digital.</h2>
          <p>
            A marca combina azul profundo para seguranca financeira, turquesa para tecnologia,
            coral para proximidade humana e amarelo para energia de crescimento.
          </p>
        </ScrollReveal>

        <div className="identity-layout">
          <div className="palette" aria-label="Paleta de cores Banco Yona">
            {colors.map((color, index) => (
              <ScrollReveal key={color.hex} delay={index * 80}>
                <article className={`color-chip color-chip--interactive ${color.className}`}>
                  <span>{color.hex}</span>
                  <strong>{color.name}</strong>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={160}>
            <div className="type-card">
              <p className="eyebrow">Tipografia</p>
              <h3>Plus Jakarta Sans para titulos. Inter para dados financeiros.</h3>
              <p>
                Tipografia alinhada ao segmento de bancos digitais: titulos geometricos e objetivos
                com Plus Jakarta Sans, textos e numeros com Inter — padrao de clareza usado em
                apps financeiros, extratos e interfaces de investimento.
              </p>
              <div className="type-sample">
                <span className="type-sample-word">Yona</span>
                <small>Banco digital, cartao, viagens e planos.</small>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
