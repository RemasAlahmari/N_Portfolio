// ======================================================
// CLIENT PAGE (clients/*.html)
// One script drives all six client pages — the specific
// client is picked via <body data-client-id="SEF">.
// ======================================================
import { renderNavbar } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { clients } from "../data.js";
import { getClientVideoSrc, getPosterSrc } from "../media.js";
import { createVideoTile } from "../components/videoTile.js";
import { renderVideoGallery } from "../components/videoGallery.js";
import { observeReveal } from "../reveal.js";

const root = "../"; // client pages live one level deep

renderNavbar({ root, active: null });
renderFooter();

const clientId = document.body.dataset.clientId;
const index = clients.findIndex((c) => c.id === clientId);
const main = document.getElementById("main");

if (index === -1) {
  main.innerHTML = `
    <section class="gallery page-header">
      <h1 class="page-header__title">Client not found</h1>
      <p style="margin-top:1rem"><a href="${root}index.html" class="watch-button">← Back home</a></p>
    </section>
  `;
} else {
  const client = clients[index];
  const prevClient = clients[(index - 1 + clients.length) % clients.length];
  const nextClient = clients[(index + 1) % clients.length];
  const remainingVideos = client.videos.filter((v) => v !== client.featuredVideo);

  document.title = `${client.name} — Naif Aljohani`;

  // Crumbs
  const crumbs = document.createElement("div");
  crumbs.className = "gallery client-crumbs";
  crumbs.innerHTML = `
    <a href="${root}index.html">← All Clients</a>
  `;
  main.appendChild(crumbs);

  // Header
  const header = document.createElement("section");
  header.className = "gallery client-header";
  header.innerHTML = `
    <p class="client-header__code">${client.displayCode || client.id}</p>
    <h1 class="client-header__name">${client.name}</h1>
    <p class="client-header__arabic">${client.arabicName}</p>
  `;
  main.appendChild(header);

  // Featured — video only, no performance stats shown on client pages
  const featuredSection = document.createElement("section");
  featuredSection.className = "gallery client-featured";

  const videoCol = document.createElement("div");
  videoCol.className = "client-featured__video";
  const featuredTile = createVideoTile({
    src: getClientVideoSrc(client, client.featuredVideo, root),
    poster: getPosterSrc(client.featuredVideo, root),
    fallbackLabel: `${client.displayCode || client.id} — Featured`,
    allowSound: true,
    priority: true,
  });
  videoCol.appendChild(featuredTile);

  featuredSection.appendChild(videoCol);
  main.appendChild(featuredSection);

  // All work
  const gallerySection = document.createElement("section");
  gallerySection.className = "gallery client-gallery-section";
  const galleryLabel = document.createElement("p");
  galleryLabel.className = "client-gallery-section__label";
  galleryLabel.textContent = "All Work";
  observeReveal(galleryLabel);
  gallerySection.appendChild(galleryLabel);
  renderVideoGallery(gallerySection, { client, files: remainingVideos, root });
  main.appendChild(gallerySection);

  // Prev / next
  const pager = document.createElement("section");
  pager.className = "client-pager";
  pager.innerHTML = `
    <div class="gallery client-pager__inner">
      <a href="${root}clients/${prevClient.page}">← ${prevClient.name}</a>
      <a href="${root}clients/${nextClient.page}">${nextClient.name} →</a>
    </div>
  `;
  main.appendChild(pager);
}
