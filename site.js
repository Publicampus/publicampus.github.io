// Publicampus · header, footer, tema y catálogo
(function () {
  // ---- Tema (claro/oscuro, recuerda la elección) ----
  const saved = localStorage.getItem("theme");
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const root = document.documentElement;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");

  const page = location.pathname.split("/").pop() || "index.html";
  const link = (href, text, cls = "") =>
    `<a href="${href}" class="${cls} ${page === href ? "active" : ""}">${text}</a>`;

  // ---- Header ----
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html"><img src="ic_birrete.svg" alt="">Publicampus</a>
        <nav class="nav-links">
          ${link("index.html#apps", "Apps", "hide-sm")}
          ${link("privacy.html", "Privacidad")}
          ${link("index.html#contacto", "Contacto", "hide-sm")}
          <button class="theme-btn" id="theme-btn" aria-label="Cambiar tema"></button>
        </nav>
      </div>`;
    const btn = document.getElementById("theme-btn");
    const paint = () => (btn.textContent = root.dataset.theme === "dark" ? "☀️" : "🌙");
    paint();
    btn.onclick = () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", root.dataset.theme);
      paint();
    };
  }

  // ---- Footer ----
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container foot">
        <span>© ${new Date().getFullYear()} Publicampus · Osman AT</span>
        <span><a href="privacy.html">Privacidad</a><a href="mailto:publicampusweb@gmail.com">Contacto</a></span>
      </div>`;
  }

  // ---- Catálogo (solo si la página tiene #catalog) ----
  const catalog = document.getElementById("catalog");
  if (catalog && typeof APPS !== "undefined") {
    const chips = document.getElementById("chips");
    let current = "todas";

    const card = (a) => {
      const icon = a.icon ? `<img src="${a.icon}" alt="">` : a.emoji;
      const badge = a.status === "live"
        ? `<span class="badge">Disponible</span>` : `<span class="badge soon">Próximamente</span>`;
      const body = `<div class="app-icon">${icon}</div>
        <div><h3>${a.name}</h3><p>${a.desc}</p>${badge}</div>`;
      return a.status === "live"
        ? `<a class="app" href="${a.url}">${body}</a>`
        : `<div class="app soon">${body}</div>`;
    };

    const render = () => {
      const list = APPS.filter((a) => current === "todas" || a.cat === current);
      catalog.innerHTML = list.map(card).join("");
      chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.cat === current));
    };

    chips.innerHTML =
      `<button class="chip" data-cat="todas">Todas</button>` +
      Object.entries(CATEGORIES).map(([k, v]) => `<button class="chip" data-cat="${k}">${v.label}</button>`).join("");
    chips.onclick = (e) => { if (e.target.dataset.cat) { current = e.target.dataset.cat; render(); } };
    render();
  }
})();
