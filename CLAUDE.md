# Claude Code Instructions

## Before Starting Any Task

1. **Read the context folder** - Always start by reading the documentation in `/context/`:
   - `ARCHITECTURE.md` - Project structure and patterns
   - `PURPOSE.md` - What this project is and its goals
   - `DESIGN_PRACTICES.md` - Coding conventions and style guidelines

2. **Verify context is current** - Check if the code matches the documentation. If there are discrepancies, ask before proceeding.

## When Implementing Changes

1. **Follow existing patterns** - Match the style and architecture documented in context
2. **Run tests** - After changes, run `npm test` to ensure nothing breaks
3. **Run build** - Verify with `npm run build` that TypeScript compiles
4. **Update context** - After successful implementation and testing, update the relevant context files if:
   - Architecture changed (new routes, components, patterns)
   - New conventions were established
   - Purpose or scope expanded

## Key Files to Know

- `src/config/constants.ts` - Centralized configuration (navigation, URLs, dates)
- `src/components/text/translations.json` - All translatable text (EN/DE)
- `src/types/index.ts` - TypeScript interfaces
- `src/index.tsx` - Route definitions
- `src/components/Header.tsx` - Navigation logic

## Commands

```bash
npm start        # Development server
npm test         # Run tests
npm run build    # Production build
npm run lint     # ESLint check
npm run format   # Prettier format
```

## Project-Specific Notes

- **Navigation:** Hybrid system with scroll sections (home page) and route pages (Team, Location)
- **i18n:** All user-facing text must have English AND German translations
- **Styling:** Use Tailwind utilities with custom `cos-*` colors from config
- **Cookie Consent:** Required for Google Maps embed on Location page
