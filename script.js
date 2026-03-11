// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggleBtn = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // close nav after click
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Back to top button
const toTop = document.querySelector("[data-to-top]");
const onScroll = () => {
  if (!toTop) return;
  const visible = window.scrollY > 600;
  toTop.classList.toggle("is-visible", visible);
};
window.addEventListener("scroll", onScroll);
onScroll();

if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Small UX: disable button on submit (prevents double submit)
const form = document.querySelector("[data-form]");
if (form) {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", () => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = "0.8";
      btn.textContent = "Senden…";
    }
    if (status) status.textContent = "Wird gesendet…";
  });
}