type BrandProps = {
  href?: string;
};

export function Brand({ href = "#top" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="Banco Yona">
      <span className="brand-mark">Y</span>
      <span>Banco Yona</span>
    </a>
  );
}
