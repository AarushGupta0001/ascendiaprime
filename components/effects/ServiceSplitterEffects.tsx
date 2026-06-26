"use client";

import { useEffect } from "react";

/**
 * Handles service pillar expand/collapse on the home page using scoped element refs.
 */
export default function ServiceSplitterEffects() {
  useEffect(() => {
    const container = document.getElementById("main-services-container");
    if (!container) return;

    const majorButtons = Array.from(container.getElementsByClassName("major-srv-btn"));
    const minorGroups = Array.from(container.getElementsByClassName("minor-group"));

    const handlers = majorButtons.map((button) => {
      const handler = (event: Event) => {
        event.preventDefault();

        const targetId = `group-${button.getAttribute("data-target")}`;
        const targetGroup = document.getElementById(targetId);

        if (button.classList.contains("active")) {
          button.classList.remove("active");
          container.classList.remove("is-split");
          minorGroups.forEach((group) => group.classList.remove("active"));
          return;
        }

        container.classList.add("is-split");
        majorButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        minorGroups.forEach((group) => group.classList.remove("active"));
        targetGroup?.classList.add("active");
      };

      button.addEventListener("click", handler);
      return { button, handler };
    });

    return () => {
      handlers.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
      });
    };
  }, []);

  return null;
}
