// ======================================================
// HOME PAGE
// Assembles: navbar, hero, best content, client grid,
// work totals, contact section, footer.
// ======================================================
import { renderNavbar } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderHero } from "../components/hero.js";
import { renderHighlightPreview } from "../components/highlightPreview.js";
import { renderClientGrid } from "../components/clientGrid.js";
import { renderPerformance } from "../components/performance.js";
import { renderContactSection } from "../components/contactSection.js";

const root = ""; // homepage lives at site root

renderNavbar({ root, active: "home" });
renderFooter();

const main = document.getElementById("main");
renderHero(main);
renderHighlightPreview(main, { root });
renderClientGrid(main, { root });
renderPerformance(main);
renderContactSection(main);
