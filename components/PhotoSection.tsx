export function PhotoSection() {
  return (
    <section className="section photo-section" aria-label="Direcao fotografica">
      <div className="photo-copy">
        <p className="eyebrow">Imagens e fotos</p>
        <h2>Fotografia editorial, luz natural e pessoas em movimento.</h2>
        <p>
          A direcao de imagem evita o isolamento domestico e valoriza cenas de rua, encontros,
          aeroportos, mesas de cafe, escritorios compartilhados e uso espontaneo do celular.
        </p>
      </div>
      <div className="photo-mosaic">
        <div className="mosaic-image mosaic-one" />
        <div className="mosaic-image mosaic-two" />
        <div className="mosaic-image mosaic-three" />
      </div>
    </section>
  );
}
