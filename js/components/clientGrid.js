// ======================================================
// CLIENT GRID COMPONENT
// ======================================================
import { clients } from "../data.js";
import { createClientTile } from "./clientTile.js";
import { observeReveal } from "../reveal.js";

export function renderClientGrid(mount, { root = "" } = {}) {
  const section = document.createElement("section");
  section.className = "gallery clients-section";

  const label = document.createElement("p");
  label.className = "clients-section__label";
  label.textContent = "Clients";
  observeReveal(label);

  const grid = document.createElement("div");
  grid.className = "client-grid";
  clients.forEach((client, i) => {
    grid.appendChild(createClientTile(client, { root, delay: i * 60 }));
  });

  section.appendChild(label);
  section.appendChild(grid);
  mount.appendChild(section);
}
