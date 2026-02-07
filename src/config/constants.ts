/**
 * Application Constants
 * Centralized configuration for the City of Seekers website
 */

// Festival Information
export const FESTIVAL = {
  NAME: "City Of Seekers",
  YEAR: 2026,
  START_DATE: "2026-06-11",
  END_DATE: "2026-06-14",
  // Date string for display purposes (consider using i18n for this)
  DATE_DISPLAY: "11.-14. June 2026",
  COUNTDOWN_DATE: "2026-06-11T12:00:00",
} as const;

// Location Information
export const LOCATION = {
  ADDRESS: "Pferdeweg 2",
  POSTAL_CODE: "31787",
  CITY: "Hameln",
  COUNTRY: "Germany",
  FULL_ADDRESS: "Pferdeweg 2, 31787 Hameln, Germany",
} as const;

// Social Media & Contact
export const SOCIAL = {
  INSTAGRAM_URL: "https://instagram.com/cityofseekers",
  EMAIL: "info@cityofseekers.eu",
  WHATSAPP_WELCOME_URL: "http://welcome.cityofseekers.eu/",
} as const;

// External Links
export const LINKS = {
  GOOGLE_MAPS: "https://maps.app.goo.gl/Xv5XzfiGpoahynHh9",
  TICKET_URL: "https://buytickets.at/cityofseekers",
  // Alternative ticket URL (keeping for reference)
  // TICKET_URL_ALT: 'https://tickettailor.com/events/cityofseekers',
} as const;

// Organization Information
export const ORGANIZATION = {
  NAME: "City Of Seekers e.V.",
  REGISTRATION_ADDRESS: "Luxemburger Straße 202, 50937 Köln",
  COPYRIGHT_YEAR: 2026,
} as const;

// Google Maps Embed Configuration
export const GOOGLE_MAPS_EMBED = {
  URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9757.034621849836!2d9.344969288177725!3d52.09855547391952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47baca8dd5526e11%3A0x36ceb12e5c7be7f1!2sPferdeweg%202%2C%2031787%20Hameln!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde",
  ALLOW: "geolocation",
  STYLE: {
    BORDER: 0,
    WIDTH: "100%",
    HEIGHT: "100%",
  },
} as const;

// UI Configuration
export const UI = {
  SCROLL_OFFSET: 100, // Pixels offset for scroll detection
  GALLERY_INTERVAL: 6000, // Milliseconds between gallery transitions
  GALLERY_TRANSITION_DURATION: 500, // Milliseconds for gallery fade transition
} as const;

// Navigation Menu Items
// Scroll sections for the home page one-pager navigation
export const NAV_SECTIONS = ["welcome", "COS?", "Gallery", "FAQ", "Contact"] as const;

// Scroll-based navigation items (sections on home page)
export const NAV_SCROLL_ITEMS = [
  { key: "welcome", label: "Welcome" },
  { key: "COS?", label: "COS?" },
  { key: "Gallery", label: "Gallery" },
  { key: "FAQ", label: "FAQ" },
  { key: "Contact", label: "Contact" },
] as const;

// Route-based navigation items (separate pages)
export const NAV_PAGE_ITEMS = [
  { key: "where", path: "/where", label: "Location" },
  { key: "team", path: "/team", label: "Team" },
  { key: "code", path: "/code", label: "Conduct" },
] as const;

export type NavScrollItem = (typeof NAV_SCROLL_ITEMS)[number];
export type NavPageItem = (typeof NAV_PAGE_ITEMS)[number];

// Helper to format section names for display
export const formatSectionName = (section: string): string => {
  return section.charAt(0).toUpperCase() + section.slice(1).replace(/&/g, "& ");
};

// Export all constants as a single object for convenience
export const CONFIG = {
  FESTIVAL,
  LOCATION,
  SOCIAL,
  LINKS,
  ORGANIZATION,
  GOOGLE_MAPS_EMBED,
  UI,
  NAV_SCROLL_ITEMS,
  NAV_PAGE_ITEMS,
} as const;

export default CONFIG;
