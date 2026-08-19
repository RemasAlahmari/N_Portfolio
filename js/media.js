// ======================================================
// ASSET PATH RESOLUTION
// The single place that knows how filenames map to real
// paths under /videos and /images. Swap .MOV for .mp4 /
// .webm here later without touching any component.
//
// `root` lets the same functions work from both the site
// root (index.html) and one level deep (/clients/*.html).
// ======================================================
import { clients } from "./data.js";

/** Resolve a client video filename (e.g. "SEF_3.MOV") to its path. */
export function getClientVideoSrc(client, filename, root = "") {
  return `${root}videos/${client.folder}/${filename}`;
}

/** Resolve a highlight filename (e.g. "HL_1.MOV") to its path. */
export function getHighlightVideoSrc(filename, root = "") {
  return `${root}videos/highlights/${filename}`;
}

/** Poster/thumbnail path for a given video filename, if one exists. */
export function getPosterSrc(filename, root = "") {
  const base = filename.replace(/\.[^.]+$/, "");
  return `${root}images/posters/${base}.jpg`;
}

/** Find a client by its short code (e.g. "SEF"). */
export function findClient(clientId) {
  return clients.find((c) => c.id === clientId);
}

/** Total video count across all clients, derived — never hardcoded. */
export function getTotalVideoCount() {
  return clients.reduce((sum, c) => sum + c.videos.length, 0);
}

export function getTotalClientCount() {
  return clients.length;
}
