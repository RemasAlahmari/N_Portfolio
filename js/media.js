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
// "SEF_1.MOV":
//   "https://res.cloudinary.com/otquvk5k/video/upload/v1787229013/SEF_1.mov",
// ------------------------------------------------------

const clientVideoUrls = {
  "SEF_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787229013/SEF_1.mov",
  "SEF_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787420344/SEF_2.mov",
  "SEF_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787420251/SEF_3.mov",
  "SEF_4.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787419938/SEF_4.mov",
  "SEF_5.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787420237/SEF_5.mov",
  "SEF_6.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787420097/SEF_6.mov",

  "DIR_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787422201/DIR_1.mov",

  "QID_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787421039/QID_1.mov",

  "TPAC_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787418114/TPAC_1.mov",

  "MOF_HAJJ_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787425112/mof-hajj_1.mov",

  "SFA_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787424345/SFA_1.mov",

  // Add the rest of the videos here as you upload them:
  //
  // "DIR_2.MOV": "CLOUDINARY_URL",
  // "QID_2.MOV": "CLOUDINARY_URL",
};

// ------------------------------------------------------
// HIGHLIGHT VIDEO URLS
// ------------------------------------------------------

const highlightVideoUrls = {
  // NOTE: only one highlight URL was provided so far, and it
  // wasn't labeled with a specific HL number â€” this has been
  // mapped to HL_1 (the featured highlight shown on the
  // homepage) as the most likely intent. Let me know if this
  // should point to a different highlight instead.
  "HL_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787424345/SFA_1.mov",

  // Add the rest as you upload them:
  //
  // "HL_2.MOV": "CLOUDINARY_URL",
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

export function getPosterSrc(filename, root = "") {
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