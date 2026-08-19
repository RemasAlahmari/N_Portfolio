// ======================================================
// CONTACT SECTION COMPONENT (homepage strip)
// ======================================================
import { contact } from "../data.js";
import { getWhatsAppUrl } from "../contact.js";
import { observeReveal } from "../reveal.js";

export function renderContactSection(mount) {
  const section = document.createElement("section");
  section.className = "gallery contact-section";

  const cta = document.createElement("a");
  cta.href = getWhatsAppUrl("Hi Naif — I'd like to talk about working together.");
  cta.target = "_blank";
  cta.rel = "noopener noreferrer";
  cta.className = "contact-cta";
  cta.innerHTML = `
    <span class="contact-cta__title">Let's work<br />together</span>
    <span class="contact-cta__action">
      Start on WhatsApp
      <svg width="18" height="12" viewBox="0 0 24 16" fill="none" aria-hidden="true">
        <path d="M1 8h21M15 1l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  `;
  observeReveal(cta);

  const socials = document.createElement("div");
  socials.className = "contact-socials";
  socials.innerHTML = `
    <a href="${contact.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram — @${contact.instagramHandle}</a>
    <a href="${contact.tiktokUrl}" target="_blank" rel="noopener noreferrer">TikTok — @${contact.tiktokHandle}</a>
    <a href="mailto:${contact.email}">${contact.email}</a>
  `;
  observeReveal(socials, { delay: 120 });

  section.appendChild(cta);
  section.appendChild(socials);
  mount.appendChild(section);
}
