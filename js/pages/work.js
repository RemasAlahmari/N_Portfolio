// ======================================================
// SELECTED WORK PAGE (work.html)
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
  <p class="page-header__eyebrow">Selected Work</p>
  <h1 class="page-header__title">Seven pieces,<br />worth your time.</h1>
`;
main.appendChild(header);

renderHighlightFeed(main, { highlights, root });
