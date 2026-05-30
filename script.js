(function () {
  "use strict";

  const THEME_KEY = "yona-theme";
  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const progressRoot = document.querySelector("[data-scroll-progress]");
  const progressBar = document.querySelector("[data-scroll-progress-bar]");
  const cursorAura = document.querySelector("[data-cursor-aura]");
  const launchForm = document.querySelector("[data-launch-form]");
  const launchSuccess = document.querySelector("[data-launch-success]");
  const launchCoupon = document.querySelector("[data-launch-coupon]");
  const launchReset = document.querySelector("[data-launch-reset]");
  const formMessage = document.querySelector("[data-form-message]");
  const birthDateInput = document.querySelector("[data-birth-date]");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* —— Tema claro / escuro —— */
  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    if (themeToggle instanceof HTMLButtonElement) {
      const isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Ativar tema claro" : "Ativar tema escuro",
      );
      themeToggle.title = isDark ? "Tema claro" : "Tema escuro";
    }
  }

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* —— Navegacao —— */
  navToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("is-open");
    body.classList.toggle("nav-open", Boolean(isOpen));
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  nav?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      body.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    },
    { passive: true },
  );

  /* —— Barra de progresso —— */
  function updateScrollProgress() {
    if (!progressBar || !progressRoot) return;

    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? Math.min(1, window.scrollY / height) : 0;

    progressBar.style.transform = `scaleX(${progress})`;
    progressRoot.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* —— Scroll reveal —— */
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  /* —— Parallax no mouse —— */
  if (!reducedMotion) {
    document.querySelectorAll("[data-parallax]").forEach((group) => {
      const intensity = group.classList.contains("hero-visual") ? 22 : 14;

      group.addEventListener("mousemove", (event) => {
        const rect = group.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * intensity;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * intensity;

        group.style.setProperty("--px", `${x}px`);
        group.style.setProperty("--py", `${y}px`);
      });

      group.addEventListener("mouseleave", () => {
        group.style.setProperty("--px", "0px");
        group.style.setProperty("--py", "0px");
      });
    });
  }

  /* —— Aura do cursor —— */
  if (!reducedMotion && finePointer && cursorAura) {
    window.addEventListener("mousemove", (event) => {
      cursorAura.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cursorAura.classList.add("is-active");
    });

    window.addEventListener("mouseleave", () => {
      cursorAura.classList.remove("is-active");
    });
  }

  /* —— Cards com tilt 3D —— */
  if (!reducedMotion) {
    document.querySelectorAll("[data-tilt-card]").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty("--tilt-x", `${y * -8}deg`);
        card.style.setProperty("--tilt-y", `${x * 8}deg`);
        card.style.setProperty("--lift", "1");
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--lift", "0");
      });
    });
  }

  /* —— Data maxima de nascimento —— */
  if (birthDateInput instanceof HTMLInputElement) {
    birthDateInput.max = new Date().toISOString().split("T")[0];
  }

  /* —— Formulario de cadastro / cupom —— */
  function onlyDigits(value) {
    return value.replace(/\D/g, "");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function getAge(birthDate) {
    const born = new Date(`${birthDate}T12:00:00`);
    const today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    const monthDiff = today.getMonth() - born.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) {
      age -= 1;
    }

    return age;
  }

  function validateLaunchForm(data) {
    const errors = {};

    if (data.nome.trim().length < 3) {
      errors.nome = "Informe seu nome completo.";
    }

    if (!data.dataNascimento) {
      errors.dataNascimento = "Informe sua data de nascimento.";
    } else {
      const age = getAge(data.dataNascimento);
      if (age < 18) {
        errors.dataNascimento = "E necessario ter 18 anos ou mais para se cadastrar.";
      } else if (age > 120) {
        errors.dataNascimento = "Verifique a data informada.";
      }
    }

    if (data.cidade.trim().length < 2) {
      errors.cidade = "Informe sua cidade.";
    }

    const phoneDigits = onlyDigits(data.telefone);
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      errors.telefone = "Informe um telefone valido com DDD (10 ou 11 digitos).";
    }

    if (!isValidEmail(data.email.trim())) {
      errors.email = "Informe um e-mail valido.";
    }

    if (data.endereco.trim().length < 10) {
      errors.endereco = "Informe seu endereco completo (rua, numero e bairro).";
    }

    return errors;
  }

  function generateCouponCode(nome) {
    const prefix =
      nome
        .trim()
        .split(/\s+/)[0]
        ?.slice(0, 4)
        .toUpperCase()
        .replace(/[^A-Z]/g, "Y") || "YONA";
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `YONA-${prefix}-${suffix}`;
  }

  function clearFieldErrors() {
    launchForm?.querySelectorAll("[data-field]").forEach((field) => {
      field.classList.remove("has-error");
      const errorEl = field.querySelector("[data-field-error]");
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.hidden = true;
      }
    });
  }

  function showFieldErrors(errors) {
    Object.entries(errors).forEach(([name, message]) => {
      const field = launchForm?.querySelector(`[data-field="${name}"]`);
      if (!field) return;

      field.classList.add("has-error");
      const errorEl = field.querySelector("[data-field-error]");
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
    });
  }

  function showSuccess(nome, code) {
    if (!launchForm || !launchSuccess || !launchCoupon) return;

    launchForm.hidden = true;
    launchSuccess.hidden = false;
    launchCoupon.textContent = code;
    launchCoupon.setAttribute("aria-label", `Codigo do cupom: ${code}`);

    if (formMessage) {
      formMessage.textContent = "";
      formMessage.classList.remove("form-message--alert");
    }
  }

  function resetLaunchForm() {
    if (!launchForm || !launchSuccess) return;

    launchForm.reset();
    launchForm.hidden = false;
    launchSuccess.hidden = true;
    clearFieldErrors();

    if (formMessage) {
      formMessage.textContent = "";
      formMessage.classList.remove("form-message--alert");
    }
  }

  launchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldErrors();

    const formData = new FormData(launchForm);
    const data = {
      nome: String(formData.get("nome") || "").trim(),
      dataNascimento: String(formData.get("dataNascimento") || ""),
      cidade: String(formData.get("cidade") || "").trim(),
      telefone: String(formData.get("telefone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      endereco: String(formData.get("endereco") || "").trim(),
    };

    const errors = validateLaunchForm(data);

    if (Object.keys(errors).length > 0) {
      showFieldErrors(errors);
      if (formMessage) {
        formMessage.textContent = "Revise os campos destacados para garantir seu cupom.";
        formMessage.classList.add("form-message--alert");
      }
      return;
    }

    const code = generateCouponCode(data.nome);
    const firstName = data.nome.split(" ")[0];

    if (formMessage) {
      formMessage.textContent = `Cadastro confirmado, ${firstName}! Seu cupom de inauguracao esta reservado.`;
      formMessage.classList.remove("form-message--alert");
    }

    showSuccess(data.nome, code);
  });

  launchReset?.addEventListener("click", resetLaunchForm);
})();
