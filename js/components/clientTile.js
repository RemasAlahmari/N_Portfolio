// ======================================================
// CLIENT TILE COMPONENT
// Homepage client box. No video is created or observed
// here anymore — this is a plain, lazily-loaded <img> of
// the client's logo, so the homepage no longer downloads
// or plays six client preview videos.
// ======================================================
import { getLogoSrc } from "../media.js";
import { observeReveal } from "../reveal.js";

export function createClientTile(client, { root = "", delay = 0 } = {}) {
  const link = document.createElement("a");
  link.href = `${root}clients/${client.page}`;
  link.className = "client-tile";
  link.setAttribute("aria-label", `See all work for ${client.name}`);

  const logoFrame = document.createElement("div");
  logoFrame.className = "client-tile__logo-frame";

  const logo = document.createElement("img");
  logo.className = "client-tile__logo";
  logo.src = getLogoSrc(client, root);
  logo.alt = `${client.name} logo`;
  logo.loading = "lazy";
  logo.decoding = "async";
  logoFrame.appendChild(logo);

  const info = document.createElement("div");
  info.className = "client-tile__info";
  info.innerHTML = `
    <div>
      <p class="client-tile__code">${client.id}</p>
      <p class="client-tile__name">${client.name}</p>
      <p class="client-tile__name-arabic">${client.arabicName}</p>
    </div>
    <span class="client-tile__see-all">See all →</span>
  `;

  link.appendChild(logoFrame);
  link.appendChild(info);

  observeReveal(link, { delay });
  return link;
}
