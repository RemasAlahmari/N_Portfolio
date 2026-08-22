// ======================================================
// HERO COMPONENT
// ======================================================
import { profile } from "../data.js";

export function renderHero(mount) {
  mount.innerHTML = `
    <section class="gallery hero">
      <h1 class="hero__name fade-up">${profile.name}</h1>
      <p class="hero__title fade-up" style="animation-delay:150ms">
        ${profile.title} · ${profile.location}
      </p>
    </section>
  `;
}
