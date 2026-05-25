"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const navItems = [
  { href: "#app-yona", label: "App" },
  { href: "#mundo-2019", label: "2019" },
  { href: "#identidade", label: "Identidade" },
  { href: "#produtos", label: "Produtos" },
  { href: "#convite", label: "Entrar na lista" },
];

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isNavOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isNavOpen]);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader);

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`} data-header>
      <Brand />

      <button
        className="nav-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-controls="site-nav"
        aria-expanded={isNavOpen}
        onClick={() => setIsNavOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav${isNavOpen ? " is-open" : ""}`} id="site-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsNavOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
