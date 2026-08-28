const fs = require('fs');
const path = require('path');

const batch21Recipes = [
  {
    id: "mid-de-34",
    title: "Deutscher Schinken-Maccaroni-Auflauf „Solar Midday“ mit Strauchtomaten",
    titleEN: "German Baked Ham & Macaroni 'Solar Midday' with Tomatoes",
    mealName: "German Baked Ham & Macaroni",
    description: "Saftiger Würfelschinken und Dinkel-Maccaroni überbacken in sämiger Strauchtomatensauce mit Strauchpaprika in Ghee.",
    descriptionEN: "Diced pork ham and spelt macaroni baked in a rich vine tomato and bell pepper sauce with ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Deutsch",
    cuisineEN: "German",
    isPreloaded: true,
    tags: ["Deutsch", "Schinken", "Pasta", "Tomaten", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "200g Kochschinken, gewürfelt", amountEN: "200g diced ham" },
      { name: "Semolina Durum Wheat Pasta", nameEN: "Semolina Durum Wheat Pasta", amount: "180g Dinkel-Maccaroni", amountEN: "180g spelt macaroni" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "200g pürierte Strauchtomaten", amountEN: "200g puréed vine tomatoes" },
      { name: "Paprika", nameEN: "Bell Pepper", amount: "1 rote Strauchpaprika", amountEN: "1 red bell pepper" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Dinkel-Maccaroni in Salzwasser al dente kochen.",
      "Schinkenwürfel, pürierte Strauchtomaten und Paprika in Ghee vermengen.",
      "In eine Auflaufform geben und 15 Minuten bei 200°C überbacken."
    ],
    instructionsEN: [
      "Boil spelt macaroni in salted water until al dente.",
      "Mix diced ham, puréed vine tomatoes, and bell peppers with ghee.",
      "Transfer to a baking dish and bake at 200°C for 15 minutes."
    ],
    tips: ["Auflauf-Bestseller der deutschen Küche am Mittag."],
    tipsEN: ["Top German baked pasta dish tailored for midday physical stamina."]
  },
  {
    id: "mid-it-42",
    title: "Italienisches Schinken-Riso alla Parmigiana „Solar Midday“ mit Strauchtomaten & Basmati-Reis",
    titleEN: "Italian Ham & Tomato Riso 'Solar Midday' with Basmati Rice",
    mealName: "Italian Ham & Tomato Riso",
    description: "Klassisches Risotto-Gericht aus feinem Kochschinken und pürierten Strauchtomaten in Ghee auf Basmati-Reis.",
    descriptionEN: "Classic Italian rice dish made with fine diced ham and puréed vine tomatoes cooked in ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Italienisch",
    cuisineEN: "Italian",
    isPreloaded: true,
    tags: ["Italienisch", "Schinken", "Tomaten", "Reis", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "150g feiner Kochschinken, gewürfelt", amountEN: "150g fine diced ham" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "200g pürierte Strauchtomaten", amountEN: "200g puréed vine tomatoes" },
      { name: "Weißer Reis", nameEN: "White Rice", amount: "150g Basmati-Reis", amountEN: "150g basmati rice" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Kochschinken in Ghee schwenken.",
      "Pürierte Strauchtomaten und Basmati-Reis dazugeben, mit Wasser 18 Minuten cremig garen.",
      "Heiß servieren."
    ],
    instructionsEN: [
      "Sauté diced ham in ghee.",
      "Add puréed vine tomatoes and basmati rice, simmering with hot water for 18 minutes until creamy.",
      "Serve piping hot."
    ],
    tips: ["Risotto-Favorit der italienischen Küche für den Mittag."],
    tipsEN: ["Popular Italian rice classic tailored for the midday window."]
  },
  {
    id: "mid-fr-13",
    title: "Französisches Schinken-Omelett „Solar Midday“ mit Strauchtomaten & Basilikum",
    titleEN: "French Ham Omelette 'Solar Midday' with Tomatoes & Basil",
    mealName: "French Ham Omelette with Basil",
    description: "Cremiges Hühnereier-Omelett in Ghee gebraten, gefüllt mit saftigem Kochschinken, frischen Strauchtomaten und Basilikum.",
    descriptionEN: "Fluffy egg omelette pan-fried in ghee filled with juicy ham strips, vine tomatoes, and fresh basil.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Französisch",
    cuisineEN: "French",
    isPreloaded: true,
    tags: ["Französisch", "Schinken", "Eier", "Tomaten", "Mittag"],
    ingredients: [
      { name: "Hühnereier", nameEN: "Eggs", amount: "4 frische Hühnereier", amountEN: "4 fresh eggs" },
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "120g Kochschinken, in Streifen", amountEN: "120g cooked ham, sliced" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "2 frische Strauchtomaten, gewürfelt", amountEN: "2 fresh vine tomatoes, diced" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Eier verquirlen und in heißen Ghee in der Pfanne stocken lassen.",
      "Schinken, Strauchtomaten und Basilikum einfüllen und einklappen.",
      "Warm genießen."
    ],
    instructionsEN: [
      "Whisk eggs smoothly and pour into hot ghee in a skillet.",
      "Fill with sliced ham, diced tomatoes, and fresh basil, then fold over.",
      "Serve warm."
    ],
    tips: ["Bistro-Klassiker der französischen Küche für das Mittagsfenster."],
    tipsEN: ["Classic French bistro dish tailored for midday physical stamina."]
  },
  {
    id: "mid-es-14",
    title: "Spanischer Schinken-Paprika-Reis „Solar Midday“ mit Serrano-Schinken & Basmati-Reis",
    titleEN: "Spanish Serrano Ham Rice 'Solar Midday' with Peppers & Basmati Rice",
    mealName: "Spanish Serrano Ham Rice",
    description: "Kross gebratener Serrano-Schinken im Pfännchen mit roter Strauchpaprika auf Basmati-Reis in Ghee.",
    descriptionEN: "Crispy Serrano ham strips stir-fried with red bell peppers served over basmati rice in ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Spanisch",
    cuisineEN: "Spanish",
    isPreloaded: true,
    tags: ["Spanisch", "Schinken", "Paprika", "Reis", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "120g Serrano-Schinken, gewürfelt", amountEN: "120g diced Serrano ham" },
      { name: "Paprika", nameEN: "Bell Pepper", amount: "1 rote Strauchpaprika", amountEN: "1 red bell pepper" },
      { name: "Weißer Reis", nameEN: "White Rice", amount: "150g Basmati-Reis", amountEN: "150g basmati rice" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Serrano-Schinken und Paprikawürfel in Ghee kross anbraten.",
      "Basmati-Reis dazu kochen.",
      "Schinken-Paprika-Mischung auf dem Reis servieren."
    ],
    instructionsEN: [
      "Sauté diced Serrano ham and bell peppers in ghee until crisp.",
      "Cook basmati rice.",
      "Serve ham mixture over warm basmati rice."
    ],
    tips: ["Tapas-Hit der spanischen Küche für das Mittagsfenster."],
    tipsEN: ["Spanish tapas hit tailored for midday energy."]
  },
  {
    id: "mid-de-35",
    title: "Deutscher Schinken-Spätzle-Auflauf „Solar Midday“ mit Strauchtomaten",
    titleEN: "German Baked Ham & Spelt Spätzle 'Solar Midday' with Tomatoes",
    mealName: "German Baked Ham & Spelt Spätzle",
    description: "Hausgemachte Dinkelgrieß-Spätzle überbacken mit saftigen Schinkenwürfeln und pürierten Strauchtomaten in Ghee.",
    descriptionEN: "Homemade spelt semolina spätzle baked with diced ham and puréed vine tomatoes in ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Deutsch",
    cuisineEN: "German",
    isPreloaded: true,
    tags: ["Deutsch", "Schinken", "Spätzle", "Tomaten", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "180g Kochschinken, gewürfelt", amountEN: "180g diced ham" },
      { name: "Semolina Durum Wheat Pasta", nameEN: "Semolina Durum Wheat Pasta", amount: "180g Dinkelgrieß-Spätzle", amountEN: "180g spelt semolina spätzle" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "200g pürierte Strauchtomaten", amountEN: "200g puréed vine tomatoes" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Dinkelspätzle kochen.",
      "Schinkenwürfel und Tomatensauce unter die Spätzle mischen.",
      "In eine Auflaufform geben und 15 Minuten bei 200°C backen."
    ],
    instructionsEN: [
      "Boil spelt spätzle in salted water.",
      "Mix diced ham and puréed vine tomatoes into spätzle.",
      "Transfer to a baking dish and bake at 200°C for 15 minutes."
    ],
    tips: ["Spätzle-Bestseller der deutschen Küche für den Mittag."],
    tipsEN: ["Popular German spätzle dish providing sustained physical endurance."]
  },
  {
    id: "mid-it-43",
    title: "Italienische Schinken-Penne „Solar Midday“ mit Strauch-Auberginen & Tomaten",
    titleEN: "Italian Ham Penne 'Solar Midday' with Vine Eggplant & Tomatoes",
    mealName: "Italian Ham Penne with Eggplant",
    description: "Herzhafte Dinkel-Penne mit Kochschinkenwürfeln und gebratenen Strauch-Auberginen in Strauchtomatensauce in Ghee.",
    descriptionEN: "Hearty spelt penne tossed with diced ham, sautéed vine eggplants, and puréed vine tomato sauce in ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Italienisch",
    cuisineEN: "Italian",
    isPreloaded: true,
    tags: ["Italienisch", "Schinken", "Pasta", "Auberginen", "Tomaten", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "150g Kochschinken, gewürfelt", amountEN: "150g diced ham" },
      { name: "Aubergine", nameEN: "Eggplant", amount: "1 kleine Strauch-Aubergine", amountEN: "1 small eggplant" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "200g pürierte Strauchtomaten", amountEN: "200g puréed vine tomatoes" },
      { name: "Semolina Durum Wheat Pasta", nameEN: "Semolina Durum Wheat Pasta", amount: "180g Dinkel-Penne", amountEN: "180g spelt penne" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Auberginenwürfel und Schinken in Ghee anbraten.",
      "Pürierte Strauchtomaten dazugeben und 10 Minuten köcheln.",
      "Dinkel-Penne kochen und unter die Sauce heben."
    ],
    instructionsEN: [
      "Sauté diced eggplant and ham in ghee until golden.",
      "Add puréed vine tomatoes, simmering for 10 minutes.",
      "Boil spelt penne al dente and toss into the sauce."
    ],
    tips: ["Herzhafte italienische Pasta am Mittag."],
    tipsEN: ["Hearty Italian pasta dish tailored for midday physical stamina."]
  },
  {
    id: "mid-mx-18",
    title: "Mexikanischer Schinken-Fajita-Topf „Solar Midday“ mit Strauchtomaten & Basmati-Reis",
    titleEN: "Mexican Ham Fajita Pot 'Solar Midday' with Tomatoes & Basmati Rice",
    mealName: "Mexican Ham Fajita Pot",
    description: "Kross gebratene Schinkenwürfel mit roter Strauchpaprika und Strauchtomaten auf Basmati-Reis in Ghee.",
    descriptionEN: "Sautéed ham cubes cooked with red bell peppers and vine tomatoes over basmati rice in ghee.",
    timeWindow: "Midday",
    diet: "Omnivore",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Mexikanisch",
    cuisineEN: "Mexican",
    isPreloaded: true,
    tags: ["Mexikanisch", "Schinken", "Tomaten", "Reis", "Mittag"],
    ingredients: [
      { name: "Schinken", nameEN: "Ham (Pork)", amount: "200g Kochschinken, gewürfelt", amountEN: "200g diced ham" },
      { name: "Paprika", nameEN: "Bell Pepper", amount: "1 rote Strauchpaprika", amountEN: "1 red bell pepper" },
      { name: "Tomaten", nameEN: "Tomatoes", amount: "2 frische Strauchtomaten", amountEN: "2 fresh vine tomatoes" },
      { name: "Weißer Reis", nameEN: "White Rice", amount: "150g Basmati-Reis", amountEN: "150g basmati rice" },
      { name: "Ghee", nameEN: "Ghee (Clarified Butter)", amount: "2 EL Ghee", amountEN: "2 tbsp ghee" }
    ],
    instructions: [
      "Schinkenwürfel in Ghee anbraten.",
      "Paprikastreifen und Tomaten dazugeben, 8 Minuten dünsten.",
      "Basmati-Reis kochen und heiß servieren."
    ],
    instructionsEN: [
      "Sauté diced ham in ghee.",
      "Add bell pepper strips and tomatoes, cooking for 8 minutes.",
      "Cook basmati rice and serve hot."
    ],
    tips: ["Bestseller-Fajita-Gericht für volle Mittagsenergie."],
    tipsEN: ["Top fajita dish providing full midday physical stamina."]
  }
];

