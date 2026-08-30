// ======================================================
// NAVBAR COMPONENT
// Renders into any element with id="navbar-root".
// `root` = "" on top-level pages, "../" from /clients/*.html
// `active` = "home" | "work" | "contact" | null
//
// The header stays visible while scrolling up and at the
// very top of the page; it becomes unobtrusive (slides
// out of view) only while actively scrolling down past a
// small threshold, so it's always easy to get back to.
// ======================================================
import { profile } from "../data.js";

export function renderNavbar({ root = "", active = null } = {}) {
  const mount = document.getElementById("navbar-root");
  if (!mount) return;

  const links = [
    { href: `${root}index.html`, label: "Home", key: "home" },
    { href: `${root}work.html`, label: "Highlight", key: "work" },
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
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 12);

    if (y <= 12) {
      header.classList.remove("is-hidden"); // always visible at the top
    } else if (y > lastY + 4) {
      header.classList.add("is-hidden"); // scrolling down
    } else if (y < lastY - 4) {
      header.classList.remove("is-hidden"); // scrolling up
    }

    lastY = y;
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
