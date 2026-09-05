// ======================================================
// HIGHLIGHT PAGE (work.html)
// The display order here is reversed (most-recent-first)
// via a copy of the array — data.js's `highlights` export
// itself stays in its original order (HL_1..HL_5) since
// the homepage preview still reads `highlights[0]`.
// ======================================================
import { renderNavbar } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderHighlightFeed } from "../components/highlightFeed.js";
import { highlights } from "../data.js";

const root = "";

renderNavbar({ root, active: "work" });
renderFooter();

const main = document.getElementById("main");

const header = document.createElement("section");
header.className = "gallery page-header";
header.innerHTML = `
  <p class="page-header__eyebrow">Highlight</p>
  <h1 class="page-header__title">Worth your time.</h1>
`;
main.appendChild(header);

renderHighlightFeed(main, { highlights: [...highlights].reverse(), root });
