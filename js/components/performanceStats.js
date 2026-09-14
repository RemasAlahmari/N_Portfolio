// ======================================================
// PERFORMANCE STATS COMPONENT
// Used on the Highlight page only. Shows the client's
// full display name, then whichever metrics are actually
// provided (a "TBD" metric is omitted entirely, never
// shown as a placeholder dash), plus the "Watch on
// Platform" button.
//
// Arabic name and platform name (TikTok/Instagram) are
// intentionally NOT displayed here — the platform link
// still works through the button, just not labeled.
//
// `.stats__meta-row` wraps the metric(s) and the button so
// they can sit side-by-side on mobile (see css/pages.css)
// while staying stacked on desktop, matching the previous
// layout exactly.
// ======================================================

export function renderPerformanceStats(container, { clientName, metrics }) {
  const cells = [
    { label: "Views", value: metrics.views },
    { label: "Likes", value: metrics.likes },
    { label: "Shares", value: metrics.shares },
  ].filter((cell) => cell.value && cell.value !== "TBD");

  const statCell = (label, value) => `
    <div>
      <p class="stats__label">${label}</p>
      <p class="stats__value">${value}</p>
    </div>
  `;

  container.classList.add("stats");
  container.innerHTML = `
    <p class="stats__client">${clientName}</p>
    <div class="stats__meta-row">
      ${
        cells.length
          ? `<div class="stats__grid">${cells.map((c) => statCell(c.label, c.value)).join("")}</div>`
          : `<p class="stats__pending">Performance data pending</p>`
      }
      ${
        metrics.url && metrics.url !== "TBD"
          ? `<a href="${metrics.url}" target="_blank" rel="noopener noreferrer" class="watch-button">
              Watch on platform
              <svg width="14" height="10" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                <path d="M1 8h21M15 1l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>`
          : ""
      }
    </div>
  `;
}
