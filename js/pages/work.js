// ======================================================
// HIGHLIGHT PAGE (work.html)
// Displayed newest-first via the shared
// `highlightsInDisplayOrder` export in data.js — the
// homepage's featured highlight reads from that same
// array so the two can never fall out of sync.
// ======================================================
import { renderNavbar } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderHighlightFeed } from "../components/highlightFeed.js";
import { highlightsInDisplayOrder } from "../data.js";

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

renderHighlightFeed(main, { highlights: highlightsInDisplayOrder, root });
