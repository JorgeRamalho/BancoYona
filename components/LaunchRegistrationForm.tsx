"use client";

import { FormEvent, useMemo, useState } from "react";

export type LaunchRegistrationData = {
  nome: string;
  dataNascimento: string;
  cidade: string;
  telefone: string;
  email: string;
  endereco: string;
};

type FormErrors = Partial<Record<keyof LaunchRegistrationData, string>>;

const perks = [
  { label: "Cupom exclusivo", detail: "Desconto na inauguração" },
  { label: "Prioridade", detail: "Acesso antecipado à conta" },
  { label: "Benefícios", detail: "Ofertas para fundadores" },
];

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getAge(birthDate: string) {
  const born = new Date(`${birthDate}T12:00:00`);
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const monthDiff = today.getMonth() - born.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) {
    age -= 1;
  }

  return age;
}

function validate(data: LaunchRegistrationData): FormErrors {
  const errors: FormErrors = {};

  if (data.nome.trim().length < 3) {
    errors.nome = "Informe seu nome completo.";
  }

  if (!data.dataNascimento) {
    errors.dataNascimento = "Informe sua data de nascimento.";
  } else {
    const age = getAge(data.dataNascimento);
    if (age < 18) {
      errors.dataNascimento = "É necessário ter 18 anos ou mais para se cadastrar.";
    } else if (age > 120) {
      errors.dataNascimento = "Verifique a data informada.";
    }
  }

  if (data.cidade.trim().length < 2) {
    errors.cidade = "Informe sua cidade.";
  }

  const phoneDigits = onlyDigits(data.telefone);
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.telefone = "Informe um telefone válido com DDD (10 ou 11 dígitos).";
  }

  if (!isValidEmail(data.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  if (data.endereco.trim().length < 10) {
    errors.endereco = "Informe seu endereço completo (rua, número e bairro).";
  }

  return errors;
}

function generateCouponCode(nome: string) {
  const prefix = nome
    .trim()
    .split(/\s+/)[0]
    ?.slice(0, 4)
    .toUpperCase()
    .replace(/[^A-Z]/g, "Y") || "YONA";
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `YONA-${prefix}-${suffix}`;
}

export function LaunchRegistrationForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setCouponCode("");

    const formData = new FormData(event.currentTarget);
    const data: LaunchRegistrationData = {
      nome: String(formData.get("nome") || "").trim(),
      dataNascimento: String(formData.get("dataNascimento") || ""),
      cidade: String(formData.get("cidade") || "").trim(),
      telefone: String(formData.get("telefone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      endereco: String(formData.get("endereco") || "").trim(),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setMessage("Revise os campos destacados para garantir seu cupom.");
      return;
    }

    const code = generateCouponCode(data.nome);
    setCouponCode(code);
    setSubmitted(true);
    setMessage(
      `Cadastro confirmado, ${data.nome.split(" ")[0]}! Seu cupom de inauguração está reservado.`,
    );
    event.currentTarget.reset();
  }

  return (
    <div className="launch-registration">
      <div className="launch-registration-pitch">
        <div className="launch-badge" aria-hidden="true">
          <span className="launch-badge-glow" />
          <span>Inauguração</span>
        </div>
        <h2 className="launch-title">
          Garanta seu <span className="launch-title-gradient">cupom de desconto</span> antes da
          abertura.
        </h2>
        <p className="launch-lead">
          O Yona existe desde 2019, atravessou a pandemia e hoje celebra uma nova fase. Cadastre-se
          e receba cupons exclusivos na inauguração — vantagens para quem confia em um banco que
          passou, superou e venceu.
        </p>

        <ul className="launch-perks" aria-label="Benefícios do cadastro de inauguração">
          {perks.map((perk) => (
            <li key={perk.label}>
              <span className="launch-perk-icon" aria-hidden="true" />
              <div>
                <strong>{perk.label}</strong>
                <span>{perk.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="launch-urgency">
          <span className="launch-urgency-dot" aria-hidden="true" />
          Vagas limitadas para cupons com desconto na inauguração.
        </p>
      </div>

      <div className="launch-form-shell">
        {submitted && couponCode ? (
          <div className="launch-success" role="status">
            <p className="launch-success-eyebrow">Cupom reservado</p>
            <p className="launch-success-code" aria-label={`Código do cupom: ${couponCode}`}>
              {couponCode}
            </p>
            <p className="launch-success-text">
              Apresente este código no dia da inauguração ou use o mesmo e-mail cadastrado para
              liberar seus descontos.
            </p>
            <button
              type="button"
              className="button button-ghost button-magnetic launch-success-reset"
              onClick={() => {
                setSubmitted(false);
                setCouponCode("");
                setMessage("");
                setErrors({});
              }}
            >
              Novo cadastro
            </button>
          </div>
        ) : (
          <form className="launch-form" onSubmit={handleSubmit} noValidate>
            <p className="launch-form-intro">
              Preencha seus dados. Leva menos de 2 minutos para garantir o cupom.
            </p>

            <div className="launch-form-grid">
              <div className={`launch-field launch-field--full${errors.nome ? " has-error" : ""}`}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Ex.: Marina Silva"
                  required
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
                {errors.nome && (
                  <span id="nome-error" className="field-error">
                    {errors.nome}
                  </span>
                )}
              </div>

              <div
                className={`launch-field${errors.dataNascimento ? " has-error" : ""}`}
              >
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  max={today}
                  required
                  aria-invalid={Boolean(errors.dataNascimento)}
                  aria-describedby={
                    errors.dataNascimento ? "dataNascimento-error" : undefined
                  }
                />
                {errors.dataNascimento && (
                  <span id="dataNascimento-error" className="field-error">
                    {errors.dataNascimento}
                  </span>
                )}
              </div>

              <div className={`launch-field${errors.cidade ? " has-error" : ""}`}>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Ex.: São Paulo"
                  required
                  aria-invalid={Boolean(errors.cidade)}
                  aria-describedby={errors.cidade ? "cidade-error" : undefined}
                />
                {errors.cidade && (
                  <span id="cidade-error" className="field-error">
                    {errors.cidade}
                  </span>
                )}
              </div>

              <div className={`launch-field${errors.telefone ? " has-error" : ""}`}>
                <label htmlFor="telefone">Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                  required
                  aria-invalid={Boolean(errors.telefone)}
                  aria-describedby={errors.telefone ? "telefone-error" : undefined}
                />
                {errors.telefone && (
                  <span id="telefone-error" className="field-error">
                    {errors.telefone}
                  </span>
                )}
              </div>

              <div
                className={`launch-field launch-field--full${errors.email ? " has-error" : ""}`}
              >
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@email.com"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="field-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div
                className={`launch-field launch-field--full${errors.endereco ? " has-error" : ""}`}
              >
                <label htmlFor="endereco">Endereço completo</label>
                <textarea
                  id="endereco"
                  name="endereco"
                  rows={3}
                  autoComplete="street-address"
                  placeholder="Rua, número, complemento, bairro"
                  required
                  aria-invalid={Boolean(errors.endereco)}
                  aria-describedby={errors.endereco ? "endereco-error" : undefined}
                />
                {errors.endereco && (
                  <span id="endereco-error" className="field-error">
                    {errors.endereco}
                  </span>
                )}
              </div>
            </div>

            <p className="launch-form-consent">
              Ao cadastrar, você concorda em receber comunicações sobre a inauguração e cupons do
              Banco Yona. Seus dados são usados apenas para este lançamento.
            </p>

            <button className="button button-primary button-magnetic launch-submit" type="submit">
              Quero meu cupom de inauguração
            </button>

            <p
              className={`form-message${message && !submitted ? " form-message--alert" : ""}`}
              aria-live="polite"
            >
              {message}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
