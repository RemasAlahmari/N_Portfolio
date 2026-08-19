// ======================================================
// VIDEO GALLERY COMPONENT
// Clean vertical-video grid for a client's non-featured
// work. No views/likes/dates/captions are shown here.
// ======================================================
import { getClientVideoSrc, getPosterSrc } from "../media.js";
import { createVideoTile } from "./videoTile.js";
import { observeReveal } from "../reveal.js";

export function renderVideoGallery(mount, { client, files, root = "" }) {
  if (!files.length) return;

  const grid = document.createElement("div");
  grid.className = "video-gallery";

  files.forEach((file, i) => {
    const item = document.createElement("div");
    const tile = createVideoTile({
      src: getClientVideoSrc(client, file, root),
      poster: getPosterSrc(file, root),
      fallbackLabel: file.replace(/\.[^.]+$/, ""),
    });
    item.appendChild(tile);
    observeReveal(item, { delay: Math.min(i * 40, 400) });
    grid.appendChild(item);
  });

  mount.appendChild(grid);
}
