"use client";

import { FormEvent, useState } from "react";

export function WaitlistSection() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      setMessage("Informe um e-mail para entrar na lista.");
      return;
    }

    setMessage("Pronto. Voce entrou na lista de fundadores do Banco Yona.");
    event.currentTarget.reset();
  }

  return (
    <section className="section invite-section" id="convite">
      <div className="invite-card">
        <div>
          <p className="eyebrow">Lista de espera</p>
          <h2>Entre no lancamento do Banco Yona.</h2>
          <p>
            Receba o convite de abertura, o guia de identidade da marca e as primeiras ofertas para
            clientes fundadores.
          </p>
        </div>

        <form className="waitlist-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Seu melhor e-mail</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="voce@email.com" required />
            <button className="button button-primary" type="submit">
              Enviar
            </button>
          </div>
          <p className="form-message" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