// Read preloadedRecipes.ts
const preloadedPath = path.join(__dirname, 'preloadedRecipes.ts');
let content = fs.readFileSync(preloadedPath, 'utf8');

const match = content.match(/export const PRELOADED_RECIPES: Recipe\[\] = (\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not find PRELOADED_RECIPES array");
  process.exit(1);
}

const existingRecipes = JSON.parse(match[1]);
const updatedRecipes = [...existingRecipes, ...batch21Recipes];

const newContent = `import type { Recipe } from '../types/solar';\n\nexport const PRELOADED_RECIPES: Recipe[] = ${JSON.stringify(updatedRecipes, null, 2)};\n`;

fs.writeFileSync(preloadedPath, newContent, 'utf8');
console.log(`Successfully appended ${batch21Recipes.length} new recipes to preloadedRecipes.ts! Total recipes now: ${updatedRecipes.length}`);

// Update all 18 non-base locale files under src/i18n/locales/<code>/recipes.ts
const localesDir = path.join(__dirname, '../i18n/locales');
const localeCodes = fs.readdirSync(localesDir);

localeCodes.forEach(code => {
  const filePath = path.join(localesDir, code, 'recipes.ts');
  if (!fs.existsSync(filePath)) return;

  let fileStr = fs.readFileSync(filePath, 'utf8');
  
  const lastBrace = fileStr.lastIndexOf('};');
  if (lastBrace === -1) return;

  let addedEntries = [];
  batch21Recipes.forEach(r => {
    if (fileStr.includes(`"${r.id}"`)) return;

    addedEntries.push(`  "${r.id}": {\n    "title": "${r.titleEN.replace(/"/g, '\\"')}",\n    "description": "${r.descriptionEN.replace(/"/g, '\\"')}",\n    "cuisine": "${r.cuisineEN.replace(/"/g, '\\"')}",\n    "instructions": ${JSON.stringify(r.instructionsEN)},\n    "tips": ${JSON.stringify(r.tipsEN)}\n  }`);
  });

  if (addedEntries.length > 0) {
    const updatedFileStr = fileStr.slice(0, lastBrace).trimEnd() + ',\n' + addedEntries.join(',\n') + '\n};\n';
    fs.writeFileSync(filePath, updatedFileStr, 'utf8');
    console.log(`Updated ${code}/recipes.ts with ${addedEntries.length} entries.`);
  }
});
