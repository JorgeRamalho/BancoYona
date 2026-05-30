import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function PhotoSection() {
  return (
    <div className="section-wrap section-wrap--photo">
      <SectionBackdrop variant="photo" />
      <section className="section photo-section section-inner" aria-label="Direcao fotografica">
        <ScrollReveal className="photo-copy">
          <p className="eyebrow">Imagens e fotos</p>
          <h2>Fotografia editorial, luz natural e pessoas em movimento.</h2>
          <p>
            A direcao de imagem evita o isolamento domestico e valoriza cenas de rua, encontros,
            aeroportos, mesas de cafe, escritorios compartilhados e uso espontaneo do celular.
          </p>
        </ScrollReveal>
        <div className="photo-mosaic">
          <ScrollReveal className="mosaic-reveal mosaic-reveal--tall" delay={0}>
            <div className="mosaic-image mosaic-one mosaic-image--interactive" />
          </ScrollReveal>
          <ScrollReveal className="mosaic-reveal" delay={100}>
            <div className="mosaic-image mosaic-two mosaic-image--interactive" />
          </ScrollReveal>
          <ScrollReveal className="mosaic-reveal" delay={200}>
            <div className="mosaic-image mosaic-three mosaic-image--interactive" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
