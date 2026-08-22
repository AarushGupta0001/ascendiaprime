import { contactSectionIds } from "@/lib/navigation";

const CONTACT_HASHES = new Set(["contact", "enquiry", "conversation", "enquire"]);

export function scrollToElementId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  return scrollToElementId(id, behavior);
}

export function findContactSection() {
  for (const id of contactSectionIds) {
    const el = document.getElementById(id);
    if (el) return el;
  }
  return null;
}

export function scrollToContactSection(behavior: ScrollBehavior = "smooth") {
  const section = findContactSection();
  if (!section) return false;
  section.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function isContactHash(hash: string) {
  const id = hash.replace(/^#/, "");
  return CONTACT_HASHES.has(id);
}

export function parseRootHashHref(href: string) {
  const match = href.match(/^\/(#.+)$/);
  if (!match) return null;
  return match[1];
}
