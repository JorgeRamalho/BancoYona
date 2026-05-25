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
    <section className="section products-section" id="produtos">
      <div className="section-heading">
        <p className="eyebrow">Para o perfil Yona</p>
        <h2>Produtos para quem mistura carreira, cidade e futuro.</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article
            className={`product-card${product.featured ? " featured" : ""}`}
            key={product.number}
          >
            <div className="card-icon">{product.number}</div>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
