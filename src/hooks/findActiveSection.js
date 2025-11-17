// src/hooks/useActiveSection.js

import { useEffect, useState } from "react";
import { UI } from "../config/constants";

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState("");

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
