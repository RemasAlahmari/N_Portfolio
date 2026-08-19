// ======================================================
// NAVBAR COMPONENT
// Renders into any element with id="navbar-root".
// `root` = "" on top-level pages, "../" from /clients/*.html
// `active` = "home" | "work" | "contact" | null
// ======================================================
import { profile } from "../data.js";

export function renderNavbar({ root = "", active = null } = {}) {
  const mount = document.getElementById("navbar-root");
  if (!mount) return;

  const links = [
    { href: `${root}index.html`, label: "Home", key: "home" },
    { href: `${root}work.html`, label: "Work", key: "work" },
    { href: `${root}contact.html`, label: "Contact", key: "contact" },
  ];

  mount.innerHTML = `
    <a href="#main" class="skip-link">Skip to content</a>
    <header class="navbar" id="site-navbar">
      <nav class="gallery navbar__inner">
        <a href="${root}index.html" class="navbar__mark">${profile.name.toUpperCase()}</a>
        <ul class="navbar__links">
          ${links
            .map(
              (link) => `
            <li>
              <a href="${link.href}" class="navbar__link${link.key === active ? " is-active" : ""}"${
                link.key === active ? ' aria-current="page"' : ""
              }>${link.label}</a>
            </li>`
            )
            .join("")}
        </ul>
      </nav>
    </header>
  `;

  const header = document.getElementById("site-navbar");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
