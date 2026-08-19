// ======================================================
// REVEAL ON SCROLL
// Adds `.is-visible` to any `.reveal` element once it
// enters the viewport. Mirrors the old React <Reveal>
// wrapper's behavior (one-shot, IntersectionObserver-based).
// ======================================================

/** Wrap `el`'s reveal behavior; call once per element after it's in the DOM. */
export function observeReveal(el, { delay = 0 } = {}) {
  if (!el) return;
  el.classList.add("reveal");
  if (delay) el.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(el);
}

/** Convenience: observe every element matching a selector within `root`. */
export function observeRevealAll(selector = ".reveal", root = document) {
  root.querySelectorAll(selector).forEach((el) => observeReveal(el));
}
