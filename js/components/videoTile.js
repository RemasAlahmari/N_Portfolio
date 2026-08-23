// ======================================================
// VIDEO TILE COMPONENT
// The only place a <video> element gets created. Handles:
//
//  - Two-phase lazy loading:
//      Phase 1 (mount):  once a tile is reasonably close to
//        the viewport (~600px away), the <video> is created
//        with preload="metadata" (priority tiles use "auto"
//        and mount immediately) — this is a cheap fetch, not
//        the full file.
//      Phase 2 (activate): once the tile actually enters the
//        play zone, preload is upgraded to "auto" and
//        playback starts. Only videos near/at the viewport
//        ever download their full content.
//  - Reliable muted/looping/inline autoplay across desktop,
//    iOS Safari, and Android Chrome (attributes are set both
//    as IDL properties and HTML attributes, and playback is
//    retried on loadedmetadata/canplay in case the first
//    play() call was rejected before data was ready).
//  - Pause when scrolled off-screen (saves battery/bandwidth
//    without destroying the element, so scrolling stays smooth).
//  - Click/tap anywhere on the video → native fullscreen,
//    using the Fullscreen API with iOS Safari's proprietary
//    fallback. Native controls (play/pause/seek/volume/exit)
//    are surfaced only while in fullscreen, so the minimal
//    preview UI outside of fullscreen is untouched.
//  - Optional standalone sound toggle (featured/highlight
//    videos) for un-muting without entering fullscreen.
//  - Optional non-autoplay "native controls" mode
//    (autoplay: false) for on-demand gallery videos: no
//    autoplay, no forced mute, no loop, native browser
//    controls visible at all times (play/pause/seek/
//    volume/fullscreen), user must press play.
//  - Graceful fallback state if a source is missing/errors.
//  - prefers-reduced-motion support.
// ======================================================

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Create a video tile.
 * @param {Object} opts
 * @param {string} opts.src - video source path or URL
 * @param {string} [opts.poster] - poster image path
 * @param {string} [opts.fallbackLabel] - label shown if source is missing/loading
 * @param {boolean} [opts.allowSound=false] - show a standalone sound toggle (featured videos)
 * @param {boolean} [opts.priority=false] - mount immediately with preload="auto" (above the fold)
 * @param {boolean} [opts.square=false] - 1:1 tile instead of 9:16
 * @param {boolean} [opts.showFrame=true] - show the viewfinder bracket motif
 * @param {boolean} [opts.autoplay=true] - false = native-controls "watch on demand" video:
 *   no autoplay, no forced mute, no loop, native browser controls (play/pause/seek/
 *   volume/fullscreen) shown at all times. Used for non-featured client gallery videos.
 * @param {boolean} [opts.fullscreenOnClick=true] - false = clicking the video does NOT
 *   open fullscreen; used when the whole tile is itself a navigation link (e.g. the
 *   homepage Best Content card), so a click on the video navigates normally instead.
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
  autoplay = true,
  fullscreenOnClick = true,
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
  let mounted = false;
  let inPlayZone = false;

  function setErrored() {
    fallback.querySelector(".video-tile__fallback-status").textContent = "Video pending upload";
    fallback.classList.remove("video-tile__fallback--hidden");
    if (video) video.style.display = "none";
  }

  function attemptPlay() {
    if (!video || prefersReducedMotion || !inPlayZone) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      // Autoplay can be rejected if data isn't ready yet, or (rarely) by
      // browser policy — loadedmetadata/canplay listeners below retry it.
      playPromise.catch(() => {});
    }
  }

  function mountVideo() {
    if (mounted) return;
    mounted = true;

    video = document.createElement("video");
    video.className = "video-tile__media";

    if (autoplay) {
      // Set both the IDL property and the HTML attribute for each — some
      // mobile browsers only reliably honor autoplay policy checks against
      // the attribute, not just the property.
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.loop = true;
      video.setAttribute("loop", "");
      video.autoplay = true;
      video.setAttribute("autoplay", "");
      video.preload = priority ? "auto" : "metadata";
    } else {
      // Native-controls "watch on demand" video: no autoplay, no forced
      // mute, no loop — the user presses play and gets normal browser
      // controls (play/pause/seek/volume/fullscreen) throughout.
      video.controls = true;
      video.setAttribute("controls", "");
      video.preload = "metadata";
    }
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", ""); // legacy iOS
    video.setAttribute("aria-label", fallbackLabel ? `${fallbackLabel} video` : "Video");
    if (poster) video.poster = poster;

    const sourceQt = document.createElement("source");
    sourceQt.src = src;
    sourceQt.type = "video/quicktime";
    video.appendChild(sourceQt);

    const sourceGeneric = document.createElement("source");
    sourceGeneric.src = src;
    video.appendChild(sourceGeneric);

    video.addEventListener("error", setErrored, true);

    if (autoplay) {
      video.addEventListener("loadedmetadata", attemptPlay);
      video.addEventListener("canplay", attemptPlay);

      if (fullscreenOnClick) {
        // Click/tap anywhere on the video → fullscreen. Doesn't touch
        // play/pause — the video keeps looping/autoplaying as before;
        // this only ever opens fullscreen, never closes it prematurely.
        video.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          requestVideoFullscreen(video);
        });
      }
    }
    // When autoplay is false, native `controls` already gives play/pause,
    // seek, volume, and a fullscreen button — no custom click handling
    // is added, so it doesn't duplicate or conflict with that browser UI.

    // Fallback stays in the DOM (hidden) so it can be restored on error
    wrap.insertBefore(video, fallback);
    fallback.classList.add("video-tile__fallback--hidden");

    if (autoplay && allowSound) {
      soundBtn = document.createElement("button");
      soundBtn.type = "button";
      soundBtn.className = "video-tile__sound";
      soundBtn.setAttribute("aria-label", "Turn sound on");
      soundBtn.innerHTML = iconMuted();
      soundBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        video.muted = !video.muted;
        soundBtn.setAttribute("aria-label", video.muted ? "Turn sound on" : "Turn sound off");
        soundBtn.innerHTML = video.muted ? iconMuted() : iconUnmuted();
      });
      wrap.appendChild(soundBtn);
    }

    if (autoplay) attemptPlay();
  }

  // Phase 1 — mount early so metadata (not the full file) is ready
  // by the time the tile is actually scrolled to. Priority tiles
  // (above the fold) mount immediately with preload="auto".
  if (priority) {
    inPlayZone = true;
    mountVideo();
  } else {
    const mountObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mountVideo();
            mountObserver.disconnect();
          }
        });
      },
      { rootMargin: "600px 0px" }
    );
    mountObserver.observe(wrap);
  }

  // Phase 2 — only download/play the full video once the tile is
  // actually near/at the viewport; pause (not unload) once it
  // leaves, so scrolling back doesn't feel broken. Non-autoplay
  // (native-controls) videos never auto-play here — only pausing
  // on scroll-away if the visitor had pressed play themselves.
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        wrap.classList.toggle("is-visible", entry.isIntersecting);
        inPlayZone = entry.isIntersecting;
        if (!video) return;
        if (autoplay) {
          if (entry.isIntersecting) {
            if (video.preload !== "auto") video.preload = "auto";
            attemptPlay();
          } else {
            video.pause();
          }
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      });
    },
    { threshold: 0.35, rootMargin: "80px 0px" }
  );
  visibilityObserver.observe(wrap);

  return wrap;
}

