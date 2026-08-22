// ======================================================
// CONTACT LINK HELPERS
// ======================================================
import { contact } from "./data.js";

/** Convert a Saudi local number like "0533536777" into an international wa.me link. */
export function getWhatsAppUrl(prefilledMessage) {
  const digits = contact.whatsappNumber.replace(/\D/g, ""); // "0533536777"
  const international = digits.startsWith("0") ? `966${digits.slice(1)}` : digits;
  const text = prefilledMessage ? `?text=${encodeURIComponent(prefilledMessage)}` : "";
  return `https://wa.me/${international}${text}`;
}

export function getMailtoUrl() {
  return `mailto:${contact.email}`;
}
