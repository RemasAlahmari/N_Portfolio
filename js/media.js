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

  // Add the rest of the videos here as you upload them:
  //
  // "SEF_2.MOV": "CLOUDINARY_URL",
  // "SEF_3.MOV": "CLOUDINARY_URL",
};

// ------------------------------------------------------
// HIGHLIGHT VIDEO URLS
// ------------------------------------------------------

const highlightVideoUrls = {
  // Example:
  //
  // "HL_1.MOV": "CLOUDINARY_URL",
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