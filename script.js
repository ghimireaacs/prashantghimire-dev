(() => {
  const root = document.documentElement;
  const menuButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-links");
  const motionButton = document.getElementById("motion-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.classList.add("js-enabled");
  menuButton.hidden = false;
  motionButton.hidden = false;

  const setMotion = (enabled) => {
    root.classList.toggle("motion-enabled", enabled);
    motionButton.setAttribute("aria-pressed", String(enabled));
    motionButton.setAttribute("aria-label", enabled ? "Pause decorative motion" : "Enable decorative motion");
    motionButton.title = enabled ? "Pause decorative motion" : "Enable decorative motion";
    motionButton.querySelector(".motion-label").textContent = enabled ? "Motion on" : "Motion off";
  };

  setMotion(!reducedMotion.matches);
  motionButton.addEventListener("click", () => setMotion(!root.classList.contains("motion-enabled")));
  reducedMotion.addEventListener("change", (event) => setMotion(!event.matches));

  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };

  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.hash === "#" + entry.target.id) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-10% 0px -60% 0px", threshold: 0 });
    links.forEach((link) => sectionObserver.observe(document.querySelector(link.hash)));
  }
})();
