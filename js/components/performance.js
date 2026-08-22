// ======================================================
// PERFORMANCE COMPONENT
// Homepage strip showing Total Views / Total Shares /
// Total New Followers. Values come straight from
// data.js — "TBD" renders as an em dash, never an
// invented number.
// ======================================================
import { performance as performanceData } from "../data.js";
import { observeReveal } from "../reveal.js";

export function renderPerformance(mount) {
  const stats = [
    { value: performanceData.totalViews, label: "Total Views" },
    { value: performanceData.totalShares, label: "Total Shares" },
    { value: performanceData.totalNewFollowers, label: "Total New Followers" },
  ];

  const section = document.createElement("section");
  section.className = "totals-section";

  const inner = document.createElement("div");
  inner.className = "gallery totals-section__inner";

  const label = document.createElement("p");
  label.className = "totals-label";
  label.textContent = "Performance";
  observeReveal(label);

  const grid = document.createElement("div");
  grid.className = "totals-grid";
  stats.forEach((stat, i) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <p class="totals-grid__value">${stat.value === "TBD" ? "—" : stat.value}</p>
      <p class="totals-grid__label">${stat.label}</p>
    `;
    observeReveal(item, { delay: i * 100 });
    grid.appendChild(item);
  });

  inner.appendChild(label);
  inner.appendChild(grid);
  section.appendChild(inner);
  mount.appendChild(section);
}
