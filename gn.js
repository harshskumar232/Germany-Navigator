// Germany Navigator – V3 JS (reliable, minimal)
// 1) Mobile nav toggle
(() => {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");
  if(btn && nav){
    btn.addEventListener("click", () => nav.classList.toggle("show"));
  }
})();

// 2) Accordions
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

// 3) Mode tabs (homepage planner)
(() => {
  const tabWrap = document.querySelector("[data-modes]");
  if(!tabWrap) return;
  const tabs = tabWrap.querySelectorAll("button[data-mode]");
  const panels = document.querySelectorAll("[data-panel]");
  function activate(key){
    tabs.forEach(t => t.classList.toggle("active", t.dataset.mode === key));
    panels.forEach(p => p.classList.toggle("active", p.dataset.panel === key));
  }
  tabs.forEach(t => t.addEventListener("click", () => activate(t.dataset.mode)));
  // default
  activate(tabs[0]?.dataset.mode || "admission");
})();

// 4) Year
(() => {
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();
