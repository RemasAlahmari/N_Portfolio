// ======================================================
// EDIT HERE — CENTRAL PORTFOLIO CONTENT
// ------------------------------------------------------
// This is the ONLY file you should need to touch to
// update contact info, clients, videos, highlights,
// or performance numbers. Nothing else hardcodes
// filenames, links, or stats.
//
// Anything set to "TBD" is intentionally a placeholder.
// Replace it with real data as it becomes available —
// do not leave invented numbers or fake links in its
// place.
// ======================================================

// ------------------------------------------------------
// CONTACT — phone, email, and social handles
// ------------------------------------------------------
export const contact = {
  whatsappNumber: "0533536777", // Saudi local format — converted for wa.me in js/contact.js
  email: "naifalrefae@gmail.com",
  instagramHandle: "n.algohani",
  instagramUrl: "https://instagram.com/n.algohani",
  tiktokHandle: "8lluh6",
  tiktokUrl: "https://www.tiktok.com/@8lluh6",
};

// ------------------------------------------------------
// PROFILE
// ------------------------------------------------------
export const profile = {
  name: "Naif Aljohani",
  fullName: "Naif Aljohani", // TBD — replace with full legal name if needed
  arabicName: "نايف الجهني",
  title: "Content Creator",
  location: "Riyadh, Saudi Arabia",
  statement:
    "Naif is extremely passionate about his work, consistently aims for the highest quality, works with people professionally, and pushes himself to produce his best work every time.",
};

// ------------------------------------------------------
// PERFORMANCE — homepage totals strip. Replace "TBD" with
// verified numbers as they become available; never invent
// figures here.
// ------------------------------------------------------
export const performance = {
  totalViews: "TBD",
  totalShares: "TBD",
  totalNewFollowers: "TBD",
};

// ------------------------------------------------------
// CLIENTS — six organizations, in display order.
// `page` is the static HTML filename under /clients/.
// `folder` is the subfolder under /videos/.
// ------------------------------------------------------
export const clients = [
  {
    id: "SEF",
    page: "sef.html",
    folder: "sef",
    name: "Saudi Esports Federation",
    arabicName: "الاتحاد السعودي للرياضات الإلكترونية",
    featuredVideo: "SEF_1.MOV", // TBD — confirm best-performing video
    videos: ["SEF_1.MOV", "SEF_2.MOV", "SEF_3.MOV", "SEF_4.MOV", "SEF_5.MOV", "SEF_6.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "DIR",
    page: "diriyah.html",
    folder: "dir",
    name: "Diriyah",
    arabicName: "الدرعية",
    featuredVideo: "DIR_1.MOV", // TBD
    videos: [
      "DIR_1.MOV", "DIR_2.MOV", "DIR_3.MOV", "DIR_4.MOV",
      "DIR_5.MOV", "DIR_6.MOV", "DIR_7.MOV", "DIR_8.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "QID",
    page: "qiddiya.html",
    folder: "qid",
    name: "Qiddiya",
    arabicName: "القدية",
    featuredVideo: "QID_1.MOV", // TBD
    videos: ["QID_1.MOV", "QID_2.MOV", "QID_3.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "TPAC",
    page: "tpac.html",
    folder: "tpac",
    name: "Theater and Performing Arts Commission",
    arabicName: "هيئة المسرح والفنون الأدائية",
    featuredVideo: "TPAC_1.MOV", // TBD
    videos: ["TPAC_1.MOV", "TPAC_2.MOV", "TPAC_3.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "MOF_HAJJ",
    page: "mof-hajj.html",
    folder: "mof-hajj",
    name: "Ministry of Health — Hajj",
    arabicName: "وزارة الصحة — الحج",
    featuredVideo: "MOF_HAJJ_1.MOV", // TBD
    videos: [
      "MOF_HAJJ_1.MOV", "MOF_HAJJ_2.MOV", "MOF_HAJJ_3.MOV", "MOF_HAJJ_4.MOV",
      "MOF_HAJJ_5.MOV", "MOF_HAJJ_6.MOV", "MOF_HAJJ_7.MOV", "MOF_HAJJ_8.MOV",
      "MOF_HAJJ_9.MOV", "MOF_HAJJ_10.MOV", "MOF_HAJJ_11.MOV", "MOF_HAJJ_12.MOV",
      "MOF_HAJJ_13.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "SFA",
    page: "sfa.html",
    folder: "sfa",
    name: "Saudi Sports for All Federation",
    arabicName: "الاتحاد السعودي للرياضة للجميع",
    featuredVideo: "SFA_1.MOV", // TBD
    videos: [
      "SFA_1.MOV", "SFA_2.MOV", "SFA_3.MOV", "SFA_4.MOV",
      "SFA_5.MOV", "SFA_6.MOV", "SFA_7.MOV", "SFA_8.MOV",
      "SFA_9.MOV", "SFA_10.MOV", "SFA_11.MOV", "SFA_12.MOV",
      "SFA_13.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
];

// ------------------------------------------------------
// SELECTED WORK — seven highlights, curated from clients
// above. These reference existing client videos so the
// total video count is never double-counted.
// ------------------------------------------------------
export const highlights = [
  { id: "HL_1", file: "HL_1.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_2", file: "HL_2.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_3", file: "HL_3.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_4", file: "HL_4.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_5", file: "HL_5.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_6", file: "HL_6.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  { id: "HL_7", file: "HL_7.MOV", sourceClient: "TBD", platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
];

