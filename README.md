# Naif Aljohani — Content Creator Portfolio (Static)

A zero-dependency, zero-build static website: **HTML5 + CSS3 + vanilla
JavaScript (ES modules) only.** No React, no Next.js, no build step,
no npm packages, no frameworks of any kind. This is a technical
migration of the earlier React/Next.js version — same design, same
behavior, different (and much simpler) engine underneath.

## 1. Run it

Any static file server works, since ES modules require `http://`
(not `file://`) to load correctly:

```bash
# from the project root
python3 -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080.

There is no `npm install` and no build command — deploy the folder
as-is to any static host (Netlify, GitHub Pages, S3, nginx, etc.).

## 2. EDIT HERE — the one file to know

Everything editable lives in **`js/data.js`**:

- `contact` — WhatsApp number, email, Instagram, TikTok
- `profile` — name, title, location, the one-line statement
- `clients` — all six clients: names, Arabic names, video filenames,
  which video is "featured," and that featured video's platform/
  views/likes/shares/URL
- `highlights` — the seven `HL_1`–`HL_7` Selected Work entries
- `performance` — total views, total shares, and total new followers shown in the homepage Performance section

Anything set to `"TBD"` is intentionally a placeholder — the site
renders an em dash or hides the stat instead of inventing a number.
Replace `"TBD"` with real data as it becomes available.

## 3. Adding real video files

Drop files into `videos/<client-folder>/` using the exact filenames
already referenced in `js/data.js`:

```
videos/
  sef/          SEF_1.MOV ... SEF_6.MOV
  dir/          DIR_1.MOV ... DIR_8.MOV
  qid/          QID_1.MOV ... QID_3.MOV
  tpac/         TPAC_1.MOV ... TPAC_3.MOV
  mof-hajj/     MOF_HAJJ_1.MOV ... MOF_HAJJ_13.MOV
  sfa/          SFA_1.MOV ... SFA_13.MOV
  highlights/   HL_1.MOV ... HL_7.MOV
```

Until a file is present, its tile shows a quiet "Video pending
upload" state instead of a broken player.

**Recommended delivery format:** convert `.MOV` exports to `.mp4`
(H.264) and/or `.webm` before shipping — much smaller files for
mobile visitors. `js/media.js` is the only place that resolves
filenames to paths, so switching extensions later means updating
filenames in `js/data.js` — no component changes needed.

## 4. Poster images (optional but recommended)

Add a same-named `.jpg` thumbnail to `images/posters/` (e.g.
`SEF_1.jpg`) and it's picked up automatically as the video's poster
frame while the real video loads — avoids a blank black rectangle on
first paint, especially on mobile data.

## 5. Project structure

```
index.html            Homepage
work.html              Selected Work (seven highlights)
contact.html           Contact page
clients/
  sef.html              Saudi Esports Federation
  diriyah.html           Diriyah
  qiddiya.html            Qiddiya
  tpac.html                Theater and Performing Arts Commission
  mof-hajj.html             Ministry of Health — Hajj
  sfa.html                   Saudi Sports for All Federation (SFA)
css/
  base.css              Tokens, reset, typography, reveal-on-scroll
  nav-footer.css        Navbar + footer
  video-tile.css         The video player + viewfinder-bracket motif
  home.css                Hero, Best Content, client grid, totals, contact
  pages.css                Selected Work, client pages, contact page
js/
  data.js                EDIT HERE — all content
  media.js                Filename → path resolution, derived totals
  contact.js               WhatsApp / mailto link builders
  reveal.js                 IntersectionObserver reveal-on-scroll utility
  components/               One file per reusable "component" (a function
                             that builds/returns DOM, same idea as the old
                             React components)
  pages/                     One assembly script per page/page-type
