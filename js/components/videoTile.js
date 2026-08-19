// ======================================================
// VIDEO TILE COMPONENT
// The only place a <video> element gets created. Handles:
//  - IntersectionObserver lazy loading (only fetch once
//    within ~300px of the viewport)
//  - Autoplay-when-visible / pause-when-offscreen
//  - Muted autoplay + loop + playsinline previews
//  - Optional sound toggle (featured/highlight videos)
//  - Graceful fallback state if the source file is missing
//  - prefers-reduced-motion support
// ======================================================

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Create a video tile.
 * @param {Object} opts
 * @param {string} opts.src - video source path
 * @param {string} [opts.poster] - poster image path
 * @param {string} [opts.fallbackLabel] - label shown if source is missing/loading
 * @param {boolean} [opts.allowSound=false] - show a sound toggle (featured videos)
 * @param {boolean} [opts.priority=false] - load immediately (above the fold)
 * @param {boolean} [opts.square=false] - 1:1 tile instead of 9:16
 * @param {boolean} [opts.showFrame=true] - show the viewfinder bracket motif
 * @returns {HTMLElement}
 */
export function createVideoTile({
  src,
  poster,
  fallbackLabel = "",
  allowSound = false,
  priority = false,
  square = false,
  showFrame = true,
} = {}) {
  const wrap = document.createElement("div");
  wrap.className = `video-tile${square ? " video-tile--square" : ""}`;

  if (showFrame) {
    ["tl", "bl", "tr", "br"].forEach((corner) => {
      const bracket = document.createElement("span");
      bracket.className = `video-tile__bracket video-tile__bracket--${corner}`;
      bracket.setAttribute("aria-hidden", "true");
      wrap.appendChild(bracket);
    });
  }

  const fallback = document.createElement("div");
  fallback.className = "video-tile__fallback";
  fallback.innerHTML = `
    <span class="video-tile__fallback-status">Loading</span>
    ${fallbackLabel ? `<span class="video-tile__fallback-label">${fallbackLabel}</span>` : ""}
  `;
  wrap.appendChild(fallback);

  let video = null;
  let soundBtn = null;
  let loaded = false;

  function setErrored() {
    fallback.querySelector(".video-tile__fallback-status").textContent = "Video pending upload";
    fallback.classList.remove("video-tile__fallback--hidden");
    if (video) video.style.display = "none";
  }

  function mountVideo() {
    if (loaded) return;
    loaded = true;

    video = document.createElement("video");
    video.className = "video-tile__media";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.preload = priority ? "auto" : "none";
    if (poster) video.poster = poster;

    const sourceQt = document.createElement("source");
    sourceQt.src = src;
    sourceQt.type = "video/quicktime";
    video.appendChild(sourceQt);

    const sourceGeneric = document.createElement("source");
    sourceGeneric.src = src;
    video.appendChild(sourceGeneric);

    video.addEventListener("error", setErrored, true);

    // Fallback stays in the DOM (hidden) so it can be restored on error
    wrap.insertBefore(video, fallback);
    fallback.classList.add("video-tile__fallback--hidden");

    if (allowSound) {
      soundBtn = document.createElement("button");
      soundBtn.type = "button";
      soundBtn.className = "video-tile__sound";
      soundBtn.setAttribute("aria-label", "Turn sound on");
      soundBtn.innerHTML = iconMuted();
      soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.setAttribute("aria-label", video.muted ? "Turn sound on" : "Turn sound off");
        soundBtn.innerHTML = video.muted ? iconMuted() : iconUnmuted();
      });
      wrap.appendChild(soundBtn);
    }

    if (!prefersReducedMotion) {
      video.play().catch(() => {});
    }
  }

  // Load once near the viewport (or immediately if priority)
  if (priority) {
    mountVideo();
  } else {
    const loadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mountVideo();
            loadObserver.disconnect();
          }
        });
      },
      { rootMargin: "300px 0px" }
    );
    loadObserver.observe(wrap);
  }

  // Play only while visible; pause otherwise; toggle bracket motif
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        wrap.classList.toggle("is-visible", entry.isIntersecting);
        if (!video) return;
        if (entry.isIntersecting) {
          if (!prefersReducedMotion) video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.4 }
  );
  visibilityObserver.observe(wrap);

  return wrap;
}

function iconMuted() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4V5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M17 9l6 6M23 9l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function iconUnmuted() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4V5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M16 8.5a5 5 0 0 1 0 7M19 5.5a9 9 0 0 1 0 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}
