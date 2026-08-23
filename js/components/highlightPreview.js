// ======================================================
// BEST CONTENT (highlight preview) COMPONENT
// Homepage gateway into work.html, using HL_1. The card
// is sized to match the video itself (no separate text
// panel) — the eyebrow/title/CTA are overlaid on the
// video's top-left corner instead.
// ======================================================
import { highlights } from "../data.js";
import { getHighlightVideoSrc, getPosterSrc } from "../media.js";
import { createVideoTile } from "./videoTile.js";

export function renderHighlightPreview(mount, { root = "" } = {}) {
  const featured = highlights[0]; // HL_1

  const section = document.createElement("section");
  section.className = "gallery best-content-section";

  const link = document.createElement("a");
  link.href = `${root}work.html`;
  link.className = "best-content";
  link.setAttribute("aria-label", "Open Best Content — go to Selected Work");

  const overlay = document.createElement("div");
  overlay.className = "best-content__overlay";
  overlay.innerHTML = `
    <span class="best-content__eyebrow">Featured</span>
    <h2 class="best-content__title">Best<br />Content</h2>
    <span class="best-content__cta">
      Best Content
      <svg width="14" height="10" viewBox="0 0 24 16" fill="none" aria-hidden="true">
        <path d="M1 8h21M15 1l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  `;

  const tile = createVideoTile({
    src: getHighlightVideoSrc(featured.file, root),
    poster: getPosterSrc(featured.file, root),
    fallbackLabel: featured.id,
    priority: true,
    showFrame: true,
    fullscreenOnClick: false, // clicking the video navigates to work.html instead
  });
  tile.classList.add("best-content__video");

  link.appendChild(tile);
  link.appendChild(overlay);

  section.appendChild(link);
  mount.appendChild(section);
}
