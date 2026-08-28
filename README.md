# ☀️ SolarNutrition

A modern **React 19 + TypeScript + Vite** web application (installable as a Progressive Web App) implementing the **Solar Nutrition** diet system based on the teachings of Adano Ley and Atom Bergstrom.

---

## 🌟 Key Features

- **True Solar Time Engine:** Calculates exact solar time based on geographical longitude and the Equation of Time (EOT).
- **Circadian Growth Zone Windows:**
  - **Morning Window (00:00–12:00 True Solar Time):** Tree foods (fruits, nuts, tree oils, coffee).
  - **Midday Window (12:00–18:00):** Bush & vine foods (≥ 10 cm high), grains, land animals.
  - **Evening Window (18:00–24:00):** Underground roots, fungi, water/sea foods.
- **Transition Bridges (Dawn, Dusk, Night):** Dedicated transition windows allowing cross-zone combinations.
- **Lunar Week Mode:** Automatically adapts food combination rules around the full moon.
- **Combination Checker:** Live meal compatibility validator.
- **Recipe Catalog & Favorites:** Searchable database of 700+ Solar Nutrition compliant recipes with custom filtering & shopping list integration.
- **Solar AI Chef:** AI-powered chef assistant backed by Google Gemini for custom recipe creation & advice.
- **20 Languages Supported:** Complete internationalization (i18n) for global access.
- **PWA Ready:** Installable offline web app with Service Worker caching.

---

## 🛠️ Technology Stack

- **Framework:** React 19, TypeScript (~6.0)
- **Build Tool:** Vite 8 (`@vitejs/plugin-react`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`)
- **Icons:** `lucide-react`
- **Linter:** `oxlint`
- **Backend / API:** Static browser-first app with a lightweight PHP proxy (`public/api/ai-proxy.php`) for server-side Gemini API forwarding.

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Vite dev server (runs on http://localhost:5175)
npm run dev
```

### Build & Verification

```bash
# Type check & build production bundle to dist/
npm run build

# Lint code with oxlint
npm run lint

# Preview production build locally
npm run preview
```

---

## 📜 License

© Stefan Hodrius — SolarNutrition is released under the **GNU General Public License (GPL)**. Free to use, adapt, and distribute with proper attribution and under the same license terms.
