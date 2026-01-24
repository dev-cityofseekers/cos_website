# Architecture Overview

## Project Type
React 18 + TypeScript single-page application (SPA) with multi-page routing for the City of Seekers festival website.

## Tech Stack
- **Framework:** React 18.2 with TypeScript 4.9
- **Routing:** React Router DOM 6.17
- **Styling:** Tailwind CSS 3.3 with custom theme
- **i18n:** i18next with react-i18next (English/German)
- **Build:** Create React App (react-scripts 5.0)
- **Testing:** Jest + React Testing Library

## Directory Structure

```
src/
├── components/           # React components
│   ├── sections/         # Home page sections (Welcome, What, FAQ, etc.)
│   ├── layouts/          # Layout wrappers
│   ├── Header.tsx        # Main navigation (shared across all pages)
│   ├── Footer.tsx        # Site footer
│   ├── ErrorBoundary.tsx # Error handling wrapper
│   └── *.test.tsx        # Component tests (colocated)
├── pages/                # Standalone route pages
│   ├── Team.tsx          # /team - Team members page
│   ├── Where.tsx         # /where - Location page
│   ├── Imprint.tsx       # /imprint - Legal notice
│   ├── DataPolicy.tsx    # /privacy-policy
│   ├── CodeOfConduct.tsx # /code
│   └── Tickets.tsx       # /tickets
├── config/
│   └── constants.ts      # Centralized configuration
├── data/                 # Static data files
│   ├── teamMembers.ts    # Team member profiles
│   └── wallpaperImages.ts
├── hooks/                # Custom React hooks
│   └── useActiveSection.ts
├── types/                # TypeScript interfaces
│   └── index.ts
├── components/text/
│   └── translations.json # i18n translations (EN/DE)
├── font/                 # Custom fonts (Omnes)
├── styles/               # CSS modules and animations
├── i18n.ts               # i18next configuration
├── index.tsx             # App entry point with routes
├── App.tsx               # Home page layout
└── test-utils.tsx        # Test utilities
```

## Routing Architecture

### Home Page (/)
Single-page with scroll-based navigation between sections:
- Welcome (hero with video background)
- COS? (What is it)
- Gallery (photo gallery)
- FAQ (accordion)
- Contact (WhatsApp group info)

### Standalone Pages
Separate routes with shared Header component:
- `/team` - Team member profiles
- `/where` - Location with Google Maps
- `/imprint`, `/privacy-policy`, `/code`, `/tickets`

### Navigation System
The Header component handles hybrid navigation:
- **Scroll items:** Navigate to sections on home page (uses react-scroll on home, Router links elsewhere)
- **Route items:** Navigate to separate pages (Location, Team)

Configuration in `config/constants.ts`:
- `NAV_SCROLL_ITEMS` - Home page sections
- `NAV_PAGE_ITEMS` - Standalone pages

## Component Patterns

### Page Components
All standalone pages follow this structure:
```tsx
<div className="min-h-screen bg-cos-main-orange">
  <Header />
  <div className="container mx-auto p-6 pt-28 max-w-Xxl">
    {/* Page content */}
  </div>
  <Footer />
</div>
```

### Error Boundaries
Each major section is wrapped in an ErrorBoundary for isolation.

### Internationalization
- All user-facing text uses `useTranslation()` hook
- Translation keys in `translations.json` under `en` and `de`
- Language auto-detected from browser, stored in localStorage

## State Management
- Local component state with useState/useEffect
- No global state library (not needed for this scale)
- Cookie consent stored in localStorage

## Styling Conventions
- Tailwind CSS utility classes
- Custom colors defined in `tailwind.config.js`:
  - `cos-main-orange` - Primary background
  - `cos-orange` - Accent color
  - `cos-off-black` - Dark text/footer
  - `cos-blue`, `cos-pink`, etc.
- Custom font: `font-omnes`
