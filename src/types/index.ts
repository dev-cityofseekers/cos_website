/**
 * Type definitions for the City of Seekers application
 */

// Team Member types
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

// Gallery/Wallpaper types
export interface GalleryImage {
  original: string;
  thumbnail: string;
  description?: string;
}

export interface WallpaperImage {
  url: string;
  alt: string;
  photographer: {
    name: string;
    instagram: string;
  };
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
  translationKey?: string;
}

// Ticket types
export interface TicketOption {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features?: string[];
  available: boolean;
}

// Navigation types
export interface NavItem {
  key: string;
  translationKey: string;
  path?: string;
}

// Event/Festival types
export interface FestivalInfo {
  name: string;
  year: number;
  startDate: string;
  endDate: string;
  dateDisplay: string;
  countdownDate: string;
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  country: string;
  fullAddress: string;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface CookieConsentProps {
  setConsent: (consent: string) => void;
}

export interface WelcomeComponentProps {
  whatsappLink: string;
}

// Countdown timer types
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
