// ======================================================
// CONTACT PAGE (contact.html)
// Main contact block: a large green panel containing
// Naif's name and four individually-boxed contact
// methods (WhatsApp, Instagram, TikTok, Email).
// ======================================================
import { renderNavbar } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { profile, contact } from "../data.js";
import { getWhatsAppUrl, getMailtoUrl } from "../contact.js";
import { observeReveal } from "../reveal.js";

const root = "";

renderNavbar({ root, active: "contact" });
renderFooter();

const main = document.getElementById("main");

const section = document.createElement("section");
section.className = "gallery contact-page";

const title = document.createElement("h1");
title.className = "contact-page__title";
title.innerHTML = "Let's work<br />together";
observeReveal(title);

const channels = [
  {
    label: "WhatsApp",
    href: getWhatsAppUrl("Hi Naif — I'd like to talk about working together."),
    icon: iconWhatsApp(),
  },
  { label: "Instagram", href: contact.instagramUrl, icon: iconArrow() },
  { label: "TikTok", href: contact.tiktokUrl, icon: iconArrow() },
  { label: contact.email, href: getMailtoUrl(), icon: iconArrow() },
];

const panel = document.createElement("div");
panel.className = "contact-panel";

const panelName = document.createElement("p");
panelName.className = "contact-panel__name";
panelName.textContent = profile.name.toUpperCase();

const panelMeta = document.createElement("p");
panelMeta.className = "contact-panel__meta";
panelMeta.textContent = `${profile.title} · ${profile.location}`;

const boxes = document.createElement("div");
boxes.className = "contact-panel__boxes";
channels.forEach((channel) => {
  const a = document.createElement("a");
  a.href = channel.href;
  a.className = "contact-box";
  if (channel.href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  a.innerHTML = `
    <span class="contact-box__label">${channel.label}</span>
    <span class="contact-box__icon" aria-hidden="true">${channel.icon}</span>
  `;
  boxes.appendChild(a);
});

panel.appendChild(panelName);
panel.appendChild(panelMeta);
panel.appendChild(boxes);
observeReveal(panel, { delay: 100 });

section.appendChild(title);
section.appendChild(panel);
main.appendChild(section);

function iconArrow() {
  return `<svg width="16" height="11" viewBox="0 0 24 16" fill="none" aria-hidden="true">
    <path d="M1 8h21M15 1l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function iconWhatsApp() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 4A11.8 11.8 0 0 0 3.4 18.8L2 22l3.3-1.4A11.8 11.8 0 1 0 20 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M8.7 8.3c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.7.3.1.5.1.6-.1l.6-.7c.2-.3.4-.2.6-.1l1.6.8c.2.1.4.2.4.3.1.2.1 1-.2 1.4-.4.5-1.3 1-2 1.1-.6.1-1.3.2-4.2-.9-3.5-1.4-5.7-4.9-5.9-5.1-.2-.2-1.3-1.8-1.3-3.4 0-1.6.8-2.4 1.1-2.7Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`;
}
