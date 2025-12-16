// Germany Navigator V4 – JS (reliable)
(() => {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");
  if(btn && nav) btn.addEventListener("click", () => nav.classList.toggle("show"));
})();

(() => {
  document.querySelectorAll("[data-acc='btn']").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if(!panel) return;
      const open = panel.classList.contains("open");
      panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(!open));
      const icon = btn.querySelector("[data-acc='icon']");
      if(icon) icon.textContent = open ? "+" : "−";
    });
  });
})();

(() => {
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();
