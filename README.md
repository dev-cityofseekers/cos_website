# City of Seekers Festival Website

Official website for the City of Seekers transformational festival, taking place June 11-14, 2026 in Hameln, Germany.

## 🎪 About

City of Seekers is a transformational festival experience that brings together seekers, musicians, artists, and creatives for an unforgettable weekend of connection, music, workshops, and community.

## 🚀 Tech Stack

- **React 18** - Modern React with TypeScript
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **i18next** - Internationalization (English/German)
- **React Router** - Client-side routing
- **React Scroll** - Smooth scrolling navigation
- **Vercel Speed Insights** - Performance monitoring
- **Jest & React Testing Library** - Component testing
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
# Start development server
npm start

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage --watchAll=false

# Build for production
npm run build
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
│   ├── locales/         # i18n translation files
│   │   ├── de/
│   │   └── en/
│   ├── pages/           # Route pages
│   ├── types/           # TypeScript type definitions
│   └── App.tsx          # Main app component
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🌍 Internationalization

The website supports English and German. Translation files are located in `src/locales/`.

To add a new translation:

1. Add the key to both `en/translation.json` and `de/translation.json`
2. Use the `useTranslation` hook: `const { t } = useTranslation();`
3. Reference your key: `{t('your.translation.key')}`

## 🎨 Styling

This project uses Tailwind CSS with custom brand colors:

- `cos-main-orange`: #f9d598
- `cos-orange`: #F9AC54
- `cos-off-black`: #0B0A07

Custom fonts:
- Omnes (primary brand font)

## 🧪 Testing

Tests are written using Jest and React Testing Library. All test files use the `.test.tsx` extension.

```bash
# Run all tests
npm test

# Run tests in CI mode
npm test -- --watchAll=false

# Run with coverage
npm test -- --coverage --watchAll=false
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

The project uses Create React App's environment variable system. Create a `.env.local` file for local overrides.

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
