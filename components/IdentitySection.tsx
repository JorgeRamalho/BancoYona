const colors = [
  { className: "navy", hex: "#111A3D", name: "Azul Yona" },
  { className: "teal", hex: "#00C2B8", name: "Turquesa Digital" },
  { className: "coral", hex: "#FF6B5F", name: "Coral Humano" },
  { className: "yellow", hex: "#FFD166", name: "Luz de Lancamento" },
];

export function IdentitySection() {
  return (
    <section className="section identity-section" id="identidade">
      <div className="section-heading">
        <p className="eyebrow">Identidade visual</p>
        <h2>Confiante como banco, vibrante como fintech de 2019.</h2>
        <p>
          A marca combina azul profundo para seguranca, turquesa para tecnologia, coral para
          proximidade e amarelo para a sensacao de lancamento.
        </p>
      </div>

      <div className="identity-layout">
        <div className="palette" aria-label="Paleta de cores Banco Yona">
          {colors.map((color) => (
            <article className={`color-chip ${color.className}`} key={color.hex}>
              <span>{color.hex}</span>
              <strong>{color.name}</strong>
            </article>
          ))}
        </div>

        <div className="type-card">
          <p className="eyebrow">Tipografia</p>
          <h3>Montserrat para impacto. Inter para clareza.</h3>
          <p>
            Titulos geometricos e fortes lembram as marcas digitais do periodo. Textos com Inter
            deixam produtos financeiros mais legiveis, simples e diretos.
          </p>
          <div className="type-sample">
            <span>Yona</span>
            <small>Banco digital, cartao, viagens e planos.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
