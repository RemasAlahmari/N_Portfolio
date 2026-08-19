// ======================================================
// HIGHLIGHT FEED COMPONENT
// One highlight at a time, in a generous vertical feed.
// ======================================================
import { findClient, getHighlightVideoSrc, getPosterSrc } from "../media.js";
import { createVideoTile } from "./videoTile.js";
import { renderPerformanceStats } from "./performanceStats.js";
import { observeReveal } from "../reveal.js";

export function renderHighlightFeed(mount, { highlights, root = "" }) {
  const feed = document.createElement("div");
  feed.className = "gallery highlight-feed";

  highlights.forEach((h, i) => {
    const client = h.sourceClient !== "TBD" ? findClient(h.sourceClient) : undefined;
    const clientName = client ? client.name : "Client — TBD";
    const clientArabicName = client ? client.arabicName : undefined;

    const article = document.createElement("article");
    article.className = "highlight";

    const videoCol = document.createElement("div");
    videoCol.className = "highlight__video-col";

    const index = document.createElement("p");
    index.className = "highlight__index";
    index.textContent = `${String(i + 1).padStart(2, "0")} / ${String(highlights.length).padStart(2, "0")}`;

    const tile = createVideoTile({
      src: getHighlightVideoSrc(h.file, root),
      poster: getPosterSrc(h.file, root),
      fallbackLabel: h.id,
      allowSound: true,
    });

    videoCol.appendChild(index);
    videoCol.appendChild(tile);

    const statsCol = document.createElement("div");
    statsCol.className = "highlight__stats-col";
    renderPerformanceStats(statsCol, {
      clientName,
      clientArabicName,
      metrics: { platform: h.platform, views: h.views, likes: h.likes, shares: h.shares, url: h.url },
    });

    article.appendChild(videoCol);
    article.appendChild(statsCol);
    observeReveal(article);
    feed.appendChild(article);
  });

  mount.appendChild(feed);
}