// ------------------------------------------------------
// FULLSCREEN
// Shared by every video tile on the site. Surfaces native
// controls (play/pause/seek/volume/exit) only while in
// fullscreen, so the minimal preview UI is untouched
// outside of it.
// ------------------------------------------------------
function requestVideoFullscreen(video) {
  const alreadyHadControls = video.hasAttribute("controls");
  if (!alreadyHadControls) video.setAttribute("controls", "");

  const cleanup = () => {
    const stillFullscreen =
      document.fullscreenElement === video || document.webkitFullscreenElement === video;
    if (stillFullscreen) return;
    if (!alreadyHadControls) video.removeAttribute("controls");
    document.removeEventListener("fullscreenchange", cleanup);
    document.removeEventListener("webkitfullscreenchange", cleanup);
    video.removeEventListener("webkitendfullscreen", cleanup);
  };
  document.addEventListener("fullscreenchange", cleanup);
  document.addEventListener("webkitfullscreenchange", cleanup);
  video.addEventListener("webkitendfullscreen", cleanup);

  try {
    if (typeof video.requestFullscreen === "function") {
      video.requestFullscreen().catch(() => cleanup());
    } else if (typeof video.webkitEnterFullscreen === "function") {
      // iPhone Safari — native fullscreen video player (own built-in controls)
      video.webkitEnterFullscreen();
    } else if (typeof video.webkitRequestFullscreen === "function") {
      video.webkitRequestFullscreen();
    } else if (typeof video.mozRequestFullScreen === "function") {
      video.mozRequestFullScreen();
    } else if (typeof video.msRequestFullscreen === "function") {
      video.msRequestFullscreen();
    } else {
      cleanup();
    }
  } catch (e) {
    cleanup();
  }
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
