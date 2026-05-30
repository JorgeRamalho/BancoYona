"use client";

import { LaunchRegistrationForm } from "@/components/LaunchRegistrationForm";
import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function WaitlistSection() {
  return (
    <div className="section-wrap section-wrap--invite section-wrap--launch">
      <SectionBackdrop variant="invite" />
      <section className="section launch-section section-inner" id="convite">
        <ScrollReveal>
          <p className="eyebrow eyebrow-shine launch-eyebrow">Cadastro de lançamento</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <LaunchRegistrationForm />
        </ScrollReveal>
      </section>
    </div>
  );
}
