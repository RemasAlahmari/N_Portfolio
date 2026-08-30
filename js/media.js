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
  // Saudi Esports Federation
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

  // Diriyah
  "DIR_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787422201/DIR_1.mov",
  "DIR_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510194/DIR_2.mov",
  "DIR_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510157/DIR_3.mov",
  "DIR_4.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510261/DIR_4.mov",
  "DIR_5.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510302/DIR_5.mov",
  "DIR_6.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510168/DIR_6.mov",
  "DIR_7.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510176/DIR_7.mov",
  "DIR_8.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787510525/DIR_8.mov",

  // Qiddiya
  "QID_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787421039/QID_1.mov",
  "QID_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787511656/QID_2.mov",
  "QID_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787513712/QID_3.mp4",

  // Theater and Performing Arts Commission
  "TPAC_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787418114/TPAC_1.mov",
  "TPAC_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787570855/TPAC_2.mp4",
  "TPAC_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787512316/TPAC_3.mov",

  // Ministry of Health
  "MOF_HAJJ_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787425112/mof-hajj_1.mov",
  "MOF_HAJJ_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787573885/mof-hajj_2.mov",
  "MOF_HAJJ_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787579729/mof-hajj_3.mp4",
  "MOF_HAJJ_4.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787854764/mof-hajj_4.mp4",
  "MOF_HAJJ_7.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787573908/mof-hajj_7.mov",
  "MOF_HAJJ_8.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787573791/mof-hajj_8.mov",
  "MOF_HAJJ_13.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787574093/mof-hajj_13.mov",

  // Saudi Sports for All Federation (non-consecutive on purpose — see data.js)
  "SFA_1.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787424345/SFA_1.mov",
  "SFA_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787573663/SFA_2.mov",
  "SFA_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787579766/SFA_3.mov",
  "SFA_4.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787580365/SFA_4.mov",
  "SFA_7.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787851706/SFA_7.mov",
  "SFA_9.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787851847/SFA_9.mov",
  "SFA_12.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787852051/SFA_12.mov",
  "SFA_13.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1788111291/SFA_13.mp4",
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
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787854764/mof-hajj_4.mp4",
  "HL_2.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787579729/mof-hajj_3.mp4",
  "HL_3.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787425112/mof-hajj_1.mov",
  "HL_4.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1788111291/SFA_13.mp4",
  "HL_5.MOV":
    "https://res.cloudinary.com/otquvk5k/video/upload/v1787424345/SFA_1.mov",
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
