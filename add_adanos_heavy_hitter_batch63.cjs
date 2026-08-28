const fs = require('fs');
const path = require('path');

const batch63Recipes = [
  // ADANOS HEAVY HITTER (NIGHT TRANSITION TONIC)
  {
    id: "rec_night_adanos_heavy_hitter",
    title: "Adanos Heavy Hitter (Leberreinigungs-Tonikum)",
    titleEN: "Adano's Heavy Hitter (Liver Cleansing Tonic)",
    mealName: "Adanos Heavy Hitter",
    mealNameEN: "Adano's Heavy Hitter",
    description: "Adanos sogenannter „Heavy Hitter“ ist ein starkes Tonikum, das speziell zur Leberreinigung eingesetzt wird. Muss exakt um Mitternacht eingenommen werden.",
    descriptionEN: "Adano's renowned 'Heavy Hitter' is a potent liver cleansing tonic. Must be taken precisely at midnight.",
    timeWindow: "Night Transition",
    diet: "Vegan",
    prepTimeMinutes: 3,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: "Einfach",
    cuisine: "Solar Nutrition Speziale",
    cuisineEN: "Solar Nutrition Special",
    ingredients: [
      { name: "Knoblauchzehe (frisch zerdrückt)", nameEN: "Garlic Clove (freshly crushed)", amount: "1 Stk." },
      { name: "Zitronensaft (frisch gepresst)", nameEN: "Lemon Juice (freshly squeezed)", amount: "0.5 Stk." },
      { name: "Bio-Olivenöl (kaltgepresst)", nameEN: "Extra Virgin Olive Oil", amount: "1 TL" }
    ],
    instructions: [
      "Die frische Knoblauchzehe fein zerdrücken oder pressen.",
      "Mit dem frisch gepressten Saft einer halben Zitrone und einem Teelöffel kaltgepresstem Bio-Olivenöl in ein kleines Glas geben.",
      "Gut verrühren und exakt um Mitternacht auf nüchternen Magen einnehmen."
    ],
    instructionsEN: [
      "Finely crush or press the fresh garlic clove.",
      "Combine in a small glass with freshly squeezed juice of half a lemon and 1 tsp extra virgin olive oil.",
      "Stir well and consume precisely at midnight on an empty stomach."
    ],
    tips: [
      "Verzehrfenster: 00:30 – 01:00 (Mitternacht)",
      "⏰ Einnahmezeitpunkt: Die Mischung muss exakt um Mitternacht eingenommen werden.",
      "⚠️ Wichtiger Warnhinweis: Sollte die Einnahme dieser Kombination zu Durchfall führen, wird ausdrücklich geraten, die Anwendung sofort abzubrechen!"
    ],
    tipsEN: [
      "Consumption window: 00:30 – 01:00 (Midnight)",
      "⏰ Timing: Must be consumed precisely at midnight.",
      "⚠️ Important Warning: If taking this combination causes diarrhea, immediately discontinue use!"
    ],
    tags: ["Night", "Adano", "Heavy Hitter", "Tonikum", "Leberreinigung", "Mitternacht", "Vegan"]
  },

  // DAWN TRANSITION (11:30 - 12:00)
  {
    id: "rec_dawn_feigen_walnuss_granola",
    title: "Feigen-Walnuss-Granola auf Dinkel-Joghurt",
    titleEN: "Fig & Walnut Granola over Spelt Yogurt",
    mealName: "Feigen-Walnuss Granola",
    mealNameEN: "Fig Walnut Granola",
    description: "Knusprig gebackene Dinkel-Haferflocken mit Feigen, Walnüssen, Mandelöl und Bio-Ahornsirup.",
    descriptionEN: "Crispy baked spelt & oat flakes with fresh figs, walnuts, almond oil, and maple syrup.",
    timeWindow: "Dawn Transition",
    diet: "Vegetarian",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Schweiz",
    cuisineEN: "Switzerland",
    ingredients: [
      { name: "Dinkelflocken", nameEN: "Spelt Flakes", amount: "100 g" },
      { name: "Frische Feigen (in Würfeln)", nameEN: "Fresh Figs (diced)", amount: "3 Stk." },
      { name: "Walnüsse (gehackt)", nameEN: "Walnuts (chopped)", amount: "35 g" },
      { name: "Bio-Ahornsirup", nameEN: "Organic Maple Syrup", amount: "2 EL" },
      { name: "Mandelöl", nameEN: "Almond Oil", amount: "1 EL" },
      { name: "Naturjoghurt", nameEN: "Plain Yogurt", amount: "200 g" }
    ],
    instructions: [
      "Dinkelflocken und gehackte Walnüsse mit Ahornsirup und Mandelöl in einer Pfanne 5 Minuten knusprig anrösten.",
      "Naturjoghurt in Schüsseln geben.",
      "Mit knusprigem Granola und frischen Feigenwürfeln belegen.",
      "Lauwarm oder abgekühlt genießen."
    ],
    instructionsEN: [
      "Toast spelt flakes and chopped walnuts with maple syrup and almond oil in a pan for 5 minutes until crispy.",
      "Divide yogurt between bowls.",
      "Top with crunchy granola and fresh fig cubes.",
      "Serve warm or cooled."
    ],
    tips: [
      "Verzehrfenster: 11:30 – 12:00 (Übergang Zone 1 ➔ 2)",
      "Feigen & Walnüsse (Baum) verbinden sich perfekt mit Dinkel & Joghurt (Zone 2)."
    ],
    tipsEN: [
      "Consumption window: 11:30 – 12:00 (Transition Zone 1 ➔ 2)",
      "Figs & walnuts (tree) pair perfectly with spelt & yogurt (Zone 2)."
    ],
    tags: ["Dawn", "Granola", "Feigen", "Walnuss", "Joghurt"]
  },
  {
    id: "rec_dawn_halloumi_avocado_apfel_salat",
    title: "Gebratener Halloumi auf Avocado-Apfel-Salat mit Pistazien",
    titleEN: "Pan-Grilled Halloumi on Avocado-Apple Salad with Pistachios",
    mealName: "Halloumi-Avocado-Apfel Salat",
    mealNameEN: "Halloumi Avocado Apple Salad",
    description: "Goldbraun gebratener Halloumi serviert auf knackigem Salat mit dünnen Apfelscheiben, Avocadowürfeln und gerösteten Pistazien.",
    descriptionEN: "Golden grilled halloumi served over fresh salad greens with thin apple slices, avocado cubes, and roasted pistachios.",
    timeWindow: "Dawn Transition",
    diet: "Vegetarian",
    prepTimeMinutes: 12,
    cookTimeMinutes: 6,
    servings: 2,
    difficulty: "Einfach",
    cuisine: "Zypern",
    cuisineEN: "Cyprus",
    ingredients: [
      { name: "Halloumi (in Scheiben)", nameEN: "Halloumi Cheese (sliced)", amount: "200 g" },
      { name: "Avocado (gewürfelt)", nameEN: "Avocado (diced)", amount: "1 Stk." },
      { name: "Äpfel (in feinen Scheiben)", nameEN: "Apples (thinly sliced)", amount: "1 Stk." },
      { name: "Pistazien (gehackt)", nameEN: "Pistachios (chopped)", amount: "30 g" },
      { name: "Bio-Olivenöl", nameEN: "Extra Virgin Olive Oil", amount: "2 EL" },
      { name: "Zitronensaft", nameEN: "Lemon Juice", amount: "1 EL" },
      { name: "Diamond Crystal Kosher Salz", nameEN: "Diamond Crystal Kosher Salt", amount: "0.5 TL" }
    ],
    instructions: [
      "Halloumi-Scheiben ohne Fett in einer beschichteten Pfanne von beiden Seiten goldbraun anbraten.",
      "Salat, Avocadowürfel und Apfelscheiben in Schüsseln verteilen.",
      "Warme Halloumi-Scheiben darauf anrichten und mit gehackten Pistazien bestreuen.",
      "Mit Olivenöl und Zitronensaft beträufeln."
    ],
    instructionsEN: [
      "Sear halloumi slices in a dry non-stick skillet for 2-3 minutes per side until golden brown.",
      "Toss salad greens, avocado, and apple slices into bowls.",
      "Top with warm halloumi and sprinkle with pistachios.",
      "Drizzle with olive oil and lemon juice."
    ],
    tips: [
      "Verzehrfenster: 11:30 – 12:00 (Übergang Zone 1 ➔ 2)",
      "Der leicht salzige Halloumi ergänzt die Frische von Apfel & Avocado."
    ],
    tipsEN: [
      "Consumption window: 11:30 – 12:00 (Transition Zone 1 ➔ 2)",
      "Slightly salty halloumi complements the freshness of apple & avocado."
    ],
    tags: ["Dawn", "Halloumi", "Avocado", "Apfel", "Pistazien"]
  },

  // DUSK TRANSITION (18:30 - 19:00)
  {
    id: "rec_dusk_lachs_suesskartoffel_spinat",
    title: "Lachsfilet auf Süßkartoffel-Püree mit Spinat & Knoblauch",
    titleEN: "Seared Salmon Filet over Sweet Potato Mash with Garlic Spinach",
    mealName: "Lachs-Süßkartoffel Püree",
    mealNameEN: "Salmon Sweet Potato Mash",
    description: "Kross gebratenes Lachsfilet auf samtigem Süßkartoffelpüree mit frischem Knoblauch-Spinat in Ghee.",
    descriptionEN: "Crispy seared salmon filet served over velvety sweet potato mash with garlic spinach sauteed in ghee.",
    timeWindow: "Dusk Transition",
    diet: "Pescetarian",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Mittel",
    cuisine: "Skandinavien",
    cuisineEN: "Scandinavia",
    ingredients: [
      { name: "Lachsfilet", nameEN: "Salmon Filet", amount: "300 g" },
      { name: "Süßkartoffeln (gewürfelt)", nameEN: "Sweet Potatoes (diced)", amount: "400 g" },
      { name: "Blattspinat (frisch)", nameEN: "Fresh Spinach", amount: "150 g" },
      { name: "Knoblauch (gehackt)", nameEN: "Garlic (minced)", amount: "2 Zehen" },
      { name: "Ghee", nameEN: "Ghee", amount: "2 EL" },
      { name: "Diamond Crystal Kosher Salz", nameEN: "Diamond Crystal Kosher Salt", amount: "1 TL" }
    ],
    instructions: [
      "Süßkartoffeln in Salzwasser 15 Minuten weich kochen, abgießen und mit 1 EL Ghee fein pürieren.",
      "Spinat mit gehacktem Knoblauch in 0.5 EL Ghee 3 Minuten zusammenfallen lassen.",
      "Lachsfilet salzen und in restlichem Ghee 3-4 Minuten pro Seite braten.",
      "Lachs auf Süßkartoffelpüree und Knoblauch-Spinat servieren."
    ],
    instructionsEN: [
      "Boil sweet potatoes in salted water for 15 minutes, drain, and mash with 1 tbsp ghee until smooth.",
      "Sauté spinach and minced garlic in 0.5 tbsp ghee for 3 minutes.",
      "Season salmon with salt and sear in remaining ghee for 3-4 minutes per side.",
      "Serve salmon over sweet potato mash and garlic spinach."
    ],
    tips: [
      "Verzehrfenster: 18:30 – 19:00 (Übergang Zone 2 ➔ 3)",
      "Spinat (Midday) harmonisiert perfekt mit Lachs, Knoblauch & Süßkartoffel (Evening)."
    ],
    tipsEN: [
      "Consumption window: 18:30 – 19:00 (Transition Zone 2 ➔ 3)",
      "Spinach (Midday) harmonizes perfectly with salmon, garlic & sweet potato (Evening)."
    ],
    tags: ["Dusk", "Lachs", "Süßkartoffel", "Spinat", "Pescetarisch"]
  }
];

// Append to preloadedRecipes.ts
const preloadedPath = path.join(__dirname, 'src/data/preloadedRecipes.ts');
let content = fs.readFileSync(preloadedPath, 'utf8');

const match = content.match(/export const PRELOADED_RECIPES: Recipe\[\] = (\[[\s\S]*\]);/);
let recipes = JSON.parse(match[1]);

batch63Recipes.forEach(nr => {
  if (!recipes.some(r => r.id === nr.id)) {
    recipes.push(nr);
  }
});

const newContent = `import type { Recipe } from '../types/solar';\n\nexport const PRELOADED_RECIPES: Recipe[] = ${JSON.stringify(recipes, null, 2)};\n`;
fs.writeFileSync(preloadedPath, newContent, 'utf8');
console.log(`Successfully added Adanos Heavy Hitter and Batch 63 recipes! Total database size: ${recipes.length}`);
