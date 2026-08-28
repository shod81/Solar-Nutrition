# AGENTS.md — SolarNutrition

## Project overview

SolarNutrition is a single-page **React 19 + TypeScript + Vite** web app (also installable as a PWA) that implements the "Solar Nutrition" diet system (based on the teachings of Adano Ley / Atom Bergstrom). The core idea: foods are assigned to time-of-day windows by their growth zone —

- **Morning (00:00–12:00 true solar time):** tree foods (fruits, nuts, tree oils)
- **Midday (12:00–18:00):** bush/vine foods, grains, land animals
- **Evening (18:00–24:00):** underground/water foods, fungi, seafood
- Plus Dawn/Dusk transition windows, a "lunar week" mode that shifts rules around the full moon, and special/forbidden combination rules.

The app lets the user set a location, computes **True Solar Time** for it (equation of time + longitude correction), shows which foods are currently allowed, offers a meal **combination checker**, a **recipe catalog** with favorites, a rules guide, and an **AI chef** chat backed by Google Gemini.

There is no backend of its own except a small PHP proxy (`public/api/ai-proxy.php`) intended for shared hosting: it forwards prompts to the Gemini API so the API key is never shipped to the client. All other state lives in the browser (`localStorage`).

## Technology stack

- **React 19**, TypeScript (~6.0), Vite 8 with `@vitejs/plugin-react` (Oxc-based)
- **Tailwind CSS 4** via `@tailwindcss/vite` (no `tailwind.config.js`; entry point is `@import "tailwindcss"` in `src/index.css`)
- **lucide-react** for icons
- **oxlint** for linting (`.oxlintrc.json`); there is **no ESLint and no test framework**
- PWA: `public/manifest.json` + `public/sw.js` (network-first service worker), registered inline in `index.html`
- PHP proxy in `public/api/` for the Gemini API (deployed as static file alongside the built site)

## Build and development commands

```bash
npm install        # install dependencies
npm run dev        # Vite dev server on port 5175 (configured in vite.config.ts)
npm run build      # tsc -b (type check) && vite build → dist/
npm run lint       # oxlint
npm run preview    # serve the production build locally
```

Note: the PHP proxy (`public/api/ai-proxy.php`) is copied verbatim into `dist/` by Vite's public-dir handling; it only works when `dist/` is served by a PHP-capable host. In dev, the AI chef falls back to calling the Gemini API directly with a user-supplied API key (`src/components/SolarAiChefModal.tsx`).

## Code organization

- `src/main.tsx` — entry; wraps `<App />` in `<LanguageProvider>`.
- `src/App.tsx` — top-level state and layout: navigation tabs (`dashboard`, `checker`, `recipes`, `ai`, `guide`), current time ticker (1 s interval), location + favorites persisted to `localStorage` (keys `solar-nutrition-location`, `solar-nutrition-favorites`), and derived `trueSolarTime` / `solarPhase` / `lunarCycle` / `effectiveWindowId` memos.
- `src/components/` — presentational/feature components, one per file: `Header`, `Navigation`, `TimeWindowView`, `CombinationChecker`, `RecipeCatalog`, `RulesGuide`, `SolarAiChefModal`, `FoodDetailModal`, `LocationModal`, `LanguageSelector`, `InstallAppButton`.
- `src/data/` — domain data as typed TS constants:
  - `solarDatabase.ts` — `SOLAR_NUTRITION_DATABASE`: the four time windows with categories and food items (German `name` + English `nameEN`).
  - `preloadedRecipes.ts` — built-in recipes (~3100 lines).
- `src/types/solar.ts` — all domain types (`WindowId`, `FoodItem`, `TimeWindow`, `SolarPhase`, `LunarCycle`, `Recipe`, …). Start here when touching domain logic.
- `src/utils/` — pure logic, no React:
  - `solarCalculator.ts` — equation of time, True Solar Time from longitude/time zone, solar phase.
  - `lunarCalculator.ts` — lunar phase, lunar-week detection, effective window shifts.
  - `combinationChecker.ts` — food combination rules.
- `src/i18n/` — custom i18n (no library): `LanguageProvider.tsx` + React context (`I18nContext.ts`), `useTranslation()` hook. `de.ts` and `en.ts` are the base UI dictionaries; **20 languages** are supported (see `languages.ts`), the other 18 live in `src/i18n/locales/<code>/{ui,foods,recipes}.ts`. Fallback chain is always: current locale → English fields (`nameEN`, …) → German base. Locale is persisted in `localStorage` (`solar_nutrition_locale`) and auto-detected from `navigator.languages` (note the non-standard codes `dk` for Danish and `se` for Swedish, mapped from `da`/`sv`). RTL languages (`ar`, `ur`) set `document.dir`.

## Conventions

- **Language of artifacts:** code, comments and identifiers are in **English**; domain content (food names, recipes, UI strings) is primarily **German with English fallbacks** (`name`/`nameEN` pattern). Keep that pattern when adding data — every user-facing string needs a German value plus English fallback, and ideally entries in the locale dictionaries.
- **Types:** strict-ish config — `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`. Use `import type` for type-only imports; no enums or parameter properties (erasable syntax only).
- **State:** plain React state in `App.tsx`, passed down as props; no state-management library. Persisted state goes to `localStorage` with `try/catch` around `JSON.parse`.
- **Styling:** Tailwind utility classes inline in JSX; a few custom animations (`animate-fadeIn`, `animate-scaleUp`, `animate-spin-slow`) are defined in `src/index.css` under `@layer utilities`.
- **Linting:** `npm run lint` (oxlint, plugins `react`, `typescript`, `oxc`; `react/rules-of-hooks` is an error). `backups/` is lint-ignored — it contains a snapshot of the old de/en-only version and must not be edited.

## Testing

There is **no test framework and no tests** in this project. Verification = `npm run build` (type check via `tsc -b` must pass) + `npm run lint` + manual testing in the dev server. Keep it that way unless asked otherwise.

## Deployment

- `npm run build` produces `dist/`, which is deployed as static files to a PHP-capable shared host (the `api/ai-proxy.php` proxy requires PHP).
- The Gemini API key must be provided server-side via the `GEMINI_API_KEY` environment variable or a `config.php` next to the proxy (see `public/api/config.example.php`). **Never commit `config.php` or any API key.**
- When changing cached assets, bump `CACHE_NAME` in `public/sw.js` so old caches are invalidated.
