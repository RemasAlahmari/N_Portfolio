// ======================================================
// GO-TO-TOP BUTTON
// A small floating button, fixed to the bottom-left
// corner (kept clear of the sound-toggle button that sits
// bottom-right on video tiles), that appears once the
// visitor has scrolled down a reasonable amount and
// smoothly scrolls back to the top when pressed.
// ======================================================
export function renderGoToTop() {
  if (document.getElementById("go-to-top")) return; // already rendered on this page

  const btn = document.createElement("button");
  btn.id = "go-to-top";
  btn.type = "button";
  btn.className = "go-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const threshold = 480;
  let ticking = false;
  const update = () => {
    btn.classList.toggle("is-visible", window.scrollY > threshold);
    ticking = false;
  };
  update();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}
