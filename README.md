# City of Seekers Festival Website

Official website for the City of Seekers transformational festival, taking place June 11-14, 2026 in Hameln, Germany.

## 🎪 About

City of Seekers is a transformational festival experience that brings together seekers, musicians, artists, and creatives for an unforgettable weekend of connection, music, workshops, and community.

## 🚀 Tech Stack

- **React 18** - Modern React with TypeScript
- **TypeScript 5** - Type-safe development
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Utility-first styling
- **i18next** - Internationalization (English/German)
- **React Router** - Client-side routing
- **React Scroll** - Smooth scrolling navigation
- **Vercel Speed Insights** - Performance monitoring (Core Web Vitals)
- **Vercel Web Analytics** - Page views & usage analytics
- **Vitest & React Testing Library** - Component testing (jsdom)
- **ESLint & Prettier** - Code quality and formatting
- **Husky & lint-staged** - Pre-commit hooks

## 📦 Getting Started

### Prerequisites

- Node.js 22.x
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

## 🛠️ Available Scripts

### Development

```bash
# Start development server (Vite)
npm start              # alias for `vite`
npm run dev            # same thing

# Run tests once (Vitest)
npm test               # `vitest run`

# Watch mode
npm run test:watch

# Build for production (type-check + Vite build)
npm run build

# Preview the production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Check code formatting
npm run format:check

# Format code with Prettier
npm run format
```

## 📁 Project Structure

```
cos_website/
├── public/              # Static assets
│   ├── images/          # Image assets
│   ├── wallpapers/      # Gallery images
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # React components
│   │   ├── sections/    # Page sections
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── config/          # Configuration constants
│   │   └── constants.ts # Centralized config
│   ├── data/            # Data files
│   │   ├── teamMembers.ts
│   │   └── wallpaperImages.ts
│   ├── hooks/           # Custom React hooks
│   │   └── useActiveSection.ts
│   ├── components/text/
│   │   └── translations.json  # i18n strings (en + de)
│   ├── i18n.ts          # i18next configuration
│   ├── pages/           # Route pages (Team, Where, Imprint, …)
│   ├── types/           # TypeScript type definitions
│   ├── index.tsx        # App entry point with routes
│   └── App.tsx          # Home page composition
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── vite.config.ts       # Vite configuration
├── vitest.config.ts     # Vitest configuration
└── tailwind.config.cjs  # Tailwind CSS configuration
```

## 🌍 Internationalization

The website supports English and German. Translations live in a single file: `src/components/text/translations.json`, with top-level `en` and `de` keys.

To add a new translation:

1. Add the key under both the `en` and `de` sections of `src/components/text/translations.json`
2. Use the `useTranslation` hook: `const { t } = useTranslation();`
3. Reference your key: `{t('your.translation.key')}`

## 🎨 Styling

This project uses Tailwind CSS with custom brand colors (defined in `tailwind.config.cjs`):

- `cos-main-orange`: #f9d598 — primary background
- `cos-orange`: #fec360 — accents, buttons
- `cos-off-black`: #090e1a — footer, dark text
- `cos-blue`: #4781c3
- `cos-sea-blue`: #61cbeb
- `cos-pink`: #ef89b8
- `cos-red`: #f69679
- `cos-yellow`: #faea27

Custom fonts:
- Omnes (primary brand font)

## 🧪 Testing

Tests are written using Vitest (Jest-compatible API: `describe` / `it` / `expect`) and React Testing Library. All test files use the `.test.tsx` extension. Global setup and mocks live in `src/setupTests.ts` (react-scroll, `window.matchMedia`, YouTube Player API, `@vercel/speed-insights`).

```bash
# Run all tests once (CI mode by default)
npm test

# Watch mode
npm run test:watch
```

Test utilities are available in `src/test-utils.tsx` which provides a custom render function with all necessary providers (Router, i18n).

## 🔧 Configuration

### Constants

All hardcoded values are centralized in `src/config/constants.ts`:

- Festival dates and information
- Location details
- Social media links
- External URLs
- UI configuration

### Environment

The project uses Vite's environment variable system. Create a `.env.local` file for local overrides. Variables exposed to the client must be prefixed with `VITE_` and are accessed via `import.meta.env.VITE_*`.

## 🚢 Deployment

This site is optimized for deployment on platforms like Vercel, Netlify, or any static hosting service.

```bash
# Build for production
npm run build

# The build folder will contain the optimized production build
```

## 🤝 Contributing

### Code Style

- Use TypeScript for type safety
- Follow the ESLint and Prettier configurations
- Write tests for new components
- Keep components focused and reusable
- Extract hardcoded values to constants
- Use semantic HTML and ARIA labels for accessibility

### Git Workflow

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Commit with descriptive messages
5. Push and create a pull request

Pre-commit hooks will automatically:
- Run ESLint and fix issues
- Format code with Prettier
- Ensure code quality before commits

## 📄 License

© 2026 City Of Seekers e.V. All rights reserved.

## 🙏 Acknowledgments

- Festival organizers and team
- All contributors and supporters
- The City of Seekers community

---

Built with ❤️ by the City of Seekers team
