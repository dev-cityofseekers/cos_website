// src/hooks/useActiveSection.ts

import { useEffect, useState } from "react";
import { UI } from "../config/constants";

/**
 * Custom hook to track which section is currently active based on scroll position
 * @param sections - Array of section IDs to monitor
 * @returns The ID of the currently active section
 */
export function useActiveSection(sections: string[]): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - UI.SCROLL_OFFSET) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
}
