// ======================================================
// PERFORMANCE STATS COMPONENT
// Renders into a container element. Only shows metrics
// that are actually provided — a "TBD" metric is omitted
// entirely (not shown as a placeholder dash), so e.g. a
// highlight with only Views set shows just one stat cell,
// not empty Likes/Shares columns.
// ======================================================

export function renderPerformanceStats(container, { clientName, clientArabicName, metrics }) {
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

  container.className = "stats";
  container.innerHTML = `
    <div>
      <p class="stats__client">${clientName}</p>
      ${clientArabicName ? `<p class="stats__client-arabic">${clientArabicName}</p>` : ""}
      ${metrics.platform && metrics.platform !== "TBD" ? `<p class="stats__platform">${metrics.platform}</p>` : ""}
    </div>
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
  `;
}
