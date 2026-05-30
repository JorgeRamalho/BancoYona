import { SectionBackdrop } from "@/components/effects/SectionBackdrop";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TiltCard } from "@/components/effects/TiltCard";

const products = [
  {
    number: "01",
    title: "Conta sem friccao",
    text: "Abra pelo celular, acompanhe gastos em tempo real e organize metas por planos.",
    featured: true,
  },
  {
    number: "02",
    title: "Cartao Yona Coral",
    text: "Um cartao com personalidade, pensado para compras online, cafes e viagens.",
  },
  {
    number: "03",
    title: "Investimentos simples",
    text: "Primeiros passos com objetivos visuais: reserva, viagem, casa e estudos.",
  },
  {
    number: "04",
    title: "Clube de experiencias",
    text: "Beneficios em coworkings, eventos, mobilidade e parceiros urbanos.",
  },
];

export function ProductsSection() {
  return (
    <div className="section-wrap section-wrap--products">
      <SectionBackdrop variant="products" />
      <section className="section products-section section-inner" id="produtos">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Para o perfil Yona</p>
          <h2>Produtos para quem mistura carreira, cidade e futuro.</h2>
        </ScrollReveal>

        <div className="product-grid">
          {products.map((product, index) => (
            <ScrollReveal key={product.number} delay={index * 100}>
              <TiltCard
                className={`product-card${product.featured ? " featured" : ""}`}
              >
                <div className="card-icon">{product.number}</div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
