// ======================================================
// ASSET PATH RESOLUTION
// ======================================================
// Client and highlight videos are hosted on Cloudinary.
// Keep video filenames in data.js exactly as they are.
// Add the Cloudinary delivery URL for each uploaded video
// to the maps below.
//
// IMPORTANT:
// The Cloudinary URLs below are the actual delivery URLs.
// Do not use temporary "Share" links.
// ======================================================

import { clients } from "./data.js";

// ------------------------------------------------------
// CLOUDINARY VIDEO URLS
// ------------------------------------------------------
// Add each uploaded video's permanent Cloudinary URL here.
// Example:
//
// "DIR_1.MOV":
//   "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789479892/DIR_1.mov",
// ------------------------------------------------------

const clientVideoUrls = {
  // Saudi Esports Federation
  // NOTE: current video files use the "SFE" spelling in
  // their filenames/public IDs, kept exactly as provided.
  "SFE_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478657/SFE_1.mov",
  "SFE_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480616/SFE_2.mov",
  "SFE_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789479692/SFE_3.mov",
  "SFE_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480522/SFE_4.mov",

  // Diriyah
  "DIR_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789479892/DIR_1.mov",
  "DIR_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480130/DIR_2.mov",
  "DIR_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480235/DIR_3.mov",
  "DIR_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480390/DIR_4.mov",

  // Qiddiya
  "QID_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789483255/QID_1.mp4",
  "QID_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789486344/QID_2.mp4",
  "QID_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789476997/QID_3.mp4",

  // Theater and Performing Arts Commission
  "TPAC_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789482880/TPAC_1.mp4",
  "TPAC_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478650/TPAC_2.mp4",
  "TPAC_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789483237/TPAC_3.mp4",

  // Ministry of Health
  // NOTE: current video files use the "MOH" prefix; the
  // previous "MOF_HAJJ_*" videos have been retired.
  "MOH_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480700/MOH_1.mov",
  "MOH_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478018/MOH_2.mp4",
  "MOH_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789487573/MOH_3.mp4",
  "MOH_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789488006/MOH_4.mp4",

  // Saudi Sports for All Federation
  "SFA_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480802/SFA_1.mov",
  "SFA_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478548/SFA_2.mp4",
  "SFA_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480883/SFA_3.mov",
  "SFA_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789481936/SFA_4.mov",

  // Diriyah Club
  "DIR_CLUB_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789386191/DIR_CLUB_1.mp4",
  "DIR_CLUB_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789386187/DIR_CLUB_2.mp4",
  "DIR_CLUB_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789386168/DIR_CLUB_3.mp4",
  "DIR_CLUB_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789386183/DIR_CLUB_4.mp4",
  "DIR_CLUB_5.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789386366/DIR_CLUB_5.mp4",
};

// ------------------------------------------------------
// HIGHLIGHT VIDEO URLS
// ------------------------------------------------------
// Each highlight reuses the same Cloudinary asset as its
// source client video (see data.js `sourceClient`) — the
// file isn't duplicated, just referenced under its own
// HL_#.MOV lookup key.
// ------------------------------------------------------

const highlightVideoUrls = {
  "HL_1.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478018/MOH_2.mp4",
  "HL_2.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789487573/MOH_3.mp4",
  "HL_3.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789488006/MOH_4.mp4",
  "HL_4.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789478548/SFA_2.mp4",
  "HL_5.MOV":
    "https://res.cloudinary.com/hcbv5n7p/video/upload/v1789480802/SFA_1.mov",
};

// ------------------------------------------------------
// Resolve a client video
// ------------------------------------------------------

export function getClientVideoSrc(client, filename, root = "") {
  // If the video has been uploaded to Cloudinary,
  // return its Cloudinary URL.
  if (clientVideoUrls[filename]) {
    return clientVideoUrls[filename];
  }

  // Temporary fallback for videos that haven't been
  // uploaded to Cloudinary yet.
  return `${root}videos/${client.folder}/${filename}`;
}

// ------------------------------------------------------
// Resolve a highlight video
// ------------------------------------------------------

export function getHighlightVideoSrc(filename, root = "") {
  if (highlightVideoUrls[filename]) {
    return highlightVideoUrls[filename];
  }

  // Temporary fallback for highlights not yet uploaded.
  return `${root}videos/highlights/${filename}`;
}

// ------------------------------------------------------
// Poster / thumbnail
// ------------------------------------------------------
// Wherever a video is hosted on Cloudinary, we derive its
// poster directly from Cloudinary itself — requesting the
// exact same public asset with a `.jpg` extension and the
// `so_0` transformation returns a JPG of the video's real
// first frame. Cloudinary generates and caches this on the
// CDN on first request, so it's fast and never requires
// downloading the video itself just to get a thumbnail.
//
// Videos not yet uploaded to Cloudinary fall back to the
// local /images/posters/<filename>.jpg convention, same as
// before (silently absent until one is added there).
// ------------------------------------------------------

function toCloudinaryFirstFramePoster(videoUrl) {
  const match = videoUrl.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/)(.+)$/);
  if (!match) return null;
  const [, base, rest] = match;
  const withoutExtension = rest.replace(/\.[a-zA-Z0-9]+$/, "");
  return `${base}so_0/${withoutExtension}.jpg`;
}

export function getPosterSrc(filename, root = "") {
  const cloudinaryVideoUrl = clientVideoUrls[filename] || highlightVideoUrls[filename];
  if (cloudinaryVideoUrl) {
    const posterUrl = toCloudinaryFirstFramePoster(cloudinaryVideoUrl);
    if (posterUrl) return posterUrl;
  }

  const base = filename.replace(/\.[^.]+$/, "");
  return `${root}images/posters/${base}.jpg`;
}

// ------------------------------------------------------
// Client logo (homepage client boxes)
// ------------------------------------------------------

export function getLogoSrc(client, root = "") {
  return `${root}images/logos/${client.logo}`;
}

// ------------------------------------------------------
// Find a client by its short code
// ------------------------------------------------------

export function findClient(clientId) {
  return clients.find((c) => c.id === clientId);
}

// ------------------------------------------------------
// Total video count across all clients
// ------------------------------------------------------

export function getTotalVideoCount() {
  return clients.reduce((sum, c) => sum + c.videos.length, 0);
}

// ------------------------------------------------------
// Total client count
// ------------------------------------------------------

export function getTotalClientCount() {
  return clients.length;
}
