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
  totalViews: "26.5M+",
  totalShares: "21.8K+",
  totalLikes: "313K+",
};

// ------------------------------------------------------
// CLIENTS — six organizations, in display order.
// `page` is the static HTML filename under /clients/.
// `folder` is the subfolder under /videos/.
// `logo` is the filename under /images/logos/, shown in
// the homepage client boxes (see getLogoSrc in media.js).
// `displayCode` (optional) overrides the short code shown
// in the UI (client-tile / client-header badges) when it
// should differ from the internal `id` — used here so the
// Ministry of Health badge doesn't visibly show "HAJJ"
// while the id/folder/filenames (tied to already-uploaded
// Cloudinary assets) stay untouched.
// ------------------------------------------------------
export const clients = [
  {
    id: "SEF",
    page: "sef.html",
    folder: "sef",
    logo: "sef.png",
    name: "Saudi Esports Federation",
    arabicName: "الاتحاد السعودي للرياضات الإلكترونية",
    featuredVideo: "SEF_1.MOV",
    videos: ["SEF_1.MOV", "SEF_2.MOV", "SEF_3.MOV", "SEF_4.MOV", "SEF_5.MOV", "SEF_6.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "DIR",
    page: "diriyah.html",
    folder: "dir",
    logo: "diriyah.png",
    name: "Diriyah",
    arabicName: "الدرعية",
    featuredVideo: "DIR_1.MOV",
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
    logo: "qiddiya.png",
    name: "Qiddiya",
    arabicName: "القدية",
    featuredVideo: "QID_2.MOV",
    videos: ["QID_1.MOV", "QID_2.MOV", "QID_3.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "TPAC",
    page: "tpac.html",
    folder: "tpac",
    logo: "tpac.png",
    name: "Theater and Performing Arts Commission",
    arabicName: "هيئة المسرح والفنون الأدائية",
    featuredVideo: "TPAC_2.MOV",
    videos: ["TPAC_1.MOV", "TPAC_2.MOV", "TPAC_3.MOV"],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "MOF_HAJJ",
    page: "mof-hajj.html",
    folder: "mof-hajj",
    logo: "moh-hajj.png",
    displayCode: "MOH",
    name: "Ministry of Health",
    arabicName: "وزارة الصحة",
    featuredVideo: "MOF_HAJJ_4.MOV",
    videos: [
      "MOF_HAJJ_1.MOV", "MOF_HAJJ_2.MOV", "MOF_HAJJ_3.MOV", "MOF_HAJJ_4.MOV",
      "MOF_HAJJ_7.MOV", "MOF_HAJJ_8.MOV", "MOF_HAJJ_13.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    id: "SFA",
    page: "sfa.html",
    folder: "sfa",
    logo: "sfa.png",
    name: "Saudi Sports for All Federation",
    arabicName: "الاتحاد السعودي للرياضة للجميع",
    featuredVideo: "SFA_1.MOV",
    videos: [
      "SFA_1.MOV", "SFA_2.MOV", "SFA_3.MOV", "SFA_4.MOV",
      "SFA_7.MOV", "SFA_9.MOV", "SFA_12.MOV", "SFA_13.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
  {
    // NEW CLIENT — a separate organization from "Diriyah"
    // above (id "DIR"). Its own internal id is "DIR_CLUB"
    // so routing/lookups never collide with the existing
    // Diriyah client. `displayCode` is "DIR CLUB" (not
    // "DIR") specifically so the bottom client-to-client
    // navigation can never be ambiguous between the two.
    id: "DIR_CLUB",
    page: "diriyah-club.html",
    folder: "dir-club",
    logo: "diriyah-club.png",
    displayCode: "DIR CLUB",
    name: "Diriyah Club",
    arabicName: "نادي الدرعية",
    featuredVideo: "DIR_CLUB_3.MOV",
    videos: [
      "DIR_CLUB_3.MOV", "DIR_CLUB_4.MOV", "DIR_CLUB_2.MOV",
      "DIR_CLUB_1.MOV", "DIR_CLUB_5.MOV",
    ],
    featuredMetadata: { platform: "TBD", views: "TBD", likes: "TBD", shares: "TBD", url: "TBD" },
  },
];

// ------------------------------------------------------
// HIGHLIGHTS — exactly 5, curated from the clients above.
// These reference existing client videos (same Cloudinary
// asset, different lookup key) so nothing is duplicated.
// `sourceClient` must match a client's `id` above.
// `likes` / `shares` are intentionally left "TBD" — the
// highlight page only displays Views for these five.
// ------------------------------------------------------
export const highlights = [
  {
    id: "HL_1",
    file: "HL_1.MOV",
    sourceClient: "MOF_HAJJ",
    platform: "TikTok",
    views: "16.2M",
    likes: "TBD",
    shares: "TBD",
    url: "https://www.tiktok.com/@saudimoh/video/7641634913866812693?is_from_webapp=1",
  },
  {
    id: "HL_2",
    file: "HL_2.MOV",
    sourceClient: "MOF_HAJJ",
    platform: "TikTok",
    views: "2.6M",
    likes: "TBD",
    shares: "TBD",
    url: "https://www.tiktok.com/@saudimoh/video/7644197983151574293?is_from_webapp=1",
  },
  {
    id: "HL_3",
    file: "HL_3.MOV",
    sourceClient: "MOF_HAJJ",
    platform: "TikTok",
    views: "2.5M",
    likes: "TBD",
    shares: "TBD",
    url: "https://www.tiktok.com/@saudimoh/video/7642376582866226452?is_from_webapp=1",
  },
  {
    id: "HL_4",
    file: "HL_4.MOV",
    sourceClient: "SFA",
    platform: "Instagram",
    views: "625K",
    likes: "TBD",
    shares: "TBD",
    url: "https://www.instagram.com/reel/DULEuONDOMZ/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "HL_5",
    file: "HL_5.MOV",
    sourceClient: "SFA",
    platform: "TikTok",
    views: "1M",
    likes: "TBD",
    shares: "TBD",
    url: "https://www.tiktok.com/@saudi_sfa/video/7585213913936006407?is_from_webapp=1",
  },
];

// ------------------------------------------------------
// HIGHLIGHTS — DISPLAY ORDER (single source of truth)
// The Highlight page shows highlights newest-first
// (HL_5, HL_4, HL_3, HL_2, HL_1). The Home page's featured
// highlight must always be the exact same video as
// whichever highlight appears FIRST on the Highlight page,
// so both read from this one derived array rather than
// each hardcoding an id/index — if the order above ever
// changes, both pages stay in sync automatically.
// ------------------------------------------------------
export const highlightsInDisplayOrder = [...highlights].reverse();
