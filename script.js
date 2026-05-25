const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const form = document.querySelector("[data-form]");
const formMessage = document.querySelector("[data-form-message]");

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

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();

  if (!formMessage) {
    return;
  }

  if (!email) {
    formMessage.textContent = "Informe um e-mail para entrar na lista.";
    return;
  }

  formMessage.textContent = "Pronto. Voce entrou na lista de fundadores do Banco Yona.";
  form.reset();
});
