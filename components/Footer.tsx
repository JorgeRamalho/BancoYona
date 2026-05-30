import { Brand } from "./Brand";

const innovationLinks = [
  { label: "App nativo iOS e Android", href: "#app-yona" },
  { label: "Open Finance integrado", href: "#produtos" },
  { label: "PIX e TED instantaneos", href: "#produtos" },
  { label: "IA antifraude em tempo real", href: "#identidade" },
  { label: "Infraestrutura cloud escalavel", href: "#jornada-yona" },
];

const securityLinks = [
  { label: "Criptografia AES-256 ponta a ponta", href: "#identidade" },
  { label: "Conformidade LGPD", href: "#convite" },
  { label: "Autenticacao biometrica", href: "#app-yona" },
  { label: "Monitoramento SOC 24/7", href: "#jornada-yona" },
  { label: "Certificacao PCI-DSS", href: "#identidade" },
];

const institutionalLinks = [
  { label: "Nossa jornada desde 2019", href: "#jornada-yona" },
  { label: "Produtos e servicos", href: "#produtos" },
  { label: "Identidade visual", href: "#identidade" },
  { label: "Cupom de inauguracao", href: "#convite" },
  { label: "Canal de privacidade", href: "mailto:privacidade@bancoyona.com.br" },
];

const securityBadges = [
  { icon: "TLS", label: "TLS 1.3" },
  { icon: "LGPD", label: "LGPD" },
  { icon: "IA", label: "Antifraude IA" },
  { icon: "SOC", label: "SOC 24/7" },
  { icon: "PCI", label: "PCI-DSS" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Rodape institucional Banco Yona">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand />
            <p className="footer-tagline">
              Desde 2019. Atravessou a pandemia, superou e venceu — banco digital com inovacao
              continua e seguranca da informacao no centro de cada transacao.
            </p>
            <div className="footer-tech-highlight">
              <span className="footer-tech-dot" aria-hidden="true" />
              Plataforma financeira digital com arquitetura moderna, APIs abertas e protecao em
              camadas.
            </div>
          </div>

          <nav className="footer-col" aria-label="Inovacao e tecnologia">
            <h3>Inovacao e tecnologia</h3>
            <ul>
              {innovationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Seguranca da informacao">
            <h3>Seguranca da informacao</h3>
            <ul>
              {securityLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Links institucionais">
            <h3>Institucional</h3>
            <ul>
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-security-panel">
          <div className="footer-security-copy">
            <h3>Compromisso com a protecao dos seus dados</h3>
            <p>
              Utilizamos criptografia avancada, tokenizacao de cartoes, analise comportamental e
              equipes especializadas em ciberseguranca para garantir confianca em cada acesso, PIX,
              investimento e cadastro realizado na plataforma Yona.
            </p>
          </div>
          <ul className="footer-badges" aria-label="Selos de seguranca e tecnologia">
            {securityBadges.map((badge) => (
              <li key={badge.label}>
                <span className="footer-badge-icon" aria-hidden="true">
                  {badge.icon}
                </span>
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Banco Yona. Todos os direitos reservados. Instituicao financeira digital
            — CNPJ 00.000.000/0001-00 (ficticio para fins de demonstracao).
          </p>
          <div className="footer-bottom-links">
            <a href="#convite">Termos de uso</a>
            <a href="#convite">Politica de privacidade</a>
            <a href="mailto:seguranca@bancoyona.com.br">Canal de seguranca</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
