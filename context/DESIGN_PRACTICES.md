# Design Practices & Conventions

## Code Style

### TypeScript
- Strict mode enabled
- Explicit typing for component props
- Centralized types in `src/types/index.ts`
- Use `as const` for constant arrays/objects

### React Components
- Functional components only (no class components)
- Named exports for components
- Colocated test files (`Component.test.tsx`)
- Props destructured in function signature

### File Naming
- Components: PascalCase (`Header.tsx`, `TeamMember.tsx`)
- Hooks: camelCase with `use` prefix (`useActiveSection.ts`)
- Constants: UPPER_SNAKE_CASE for values
- Files: Match the default export name

## Styling Guidelines

### Tailwind CSS
- Use utility classes directly in JSX
- Custom colors in `tailwind.config.js`, not hardcoded
- Responsive design: mobile-first approach
- Common breakpoints: `sm:`, `md:`, `lg:`

### Color Palette
```
cos-main-orange: #f9d598  (primary background)
cos-off-black: #090e1a    (footer, dark text)
cos-orange: #fec360       (accents, buttons)
cos-blue: #4781c3         (links)
cos-sea-blue: #61cbeb
cos-pink: #ef89b8
cos-red: #f69679
cos-yellow: #faea27
```

### Typography
- Headings: `font-omnes` (custom font)
- Body: Default Tailwind sans-serif
- Sizes: Use Tailwind scale (`text-sm`, `text-lg`, `text-4xl`)

### Component Styling Patterns
```tsx
// Cards
className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all"

// Buttons
className="px-4 py-2 bg-cos-orange text-white rounded-full font-omnes"

// Page containers
className="container mx-auto p-6 pt-28 max-w-5xl"
```

## Testing Practices

### Test Structure
- Use `describe` blocks to group related tests
- Test file naming: `ComponentName.test.tsx`
- Custom render function in `test-utils.tsx` (includes Router + i18n providers)

### What to Test
- Component renders without crashing
- Key elements are present
- User interactions work (clicks, form inputs)
- Conditional rendering based on state

### Mocking
- react-scroll mocked in `setupTests.js`
- window.matchMedia mocked for responsive tests
- YouTube API mocked

## Internationalization (i18n)

### Adding Translations
1. Add keys to `src/components/text/translations.json`
2. Add under both `en` and `de` sections
3. Use nested objects for organization

### Using Translations
```tsx
const { t } = useTranslation();
// Simple
<h1>{t("section.title")}</h1>
// With interpolation
<p>{t("section.text", { name: value })}</p>
```

## Configuration Management

### Constants (`config/constants.ts`)
All magic values should be in constants:
- Festival dates and location
- Social media URLs
- Navigation items
- UI configuration (scroll offsets, timings)

### Environment Variables
- Use `.env` files for sensitive data
- Prefix with `REACT_APP_` for CRA

## Git Practices

### Commit Messages
- Use conventional commits format
- Be descriptive but concise
- Reference issues when applicable

### Pre-commit Hooks
- Husky runs lint-staged on commit
- ESLint checks code quality
- Prettier formats code

## Performance Considerations

- Lazy load images where possible
- Use `loading="lazy"` on iframes
- ErrorBoundaries isolate failures
- Vercel Speed Insights for monitoring

## Accessibility

- Use semantic HTML elements
- Add `aria-label` to icon-only buttons
- Ensure sufficient color contrast
- Support keyboard navigation