videos/                 Drop real .MOV/.mp4/.webm files here
images/posters/         Drop matching .jpg poster frames here
```

### How the "component" architecture works without React

Each file in `js/components/` exports a function that builds and
returns (or injects) a piece of DOM from the centralized data — this
is the vanilla-JS equivalent of a React component:

| Old React component | Static equivalent               |
|----------------------|----------------------------------|
| `VideoPlayer`        | `js/components/videoTile.js` → `createVideoTile()` |
| `ClientTile`         | `js/components/clientTile.js` → `createClientTile()` |
| `ClientGrid`         | `js/components/clientGrid.js` → `renderClientGrid()` |
| `HighlightPreview`   | `js/components/highlightPreview.js` |
| `HighlightFeed`      | `js/components/highlightFeed.js` |
| `PerformanceStats`   | `js/components/performanceStats.js` |
| `VideoGallery`       | `js/components/videoGallery.js` |
| `Navbar` / `Footer`  | `js/components/nav.js` / `footer.js` |
| `Performance`        | `js/components/performance.js` |
| `ContactSection`     | `js/components/contactSection.js` |

Every HTML page is a thin shell — `<div id="navbar-root">`, an empty
`<main id="main">`, `<div id="footer-root">` — with a single
`<script type="module" src="js/pages/....js">` at the bottom that
calls the component functions to build the page from `data.js`. The
six client pages all share **one** script (`js/pages/client.js`); the
specific client is selected via `<body data-client-id="SEF">`, so
there's no duplicated markup or logic across the six pages.

## 6. What was preserved from the React version

- **Visual design** — same warm sand background, muted Saudi green
  accent, near-black type, Bricolage Grotesque / Instrument Sans /
  IBM Plex Mono type system, viewfinder-bracket motif on every video.
- **Layout & responsive behavior** — identical breakpoints (640px /
  1024px), mobile-first one-column layouts, the same grid systems for
  the client tiles, video galleries, and stats.
- **Animations** — the same restrained fade-up/reveal-on-scroll
  motion, hover scale on client tiles, hover-slide on CTAs — now
  driven by `IntersectionObserver` + CSS transitions instead of
  React state, respecting `prefers-reduced-motion` exactly as before.
- **Video behavior** — muted autoplay, `loop`, `playsinline`, lazy
  loading via `IntersectionObserver` (only fetches within ~300px of
  viewport), pause when scrolled off-screen, sound toggle on featured
  videos, graceful "pending upload" fallback if a source is missing.
- **Navigation** — Home / Work / Contact nav, prev/next client
  pagination, breadcrumbs back to All Clients / Selected Work.
- **Data model** — same shape as the old `portfolioData.ts`, just in
  plain JS (`js/data.js`), with the same "never invent data, use TBD"
  discipline for unverified stats and links.

## 7. What changed (React → static)

- No virtual DOM — components are functions that build real DOM nodes
  directly with `document.createElement` / `innerHTML`.
- No client-side router — each page is a real `.html` file; navigation
  is normal `<a href>` browser navigation (works with back/forward,
  view-source, no-JS crawlers reading `<title>`/meta tags, etc.).
- No JSX/TSX — templates are template literals or explicit DOM calls.
- No `next/font` — fonts load via a normal `<link>` to Google Fonts in
  each page's `<head>`.
- Multiple small `.css` files instead of Tailwind utility classes —
  same visual output, hand-written CSS with custom properties for the
  design tokens (colors, fonts, spacing) so they stay easy to tune.

## 8. Verified

Every page (`index.html`, `work.html`, `contact.html`, and all six
`clients/*.html`) was checked in a headless Chromium session: zero
JavaScript errors, correct video-tile counts per client, working
lazy-loading/fallback states, correct scroll-triggered navbar state,
and a correctly formatted WhatsApp deep link.

## 9. Changelog — refinement pass

- Stronger, more deliberate green presence throughout: section
  eyebrow labels, the Performance numbers, navbar active-link
  underline, hover highlights on tiles, and higher-opacity green
  hairline dividers.
- Homepage totals replaced: video/client counts are gone, replaced
  with a **Performance** section (`js/components/performance.js`)
  showing Total Views / Total Shares / Total New Followers, sourced
  from `performance` in `js/data.js`.
- Client abbreviation **SAF → SFA** everywhere (data, folder names,
  filenames, page filename, `data-client-id`, visible text).
- Professional name **Naif Alrefae → Naif Aljohani** everywhere
  (titles, meta/OG tags, footer, contact panel, `profile` data).
- Every client's Arabic name now appears directly beneath its English
  name — on homepage client tiles, client page headers, and the
  performance-stats block used on client/highlight pages.
- Contact page rebuilt: a large green `.contact-panel` holds Naif's
  name plus four individually-boxed, off-white contact methods
  (WhatsApp, Instagram, TikTok, Email) in a responsive grid.
- Footer rebuilt as a green panel on every page, holding the
  name/location line and the Instagram/TikTok links.

