// ======================================================
// CLIENT TILE COMPONENT
// ======================================================
import { getClientVideoSrc, getPosterSrc } from "../media.js";
import { createVideoTile } from "./videoTile.js";
import { observeReveal } from "../reveal.js";

export function createClientTile(client, { root = "", delay = 0 } = {}) {
  const link = document.createElement("a");
  link.href = `${root}clients/${client.page}`;
  link.className = "client-tile";
  link.setAttribute("aria-label", `See all work for ${client.name}`);

  const mediaWrap = document.createElement("div");
  mediaWrap.className = "client-tile__media";
  const tile = createVideoTile({
    src: getClientVideoSrc(client, client.featuredVideo, root),
    poster: getPosterSrc(client.featuredVideo, root),
    fallbackLabel: client.id,
    square: true,
    showFrame: false,
  });
  mediaWrap.appendChild(tile);

  const scrim = document.createElement("div");
  scrim.className = "client-tile__scrim";

  const caption = document.createElement("div");
  caption.className = "client-tile__caption";
  caption.innerHTML = `
    <div>
      <p class="client-tile__code">${client.id}</p>
      <p class="client-tile__name">${client.name}</p>
      <p class="client-tile__name-arabic">${client.arabicName}</p>
    </div>
    <span class="client-tile__see-all">See all →</span>
  `;

  link.appendChild(mediaWrap);
  link.appendChild(scrim);
  link.appendChild(caption);

  observeReveal(link, { delay });
  return link;
}
