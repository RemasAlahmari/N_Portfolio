// ======================================================
// PERFORMANCE STATS COMPONENT
// Renders into a container element. Only shows metrics
// that are actually provided — "TBD" values render as
// an em dash or are omitted, never invented.
// ======================================================

export function renderPerformanceStats(container, { clientName, clientArabicName, metrics }) {
  const hasAnyMetric =
    metrics.views !== "TBD" || metrics.likes !== "TBD" || metrics.shares !== "TBD";

  const statCell = (label, value) => `
    <div>
      <p class="stats__label">${label}</p>
      <p class="stats__value">${value && value !== "TBD" ? value : "—"}</p>
    </div>
  `;

  container.className = "stats";
  container.innerHTML = `
    <div>
      <p class="stats__client">${clientName}</p>
      ${clientArabicName ? `<p class="stats__client-arabic">${clientArabicName}</p>` : ""}
      ${metrics.platform && metrics.platform !== "TBD" ? `<p class="stats__platform">${metrics.platform}</p>` : ""}
    </div>
    ${
      hasAnyMetric
        ? `<div class="stats__grid">
            ${statCell("Views", metrics.views)}
            ${statCell("Likes", metrics.likes)}
            ${statCell("Shares", metrics.shares)}
          </div>`
        : `<p class="stats__pending">Performance data pending</p>`
    }
    ${
      metrics.url && metrics.url !== "TBD"
        ? `<a href="${metrics.url}" target="_blank" rel="noopener noreferrer" class="stats__watch">
            Watch on platform
            <svg width="14" height="10" viewBox="0 0 24 16" fill="none" aria-hidden="true">
              <path d="M1 8h21M15 1l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>`
        : ""
    }
  `;
}
