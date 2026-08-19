// ======================================================
// FOOTER COMPONENT
// Renders into any element with id="footer-root".
// ======================================================
import { profile, contact } from "../data.js";

export function renderFooter() {
  const mount = document.getElementById("footer-root");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="footer">
      <div class="footer__panel">
        <div class="footer__inner">
          <p class="footer__meta">${profile.name} · ${profile.location}</p>
          <div class="footer__socials">
            <a href="${contact.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="${contact.tiktokUrl}" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
