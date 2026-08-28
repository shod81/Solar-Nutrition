const fs = require('fs');
const path = require('path');

// 1. Update de.ts
const dePath = path.join(__dirname, 'src/i18n/de.ts');
let deStr = fs.readFileSync(dePath, 'utf8');
deStr = deStr.replace(/filterDawn:\s*'[^']*'/, `filterDawn: '🌅 Dawn (11:30 – 12:00)'`);
deStr = deStr.replace(/filterDusk:\s*'[^']*'/, `filterDusk: '🌆 Dusk (18:30 – 19:00)'`);
deStr = deStr.replace(/dawnTitle:\s*'[^']*'/, `dawnTitle: '🌅 Dawn / Bridge 1 (11:30 – 12:00 Solarzeit)'`);
deStr = deStr.replace(/dawnDesc:\s*'[^']*'/, `dawnDesc: 'Übergang von Zone 1 (Morning) zu Zone 2 (Midday). In diesem halbstündigen Zeitfenster (11:30–12:00) dürfen Baumnahrungsmittel (Morning) mit Strauchgemüse, Getreide oder Landtieren (Midday) kombiniert werden.'`);
deStr = deStr.replace(/duskTitle:\s*'[^']*'/, `duskTitle: '🌆 Dusk / Bridge 2 (18:30 – 19:00 Solarzeit)'`);
deStr = deStr.replace(/duskDesc:\s*'[^']*'/, `duskDesc: 'Übergang von Zone 2 (Midday) zu Zone 3 (Evening). In diesem halbstündigen Zeitfenster (18:30–19:00) dürfen Strauchgemüse/Getreide (Midday) mit Erdwurzeln, Pilzen und Meeresfrüchten (Evening) kombiniert werden.'`);
fs.writeFileSync(dePath, deStr, 'utf8');

// 2. Update en.ts
const enPath = path.join(__dirname, 'src/i18n/en.ts');
let enStr = fs.readFileSync(enPath, 'utf8');
enStr = enStr.replace(/filterDawn:\s*'[^']*'/, `filterDawn: '🌅 Dawn (11:30 – 12:00)'`);
enStr = enStr.replace(/filterDusk:\s*'[^']*'/, `filterDusk: '🌆 Dusk (18:30 – 19:00)'`);
enStr = enStr.replace(/dawnTitle:\s*'[^']*'/, `dawnTitle: '🌅 Dawn / Bridge 1 (11:30 – 12:00 Solar Time)'`);
enStr = enStr.replace(/dawnDesc:\s*'[^']*'/, `dawnDesc: 'Transition from Zone 1 (Morning) to Zone 2 (Midday). During this half-hour window (11:30–12:00), tree foods (Morning) can be combined with bush/vine foods, grains, or land animals (Midday).'`);
enStr = enStr.replace(/duskTitle:\s*'[^']*'/, `duskTitle: '🌆 Dusk / Bridge 2 (18:30 – 19:00 Solar Time)'`);
enStr = enStr.replace(/duskDesc:\s*'[^']*'/, `duskDesc: 'Transition from Zone 2 (Midday) to Zone 3 (Evening). During this half-hour window (18:30–19:00), bush/vine foods/grains (Midday) can be combined with root vegetables, fungi, and seafood (Evening).'`);
fs.writeFileSync(enPath, enStr, 'utf8');

console.log("Updated de.ts and en.ts!");

// 3. Update all locale ui.ts files
const localesDir = path.join(__dirname, 'src/i18n/locales');
const localeCodes = fs.readdirSync(localesDir);

localeCodes.forEach(code => {
  const uiFilePath = path.join(localesDir, code, 'ui.ts');
  if (fs.existsSync(uiFilePath)) {
    let uiStr = fs.readFileSync(uiFilePath, 'utf8');
    uiStr = uiStr.replace(/"filterDawn":\s*"[^"]*"/, `"filterDawn": "🌅 Dawn (11:30 – 12:00)"`);
    uiStr = uiStr.replace(/"filterDusk":\s*"[^"]*"/, `"filterDusk": "🌆 Dusk (18:30 – 19:00)"`);
    fs.writeFileSync(uiFilePath, uiStr, 'utf8');
  }
});
console.log("Updated all 18 locale ui.ts files!");

// 4. Update preloadedRecipes.ts and locale recipes.ts
const preloadedPath = path.join(__dirname, 'src/data/preloadedRecipes.ts');
let content = fs.readFileSync(preloadedPath, 'utf8');

const match = content.match(/export const PRELOADED_RECIPES: Recipe\[\] = (\[[\s\S]*\]);/);
let recipes = JSON.parse(match[1]);

recipes.forEach(r => {
  if (r.timeWindow === 'Dawn Transition') {
    if (r.tips) {
      r.tips = r.tips.map(t => t.replace(/11:30 – 12:30/g, '11:30 – 12:00'));
    }
    if (r.tipsEN) {
      r.tipsEN = r.tipsEN.map(t => t.replace(/11:30 – 12:30/g, '11:30 – 12:00'));
    }
  } else if (r.timeWindow === 'Dusk Transition') {
    if (r.tips) {
      r.tips = r.tips.map(t => t.replace(/18:00 – 19:00/g, '18:30 – 19:00'));
    }
    if (r.tipsEN) {
      r.tipsEN = r.tipsEN.map(t => t.replace(/18:00 – 19:00/g, '18:30 – 19:00'));
    }
  }
});

const newContent = `import type { Recipe } from '../types/solar';\n\nexport const PRELOADED_RECIPES: Recipe[] = ${JSON.stringify(recipes, null, 2)};\n`;
fs.writeFileSync(preloadedPath, newContent, 'utf8');
console.log("Updated preloadedRecipes.ts!");

localeCodes.forEach(code => {
  const recipeFilePath = path.join(localesDir, code, 'recipes.ts');
  if (fs.existsSync(recipeFilePath)) {
    let fileStr = fs.readFileSync(recipeFilePath, 'utf8');
    fileStr = fileStr.replace(/11:30 – 12:30/g, '11:30 – 12:00').replace(/18:00 – 19:00/g, '18:30 – 19:00');
    fs.writeFileSync(recipeFilePath, fileStr, 'utf8');
  }
});
console.log("Updated all 18 locale recipes.ts files!");
