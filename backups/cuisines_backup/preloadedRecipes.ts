/**
 * (C) Stefan Hodrius - Die Solar Timing App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 */

import type { Recipe } from '../types/solar';

export const PRELOADED_RECIPES: Recipe[] = [
  // ==========================================
  // MORNING RECIPES (00:00 - 12:00 Solarzeit) - TREE FOODS
  // ==========================================
  {
    id: 'morn-01',
    title: 'Sonnenaufgang Obst-Schale mit Ahornsirup & Kakaonibs',
    titleEN: 'Sunrise Orchard Bowl with Maple Syrup & Cacao Nibs',
    mealName: 'Sunrise Orchard Bowl',
    description: 'Eine vitalisierende Fruchtschale aus süßen Äpfeln, Pfirsichen, Banane und knackigen Mandeln, abgerundet mit Ahornsirup und dunklen Kakaonibs.',
    descriptionEN: 'A vitalising fruit bowl of sweet apples, peaches, banana and crunchy almonds, finished with maple syrup and dark cacao nibs.',
    timeWindow: 'Morning',
    diet: 'Vegan',
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'International',
    cuisineEN: 'International',
    isPreloaded: true,
    tags: ['Schnell', 'Rohkost', 'Frühstück'],
    ingredients: [
      { name: 'Apfel', nameEN: 'Apple', amount: '1 großer Apfel, gewürfelt', amountEN: '1 large apple, diced' },
      { name: 'Pfirsich', nameEN: 'Peach', amount: '1 Pfirsich, in Scheiben', amountEN: '1 peach, sliced' },
      { name: 'Banane', nameEN: 'Banana', amount: '1 reife Banane', amountEN: '1 ripe banana' },
      { name: 'Mandeln', nameEN: 'Almonds', amount: '30g eingeweichte, gehackte Mandeln', amountEN: '30g soaked, chopped almonds' },
      { name: 'Ahornsirup', nameEN: 'Maple Syrup', amount: '1 EL', amountEN: '1 tbsp' },
      { name: 'Kakaobohnen', nameEN: 'Cacao Beans', amount: '1 TL Kakaonibs', amountEN: '1 tsp cacao nibs' },
    ],
    instructions: [
      'Die eingeweichten Mandeln grob hacken.',
      'Apfel, Pfirsich und Banane in mundgerechte Stücke schneiden.',
      'Das Obst in einer Schale anrichten und mit den Mandeln und Kakaonibs bestreuen.',
      'Mit einem Esslöffel reinem Ahornsirup beträufeln und sofort genießen.',
    ],
    instructionsEN: [
      'Coarsely chop the soaked almonds.',
      'Cut apple, peach, and banana into bite-sized pieces.',
      'Arrange fruit in a bowl and sprinkle with almonds and cacao nibs.',
      'Drizzle with a tablespoon of pure maple syrup and enjoy immediately.',
    ],
    tips: ['Mandeln am besten über Nacht in kaltem Wasser einweichen.'],
    tipsEN: ['Best to soak almonds overnight in cold water.'],
  },
  {
    id: 'morn-02',
    title: 'Adanos Cobalamin Tonic & Avocadobrot (Morgen-Kick)',
    titleEN: "Adano's Cobalamin Tonic & Avocado Toast (Morning Boost)",
    mealName: 'Adano B12 Boost & Avocado Toast',
    description: 'Das legendäre B12-Tonic von Adano Ley kombiniert mit cremigem Avocadobelag auf leicht getoastetem Reisbrot.',
    descriptionEN: "Adano Ley's legendary B12 tonic combined with creamy avocado topping on lightly toasted rice bread.",
    timeWindow: 'Morning',
    diet: 'Vegetarian',
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 1,
    difficulty: 'Einfach',
    cuisine: 'Solar Specialty',
    cuisineEN: 'Solar Specialty',
    isPreloaded: true,
    tags: ['Tonic', 'B12-Booster', 'Energie'],
    ingredients: [
      { name: 'Kaffee', nameEN: 'Coffee (Arabica)', amount: '1 Tasse frischer Arabica-Kaffee', amountEN: '1 cup fresh Arabica coffee' },
      { name: 'Ahornsirup', nameEN: 'Maple Syrup', amount: '1 EL', amountEN: '1 tbsp' },
      { name: 'Kakaobohnen', nameEN: 'Cacao Beans', amount: '1 TL dunkles Backkakaopulver', amountEN: '1 tsp dark baking cacao powder' },
      { name: 'Avocado', nameEN: 'Avocado', amount: '1/2 reife Avocado', amountEN: '1/2 ripe avocado' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1 Prise Kosher Salt', amountEN: '1 pinch Kosher salt' },
      { name: 'Reisnudeln', nameEN: 'Rice Noodles (100% Rice)', amount: 'Oder zeitneutrales Reisgebäck/Brot', amountEN: 'Or time-neutral rice crackers/bread' },
    ],
    instructions: [
      'Den heißen Arabica-Kaffee mit Ahornsirup und dunklem Backkakao verrühren (Cobalamin Tonic).',
      'Die Halbe Avocado zerdrücken und mit einer Prise Diamond Crystal Kosher Salt abschmecken.',
      'Auf zeitneutralem Reisbrot verstreichen und zusammen mit dem Tonic servieren.',
    ],
    instructionsEN: [
      'Stir maple syrup and dark baking cacao into hot Arabica coffee (Cobalamin Tonic).',
      'Mash half an avocado and season with a pinch of Diamond Crystal Kosher salt.',
      'Spread onto time-neutral rice bread and serve alongside the tonic.',
    ],
    tips: ['Verwende ausschließlich dunklen, ungesüßten Backkakao für das Tonic.'],
    tipsEN: ['Use strictly dark, unsweetened baking cacao for the tonic.'],
  },
  {
    id: 'morn-03',
    title: 'Tropische Mango-Papaya Schale mit Kokos-Splittern & Pekannüssen',
    titleEN: 'Tropical Mango & Papaya Bowl with Coconut Shavings & Pecans',
    mealName: 'Tropical Morning Mango Bowl',
    description: 'Sonnenverwöhnte Mangowürfel und Papaya verfeinert mit gehackten Pekannüssen, Kokosöl und echtem Ahornsirup.',
    descriptionEN: 'Sun-ripened diced mango and papaya enhanced with chopped pecans, coconut oil, and pure maple syrup.',
    timeWindow: 'Morning',
    diet: 'Vegan',
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Tropisch',
    cuisineEN: 'Tropical',
    isPreloaded: true,
    tags: ['Morgen', 'Rohkost', 'Tropisch', 'Vitamine'],
    ingredients: [
      { name: 'Mango', nameEN: 'Mango', amount: '1 reife Mango, gewürfelt', amountEN: '1 ripe mango, diced' },
      { name: 'Papaya', nameEN: 'Papaya', amount: '1/2 kleine Papaya', amountEN: '1/2 small papaya' },
      { name: 'Pekannüsse', nameEN: 'Pecans', amount: '30g Pekannüsse, gehackt', amountEN: '30g pecans, chopped' },
      { name: 'Kokosnuss', nameEN: 'Coconut', amount: '2 EL Kokosraspel oder Kokosöl', amountEN: '2 tbsp desiccated coconut or coconut oil' },
      { name: 'Ahornsirup', nameEN: 'Maple Syrup', amount: '1 EL Ahornsirup', amountEN: '1 tbsp maple syrup' },
    ],
    instructions: [
      'Mango und Papaya schälen, entkernen und in kleine Würfel schneiden.',
      'In einer Frühstücksschale vermengen.',
      'Mit gehackten Pekannüssen und Kokosraspeln bestreuen.',
      'Mit einem Esslöffel reinem Ahornsirup beträufeln.',
    ],
    instructionsEN: [
      'Peel, seed, and dice the mango and papaya.',
      'Combine in a breakfast bowl.',
      'Top with chopped pecans and desiccated coconut.',
      'Drizzle with a tablespoon of pure maple syrup.',
    ],
  },
  {
    id: 'morn-04',
    title: 'Eingeweichte Morgen-Mandeln mit Datteln & Feigen-Quartett',
    titleEN: 'Soaked Morning Almonds with Date & Fig Quartet',
    mealName: 'Soaked Almond & Fig Power Breakfast',
    description: 'Adanos magensäureregulierende Morgen-Mandeln kombiniert mit süßen getrockneten Feigen, Datteln und Walnüssen.',
    descriptionEN: "Adano's stomach-acid regulating morning almonds combined with sweet dried figs, dates, and walnuts.",
    timeWindow: 'Morning',
    diet: 'Vegan',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Einfach',
    cuisine: 'Solar Specialty',
    cuisineEN: 'Solar Specialty',
    isPreloaded: true,
    tags: ['Mandeln', 'Salzsäure-Balance', 'Rohkost'],
    ingredients: [
      { name: 'Mandeln', nameEN: 'Almonds', amount: '15-20 rohe, über Nacht eingeweichte Mandeln', amountEN: '15-20 raw almonds soaked overnight' },
      { name: 'Feige', nameEN: 'Fig', amount: '2 frische oder getrocknete Feigen', amountEN: '2 fresh or dried figs' },
      { name: 'Dattel', nameEN: 'Date', amount: '2 Medjool-Datteln', amountEN: '2 Medjool dates' },
      { name: 'Walnüsse', nameEN: 'Walnuts', amount: '20g Walnusskerne', amountEN: '20g walnut halves' },
      { name: 'Vanille', nameEN: 'Vanilla', amount: '1 Prise echte gemahlene Vanille', amountEN: '1 pinch real ground vanilla' },
    ],
    instructions: [
      'Die eingeweichten Mandeln von der Haut befreien oder direkt gründlich kauen (ideal 07:00-09:00 Uhr Solarzeit).',
      'Feigen und Datteln klein schneiden.',
      'Zusammen mit den Walnüssen und der echten Vanille genießen.',
    ],
    instructionsEN: [
      'Skin the soaked almonds or chew thoroughly (ideal between 07:00 and 09:00 Solar Time).',
      'Chop the figs and dates.',
      'Enjoy together with walnuts and genuine ground vanilla.',
    ],
    tips: ['Mandeln am Morgen setzen den perfekten Salzsäure-Spiegel für den Tag.'],
    tipsEN: ['Almonds in the morning set the perfect stomach acid balance for the day.'],
  },
  {
    id: 'morn-05',
    title: 'Zitrus-Elixier des Morgens (Grapefruit & Orange)',
    titleEN: 'Citrus Morning Elixir (Grapefruit & Orange)',
    mealName: 'Citrus Morning Solitude',
    description: 'Erfrischendes Zitrusfrüchte-Frühstück aus saftigen Grapefruit- und Orangen-Spalten. Achtung: Strikte Regel zum Verzehr!',
    descriptionEN: 'Refreshing citrus breakfast of juicy grapefruit and orange segments. Note: Strict consumption rule!',
    timeWindow: 'Morning',
    diet: 'Vegan',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Einfach',
    cuisine: 'Solar Specialty',
    cuisineEN: 'Solar Specialty',
    isPreloaded: true,
    tags: ['Zitrus', '09:00-11:00', 'Streng Allein'],
    ingredients: [
      { name: 'Grapefruit', nameEN: 'Grapefruit', amount: '1 rosa Grapefruit', amountEN: '1 pink grapefruit' },
      { name: 'Orange', nameEN: 'Orange', amount: '1 saftige Orange', amountEN: '1 juicy orange' },
      { name: 'Zitrone', nameEN: 'Lemon', amount: 'Ein paar Spritzer Zitronensaft', amountEN: 'A few squeezes of lemon juice' },
    ],
    instructions: [
      'Grapefruit und Orange filetieren.',
      'Die Zitrusfrüchte in einer Schale anrichten.',
      'Zwischen 09:00 und 11:00 Solarzeit genießen.',
    ],
    instructionsEN: [
      'Segment the grapefruit and orange.',
      'Arrange the citrus fruit segments in a bowl.',
      'Enjoy strictly between 09:00 and 11:00 Solar Time.',
    ],
    tips: ['STRENG ALLEIN VERZEHREN! Zitrusfrüchte dürfen niemals mit Fetten, Nüssen oder anderen Früchten kombiniert werden.'],
    tipsEN: ['EAT STRICTLY ALONE! Citrus fruits must never be combined with fats, nuts, or other fruits.'],
  },

  // ==========================================
  // MIDDAY RECIPES (12:00 - 18:00 Solarzeit) - BUSH & VINE & LAND ANIMALS
  // ==========================================
  {
    id: 'mid-01',
    title: 'Mediterrane Gemüse-Pfanne mit Feta & Olivenöl',
    titleEN: 'Mediterranean Veggie Stir-Fry with Feta & Olive Oil',
    mealName: 'Mediterranean Bush & Vine Saute',
    description: 'Knackiger Brokkoli, Zucchini und Zucchini-Würfel auf den Punkt in Olivenöl geschwenkt, garniert mit Schafskäse und Basilikum.',
    descriptionEN: 'Crisp broccoli, courgette, and bell peppers sautéed to perfection in olive oil, topped with feta and fresh basil.',
    timeWindow: 'Midday',
    diet: 'Vegetarian',
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Mediterran',
    cuisineEN: 'Mediterranean',
    isPreloaded: true,
    tags: ['Warm', 'Schnell', 'Low Carb'],
    ingredients: [
      { name: 'Brokkoli', nameEN: 'Broccoli', amount: '200g in Röschen', amountEN: '200g cut into florets' },
      { name: 'Zucchini', nameEN: 'Courgette (Zucchini)', amount: '1 kleine Zucchini', amountEN: '1 small courgette' },
      { name: 'Paprika', nameEN: 'Bell Pepper', amount: '1 rote Paprika', amountEN: '1 red bell pepper' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Käse', nameEN: 'Cheese', amount: '50g Feta (nicht geschmolzen!)', amountEN: '50g feta (unmelted!)' },
      { name: 'Basilikum', nameEN: 'Basil', amount: '1 Handvoll frisches Basilikum', amountEN: '1 handful fresh basil' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1 Prise', amountEN: '1 pinch' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1 Prise Kosher Salt', amountEN: '1 pinch Kosher salt' },
    ],
    instructions: [
      'Das Gemüse in gleichmäßige Stücke schneiden.',
      'Olivenöl in einer Pfanne sanft erhitzen und Paprika, Brokkoli sowie Zucchini 8-10 Minuten dünsten.',
      'Mit Diamond Crystal Kosher Salt und einer Prise Cayennepfeffer (oder dreifach gefiltertem Pfeffersud) würzen.',
      'Von der Hitze nehmen, mit zerbröckeltem Feta und frischem Basilikum bestreuen und sofort servieren.',
    ],
    instructionsEN: [
      'Chop the vegetables into uniform pieces.',
      'Gently heat olive oil in a pan and sauté bell pepper, broccoli, and courgette for 8-10 minutes.',
      'Season with Diamond Crystal Kosher salt and a pinch of cayenne pepper.',
      'Remove from heat, crumble feta over the top with fresh basil, and serve immediately.',
    ],
    tips: ['Der Käse darf nicht stark schmelzen (Solar Nutrition Regel: kein geschmolzener Käse).'],
    tipsEN: ['The cheese must not be melted (Solar Nutrition rule: no melted cheese).'],
  },
  {
    id: 'mid-02',
    title: 'Zartes Hähnchenbrust-Filet mit Kräuter-Quinoa',
    titleEN: 'Tender Chicken Breast Fillet with Herbed Quinoa',
    mealName: 'Herbed Quinoa & Chicken Zenith Bowl',
    description: 'Saftiges Hähnchenfilet aus der Pfanne auf fluffiger Kräuter-Quinoa mit gedünstetem Spinat und Koriander.',
    descriptionEN: 'Pan-seared juicy chicken fillet served over fluffy herb quinoa with wilted spinach and coriander.',
    timeWindow: 'Midday',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'International',
    cuisineEN: 'International',
    isPreloaded: true,
    tags: ['Proteine', 'Hauptgericht', 'Gesund'],
    ingredients: [
      { name: 'Hähnchen', nameEN: 'Chicken', amount: '300g Hähnchenbrustfilet', amountEN: '300g chicken breast fillet' },
      { name: 'Quinoa', nameEN: 'Quinoa', amount: '120g Quinoa', amountEN: '120g quinoa' },
      { name: 'Spinat', nameEN: 'Spinach', amount: '150g frischer Spinat', amountEN: '150g fresh spinach' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Koriander', nameEN: 'Coriander / Cilantro', amount: '1 EL gehackter Koriander', amountEN: '1 tbsp chopped coriander' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1 Prise', amountEN: '1 pinch' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1/2 TL Kosher Salt', amountEN: '1/2 tsp Kosher salt' },
    ],
    instructions: [
      'Quinoa gründlich abspülen und in der doppelten Menge Wasser ca. 15 Minuten köcheln lassen.',
      'Hähnchenbrust in Olivenöl bei mittlerer Hitze von beiden Seiten ca. 6-8 Minuten durchbraten.',
      'Spinat in den letzten 3 Minuten kurz in die Pfanne geben, bis er zusammenfällt.',
      'Mit Kosher Salt und Cayennepfeffer (oder dreifach gefiltertem Pfeffersud) würzen und auf der Quinoa mit Koriander servieren.',
    ],
    instructionsEN: [
      'Rinse quinoa thoroughly and simmer in twice the volume of water for about 15 minutes.',
      'Pan-fry chicken breast in olive oil over medium heat for 6-8 minutes per side.',
      'Add spinach to the pan in the last 3 minutes until wilted.',
      'Season with Kosher salt and cayenne pepper, serving over quinoa topped with fresh coriander.',
    ],
    tips: ['Fleisch niemals mit Milchprodukten (Milch/Käse) kombinieren!'],
    tipsEN: ['Never combine meat with dairy products (milk/cheese)!'],
  },
  {
    id: 'mid-de-01',
    title: 'Deutsches Landhähnchen mit Dinkelgraupen & Kräuter-Rosenkohl',
    titleEN: 'German Farmhouse Chicken with Pearl Spelt & Herb Sprouts',
    mealName: 'German Rustic Chicken & Spelt',
    description: 'Traditionell deutsches Mittagsgericht: Saftige Hähnchenbrust in Olivenöl mit duftendem Rosmarin, serviert auf fluffigem Dinkel und zart gedünstetem Rosenkohl.',
    descriptionEN: 'Traditional German midday meal: Juicy chicken breast sautéed with rosemary, served over fluffy spelt and tender Brussels sprouts.',
    timeWindow: 'Midday',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Deutsch',
    cuisineEN: 'German',
    isPreloaded: true,
    tags: ['Deutsch', 'Mittagessen', 'Herzhaft', 'Proteine'],
    ingredients: [
      { name: 'Hähnchen', nameEN: 'Chicken', amount: '300g frisches Hähnchenbrustfilet', amountEN: '300g fresh chicken breast fillet' },
      { name: 'Dinkel', nameEN: 'Spelt', amount: '120g Dinkel-Perlgraupen', amountEN: '120g pearl spelt' },
      { name: 'Rosenkohl', nameEN: 'Brussels Sprouts', amount: '200g halbierter Rosenkohl', amountEN: '200g halved Brussels sprouts' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Rosmarin', nameEN: 'Rosemary', amount: '1 Zweig frischer Rosmarin', amountEN: '1 sprig fresh rosemary' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1/2 TL Kosher Salt', amountEN: '1/2 tsp Kosher salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder 1 Prise Cayennepfeffer)', amountEN: '1 tsp (or 1 pinch cayenne pepper)' },
    ],
    instructions: [
      'Dinkelgraupen in reichlich Salzwasser ca. 20 Minuten gar kochen.',
      'Rosenkohl putzen, halbieren und in Olivenöl bei mittlerer Hitze 10 Minuten knackig braten.',
      'Hähnchenbrust mit Rosmarin in Olivenöl von beiden Seiten goldbraun anbraten.',
      'Mit Diamond Crystal Kosher Salt und dreifach gefiltertem Pfeffersud (oder Cayennepfeffer) abschmecken und warm servieren.',
    ],
    instructionsEN: [
      'Boil pearl spelt in salted water for about 20 minutes until tender.',
      'Trim and halve Brussels sprouts, frying in olive oil over medium heat for 10 minutes.',
      'Pan-fry chicken breast with rosemary in olive oil until golden brown on both sides.',
      'Season with Kosher salt and cayenne pepper, serving warm.',
    ],
  },
  {
    id: 'mid-it-01',
    title: 'Pasta Pomodoro e Zucchine con Basilico (Italienische Busch-Pasta)',
    titleEN: 'Pasta Pomodoro e Zucchine con Basilico (Italian Bush Pasta)',
    mealName: 'Italian Vine & Bush Pasta',
    description: 'Klassische italienische Pasta aus 100% Hartweizengrieß mit fruchtiger Tomaten-Salsa, knackigen Zucchini-Würfeln und frischem Basilikum.',
    descriptionEN: 'Classic Italian durum wheat pasta with fruity tomato salsa, crisp courgette cubes, and fresh basil.',
    timeWindow: 'Midday',
    diet: 'Vegan',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Italienisch',
    cuisineEN: 'Italian',
    isPreloaded: true,
    tags: ['Italienisch', 'Pasta', 'Schnell', 'Vegan'],
    ingredients: [
      { name: 'Semolina Durum Wheat Pasta', nameEN: 'Semolina Durum Wheat Pasta', amount: '180g Penne oder Rigatoni', amountEN: '180g penne or rigatoni' },
      { name: 'Tomate', nameEN: 'Tomato', amount: '3 reife Strauchtomaten, gewürfelt', amountEN: '3 ripe vine tomatoes, diced' },
      { name: 'Zucchini', nameEN: 'Courgette (Zucchini)', amount: '1 mittlere Zucchini, gewürfelt', amountEN: '1 medium courgette, diced' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '3 EL kaltgepresstes Olivenöl', amountEN: '3 tbsp extra virgin olive oil' },
      { name: 'Basilikum', nameEN: 'Basil', amount: '1 Handvoll frisches Basilikum', amountEN: '1 handful fresh basil' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1/2 TL Kosher Salt', amountEN: '1/2 tsp Kosher salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder 1 Prise Cayennepfeffer)', amountEN: '1 tsp (or 1 pinch cayenne)' },
    ],
    instructions: [
      'Pasta in kochendem Salzwasser al dente garen.',
      'In einer großen Pfanne Olivenöl erhitzen, Zucchiniwürfel 5 Minuten anbraten, dann die Strauchtomaten dazugeben.',
      'Die Sauce 5 Minuten leicht einköcheln lassen, mit Diamond Crystal Kosher Salt und Pfeffersud/Cayennepfeffer abschmecken.',
      'Die Pasta direkt in die Pfanne geben, mit frischem Basilikum schwenken und sofort servieren.',
    ],
    instructionsEN: [
      'Cook pasta in boiling salted water until al dente.',
      'Heat olive oil in a skillet, sauté diced courgette for 5 minutes, then add diced vine tomatoes.',
      'Simmer sauce for 5 minutes, seasoning with Kosher salt and cayenne pepper.',
      'Toss cooked pasta into the pan with fresh basil leaves and serve hot.',
    ],
  },
  {
    id: 'mid-fr-01',
    title: 'Poulet aux Herbes de Provence mit Grünen Bohnen',
    titleEN: 'Poulet aux Herbes de Provence with French Green Beans',
    mealName: 'French Herb Chicken & Haricots Verts',
    description: 'Französischer Landhausstil: Zartes Hähnchenbrustfilet in Nativ-Olivenöl mit Kräutern der Provence, serviert auf fein gedünsteten grünen Bohnen.',
    descriptionEN: 'French country classic: Tender chicken breast in extra virgin olive oil with Herbes de Provence over lightly steamed green beans.',
    timeWindow: 'Midday',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Französisch',
    cuisineEN: 'French',
    isPreloaded: true,
    tags: ['Französisch', 'Kräuter', 'Low Carb', 'Gourmet'],
    ingredients: [
      { name: 'Hähnchen', nameEN: 'Chicken', amount: '300g Hähnchenbrustfilet', amountEN: '300g chicken breast fillet' },
      { name: 'Grüne Bohnen', nameEN: 'Green Beans', amount: '250g frische grüne Bohnen', amountEN: '250g fresh green beans' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Thymian', nameEN: 'Thyme', amount: '1 TL frischer Thymian', amountEN: '1 tsp fresh thyme' },
      { name: 'Rosmarin', nameEN: 'Rosemary', amount: '1 TL frischer Rosmarin', amountEN: '1 tsp fresh rosemary' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1/2 TL Kosher Salt', amountEN: '1/2 tsp Kosher salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne pepper)' },
    ],
    instructions: [
      'Grüne Bohnen in Salzwasser ca. 8 Minuten blanchieren und in kaltem Wasser abschrecken.',
      'Hähnchenbrustfilet in Olivenöl mit Thymian und Rosmarin braten, bis es saftig durchgegart ist.',
      'Bohnen kurz in der Kräuterpfanne schwenken.',
      'Mit Kosher Salt und dreifach gefiltertem Pfeffersud oder Cayennepfeffer würzen und anrichten.',
    ],
    instructionsEN: [
      'Blanch green beans in salted water for 8 minutes and refresh in cold water.',
      'Pan-fry chicken breast in olive oil with thyme and rosemary until juicy and cooked through.',
      'Toss green beans briefly in the pan juices.',
      'Season with Kosher salt and cayenne pepper before serving.',
    ],
  },
  {
    id: 'mid-el-01',
    title: 'Griechisches Pfannengemüse mit Feta & Oregano',
    titleEN: 'Greek Sautéed Vegetables with Feta & Oregano',
    mealName: 'Greek Bush Saute with Feta',
    description: 'Griechischer Gemüsetraum aus bunter Paprika, Auberginen und Zucchini in Olivenöl, bestreut mit feinem Schafskäse und duftendem Oregano.',
    descriptionEN: 'Greek vegetable medley of colorful bell peppers, aubergine, and courgette in olive oil, topped with crumbled feta and aromatic oregano.',
    timeWindow: 'Midday',
    diet: 'Vegetarian',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Griechisch',
    cuisineEN: 'Greek',
    isPreloaded: true,
    tags: ['Griechisch', 'Gemüse', 'Vegetarisch', 'Schnell'],
    ingredients: [
      { name: 'Paprika', nameEN: 'Bell Pepper', amount: '1 rote & 1 gelbe Paprika', amountEN: '1 red & 1 yellow bell pepper' },
      { name: 'Zucchini', nameEN: 'Courgette (Zucchini)', amount: '1 Zucchini', amountEN: '1 courgette' },
      { name: 'Auberginen', nameEN: 'Aubergine (Eggplant)', amount: '1/2 kleine Aubergine', amountEN: '1/2 small aubergine' },
      { name: 'Käse', nameEN: 'Cheese', amount: '60g Feta (Schafskäse)', amountEN: '60g feta cheese' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '3 EL', amountEN: '3 tbsp' },
      { name: 'Oregano', nameEN: 'Oregano', amount: '1 EL frischer Oregano', amountEN: '1 tbsp fresh oregano' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1/2 TL Kosher Salt', amountEN: '1/2 tsp Kosher salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne pepper)' },
    ],
    instructions: [
      'Gemüse in mundgerechte Stücke schneiden.',
      'Olivenöl in einer großen Pfanne erhitzen, Auberginen, Paprika und Zucchini nacheinander anbraten.',
      'Mit Kosher Salt, Oregano und dreifach gefiltertem Pfeffersud oder Cayennepfeffer abschmecken.',
      'Pfanne vom Herd nehmen und den Feta kalt darüber krümeln (nicht schmelzen lassen!).',
    ],
    instructionsEN: [
      'Cut vegetables into bite-sized pieces.',
      'Heat olive oil in a skillet and sauté aubergine, bell peppers, and courgette.',
      'Season with Kosher salt, oregano, and cayenne pepper.',
      'Remove from heat and crumble cold feta over the top (do not melt!).',
    ],
  },
  {
    id: 'mid-asia-01',
    title: 'Asiatische Tofu-Zucchini-Pfanne mit Sesam & Tamari',
    titleEN: 'Asian Tofu & Courgette Stir-Fry with Sesame & Tamari',
    mealName: 'Asian Tofu & Bush Saute',
    description: 'Asiatisch inspirierte Wok-Pfanne aus gebratenem Tofu, Paprika und Zucchini in duftendem Sesamöl und echter Tamari-Sojasauce.',
    descriptionEN: 'Asian-inspired wok stir-fry of seared tofu, bell peppers, and courgette in fragrant sesame oil and tamari soy sauce.',
    timeWindow: 'Midday',
    diet: 'Vegan',
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Asiatisch',
    cuisineEN: 'Asian',
    isPreloaded: true,
    tags: ['Asiatisch', 'Wok', 'Vegan', 'Proteine'],
    ingredients: [
      { name: 'Tofu & Tempeh', nameEN: 'Tofu & Tempeh', amount: '200g fester Naturtofu, gewürfelt', amountEN: '200g firm tofu, diced' },
      { name: 'Zucchini', nameEN: 'Courgette (Zucchini)', amount: '1 Zucchini, in Scheiben', amountEN: '1 courgette, sliced' },
      { name: 'Paprika', nameEN: 'Bell Pepper', amount: '1 rote Paprika, in Streifen', amountEN: '1 red bell pepper, sliced' },
      { name: 'Sesamöl', nameEN: 'Sesame Oil', amount: '2 EL Sesamöl', amountEN: '2 tbsp sesame oil' },
      { name: 'Tamari / Sojasauce', nameEN: 'Tamari / Soy Sauce', amount: '2 EL Tamari', amountEN: '2 tbsp tamari' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1 Prise Kosher Salt', amountEN: '1 pinch Kosher salt' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1/2 TL Cayennepfeffer', amountEN: '1/2 tsp cayenne pepper' },
    ],
    instructions: [
      'Tofu trocken tupfen und in Würfel schneiden.',
      'Sesamöl im Wok erhitzen und den Tofu knusprig anbraten.',
      'Paprika und Zucchini dazugeben und 5 Minuten knackig pfannenrühren.',
      'Mit Tamari, Diamond Crystal Kosher Salt und Cayennepfeffer ablöschen und servieren.',
    ],
    instructionsEN: [
      'Pat tofu dry and cut into cubes.',
      'Heat sesame oil in a wok and sear tofu until golden.',
      'Add bell pepper and courgette, stir-frying for 5 minutes.',
      'Deglaze with tamari, Kosher salt, and cayenne pepper before serving.',
    ],
  },
  {
    id: 'mid-03',
    title: 'Deftiger Linsen-Kürbis-Topf mit Rosmarin & Thymian',
    titleEN: 'Hearty Lentil & Pumpkin Stew with Rosemary & Thyme',
    mealName: 'Hearty Bush Lentil & Pumpkin Stew',
    description: 'Sättigender Mittags-Eintopf aus braunen Linsen, Hokkaido-Kürbis und Brokkoli, abgeschmeckt mit frischen Kräutern.',
    descriptionEN: 'Filling midday stew of brown lentils, Hokkaido pumpkin, and broccoli, seasoned with fresh garden herbs.',
    timeWindow: 'Midday',
    diet: 'Vegan',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'International',
    cuisineEN: 'International',
    isPreloaded: true,
    tags: ['Linsen', 'Kürbis', 'Vegan', 'Herzhaft'],
    ingredients: [
      { name: 'Linsen', nameEN: 'Lentils', amount: '150g braune Linsen', amountEN: '150g brown lentils' },
      { name: 'Kürbis', nameEN: 'Pumpkin', amount: '200g Hokkaido-Kürbis, gewürfelt', amountEN: '200g Hokkaido pumpkin, diced' },
      { name: 'Brokkoli', nameEN: 'Broccoli', amount: '150g Brokkoliröschen', amountEN: '150g broccoli florets' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Rosmarin', nameEN: 'Rosemary', amount: '1 TL frischer Rosmarin', amountEN: '1 tsp fresh rosemary' },
      { name: 'Salz', nameEN: 'Salt (Diamond Crystal Kosher)', amount: '1 TL Kosher Salt', amountEN: '1 tsp Kosher salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne pepper)' },
    ],
    instructions: [
      'Linsen gründlich abspülen und in ca. 400ml Wasser 20 Minuten garen.',
      'Kürbiswürfel und Brokkoli in Olivenöl dünsten und unter die Linsen heben.',
      'Mit Rosmarin, Kosher Salt und dreifach gefiltertem Pfeffersud (oder Cayennepfeffer) würzen.',
    ],
    instructionsEN: [
      'Rinse lentils and simmer in 400ml water for 20 minutes.',
      'Sauté diced pumpkin and broccoli florets in olive oil, then fold into lentils.',
      'Season with fresh rosemary, Kosher salt, and cayenne pepper.',
    ],
  },
  {
    id: 'mid-snack-01',
    title: 'Beeren-Sommertraum (15:00–17:00 Uhr Snack)',
    titleEN: 'Summer Berry Delight (15:00–17:00 Snack)',
    mealName: 'Midday Berry Delight',
    description: 'Der perfekte Nachmittags-Snack nach Adano Ley: Frische Erdbeeren, Blaubeeren und Himbeeren zwischen 15:00 und 17:00 Uhr genießen.',
    descriptionEN: "The ultimate afternoon snack per Adano Ley: Enjoy fresh strawberries, blueberries, and raspberries between 15:00 and 17:00.",
    timeWindow: 'Midday',
    diet: 'Vegan',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Einfach',
    cuisine: 'Solar Specialty',
    cuisineEN: 'Solar Specialty',
    isPreloaded: true,
    tags: ['Beeren', '15:00-17:00', 'Snack', 'Rohkost'],
    ingredients: [
      { name: 'Erdbeere', nameEN: 'Strawberry', amount: '100g frische Erdbeeren', amountEN: '100g fresh strawberries' },
      { name: 'Blaubeere', nameEN: 'Blueberry', amount: '50g Blaubeeren', amountEN: '50g blueberries' },
      { name: 'Himbeere', nameEN: 'Raspberry', amount: '50g Himbeeren', amountEN: '50g raspberries' },
    ],
    instructions: [
      'Die Beeren vorsichtig abbrausen und trocken tupfen.',
      'Am besten zwischen 15:00 und 17:00 Uhr Solarzeit frisch genießen.',
    ],
    instructionsEN: [
      'Rinse berries gently and pat dry.',
      'Best enjoyed fresh strictly between 15:00 and 17:00 Solar Time.',
    ],
    tips: ['Beeren sind im Midday-Fenster (speziell 15-17 Uhr) am leichtesten zu verdauen.'],
    tipsEN: ['Berries are easiest to digest in the Midday window (specifically 15:00–17:00).'],
  },

  // ==========================================
  // EVENING RECIPES (18:00 - 24:00 Solarzeit) - UNDERGROUND & WATER & FUNGI & CAM
  // ==========================================
  {
    id: 'eve-01',
    title: 'Ofengeröstetes Wurzelgemüse mit Meersalz & Rosmarin',
    titleEN: 'Oven-Roasted Root Vegetables with Sea Salt & Rosemary',
    mealName: 'Roasted Root Harmony',
    description: 'Aromatisches Wurzelgemüse aus Süßkartoffeln, Karotten, Roter Bete und Pastinaken im Ofen geröstet, verfeinert mit Meersalz.',
    descriptionEN: 'Aromatic root vegetable blend of sweet potato, carrots, beetroot, and parsnip oven-roasted with genuine sea salt.',
    timeWindow: 'Evening',
    diet: 'Vegan',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Ofengericht',
    cuisineEN: 'Oven Baked',
    isPreloaded: true,
    tags: ['Ofen', 'Ballaststoffe', 'Abendessen'],
    ingredients: [
      { name: 'Süßkartoffel', nameEN: 'Sweet Potato', amount: '1 große Süßkartoffel', amountEN: '1 large sweet potato' },
      { name: 'Möhre / Karotte', nameEN: 'Carrot', amount: '2 Karotten', amountEN: '2 carrots' },
      { name: 'Rote Bete', nameEN: 'Beetroot', amount: '1 Knolle Rote Bete', amountEN: '1 beetroot' },
      { name: 'Pastinake', nameEN: 'Parsnip', amount: '1 Pastinake', amountEN: '1 parsnip' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1 TL Echtes Meersalz', amountEN: '1 tsp pure sea salt' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '2 Zehen', amountEN: '2 cloves' },
    ],
    instructions: [
      'Den Backofen auf 200°C Ober-/Unterhitze vorheizen.',
      'Das Wurzelgemüse schälen und in Spalten oder Würfel schneiden.',
      'Mit Olivenöl, zerkleinertem Knoblauch und feinem Meersalz (Abend-Salz!) vermengen.',
      'Auf einem Backblech ca. 30 Minuten goldbraun rösten.',
    ],
    instructionsEN: [
      'Preheat oven to 200°C.',
      'Peel root vegetables and cut into wedges or cubes.',
      'Toss with olive oil, minced garlic, and fine sea salt (evening salt!).',
      'Roast on a baking tray for about 30 minutes until golden brown.',
    ],
    tips: ['Im Evening-Fenster stets Meersalz (Sea Salt) anstelle von Kosher Salt verwenden.'],
    tipsEN: ['Always use sea salt instead of Kosher salt during the Evening window.'],
  },
  {
    id: 'eve-02',
    title: 'Gegrilltes Lachsfilet auf Brunnenkresse & Pilzen',
    titleEN: 'Grilled Salmon Fillet on Watercress & Mushrooms',
    mealName: 'Ocean & Earth Salmon Plate',
    description: 'Frisch zubereitetes Lachsfilet auf gedünsteten Austernpilzen und Brunnenkresse, serviert mit duftendem Wildreis.',
    descriptionEN: 'Seared salmon fillet served over sautéed oyster mushrooms and fresh watercress with aromatic wild rice.',
    timeWindow: 'Evening',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Gourmet',
    cuisineEN: 'Gourmet',
    isPreloaded: true,
    tags: ['Fisch', 'Omega3', 'Leicht'],
    ingredients: [
      { name: 'Lachs', nameEN: 'Salmon', amount: '2 Lachsfilets (je 150g)', amountEN: '2 salmon fillets (150g each)' },
      { name: 'Pilze', nameEN: 'Mushrooms', amount: '150g Austernpilze oder Champignons', amountEN: '150g oyster mushrooms or button mushrooms' },
      { name: 'Brunnenkresse', nameEN: 'Watercress', amount: '1 Handvoll Brunnenkresse', amountEN: '1 handful watercress' },
      { name: 'Wildreis', nameEN: 'Wild Rice', amount: '100g Adano 5:1 Reismischung', amountEN: '100g Adano 5:1 rice mix' },
      { name: 'Ghee', nameEN: 'Ghee (Clarified Butter)', amount: '1 EL', amountEN: '1 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1/2 TL Meersalz', amountEN: '1/2 tsp sea salt' },
    ],
    instructions: [
      'Die Reismischung (5 Teile brauner Reis auf 1 Teil Wildreis) gar kochen.',
      'Ghee in der Pfanne erhitzen und die Pilze sanft anbraten.',
      'Lachs auf der Hautseite 4-5 Minuten knusprig braten, wenden und weitere 2 Minuten ziehen lassen.',
      'Mit Meersalz würzen und auf dem Pilz-Brunnenkresse-Bett mit Reis anrichten.',
    ],
    instructionsEN: [
      'Cook the rice blend (5 parts brown rice to 1 part wild rice).',
      'Heat ghee in a pan and gently sauté mushrooms.',
      'Sear salmon skin-side down for 4-5 minutes, flip and cook 2 minutes more.',
      'Season with sea salt and serve on mushrooms and watercress alongside rice.',
    ],
  },
  {
    id: 'eve-de-01',
    title: 'Deutscher Kartoffel-Schmortopf mit Austernpilzen & Knoblauch',
    titleEN: 'German Potato & Oyster Mushroom Stew',
    mealName: 'German Potato & Oyster Mushroom Stew',
    description: 'Herzhafter deutscher Abendtopf aus vorwiegend festkochenden Kartoffeln, saftigen Möhren und gebratenen Austernpilzen, gewürzt mit echtem Meersalz.',
    descriptionEN: 'Hearty German evening stew of waxy potatoes, juicy carrots, and seared oyster mushrooms seasoned with pure sea salt.',
    timeWindow: 'Evening',
    diet: 'Vegetarian',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Deutsch',
    cuisineEN: 'German',
    isPreloaded: true,
    tags: ['Deutsch', 'Abendessen', 'Kartoffel', 'Pilze'],
    ingredients: [
      { name: 'Kartoffel', nameEN: 'Potato', amount: '400g vorwiegend festkochende Kartoffeln', amountEN: '400g waxy potatoes' },
      { name: 'Möhre / Karotte', nameEN: 'Carrot', amount: '2 große Karotten', amountEN: '2 large carrots' },
      { name: 'Pilze', nameEN: 'Mushrooms', amount: '200g Austernpilze', amountEN: '200g oyster mushrooms' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '2 Zehen', amountEN: '2 cloves' },
      { name: 'Ghee', nameEN: 'Ghee (Clarified Butter)', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1/2 TL Echtes Meersalz', amountEN: '1/2 tsp pure sea salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne pepper)' },
    ],
    instructions: [
      'Kartoffeln und Karotten schälen, in Würfel schneiden und in Salzwasser ca. 15 Minuten vorgehen.',
      'Ghee in einer tiefen Pfanne erhitzen, gehackten Knoblauch und zerkleinerte Austernpilze 6 Minuten goldbraun anbraten.',
      'Vorgekochte Kartoffeln und Karotten dazugeben und alles 5 Minuten durchschwenken.',
      'Mit feinem Meersalz und dreifach gefiltertem Pfeffersud (oder Cayennepfeffer) würzen.',
    ],
    instructionsEN: [
      'Peel and dice potatoes and carrots, parboiling in salted water for 15 minutes.',
      'Heat ghee in a skillet and brown garlic and oyster mushrooms for 6 minutes.',
      'Add parboiled potatoes and carrots, tossing together for 5 minutes.',
      'Season with sea salt and cayenne pepper before serving.',
    ],
  },
  {
    id: 'eve-it-01',
    title: 'Zuppa di Pesce alla Toscana (Toskanischer Meeresfrüchte-Eintopf)',
    titleEN: 'Zuppa di Pesce alla Toscana (Tuscan Seafood Stew)',
    mealName: 'Tuscan Seafood & Fennel Stew',
    description: 'Edler toskanischer Abend-Eintopf aus frischem Kabeljau, Garnelen, Fenchelknolle und Knoblauch, gegart in Olivenöl und verfeinert mit Meersalz.',
    descriptionEN: 'Fine Tuscan evening stew of fresh cod fillet, prawns, fennel bulb, and garlic poached in olive oil with sea salt.',
    timeWindow: 'Evening',
    diet: 'Omnivore',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Anspruchsvoll',
    cuisine: 'Italienisch',
    cuisineEN: 'Italian',
    isPreloaded: true,
    tags: ['Italienisch', 'Seafood', 'Abendessen', 'Gourmet'],
    ingredients: [
      { name: 'Kabeljau / Dorsch', nameEN: 'Cod', amount: '250g frisches Kabeljaufilet', amountEN: '250g fresh cod fillet' },
      { name: 'Krabben / Garnelen', nameEN: 'Prawns / Shrimp / Crab', amount: '150g Garnelen', amountEN: '150g prawns' },
      { name: 'Fenchelknolle', nameEN: 'Fennel Bulb', amount: '1 kleine Fenchelknolle, in Streifen', amountEN: '1 small fennel bulb, sliced' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '2 Zehen', amountEN: '2 cloves' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '3 EL', amountEN: '3 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1 TL Meersalz', amountEN: '1 tsp sea salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne pepper)' },
    ],
    instructions: [
      'Fenchelknolle und Knoblauch in Olivenöl in einem Topf 8 Minuten sanft andünsten.',
      'Etwas Wasser hinzugeben und aufkochen lassen.',
      'Kabeljau in Stücke schneiden und zusammen mit den Garnelen in den Fond geben, bei schwacher Hitze 8 Minuten gar ziehen lassen.',
      'Mit feinem Meersalz und dreifach gefiltertem Pfeffersud (oder Cayennepfeffer) verfeinern.',
    ],
    instructionsEN: [
      'Gentle sauté sliced fennel and garlic in olive oil for 8 minutes.',
      'Add a splash of water and bring to a simmer.',
      'Add chunked cod and prawns to the broth, poaching gently for 8 minutes.',
      'Finish with fine sea salt and cayenne pepper.',
    ],
  },
  {
    id: 'eve-fr-01',
    title: 'Bouillabaisse Provençale mit Knoblauch-Fenchel-Fond',
    titleEN: 'Provençal Bouillabaisse with Garlic-Fennel Broth',
    mealName: 'Provençal Bouillabaisse',
    description: 'Klassische südfranzösische Fischsuppe für den Abend: Dorsch und Miesmuscheln gekocht in einem duftenden Fond aus Wurzelgemüse, Knoblauch, Fenchel und Safran.',
    descriptionEN: 'Classic Southern French evening fish soup: Cod and mussels cooked in an aromatic broth of root vegetables, garlic, fennel, and saffron.',
    timeWindow: 'Evening',
    diet: 'Omnivore',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 2,
    difficulty: 'Anspruchsvoll',
    cuisine: 'Französisch',
    cuisineEN: 'French',
    isPreloaded: true,
    tags: ['Französisch', 'Fisch', 'Abendessen', 'Gourmet'],
    ingredients: [
      { name: 'Kabeljau / Dorsch', nameEN: 'Cod', amount: '200g Kabeljaufilet', amountEN: '200g cod fillet' },
      { name: 'Muscheln', nameEN: 'Mussels / Clams', amount: '200g frische Miesmuscheln', amountEN: '200g fresh mussels' },
      { name: 'Möhre / Karotte', nameEN: 'Carrot', amount: '1 Karotte', amountEN: '1 carrot' },
      { name: 'Fenchelknolle', nameEN: 'Fennel Bulb', amount: '1/2 Fenchelknolle', amountEN: '1/2 fennel bulb' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '3 Zehen', amountEN: '3 cloves' },
      { name: 'Safran', nameEN: 'Saffron', amount: '1 Prise Safranfäden', amountEN: '1 pinch saffron threads' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1 TL Meersalz', amountEN: '1 tsp sea salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne)' },
    ],
    instructions: [
      'Karotte, Fenchel und Knoblauch fein würfeln und in Olivenöl anbraten.',
      'Mit Wasser auffüllen, Safranfäden dazugeben und 10 Minuten köcheln lassen.',
      'Fischstücke und vorbereitete Miesmuscheln hineingeben und 8 Minuten garen, bis sich die Muscheln öffnen.',
      'Mit Meersalz und dreifach gefiltertem Pfeffersud oder Cayennepfeffer abschmecken.',
    ],
    instructionsEN: [
      'Diced carrot, fennel, and garlic, sautéing in olive oil.',
      'Add water and saffron threads, simmering for 10 minutes.',
      'Add cod pieces and mussels, cooking for 8 minutes until mussels open.',
      'Season with sea salt and cayenne pepper before serving.',
    ],
  },
  {
    id: 'eve-es-01',
    title: 'Patatas Arrugadas mit gegrilltem Thunfisch & Knoblauch-Mojo',
    titleEN: 'Patatas Arrugadas with Grilled Tuna & Garlic Mojo',
    mealName: 'Spanish Canarian Tuna & Garlic Potatoes',
    description: 'Spanischer Kanaren-Klassiker zum Abendessen: In Meersalz gekochte Schalenkartoffeln serviert mit zartem Thunfischfilet und Knoblauch-Mojo.',
    descriptionEN: 'Canarian Spanish evening classic: Salt-crusted potatoes served with seared tuna fillet and garlic mojo.',
    timeWindow: 'Evening',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Spanisch',
    cuisineEN: 'Spanish',
    isPreloaded: true,
    tags: ['Spanisch', 'Kartoffeln', 'Thunfisch', 'Meersalz'],
    ingredients: [
      { name: 'Thunfisch', nameEN: 'Tuna', amount: '2 Thunfischsteaks (je 150g)', amountEN: '2 tuna steaks (150g each)' },
      { name: 'Kartoffel', nameEN: 'Potato', amount: '400g kleine Drillinge-Kartoffeln', amountEN: '400g small baby potatoes' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '3 Zehen', amountEN: '3 cloves' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '3 EL', amountEN: '3 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '2 EL Echtes Meersalz (für den Salzmantel)', amountEN: '2 tbsp pure sea salt (for crust)' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1/2 TL für die Mojo', amountEN: '1/2 tsp for mojo sauce' },
    ],
    instructions: [
      'Die ungeschälten Kartoffeln in wenig Wasser mit 2 EL Meersalz kochen, bis das Wasser verdampft und sich eine Salzkruste bildet.',
      'Knoblauch mit Olivenöl und Cayennepfeffer zu einer pikanten Knoblauch-Mojo pürieren.',
      'Thunfischsteaks in etwas Olivenöl von jeder Seite ca. 2 Minuten scharf anbraten (innen zart-rosa).',
      'Thunfisch mit Meersalz bestreuen und zusammen mit den Runzelkartoffeln und der Mojo servieren.',
    ],
    instructionsEN: [
      'Boil unpeeled baby potatoes in shallow water with 2 tbsp sea salt until water evaporates into a salt crust.',
      'Puree garlic with olive oil and cayenne pepper into a spicy mojo sauce.',
      'Sear tuna steaks in olive oil for 2 minutes per side until seared outside and pink inside.',
      'Season tuna with sea salt and serve alongside wrinkled potatoes and garlic mojo.',
    ],
  },
  {
    id: 'eve-03',
    title: 'Exotischer Ananas-Lachs mit Ingwer & Süßkartoffel-Stampf',
    titleEN: 'Exotic Pineapple Salmon with Ginger & Sweet Potato Mash',
    mealName: 'Exotic Evening Pineapple Salmon',
    description: 'Feinstes Lachsfilet mariniert in Ananassaft (CAM-Pflanze) und Ingwer, serviert auf feinem Süßkartoffel-Stampf.',
    descriptionEN: 'Prime salmon fillet marinated in pineapple juice (CAM plant) and ginger, served over smooth sweet potato mash.',
    timeWindow: 'Evening',
    diet: 'Omnivore',
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Fusion / Exotisch',
    cuisineEN: 'Fusion / Exotic',
    isPreloaded: true,
    tags: ['Ananas', 'CAM', 'Lachs', 'Süßkartoffel', 'Gourmet'],
    ingredients: [
      { name: 'Lachs', nameEN: 'Salmon', amount: '2 Lachsfilets (je 150g)', amountEN: '2 salmon fillets (150g each)' },
      { name: 'Ananas', nameEN: 'Pineapple', amount: '150g Ananaswürfel oder Ananassaft (CAM-Pflanze)', amountEN: '150g pineapple cubes or juice (CAM plant)' },
      { name: 'Süßkartoffel', nameEN: 'Sweet Potato', amount: '300g Süßkartoffeln', amountEN: '300g sweet potatoes' },
      { name: 'Ingwer', nameEN: 'Ginger', amount: '1 TL frisch geriebener Ingwer', amountEN: '1 tsp fresh grated ginger' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1/2 TL Meersalz', amountEN: '1/2 tsp sea salt' },
      { name: 'Dreifach gefilterter Pfeffersud', nameEN: 'Filtered Pepper Extract', amount: '1 TL (oder Cayennepfeffer)', amountEN: '1 tsp (or cayenne)' },
    ],
    instructions: [
      'Süßkartoffeln schälen, würfeln, 15 Minuten weich kochen und mit etwas Olivenöl und Meersalz stampfen.',
      'Lachs in Olivenöl mit Ingwer anbraten.',
      'Ananaswürfel dazugeben und kurz karamellisieren lassen.',
      'Auf dem Süßkartoffelstampf anrichten und mit Meersalz und Pfeffersud/Cayennepfeffer abschmecken.',
    ],
    instructionsEN: [
      'Peel and cube sweet potatoes, boil for 15 minutes, and mash with olive oil and sea salt.',
      'Sear salmon in olive oil with fresh ginger.',
      'Add pineapple cubes and briefly caramelise.',
      'Serve over sweet potato mash and season with sea salt and cayenne pepper.',
    ],
    tips: ['Ananas ist eine CAM-Pflanze (Nachtstoffwechsel) und gehört laut Adano Ley strikt in das Evening-Fenster.'],
    tipsEN: ['Pineapple is a CAM plant (nocturnal metabolism) and belongs strictly in the Evening window per Adano Ley.'],
  },
  {
    id: 'eve-04',
    title: 'Herbstlicher Steinpilz-Kartoffel-Auflauf mit Knoblauch',
    titleEN: 'Autumnal Porcini & Potato Casserole with Garlic',
    mealName: 'Autumn Wild Mushroom & Potato Casserole',
    description: 'Herzhafter Abendauflauf aus knusprigen Kartoffelscheiben, edlen Steinpilzen, Eiern und Knoblauch, gebacken mit Ghee und Meersalz.',
    descriptionEN: 'Hearty evening bake of thinly sliced potatoes, wild porcini mushrooms, eggs, and garlic baked with ghee and sea salt.',
    timeWindow: 'Evening',
    diet: 'Vegetarian',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    servings: 2,
    difficulty: 'Mittel',
    cuisine: 'Deutsch / Rustikal',
    cuisineEN: 'German / Rustic',
    isPreloaded: true,
    tags: ['Pilze', 'Kartoffeln', 'Eier', 'Vegetarisch'],
    ingredients: [
      { name: 'Kartoffel', nameEN: 'Potato', amount: '400g Kartoffeln, dünn geschnitten', amountEN: '400g potatoes, thinly sliced' },
      { name: 'Pilze', nameEN: 'Mushrooms', amount: '200g frische Steinpilze oder Champignons', amountEN: '200g fresh porcini or button mushrooms' },
      { name: 'Ei', nameEN: 'Egg', amount: '2 Eier (Abend-Verdauung)', amountEN: '2 eggs' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '2 Zehen', amountEN: '2 cloves' },
      { name: 'Ghee', nameEN: 'Ghee (Clarified Butter)', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1 TL Meersalz', amountEN: '1 tsp sea salt' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1 Prise', amountEN: '1 pinch' },
    ],
    instructions: [
      'Kartoffelscheiben 8 Minuten vorgaren.',
      'Pilze und Knoblauch in Ghee anbraten.',
      'In einer Auflaufform Kartoffeln und Pilze schichten, mit verquirlten Eiern, Meersalz und Cayennepfeffer überschütten.',
      'Bei 190°C ca. 20 Minuten im Ofen stocken lassen.',
    ],
    instructionsEN: [
      'Parboil potato slices for 8 minutes.',
      'Sauté mushrooms and garlic in ghee.',
      'Layer potatoes and mushrooms in a baking dish, pour beaten eggs over top with sea salt and cayenne pepper.',
      'Bake at 190°C for 20 minutes until set.',
    ],
  },

  // ==========================================
  // DAWN TRANSITION RECIPES (11:30 - 12:30 Solarzeit)
  // ==========================================
  {
    id: 'dawn-01',
    title: 'Dawn Transition: Haferflocken mit Apfel & Zimt-Mandeln',
    titleEN: 'Dawn Transition: Apple & Cinnamon Almond Porridge',
    mealName: 'Sunrise Transition Porridge',
    description: 'Perfekte Überbrückung zwischen Morgen und Mittag (11:30–12:30 Uhr): Kräftige Haferflocken (Midday) kombiniert mit saftigem Apfel (Morning).',
    descriptionEN: 'Ideal transition between morning and midday (11:30–12:30): Hearty porridge oats (Midday) paired with crisp apple (Morning).',
    timeWindow: 'Dawn Transition',
    diet: 'Vegan',
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    servings: 1,
    difficulty: 'Einfach',
    cuisine: 'Frühstück / Übergang',
    cuisineEN: 'Breakfast / Transition',
    isPreloaded: true,
    tags: ['Dawn Transition', 'Porridge', 'Sättigend'],
    ingredients: [
      { name: 'Apfel', nameEN: 'Apple', amount: '1 Apfel, gewürfelt (Morning)', amountEN: '1 apple, diced (Morning)' },
      { name: 'Hafer', nameEN: 'Oats', amount: '60g Haferflocken (Midday)', amountEN: '60g porridge oats (Midday)' },
      { name: 'Mandeln', nameEN: 'Almonds', amount: '15g Mandeln (Morning)', amountEN: '15g almonds (Morning)' },
      { name: 'Ahornsirup', nameEN: 'Maple Syrup', amount: '1 TL', amountEN: '1 tsp' },
      { name: 'Wasser / Pflanzendrink', nameEN: 'Water / Plant Milk', amount: '200ml', amountEN: '200ml' },
    ],
    instructions: [
      'Haferflocken in Wasser aufkochen und 5 Minuten simmer lassen.',
      'Den gewürfelten Apfel unterrühren.',
      'Mit gehackten Mandeln und Ahornsirup verfeinern.',
    ],
    instructionsEN: [
      'Bring oats and water to a boil, simmering for 5 minutes.',
      'Stir in the diced apple.',
      'Top with chopped almonds and maple syrup.',
    ],
    tips: ['Nur zwischen 11:30 und 12:30 Solarzeit verzehren, um die Fenster optimal zu verbinden.'],
    tipsEN: ['Consume only between 11:30 and 12:30 Solar Time to bridge the windows perfectly.'],
  },
  {
    id: 'dawn-02',
    title: 'Dawn Transition: Apfel-Buchweizen-Pancakes mit Ahornsirup',
    titleEN: 'Dawn Transition: Apple Buckwheat Pancakes with Maple Syrup',
    mealName: 'Apple Buckwheat Dawn Pancakes',
    description: 'Leckere Pfannkuchen aus Buchweizenmehl (Midday) mit gedünsteten Apfelscheiben (Morning) und Ahornsirup.',
    descriptionEN: 'Delicious buckwheat flour pancakes (Midday) topped with warm stewed apple slices (Morning) and maple syrup.',
    timeWindow: 'Dawn Transition',
    diet: 'Vegan',
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Übergang',
    cuisineEN: 'Transition',
    isPreloaded: true,
    tags: ['Dawn Transition', 'Pancakes', 'Apfel', 'Buchweizen'],
    ingredients: [
      { name: 'Buchweizen', nameEN: 'Buckwheat', amount: '100g Buchweizenmehl (Midday)', amountEN: '100g buckwheat flour (Midday)' },
      { name: 'Apfel', nameEN: 'Apple', amount: '1 Apfel, dünn geschnitten (Morning)', amountEN: '1 apple, thinly sliced (Morning)' },
      { name: 'Ahornsirup', nameEN: 'Maple Syrup', amount: '2 EL (Morning)', amountEN: '2 tbsp (Morning)' },
      { name: 'Kokosöl', nameEN: 'Coconut Oil', amount: '1 EL zum Ausbacken (Morning)', amountEN: '1 tbsp for frying (Morning)' },
    ],
    instructions: [
      'Buchweizenmehl mit Wasser zu einem glatten Teig verrühren.',
      'Kokosöl in der Pfanne erhitzen und Pfannkuchen von beiden Seiten goldbraun ausbacken.',
      'Apfelscheiben kurz mit Ahornsirup dünsten und auf den Pfannkuchen servieren.',
    ],
    instructionsEN: [
      'Whisk buckwheat flour with water into a smooth batter.',
      'Heat coconut oil in a skillet and cook pancakes until golden on both sides.',
      'Stew apple slices briefly with maple syrup and serve over pancakes.',
    ],
  },

  // ==========================================
  // DUSK TRANSITION RECIPES (18:00 - 19:00 Solarzeit)
  // ==========================================
  {
    id: 'dusk-01',
    title: 'Dusk Transition: Brokkoli-Kartoffel-Pfanne mit Knoblauch',
    titleEN: 'Dusk Transition: Broccoli & Sweet Potato Sauté with Garlic',
    mealName: 'Dusk Transition Earth & Bush Saute',
    description: 'Ideale Kombination für die Abenddämmerung (18:00–19:00 Uhr): Oberirdischer Brokkoli (Midday) harmonisch vereint mit Süßkartoffeln (Evening).',
    descriptionEN: 'Ideal combination for dusk (18:00–19:00): Bush broccoli (Midday) harmoniously combined with sweet potato (Evening).',
    timeWindow: 'Dusk Transition',
    diet: 'Vegan',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Übergang / Abend',
    cuisineEN: 'Transition / Evening',
    isPreloaded: true,
    tags: ['Dusk Transition', 'Gemüse', 'Herzhaft'],
    ingredients: [
      { name: 'Brokkoli', nameEN: 'Broccoli', amount: '150g Brokkoli (Midday)', amountEN: '150g broccoli (Midday)' },
      { name: 'Süßkartoffel', nameEN: 'Sweet Potato', amount: '1 große Süßkartoffel (Evening)', amountEN: '1 large sweet potato (Evening)' },
      { name: 'Knoblauch', nameEN: 'Garlic', amount: '1 Zehe (Evening)', amountEN: '1 clove (Evening)' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL (AnyTime)', amountEN: '2 tbsp (AnyTime)' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1/2 TL Meersalz (Evening)', amountEN: '1/2 tsp sea salt (Evening)' },
      { name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', amount: '1 Prise', amountEN: '1 pinch' },
    ],
    instructions: [
      'Süßkartoffel würfeln und in Olivenöl ca. 12 Minuten braten.',
      'Brokkoliröschen und zerkleinerten Knoblauch dazugeben und weitere 8 Minuten dünsten.',
      'Mit Meersalz und Cayennepfeffer (oder dreifach gefiltertem Pfeffersud) abschmecken.',
    ],
    instructionsEN: [
      'Dice sweet potato and sauté in olive oil for 12 minutes.',
      'Add broccoli florets and minced garlic, cooking for another 8 minutes.',
      'Season with sea salt and cayenne pepper before serving.',
    ],
    tips: ['Ideal für den Übergang von der Mittags- zur Abendenergie.'],
    tipsEN: ['Ideal for transitioning from midday to evening energy.'],
  },
  {
    id: 'dusk-02',
    title: 'Dusk Transition: Gekochte Kochbanane auf Kürbis-Karotten-Püree',
    titleEN: 'Dusk Transition: Cooked Plantain over Pumpkin & Carrot Mash',
    mealName: 'Plantain & Pumpkin Dusk Mash',
    description: 'Perfekte Dämmerungsmahlzeit: Gekochte Kochbanane (Morning/Evening Spezialnahrung) auf geschmeidigem Kürbis- (Midday) und Karotten-Püree (Evening).',
    descriptionEN: 'Perfect dusk meal: Cooked plantain slices served over smooth pumpkin (Midday) and carrot mash (Evening).',
    timeWindow: 'Dusk Transition',
    diet: 'Vegan',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Einfach',
    cuisine: 'Übergang',
    cuisineEN: 'Transition',
    isPreloaded: true,
    tags: ['Dusk Transition', 'Kochbanane', 'Kürbis', 'Möhre'],
    ingredients: [
      { name: 'Kochbanane', nameEN: 'Plantain (Cooking Banana)', amount: '1 gelbe Kochbanane, in Scheiben (Morning/Evening)', amountEN: '1 yellow plantain, sliced (Morning/Evening)' },
      { name: 'Kürbis', nameEN: 'Pumpkin', amount: '200g Hokkaido-Kürbis (Midday)', amountEN: '200g Hokkaido pumpkin (Midday)' },
      { name: 'Möhre / Karotte', nameEN: 'Carrot', amount: '2 Karotten (Evening)', amountEN: '2 carrots (Evening)' },
      { name: 'Olivenöl', nameEN: 'Olive Oil', amount: '2 EL', amountEN: '2 tbsp' },
      { name: 'Salz', nameEN: 'Sea Salt', amount: '1/2 TL Meersalz (Evening)', amountEN: '1/2 tsp sea salt (Evening)' },
    ],
    instructions: [
      'Kochbanane in scheiben Schneiden und in leicht gesalzenem Wasser 15 Minuten weich kochen.',
      'Kürbis und Karotten würfeln, 15 Minuten dämpfen und mit Olivenöl und Meersalz pürieren.',
      'Kochbananenscheiben auf dem warmen Püree servieren.',
    ],
    instructionsEN: [
      'Slice plantain and boil in lightly salted water for 15 minutes until tender.',
      'Steam diced pumpkin and carrots for 15 minutes, then mash with olive oil and sea salt.',
      'Serve plantain slices over the warm pumpkin-carrot mash.',
    ],
  },
  {
    "id": "morn-06",
    "title": "Mexikanische Avocado-Kakao-Mousse mit Kokos & Banane",
    "titleEN": "Mexican Avocado-Cacao Mousse with Coconut & Banana",
    "mealName": "Mexican Avocado Cacao Mousse",
    "description": "Samtig-cremiges schokoladiges Frühstücks-Dessert aus 100 % Baumnahrung.",
    "descriptionEN": "A velvety creamy chocolatey breakfast dessert made from 100% tree foods.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": [
      "Mexikanisch",
      "Mousse",
      "Avocado",
      "Kakao"
    ],
    "ingredients": [
      {
        "name": "Avocado",
        "nameEN": "Avocado",
        "amount": "2 reife Avocados",
        "amountEN": "2 ripe avocados"
      },
      {
        "name": "Kakaobohnen",
        "nameEN": "Cacao Beans",
        "amount": "3 EL Kakaopulver",
        "amountEN": "3 tbsp cacao powder"
      },
      {
        "name": "Ahornsirup",
        "nameEN": "Maple Syrup",
        "amount": "2 EL Ahornsirup",
        "amountEN": "2 tbsp maple syrup"
      },
      {
        "name": "Banane",
        "nameEN": "Banana",
        "amount": "1 Banane",
        "amountEN": "1 banana"
      },
      {
        "name": "Kokosnuss",
        "nameEN": "Coconut",
        "amount": "2 EL Kokosraspeln",
        "amountEN": "2 tbsp coconut flakes"
      }
    ],
    "instructions": [
      "Avocado und Banane schälen und in den Blander geben.",
      "Kakaopulver und Ahornsirup hinzufügen und fein pürieren.",
      "In Schalen anrichten und mit Kokosraspeln bestreuen."
    ],
    "instructionsEN": [
      "Peel avocado and banana and place in blender.",
      "Add cacao powder and maple syrup and blend until smooth.",
      "Serve in bowls and top with coconut flakes."
    ],
    "tips": [
      "Für maximale Frische gekühlt servieren."
    ],
    "tipsEN": [
      "Serve chilled for maximum freshness."
    ]
  },
  {
    "id": "morn-07",
    "title": "Indisches Mandel-Dattel-Halwa mit Kardamom",
    "titleEN": "Indian Almond-Date Halwa with Cardamom",
    "mealName": "Indian Almond Date Halwa",
    "description": "Ein warmes, aromatisches Nährstoff-Frühstück aus Nüssen und Datteln.",
    "descriptionEN": "A warm, aromatic nutrient-rich breakfast made from nuts and dates.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": [
      "Indisch",
      "Halwa",
      "Mandeln",
      "Datteln"
    ],
    "ingredients": [
      {
        "name": "Mandeln",
        "nameEN": "Almonds",
        "amount": "150g eingeweichte Mandeln",
        "amountEN": "150g soaked almonds"
      },
      {
        "name": "Dattel",
        "nameEN": "Date",
        "amount": "8 Medjool-Datteln",
        "amountEN": "8 Medjool dates"
      },
      {
        "name": "Kokosöl",
        "nameEN": "Coconut Oil",
        "amount": "1 EL Kokosöl",
        "amountEN": "1 tbsp coconut oil"
      },
      {
        "name": "Kardamom",
        "nameEN": "Cardamom",
        "amount": "1/2 TL Kardamom",
        "amountEN": "1/2 tsp cardamom"
      }
    ],
    "instructions": [
      "Eingeweichte Mandeln häuten und im Zerkleinerer feinhacken.",
      "Datteln entsteinen und mit etwas warmem Wasser pürieren.",
      "Kokosöl in der Pfanne erwärmen, Mandeln und Dattelmus 8 Min. sanft anrösten.",
      "Mit Kardamom abschmecken und warm genießen."
    ],
    "instructionsEN": [
      "Skin soaked almonds and chop finely in a processor.",
      "Pit dates and purée with a little warm water.",
      "Heat coconut oil in a pan, gently toast almonds and date paste for 8 min.",
      "Season with cardamom and enjoy warm."
    ],
    "tips": [
      "Mandeln stets vorab 8-12 Stunden einweichen."
    ],
    "tipsEN": [
      "Always soak almonds 8-12 hours in advance."
    ]
  },
  {
    "id": "mid-asia-02",
    "title": "Thailändisches Hähnchen-Wok-Curry mit Auberginen & Basmatireis",
    "titleEN": "Thai Chicken Wok Curry with Eggplant & Basmati Rice",
    "mealName": "Thai Chicken & Eggplant Curry",
    "description": "Fernöstliches Mittagessen aus leicht bekömmlichem Geflügel, Strauchgemüse und Reis.",
    "descriptionEN": "Far-eastern lunch with easily digestible poultry, bush vegetables, and rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "dietEN": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Thailändisch",
    "cuisineEN": "Thai",
    "isPreloaded": true,
    "tags": [
      "Thailändisch",
      "Hähnchen",
      "Aubergine",
      "Reis"
    ],
    "ingredients": [
      {
        "name": "Hähnchenfleisch",
        "nameEN": "Chicken Meat",
        "amount": "300g Hähnchenbrust",
        "amountEN": "300g chicken breast"
      },
      {
        "name": "Auberginen",
        "nameEN": "Eggplant",
        "amount": "1 kleine Aubergine",
        "amountEN": "1 small eggplant"
      },
      {
        "name": "Paprika",
        "nameEN": "Bell Pepper",
        "amount": "1 rote Paprika",
        "amountEN": "1 red bell pepper"
      },
      {
        "name": "Basmati Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmatireis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Sesamöl",
        "nameEN": "Sesame Oil",
        "amount": "2 EL Sesamöl",
        "amountEN": "2 tbsp sesame oil"
      },
      {
        "name": "Cayennepfeffer",
        "nameEN": "Cayenne Pepper",
        "amount": "1/4 TL Cayennepfeffer",
        "amountEN": "1/4 tsp cayenne pepper"
      }
    ],
    "instructions": [
      "Basmatireis nach Packungsanleitung gar kochen.",
      "Hähnchenbrust in Streifen schneiden, Aubergine und Paprika würfeln.",
      "Sesamöl im Wok erhitzen, Hähnchen anbraten.",
      "Gemüse hinzugeben und knackig dünsten, mit Cayennepfeffer würzen und mit Reis servieren."
    ],
    "instructionsEN": [
      "Cook basmati rice according to package instructions.",
      "Slice chicken breast into strips, dice eggplant and bell pepper.",
      "Heat sesame oil in a wok, sear chicken.",
      "Add vegetables and stir-fry until crisp-tender, season with cayenne and serve with rice."
    ],
    "tips": [
      "Kein schwarzer Pfeffer – nur Cayennepfeffer verwenden!"
    ],
    "tipsEN": [
      "No black pepper – use cayenne pepper only!"
    ]
  },
  {
    "id": "mid-04",
    "title": "Marokkanischer Kichererbsen-Couscous mit Zucchini & Rosinen",
    "titleEN": "Moroccan Chickpea Couscous with Zucchini & Raisins",
    "mealName": "Moroccan Chickpea Couscous",
    "description": "Orientalisch gewürztes Midday-Gericht aus Hülsenfrüchten, Strauchgemüse und Getreide.",
    "descriptionEN": "Orientally seasoned midday dish with legumes, bush vegetables, and grains.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Marokkanisch",
    "cuisineEN": "Moroccan",
    "isPreloaded": true,
    "tags": [
      "Marokkanisch",
      "Couscous",
      "Kichererbsen",
      "Zucchini"
    ],
    "ingredients": [
      {
        "name": "Kichererbsen",
        "nameEN": "Chickpeas",
        "amount": "1 Dose Kichererbsen (gekocht)",
        "amountEN": "1 can chickpeas (cooked)"
      },
      {
        "name": "Zucchini",
        "nameEN": "Zucchini",
        "amount": "1 Zucchini",
        "amountEN": "1 zucchini"
      },
      {
        "name": "Hartweizen-Couscous",
        "nameEN": "Semolina Couscous",
        "amount": "150g Couscous",
        "amountEN": "150g couscous"
      },
      {
        "name": "Kreuzkümmel",
        "nameEN": "Cumin",
        "amount": "1 TL Kreuzkümmel",
        "amountEN": "1 tsp cumin"
      },
      {
        "name": "Olivenöl",
        "nameEN": "Olive Oil",
        "amount": "2 EL Olivenöl",
        "amountEN": "2 tbsp olive oil"
      }
    ],
    "instructions": [
      "Couscous mit kochendem Wasser gießen und quellen lassen.",
      "Zucchini würfeln und in Olivenöl mit Kreuzkümmel anbraten.",
      "Kichererbsen unterrühren und 5 Min. mitdünsten.",
      "Mit dem Couscous vermengen und servieren."
    ],
    "instructionsEN": [
      "Pour boiling water over couscous and let fluff.",
      "Dice zucchini and sauté in olive oil with cumin.",
      "Stir in chickpeas and simmer for 5 min.",
      "Combine with couscous and serve."
    ]
  },
  {
    "id": "eve-05",
    "title": "Japanisches Teriyaki-Lachsfilet mit Süßkartoffel-Stampf & Wakame",
    "titleEN": "Japanese Teriyaki Salmon with Sweet Potato Mash & Wakame",
    "mealName": "Japanese Salmon & Sweet Potato Mash",
    "description": "Nährstoffreiches Abendessen aus Meeresfisch, Wurzelgemüse und mineralstoffreichen Algen.",
    "descriptionEN": "Nutrient-rich dinner made from saltwater fish, root vegetables, and mineral-rich algae.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "dietEN": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": [
      "Japanisch",
      "Lachs",
      "Süßkartoffel",
      "Wakame"
    ],
    "ingredients": [
      {
        "name": "Lachs",
        "nameEN": "Salmon",
        "amount": "2 Lachsfilets",
        "amountEN": "2 salmon fillets"
      },
      {
        "name": "Süßkartoffeln",
        "nameEN": "Sweet Potatoes",
        "amount": "2 große Süßkartoffeln",
        "amountEN": "2 large sweet potatoes"
      },
      {
        "name": "Meeresalgen (Wakame)",
        "nameEN": "Seaweed (Wakame)",
        "amount": "2 EL eingeweichte Wakame-Algen",
        "amountEN": "2 tbsp soaked wakame algae"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "1 Zehe Knoblauch",
        "amountEN": "1 clove garlic"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1/2 TL Meersalz",
        "amountEN": "1/2 tsp sea salt"
      }
    ],
    "instructions": [
      "Süßkartoffeln schälen, würfeln und in Salzwasser weichkochen, anschließend stampfen.",
      "Lachsfilets mit gepresstem Knoblauch in der Pfanne von beiden Seiten knusprig anbraten.",
      "Wakame-Algen abtropfen lassen.",
      "Lachs auf Süßkartoffelstampf mit Wakame anrichten."
    ],
    "instructionsEN": [
      "Peel sweet potatoes, dice and boil in salted water until soft, then mash.",
      "Sear salmon fillets with minced garlic in a pan until crispy on both sides.",
      "Drain wakame algae.",
      "Serve salmon over sweet potato mash with wakame."
    ]
  },
  {
    "id": "eve-06",
    "title": "Italienisches Steinpilz-Ragout mit Kürbis-Püree & Rote Bete",
    "titleEN": "Italian Porcini Mushroom Ragout with Pumpkin Purée & Beetroot",
    "mealName": "Italian Porcini & Beetroot Ragout",
    "description": "Erdig-aromatisches Abendgericht aus Pilzen und Wurzelgemüse.",
    "descriptionEN": "Earthy aromatic evening dish made from mushrooms and root vegetables.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italienisch",
      "Steinpilze",
      "Kürbis",
      "Rote Bete"
    ],
    "ingredients": [
      {
        "name": "Steinpilze",
        "nameEN": "Porcini Mushrooms",
        "amount": "250g frische Steinpilze",
        "amountEN": "250g fresh porcini mushrooms"
      },
      {
        "name": "Rote Bete",
        "nameEN": "Beetroot",
        "amount": "150g gekochte Rote Bete",
        "amountEN": "150g cooked beetroot"
      },
      {
        "name": "Kürbis",
        "nameEN": "Pumpkin",
        "amount": "300g Hokkaido-Kürbis",
        "amountEN": "300g Hokkaido pumpkin"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Olivenöl",
        "nameEN": "Olive Oil",
        "amount": "2 EL Olivenöl",
        "amountEN": "2 tbsp olive oil"
      }
    ],
    "instructions": [
      "Kürbis würfeln, kochen und zu feinem Püree verarbeiten.",
      "Steinpilze putzen und in Olivenöl mit Knoblauch kräftig anbraten.",
      "Rote Bete in Würfel schneiden und kurz mitschwenken.",
      "Ragout auf dem Kürbispüree servieren."
    ],
    "instructionsEN": [
      "Dice pumpkin, boil and blend into smooth purée.",
      "Clean porcini mushrooms and sauté vigorously in olive oil with garlic.",
      "Dice beetroot and toss in briefly.",
      "Serve ragout over pumpkin purée."
    ]
  },
  {
    "id": "dawn-03",
    "title": "Französischer Hafer-Crêpe mit Dattel-Mandel-Füllung",
    "titleEN": "French Oat Crêpe with Date-Almond Filling",
    "mealName": "French Oat Crêpe",
    "description": "Perfekte Kombination aus Mittags-Getreide und morgendlicher Baumnahrung.",
    "descriptionEN": "Perfect combination of midday grains and morning tree foods.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": [
      "Dawn Transition",
      "Crêpe",
      "Hafer",
      "Dattel"
    ],
    "ingredients": [
      {
        "name": "Hafer",
        "nameEN": "Oats",
        "amount": "100g Hafermehl",
        "amountEN": "100g oat flour"
      },
      {
        "name": "Dattel",
        "nameEN": "Date",
        "amount": "4 EL Dattelmus",
        "amountEN": "4 tbsp date paste"
      },
      {
        "name": "Mandeln",
        "nameEN": "Almonds",
        "amount": "2 EL gehackte Mandeln",
        "amountEN": "2 tbsp chopped almonds"
      }
    ],
    "instructions": [
      "Hafermehl mit Wasser zu einem dünnen Teig verrühren.",
      "In der Pfanne dūnne Crêpes ausbacken.",
      "Mit Dattelmus bestreichen und gehackten Mandeln bestreuen.",
      "Zusammenrollen und warm genießen (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Mix oat flour with water to make a thin batter.",
      "Bake thin crêpes in a pan.",
      "Spread date paste and sprinkle with chopped almonds.",
      "Roll up and enjoy warm (11:30 - 12:30)."
    ]
  },
  {
    "id": "dusk-03",
    "title": "Spanische Gamba-Paella mit Grünen Bohnen & Paprika",
    "titleEN": "Spanish Shrimp Paella with Green Beans & Paprika",
    "mealName": "Spanish Shrimp Paella",
    "description": "Perfekte Kombination aus Strauchgemüse/Getreide und Meeresfrüchten.",
    "descriptionEN": "Perfect combination of bush vegetables/grains and seafood.",
    "timeWindow": "Dusk Transition",
    "diet": "Pescetarian",
    "dietEN": "Pescetarian",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": [
      "Dusk Transition",
      "Paella",
      "Gambas",
      "Paprika"
    ],
    "ingredients": [
      {
        "name": "Reis",
        "nameEN": "Rice",
        "amount": "150g Paellareis",
        "amountEN": "150g paella rice"
      },
      {
        "name": "Garnele / Shrimps",
        "nameEN": "Shrimp / Gambas",
        "amount": "200g Gambas",
        "amountEN": "200g shrimps"
      },
      {
        "name": "Grüne Bohnen",
        "nameEN": "Green Beans",
        "amount": "100g grüne Bohnen",
        "amountEN": "100g green beans"
      },
      {
        "name": "Paprika",
        "nameEN": "Bell Pepper",
        "amount": "1 rote Paprika",
        "amountEN": "1 red bell pepper"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      }
    ],
    "instructions": [
      "Bohnen und Paprika scharfen anbraten.",
      "Reis hinzufügen und mit Gemüsebrühe garen.",
      "Gambas mit Knoblauch in den letzten 8 Min. auf den Reis legen und dämpfen.",
      "Warm in der Dusk-Transition genießen (18:00 - 19:00 Uhr)."
    ],
    "instructionsEN": [
      "Sauté green beans and bell pepper.",
      "Add rice and cook with vegetable broth.",
      "Place shrimps with garlic on top of rice for final 8 min to steam.",
      "Enjoy warm during Dusk Transition (18:00 - 19:00)."
    ]
  },
  {
    "id": "morn-08",
    "title": "Brasilianische Açaí-Bowl mit Banane, Mango & Paranüssen",
    "titleEN": "Brazilian Açaí Bowl with Banana, Mango & Brazil Nuts",
    "mealName": "Brazilian Açaí Bowl",
    "description": "Südamerikanisches Superfood-Frühstück aus 100 % kraftvollen Baumbefruchtungen und Nüssen.",
    "descriptionEN": "South American superfood breakfast made from 100% nutrient-rich tree fruits and nuts.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Brasilianisch",
    "cuisineEN": "Brazilian",
    "isPreloaded": true,
    "tags": [
      "Brasilianisch",
      "Açaí",
      "Mango",
      "Paranuss"
    ],
    "ingredients": [
      {
        "name": "Açaí-Marja",
        "nameEN": "Açaí Berry",
        "amount": "200g Açaí-Püree",
        "amountEN": "200g açaí purée"
      },
      {
        "name": "Banane",
        "nameEN": "Banana",
        "amount": "1 Banane",
        "amountEN": "1 banana"
      },
      {
        "name": "Mango",
        "nameEN": "Mango",
        "amount": "1/2 Mango in Scheiben",
        "amountEN": "1/2 mango sliced"
      },
      {
        "name": "Paranüsse",
        "nameEN": "Brazil Nuts",
        "amount": "30g gehackte Paranüsse",
        "amountEN": "30g chopped Brazil nuts"
      },
      {
        "name": "Ahornsirup",
        "nameEN": "Maple Syrup",
        "amount": "1 EL Ahornsirup",
        "amountEN": "1 tbsp maple syrup"
      }
    ],
    "instructions": [
      "Açaí-Püree mit der Hälfte der Banane cremig pürieren.",
      "In eine Fruchtschale füllen.",
      "Mit Mangoscheiben, der restlichen Banane und gehackten Paranüssen garnieren.",
      "Mit Ahornsirup beträufeln und frisch genießen."
    ],
    "instructionsEN": [
      "Blend açaí purée with half the banana until smooth.",
      "Pour into a fruit bowl.",
      "Garnish with mango slices, remaining banana, and chopped Brazil nuts.",
      "Drizzle with maple syrup and enjoy fresh."
    ]
  },
  {
    "id": "morn-09",
    "title": "Griechisches Feigen-Walnuss-Kompott mit Orangenblüten-Honig",
    "titleEN": "Greek Fig & Walnut Compote with Orange Blossom Honey",
    "mealName": "Greek Fig & Walnut Compote",
    "description": "Warmes mediterranes Frühstücks-Kompott aus süßen Baumfrüchten und Walnüssen.",
    "descriptionEN": "Warm Mediterranean breakfast compote made from sweet tree fruits and walnuts.",
    "timeWindow": "Morning",
    "diet": "Vegetarian",
    "dietEN": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Griechisch",
    "cuisineEN": "Greek",
    "isPreloaded": true,
    "tags": [
      "Griechisch",
      "Feigen",
      "Walnuss",
      "Honig"
    ],
    "ingredients": [
      {
        "name": "Feige",
        "nameEN": "Fig",
        "amount": "6 frische Feigen",
        "amountEN": "6 fresh figs"
      },
      {
        "name": "Walnüsse",
        "nameEN": "Walnuts",
        "amount": "50g Walnüsse",
        "amountEN": "50g walnuts"
      },
      {
        "name": "Orangenblütenhonig",
        "nameEN": "Orange Blossom Honey",
        "amount": "2 EL Honig",
        "amountEN": "2 tbsp honey"
      },
      {
        "name": "Nelken",
        "nameEN": "Cloves",
        "amount": "2 Prisen Gemahlene Nelken",
        "amountEN": "2 pinches ground cloves"
      }
    ],
    "instructions": [
      "Feigen vierteln und in einen kleinen Topf mit 2 EL Wasser geben.",
      "Nelken und Honig hinzufügen und 8 Minuten sanft köcheln lassen.",
      "Walnüsse grob gehackt hinzufügen und warm servieren."
    ],
    "instructionsEN": [
      "Quarter figs and place in a small saucepan with 2 tbsp water.",
      "Add cloves and honey and simmer gently for 8 minutes.",
      "Add coarsely chopped walnuts and serve warm."
    ]
  },
  {
    "id": "mid-05",
    "title": "Argentinisches Rinderhüftsteak mit gegrillter Paprika & Mais-Couscous",
    "titleEN": "Argentine Rump Steak with Grilled Bell Peppers & Corn Couscous",
    "mealName": "Argentine Steak & Corn Couscous",
    "description": "Südamerikanisches eiweißreiches Mittagessen aus Landtier, Strauchgemüse und Getreide.",
    "descriptionEN": "South American protein-rich lunch made from land animal, bush vegetables, and corn grain.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "dietEN": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Argentinisch",
    "cuisineEN": "Argentine",
    "isPreloaded": true,
    "tags": [
      "Argentinisch",
      "Rindfleisch",
      "Paprika",
      "Couscous"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch",
        "nameEN": "Beef",
        "amount": "350g Rinderhüftsteak",
        "amountEN": "350g beef rump steak"
      },
      {
        "name": "Paprika",
        "nameEN": "Bell Pepper",
        "amount": "2 rote Paprika",
        "amountEN": "2 red bell peppers"
      },
      {
        "name": "Mais-Couscous",
        "nameEN": "Corn Couscous",
        "amount": "150g Couscous",
        "amountEN": "150g couscous"
      },
      {
        "name": "Olivenöl",
        "nameEN": "Olive Oil",
        "amount": "2 EL Olivenöl",
        "amountEN": "2 tbsp olive oil"
      },
      {
        "name": "Cayennepfeffer",
        "nameEN": "Cayenne Pepper",
        "amount": "1/4 TL Cayennepfeffer",
        "amountEN": "1/4 tsp cayenne pepper"
      }
    ],
    "instructions": [
      "Couscous mit kochendem Wasser gießen und quellen lassen.",
      "Paprika in Streifen schneiden und grillen.",
      "Rindersteak in Olivenöl von beiden Seiten 3-4 Min. braten, mit Cayennepfeffer und Meersalz würzen.",
      "Steak mit gegrillter Paprika und Couscous anrichten."
    ],
    "instructionsEN": [
      "Pour boiling water over couscous and let fluff.",
      "Slice bell peppers into strips and grill.",
      "Sear beef steak in olive oil 3-4 min per side, season with cayenne and sea salt.",
      "Serve steak with grilled peppers and couscous."
    ]
  },
  {
    "id": "mid-it-02",
    "title": "Italienischer Dinkel-Salat mit Kirschtomaten, Basilikum & Pinienkernen",
    "titleEN": "Italian Spelt Salad with Cherry Tomatoes, Basil & Pine Nuts",
    "mealName": "Italian Spelt & Cherry Tomato Salad",
    "description": "Frischer sommerlicher Getreidesalat aus Dinkel und Strauch-Tomaten.",
    "descriptionEN": "Fresh summer grain salad made from spelt and bush tomatoes.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italienisch",
      "Dinkel",
      "Tomaten",
      "Basilikum"
    ],
    "ingredients": [
      {
        "name": "Dinkel",
        "nameEN": "Spelt",
        "amount": "150g Dinkelgraupen",
        "amountEN": "150g spelt grains"
      },
      {
        "name": "Tomate",
        "nameEN": "Tomato",
        "amount": "200g Kirschtomaten",
        "amountEN": "200g cherry tomatoes"
      },
      {
        "name": "Basilikum",
        "nameEN": "Basil",
        "amount": "1 Bund frisches Basilikum",
        "amountEN": "1 bunch fresh basil"
      },
      {
        "name": "Pinienkerne",
        "nameEN": "Pine Nuts",
        "amount": "30g Pinienkerne",
        "amountEN": "30g pine nuts"
      },
      {
        "name": "Olivenöl",
        "nameEN": "Olive Oil",
        "amount": "3 EL Olivenöl Extra Virgin",
        "amountEN": "3 tbsp extra virgin olive oil"
      }
    ],
    "instructions": [
      "Dinkelgraupen in gesalzenem Wasser gar kochen und abkühlen lassen.",
      "Kirschtomaten halbieren, Basilikum zupfen.",
      "Pinienkerne in einer Pfanne ohne Fett goldbraun anrösten.",
      "Alle Zutaten mit Olivenöl vermengen und servieren."
    ],
    "instructionsEN": [
      "Boil spelt grains in salted water until cooked and let cool.",
      "Halve cherry tomatoes, pick basil leaves.",
      "Toast pine nuts in a dry pan until golden brown.",
      "Combine all ingredients with olive oil and serve."
    ]
  },
  {
    "id": "eve-07",
    "title": "Portugiesische Bacalhau-Kabeljau-Pfanne mit Kartoffeln & Knoblauch",
    "titleEN": "Portuguese Bacalhau Cod Pan with Potatoes & Garlic",
    "mealName": "Portuguese Bacalhau & Potato Pan",
    "description": "Traditioneller lusitanischer Fisch-Klassiker aus Kabeljau, Erd-Kartoffeln und Knoblauch.",
    "descriptionEN": "Traditional Lusitanian fish classic made from codfish, earth potatoes, and garlic.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "dietEN": "Pescetarian",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Portugiesisch",
    "cuisineEN": "Portuguese",
    "isPreloaded": true,
    "tags": [
      "Portugiesisch",
      "Kabeljau",
      "Kartoffeln",
      "Knoblauch"
    ],
    "ingredients": [
      {
        "name": "Kabeljau / Dorsch",
        "nameEN": "Cod",
        "amount": "300g Kabeljaufilet",
        "amountEN": "300g cod fillet"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potatoes",
        "amount": "300g festkochende Kartoffeln",
        "amountEN": "300g waxy potatoes"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "3 Zehen Knoblauch",
        "amountEN": "3 cloves garlic"
      },
      {
        "name": "Olivenöl",
        "nameEN": "Olive Oil",
        "amount": "3 EL Olivenöl",
        "amountEN": "3 tbsp olive oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1/2 TL Meersalz",
        "amountEN": "1/2 tsp sea salt"
      }
    ],
    "instructions": [
      "Kartoffeln schälen, in dünne Scheiben schneiden und in Olivenöl 12 Min. braten.",
      "Gehackten Knoblauch dazugeben.",
      "Kabeljau in Mundgerechte Stücke schneiden, auf die Kartoffeln legen und 8 Min. sanft garen.",
      "Mit Meersalz würzen und warm genießen."
    ],
    "instructionsEN": [
      "Peel potatoes, slice thinly and fry in olive oil for 12 min.",
      "Add minced garlic.",
      "Cut cod into bite-sized pieces, place on top of potatoes and gently cook 8 min.",
      "Season with sea salt and enjoy warm."
    ]
  },
  {
    "id": "eve-08",
    "title": "Chinesischer Wok mit Austernpilzen, Meeresalgen & Ingwer",
    "titleEN": "Chinese Oyster Mushroom & Seaweed Wok with Ginger",
    "mealName": "Chinese Oyster Mushroom & Seaweed Wok",
    "description": "Fernöstliches aromatisches Abendgericht aus Pilzen, Algen und würzigen Wurzeln.",
    "descriptionEN": "Far-eastern aromatic evening dish made from mushrooms, algae, and spicy roots.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Chinesisch",
    "cuisineEN": "Chinese",
    "isPreloaded": true,
    "tags": [
      "Chinesisch",
      "Austernpilze",
      "Meeresalgen",
      "Ingwer"
    ],
    "ingredients": [
      {
        "name": "Austernpilze",
        "nameEN": "Oyster Mushrooms",
        "amount": "250g Austernpilze",
        "amountEN": "250g oyster mushrooms"
      },
      {
        "name": "Meeresalgen (Nori, Wakame)",
        "nameEN": "Seaweed (Nori, Wakame)",
        "amount": "2 Blätter Nori-Algen",
        "amountEN": "2 nori seaweed sheets"
      },
      {
        "name": "Ingwer",
        "nameEN": "Ginger",
        "amount": "20g frischer Ingwer",
        "amountEN": "20g fresh ginger"
      },
      {
        "name": "Zwiebeln",
        "nameEN": "Onions",
        "amount": "1 Zwiebel",
        "amountEN": "1 onion"
      },
      {
        "name": "Sesamöl",
        "nameEN": "Sesame Oil",
        "amount": "2 EL Sesamöl",
        "amountEN": "2 tbsp sesame oil"
      }
    ],
    "instructions": [
      "Ingwer und Zwiebeln feinhacken, Austernpilze zupfen.",
      "Sesamöl im Wok erhitzen, Ingwer und Zwiebeln anbraten.",
      "Austernpilze hinzugeben und 6 Min. scharf anbraten.",
      "Nori-Algen in Streifen schneiden, unterrühren und heiß servieren."
    ],
    "instructionsEN": [
      "Finely chop ginger and onion, tear oyster mushrooms.",
      "Heat sesame oil in a wok, sauté ginger and onion.",
      "Add oyster mushrooms and stir-fry vigorously for 6 min.",
      "Slice nori sheets into strips, toss in and serve hot."
    ]
  },
  {
    "id": "dawn-04",
    "title": "Amerikanische Buchweizen-Pancakes mit Blaubeer-Kompott & Ahornsirup",
    "titleEN": "American Buckwheat Pancakes with Blueberry Compote & Maple Syrup",
    "mealName": "American Buckwheat Pancakes",
    "description": "Perfekte Dawn Transition Kombination aus Getreide und morgendlicher Baumnahrung.",
    "descriptionEN": "Perfect Dawn Transition combination of midday grains and morning tree foods.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Amerikanisch",
    "cuisineEN": "American",
    "isPreloaded": true,
    "tags": [
      "Dawn Transition",
      "Pancakes",
      "Buchweizen",
      "Blaubeeren"
    ],
    "ingredients": [
      {
        "name": "Buchweizen",
        "nameEN": "Buckwheat",
        "amount": "120g Buchweizenmehl",
        "amountEN": "120g buckwheat flour"
      },
      {
        "name": "Wilde Heidelbeeren",
        "nameEN": "Wild Blueberries",
        "amount": "150g Heidelbeeren",
        "amountEN": "150g blueberries"
      },
      {
        "name": "Ahornsirup",
        "nameEN": "Maple Syrup",
        "amount": "3 EL Ahornsirup",
        "amountEN": "3 tbsp maple syrup"
      },
      {
        "name": "Kokosöl",
        "nameEN": "Coconut Oil",
        "amount": "1 EL Kokosöl",
        "amountEN": "1 tbsp coconut oil"
      }
    ],
    "instructions": [
      "Buchweizenmehl mit Wasser zu einem dicken Pancake-Teig verrühren.",
      "Heidelbeeren mit 1 EL Ahornsirup sanft 5 Min. köcheln lassen.",
      "Pancakes in Kokosöl goldbraun ausbacken.",
      "Mit Blaubeer-Kompott und weiterem Ahornsirup servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Mix buckwheat flour with water into a thick pancake batter.",
      "Simmer blueberries with 1 tbsp maple syrup for 5 min.",
      "Fry pancakes in coconut oil until golden brown.",
      "Serve with blueberry compote and extra maple syrup (11:30 - 12:30)."
    ]
  },
  {
    "id": "dusk-04",
    "title": "Vietnamesische Pho-Reisnudelsuppe mit Forellenfilet & Ingwer",
    "titleEN": "Vietnamese Pho Rice Noodle Soup with Trout & Ginger",
    "mealName": "Vietnamese Pho & Trout Soup",
    "description": "Wohtuend-warme Dusk Transition Kombination aus Reisnudeln, Forelle und Abendwurzeln.",
    "descriptionEN": "Soothing warm Dusk Transition combination of rice noodles, trout, and evening roots.",
    "timeWindow": "Dusk Transition",
    "diet": "Pescetarian",
    "dietEN": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Vietnamesisch",
    "cuisineEN": "Vietnamese",
    "isPreloaded": true,
    "tags": [
      "Dusk Transition",
      "Pho",
      "Reisnudeln",
      "Forelle"
    ],
    "ingredients": [
      {
        "name": "Reisnudeln",
        "nameEN": "Rice Noodles",
        "amount": "120g Reisnudeln",
        "amountEN": "120g rice noodles"
      },
      {
        "name": "Forelle",
        "nameEN": "Trout",
        "amount": "200g Forellenfilet",
        "amountEN": "200g trout fillet"
      },
      {
        "name": "Lauch / Porree",
        "nameEN": "Leek",
        "amount": "1/2 Stange Lauch",
        "amountEN": "1/2 leek"
      },
      {
        "name": "Ingwer",
        "nameEN": "Ginger",
        "amount": "15g Ingwer",
        "amountEN": "15g ginger"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "1 Zehe Knoblauch",
        "amountEN": "1 clove garlic"
      }
    ],
    "instructions": [
      "Ingwer und Knoblauch in dünne Scheiben schneiden und in Wasser aufkochen.",
      "Reisnudeln separat kochen und abtropfen.",
      "Forellenfilet und Lauchringe in die kochende Brūhe geben und 6 Min. gar ziehen lassen.",
      "Nudeln auf Schalen verteilen und mit heißer Forellen-Brühe aufgießen (18:00 - 19:00 Uhr)."
    ],
    "instructionsEN": [
      "Slice ginger and garlic thinly and bring to a boil in water.",
      "Boil rice noodles separately and drain.",
      "Add trout fillet and leek rings to the boiling broth and poach for 6 min.",
      "Divide noodles into bowls and ladle hot trout broth over (18:00 - 19:00)."
    ]
  },
  {
    "id": "mid-de-02",
    "title": "Dinkel-Gemüseeintopf mit Brokkoli & Karotten",
    "titleEN": "Spelt & Bush Veggie Stew with Broccoli & Carrots",
    "mealName": "German Spelt & Veggie Stew",
    "description": "Deftiger deutscher Eintopf aus Dinkelkörnern, knackigem Brokkoli und frischem Olivenöl für die Mittagszeit.",
    "descriptionEN": "Hearty German stew made from spelt grains, crisp broccoli, and fresh olive oil for the Midday window.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": ["Eintopf", "Dinkel", "Mittag", "Deftig"],
    "ingredients": [
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "150g Dinkelkörner", "amountEN": "150g spelt grains" },
      { "name": "Brokkoli", "nameEN": "Broccoli", "amount": "200g Brokkoliröschen", "amountEN": "200g broccoli florets" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Salz", "amountEN": "1 pinch salt" }
    ],
    "instructions": [
      "Dinkelkörner in leicht gesalzenem Wasser etwa 20 Minuten gar kochen.",
      "Brokkoliröschen und Zucchiniwürfel hinzufügen und 8 Minuten mitköcheln lassen.",
      "Mit Olivenöl und einer Prise meersalzfreiem Diamantsalz verfeinern und warm servieren."
    ],
    "instructionsEN": [
      "Boil spelt grains in lightly salted water for about 20 minutes.",
      "Add broccoli florets and diced zucchini, simmering for another 8 minutes.",
      "Drizzle with olive oil, season with a pinch of salt, and serve hot."
    ],
    "tips": ["Perfekt vorzubereiten und als nahrhaftes Mittagsgericht geeignet."],
    "tipsEN": ["Great for meal prep and perfect as a nourishing Midday meal."]
  },
  {
    "id": "eve-de-02",
    "title": "Norddeutscher Kartoffelsalat mit Räucherlachs & Meerrettich",
    "titleEN": "North German Potato Salad with Smoked Salmon & Horseradish",
    "mealName": "North German Potato & Salmon Salad",
    "description": "Klassisches abendliches Wurzelgericht mit feinen Kartoffeln, Atlantik-Räucherlachs und leichtem Meerrettich-Dressing.",
    "descriptionEN": "Classic evening root dish featuring delicate potatoes, Atlantic smoked salmon, and a mild horseradish dressing.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": ["Kartoffeln", "Lachs", "Abend", "Norddeutsch"],
    "ingredients": [
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "400g vorwiegend festkochende Kartoffeln", "amountEN": "400g potatoes" },
      { "name": "Lachs", "nameEN": "Salmon (Atlantic)", "amount": "150g Räucherlachs", "amountEN": "150g smoked salmon" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 kleine Zehe Knoblauch", "amountEN": "1 small clove garlic" },
      { "name": "Meerrettich", "nameEN": "Horseradish", "amount": "1 TL frischer Meerrettich", "amountEN": "1 tsp fresh horseradish" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Die Kartoffeln in der Schale kochen, abkühlen lassen, schälen und in Scheiben schneiden.",
      "Meerrettich, feingehackten Knoblauch und Meersalz vermengen.",
      "Kartoffeln mit dem Dressing vermischen und mit zarten Räucherlachsstreifen anrichten."
    ],
    "instructionsEN": [
      "Boil potatoes in their skins, cool, peel, and slice.",
      "Mix horseradish, finely minced garlic, and sea salt.",
      "Combine potatoes with dressing and serve topped with tender smoked salmon strips."
    ],
    "tips": ["Optimal für das Evening Window, da Kartoffeln ausschließlich abends verzehrt werden."],
    "tipsEN": ["Optimal for the Evening Window since potatoes should be consumed strictly in the evening."]
  },
  {
    "id": "mid-by-01",
    "title": "Bayerisches Hähnchengeschnetzeltes mit Dinkel-Spätzle",
    "titleEN": "Bavarian Chicken Ragout with Spelt Spätzle",
    "mealName": "Bavarian Chicken & Spelt Spätzle",
    "description": "Zartes Hähnchenbrustfilet in cremiger Sauce mit hausgemachten Dinkel-Spätzle und knackiger Zucchini.",
    "descriptionEN": "Tender chicken breast fillet in creamy sauce served with homemade spelt spätzle and crisp zucchini.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Bayerisch",
    "cuisineEN": "Bavarian",
    "isPreloaded": true,
    "tags": ["Geflügel", "Spätzle", "Bayerisch", "Mittag"],
    "ingredients": [
      { "name": "Hähnchenbrust", "nameEN": "Chicken Breast", "amount": "250g Hähnchenbrustfilet, streifig", "amountEN": "250g chicken breast fillet, sliced" },
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "150g Dinkel-Spätzle", "amountEN": "150g spelt spätzle" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1 EL Olivenöl", "amountEN": "1 tbsp olive oil" },
      { "name": "Cayennepfeffer", "nameEN": "Cayenne Pepper", "amount": "1 Prise Cayennepfeffer", "amountEN": "1 pinch cayenne pepper" }
    ],
    "instructions": [
      "Dinkel-Spätzle in kochendem Wasser 8 Minuten gar kochen und abtropfen.",
      "Hähnchenstreifen in Olivenöl goldbraun anbraten, Zucchiniwürfel hinzufügen und mitgaren.",
      "Mit einer Prise Cayennepfeffer würzen und zusammen mit den Spätzle anrichten."
    ],
    "instructionsEN": [
      "Cook spelt spätzle in boiling water for 8 minutes and drain.",
      "Sauté chicken strips in olive oil until golden, add zucchini cubes and cook through.",
      "Season with a pinch of cayenne pepper and serve with the spätzle."
    ],
    "tips": ["Ausschließlich Cayennepfeffer anstelle von schwarzem Pfeffer verwenden."],
    "tipsEN": ["Strictly use cayenne pepper instead of black pepper."]
  },
  {
    "id": "eve-by-01",
    "title": "Bayerischer Schwammerltopf mit Röstkartoffeln",
    "titleEN": "Bavarian Wild Mushroom Ragout with Roasted Potatoes",
    "mealName": "Bavarian Mushroom & Potato Bowl",
    "description": "Aromatische Pilze und Champignons in Röstknoblauch-Sud, serviert mit knusprigen Bayerischen Röstkartoffeln.",
    "descriptionEN": "Aromatic wild mushrooms in roasted garlic jus, served with crispy Bavarian roasted potatoes.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Bayerisch",
    "cuisineEN": "Bavarian",
    "isPreloaded": true,
    "tags": ["Pilze", "Kartoffeln", "Bayerisch", "Abend"],
    "ingredients": [
      { "name": "Champignons", "nameEN": "Button Mushrooms", "amount": "250g frische Champignons / Waldpilze", "amountEN": "250g fresh button or wild mushrooms" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "350g gegarte Kartoffeln, in Scheiben", "amountEN": "350g cooked potatoes, sliced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch, gehackt", "amountEN": "2 cloves garlic, minced" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Gegarte Kartoffelscheiben in Ghee in der Pfanne knusprig braun anbraten.",
      "In einer zweiten Pfanne die Pilze und gehackten Knoblauch scharf anbraten.",
      "Pilze über den Röstkartoffeln anrichten und mit Meersalz abschmecken."
    ],
    "instructionsEN": [
      "Fry cooked potato slices in ghee until crispy and brown.",
      "Sauté mushrooms and minced garlic in a separate pan over high heat.",
      "Spoon mushrooms over the roasted potatoes and season with sea salt."
    ],
    "tips": ["Pilze gehören dank ihres Nachtstoffwechsels ins Evening Window."],
    "tipsEN": ["Fungi belong in the Evening Window due to their nocturnal metabolic pathway."]
  },
  {
    "id": "dawn-at-01",
    "title": "Wiener Apfel-Hafer-Schmarrn mit Mandeln",
    "titleEN": "Viennese Apple & Oat Kaiserschmarrn with Almonds",
    "mealName": "Viennese Apple Oat Kaiserschmarrn",
    "description": "Feiner österreichischer Schmarrn aus Haferflocken und geriebenem Apfel, garniert mit Mandeln und Ahornsirup.",
    "descriptionEN": "Delicate Austrian Kaiserschmarrn made from rolled oats and grated apple, garnished with almonds and maple syrup.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Österreichisch",
    "cuisineEN": "Austrian",
    "isPreloaded": true,
    "tags": ["Schmarrn", "Apfel", "Hafer", "Dawn Transition"],
    "ingredients": [
      { "name": "Haferflocken", "nameEN": "Oats (Rolled)", "amount": "100g Haferflocken", "amountEN": "100g rolled oats" },
      { "name": "Apfel", "nameEN": "Apple", "amount": "1 großer Apfel, geraspelt", "amountEN": "1 large apple, grated" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "30g gehobelte Mandeln", "amountEN": "30g flaked almonds" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "2 EL Ahornsirup", "amountEN": "2 tbsp maple syrup" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee zum Ausbacken", "amountEN": "1 tbsp ghee for frying" }
    ],
    "instructions": [
      "Haferflocken mit etwas Wasser zu einem dicken Teig quellen lassen und geraspelten Apfel unterheben.",
      "Ghee in der Pfanne erhitzen, Teig eingießen und beidseitig goldgelb ausbacken.",
      "Den Teig mit zwei Gabeln in kleine Stücke zupfen, mit gehobelten Mandeln und Ahornsirup servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Soak oats in a little water to form a thick batter and fold in grated apple.",
      "Heat ghee in a pan, pour in batter, and fry both sides until golden brown.",
      "Tear into bite-sized pieces using two forks, sprinkle with flaked almonds and maple syrup (11:30 - 12:30)."
    ],
    "tips": ["Erlaubte Dawn Transition (11:30-12:30 Uhr): Kombination von Baumfrucht (Apfel) & Getreide (Hafer)."],
    "tipsEN": ["Permitted Dawn Transition (11:30-12:30): Combination of tree fruit (apple) & grain (oats)."]
  },
  {
    "id": "eve-at-01",
    "title": "Steirischer Erdepfel-Käferbohnensalat mit Kürbiskernöl",
    "titleEN": "Styrian Potato & Scarlet Runner Bean Salad with Pumpkin Seed Oil",
    "mealName": "Styrian Potato & Bean Salad",
    "description": "Dunkler steirischer Abend-Salat aus gekochten Erdepfeln (Kartoffeln), Erdbohnen und tiefgrünem Kürbiskernöl.",
    "descriptionEN": "Dark Styrian evening salad composed of boiled potatoes, runner beans, and deep green pumpkin seed oil.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Österreichisch",
    "cuisineEN": "Austrian",
    "isPreloaded": true,
    "tags": ["Steiermark", "Kartoffeln", "Kürbiskernöl", "Abend"],
    "ingredients": [
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "300g gekochte Erdepfel, gewürfelt", "amountEN": "300g boiled potatoes, diced" },
      { "name": "Erdnuss", "nameEN": "Peanut", "amount": "150g gekochte Käferbohnen / Erdbohnen", "amountEN": "150g cooked runner beans" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe Knoblauch, zerdrückt", "amountEN": "1 clove garlic, crushed" },
      { "name": "Kürbiskernöl", "nameEN": "Pumpkin Seed Oil", "amount": "2 EL echtes steirisches Kürbiskernöl", "amountEN": "2 tbsp Styrian pumpkin seed oil" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Erdepfel-Würfel und Käferbohnen in eine Salatschüssel geben.",
      "Zerdrückten Knoblauch mit Steirischem Kürbiskernöl und Meersalz verrühren.",
      "Über den Salat gießen, sanft vermengen und abends genießen."
    ],
    "instructionsEN": [
      "Place potato cubes and runner beans into a salad bowl.",
      "Whisk crushed garlic with Styrian pumpkin seed oil and sea salt.",
      "Pour over the salad, toss gently, and enjoy in the evening."
    ],
    "tips": ["Kürbiskernöl verleiht dem Abendgericht eine nussige Note und passt perfekt zu Wurzeln."],
    "tipsEN": ["Pumpkin seed oil adds a rich nutty note and pairs perfectly with roots."]
  },
  {
    "id": "morn-it-01",
    "title": "Sizilianischer Feigen-Granatapfel-Salat mit Pinienkernen",
    "titleEN": "Sicilian Fig & Pomegranate Salad with Pine Nuts",
    "mealName": "Sicilian Morning Fig Salad",
    "description": "Süße sizilianische Feigen, frische Granatapfelkerne und geröstete Pinienkerne mit Orangenblütenhonig.",
    "descriptionEN": "Sweet Sicilian figs, fresh pomegranate seeds, and toasted pine nuts drizzled with orange blossom honey.",
    "timeWindow": "Morning",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Sizilien", "Feigen", "Pinienkerne", "Morgen"],
    "ingredients": [
      { "name": "Feige", "nameEN": "Fig", "amount": "4 frische Feigen, geviertelt", "amountEN": "4 fresh figs, quartered" },
      { "name": "Granatapfel", "nameEN": "Pomegranate", "amount": "1/2 Granatapfel (Kerne)", "amountEN": "1/2 pomegranate (seeds)" },
      { "name": "Pinienkerne", "nameEN": "Pine Nuts", "amount": "25g geröstete Pinienkerne", "amountEN": "25g toasted pine nuts" },
      { "name": "Orangenblütenhonig", "nameEN": "Orange Blossom Honey", "amount": "1 EL Orangenblütenhonig", "amountEN": "1 tbsp orange blossom honey" }
    ],
    "instructions": [
      "Geviertelte Feigen und Granatapfelkerne in Schalen anrichten.",
      "Pinienkerne ohne Fett kurz anrösten und über die Früchte streuen.",
      "Mit flüssigem Orangenblütenhonig beträufeln und morgens servieren."
    ],
    "instructionsEN": [
      "Arrange quartered figs and pomegranate seeds in bowls.",
      "Lightly toast pine nuts in a dry pan and sprinkle over the fruit.",
      "Drizzle with orange blossom honey and serve in the morning."
    ],
    "tips": ["100% Baumfrüchte & Baumnüsse für maximale Energie im Morning Window."],
    "tipsEN": ["100% tree fruits & tree nuts for maximum morning vitality."]
  },
  {
    "id": "mid-it-03",
    "title": "Toskanische Dinkel-Pici mit Buschtomaten & Basilikum",
    "titleEN": "Tuscan Spelt Pici with Bush Tomatoes & Basil",
    "mealName": "Tuscan Spelt Pici Pasta",
    "description": "Traditionelle toskanische Dinkel-Pici in einer aromatischen Soße aus sonnengereiften Strauchtomaten und reinem Olivenöl.",
    "descriptionEN": "Traditional Tuscan spelt pici pasta in an aromatic sauce of sun-ripened vine tomatoes and extra virgin olive oil.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Toskana", "Pici", "Tomaten", "Mittag"],
    "ingredients": [
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "180g Dinkel-Pici / Pasta", "amountEN": "180g spelt pici or pasta" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "250g frische Strauchtomaten, gewürfelt", "amountEN": "250g fresh vine tomatoes, diced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL toskanisches Olivenöl", "amountEN": "2 tbsp Tuscan olive oil" },
      { "name": "Basilikum", "nameEN": "Basil", "amount": "1 Handvoll frische Basilikumblätter", "amountEN": "1 handful fresh basil leaves" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Salz", "amountEN": "1 pinch salt" }
    ],
    "instructions": [
      "Dinkel-Pici in reichlich kochendem Salzwasser al dente garen.",
      "Strauchtomatenwürfel in Olivenöl sanft dünsten, bis eine fruchtige Soße entsteht.",
      "Pici unter die Soße heben, mit frischem Basilikum garnieren und mittags servieren."
    ],
    "instructionsEN": [
      "Cook spelt pici in boiling salted water until al dente.",
      "Gently simmer diced vine tomatoes in olive oil until a rich sauce forms.",
      "Toss pici with the sauce, garnish with fresh basil, and serve at midday."
    ],
    "tips": ["Kein Käse hinzufügen, um die pflanzliche Reinheit des Mittagsfensters zu bewahren."],
    "tipsEN": ["Do not add cheese to preserve the plant purity of the Midday window."]
  },
  {
    "id": "eve-it-02",
    "title": "Venetianischer Kabeljau mit Knoblauch-Kartoffelpüree",
    "titleEN": "Venetian Baked Cod with Garlic Mashed Potatoes",
    "mealName": "Venetian Cod & Garlic Mash",
    "description": "Venedig-inspiriertes Abendgericht mit zartem Kabeljaufilet auf schmackhaftem Knoblauch-Kartoffelpüree.",
    "descriptionEN": "Venice-inspired evening dish featuring tender cod fillet served over flavorful garlic mashed potatoes.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Venedig", "Kabeljau", "Kartoffeln", "Abend"],
    "ingredients": [
      { "name": "Kabeljau / Dorsch", "nameEN": "Cod", "amount": "300g frisches Kabeljaufilet", "amountEN": "300g fresh cod fillet" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "400g mehligkochende Kartoffeln", "amountEN": "400g floury potatoes" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Kartoffeln kochen, mit Knoblauch, Ghee und Meersalz zu einem feinen Püree stampfen.",
      "Kabeljaufilet mit Meersalz würzen und in einer Pfanne mit etwas Ghee je Seite 3-4 Minuten sanft braten.",
      "Fisch auf dem Knoblauch-Kartoffelpüree anrichten und abends genießen."
    ],
    "instructionsEN": [
      "Boil potatoes, then mash with garlic, ghee, and sea salt until smooth.",
      "Season cod fillet with sea salt and gently pan-fry in ghee for 3-4 minutes per side.",
      "Serve the fish over the garlic mash and enjoy in the evening."
    ],
    "tips": ["Perfekte Symbiose aus Meeresfisch & Wurzelgemüse im Evening Window."],
    "tipsEN": ["A perfect synergy of saltwater fish & root vegetables in the Evening Window."]
  },
  {
    "id": "mid-eu-01",
    "title": "Europäische Dinkel-Gemüsepfanne mit Paprika & Zucchini",
    "titleEN": "European Spelt & Bush Veggie Skillet with Pepper & Zucchini",
    "mealName": "European Spelt Veggie Skillet",
    "description": "Bunte europäische Gemüsepfanne aus Dinkel, roter Paprika und Zucchini in kaltgepresstem Olivenöl.",
    "descriptionEN": "Colorful European veggie skillet made with spelt grains, red bell pepper, and zucchini in extra virgin olive oil.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Europäisch",
    "cuisineEN": "European",
    "isPreloaded": true,
    "tags": ["Europa", "Dinkel", "Paprika", "Mittag"],
    "ingredients": [
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "150g Dinkelkörner", "amountEN": "150g spelt grains" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "1 rote Paprika, streifig", "amountEN": "1 red bell pepper, sliced" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Salz", "amountEN": "1 pinch salt" }
    ],
    "instructions": [
      "Dinkelkörner in Salzwasser ca. 15 Minuten blanchieren.",
      "Paprikastreifen und Zucchiniwürfel in Olivenöl knackig anbraten.",
      "Dinkel untermischen, mit Salz abschmecken und mittags heiß genießen."
    ],
    "instructionsEN": [
      "Boil spelt grains in salted water for about 15 minutes.",
      "Sauté sliced bell pepper and diced zucchini in olive oil until tender-crisp.",
      "Toss in spelt, season with salt, and enjoy hot at midday."
    ],
    "tips": ["Buschgemüse & Getreide vereinen sich harmonisch im Mittagsfenster."],
    "tipsEN": ["Bush vegetables & grains combine harmoniously in the Midday window."]
  },
  {
    "id": "eve-eu-01",
    "title": "Nordeuropäischer Wurzeleintopf mit Räucherlachs & Dill",
    "titleEN": "North European Root Stew with Smoked Salmon & Dill",
    "mealName": "North European Root & Salmon Stew",
    "description": "Erwärmender nordeuropäischer Eintopf aus Kartoffeln, Karotten und Knoblauch mit feinen Räucherlachsstreifen.",
    "descriptionEN": "Warming North European stew featuring potatoes, carrots, and garlic topped with delicate smoked salmon strips.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Europäisch",
    "cuisineEN": "European",
    "isPreloaded": true,
    "tags": ["Wurzeln", "Lachs", "Europa", "Abend"],
    "ingredients": [
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "350g Kartoffeln, gewürfelt", "amountEN": "350g potatoes, diced" },
      { "name": "Möhren / Karotten", "nameEN": "Carrot", "amount": "150g Karotten, in Scheiben", "amountEN": "150g carrots, sliced" },
      { "name": "Lachs", "nameEN": "Salmon (Atlantic)", "amount": "120g Räucherlachs", "amountEN": "120g smoked salmon" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe Knoblauch", "amountEN": "1 clove garlic" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Kartoffelwürfel, Karottenscheiben und Knoblauch in leicht gesalzenem Wasser weich kochen.",
      "Eintopf leicht anstampfen und mit Meersalz abschmecken.",
      "Mit frischen Räucherlachsstreifen garnieren und abends genießen."
    ],
    "instructionsEN": [
      "Simmer diced potatoes, sliced carrots, and garlic in lightly salted water until tender.",
      "Roughly mash stew and season with sea salt.",
      "Top with fresh smoked salmon strips and enjoy in the evening."
    ],
    "tips": ["Ideale Symbiose aus Meeresfisch und Wurzeln im Evening Window."],
    "tipsEN": ["An ideal synergy of saltwater fish and root vegetables in the Evening Window."]
  },
  {
    "id": "morn-us-01",
    "title": "Kalifornische Avocado-Pekannuss-Schale mit Ahornsirup",
    "titleEN": "Californian Avocado & Pecan Bowl with Maple Syrup",
    "mealName": "Californian Morning Avocado Bowl",
    "description": "Erfrischende Schale aus reifer Avocado, knackigen Pekannüssen und reinem Ahornsirup für den Morgen.",
    "descriptionEN": "Refreshing morning bowl featuring ripe avocado, crunchy pecans, and pure maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Amerikanisch",
    "cuisineEN": "American",
    "isPreloaded": true,
    "tags": ["Kalifornien", "Avocado", "Pekannuss", "Morgen"],
    "ingredients": [
      { "name": "Avocado", "nameEN": "Avocado", "amount": "1 reife Avocado, in Spalten", "amountEN": "1 ripe avocado, wedged" },
      { "name": "Pekannüsse", "nameEN": "Pecans", "amount": "40g gehobelte Pekannüsse", "amountEN": "40g chopped pecans" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1.5 EL reiner Ahornsirup", "amountEN": "1.5 tbsp pure maple syrup" }
    ],
    "instructions": [
      "Avocado entkernen, schälen und in feine Spalten schneiden.",
      "In Schalen anrichten und mit knackigen Pekannüssen bestreuen.",
      "Mit flüssigem Ahornsirup beträufeln und sofort morgens genießen."
    ],
    "instructionsEN": [
      "Pit, peel, and slice avocado into neat wedges.",
      "Arrange in bowls and top with crunchy chopped pecans.",
      "Drizzle with pure maple syrup and enjoy immediately in the morning."
    ],
    "tips": ["Avocado und Pekannüsse wachsen an Bäumen und liefern reichhaltige Energie."],
    "tipsEN": ["Avocado and pecans grow on trees, offering rich clean morning energy."]
  },
  {
    "id": "dawn-us-01",
    "title": "Amerikanische Buchweizen-Pancakes mit Apfelkompott",
    "titleEN": "American Buckwheat Pancakes with Apple Compote",
    "mealName": "American Buckwheat Pancakes",
    "description": "Fluffige Buchweizen-Pancakes serviert mit warmem Apfelkompott und Ahornsirup.",
    "descriptionEN": "Fluffy buckwheat pancakes served with warm apple compote and pure maple syrup.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Amerikanisch",
    "cuisineEN": "American",
    "isPreloaded": true,
    "tags": ["Pancakes", "Buchweizen", "Apfel", "Dawn Transition"],
    "ingredients": [
      { "name": "Buchweizen", "nameEN": "Buckwheat (Whole Grain)", "amount": "120g Buchweizenmehl", "amountEN": "120g buckwheat flour" },
      { "name": "Apfel", "nameEN": "Apple", "amount": "2 Äpfel, gewürfelt & gedünstet", "amountEN": "2 apples, diced & stewed" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "2 EL Ahornsirup", "amountEN": "2 tbsp maple syrup" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee zum Anbraten", "amountEN": "1 tbsp ghee for frying" }
    ],
    "instructions": [
      "Buchweizenmehl mit etwas Wasser zu einem glatten Pancakes-Teig anrühren.",
      "In einer Pfanne mit Ghee kleine Pancakes von beiden Seiten goldbraun ausbacken.",
      "Gedünstete Apfelwürfel auf den Pancakes anrichten und mit Ahornsirup beträufeln (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Whisk buckwheat flour with water to form a smooth pancake batter.",
      "Fry small pancakes in ghee until golden brown on both sides.",
      "Spoon stewed apple compote over pancakes and drizzle with maple syrup (11:30 - 12:30)."
    ],
    "tips": ["Kombination von Getreide (Buchweizen) & Baumfrucht (Apfel) in der Dawn Transition."],
    "tipsEN": ["Combination of grain (buckwheat) & tree fruit (apple) during Dawn Transition."]
  },
  {
    "id": "eve-us-01",
    "title": "New England Garnele & Süßkartoffel-Pan",
    "titleEN": "New England Shrimp & Sweet Potato Skillet",
    "mealName": "New England Shrimp & Sweet Potato",
    "description": "Köstliche Pfanne aus frischen Atlantik-Garnelen, gewürfelten Süßkartoffeln und Röstknoblauch.",
    "descriptionEN": "Delicious skillet featuring fresh Atlantic shrimp, diced sweet potatoes, and roasted garlic.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Amerikanisch",
    "cuisineEN": "American",
    "isPreloaded": true,
    "tags": ["Garnelen", "Süßkartoffel", "USA", "Abend"],
    "ingredients": [
      { "name": "Meeresfrüchte / Garnelen", "nameEN": "Seafood / Shrimp", "amount": "200g Garnelen, geschält", "amountEN": "200g peeled shrimp" },
      { "name": "Süßkartoffeln", "nameEN": "Sweet Potato", "amount": "300g Süßkartoffeln, gewürfelt", "amountEN": "300g sweet potatoes, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch, fein gegart", "amountEN": "2 cloves garlic, minced" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Süßkartoffelwürfel in Ghee in der Pfanne etwa 15 Minuten weich braten.",
      "Knoblauch und Garnelen dazugeben und 4 Minuten gar schwenken.",
      "Mit einer Prise Meersalz abschmecken und abends genießen."
    ],
    "instructionsEN": [
      "Sauté sweet potato cubes in ghee for about 15 minutes until tender.",
      "Add garlic and shrimp, tossing for 4 minutes until shrimp are cooked through.",
      "Season with a pinch of sea salt and serve in the evening."
    ],
    "tips": ["Süßkartoffeln als Wurzeln & Garnelen als Meeresfrüchte sind ideal fürs Evening Window."],
    "tipsEN": ["Sweet potatoes as roots & shrimp as seafood are ideal for the Evening Window."]
  },
  {
    "id": "mid-hu-01",
    "title": "Ungarisches Rindergulasch mit Dinkel-Nudeln & Spitzpaprika",
    "titleEN": "Hungarian Beef Goulash with Spelt Pasta & Sweet Pepper",
    "mealName": "Hungarian Beef Goulash & Spelt Pasta",
    "description": "Traditionelles ungarisches Rindergulasch mit roter Spitzpaprika, Tomaten und Dinkel-Nudeln.",
    "descriptionEN": "Traditional Hungarian beef goulash cooked with sweet pointed pepper, tomatoes, and served with spelt pasta.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 35,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Ungarisch",
    "cuisineEN": "Hungarian",
    "isPreloaded": true,
    "tags": ["Gulasch", "Rind", "Dinkel", "Ungarisch", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "300g Rindergulaschfleisch, gewürfelt", "amountEN": "300g beef goulash meat, cubed" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "2 rote Spitzpaprika, gewürfelt", "amountEN": "2 sweet pointed peppers, diced" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Strauchtomaten, gehackt", "amountEN": "2 vine tomatoes, chopped" },
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "150g Dinkel-Nudeln", "amountEN": "150g spelt pasta" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1.5 EL Olivenöl", "amountEN": "1.5 tbsp olive oil" }
    ],
    "instructions": [
      "Rindergulaschwürfel in Olivenöl anbraten, Spitzpaprika und Tomaten dazugeben und abgedeckt sanft schmoren.",
      "Dinkel-Nudeln in kochendem Salzwasser al dente garen.",
      "Das mürbe Rindergulasch zusammen mit den Dinkel-Nudeln servieren."
    ],
    "instructionsEN": [
      "Sauté beef cubes in olive oil, add sweet peppers and tomatoes, and simmer covered until tender.",
      "Cook spelt pasta in boiling salted water until al dente.",
      "Serve the tender beef goulash alongside spelt pasta."
    ],
    "tips": ["Keine saure Sahne oder Kartoffeln mittags hinzufügen, um die Fensterreinheit zu wahren."],
    "tipsEN": ["Do not add sour cream or potatoes at midday to preserve window purity."]
  },
  {
    "id": "mid-hu-02",
    "title": "Ungarische Paprikaschke mit Hähnchen & Basmati-Reis",
    "titleEN": "Hungarian Chicken Paprikash with Basmati Rice",
    "mealName": "Hungarian Chicken Paprikash",
    "description": "Aromatisches ungarisches Hähnchengeschnetzeltes mit edelsüßer Paprika und duftendem Basmati-Reis.",
    "descriptionEN": "Aromatic Hungarian chicken ragout seasoned with sweet paprika and served with fragrant basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Ungarisch",
    "cuisineEN": "Hungarian",
    "isPreloaded": true,
    "tags": ["Hähnchen", "Reis", "Paprika", "Ungarisch"],
    "ingredients": [
      { "name": "Hähnchenbrust", "nameEN": "Chicken Breast", "amount": "250g Hähnchenbrust, gewürfelt", "amountEN": "250g chicken breast, diced" },
      { "name": "Basmati Reis", "nameEN": "Basmati Rice", "amount": "150g Basmati-Reis", "amountEN": "150g basmati rice" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "1 große rote Paprika, streifig", "amountEN": "1 large red bell pepper, sliced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1 EL Olivenöl", "amountEN": "1 tbsp olive oil" },
      { "name": "Cayennepfeffer", "nameEN": "Cayenne Pepper", "amount": "1 Prise Cayennepfeffer", "amountEN": "1 pinch cayenne pepper" }
    ],
    "instructions": [
      "Basmati-Reis in leicht gesalzenem Wasser 12 Minuten dämpfen.",
      "Hähnchenstücke und Paprikastreifen in Olivenöl anbraten.",
      "Mit Prise Cayennepfeffer abschmecken und mit Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Steam basmati rice in lightly salted water for 12 minutes.",
      "Sauté chicken pieces and bell pepper strips in olive oil.",
      "Season with a pinch of cayenne pepper and serve with basmati rice."
    ],
    "tips": ["Cayennepfeffer ersetzt den schwarzen Pfeffer perfekt."],
    "tipsEN": ["Cayenne pepper is the approved substitute for black pepper."]
  },
  {
    "id": "eve-hu-01",
    "title": "Ungarische Zwiebel-Kartoffel-Suppe mit Knoblauch",
    "titleEN": "Hungarian Garlic Potato & Onion Soup",
    "mealName": "Hungarian Potato & Garlic Soup",
    "description": "Sämige ungarische Abend-Suppe aus Kartoffeln, reichlich Zwiebeln, Knoblauch und Meersalz.",
    "descriptionEN": "Velvety Hungarian evening soup cooked from potatoes, plentiful onions, garlic, and sea salt.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Ungarisch",
    "cuisineEN": "Hungarian",
    "isPreloaded": true,
    "tags": ["Ungarn", "Kartoffeln", "Knoblauch", "Abend"],
    "ingredients": [
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "400g mehligkochende Kartoffeln", "amountEN": "400g floury potatoes" },
      { "name": "Zwiebeln", "nameEN": "Onion", "amount": "2 große Zwiebeln, gehackt", "amountEN": "2 large onions, chopped" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "3 Zehen Knoblauch, zerdrückt", "amountEN": "3 cloves garlic, crushed" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Zwiebeln und Knoblauch in Ghee andünsten, Kartoffelwürfel dazugeben.",
      "Mit Wasser aufgießen, 18 Minuten weich kochen und feinpürieren.",
      "Mit Meersalz abschmecken und warm am Abend servieren."
    ],
    "instructionsEN": [
      "Sauté onions and garlic in ghee, add diced potatoes.",
      "Pour in water, simmer for 18 minutes until tender, and blend until smooth.",
      "Season with sea salt and serve warm in the evening."
    ],
    "tips": ["Klassisches Wurzelgericht für Beruhigung und erholsamen Schlaf im Evening Window."],
    "tipsEN": ["Classic root dish promoting relaxation and restorative sleep in the Evening Window."]
  },
  {
    "id": "dusk-hu-01",
    "title": "Ungarische Fischsuppe (Halászlé) mit Reisnudeln & Karpfen",
    "titleEN": "Hungarian Fisherman's Soup (Halászlé) with Carp & Rice Noodles",
    "mealName": "Hungarian Halászlé Fish Soup",
    "description": "Traditionelle ungarische Halászlé mit feinem Süßwasserfisch (Karpfen/Forelle), Reisnudeln und Knoblauch.",
    "descriptionEN": "Traditional Hungarian Halászlé soup prepared with freshwater fish (carp/trout), rice noodles, and garlic.",
    "timeWindow": "Dusk Transition",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Ungarisch",
    "cuisineEN": "Hungarian",
    "isPreloaded": true,
    "tags": ["Ungarn", "Fisch", "Halaszle", "Dusk Transition"],
    "ingredients": [
      { "name": "Süßwasserfisch", "nameEN": "Freshwater Fish", "amount": "300g Karpfen- oder Forellenfilet", "amountEN": "300g carp or trout fillet" },
      { "name": "Reisnudeln", "nameEN": "Rice Noodles (100% Rice)", "amount": "100g Reisnudeln", "amountEN": "100g rice noodles" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch in Wasser aufkochen, Süßwasserfischstücke dazugeben und sanft 10 Minuten gar pochieren.",
      "Reisnudeln separat kochen und abtropfen.",
      "Nudeln auf Schalen verteilen, mit der heißen ungarischen Fischbrühe aufgießen (18:00 - 19:00 Uhr)."
    ],
    "instructionsEN": [
      "Bring garlic in water to a simmer, add freshwater fish pieces, and poach gently for 10 minutes.",
      "Boil rice noodles separately and drain.",
      "Divide noodles into bowls, pour hot Hungarian fish broth over, and serve (18:00 - 19:00)."
    ],
    "tips": ["Erlaubte Dusk Transition (18:00-19:00 Uhr): Kombination von Süßwasserfisch/Reis mit Wurzel-Knoblauch."],
    "tipsEN": ["Permitted Dusk Transition (18:00-19:00): Combination of freshwater fish/rice with root garlic."]
  },
  {
    "id": "mid-by-02",
    "title": "Klassische Bayerische Schinkennudeln",
    "titleEN": "Classic Bavarian Ham & Egg Pasta (Schinkennudeln)",
    "mealName": "Bavarian Schinkennudeln",
    "description": "Traditionelle Bayerische Schinkennudeln aus Hartweizengrieß-Nudeln, feinem Schinken und frisch gebratenem Ei in Ghee.",
    "descriptionEN": "Traditional Bavarian Schinkennudeln made with durum wheat semolina pasta, savory diced ham, and eggs pan-fried in ghee.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Bayerisch",
    "cuisineEN": "Bavarian",
    "isPreloaded": true,
    "tags": ["Bayerisch", "Schinken", "Nudeln", "Ei", "Mittag"],
    "ingredients": [
      { "name": "Semolina Durum Wheat Pasta", "nameEN": "Semolina Durum Wheat Pasta", "amount": "200g Hartweizengrieß-Nudeln", "amountEN": "200g durum wheat semolina pasta" },
      { "name": "Schweinefleisch", "nameEN": "Pork", "amount": "120g Schinken, gewürfelt", "amountEN": "120g diced ham" },
      { "name": "Exotische Tierprodukte & Eier", "nameEN": "Exotic Animal Products & Eggs", "amount": "2 frische Eier, verquirlt", "amountEN": "2 fresh eggs, beaten" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee zum Anbraten", "amountEN": "1 tbsp ghee for frying" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Diamond Crystal Kosher Salt", "amountEN": "1 pinch Diamond Crystal Kosher Salt" }
    ],
    "instructions": [
      "Hartweizengrieß-Nudeln in reichlich kochendem Wasser mit einer Prise Diamond Crystal Kosher Salt weich garen und abtropfen lassen.",
      "Ghee in einer großen Pfanne schmelzen und die Schinkenwürfel kurz darin anbraten.",
      "Die weichen Nudeln dazugeben, verquirlte Eier darübergießen und unter Wenden anbraten, bis das Ei gestockt ist."
    ],
    "tips": ["Ohne Zwiebeln zubereitet für optimale Verträglichkeit im Mittagsfenster."],
    "tipsEN": ["Prepared strictly without onions for optimal purity in the Midday window."]
  },
  {
    "id": "morn-tr-01",
    "title": "Tropische Ananas-Kokos-Schale mit Ahornsirup",
    "titleEN": "Tropical Pineapple & Coconut Bowl with Maple Syrup",
    "mealName": "Tropical Pineapple Coconut Bowl",
    "description": "Erfrischender Tropen-Fruchtsalat aus 100% Baumfrüchten und edlen Baumnüssen.",
    "descriptionEN": "Refreshing tropical fruit salad made from 100% tree fruits and premium tree nuts.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Tropisch",
    "cuisineEN": "Tropical",
    "isPreloaded": true,
    "tags": ["Tropisch", "Ananas", "Kokos", "Morgen"],
    "ingredients": [
      { "name": "Ananas", "nameEN": "Pineapple", "amount": "200g frische Ananas, gewürfelt", "amountEN": "200g fresh pineapple, diced" },
      { "name": "Banane", "nameEN": "Banana", "amount": "1 reife Banane, in Scheiben", "amountEN": "1 ripe banana, sliced" },
      { "name": "Kokosnuss", "nameEN": "Coconut", "amount": "2 EL Kokosraspel", "amountEN": "2 tbsp shredded coconut" },
      { "name": "Macadamianüsse", "nameEN": "Macadamia Nuts", "amount": "30g gehackte Macadamianüsse", "amountEN": "30g chopped macadamia nuts" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Ananas- und Bananenstücke in einer Schale vermengen.",
      "Mit Kokosraspeln und gehackten Macadamianüssen bestreuen.",
      "Mit Ahornsirup beträufeln und morgens servieren."
    ],
    "instructionsEN": [
      "Combine pineapple and banana pieces in a bowl.",
      "Sprinkle with shredded coconut and chopped macadamia nuts.",
      "Drizzle with maple syrup and serve in the morning."
    ],
    "tips": ["Rein pflanzliche Baumfrüchte & Nüsse im Morning Window."],
    "tipsEN": ["100% plant-based tree fruits & nuts in the Morning Window."]
  },
  {
    "id": "morn-or-01",
    "title": "Dattel-Walnuss-Energie-Schale mit Zimt",
    "titleEN": "Date & Walnut Energy Bowl with Cinnamon",
    "mealName": "Oriental Date & Walnut Bowl",
    "description": "Nährstoffreiche orientalische Frühstücksschale aus süßen Baumfrüchten und knackigen Walnüssen.",
    "descriptionEN": "Nutrient-dense oriental breakfast bowl featuring sweet tree fruits and crunchy walnuts.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Orientalisch",
    "cuisineEN": "Oriental",
    "isPreloaded": true,
    "tags": ["Datteln", "Walnuss", "Orientalisch", "Morgen"],
    "ingredients": [
      { "name": "Dattel", "nameEN": "Date", "amount": "6 frische Medjool-Datteln, entkernt", "amountEN": "6 fresh Medjool dates, pitted" },
      { "name": "Feige", "nameEN": "Fig", "amount": "3 frische Feigen, geviertelt", "amountEN": "3 fresh figs, quartered" },
      { "name": "Walnüsse", "nameEN": "Walnuts", "amount": "40g Walnusskerne", "amountEN": "40g walnut halves" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Entkernte Datteln und Feigen in feine Stücke schneiden.",
      "Walnusskerne grob hacken und unter das Obst heben.",
      "Mit Ahornsirup beträufeln und frischen Zimt darüber geben."
    ],
    "instructionsEN": [
      "Chop pitted dates and figs into bite-sized pieces.",
      "Coarsely chop walnuts and toss with the fruit.",
      "Drizzle with maple syrup and dust with fresh cinnamon."
    ],
    "tips": ["Perfekte Energiespender vor geistiger oder körperlicher Aktivität."],
    "tipsEN": ["Ideal energizer before mental or physical activity."]
  },
  {
    "id": "morn-med-01",
    "title": "Kirsch-Pfirsich-Fruchtsalat mit Pinienkernen",
    "titleEN": "Cherry & Peach Fruit Salad with Pine Nuts",
    "mealName": "Mediterranean Cherry & Peach Salad",
    "description": "Sommerlicher mediterraner Fruchtsalat mit zarten Pinienkernen und Baumblütenhonig.",
    "descriptionEN": "Summer Mediterranean fruit salad topped with delicate pine nuts and tree blossom honey.",
    "timeWindow": "Morning",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mediterran",
    "cuisineEN": "Mediterranean",
    "isPreloaded": true,
    "tags": ["Kirschen", "Pfirsich", "Pinienkerne", "Morgen"],
    "ingredients": [
      { "name": "Kirsche", "nameEN": "Cherry", "amount": "150g Süßkirschen, entsteint", "amountEN": "150g sweet cherries, pitted" },
      { "name": "Pfirsich", "nameEN": "Peach", "amount": "2 Pfirsiche, in Spalten", "amountEN": "2 peaches, wedged" },
      { "name": "Pinienkerne", "nameEN": "Pine Nuts", "amount": "30g geröstete Pinienkerne", "amountEN": "30g toasted pine nuts" },
      { "name": "Orangenblütenhonig", "nameEN": "Orange Blossom Honey", "amount": "1 EL Orangenblütenhonig", "amountEN": "1 tbsp orange blossom honey" }
    ],
    "instructions": [
      "Entsteinte Süßkirschen und Pfirsichspalten in Schalen geben.",
      "Pinienkerne fettfrei in der Pfanne goldgelb rösten.",
      "Über den Fruchtsalat streuen und mit Honig vollenden."
    ],
    "instructionsEN": [
      "Place pitted cherries and peach wedges in bowls.",
      "Dry-toast pine nuts in a pan until golden.",
      "Scatter over fruit salad and finish with honey."
    ],
    "tips": ["100% Baumfrüchte und Baumnüsse für optimale Vitalität."],
    "tipsEN": ["100% tree fruits and tree nuts for optimal morning vitality."]
  },
  {
    "id": "mid-med-01",
    "title": "Mediterrane Rinder-Hackpfanne mit Zucchini & Basmati-Reis",
    "titleEN": "Mediterranean Beef Mince Skillet with Zucchini & Basmati Rice",
    "mealName": "Mediterranean Beef Mince & Rice",
    "description": "Deftige Pfanne aus Landtier-Eiweiß, Strauchgemüse und duftendem Basmati-Reis.",
    "descriptionEN": "Hearty skillet combining beef mince, bush vegetables, and aromatic basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mediterran",
    "cuisineEN": "Mediterranean",
    "isPreloaded": true,
    "tags": ["Rind", "Zucchini", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "250g mageres Rinderhackfleisch", "amountEN": "250g lean beef mince" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Strauchtomaten, gehackt", "amountEN": "2 vine tomatoes, chopped" },
      { "name": "Basmati Reis", "nameEN": "Basmati Rice", "amount": "150g Basmati-Reis", "amountEN": "150g basmati rice" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1 EL Olivenöl", "amountEN": "1 tbsp olive oil" }
    ],
    "instructions": [
      "Basmati-Reis dämpfen.",
      "Rinderhackfleisch in Olivenöl krümelig braten, Zucchini und Tomaten dazugeben.",
      "Mit einer Prise Cayennepfeffer abschmecken und mit Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Steam basmati rice.",
      "Brown beef mince in olive oil, add zucchini and tomatoes.",
      "Season with a pinch of cayenne pepper and serve with basmati rice."
    ],
    "tips": ["Fleisch und Milchprodukte niemals mischen."],
    "tipsEN": ["Never mix meat and dairy products."]
  },
  {
    "id": "mid-fr-02",
    "title": "Französisches Ratatouille mit Vollkorn-Dinkel",
    "titleEN": "French Ratatouille with Whole Spelt",
    "mealName": "French Ratatouille & Spelt",
    "description": "Klassisches südfranzösisches Gemüsegericht serviert auf nahrhaftem Dinkelgetreide.",
    "descriptionEN": "Classic South French veggie stew served over nourishing spelt grain.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": ["Frankreich", "Ratatouille", "Dinkel", "Mittag"],
    "ingredients": [
      { "name": "Auberginen", "nameEN": "Aubergine (Eggplant)", "amount": "1/2 Aubergine, gewürfelt", "amountEN": "1/2 aubergine, diced" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "1 rote Paprika", "amountEN": "1 red bell pepper" },
      { "name": "Dinkel", "nameEN": "Spelt (Whole Grain)", "amount": "150g Dinkelkörner", "amountEN": "150g spelt grains" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" }
    ],
    "instructions": [
      "Dinkelkörner 20 Minuten gar kochen.",
      "Aubergine, Zucchini und Paprika in Olivenöl sanft dünsten.",
      "Das bunte Ratatouille auf dem Dinkelgetreide anrichten."
    ],
    "instructionsEN": [
      "Boil spelt grains for 20 minutes until tender.",
      "Gently sauté aubergine, zucchini, and bell pepper in olive oil.",
      "Serve the colorful ratatouille over cooked spelt."
    ],
    "tips": ["Harmonische Pflanzenvielfalt aus der Strauchzone."],
    "tipsEN": ["Harmonious plant variety from the bush zone."]
  },
  {
    "id": "mid-asia-03",
    "title": "Asiatische Putenbrust-Gemüsepfanne mit Buchweizen",
    "titleEN": "Asian Turkey Breast & Veggie Stir-Fry with Buckwheat",
    "mealName": "Asian Turkey & Buckwheat Stir-Fry",
    "description": "Leichtes asiatisches Mittagsgericht mit zartem Putenfleisch, Buschgemüse und Buchweizen.",
    "descriptionEN": "Light Asian midday meal with tender turkey fillet, bush veggies, and buckwheat.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Asiatisch",
    "cuisineEN": "Asian",
    "isPreloaded": true,
    "tags": ["Asien", "Pute", "Buchweizen", "Mittag"],
    "ingredients": [
      { "name": "Pute / Truthahn", "nameEN": "Turkey", "amount": "250g Putenbrust, in Streifen", "amountEN": "250g turkey breast, sliced" },
      { "name": "Brokkoli", "nameEN": "Broccoli", "amount": "150g Brokkoliröschen", "amountEN": "150g broccoli florets" },
      { "name": "Buchweizen", "nameEN": "Buckwheat (Whole Grain)", "amount": "120g Buchweizen", "amountEN": "120g buckwheat" },
      { "name": "Sesamöl", "nameEN": "Sesame Oil", "amount": "1 EL Sesamöl", "amountEN": "1 tbsp sesame oil" }
    ],
    "instructions": [
      "Buchweizen 12 Minuten kochen und abtropfen.",
      "Putenstreifen und Brokkoliröschen in Sesamöl anbraten.",
      "Unter den Buchweizen heben und mittags servieren."
    ],
    "instructionsEN": [
      "Cook buckwheat for 12 minutes and drain.",
      "Stir-fry turkey strips and broccoli florets in sesame oil.",
      "Toss with buckwheat and serve at midday."
    ],
    "tips": ["Mageres Geflügeleiweiß kombiniert mit Buchweizen."],
    "tipsEN": ["Lean poultry protein combined with buckwheat."]
  },
  {
    "id": "dawn-tr-01",
    "title": "Blaubeer-Haferflocken-Schale mit Mandeln",
    "titleEN": "Blueberry & Oat Bowl with Almonds",
    "mealName": "Dawn Blueberry Oat Bowl",
    "description": "Perfekte Übergangsmahlzeit aus Hafergetreide, Baumfrüchten (Apfel/Mandeln) und Beeren.",
    "descriptionEN": "Perfect transition meal of oat grain, tree fruits (apple/almonds), and blueberries.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "International",
    "cuisineEN": "International",
    "isPreloaded": true,
    "tags": ["Blaubeeren", "Hafer", "Dawn Transition"],
    "ingredients": [
      { "name": "Haferflocken", "nameEN": "Oats (Rolled)", "amount": "100g Haferflocken", "amountEN": "100g rolled oats" },
      { "name": "Blaubeere", "nameEN": "Blueberry", "amount": "100g frische Blaubeeren", "amountEN": "100g fresh blueberries" },
      { "name": "Apfel", "nameEN": "Apple", "amount": "1 Apfel, geraspelt", "amountEN": "1 apple, grated" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "30g gehackte Mandeln", "amountEN": "30g chopped almonds" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Haferflocken in heißem Wasser quellen lassen.",
      "Geraspelten Apfel und frische Blaubeeren unterheben.",
      "Mit gehackten Mandeln und Ahornsirup servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Soak rolled oats in hot water until soft.",
      "Fold in grated apple and fresh blueberries.",
      "Top with chopped almonds and maple syrup (11:30 - 12:30)."
    ],
    "tips": ["Dawn Transition: Verbindung von Morgen- und Mittagsenergie."],
    "tipsEN": ["Dawn Transition: Harmonizing morning and midday energy."]
  },
  {
    "id": "dusk-tr-01",
    "title": "Cremige Zucchini-Kartoffel-Suppe mit Knoblauch",
    "titleEN": "Creamy Zucchini & Potato Soup with Garlic",
    "mealName": "Dusk Zucchini Potato Soup",
    "description": "Sanfte Übergangssuppe, die Strauchgemüse (Mittag) mit Erd-Wurzeln (Abend) verbindet.",
    "descriptionEN": "Soothing transition soup bridging bush vegetables (midday) with root veggies (evening).",
    "timeWindow": "Dusk Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "International",
    "cuisineEN": "International",
    "isPreloaded": true,
    "tags": ["Zucchini", "Kartoffeln", "Dusk Transition"],
    "ingredients": [
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "2 Zucchini, gewürfelt", "amountEN": "2 zucchini, diced" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "250g Kartoffeln, gewürfelt", "amountEN": "250g potatoes, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch und Zucchini in Ghee andünsten, Kartoffeln dazugeben.",
      "Mit Wasser aufgießen, 18 Minuten kochen und feinpürieren.",
      "Mit Meersalz abschmecken und zwischen 18:00 - 19:00 Uhr genießen."
    ],
    "instructionsEN": [
      "Sauté garlic and zucchini in ghee, add potatoes.",
      "Pour in water, simmer for 18 minutes, and blend smooth.",
      "Season with sea salt and enjoy between 18:00 - 19:00."
    ],
    "tips": ["Dusk Transition: Zucchini (Strauch) trifft Kartoffel (Wurzel)."],
    "tipsEN": ["Dusk Transition: Zucchini (bush) meets potato (root)."]
  },
  {
    "id": "eve-sea-01",
    "title": "Kabeljaufilet auf Kräuter-Kartoffelpüree & Nori-Algen",
    "titleEN": "Cod Fillet over Herb Potato Puree & Nori Seaweed",
    "mealName": "Cod & Herb Potato Puree",
    "description": "Zartes Atlantik-Fischfilet serviert auf knoblauchinfigiertem Kartoffelpüree mit Meeresalgen.",
    "descriptionEN": "Tender Atlantic cod fillet served over garlic potato puree with sea algae.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Maritim",
    "cuisineEN": "Seafood",
    "isPreloaded": true,
    "tags": ["Fisch", "Kartoffeln", "Algen", "Abend"],
    "ingredients": [
      { "name": "Kabeljau / Dorsch", "nameEN": "Cod", "amount": "300g Kabeljaufilet", "amountEN": "300g cod fillet" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "350g mehligkochende Kartoffeln", "amountEN": "350g potatoes" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Kartoffeln kochen und mit Knoblauch, Ghee und Meersalz pürieren.",
      "Kabeljaufilet in Ghee sanft anbraten.",
      "Fisch auf Püree anrichten und mit Nori-Algenstreifen garnieren."
    ],
    "instructionsEN": [
      "Boil potatoes and mash with garlic, ghee, and sea salt.",
      "Pan-fry cod fillet gently in ghee.",
      "Serve fish over potato mash and top with Nori seaweed strips."
    ],
    "tips": ["Meeresfisch & Erd-Wurzeln sind ideal fürs Evening Window."],
    "tipsEN": ["Saltwater fish & earth roots are ideal for the Evening Window."]
  },
  {
    "id": "eve-veg-01",
    "title": "Gebratene Kräuterseitlinge mit Rote-Bete-Püree",
    "titleEN": "Pan-Seared King Oyster Mushrooms with Beetroot Puree",
    "mealName": "King Oyster Mushrooms & Beetroot",
    "description": "Aromatisches Pilz- und Wurzelgericht für ein leicht verdauliches Abendessen.",
    "descriptionEN": "Aromatic mushroom and root dish for a light and restorative dinner.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Europäisch",
    "cuisineEN": "European",
    "isPreloaded": true,
    "tags": ["Pilze", "Rote Bete", "Wurzeln", "Abend"],
    "ingredients": [
      { "name": "Champignons", "nameEN": "Button Mushrooms", "amount": "250g Kräuterseitlinge / Pilze", "amountEN": "250g king oyster mushrooms" },
      { "name": "Rote Bete", "nameEN": "Beetroot", "amount": "250g Rote Bete, gegart", "amountEN": "250g cooked beetroot" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe Knoblauch", "amountEN": "1 clove garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Gegarte Rote Bete mit Knoblauch und Meersalz fein pürieren.",
      "Kräuterseitlinge in Ghee goldbraun anbraten.",
      "Pilze auf dem Rote-Bete-Püree anrichten und abends genießen."
    ],
    "instructionsEN": [
      "Puree cooked beetroot with garlic and sea salt until smooth.",
      "Sauté king oyster mushrooms in ghee until golden brown.",
      "Serve mushrooms over beetroot puree and enjoy in the evening."
    ],
    "tips": ["Pilze & Rote Bete regen die nächtliche Zellregeneration an."],
    "tipsEN": ["Mushrooms & beetroot stimulate nocturnal cellular regeneration."]
  },

  // ==========================================
  // NEW MORNING RECIPES - TREE FOODS
  // ==========================================
  {
    "id": "morn-10",
    "title": "Überbackener Apfel mit Walnuss-Dattel-Füllung",
    "titleEN": "Baked Apple with Walnut & Date Filling",
    "mealName": "Baked Walnut-Date Apple",
    "description": "Warmer Ofenapfel mit einer Füllung aus gehackten Walnüssen, Datteln und echter Vanille, verfeinert mit reinem Ahornsirup – pure Baum-Nahrung für einen gemütlichen Morgen.",
    "descriptionEN": "Warm baked apple with a filling of chopped walnuts, dates and real vanilla, finished with pure maple syrup – pure tree food for a cozy morning.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "International",
    "cuisineEN": "International",
    "isPreloaded": true,
    "tags": ["Ofengericht", "Warm", "Frühstück"],
    "ingredients": [
      { "name": "Apfel", "nameEN": "Apple", "amount": "2 große Äpfel", "amountEN": "2 large apples" },
      { "name": "Walnüsse", "nameEN": "Walnuts", "amount": "40g Walnusskerne, gehackt", "amountEN": "40g walnuts, chopped" },
      { "name": "Dattel", "nameEN": "Date", "amount": "4 Datteln, entsteint & klein geschnitten", "amountEN": "4 dates, pitted & finely chopped" },
      { "name": "Vanille", "nameEN": "Vanilla", "amount": "1 Prise echte gemahlene Vanille", "amountEN": "1 pinch real ground vanilla" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "2 EL", "amountEN": "2 tbsp" }
    ],
    "instructions": [
      "Den Ofen auf 180°C vorheizen.",
      "Die Äpfel waschen und das Kerngehäuse mit einem Apfelausstecher entfernen.",
      "Walnüsse, Datteln und Vanille zu einer Füllung vermischen und die Äpfel damit füllen.",
      "Die gefüllten Äpfel in einer Ofenform ca. 25 Minuten backen, bis sie weich sind.",
      "Mit Ahornsirup beträufeln und warm genießen."
    ],
    "instructionsEN": [
      "Preheat the oven to 180°C (350°F).",
      "Wash the apples and remove the cores with an apple corer.",
      "Mix walnuts, dates and vanilla into a filling and stuff the apples.",
      "Bake the stuffed apples in a baking dish for about 25 minutes until soft.",
      "Drizzle with maple syrup and enjoy warm."
    ],
    "tips": ["Bewusst Vanille statt Zimt verwenden – Zimt ist als Baumrinde ein Abend-Gewürz."],
    "tipsEN": ["Deliberately use vanilla instead of cinnamon – as tree bark, cinnamon is an evening spice."]
  },
  {
    "id": "morn-11",
    "title": "Bananen-Cashew-Nicecream mit Kakaonibs",
    "titleEN": "Banana Cashew Nice Cream with Cacao Nibs",
    "mealName": "Morning Nice Cream",
    "description": "Cremige rohe Eiscreme aus gefrorenen Bananen und eingeweichten Cashews, gekrönt mit knackigen Kakaonibs – ein erfrischender Baum-Nahrung-Start in den Tag.",
    "descriptionEN": "Creamy raw ice cream made from frozen bananas and soaked cashews, topped with crunchy cacao nibs – a refreshing tree-food start to the day.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Rohkost",
    "cuisineEN": "Raw Food",
    "isPreloaded": true,
    "tags": ["Rohkost", "Eiscreme", "Schnell"],
    "ingredients": [
      { "name": "Banane", "nameEN": "Banana", "amount": "2 reife Bananen, über Nacht gefroren", "amountEN": "2 ripe bananas, frozen overnight" },
      { "name": "Cashews", "nameEN": "Cashews", "amount": "50g Cashews, 2 Stunden eingeweicht", "amountEN": "50g cashews, soaked for 2 hours" },
      { "name": "Kakaobohnen", "nameEN": "Cacao Beans", "amount": "1 EL Kakaonibs", "amountEN": "1 tbsp cacao nibs" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL (optional)", "amountEN": "1 tbsp (optional)" },
      { "name": "Vanille", "nameEN": "Vanilla", "amount": "1 Prise echte gemahlene Vanille", "amountEN": "1 pinch real ground vanilla" }
    ],
    "instructions": [
      "Die gefrorenen Bananen in Stücke schneiden.",
      "Bananen, abgetropfte Cashews und Vanille in einem starken Mixer zu einer cremigen Masse pürieren.",
      "Nach Belieben Ahornsirup unterrühren.",
      "In Schalen füllen, mit Kakaonibs bestreuen und sofort servieren."
    ],
    "instructionsEN": [
      "Cut the frozen bananas into chunks.",
      "Blend bananas, drained cashews and vanilla in a high-speed blender until creamy.",
      "Stir in maple syrup if desired.",
      "Spoon into bowls, sprinkle with cacao nibs and serve immediately."
    ],
    "tips": ["Bananen am Vorabend schälen und einfrieren, damit die Nicecream morgens in 10 Minuten fertig ist."],
    "tipsEN": ["Peel and freeze the bananas the night before so the nice cream is ready in 10 minutes in the morning."]
  },
  {
    "id": "morn-12",
    "title": "Zitrus-Teller „Solo“ (09:00–11:00 Solarzeit)",
    "titleEN": "Citrus Plate 'Solo' (09:00–11:00 Solar Time)",
    "mealName": "Solo Citrus Plate",
    "description": "Saftige Orangen, Grapefruit und Mandarinen als eigenständige Zwischenmahlzeit – der Solar-Nutrition-Regel folgend streng allein zwischen 09:00 und 11:00 Uhr Solarzeit genossen.",
    "descriptionEN": "Juicy oranges, grapefruit and tangerines as a standalone snack – enjoyed strictly alone between 09:00 and 11:00 Solar Time, following the Solar Nutrition rule.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "servings": 1,
    "difficulty": "Einfach",
    "cuisine": "Solar Specialty",
    "cuisineEN": "Solar Specialty",
    "isPreloaded": true,
    "tags": ["Zitrus", "Rohkost", "Solo-Regel"],
    "ingredients": [
      { "name": "Orange", "nameEN": "Orange", "amount": "1 Orange, filetiert", "amountEN": "1 orange, segmented" },
      { "name": "Grapefruit", "nameEN": "Grapefruit", "amount": "1/2 Grapefruit, filetiert", "amountEN": "1/2 grapefruit, segmented" },
      { "name": "Mandarine", "nameEN": "Tangerine / Satsuma", "amount": "2 Mandarinen, geschält", "amountEN": "2 tangerines, peeled" }
    ],
    "instructions": [
      "Orange und Grapefruit filetieren, die Mandarinen schälen und in Schnitze teilen.",
      "Alles auf einem Teller anrichten.",
      "Zwischen 09:00 und 11:00 Uhr Solarzeit langsam und bewusst essen."
    ],
    "instructionsEN": [
      "Segment the orange and grapefruit, peel the tangerines and separate into slices.",
      "Arrange everything on a plate.",
      "Eat slowly and mindfully between 09:00 and 11:00 Solar Time."
    ],
    "tips": ["STRENG ALLEIN verzehren: keine anderen Lebensmittel 30 Minuten vorher und nachher."],
    "tipsEN": ["Eat STRICTLY ALONE: no other foods 30 minutes before and after."]
  },

  // ==========================================
  // NEW MIDDAY RECIPES - BUSH/VINE, GRAINS, LAND ANIMALS
  // ==========================================
  {
    "id": "mid-06",
    "title": "Mediterrane Quinoa-Gemüse-Schale mit frischem Käse",
    "titleEN": "Mediterranean Quinoa & Vegetable Bowl with Fresh Cheese",
    "mealName": "Mediterranean Quinoa Bowl",
    "description": "Warme Quinoa-Schale mit gedünstetem Zucchini-Paprika-Gemüse, Kichererbsen und Tomaten, vollendet mit frisch darüber gebröseltem Käse und Basilikum.",
    "descriptionEN": "Warm quinoa bowl with steamed zucchini and bell pepper, chickpeas and tomatoes, finished with freshly crumbled cheese and basil.",
    "timeWindow": "Midday",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mediterran",
    "cuisineEN": "Mediterranean",
    "isPreloaded": true,
    "tags": ["Bowl", "Vegetarisch", "Sättigend"],
    "ingredients": [
      { "name": "Quinoa", "nameEN": "Quinoa", "amount": "150g Quinoa", "amountEN": "150g quinoa" },
      { "name": "Zucchini", "nameEN": "Courgette (Zucchini)", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "1 rote Paprika, gewürfelt", "amountEN": "1 red bell pepper, diced" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Tomaten, gewürfelt", "amountEN": "2 tomatoes, diced" },
      { "name": "Kichererbsen", "nameEN": "Chickpeas", "amount": "150g gekochte Kichererbsen", "amountEN": "150g cooked chickpeas" },
      { "name": "Käse", "nameEN": "Cheese", "amount": "60g frischer Käse, zerbröselt", "amountEN": "60g fresh cheese, crumbled" },
      { "name": "Olivenöl", "nameEN": "Olive Oil", "amount": "2 EL (AnyTime)", "amountEN": "2 tbsp (AnyTime)" },
      { "name": "Basilikum", "nameEN": "Basil", "amount": "1 Handvoll frische Blätter", "amountEN": "1 handful fresh leaves" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1/2 TL (AnyTime)", "amountEN": "1/2 tsp (AnyTime)" }
    ],
    "instructions": [
      "Quinoa gründlich abspülen und in der doppelten Menge Wasser ca. 15 Minuten garen.",
      "Zucchini und Paprika in Olivenöl 5 Minuten anbraten, dann Kichererbsen und Tomaten dazugeben und weitere 5 Minuten dünsten.",
      "Mit Salz abschmecken.",
      "Quinoa auf Schalen verteilen, mit dem Gemüse toppen.",
      "Den frischen Käse darüber bröseln und mit Basilikum bestreuen."
    ],
    "instructionsEN": [
      "Rinse the quinoa thoroughly and cook in double the amount of water for about 15 minutes.",
      "Sauté zucchini and bell pepper in olive oil for 5 minutes, then add chickpeas and tomatoes and steam for another 5 minutes.",
      "Season with salt.",
      "Divide quinoa between bowls and top with the vegetables.",
      "Crumble the fresh cheese on top and sprinkle with basil."
    ],
    "tips": ["Den Käse frisch über das Gericht bröseln und niemals schmelzen – geschmolzener Käse verletzt die Solar-Regeln."],
    "tipsEN": ["Crumble the cheese fresh over the dish and never melt it – melted cheese breaks the Solar rules."]
  },
  {
    "id": "mid-07",
    "title": "Hähnchen mit braunem Reis & grünen Bohnen",
    "titleEN": "Chicken with Brown Rice & Green Beans",
    "mealName": "Solar Midday Chicken Plate",
    "description": "Klassischer Mittagsteller: saftig gebratenes Hähnchen mit zarten grünen Bohnen und zeitneutralem braunem Reis, verfeinert mit frischem Thymian.",
    "descriptionEN": "Classic midday plate: juicy pan-fried chicken with tender green beans and time-neutral brown rice, enhanced with fresh thyme.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "International",
    "cuisineEN": "International",
    "isPreloaded": true,
    "tags": ["Proteinreich", "Herzhaft", "Klassiker"],
    "ingredients": [
      { "name": "Hähnchen", "nameEN": "Chicken", "amount": "2 Hähnchenbrustfilets (ca. 300g)", "amountEN": "2 chicken breast fillets (approx. 300g)" },
      { "name": "Grüne Bohnen", "nameEN": "Green Beans", "amount": "250g grüne Bohnen, geputzt", "amountEN": "250g green beans, trimmed" },
      { "name": "Brauner Reis", "nameEN": "Brown Rice", "amount": "150g (AnyTime)", "amountEN": "150g (AnyTime)" },
      { "name": "Olivenöl", "nameEN": "Olive Oil", "amount": "2 EL (AnyTime)", "amountEN": "2 tbsp (AnyTime)" },
      { "name": "Thymian", "nameEN": "Thyme", "amount": "2 Zweige frischer Thymian", "amountEN": "2 sprigs fresh thyme" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1/2 TL (AnyTime)", "amountEN": "1/2 tsp (AnyTime)" }
    ],
    "instructions": [
      "Den braunen Reis nach Packungsangabe garen (ca. 25-30 Minuten).",
      "Die grünen Bohnen in Salzwasser 8-10 Minuten bissfest garen.",
      "Die Hähnchenbrust salzen und in heißem Olivenöl mit Thymian von beiden Seiten je 5-7 Minuten goldbraun braten.",
      "Hähnchen kurz ruhen lassen, aufschneiden und mit Bohnen und Reis anrichten."
    ],
    "instructionsEN": [
      "Cook the brown rice according to package instructions (approx. 25-30 minutes).",
      "Cook the green beans in salted water for 8-10 minutes until al dente.",
      "Salt the chicken breasts and fry in hot olive oil with thyme for 5-7 minutes per side until golden.",
      "Let the chicken rest briefly, slice and serve with beans and rice."
    ],
    "tips": ["Hähnchen niemals mit Milchprodukten kombinieren – auch keine Butter-Sauce dazu."],
    "tipsEN": ["Never combine chicken with dairy products – no butter sauce with it either."]
  },
  {
    "id": "mid-08",
    "title": "Rotes Linsen-Tomaten-Curry mit Reis",
    "titleEN": "Red Lentil & Tomato Curry with Rice",
    "mealName": "Solar Midday Lentil Curry",
    "description": "Wärmendes veganes Curry aus roten Linsen, frischen Tomaten und Zucchini auf zeitneutralem Reis – bewusst ohne Kokosmilch, denn Kokos gehört ins Morgen-Fenster.",
    "descriptionEN": "Warming vegan curry of red lentils, fresh tomatoes and zucchini over time-neutral rice – deliberately without coconut milk, as coconut belongs to the Morning window.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Asiatisch inspiriert",
    "cuisineEN": "Asian Inspired",
    "isPreloaded": true,
    "tags": ["Curry", "Vegan", "Hülsenfrüchte"],
    "ingredients": [
      { "name": "Linsen", "nameEN": "Lentils", "amount": "200g rote Linsen", "amountEN": "200g red lentils" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "400g stückige Tomaten", "amountEN": "400g chopped tomatoes" },
      { "name": "Zucchini", "nameEN": "Courgette (Zucchini)", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Frühlingszwiebel", "nameEN": "Spring Onion (Green Part)", "amount": "2 Stangen, grüner Teil", "amountEN": "2 stalks, green part only" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g (AnyTime)", "amountEN": "150g (AnyTime)" },
      { "name": "Paprikapulver", "nameEN": "Paprika", "amount": "1 TL edelsüßes Paprikapulver", "amountEN": "1 tsp sweet paprika powder" },
      { "name": "Cayennepfeffer", "nameEN": "Cayenne Pepper", "amount": "1 Prise (AnyTime)", "amountEN": "1 pinch (AnyTime)" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1/2 TL (AnyTime)", "amountEN": "1/2 tsp (AnyTime)" }
    ],
    "instructions": [
      "Den Reis nach Packungsangabe garen.",
      "Den grünen Teil der Frühlingszwiebeln anschneiden und mit Zucchini in wenig Wasser andünsten.",
      "Rote Linsen, stückige Tomaten, Paprikapulver und 300ml Wasser dazugeben und 15-20 Minuten sanft köcheln, bis die Linsen zerfallen.",
      "Mit Salz und einer Prise Cayennepfeffer abschmecken.",
      "Das Curry über dem Reis anrichten."
    ],
    "instructionsEN": [
      "Cook the rice according to package instructions.",
      "Slice the green part of the spring onions and sweat with zucchini in a little water.",
      "Add red lentils, chopped tomatoes, paprika and 300ml water, simmering gently for 15-20 minutes until the lentils break down.",
      "Season with salt and a pinch of cayenne pepper.",
      "Serve the curry over the rice."
    ],
    "tips": ["Nur den grünen Teil der Frühlingszwiebel verwenden – das Weiße ist Abend-Nahrung."],
    "tipsEN": ["Use only the green part of the spring onion – the white part is Evening food."]
  },
  {
    "id": "mid-09",
    "title": "Wassermelonen-Teller „Solo“ (15:00–17:00 Solarzeit)",
    "titleEN": "Watermelon Plate 'Solo' (15:00–17:00 Solar Time)",
    "mealName": "Solo Watermelon Plate",
    "description": "Erfrischende Wassermelone als eigenständige Nachmittagsmahlzeit – der Solar-Nutrition-Regel folgend streng allein zwischen 15:00 und 17:00 Uhr Solarzeit genossen.",
    "descriptionEN": "Refreshing watermelon as a standalone afternoon meal – enjoyed strictly alone between 15:00 and 17:00 Solar Time, following the Solar Nutrition rule.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "servings": 1,
    "difficulty": "Einfach",
    "cuisine": "Solar Specialty",
    "cuisineEN": "Solar Specialty",
    "isPreloaded": true,
    "tags": ["Melone", "Rohkost", "Solo-Regel"],
    "ingredients": [
      { "name": "Wassermelone", "nameEN": "Watermelon", "amount": "ca. 500g Wassermelone, gewürfelt", "amountEN": "approx. 500g watermelon, cubed" }
    ],
    "instructions": [
      "Die Wassermelone in mundgerechte Würfel schneiden.",
      "Auf einem Teller anrichten.",
      "Zwischen 15:00 und 17:00 Uhr Solarzeit langsam und bewusst essen."
    ],
    "instructionsEN": [
      "Cut the watermelon into bite-sized cubes.",
      "Arrange on a plate.",
      "Eat slowly and mindfully between 15:00 and 17:00 Solar Time."
    ],
    "tips": ["STRENG ALLEIN verzehren: Melonen niemals mit anderen Lebensmitteln kombinieren."],
    "tipsEN": ["Eat STRICTLY ALONE: never combine melons with other foods."]
  },

  // ==========================================
  // NEW EVENING RECIPES - ROOTS, FUNGI, SEAFOOD
  // ==========================================
  {
    "id": "eve-09",
    "title": "Pilz-Rahmsuppe mit Wurzelgemüse",
    "titleEN": "Creamy Mushroom Soup with Root Vegetables",
    "mealName": "Evening Root & Mushroom Soup",
    "description": "Samtige Abend-Suppe aus frischen Pilzen, Knollensellerie, Karotten und Kartoffeln, verfeinert mit zeitneutraler Sahne – wärmende Nahrung aus dem Reich unter der Erde.",
    "descriptionEN": "Velvety evening soup of fresh mushrooms, celeriac, carrots and potatoes, refined with time-neutral cream – warming food from the realm below the earth.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Europäisch",
    "cuisineEN": "European",
    "isPreloaded": true,
    "tags": ["Suppe", "Wärmend", "Pilze"],
    "ingredients": [
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "300g frische Champignons, in Scheiben", "amountEN": "300g fresh button mushrooms, sliced" },
      { "name": "Knollensellerie", "nameEN": "Celeriac (Celery Root)", "amount": "150g, gewürfelt", "amountEN": "150g, diced" },
      { "name": "Möhre / Karotte", "nameEN": "Carrot", "amount": "2 Karotten, gewürfelt", "amountEN": "2 carrots, diced" },
      { "name": "Kartoffel", "nameEN": "Potato", "amount": "2 Kartoffeln, gewürfelt", "amountEN": "2 potatoes, diced" },
      { "name": "Zwiebelknolle", "nameEN": "Onion", "amount": "1 Zwiebel, fein gewürfelt", "amountEN": "1 onion, finely diced" },
      { "name": "Sahne", "nameEN": "Cream", "amount": "100ml (AnyTime)", "amountEN": "100ml (AnyTime)" },
      { "name": "Olivenöl", "nameEN": "Olive Oil", "amount": "1 EL (AnyTime)", "amountEN": "1 tbsp (AnyTime)" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1/2 TL", "amountEN": "1/2 tsp" }
    ],
    "instructions": [
      "Zwiebel und Pilze in Olivenöl anbraten, bis die Pilze goldbraun sind.",
      "Sellerie, Karotten und Kartoffeln dazugeben und mit 750ml Wasser aufgießen.",
      "20 Minuten sanft köcheln, bis das Gemüse weich ist.",
      "Die Hälfte der Suppe pürieren und zurück in den Topf geben.",
      "Mit Sahne verfeinern und mit Meersalz abschmecken."
    ],
    "instructionsEN": [
      "Sauté onion and mushrooms in olive oil until the mushrooms are golden.",
      "Add celeriac, carrots and potatoes, pouring in 750ml of water.",
      "Simmer gently for 20 minutes until the vegetables are tender.",
      "Puree half of the soup and return it to the pot.",
      "Refine with cream and season with sea salt."
    ],
    "tips": ["Kartoffeln nur im Abend-Fenster verzehren – diese Suppe ist der perfekte Rahmen dafür."],
    "tipsEN": ["Eat potatoes only in the Evening window – this soup is the perfect setting for them."]
  },
  {
    "id": "eve-10",
    "title": "Ofen-Kabeljau auf Rote-Bete-Karotten-Gemüse",
    "titleEN": "Baked Cod on Beetroot & Carrot Vegetables",
    "mealName": "Evening Cod with Roots",
    "description": "Zartes Kabeljaufilet aus dem Ofen auf einem Bett aus Rote Bete und Karotten – Meeresfrüchte und Wurzelgemüse vereint für das Abend-Fenster.",
    "descriptionEN": "Tender oven-baked cod fillet on a bed of beetroot and carrots – seafood and root vegetables united for the Evening window.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Europäisch",
    "cuisineEN": "European",
    "isPreloaded": true,
    "tags": ["Fisch", "Ofengericht", "Wurzelgemüse"],
    "ingredients": [
      { "name": "Kabeljau / Dorsch", "nameEN": "Cod", "amount": "2 Kabeljaufilets (je ca. 150g)", "amountEN": "2 cod fillets (approx. 150g each)" },
      { "name": "Rote Bete", "nameEN": "Beetroot", "amount": "2 Rote Bete, gewürfelt", "amountEN": "2 beetroots, diced" },
      { "name": "Möhre / Karotte", "nameEN": "Carrot", "amount": "3 Karotten, in Stiften", "amountEN": "3 carrots, cut into sticks" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe, fein gehackt", "amountEN": "1 clove, finely chopped" },
      { "name": "Olivenöl", "nameEN": "Olive Oil", "amount": "2 EL (AnyTime)", "amountEN": "2 tbsp (AnyTime)" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1/2 TL", "amountEN": "1/2 tsp" }
    ],
    "instructions": [
      "Den Ofen auf 200°C vorheizen.",
      "Rote Bete und Karotten mit der Hälfte des Olivenöls, Knoblauch und Meersalz mischen und in einer Ofenform 20 Minuten rösten.",
      "Die Kabeljaufilets salzen, mit dem restlichen Olivenöl beträufeln und auf das Gemüse legen.",
      "Weitere 10-12 Minuten backen, bis der Fisch saftig gart ist.",
      "Sofort servieren."
    ],
    "instructionsEN": [
      "Preheat the oven to 200°C (390°F).",
      "Toss beetroot and carrots with half of the olive oil, garlic and sea salt, roasting in a baking dish for 20 minutes.",
      "Salt the cod fillets, drizzle with the remaining olive oil and place on top of the vegetables.",
      "Bake for another 10-12 minutes until the fish is cooked through and juicy.",
      "Serve immediately."
    ],
    "tips": ["Seefisch wie Kabeljau gehört zu den Meeresfrüchten des Abends – Süßwasserfisch dagegen ins Mittag-Fenster."],
    "tipsEN": ["Sea fish like cod belongs to the seafood of the Evening – freshwater fish, by contrast, belongs to the Midday window."]
  },
  {
    "id": "eve-11",
    "title": "Erdnuss-Süßkartoffel-Eintopf mit Pilzen",
    "titleEN": "Peanut & Sweet Potato Stew with Mushrooms",
    "mealName": "Evening Ground Stew",
    "description": "Herzhafter veganer Eintopf aus Erdnüssen, Süßkartoffeln und Pilzen – alle Hauptzutaten wachsen unter der Erde und machen dieses Gericht zur idealen Abend-Nahrung.",
    "descriptionEN": "Hearty vegan stew of peanuts, sweet potatoes and mushrooms – all main ingredients grow below the ground, making this dish ideal Evening food.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "International",
    "cuisineEN": "International",
    "isPreloaded": true,
    "tags": ["Eintopf", "Vegan", "Erdnüsse"],
    "ingredients": [
      { "name": "Erdnüsse", "nameEN": "Peanuts", "amount": "80g ungesalzene Erdnüsse", "amountEN": "80g unsalted peanuts" },
      { "name": "Süßkartoffel", "nameEN": "Sweet Potato", "amount": "1 große Süßkartoffel, gewürfelt", "amountEN": "1 large sweet potato, diced" },
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "200g Pilze, geviertelt", "amountEN": "200g mushrooms, quartered" },
      { "name": "Zwiebelknolle", "nameEN": "Onion", "amount": "1 Zwiebel, gewürfelt", "amountEN": "1 onion, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe, fein gehackt", "amountEN": "1 clove, finely chopped" },
      { "name": "Erdnussöl", "nameEN": "Peanut Oil", "amount": "1 EL", "amountEN": "1 tbsp" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1/2 TL", "amountEN": "1/2 tsp" },
      { "name": "Cayennepfeffer", "nameEN": "Cayenne Pepper", "amount": "1 Prise (AnyTime)", "amountEN": "1 pinch (AnyTime)" }
    ],
    "instructions": [
      "Die Erdnüsse trocken anrösten, die Hälfte davon fein mahlen.",
      "Zwiebel und Knoblauch in Erdnussöl glasig dünsten, Pilze dazugeben und kräftig anbraten.",
      "Süßkartoffel, gemahlene Erdnüsse und 500ml Wasser dazugeben und 20 Minuten köcheln.",
      "Mit Meersalz und Cayennepfeffer abschmecken.",
      "Mit den restlichen ganzen Erdnüssen bestreut servieren."
    ],
    "instructionsEN": [
      "Dry-roast the peanuts and finely grind half of them.",
      "Sweat onion and garlic in peanut oil until translucent, add the mushrooms and sear well.",
      "Add sweet potato, ground peanuts and 500ml of water, simmering for 20 minutes.",
      "Season with sea salt and cayenne pepper.",
      "Serve sprinkled with the remaining whole peanuts."
    ],
    "tips": ["Die gemahlenen Erdnüsse binden den Eintopf auf natürliche Weise und geben ihm seine cremige Textur."],
    "tipsEN": ["The ground peanuts naturally thicken the stew and give it its creamy texture."]
  },

  // ==========================================
  // NEW TRANSITION RECIPES (DAWN & DUSK)
  // ==========================================
  {
    "id": "dawn-05",
    "title": "Dawn Transition: Reis-Porridge mit Birne & Haselnüssen",
    "titleEN": "Dawn Transition: Rice Porridge with Pear & Hazelnuts",
    "mealName": "Pear & Hazelnut Dawn Porridge",
    "description": "Sanfte Überbrückung zwischen Morgen und Mittag (11:30–12:30 Uhr): Cremiges Reis-Porridge (zeitneutral) mit saftiger Birne und gerösteten Haselnüssen (Morning).",
    "descriptionEN": "Gentle bridge between morning and midday (11:30–12:30): Creamy rice porridge (time-neutral) with juicy pear and roasted hazelnuts (Morning).",
    "timeWindow": "Dawn Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "servings": 1,
    "difficulty": "Einfach",
    "cuisine": "Frühstück / Übergang",
    "cuisineEN": "Breakfast / Transition",
    "isPreloaded": true,
    "tags": ["Dawn Transition", "Porridge", "Birne"],
    "ingredients": [
      { "name": "Brauner Reis", "nameEN": "Brown Rice", "amount": "60g Reisflocken oder gekochter brauner Reis (AnyTime)", "amountEN": "60g rice flakes or cooked brown rice (AnyTime)" },
      { "name": "Birne", "nameEN": "Pear", "amount": "1 reife Birne, gewürfelt (Morning)", "amountEN": "1 ripe pear, diced (Morning)" },
      { "name": "Haselnüsse", "nameEN": "Hazelnuts", "amount": "15g Haselnüsse, geröstet & gehackt (Morning)", "amountEN": "15g hazelnuts, roasted & chopped (Morning)" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 TL (Morning)", "amountEN": "1 tsp (Morning)" },
      { "name": "Vanille", "nameEN": "Vanilla", "amount": "1 Prise (Morning)", "amountEN": "1 pinch (Morning)" }
    ],
    "instructions": [
      "Reisflocken mit 200ml Wasser aufkochen und 10 Minuten zu einem cremigen Porridge simmern lassen.",
      "Die Hälfte der Birnenwürfel zusammen mit der Vanille unterrühren.",
      "Mit den restlichen Birnenwürfeln, Haselnüssen und Ahornsirup toppen."
    ],
    "instructionsEN": [
      "Bring rice flakes and 200ml of water to a boil, simmering into a creamy porridge for 10 minutes.",
      "Stir in half of the diced pear along with the vanilla.",
      "Top with the remaining pear, hazelnuts and maple syrup."
    ],
    "tips": ["Nur zwischen 11:30 und 12:30 Solarzeit verzehren, um die Fenster optimal zu verbinden."],
    "tipsEN": ["Consume only between 11:30 and 12:30 Solar Time to bridge the windows perfectly."]
  },
  {
    "id": "dusk-05",
    "title": "Dusk Transition: Linsen-Pilz-Pfanne",
    "titleEN": "Dusk Transition: Lentil & Mushroom Skillet",
    "mealName": "Lentil & Mushroom Dusk Skillet",
    "description": "Ideale Kombination für die Abenddämmerung (18:00–19:00 Uhr): Oberirdische Linsen (Midday) treffen auf erdige Pilze (Evening) in einer herzhaften Pfanne.",
    "descriptionEN": "Ideal combination for dusk (18:00–19:00): Above-ground lentils (Midday) meet earthy mushrooms (Evening) in a hearty skillet.",
    "timeWindow": "Dusk Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Übergang / Abend",
    "cuisineEN": "Transition / Evening",
    "isPreloaded": true,
    "tags": ["Dusk Transition", "Linsen", "Pilze"],
    "ingredients": [
      { "name": "Linsen", "nameEN": "Lentils", "amount": "150g gekochte braune Linsen (Midday)", "amountEN": "150g cooked brown lentils (Midday)" },
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "250g Pilze, in Scheiben (Evening)", "amountEN": "250g mushrooms, sliced (Evening)" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe, fein gehackt (Evening)", "amountEN": "1 clove, finely chopped (Evening)" },
      { "name": "Olivenöl", "nameEN": "Olive Oil", "amount": "2 EL (AnyTime)", "amountEN": "2 tbsp (AnyTime)" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1/2 TL (Evening)", "amountEN": "1/2 tsp (Evening)" },
      { "name": "Cayennepfeffer", "nameEN": "Cayenne Pepper", "amount": "1 Prise (AnyTime)", "amountEN": "1 pinch (AnyTime)" }
    ],
    "instructions": [
      "Die Pilze in heißem Olivenöl kräftig anbraten, bis sie goldbraun sind.",
      "Knoblauch dazugeben und kurz mitrösten.",
      "Die gekochten Linsen unterheben und 5 Minuten durchziehen lassen.",
      "Mit Meersalz und Cayennepfeffer abschmecken und heiß servieren."
    ],
    "instructionsEN": [
      "Sear the mushrooms in hot olive oil until golden brown.",
      "Add the garlic and roast briefly.",
      "Fold in the cooked lentils and let them heat through for 5 minutes.",
      "Season with sea salt and cayenne pepper and serve hot."
    ],
    "tips": ["Ideal für den Übergang von der Mittags- zur Abendenergie (18:00–19:00 Solarzeit)."],
    "tipsEN": ["Ideal for transitioning from midday to evening energy (18:00–19:00 Solar Time)."]
  },
  {
    "id": "morn-es-01",
    "title": "Spanisches Frühstück: Dulce de Higo y Almendras",
    "titleEN": "Spanish Breakfast: Sweet Fig & Almond Delight",
    "mealName": "Spanish Fig & Almond Delight",
    "description": "Gedünstete spanische Feigen mit gerösteten Mandeln, Orangenblütenwasser und reinem Ahornsirup.",
    "descriptionEN": "Steamed Spanish figs with toasted almonds, orange blossom water, and pure maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": ["Spanien", "Feige", "Mandel", "Morgen"],
    "ingredients": [
      { "name": "Feige", "nameEN": "Fig", "amount": "6 frische Feigen, geviertelt", "amountEN": "6 fresh figs, quartered" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "40g gehobelte Mandeln", "amountEN": "40g flaked almonds" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Feigenviertel kurz in einer Pfanne ohne Fett erwärmen.",
      "Gehobelte Mandeln anrösten und über die Feigen geben.",
      "Mit Orangenblütenwasser und Ahornsirup beträufeln."
    ],
    "instructionsEN": [
      "Gently warm fig quarters in a pan without fat.",
      "Toast flaked almonds and scatter over the figs.",
      "Drizzle with orange blossom water and maple syrup."
    ],
    "tips": ["100% Baumfrüchte und Mandeln für den morgendlichen Zellstoffwechsel."],
    "tipsEN": ["100% tree fruits and almonds for morning cellular metabolism."]
  },
  {
    "id": "morn-gr-01",
    "title": "Griechischer Morgensalat: Kirschen, Pfirsiche & Pistazien",
    "titleEN": "Greek Morning Salad: Cherries, Peaches & Pistachios",
    "mealName": "Greek Cherry Peach Pistachio Salad",
    "description": "Saftige Süßkirschen, Pfirsichspalten, gehackte Aegina-Pistazien und Baumblütenhonig.",
    "descriptionEN": "Juicy sweet cherries, peach wedges, chopped Aegina pistachios, and tree blossom honey.",
    "timeWindow": "Morning",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Griechisch",
    "cuisineEN": "Greek",
    "isPreloaded": true,
    "tags": ["Griechenland", "Kirschen", "Pistazien", "Morgen"],
    "ingredients": [
      { "name": "Kirsche", "nameEN": "Cherry", "amount": "150g Süßkirschen, entsteint", "amountEN": "150g sweet cherries, pitted" },
      { "name": "Pfirsich", "nameEN": "Peach", "amount": "2 reife Pfirsiche, gewürfelt", "amountEN": "2 ripe peaches, diced" },
      { "name": "Pistazien", "nameEN": "Pistachios", "amount": "30g gehackte Pistazien", "amountEN": "30g chopped pistachios" },
      { "name": "Orangenblütenhonig", "nameEN": "Orange Blossom Honey", "amount": "1 EL Baumblütenhonig", "amountEN": "1 tbsp tree blossom honey" }
    ],
    "instructions": [
      "Kirschen und Pfirsichwürfel in Schalen mischen.",
      "Gehackte Aegina-Pistazien darüberstreuen.",
      "Mit flüssigem Baumblütenhonig vollenden."
    ],
    "instructionsEN": [
      "Toss cherries and diced peaches in bowls.",
      "Scatter chopped Aegina pistachios on top.",
      "Finish with drizzled tree blossom honey."
    ],
    "tips": ["Edle Baumfette aus Pistazien treffen auf frische Steinfrüchte."],
    "tipsEN": ["Premium tree fats from pistachios meet fresh stone fruit."]
  },
  {
    "id": "morn-ch-01",
    "title": "Schweizer Birchermüesli „Solar Tree“",
    "titleEN": "Swiss Birchermüesli 'Solar Tree'",
    "mealName": "Swiss Solar Tree Bircher",
    "description": "Ur-Bircher Rezeptur aus geraspeltem Apfel, Walnüssen, Haselnüssen, Mandeln und Ahornsirup.",
    "descriptionEN": "Original Bircher recipe made from grated apple, walnuts, hazelnuts, almonds, and maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Schweizerisch",
    "cuisineEN": "Swiss",
    "isPreloaded": true,
    "tags": ["Schweiz", "Bircher", "Apfel", "Nüsse", "Morgen"],
    "ingredients": [
      { "name": "Apfel", "nameEN": "Apple", "amount": "2 große Äpfel, mit Schale geraspelt", "amountEN": "2 large apples, grated with skin" },
      { "name": "Walnüsse", "nameEN": "Walnuts", "amount": "20g Walnusskerne", "amountEN": "20g walnuts" },
      { "name": "Haselnuss", "nameEN": "Hazelnut", "amount": "20g Haselnusskerne", "amountEN": "20g hazelnuts" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "20g Mandeln", "amountEN": "20g almonds" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Äpfel frisch raspeln.",
      "Walnüsse, Haselnüsse und Mandeln grob hacken und unter den Apfel heben.",
      "Mit Ahornsirup sußen und sofort verzehren."
    ],
    "instructionsEN": [
      "Freshly grate the apples.",
      "Coarsely chop walnuts, hazelnuts, and almonds, then fold into the grated apple.",
      "Sweeten with maple syrup and enjoy immediately."
    ],
    "tips": ["Ohne Getreide und Milch im Morning Window für maximale Leichtigkeit."],
    "tipsEN": ["Without grains and dairy in the Morning Window for maximum lightness."]
  },
  {
    "id": "mid-se-01",
    "title": "Schwedische Köttbullar mit Dinkel-Nudeln & Preiselbeeren",
    "titleEN": "Swedish Köttbullar with Spelt Pasta & Lingonberries",
    "mealName": "Swedish Köttbullar & Spelt Pasta",
    "description": "Saftige Rind- & Schweinefleischbällchen mit Preiselbeeren (Strauch) und Dinkel-Nudeln.",
    "descriptionEN": "Juicy beef & pork meatballs served with lingonberries (bush) and spelt pasta.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Schwedisch",
    "cuisineEN": "Swedish",
    "isPreloaded": true,
    "tags": ["Schweden", "Köttbullar", "Fleisch", "Dinkel", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "150g Rinderhack", "amountEN": "150g minced beef" },
      { "name": "Schweinefleisch", "nameEN": "Pork", "amount": "150g Schweinehack", "amountEN": "150g minced pork" },
      { "name": "Semolina Durum Wheat Pasta", "nameEN": "Semolina Durum Wheat Pasta", "amount": "150g Dinkel-Nudeln", "amountEN": "150g spelt pasta" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee zum Braten", "amountEN": "1 tbsp ghee for frying" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Hackfleisch mit Salz würzen, kleine Bällchen formen und in Ghee braun anbraten.",
      "Dinkel-Nudeln in Salzwasser garen und abtropfen.",
      "Köttbullar mit Dinkel-Nudeln und Preiselbeerkompott servieren."
    ],
    "instructionsEN": [
      "Season minced meat with salt, form small balls, and sear in ghee until brown.",
      "Cook spelt pasta in salted water and drain.",
      "Serve meatballs with spelt pasta and lingonberry compote."
    ],
    "tips": ["Strikter Verzicht auf Rahmsauce: Fleisch und Milchprodukte niemals mischen."],
    "tipsEN": ["Strictly no cream sauce: never combine meat and dairy products."]
  },
  {
    "id": "mid-it-04",
    "title": "Italienisches Caprese-Risotto",
    "titleEN": "Italian Caprese Risotto",
    "mealName": "Italian Caprese Risotto",
    "description": "Cremiges Risotto aus Arborio-Reis, Strauchtomaten, frischem Basilikum und kaltgebröseltem Mozzarella.",
    "descriptionEN": "Creamy Arborio rice risotto with vine tomatoes, fresh basil, and cold-crumbled mozzarella.",
    "timeWindow": "Midday",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Italien", "Risotto", "Tomaten", "Mozzarella", "Mittag"],
    "ingredients": [
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "160g Arborio-Risottoreis", "amountEN": "160g Arborio risotto rice" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "3 Strauchtomaten, gewürfelt", "amountEN": "3 vine tomatoes, diced" },
      { "name": "Käse", "nameEN": "Cheese", "amount": "80g frischer Mozzarella, kalt zerbröselt", "amountEN": "80g fresh mozzarella, cold crumbled" },
      { "name": "Basilikum", "nameEN": "Basil", "amount": "1 Handvoll Basilikumblätter", "amountEN": "1 handful fresh basil" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" }
    ],
    "instructions": [
      "Arborio-Reis in Olivenöl anschwitzen und mit heißen Tomatenwürfeln und Wasser cremig garen.",
      "Vom Herd nehmen und frisches Basilikum unterrühren.",
      "Auf Teller verteilen und frischen Mozzarella kalt darüber bröseln (nicht schmelzen!)."
    ],
    "instructionsEN": [
      "Sauté Arborio rice in olive oil and simmer with diced tomatoes and hot water until creamy.",
      "Remove from heat and fold in fresh basil.",
      "Plate up and crumble fresh cold mozzarella on top (do not melt!)."
    ],
    "tips": ["Mozzarella niemals schmelzen – geschmolzener Käse verletzt die Solar-Regel."],
    "tipsEN": ["Never melt mozzarella – melted cheese violates the Solar rule."]
  },
  {
    "id": "mid-pl-01",
    "title": "Polnischer Bigos (Jägerkohl-Topf)",
    "titleEN": "Polish Bigos (Hunter's Cabbage Stew)",
    "mealName": "Polish Bigos Hunter Stew",
    "description": "Geschmorter Weißkohl & Sauerkraut mit Schweinefleisch, Kümmel und Paprika (ohne Zwiebeln).",
    "descriptionEN": "Braised white cabbage & sauerkraut with pork, caraway, and sweet paprika (no onions).",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Polnisch",
    "cuisineEN": "Polish",
    "isPreloaded": true,
    "tags": ["Polen", "Bigos", "Kohl", "Schwein", "Mittag"],
    "ingredients": [
      { "name": "Grünkohl", "nameEN": "Kale", "amount": "250g Weißkohl & Sauerkraut", "amountEN": "250g white cabbage & sauerkraut" },
      { "name": "Schweinefleisch", "nameEN": "Pork", "amount": "200g Schweinefleisch, gewürfelt", "amountEN": "200g diced pork" },
      { "name": "Paprikapulver", "nameEN": "Paprika", "amount": "1 TL Paprikapulver", "amountEN": "1 tsp paprika powder" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1 EL Olivenöl", "amountEN": "1 tbsp olive oil" }
    ],
    "instructions": [
      "Schweinefleischwürfel in Olivenöl anbraten.",
      "Kohl, Sauerkraut, Kümmel und Paprikapulver dazugeben.",
      "Mit etwas Wasser 40 Minuten sanft schmoren, bis der Bigos mürbe ist."
    ],
    "instructionsEN": [
      "Sear pork cubes in olive oil.",
      "Add cabbage, sauerkraut, caraway, and paprika powder.",
      "Simmer gently with a little water for 40 minutes until Bigos is tender."
    ],
    "tips": ["Buschgemüse (Kohl) & Landtier ohne störende Zwiebelknollen."],
    "tipsEN": ["Bush veggies (cabbage) & land animal cooked without root onions."]
  },
  {
    "id": "mid-gr-02",
    "title": "Griechisches Moussaka „Solar Style“",
    "titleEN": "Greek Moussaka 'Solar Style'",
    "mealName": "Greek Moussaka Solar Style",
    "description": "Auberginen- & Zucchini-Schichten mit gewürztem Rinderhackfleisch und Strauchtomaten.",
    "descriptionEN": "Layered aubergine & zucchini with seasoned beef mince and vine tomatoes.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 35,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Griechisch",
    "cuisineEN": "Greek",
    "isPreloaded": true,
    "tags": ["Griechenland", "Moussaka", "Aubergine", "Rind", "Mittag"],
    "ingredients": [
      { "name": "Auberginen", "nameEN": "Aubergine (Eggplant)", "amount": "1 Aubergine, in Scheiben", "amountEN": "1 aubergine, sliced" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, in Scheiben", "amountEN": "1 zucchini, sliced" },
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "250g Rinderhackfleisch", "amountEN": "250g beef mince" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Strauchtomaten, gehackt", "amountEN": "2 vine tomatoes, chopped" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" }
    ],
    "instructions": [
      "Auberginen- und Zucchinischeiben in Olivenöl anbraten.",
      "Rinderhackfleisch krümelig braten und mit Tomaten einkochen.",
      "In einer Auflaufform schichten und 30 Minuten bei 180°C backen (ohne Béchamel!)."
    ],
    "instructionsEN": [
      "Sear aubergine and zucchini slices in olive oil.",
      "Brown beef mince and simmer with chopped tomatoes.",
      "Layer in a baking dish and bake at 180°C for 30 minutes (no Béchamel!)."
    ],
    "tips": ["Ohne Béchamelsauce/Milch zubereitet, um Fleisch-Milch-Trennung einzuhalten."],
    "tipsEN": ["Prepared without Béchamel/milk to maintain meat-dairy separation."]
  },
  {
    "id": "dawn-at-02",
    "title": "Österreichischer Kaiserschmarrn mit Marillenröster",
    "titleEN": "Austrian Kaiserschmarrn with Stewed Apricots",
    "mealName": "Austrian Kaiserschmarrn & Apricots",
    "description": "Dinkel- & Hafer-Pancakes in Ghee herausgebacken, serviert mit warmem Marillenkompott.",
    "descriptionEN": "Shredded spelt & oat pancakes fried in ghee, served with warm stewed apricots.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Österreichisch",
    "cuisineEN": "Austrian",
    "isPreloaded": true,
    "tags": ["Österreich", "Kaiserschmarrn", "Marille", "Dawn Transition"],
    "ingredients": [
      { "name": "Dinkel", "nameEN": "Spelt", "amount": "80g Dinkelmehl", "amountEN": "80g spelt flour" },
      { "name": "Haferflocken", "nameEN": "Oats (Rolled)", "amount": "40g Haferflocken", "amountEN": "40g oats" },
      { "name": "Aprikose / Marille", "nameEN": "Apricot", "amount": "150g Marillen / Aprikosen", "amountEN": "150g apricots" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Dinkelmehl, Haferflocken und Wasser zu Teig verrühren.",
      "In Ghee goldgelb ausbacken, mit zwei Gabeln zerpflücken.",
      "Mit warmem Marillenkompott und Ahornsirup servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Whisk spelt flour, oats, and water into a smooth batter.",
      "Fry in ghee until golden, tear into bite-sized pieces with two forks.",
      "Serve with warm stewed apricots and maple syrup (11:30 - 12:30)."
    ],
    "tips": ["Dawn Transition: verbindet morgendliche Baumfrüchte mit Mittagsgetreide."],
    "tipsEN": ["Dawn Transition: bridges morning tree fruit with midday grain."]
  },
  {
    "id": "dusk-fr-01",
    "title": "Französische Kürbis-Kartoffel-Vichyssoise",
    "titleEN": "French Pumpkin & Potato Vichyssoise",
    "mealName": "French Pumpkin Potato Vichyssoise",
    "description": "Samtige Suppe aus Kürbis (Strauch/Mittag) und Kartoffeln/Knoblauch (Wurzel/Abend) in Ghee.",
    "descriptionEN": "Velvety soup combining pumpkin (bush/midday) and potatoes/garlic (root/evening) in ghee.",
    "timeWindow": "Dusk Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": ["Frankreich", "Kürbis", "Kartoffel", "Dusk Transition"],
    "ingredients": [
      { "name": "Kürbis", "nameEN": "Pumpkin", "amount": "200g Hokkaido-Kürbis", "amountEN": "200g Hokkaido pumpkin" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "200g Kartoffeln, gewürfelt", "amountEN": "200g potatoes, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch, Kürbis- und Kartoffelwürfel in Ghee andünsten.",
      "Mit Wasser auffüllen, 20 Minuten weich kochen und feinpürieren.",
      "Mit Meersalz abschmecken und zwischen 18:00 - 19:00 Uhr genießen."
    ],
    "instructionsEN": [
      "Sauté garlic, pumpkin, and potato cubes in ghee.",
      "Add water, boil for 20 minutes until soft, and blend smooth.",
      "Season with sea salt and enjoy between 18:00 - 19:00."
    ],
    "tips": ["Dusk Transition: verbindet Strauch-Kürbis mit Erd-Kartoffeln."],
    "tipsEN": ["Dusk Transition: connects bush pumpkin with earth potatoes."]
  },
  {
    "id": "eve-es-02",
    "title": "Spanische Paella de Mariscos (Meeresfrüchte-Paella)",
    "titleEN": "Spanish Seafood Paella (Paella de Mariscos)",
    "mealName": "Spanish Seafood Paella",
    "description": "Saftiger Paella-Reis mit Atlantik-Garnelen, Miesmuscheln, Knoblauch und Meersalz.",
    "descriptionEN": "Flavorful paella rice cooked with Atlantic shrimp, mussels, garlic, and sea salt.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": ["Spanien", "Paella", "Garnelen", "Muscheln", "Abend"],
    "ingredients": [
      { "name": "Meeresfrüchte & Garnelen", "nameEN": "Seafood & Shrimp", "amount": "200g Garnelen & Muscheln", "amountEN": "200g shrimp & mussels" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Paellareis", "amountEN": "150g paella rice" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch und Reis in Ghee anschwitzen, mit Wasser aufgießen.",
      "Garnelen und Muscheln dazugeben und sanft garen.",
      "Mit Meersalz abschmecken und abends genießen."
    ],
    "instructionsEN": [
      "Sauté garlic and rice in ghee, add water.",
      "Add shrimp and mussels and simmer gently until tender.",
      "Season with sea salt and enjoy in the evening."
    ],
    "tips": ["Meeresfrüchte und Knoblauchwurzel sind ideal im Evening Window."],
    "tipsEN": ["Seafood and garlic root are ideal in the Evening Window."]
  },
  {
    "id": "eve-be-01",
    "title": "Belgische Muscheln mit Knoblauch & Röstkartoffeln",
    "titleEN": "Belgian Mussels with Garlic & Roasted Potatoes",
    "mealName": "Belgian Mussels & Roasted Potatoes",
    "description": "Frische Miesmuscheln in Sellerie-Knoblauch-Sud mit knusprigen Ofenkartoffel-Ecken.",
    "descriptionEN": "Fresh mussels cooked in celeriac-garlic broth served with crispy oven potato wedges.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Belgisch",
    "cuisineEN": "Belgian",
    "isPreloaded": true,
    "tags": ["Belgien", "Muscheln", "Kartoffeln", "Knoblauch", "Abend"],
    "ingredients": [
      { "name": "Meeresfrüchte & Garnelen", "nameEN": "Seafood & Shrimp", "amount": "400g frische Miesmuscheln", "amountEN": "400g fresh mussels" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "300g Kartoffeln, geviertelt", "amountEN": "300g potatoes, quartered" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Kartoffelecken in Ghee im Ofen bei 200°C knusprig rösten.",
      "Muscheln mit Knoblauch in Salzwasser 8 Minuten dämpfen.",
      "Muscheln im Sud zusammen mit den Röstkartoffeln servieren."
    ],
    "instructionsEN": [
      "Roast potato wedges in ghee at 200°C until crispy.",
      "Steam mussels with garlic in salted water for 8 minutes.",
      "Serve mussels in their broth alongside roasted potatoes."
    ],
    "tips": ["Seafood & Erdwurzeln fördern die nächtliche Mineralstoffaufnahme."],
    "tipsEN": ["Seafood & earth roots enhance nocturnal mineral absorption."]
  },
  {
    "id": "eve-uk-01",
    "title": "Schottischer Wildlachs auf Pastinaken-Püree",
    "titleEN": "Scottish Wild Salmon over Parsnip Puree",
    "mealName": "Scottish Salmon & Parsnip Puree",
    "description": "Gebratenes Atlantik-Lachsfilet auf cremigem Pastinaken- & Knoblauchpüree.",
    "descriptionEN": "Pan-seared Atlantic salmon fillet served over creamy parsnip & garlic puree.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Schottisch",
    "cuisineEN": "Scottish",
    "isPreloaded": true,
    "tags": ["Schottland", "Lachs", "Pastinake", "Knoblauch", "Abend"],
    "ingredients": [
      { "name": "Lachs", "nameEN": "Salmon", "amount": "300g Atlantik-Lachsfilet", "amountEN": "300g Atlantic salmon fillet" },
      { "name": "Pastinake", "nameEN": "Parsnip", "amount": "350g Pastinaken, gewürfelt", "amountEN": "350g parsnips, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Pastinaken und Knoblauch weich kochen, mit Ghee und Meersalz cremig pürieren.",
      "Lachsfilet in Ghee auf der Haut kross braten.",
      "Lachs auf dem Pastinakenpüree servieren."
    ],
    "instructionsEN": [
      "Boil parsnips and garlic until tender, mash with ghee and sea salt until smooth.",
      "Pan-fry salmon fillet in ghee skin-side down until crispy.",
      "Serve salmon over parsnip puree."
    ],
    "tips": ["Atlantikfisch und Pastinakenwurzel für erholsamen Schlaf."],
    "tipsEN": ["Atlantic fish and parsnip root for restorative sleep."]
  },
  {
    "id": "morn-mx-01",
    "title": "Mexikanische Guacamole-Mango-Schale",
    "titleEN": "Mexican Guacamole & Mango Bowl",
    "mealName": "Mexican Guacamole & Mango Bowl",
    "description": "Reife Avocadowürfel mit sonnengereifter Mango, Kokosraspeln und reinem Ahornsirup.",
    "descriptionEN": "Ripe diced avocado with sun-ripened mango, shredded coconut, and pure maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": ["Mexiko", "Avocado", "Mango", "Kokos", "Morgen"],
    "ingredients": [
      { "name": "Avocado", "nameEN": "Avocado", "amount": "1 reife Avocado, gewürfelt", "amountEN": "1 ripe avocado, diced" },
      { "name": "Mango", "nameEN": "Mango", "amount": "1 reife Mango, gewürfelt", "amountEN": "1 ripe mango, diced" },
      { "name": "Kokosnuss", "nameEN": "Coconut", "amount": "2 EL Kokosraspel", "amountEN": "2 tbsp shredded coconut" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Avocado- und Mangowürfel in einer Schale mischen.",
      "Mit Kokosraspeln bestreuen.",
      "Mit Ahornsirup beträufeln und morgens servieren."
    ],
    "instructionsEN": [
      "Combine diced avocado and mango in a bowl.",
      "Top with shredded coconut.",
      "Drizzle with maple syrup and serve in the morning."
    ],
    "tips": ["100% frische Baumfrüchte für maximale Vitalität im Morning Window."],
    "tipsEN": ["100% fresh tree fruits for maximum morning vitality."]
  },
  {
    "id": "morn-jp-01",
    "title": "Japanische Kaki-Walnuss-Schale mit Yuzu",
    "titleEN": "Japanese Persimmon & Walnut Bowl with Yuzu",
    "mealName": "Japanese Persimmon Walnut Bowl",
    "description": "Süße Kaki-Scheiben (Persimone), geröstete Walnusskerne, Yuzu-Zitronensaft und Ahornsirup.",
    "descriptionEN": "Sweet persimmon slices, toasted walnuts, Yuzu lemon juice, and maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": ["Japan", "Kaki", "Walnuss", "Yuzu", "Morgen"],
    "ingredients": [
      { "name": "Kaki", "nameEN": "Persimmon / Kaki", "amount": "2 reife Kakis, in Spalten", "amountEN": "2 ripe persimmons, wedged" },
      { "name": "Walnüsse", "nameEN": "Walnuts", "amount": "40g Walnusskerne, geröstet", "amountEN": "40g toasted walnuts" },
      { "name": "Zitrone / Yuzu", "nameEN": "Yuzu / Lemon", "amount": "1 TL Yuzu-Zitronensaft", "amountEN": "1 tsp Yuzu lemon juice" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Kaki-Spalten in Schalen anrichten.",
      "Geröstete Walnusskerne darübergeben.",
      "Mit Yuzu-Saft und Ahornsirup beträufeln."
    ],
    "instructionsEN": [
      "Arrange persimmon wedges in bowls.",
      "Scatter toasted walnuts over top.",
      "Drizzle with Yuzu juice and maple syrup."
    ],
    "tips": ["Asiatische Baumfrüchte treffen auf edle Walnussfette."],
    "tipsEN": ["Asian tree fruit meets premium walnut fats."]
  },
  {
    "id": "morn-th-01",
    "title": "Thailändische Rambutan-Kokos-Schale",
    "titleEN": "Thai Rambutan & Coconut Bowl",
    "mealName": "Thai Rambutan Coconut Bowl",
    "description": "Frische Rambutan/Litschi-Früchte, Kokosfleisch, gehackte Cashewnüsse und Ahornsirup.",
    "descriptionEN": "Fresh rambutan or lychee fruits, coconut meat, chopped cashews, and maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Thailändisch",
    "cuisineEN": "Thai",
    "isPreloaded": true,
    "tags": ["Thailand", "Rambutan", "Kokos", "Morgen"],
    "ingredients": [
      { "name": "Litschi / Rambutan", "nameEN": "Rambutan / Lychee", "amount": "150g Rambutan- oder Litschifleisch", "amountEN": "150g rambutan or lychee flesh" },
      { "name": "Kokosnuss", "nameEN": "Coconut", "amount": "50g frisches Kokosfleisch", "amountEN": "50g fresh coconut meat" },
      { "name": "Cashews", "nameEN": "Cashews", "amount": "30g gehackte Cashews", "amountEN": "30g chopped cashews" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Rambutanfleisch und Kokosstreifen vermengen.",
      "Gehackte Cashewnüsse darübergeben.",
      "Mit Ahornsirup beträufeln."
    ],
    "instructionsEN": [
      "Toss rambutan flesh and coconut strips.",
      "Top with chopped cashews.",
      "Drizzle with maple syrup."
    ],
    "tips": ["Erfrischender tropischer Baumfrucht-Start in den Tag."],
    "tipsEN": ["Refreshing tropical tree fruit start to the day."]
  },
  {
    "id": "mid-jp-01",
    "title": "Japanisches Teriyaki-Hähnchen mit Basmati-Reis",
    "titleEN": "Japanese Teriyaki Chicken with Basmati Rice",
    "mealName": "Japanese Teriyaki Chicken & Rice",
    "description": "Hähnchenbrustfilet in Tamari-Sojasauce (Dual-Zone) & Sesamöl mit Brokkoli und Basmati-Reis.",
    "descriptionEN": "Tender chicken breast fillet in Tamari soy sauce (Dual-Zone) & sesame oil with broccoli and basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": ["Japan", "Teriyaki", "Hähnchen", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Hähnchen", "nameEN": "Chicken", "amount": "300g Hähnchenbrustfilet", "amountEN": "300g chicken breast fillet" },
      { "name": "Tamari / Sojasauce", "nameEN": "Tamari / Soy Sauce", "amount": "2 EL Tamari-Sojasauce", "amountEN": "2 tbsp Tamari soy sauce" },
      { "name": "Brokkoli", "nameEN": "Broccoli", "amount": "150g Brokkoliröschen", "amountEN": "150g broccoli florets" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Basmati-Reis", "amountEN": "150g basmati rice" },
      { "name": "Sesamöl", "nameEN": "Sesame Oil", "amount": "1 EL Sesamöl", "amountEN": "1 tbsp sesame oil" }
    ],
    "instructions": [
      "Basmati-Reis dämpfen.",
      "Hähnchenstreifen in Sesamöl anbraten, Brokkoliröschen und Tamari dazugeben.",
      "Unter Rühren gar schmoren und mit Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Steam basmati rice.",
      "Sear chicken strips in sesame oil, add broccoli florets and Tamari.",
      "Stir-fry until cooked through and serve with basmati rice."
    ],
    "tips": ["Mageres Geflügeleiweiß mit Reis ohne Milchprodukte."],
    "tipsEN": ["Lean poultry protein with rice without dairy."]
  },
  {
    "id": "mid-in-01",
    "title": "Indisches Chana Masala (Kichererbsen-Curry)",
    "titleEN": "Indian Chana Masala (Chickpea Curry)",
    "mealName": "Indian Chana Masala Curry",
    "description": "Kichererbsen, Strauchtomaten, Kreuzkümmel, Cayennepfeffer und Basmati-Reis (ohne Zwiebeln).",
    "descriptionEN": "Chickpeas simmered with vine tomatoes, cumin, cayenne pepper, and basmati rice (no onions).",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": ["Indien", "Kichererbsen", "Curry", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Kichererbsen", "nameEN": "Chickpeas", "amount": "250g gekochte Kichererbsen", "amountEN": "250g cooked chickpeas" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "3 Strauchtomaten, gehackt", "amountEN": "3 vine tomatoes, chopped" },
      { "name": "Kreuzkümmel", "nameEN": "Cumin", "amount": "1 TL Kreuzkümmel", "amountEN": "1 tsp cumin" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Basmati-Reis", "amountEN": "150g basmati rice" },
      { "name": "Rapsöl", "nameEN": "Rapeseed / Canola Oil", "amount": "1 EL Rapsöl", "amountEN": "1 tbsp canola oil" }
    ],
    "instructions": [
      "Basmati-Reis garen.",
      "Kreuzkümmel in Rapsöl anrösten, Tomaten und Kichererbsen dazugeben.",
      "15 Minuten köcheln lassen, mit Cayennepfeffer abschmecken und mit Reis servieren."
    ],
    "instructionsEN": [
      "Cook basmati rice.",
      "Toast cumin in canola oil, add tomatoes and chickpeas.",
      "Simmer for 15 minutes, season with cayenne pepper, and serve with rice."
    ],
    "tips": ["Nahrhafte Hülsenfrüchte & Strauchtomaten im Midday Window."],
    "tipsEN": ["Nourishing legumes & vine tomatoes in the Midday Window."]
  },
  {
    "id": "mid-mx-02",
    "title": "Mexikanische Rinder-Taco-Bowl mit Quinoa",
    "titleEN": "Mexican Beef Taco Bowl with Quinoa",
    "mealName": "Mexican Beef Taco Bowl",
    "description": "Rinderhackfleisch, rote Paprika, Zucchini, Mais & Quinoa (ohne Käse/ohne Sour Cream).",
    "descriptionEN": "Seasoned beef mince, red bell pepper, zucchini, sweetcorn, and quinoa (no cheese/sour cream).",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": ["Mexiko", "Taco", "Rind", "Quinoa", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "250g Rinderhackfleisch", "amountEN": "250g beef mince" },
      { "name": "Paprika", "nameEN": "Bell Pepper", "amount": "1 rote Paprika, gewürfelt", "amountEN": "1 red bell pepper, diced" },
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Quinoa", "nameEN": "Quinoa", "amount": "150g Quinoa", "amountEN": "150g quinoa" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "1 EL Olivenöl", "amountEN": "1 tbsp olive oil" }
    ],
    "instructions": [
      "Quinoa 15 Minuten gar kochen.",
      "Rinderhack in Olivenöl krümelig braten, Paprika und Zucchini dazugeben.",
      "Mit Cayennepfeffer würzen und auf Quinoa servieren."
    ],
    "instructionsEN": [
      "Boil quinoa for 15 minutes until tender.",
      "Brown beef mince in olive oil, add bell pepper and zucchini.",
      "Season with cayenne pepper and serve over quinoa."
    ],
    "tips": ["Fleisch und Milchprodukte niemals mischen."],
    "tipsEN": ["Never mix meat and dairy products."]
  },
  {
    "id": "mid-vn-01",
    "title": "Vietnamesisches Pho Bo (Rindfleisch-Reisnudelsuppe)",
    "titleEN": "Vietnamese Pho Bo (Beef Rice Noodle Soup)",
    "mealName": "Vietnamese Pho Bo Noodle Soup",
    "description": "Zarte Rinderhüftstreifen in aromatischer Zimt-Sternanis-Brühe serviert über 100% Reisnudeln.",
    "descriptionEN": "Tender beef sirloin slices in aromatic cinnamon-star anise broth over 100% rice noodles.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Vietnamesisch",
    "cuisineEN": "Vietnamese",
    "isPreloaded": true,
    "tags": ["Vietnam", "Pho", "Rind", "Reisnudeln", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "200g Rinderhüfte, hauchdünn", "amountEN": "200g beef sirloin, thinly sliced" },
      { "name": "Reisnudeln", "nameEN": "Rice Noodles (100% Rice)", "amount": "150g Reisnudeln", "amountEN": "150g rice noodles" },
      { "name": "Basilikum", "nameEN": "Basil", "amount": "1 Handvoll frischer Thai-Basilikum", "amountEN": "1 handful fresh Thai basil" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Reisnudeln separat kochen und in Suppenschalen verteilen.",
      "Würzige Brühe kochen und hauchdünne Rinderstreifen darin kurz pochieren.",
      "Heiße Brühe mit Fleisch über die Nudeln gießen und mit Basilikum garnieren."
    ],
    "instructionsEN": [
      "Boil rice noodles separately and divide into bowls.",
      "Simmer spiced broth and poach paper-thin beef slices briefly.",
      "Ladle hot broth and beef over noodles and top with fresh basil."
    ],
    "tips": ["Mageres Landtiereiweiß und Reisnudeln im Midday Window."],
    "tipsEN": ["Lean land animal protein and rice noodles in the Midday Window."]
  },
  {
    "id": "dawn-ma-01",
    "title": "Marokkanischer Couscous mit Aprikosen & Mandeln",
    "titleEN": "Moroccan Couscous with Apricots & Almonds",
    "mealName": "Moroccan Apricot Almond Couscous",
    "description": "Gedämpfter Couscous mit gedünsteten getrockneten Aprikosen, Mandeln und Ahornsirup.",
    "descriptionEN": "Steamed couscous with poached dried apricots, flaked almonds, and maple syrup.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Marokkanisch",
    "cuisineEN": "Moroccan",
    "isPreloaded": true,
    "tags": ["Marokko", "Couscous", "Aprikosen", "Mandeln", "Dawn Transition"],
    "ingredients": [
      { "name": "Weizen", "nameEN": "Wheat", "amount": "120g Couscous", "amountEN": "120g couscous" },
      { "name": "Aprikose / Marille", "nameEN": "Apricot", "amount": "80g Soft-Aprikosen, gewürfelt", "amountEN": "80g soft dried apricots, diced" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "30g gehobelte Mandeln", "amountEN": "30g flaked almonds" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Couscous mit kochendem Wasser abdecken und 5 Minuten quellen lassen.",
      "Aprikosenwürfel in etwas Wasser andünsten und gehobelte Mandeln anrösten.",
      "Couscous mit Aprikosen und Mandeln vermengen und mit Ahornsirup servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Cover couscous with boiling water and let swell for 5 minutes.",
      "Steam diced apricots in a little water and toast flaked almonds.",
      "Fluff couscous, fold in apricots and almonds, and serve with maple syrup (11:30 - 12:30)."
    ],
    "tips": ["Dawn Transition: Verbindung von morgendlichen Baumfrüchten mit Getreide."],
    "tipsEN": ["Dawn Transition: Harmonizing morning tree fruit with grain."]
  },
  {
    "id": "dusk-mx-01",
    "title": "Mexikanische Süßkartoffel-Zucchini-Suppe",
    "titleEN": "Mexican Sweet Potato & Zucchini Soup",
    "mealName": "Mexican Sweet Potato Zucchini Soup",
    "description": "Pürierte Suppe aus Zucchini (Strauch/Mittag) und Süßkartoffeln/Knoblauch (Wurzel/Abend) in Ghee.",
    "descriptionEN": "Pureed soup of zucchini (bush/midday) and sweet potato/garlic (root/evening) in ghee.",
    "timeWindow": "Dusk Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": ["Mexiko", "Süßkartoffel", "Zucchini", "Dusk Transition"],
    "ingredients": [
      { "name": "Zucchini", "nameEN": "Zucchini", "amount": "1 Zucchini, gewürfelt", "amountEN": "1 zucchini, diced" },
      { "name": "Süßkartoffel", "nameEN": "Sweet Potato", "amount": "250g Süßkartoffel, gewürfelt", "amountEN": "250g sweet potato, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch, Zucchini und Süßkartoffel in Ghee andünsten.",
      "Mit Wasser aufgießen, 20 Minuten kochen und feinpürieren.",
      "Mit Meersalz und Cayennepfeffer abschmecken (18:00 - 19:00 Uhr)."
    ],
    "instructionsEN": [
      "Sauté garlic, zucchini, and sweet potato in ghee.",
      "Add water, boil for 20 minutes, and blend smooth.",
      "Season with sea salt and cayenne pepper (18:00 - 19:00)."
    ],
    "tips": ["Dusk Transition: verbindet Strauchgemüse mit Erdwurzeln."],
    "tipsEN": ["Dusk Transition: bridges bush vegetables with earth roots."]
  },
  {
    "id": "eve-th-01",
    "title": "Thailändische Tom Yum Kung (Garnelen-Pilz-Suppe)",
    "titleEN": "Thai Tom Yum Goong (Shrimp & Mushroom Soup)",
    "mealName": "Thai Tom Yum Goong Soup",
    "description": "Atlantik-Garnelen, Shiitake-Pilze, Ingwerwurzel, Knoblauch und Meersalz.",
    "descriptionEN": "Atlantic shrimp, shiitake mushrooms, ginger root, garlic, and sea salt in aromatic broth.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Thailändisch",
    "cuisineEN": "Thai",
    "isPreloaded": true,
    "tags": ["Thailand", "Tom Yum", "Garnelen", "Pilze", "Abend"],
    "ingredients": [
      { "name": "Meeresfrüchte & Garnelen", "nameEN": "Seafood & Shrimp", "amount": "250g Atlantik-Garnelen", "amountEN": "250g Atlantic shrimp" },
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "150g Shiitake-Pilze, in Scheiben", "amountEN": "150g shiitake mushrooms, sliced" },
      { "name": "Ingwer", "nameEN": "Ginger", "amount": "10g Ingwerwurzel, in Scheiben", "amountEN": "10g ginger root, sliced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Ingwer und Knoblauch in Wasser aufkochen.",
      "Shiitake-Pilze und Garnelen dazugeben und 8 Minuten sanft pochieren.",
      "Mit Meersalz abschmecken und abends genießen."
    ],
    "instructionsEN": [
      "Bring ginger and garlic in water to a boil.",
      "Add shiitake mushrooms and shrimp, poaching gently for 8 minutes.",
      "Season with sea salt and enjoy in the evening."
    ],
    "tips": ["Meeresfrüchte & Pilze sind ideal im Evening Window."],
    "tipsEN": ["Seafood & mushrooms are ideal in the Evening Window."]
  },
  {
    "id": "eve-pe-01",
    "title": "Peruanisches Ceviche de Pescado mit Süßkartoffel",
    "titleEN": "Peruvian Fish Ceviche with Sweet Potato",
    "mealName": "Peruvian Fish Ceviche",
    "description": "Kabeljaufilet in Zitrone/Knoblauch mariniert, serviert mit gedämpften Süßkartoffelscheiben.",
    "descriptionEN": "Cod fillet cured in lemon juice and garlic, served with steamed sweet potato slices.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Peruanisch",
    "cuisineEN": "Peruvian",
    "isPreloaded": true,
    "tags": ["Peru", "Ceviche", "Fisch", "Süßkartoffel", "Abend"],
    "ingredients": [
      { "name": "Kabeljau / Dorsch", "nameEN": "Cod", "amount": "300g Kabeljaufilet, gewürfelt", "amountEN": "300g fresh cod fillet, diced" },
      { "name": "Süßkartoffel", "nameEN": "Sweet Potato", "amount": "250g Süßkartoffel, in Scheiben", "amountEN": "250g sweet potato, sliced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe Knoblauch, fein gehackt", "amountEN": "1 clove garlic, minced" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Kabeljauwürfel 15 Minuten in frischem Zitronensaft und Knoblauch kalt marinieren.",
      "Süßkartoffelscheiben dämpfen, bis sie weich sind.",
      "Ceviche auf Süßkartoffeln anrichten und mit Meersalz vollenden."
    ],
    "instructionsEN": [
      "Marinate diced cod in fresh lemon juice and minced garlic for 15 minutes.",
      "Steam sweet potato slices until tender.",
      "Plate ceviche over sweet potato slices and finish with sea salt."
    ],
    "tips": ["Meeresfisch & Erd-Süßkartoffelwurzel im Evening Window."],
    "tipsEN": ["Saltwater fish & earth sweet potato root in the Evening Window."]
  },
  {
    "id": "eve-jp-02",
    "title": "Japanischer Miso-Ramen mit Shiitake & Wakame-Algen",
    "titleEN": "Japanese Miso Ramen with Shiitake & Wakame Seaweed",
    "mealName": "Japanese Miso Shiitake Ramen",
    "description": "Miso-Sud (Dual-Zone), frische Shiitake-Pilze, Knoblauch, Wakame-Algen und Reisnudeln.",
    "descriptionEN": "Miso broth (Dual-Zone) with fresh shiitake mushrooms, garlic, Wakame seaweed, and rice noodles.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": ["Japan", "Ramen", "Miso", "Pilze", "Algen", "Abend"],
    "ingredients": [
      { "name": "Miso", "nameEN": "Miso", "amount": "2 EL weiße Miso-Paste", "amountEN": "2 tbsp white miso paste" },
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "150g Shiitake-Pilze", "amountEN": "150g shiitake mushrooms" },
      { "name": "Reisnudeln", "nameEN": "Rice Noodles (100% Rice)", "amount": "120g Reisnudeln", "amountEN": "120g rice noodles" },
      { "name": "Meeresalgen / Nori", "nameEN": "Seaweed / Nori", "amount": "1 EL Wakame-Algen", "amountEN": "1 tbsp Wakame seaweed" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" }
    ],
    "instructions": [
      "Reisnudeln separat kochen und abtropfen.",
      "Knoblauch und Shiitake-Pilze in Miso-Sud 10 Minuten köcheln.",
      "Nudeln auf Schalen verteilen, Miso-Pilz-Sud eingießen und mit Wakame garnieren."
    ],
    "instructionsEN": [
      "Boil rice noodles separately and drain.",
      "Simmer garlic and shiitake mushrooms in miso broth for 10 minutes.",
      "Divide noodles into bowls, pour over miso mushroom broth, and top with Wakame."
    ],
    "tips": ["Pilze, Knoblauchwurzel & Algen fördern die Geweberegeneration."],
    "tipsEN": ["Mushrooms, garlic root & seaweed enhance cellular recovery."]
  },
  {
    "id": "morn-fr-03",
    "title": "Französisches Tarte-Tatin-Frühstück mit Mandelsplittern",
    "titleEN": "French Tarte Tatin Breakfast with Flaked Almonds",
    "mealName": "French Tarte Tatin Breakfast",
    "description": "Karamelisierte Apfelviertel in Ahornsirup, geröstete Mandelsplitter, Haselnussmus und Bourbon-Vanille.",
    "descriptionEN": "Caramelized apple quarters in maple syrup, toasted flaked almonds, hazelnut butter, and Bourbon vanilla.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": ["Frankreich", "Apfel", "Mandeln", "Morgen"],
    "ingredients": [
      { "name": "Apfel", "nameEN": "Apple", "amount": "2 Äpfel, in Spalten", "amountEN": "2 apples, wedged" },
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "30g gehobelte Mandeln", "amountEN": "30g flaked almonds" },
      { "name": "Haselnuss", "nameEN": "Hazelnut", "amount": "1 EL Haselnussmus", "amountEN": "1 tbsp hazelnut butter" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Apfelspalten mit Ahornsirup und Bourbon-Vanille in einer Pfanne 10 Minuten sanft karamelisieren.",
      "Gehobelte Mandeln fettfrei anrösten.",
      "Äpfel anrichten, mit Haselnussmus und Mandelsplittern vollenden."
    ],
    "instructionsEN": [
      "Gently caramelize apple wedges with maple syrup and Bourbon vanilla in a pan for 10 minutes.",
      "Dry-toast flaked almonds until golden.",
      "Plate apples, finish with hazelnut butter and toasted almonds."
    ],
    "tips": ["Warme Baumfrucht-Zubereitung für Bekömmlichkeit im Morning Window."],
    "tipsEN": ["Warm tree fruit preparation for optimal digestibility in the Morning Window."]
  },
  {
    "id": "morn-it-05",
    "title": "Sizilianische Granita di Mandorla e Pistacchio",
    "titleEN": "Sicilian Almond & Pistachio Granita",
    "mealName": "Sicilian Almond Pistachio Granita",
    "description": "Mandelmousse, gehackte Bronte-Pistazien, Bio-Orangenblütenwasser und Ahornsirup.",
    "descriptionEN": "Almond mousse topped with chopped Bronte pistachios, organic orange blossom water, and maple syrup.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Italien", "Sizilien", "Mandeln", "Pistazien", "Morgen"],
    "ingredients": [
      { "name": "Mandeln", "nameEN": "Almonds", "amount": "100g blanchierte Mandeln, püriert", "amountEN": "100g blanched almonds, pureed" },
      { "name": "Pistazien", "nameEN": "Pistachios", "amount": "30g gehackte Pistazien", "amountEN": "30g chopped pistachios" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Blanchierte Mandeln mit Wasser und Ahornsirup fein pürieren und anfrosten.",
      "In Gläser füllen.",
      "Mit gehackten Bronte-Pistazien und Orangenblütenwasser bestreuen."
    ],
    "instructionsEN": [
      "Puree blanched almonds with water and maple syrup, then chill slightly.",
      "Spoon into dessert glasses.",
      "Top with chopped Bronte pistachios and orange blossom water."
    ],
    "tips": ["Edle Baumnüsse liefern langanhaltende morgendliche Gehirnenergie."],
    "tipsEN": ["Premium tree nuts provide long-lasting morning brain energy."]
  },
  {
    "id": "morn-mx-03",
    "title": "Mexikanische Papaya-Passionsfrucht-Ceviche mit Cashew-Crème",
    "titleEN": "Mexican Papaya & Passion Fruit Ceviche with Cashew Cream",
    "mealName": "Mexican Papaya Passion Fruit Ceviche",
    "description": "Papayawürfel, Maracuja-Passionsfrucht, Cashewmus und Baumblütenhonig.",
    "descriptionEN": "Fresh papaya cubes, passion fruit pulp, cashew butter, and tree blossom honey.",
    "timeWindow": "Morning",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": ["Mexiko", "Papaya", "Passionsfrucht", "Cashew", "Morgen"],
    "ingredients": [
      { "name": "Papaya", "nameEN": "Papaya", "amount": "200g frische Papaya, gewürfelt", "amountEN": "200g fresh papaya, diced" },
      { "name": "Passionsfrucht", "nameEN": "Passion Fruit", "amount": "2 Passionsfrüchte, Mark", "amountEN": "2 passion fruits, pulp" },
      { "name": "Cashews", "nameEN": "Cashews", "amount": "1 EL Cashewmus", "amountEN": "1 tbsp cashew butter" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Papayawürfel mit Passionsfruchtmark vermengen.",
      "Mit dünnem Cashewmus beträufeln.",
      "Mit Ahornsirup abrunden und morgens servieren."
    ],
    "instructionsEN": [
      "Combine papaya cubes with passion fruit pulp.",
      "Drizzle with thinned cashew butter.",
      "Finish with maple syrup and serve in the morning."
    ],
    "tips": ["Fruchtenzyme (Papain) unterstützen die morgendliche Zellreinigung."],
    "tipsEN": ["Fruit enzymes (papain) support morning cellular cleansing."]
  },
  {
    "id": "morn-in-02",
    "title": "Indischer Safran-Feigen-Traum mit Nüssen",
    "titleEN": "Indian Saffron & Fig Delight with Nuts",
    "mealName": "Indian Saffron Fig Delight",
    "description": "Soft-Feigen in Safran-Orangen-Sud, Macadamianüsse, Pistazien und Baumblütenhonig.",
    "descriptionEN": "Soft figs poached in saffron-orange syrup, topped with macadamias, pistachios, and honey.",
    "timeWindow": "Morning",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": ["Indien", "Feige", "Safran", "Pistazien", "Morgen"],
    "ingredients": [
      { "name": "Feige", "nameEN": "Fig", "amount": "6 frische Feigen, geviertelt", "amountEN": "6 fresh figs, quartered" },
      { "name": "Macadamianüsse", "nameEN": "Macadamia Nuts", "amount": "20g Macadamianüsse", "amountEN": "20g macadamia nuts" },
      { "name": "Pistazien", "nameEN": "Pistachios", "amount": "20g Pistazien", "amountEN": "20g pistachios" },
      { "name": "Orangenblütenhonig", "nameEN": "Orange Blossom Honey", "amount": "1 EL Baumblütenhonig", "amountEN": "1 tbsp tree blossom honey" }
    ],
    "instructions": [
      "Feigen in Orangensaft mit einer Prise Safran kurz erwärmen.",
      "Gehackte Macadamias und Pistazien darübergeben.",
      "Mit flüssigem Baumblütenhonig vollenden."
    ],
    "instructionsEN": [
      "Warm figs briefly in orange juice infused with a pinch of saffron.",
      "Scatter chopped macadamias and pistachios on top.",
      "Finish with drizzled tree blossom honey."
    ],
    "tips": ["Edle Gewürzblüten und Baumfrüchte im Morning Window."],
    "tipsEN": ["Precious spice blossoms and tree fruit in the Morning Window."]
  },
  {
    "id": "mid-fr-03",
    "title": "Coq au Vin Blanc mit Dinkel-Tagliatelle",
    "titleEN": "Coq au Vin Blanc with Spelt Tagliatelle",
    "mealName": "French Coq au Vin Blanc",
    "description": "Hähnchenkeulen in Kräuter-Sud geschmort, Strauch-Thymian, Dinkel-Tagliatelle und Ghee.",
    "descriptionEN": "Chicken thighs braised in aromatic herb broth, vine thyme, spelt tagliatelle, and ghee.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 35,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": ["Frankreich", "Hähnchen", "Dinkel", "Kräuter", "Mittag"],
    "ingredients": [
      { "name": "Hähnchen", "nameEN": "Chicken", "amount": "2 Hähnchenkeulen", "amountEN": "2 chicken thighs" },
      { "name": "Semolina Durum Wheat Pasta", "nameEN": "Semolina Durum Wheat Pasta", "amount": "150g Dinkel-Tagliatelle", "amountEN": "150g spelt tagliatelle" },
      { "name": "Thymian", "nameEN": "Thyme", "amount": "2 Zweige Thymian", "amountEN": "2 sprigs thyme" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Salz", "nameEN": "Salt (Diamond Crystal Kosher)", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Hähnchenkeulen in Ghee goldbraun anbraten, mit Wasser und Thymian ablöschen und 30 Minuten schmoren.",
      "Dinkel-Tagliatelle in Salzwasser garen und abtropfen.",
      "Hähnchen mit Dinkel-Tagliatelle anrichten."
    ],
    "instructionsEN": [
      "Sear chicken thighs in ghee, add water and thyme, and braise for 30 minutes.",
      "Cook spelt tagliatelle in salted water and drain.",
      "Serve braised chicken over spelt tagliatelle."
    ],
    "tips": ["Geflügel und Dinkel-Pasta ohne milchhaltige Saucen."],
    "tipsEN": ["Poultry and spelt pasta cooked without dairy-based sauces."]
  },
  {
    "id": "mid-it-06",
    "title": "Mailänder Ossobuco „Solar Style“ mit Safran-Risotto",
    "titleEN": "Milanese Ossobuco 'Solar Style' with Saffron Risotto",
    "mealName": "Milanese Ossobuco & Saffron Risotto",
    "description": "Geschmorte Kalbshaxe, Safran-Arborio-Reis, Strauchtomaten, Basilikum und Olivenöl.",
    "descriptionEN": "Braised veal shank served over creamy saffron Arborio rice with vine tomatoes and basil.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 50,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Italien", "Ossobuco", "Kalb", "Risotto", "Mittag"],
    "ingredients": [
      { "name": "Rindfleisch", "nameEN": "Beef", "amount": "2 Kalbshaxenscheiben (ca. 400g)", "amountEN": "2 veal shank slices (approx. 400g)" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Arborio-Reis", "amountEN": "150g Arborio rice" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Strauchtomaten, gewürfelt", "amountEN": "2 vine tomatoes, diced" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" }
    ],
    "instructions": [
      "Kalbshaxen in Olivenöl anbraten, mit Tomaten und Wasser 45 Minuten mürbe schmoren.",
      "Arborio-Reis mit Safran cremig garen.",
      "Ossobuco mit Safran-Risotto servieren (ohne Käse!)."
    ],
    "instructionsEN": [
      "Sear veal shanks in olive oil, add tomatoes and water, braising for 45 minutes until tender.",
      "Cook Arborio rice with saffron until creamy.",
      "Serve Ossobuco with saffron risotto (no cheese!)."
    ],
    "tips": ["Fleisch und Milchprodukte niemals mischen."],
    "tipsEN": ["Never mix meat and dairy products."]
  },
  {
    "id": "mid-in-03",
    "title": "Königliches Enten-Biryani mit Basmati & Safran",
    "titleEN": "Royal Duck Biryani with Basmati & Saffron",
    "mealName": "Royal Duck Biryani",
    "description": "Zartes Entenbrustfilet, gewürzter Basmati-Reis, Kreuzkümmel, Cayennepfeffer und Ghee.",
    "descriptionEN": "Tender duck breast fillet layered with fragrant spiced basmati rice, cumin, and ghee.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": ["Indien", "Biryani", "Ente", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Ente", "nameEN": "Duck", "amount": "250g Entenbrust, gewürfelt", "amountEN": "250g duck breast, diced" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Basmati-Reis", "amountEN": "150g basmati rice" },
      { "name": "Kreuzkümmel", "nameEN": "Cumin", "amount": "1 TL Kreuzkümmel", "amountEN": "1 tsp cumin" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" }
    ],
    "instructions": [
      "Entenbrustwürfel in Ghee anbraten.",
      "Basmati-Reis mit Kreuzkümmel und Safran dämpfen.",
      "Ente und Reis schichten und sanft durchziehen lassen."
    ],
    "instructionsEN": [
      "Sear duck breast cubes in ghee.",
      "Steam basmati rice infused with cumin and saffron.",
      "Layer duck and rice, letting flavors meld over low heat."
    ],
    "tips": ["Landgeflügel (Ente) mit Reis im Midday Window."],
    "tipsEN": ["Land poultry (duck) with rice in the Midday Window."]
  },
  {
    "id": "mid-es-02",
    "title": "Spanische Paella de Pollo y Verduras mit Safransud",
    "titleEN": "Spanish Chicken & Veggie Paella with Saffron Broth",
    "mealName": "Spanish Chicken & Veggie Paella",
    "description": "Hähnchenbrust, grüne Bohnen, Paprika, Strauchtomaten, Bomba-Reis und Olivenöl.",
    "descriptionEN": "Chicken breast, green beans, bell pepper, vine tomatoes, Bomba rice, and olive oil.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": ["Spanien", "Paella", "Hähnchen", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Hähnchen", "nameEN": "Chicken", "amount": "250g Hähnchenbrust", "amountEN": "250g chicken breast" },
      { "name": "Grüne Bohnen", "nameEN": "Green Beans", "amount": "100g grüne Bohnen", "amountEN": "100g green beans" },
      { "name": "Tomate", "nameEN": "Tomato", "amount": "2 Strauchtomaten", "amountEN": "2 vine tomatoes" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Paellareis", "amountEN": "150g paella rice" },
      { "name": "Olivenöl", "nameEN": "Olive Oil (Extra Virgin)", "amount": "2 EL Olivenöl", "amountEN": "2 tbsp olive oil" }
    ],
    "instructions": [
      "Hähnchenstücke und Bohnen in Olivenöl anbraten.",
      "Reis und Tomatenwürfel dazugeben, mit Safransud aufgießen.",
      "20 Minuten köcheln lassen, bis der Reis die Brühe aufgesaugt hat."
    ],
    "instructionsEN": [
      "Sear chicken pieces and green beans in olive oil.",
      "Add rice and diced tomatoes, pour in saffron broth.",
      "Simmer for 20 minutes until rice absorbs broth."
    ],
    "tips": ["Geflügel & Buschgemüse getrennt von Milchprodukten."],
    "tipsEN": ["Poultry & bush veggies kept separate from dairy."]
  },
  {
    "id": "mid-th-02",
    "title": "Thailändisches Massaman-Curry mit Pute & Jasmin-Reis",
    "titleEN": "Thai Massaman Curry with Turkey & Jasmine Rice",
    "mealName": "Thai Massaman Turkey Curry",
    "description": "Putenbruststreifen, Brokkoli, Paprika, Tamari, Jasmin-Reis und Sesamöl (ohne Kokosmilch).",
    "descriptionEN": "Tender turkey strips, broccoli, bell pepper, Tamari, jasmine rice, and sesame oil (no coconut milk).",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Thailändisch",
    "cuisineEN": "Thai",
    "isPreloaded": true,
    "tags": ["Thailand", "Curry", "Pute", "Reis", "Mittag"],
    "ingredients": [
      { "name": "Pute / Truthahn", "nameEN": "Turkey", "amount": "250g Putenbrust, in Streifen", "amountEN": "250g turkey breast, sliced" },
      { "name": "Brokkoli", "nameEN": "Broccoli", "amount": "150g Brokkoliröschen", "amountEN": "150g broccoli florets" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Jasmin-Reis", "amountEN": "150g jasmine rice" },
      { "name": "Tamari / Sojasauce", "nameEN": "Tamari / Soy Sauce", "amount": "2 EL Tamari", "amountEN": "2 tbsp Tamari" },
      { "name": "Sesamöl", "nameEN": "Sesame Oil", "amount": "1 EL Sesamöl", "amountEN": "1 tbsp sesame oil" }
    ],
    "instructions": [
      "Jasmin-Reis dämpfen.",
      "Putenstreifen und Brokkoli in Sesamöl anbraten, Tamari und etwas Wasser zugeben.",
      "Gar schmoren und mit Jasmin-Reis servieren."
    ],
    "instructionsEN": [
      "Steam jasmine rice.",
      "Stir-fry turkey strips and broccoli in sesame oil, add Tamari and a splash of water.",
      "Simmer until cooked through and serve with jasmine rice."
    ],
    "tips": ["Geflügel & Reis im Midday Window; Kokosmilch bleibt im Morgenfenster."],
    "tipsEN": ["Poultry & rice in Midday Window; coconut milk stays in Morning Window."]
  },
  {
    "id": "dawn-at-03",
    "title": "Wiener Topfen-Dinkel-Nockerl mit Zwetschgenröster",
    "titleEN": "Viennese Curd & Spelt Dumplings with Stewed Plums",
    "mealName": "Viennese Curd Dumplings & Plums",
    "description": "Dinkelmehl, Ricotta/Topfen (zeitneutral), geraspelter Apfel, Zwetschgen (Baumfrucht), Ghee und Ahornsirup.",
    "descriptionEN": "Spelt flour and curd dumplings served with warm stewed plums and maple syrup.",
    "timeWindow": "Dawn Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Österreichisch",
    "cuisineEN": "Austrian",
    "isPreloaded": true,
    "tags": ["Österreich", "Wien", "Nockerl", "Zwetschgen", "Dawn Transition"],
    "ingredients": [
      { "name": "Dinkel", "nameEN": "Spelt", "amount": "80g Dinkelmehl", "amountEN": "80g spelt flour" },
      { "name": "Pflaume / Zwetschge", "nameEN": "Plum", "amount": "150g Zwetschgen / Pflaumen", "amountEN": "150g plums" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Ahornsirup", "nameEN": "Maple Syrup", "amount": "1 EL Ahornsirup", "amountEN": "1 tbsp maple syrup" }
    ],
    "instructions": [
      "Dinkelmehl mit etwas Wasser zu kleinen Nockerln formen und in Wasser sieden.",
      "Zwetschgen mit Ahornsirup weich dünsten.",
      "Nockerl abtropfen, in Ghee schwenken und mit Zwetschgenröster servieren (11:30 - 12:30 Uhr)."
    ],
    "instructionsEN": [
      "Form small dumplings from spelt flour and water, simmer in boiling water.",
      "Steam plums gently with maple syrup.",
      "Drain dumplings, toss in ghee, and serve with stewed plums (11:30 - 12:30)."
    ],
    "tips": ["Dawn Transition: verbindet morgendliche Zwetschgen mit Mittags-Dinkel."],
    "tipsEN": ["Dawn Transition: bridges morning plums with midday spelt."]
  },
  {
    "id": "dusk-it-01",
    "title": "Toskanische Ribollita „Dusk Harmony“",
    "titleEN": "Tuscan Ribollita 'Dusk Harmony'",
    "mealName": "Tuscan Dusk Harmony Ribollita",
    "description": "Grünkohl (Strauch/Mittag), Süßkartoffeln/Knoblauch (Wurzel/Abend), Ghee und Meersalz.",
    "descriptionEN": "Tuscan kale (bush/midday), sweet potato/garlic (root/evening), ghee, and sea salt.",
    "timeWindow": "Dusk Transition",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Italien", "Toskana", "Grünkohl", "Süßkartoffel", "Dusk Transition"],
    "ingredients": [
      { "name": "Grünkohl", "nameEN": "Kale", "amount": "150g Grünkohl, gehackt", "amountEN": "150g kale, chopped" },
      { "name": "Süßkartoffel", "nameEN": "Sweet Potato", "amount": "200g Süßkartoffel, gewürfelt", "amountEN": "200g sweet potato, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch, Grünkohl und Süßkartoffel in Ghee andünsten.",
      "Mit Wasser aufgießen, 20 Minuten schmoren und sämig pürieren.",
      "Mit Meersalz abschmecken und zwischen 18:00 - 19:00 Uhr genießen."
    ],
    "instructionsEN": [
      "Sauté garlic, kale, and sweet potato in ghee.",
      "Pour in water, simmer for 20 minutes, and blend thick.",
      "Season with sea salt and enjoy between 18:00 - 19:00."
    ],
    "tips": ["Dusk Transition: verbindet Strauch-Grünkohl mit Erdwurzeln."],
    "tipsEN": ["Dusk Transition: connects bush kale with earth roots."]
  },
  {
    "id": "eve-fr-02",
    "title": "Bouillabaisse de Marseille mit Rouille & Röstkartoffeln",
    "titleEN": "Marseille Bouillabaisse with Rouille & Roasted Potatoes",
    "mealName": "Marseille Bouillabaisse & Potatoes",
    "description": "Seeteufel, Kabeljau, Atlantik-Garnelen, Knoblauch, Fenchelwurzel, Kartoffeln, Ghee und Meersalz.",
    "descriptionEN": "Monkfish, cod, Atlantic shrimp, garlic, fennel root, potatoes, ghee, and sea salt in fish broth.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": ["Frankreich", "Bouillabaisse", "Fisch", "Kartoffeln", "Abend"],
    "ingredients": [
      { "name": "Kabeljau / Dorsch", "nameEN": "Cod", "amount": "300g Kabeljau & Seeteufel", "amountEN": "300g cod & monkfish" },
      { "name": "Meeresfrüchte & Garnelen", "nameEN": "Seafood & Shrimp", "amount": "100g Atlantik-Garnelen", "amountEN": "100g Atlantic shrimp" },
      { "name": "Kartoffeln", "nameEN": "Potato", "amount": "250g Kartoffeln, gewürfelt", "amountEN": "250g potatoes, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" }
    ],
    "instructions": [
      "Knoblauch und Kartoffeln in Ghee dünsten, mit Wasser aufgießen.",
      "Fisch- und Garnelenstücke dazugeben und 15 Minuten sanft pochieren.",
      "Reichhaltige Suppe mit Meersalz abschmecken und abends genießen."
    ],
    "instructionsEN": [
      "Sauté garlic and potatoes in ghee, add water.",
      "Add fish and shrimp pieces, poaching gently for 15 minutes.",
      "Season rich fish soup with sea salt and enjoy in the evening."
    ],
    "tips": ["Ozean-Fisch & Erd-Kartoffelwurzeln sind ideal im Evening Window."],
    "tipsEN": ["Saltwater fish & earth potato roots are ideal in the Evening Window."]
  },
  {
    "id": "eve-it-07",
    "title": "Risotto ai Funghi Porcini (Steinpilz-Risotto)",
    "titleEN": "Risotto ai Funghi Porcini (Porcini Mushroom Risotto)",
    "mealName": "Risotto ai Funghi Porcini",
    "description": "Edle Steinpilze, Reis (zeitneutral), Knoblauch, Ghee und Meersalz.",
    "descriptionEN": "Premium porcini mushrooms simmered with Arborio rice, garlic, ghee, and sea salt.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": ["Italien", "Steinpilze", "Risotto", "Knoblauch", "Abend"],
    "ingredients": [
      { "name": "Pilze", "nameEN": "Mushrooms", "amount": "200g frische Steinpilze", "amountEN": "200g fresh porcini mushrooms" },
      { "name": "Weißer Reis", "nameEN": "White Rice", "amount": "150g Arborio-Reis", "amountEN": "150g Arborio rice" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knoblauch und Steinpilze in Ghee anbraten.",
      "Arborio-Reis dazugeben und mit heißem Wasser cremig garen.",
      "Mit Meersalz abschmecken und abends genießen."
    ],
    "instructionsEN": [
      "Sauté garlic and porcini mushrooms in ghee.",
      "Add Arborio rice and simmer with hot water until creamy.",
      "Season with sea salt and enjoy in the evening."
    ],
    "tips": ["Pilze & Knoblauchwurzel fördern die nächtliche Geweberegeneration."],
    "tipsEN": ["Mushrooms & garlic root promote nocturnal cellular recovery."]
  },
  {
    "id": "eve-jp-03",
    "title": "Edler Jakobsmuschel-Teller auf Sellerie-Trüffel-Püree",
    "titleEN": "Seared Scallops over Celeriac & Truffle Puree",
    "mealName": "Seared Scallops & Truffle Puree",
    "description": "Atlantik-Jakobsmuscheln in Ghee angebraten, Knollensellerie- & Knoblauchpüree, schwarzer Trüffel (Pilz) und Meersalz.",
    "descriptionEN": "Atlantic scallops seared in ghee, served over celeriac & garlic puree with black truffle.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": ["Japan", "Jakobsmuscheln", "Trüffel", "Sellerie", "Abend"],
    "ingredients": [
      { "name": "Meeresfrüchte & Garnelen", "nameEN": "Seafood & Shrimp", "amount": "250g Jakobsmuscheln", "amountEN": "250g fresh scallops" },
      { "name": "Knollensellerie", "nameEN": "Celeriac (Celery Root)", "amount": "300g Knollensellerie, gewürfelt", "amountEN": "300g celeriac, diced" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "2 Zehen Knoblauch", "amountEN": "2 cloves garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" },
      { "name": "Meersalz", "nameEN": "Sea Salt", "amount": "1 Prise Meersalz", "amountEN": "1 pinch sea salt" }
    ],
    "instructions": [
      "Knollensellerie und Knoblauch kochen, mit Ghee und Meersalz feinpürieren.",
      "Jakobsmuscheln in heißem Ghee je 1,5 Minuten pro Seite kross anbraten.",
      "Muscheln auf Püree anrichten und mit Trüffel hobeln."
    ],
    "instructionsEN": [
      "Boil celeriac and garlic, mash smoothly with ghee and sea salt.",
      "Sear scallops in hot ghee for 1.5 minutes per side until golden.",
      "Plate scallops over celeriac puree and shave fresh truffle over top."
    ],
    "tips": ["Meeresfrüchte-Delikatesse auf Erdwurzeln & Edelpilzen."],
    "tipsEN": ["Seafood delicacy over earth roots & gourmet fungi."]
  },
  {
    "id": "eve-uk-02",
    "title": "Schottischer Hirschbraten auf Rote-Bete-Meerrettich-Püree",
    "titleEN": "Scottish Venison Roast over Beetroot & Horseradish Puree",
    "mealName": "Scottish Venison & Beetroot Puree",
    "description": "Zartes Hirschrückenfilet, Rote Bete, Knoblauch, Meerrettichwurzel, Ghee und Meersalz.",
    "descriptionEN": "Tender venison loin fillet served over beetroot, garlic, and horseradish root puree.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Schottisch",
    "cuisineEN": "Scottish",
    "isPreloaded": true,
    "tags": ["Schottland", "Hirsch", "Rote Bete", "Meerrettich", "Abend"],
    "ingredients": [
      { "name": "Hirsch / Reh", "nameEN": "Venison", "amount": "300g Hirschrückenfilet", "amountEN": "300g venison loin fillet" },
      { "name": "Rote Bete", "nameEN": "Beetroot", "amount": "300g Rote Bete, gegart", "amountEN": "300g cooked beetroot" },
      { "name": "Meerrettich", "nameEN": "Horseradish", "amount": "1 TL frischer Meerrettich", "amountEN": "1 tsp fresh horseradish" },
      { "name": "Knoblauch", "nameEN": "Garlic", "amount": "1 Zehe Knoblauch", "amountEN": "1 clove garlic" },
      { "name": "Ghee", "nameEN": "Ghee (Clarified Butter)", "amount": "1 EL Ghee", "amountEN": "1 tbsp ghee" }
    ],
    "instructions": [
      "Rote Bete mit Knoblauch, Meerrettich und Meersalz pürieren.",
      "Hirschrückenfilet in Ghee von allen Seiten anbraten und im Ofen bei 160°C 10 Minuten ruhen lassen.",
      "Fleisch in Tranchen schneiden und auf Rote-Bete-Püree servieren."
    ],
    "instructionsEN": [
      "Puree cooked beetroot with garlic, fresh horseradish, and sea salt.",
      "Sear venison loin in ghee on all sides, then rest in oven at 160°C for 10 minutes.",
      "Slice venison into medallions and serve over beetroot puree."
    ],
    "tips": ["Wildfleisch (Hirsch) & Erdwurzeln im Evening Window."],
    "tipsEN": ["Game meat (venison) & earth roots in the Evening Window."]
  },
  {
    "id": "mid-it-08",
    "title": "Italienische Rinder-Lasagne „Solar Midday“ (mit Lauchzwiebelgrün)",
    "titleEN": "Italian Beef Lasagna 'Solar Midday' (with Spring Onion Greens)",
    "mealName": "Italian Beef Lasagna 'Solar Midday'",
    "description": "Schichten aus Durum-Lasagneplatten, Rinderhackfleisch-Ragù mit Strauchtomaten, frischem Lauchzwiebelgrün und Knoblauchgrün.",
    "descriptionEN": "Layers of durum lasagna sheets, beef ragù with bush tomatoes, fresh spring onion greens, and garlic greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 35,
    "servings": 3,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Lasagne",
      "Rind",
      "Lauchzwiebelgrün",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "400g Rinderhackfleisch",
        "amountEN": "400g minced beef"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "300g Strauchtomaten-Passata",
        "amountEN": "300g bush tomato passata"
      },
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Lasagneplatten",
        "amountEN": "200g durum lasagna sheets"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "2 EL Ghee",
        "amountEN": "2 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Lauchzwiebelgrün und Knoblauchgrün in Ghee anbraten.",
      "Tomaten-Passata hinzufügen und 15 Minuten köcheln lassen, mit Meersalz abschmecken.",
      "Lasagneplatten und Rinder-Ragù abwechselnd in eine Auflaufform schichten.",
      "Bei 180°C im Ofen 35 Minuten backen und mittags genießen."
    ],
    "instructionsEN": [
      "Sauté minced beef with spring onion greens and garlic greens in ghee.",
      "Add tomato passata, simmer for 15 minutes, season with sea salt.",
      "Layer lasagna sheets and beef ragù alternately in a baking dish.",
      "Bake at 180°C for 35 minutes and enjoy at midday."
    ],
    "tips": [
      "Das grüne Lauchzwiebel- und Knoblauchgrün wächst oberirdisch und ist 100% regelkonform am Mittag!"
    ],
    "tipsEN": [
      "Spring onion greens and garlic greens grow above ground and are 100% compliant for midday!"
    ]
  },
  {
    "id": "mid-it-09",
    "title": "Klassische Spaghetti Bolognese mit Lauchzwiebelgrün",
    "titleEN": "Classic Spaghetti Bolognese with Spring Onion Greens",
    "mealName": "Spaghetti Bolognese with Spring Onion Greens",
    "description": "Durum-Spaghetti mit herzhaftem Rinder-Ragù, Strauchtomaten und würzigem Lauchzwiebelgrün.",
    "descriptionEN": "Durum wheat spaghetti with savory beef ragù, bush tomatoes, and flavorful spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Bolognese",
      "Spaghetti",
      "Rind",
      "Lauchzwiebelgrün"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Spaghetti",
        "amountEN": "200g durum spaghetti"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "250g Strauchtomaten",
        "amountEN": "250g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "4 Stängel Lauchzwiebelgrün",
        "amountEN": "4 stalks spring onion greens"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "1 EL Knoblauchgrün",
        "amountEN": "1 tbsp garlic greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Spaghetti in Salzwasser al dente kochen.",
      "Rinderhackfleisch mit Lauchzwiebelgrün & Knoblauchgrün in Ghee anbraten.",
      "Gehackte Strauchtomaten hinzugeben, 20 Minuten einkochen lassen.",
      "Bolognese über die Spaghetti geben und mittags servieren."
    ],
    "instructionsEN": [
      "Cook spaghetti in salted water until al dente.",
      "Sauté minced beef with spring onion greens & garlic greens in ghee.",
      "Add chopped bush tomatoes, simmer for 20 minutes.",
      "Serve Bolognese over spaghetti for midday."
    ],
    "tips": [
      "Schnitt- und Frühlingszwiebelgrün verleiht das volle Aroma ohne Wurzelknollen."
    ],
    "tipsEN": [
      "Spring onion and garlic greens provide full flavor without underground bulbs."
    ]
  },
  {
    "id": "mid-gr-03",
    "title": "Griechische Bifteki mit Dinkel-Kritharaki & Lauchzwiebelgrün",
    "titleEN": "Greek Bifteki with Spelt Kritharaki & Spring Onion Greens",
    "mealName": "Greek Bifteki with Spelt Kritharaki",
    "description": "Saftige Rinderhacksteaks mit Lauchzwiebelgrün gewürzt, serviert mit Dinkel-Reisnudeln.",
    "descriptionEN": "Juicy beef patties seasoned with spring onion greens, served with spelt kritharaki pasta.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Griechisch",
    "cuisineEN": "Greek",
    "isPreloaded": true,
    "tags": [
      "Griechenland",
      "Bifteki",
      "Rind",
      "Dinkel",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "350g Rinderhackfleisch",
        "amountEN": "350g minced beef"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "150g Dinkel-Kritharaki",
        "amountEN": "150g spelt kritharaki"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "150g Strauchtomaten",
        "amountEN": "150g bush tomatoes"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit fein gehacktem Lauchzwiebelgrün & Meersalz verkneten und Steaks formen.",
      "Bifteki-Steaks in Ghee von beiden Seiten je 6 Minuten goldbraun braten.",
      "Dinkel-Kritharaki kochen und mit gewürfelten Strauchtomaten vermengen.",
      "Bifteki zusammen mit Kritharaki warm genießen."
    ],
    "instructionsEN": [
      "Knead minced beef with finely chopped spring onion greens & sea salt, form patties.",
      "Pan-fry bifteki patties in ghee for 6 minutes per side until golden.",
      "Cook spelt kritharaki and mix with diced bush tomatoes.",
      "Serve warm patties with kritharaki for lunch."
    ],
    "tips": [
      "Dinkel-Grieß-Reisnudeln sind perfekt für das Midday Window."
    ],
    "tipsEN": [
      "Spelt semolina rice-shaped pasta is ideal for the Midday Window."
    ]
  },
  {
    "id": "mid-cn-01",
    "title": "Chinesisches Kung-Pao-Hähnchen mit Knoblauchgrün & Basmati",
    "titleEN": "Chinese Kung Pao Chicken with Garlic Greens & Basmati",
    "mealName": "Chinese Kung Pao Chicken with Garlic Greens",
    "description": "Hähnchenbrust im Wok angebraten mit Paprika, Lauchzwiebelgrün, Knoblauchgrün und Tamari.",
    "descriptionEN": "Wok-seared chicken breast cooked with bell pepper, spring onion greens, garlic greens, and tamari.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Chinesisch",
    "cuisineEN": "Chinese",
    "isPreloaded": true,
    "tags": [
      "China",
      "Hähnchen",
      "Wok",
      "Knoblauchgrün",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenbrust",
        "amountEN": "300g chicken breast"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "1 Paprika, gewürfelt",
        "amountEN": "1 bell pepper, diced"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Sesamöl & Pflanzliche Öle",
        "nameEN": "Sesame Oil & Plant Oils",
        "amount": "1 EL Sesamöl",
        "amountEN": "1 tbsp sesame oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Basmati-Reis nach Packungsanleitung gar kochen.",
      "Hähnchenbrustwürfel im Wok in Sesamöl scharf anbraten.",
      "Paprika, Lauchzwiebelgrün & Knoblauchgrün kurz mitbraten.",
      "Mit Meersalz abschmecken und auf warmem Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Cook basmati rice according to package directions.",
      "Sear chicken breast cubes in sesame oil in a wok.",
      "Stir-fry bell pepper, spring onion greens & garlic greens briefly.",
      "Season with sea salt and serve over warm basmati rice."
    ],
    "tips": [
      "Grünes Schnittknoblauch verleiht authentischen Wok-Geschmack am Mittag."
    ],
    "tipsEN": [
      "Garlic greens provide authentic wok flavor at midday."
    ]
  },
  {
    "id": "mid-mx-04",
    "title": "Mexikanisches Chili con Carne „Solar Style“ mit Quinoa",
    "titleEN": "Mexican Chili con Carne 'Solar Style' with Quinoa",
    "mealName": "Mexican Chili con Carne with Quinoa",
    "description": "Rinderhackfleisch, Kidneybohnen, Paprika, Strauchtomaten und Lauchzwiebelgrün auf Quinoa.",
    "descriptionEN": "Minced beef, kidney beans, bell pepper, bush tomatoes, and spring onion greens served on quinoa.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": [
      "Mexiko",
      "Chili",
      "Quinoa",
      "Rind",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Pseudogetreide (Quinoa / Buchweizen)",
        "nameEN": "Pseudograins (Quinoa / Buckwheat)",
        "amount": "120g Quinoa",
        "amountEN": "120g quinoa"
      },
      {
        "name": "Bohnen & Erbsen",
        "nameEN": "Beans & Peas",
        "amount": "200g Kidneybohnen",
        "amountEN": "200g kidney beans"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "1 rote Paprika",
        "amountEN": "1 red bell pepper"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten",
        "amountEN": "200g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      }
    ],
    "instructions": [
      "Quinoa abspülen und 15 Minuten in Salzwasser kochen.",
      "Rinderhackfleisch in Ghee mit gehacktem Lauchzwiebelgrün kräftig anbraten.",
      "Paprikawürfel, Kidneybohnen & gehackte Strauchtomaten dazugeben.",
      "20 Minuten köcheln lassen und auf warmem Quinoa anrichten."
    ],
    "instructionsEN": [
      "Rinse quinoa and boil for 15 minutes in salted water.",
      "Brown minced beef in ghee with chopped spring onion greens.",
      "Add diced bell pepper, kidney beans & chopped bush tomatoes.",
      "Simmer for 20 minutes and serve on warm quinoa."
    ],
    "tips": [
      "Lauchzwiebelgrün sorgt für pikante Würze ohne Wurzelknollen."
    ],
    "tipsEN": [
      "Spring onion greens add zesty flavor without root bulbs."
    ]
  },
  {
    "id": "mid-in-04",
    "title": "Indisches Chicken Tikka Masala mit Knoblauchgrün",
    "titleEN": "Indian Chicken Tikka Masala with Garlic Greens",
    "mealName": "Indian Chicken Tikka Masala with Garlic Greens",
    "description": "Zarte Hähnchenbrust in milder Tomaten-Currysauce mit Knoblauchgrün auf Basmati-Reis.",
    "descriptionEN": "Tender chicken breast in mild tomato curry sauce with garlic greens served on basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": [
      "Indien",
      "Curry",
      "Hähnchen",
      "Basmati",
      "Knoblauchgrün"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenbrust",
        "amountEN": "300g chicken breast"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten-Puree",
        "amountEN": "200g bush tomato puree"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Hähnchenbrustwürfel in Ghee anbraten, Knoblauchgrün & Lauchzwiebelgrün mitdünsten.",
      "Strauchtomaten-Purée eingießen und milde Gewürze einrühren.",
      "15 Minuten leise köcheln lassen, bis die Sauce leicht eingedickt ist.",
      "Auf dampfendem Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Sauté chicken breast cubes in ghee, add garlic greens & spring onion greens.",
      "Pour in bush tomato puree and stir in mild spices.",
      "Simmer gently for 15 minutes until sauce thickens slightly.",
      "Serve over steaming basmati rice."
    ],
    "tips": [
      "Knoblauchgrün ergibt ein feines Curry-Aroma am Mittag."
    ],
    "tipsEN": [
      "Garlic greens give a fine curry aroma for midday."
    ]
  },
  {
    "id": "eve-it-08",
    "title": "Italienische Zwiebel-Knoblauch-Frittata (Abend)",
    "titleEN": "Italian Onion-Garlic Frittata (Evening)",
    "mealName": "Italian Onion-Garlic Frittata",
    "description": "Eierspeise mit gedünstetem weißem Lauchzwiebel-Schaft, Knoblauchzehen und Champignons.",
    "descriptionEN": "Egg frittata with sautéed white spring onion stems, garlic cloves, and mushrooms.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Frittata",
      "Eier",
      "Knoblauch",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Eier",
        "nameEN": "Eggs",
        "amount": "4 frische Eier",
        "amountEN": "4 fresh eggs"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Champignons & Spezielle Speisepilze",
        "nameEN": "Mushrooms & Culinary Fungi",
        "amount": "150g braune Champignons",
        "amountEN": "150g brown mushrooms"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Weiße Lauchzwiebel-Schäfte, Knoblauch und Champignons in Ghee sanft dünsten.",
      "Eier verquirlen, mit Meersalz würzen und in die Pfanne gießen.",
      "Bei schwacher Hitze 10 Minuten stocken lassen, wenden und servieren."
    ],
    "instructionsEN": [
      "Sauté white spring onion stems, garlic, and mushrooms gently in ghee.",
      "Whisk eggs with sea salt and pour into the pan.",
      "Cook on low heat for 10 minutes until set, flip and serve."
    ],
    "tips": [
      "Der weiße Schaft der Lauchzwiebel ist ideal für die Abendentspannung."
    ],
    "tipsEN": [
      "The white stem of the spring onion is ideal for evening relaxation."
    ]
  },
  {
    "id": "eve-fr-04",
    "title": "Französische Lauch-Knoblauch-Vichyssoise (Abend)",
    "titleEN": "French Leek-Garlic Vichyssoise (Evening)",
    "mealName": "French Leek-Garlic Vichyssoise",
    "description": "Samtige Wurzelsuppe aus weißem Lauchzwiebel-Schaft, Kartoffeln, Knoblauchzehen und Ghee.",
    "descriptionEN": "Velvety root soup made with white spring onion stems, potatoes, garlic cloves, and ghee.",
    "timeWindow": "Evening",
    "diet": "Vegetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": [
      "Frankreich",
      "Suppe",
      "Kartoffeln",
      "Lauch",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "350g Kartoffeln, gewürfelt",
        "amountEN": "350g potatoes, diced"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Weiße Lauchzwiebel-Schäfte und Knoblauch in Ghee andünsten.",
      "Kartoffelwürfel und Wasser hinzufügen, 20 Minuten weich kochen.",
      "Suppe fein pürieren und mit Meersalz verfeinern."
    ],
    "instructionsEN": [
      "Sauté white spring onion stems and garlic in ghee.",
      "Add potato cubes and water, simmer for 20 minutes until tender.",
      "Puree soup until smooth and season with sea salt."
    ],
    "tips": [
      "Reinste Wurzelkraft für tiefe Regeneration im Evening Window."
    ],
    "tipsEN": [
      "Pure root power for deep regeneration in the Evening Window."
    ]
  },
  {
    "id": "eve-es-03",
    "title": "Kanarischer Thunfisch-Eintopf mit weißem Lauchzwiebel-Mojo",
    "titleEN": "Canarian Tuna Stew with White Spring Onion Mojo",
    "mealName": "Canarian Tuna Stew with White Spring Onion Mojo",
    "description": "Saftige Thunfischfilets, Drillinge-Kartoffeln und Würze aus weißem Lauchzwiebelschaft & Knoblauch.",
    "descriptionEN": "Succulent tuna fillets, baby potatoes, seasoned with white spring onion stems & garlic.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": [
      "Spanien",
      "Thunfisch",
      "Kartoffeln",
      "Mojo",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Meeresfrüchte & Garnelen",
        "nameEN": "Seafood & Shrimp",
        "amount": "300g Thunfischfilet",
        "amountEN": "300g tuna fillet"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "300g kleine Drillinge-Kartoffeln",
        "amountEN": "300g baby potatoes"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "3 Zehen Knoblauch",
        "amountEN": "3 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Kartoffeln in Salzwasser weich kochen.",
      "Weiße Lauchzwiebel-Schäfte und Knoblauch zerstoßen und mit Ghee anhitzen.",
      "Thunfischwürfel kurz scharf anbraten und zu den Kartoffeln servieren."
    ],
    "instructionsEN": [
      "Boil baby potatoes in salted water until tender.",
      "Crush white spring onion stems & garlic, heat with ghee.",
      "Sear tuna cubes briefly and serve alongside the potatoes."
    ],
    "tips": [
      "Meeresfisch kombiniert mit weißen Lauchzwiebeln ist perfekt für den Abend."
    ],
    "tipsEN": [
      "Ocean fish combined with white spring onions is perfect for the evening."
    ]
  },
  {
    "id": "eve-jp-04",
    "title": "Japanische Jacobsmuscheln in weißem Lauch-Miso-Sud",
    "titleEN": "Japanese Scallops in White Leek Miso Broth",
    "mealName": "Japanese Scallops in White Leek Miso Broth",
    "description": "Zarte Jakobsmuscheln sanft gegart in Miso-Brühe mit weißem Lauchzwiebelschaft und Knoblauch.",
    "descriptionEN": "Tender scallops gently simmered in miso broth with white spring onion stems and garlic.",
    "timeWindow": "Evening",
    "diet": "Pescetarian",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Japanisch",
    "cuisineEN": "Japanese",
    "isPreloaded": true,
    "tags": [
      "Japan",
      "Muscheln",
      "Miso",
      "Lauch",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Meeresfrüchte & Garnelen",
        "nameEN": "Seafood & Shrimp",
        "amount": "250g Jakobsmuscheln",
        "amountEN": "250g scallops"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "1 Zehe Knoblauch",
        "amountEN": "1 clove garlic"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 TL Ghee",
        "amountEN": "1 tsp ghee"
      }
    ],
    "instructions": [
      "Weiße Lauchzwiebel-Schäfte in dünne Scheiben schneiden.",
      "Muscheln und Lauch scheiben in Wasser mit 1 TL Ghee 5 Minuten leise gar ziehen lassen.",
      "Mit einer Prise Meersalz servieren."
    ],
    "instructionsEN": [
      "Slice white spring onion stems thinly.",
      "Gently poach scallops and leek slices in water with 1 tsp ghee for 5 minutes.",
      "Season with a pinch of sea salt and serve."
    ],
    "tips": [
      "Edle Meeresfrüchte fördern den Erholungsschlaf am Abend."
    ],
    "tipsEN": [
      "Fine seafood promotes restful sleep in the evening."
    ]
  },
  {
    "id": "eve-uk-03",
    "title": "Britische Hirsch-Frikadellen mit weißem Lauch & Pastinake",
    "titleEN": "British Venison Patties with White Leek & Parsnip",
    "mealName": "British Venison Patties with White Leek",
    "description": "Hirschgehacktes geformt mit weißem Lauchzwiebel-Schaft, serviert auf Pastinakenpüree.",
    "descriptionEN": "Minced venison patties seasoned with white spring onion stems, served on parsnip mash.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Britisch",
    "cuisineEN": "British",
    "isPreloaded": true,
    "tags": [
      "Großbritannien",
      "Hirsch",
      "Pastinake",
      "Lauch",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hirschhackfleisch",
        "amountEN": "300g minced venison"
      },
      {
        "name": "Wurzelgemüse & Rüben",
        "nameEN": "Root Vegetables & Turnips",
        "amount": "350g Pastinaken, gekocht",
        "amountEN": "350g parsnips, cooked"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Hirschhackfleisch mit fein gehackten weißen Lauchzwiebel-Schäften & Knoblauch vermengen, Frikadellen formen.",
      "In Ghee von beiden Seiten 6 Minuten braten.",
      "Pastinaken pürieren und Frikadellen darauf anrichten."
    ],
    "instructionsEN": [
      "Mix minced venison with finely chopped white spring onion stems & garlic, form patties.",
      "Pan-fry in ghee for 6 minutes per side.",
      "Mash cooked parsnips and serve patties on top."
    ],
    "tips": [
      "Wildfleisch und unterirdische Wurzeln für ein nährstoffreiches Abendessen."
    ],
    "tipsEN": [
      "Game meat and underground roots for a nutrient-rich dinner."
    ]
  },
  {
    "id": "eve-de-03",
    "title": "Deftiges Pilz-Gulasch mit weißem Lauchzwiebel-Ansatz",
    "titleEN": "Hearty Mushroom Goulash with White Leek Base",
    "mealName": "Hearty Mushroom Goulash with White Leek Base",
    "description": "Braune Champignons & Kräuterseitlinge geschmort mit weißem Lauchzwiebelschaft auf Röstkartoffeln.",
    "descriptionEN": "Brown mushrooms & king oysters braised with white spring onion stems served over crispy roasted potatoes.",
    "timeWindow": "Evening",
    "diet": "Vegan",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Pilze",
      "Gulasch",
      "Kartoffeln",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Champignons & Spezielle Speisepilze",
        "nameEN": "Mushrooms & Culinary Fungi",
        "amount": "350g gemischte Pilze",
        "amountEN": "350g mixed mushrooms"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "300g Kartoffeln",
        "amountEN": "300g potatoes"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Kartoffelecken in Ghee knusprig rösten.",
      "Pilze, weiße Lauchzwiebel-Schäfte und Knoblauch scharf anbraten.",
      "Mit etwas Salzwasser ablöschen, 15 Minuten einkochen lassen und mit den Röstkartoffeln servieren."
    ],
    "instructionsEN": [
      "Roast potato wedges in ghee until crispy.",
      "Sear mushrooms, white spring onion stems, and garlic on high heat.",
      "Deglaze with salted water, simmer 15 minutes, serve with roasted potatoes."
    ],
    "tips": [
      "Pilze und unterirdische Wurzeln sind die Quintessenz des Evening Windows."
    ],
    "tipsEN": [
      "Mushrooms and underground roots are the essence of the Evening Window."
    ]
  },
  {
    "id": "mid-it-10",
    "title": "Penne all'Arrabbiata mit Lauchzwiebelgrün & Cayennepfeffer",
    "titleEN": "Penne all'Arrabbiata with Spring Onion Greens & Cayenne",
    "mealName": "Penne all'Arrabbiata with Spring Onion Greens",
    "description": "Durum-Penne in pikanter Strauchtomaten-Sauce mit Lauchzwiebelgrün, Knoblauchgrün und Cayennepfeffer.",
    "descriptionEN": "Durum penne in spicy bush tomato sauce with spring onion greens, garlic greens, and cayenne pepper.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pasta",
      "Arrabbiata",
      "Lauchzwiebelgrün",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Penne",
        "amountEN": "200g durum penne"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "300g Strauchtomaten-Passata",
        "amountEN": "300g bush tomato passata"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Olivenöl & Baumöle",
        "nameEN": "Olive Oil & Tree Oils",
        "amount": "2 EL kaltgepresstes Olivenöl",
        "amountEN": "2 tbsp cold-pressed olive oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Cayennepfeffer",
        "amountEN": "1 pinch sea salt & cayenne pepper"
      }
    ],
    "instructions": [
      "Durum-Penne in reichlich Salzwasser al dente kochen.",
      "Lauchzwiebelgrün und Knoblauchgrün in Olivenöl sanft anbraten.",
      "Strauchtomaten-Passata & Cayennepfeffer hinzugeben, 10 Minuten einkochen.",
      "Penne unter die Sauce mischen und mittags servieren."
    ],
    "instructionsEN": [
      "Cook durum penne in salted water until al dente.",
      "Sauté spring onion greens and garlic greens gently in olive oil.",
      "Add bush tomato passata & cayenne pepper, simmer for 10 minutes.",
      "Toss penne with sauce and serve for midday."
    ],
    "tips": [
      "Cayennepfeffer ist reich an Nährstoffen und schont die Gallenblase."
    ],
    "tipsEN": [
      "Cayenne pepper is nutrient-rich and gentle on the gallbladder."
    ]
  },
  {
    "id": "mid-it-11",
    "title": "Tagliatelle al Ragù di Pollo (Hähnchen-Ragù mit Basilikum)",
    "titleEN": "Tagliatelle al Ragù di Pollo (Chicken Ragù with Basil)",
    "mealName": "Tagliatelle al Ragù di Pollo",
    "description": "Durum-Tagliatelle mit zart gehackter Hähnchenbrust, Strauchtomaten, Lauchzwiebelgrün und Basilikum.",
    "descriptionEN": "Durum tagliatelle with finely minced chicken breast, bush tomatoes, spring onion greens, and fresh basil.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pasta",
      "Hähnchen",
      "Ragù",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Tagliatelle",
        "amountEN": "200g durum tagliatelle"
      },
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenbrust, fein gehackt",
        "amountEN": "300g chicken breast, finely minced"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "250g Strauchtomaten",
        "amountEN": "250g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "4 Stängel Lauchzwiebelgrün",
        "amountEN": "4 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & frischer Basilikum",
        "amountEN": "1 pinch sea salt & fresh basil"
      }
    ],
    "instructions": [
      "Tagliatelle in Salzwasser al dente kochen.",
      "Gehacktes Hähnchenbrustfleisch mit Lauchzwiebelgrün in Ghee anbraten.",
      "Gewürfelte Strauchtomaten hinzugeben und 15 Minuten leise einkochen.",
      "Basilikum unterrühren, mit Tagliatelle vermengen und mittags genießen."
    ],
    "instructionsEN": [
      "Cook tagliatelle in salted water until al dente.",
      "Sauté minced chicken breast with spring onion greens in ghee.",
      "Add diced bush tomatoes and simmer gently for 15 minutes.",
      "Stir in fresh basil, toss with tagliatelle, and enjoy at midday."
    ],
    "tips": [
      "Mageres Geflügel kombiniert mit Hartweizen ist leicht verdaulich am Mittag."
    ],
    "tipsEN": [
      "Lean poultry combined with durum wheat is easily digestible at midday."
    ]
  },
  {
    "id": "mid-it-12",
    "title": "Orecchiette mit Strauch-Paprika & Puten-Salsiccia",
    "titleEN": "Orecchiette with Bush Bell Pepper & Turkey Salsiccia",
    "mealName": "Orecchiette with Turkey Salsiccia",
    "description": "Durum-Orecchiette mit fenchelgewürzter Puten-Hackmasse, bunten Paprikastreifen und Lauchzwiebelgrün.",
    "descriptionEN": "Durum orecchiette with fennel-seasoned turkey sausage meat, colorful bell pepper strips, and spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pasta",
      "Pute",
      "Paprika",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Orecchiette",
        "amountEN": "200g durum orecchiette"
      },
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Putenhackfleisch",
        "amountEN": "300g minced turkey"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "2 bunte Paprika, in Streifen",
        "amountEN": "2 colorful bell peppers, sliced"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Fenchelsaat",
        "amountEN": "1 pinch sea salt & fennel seeds"
      }
    ],
    "instructions": [
      "Putenhackfleisch mit Fenchelsaat & Meersalz würzen und in Ghee anbraten.",
      "Paprikastreifen & Lauchzwiebelgrün dazugeben und 10 Minuten braten.",
      "Orecchiette kochen und direkt unter die Pfanne heben.",
      "Warm servieren und genießen."
    ],
    "instructionsEN": [
      "Season minced turkey with fennel seeds & sea salt, brown in ghee.",
      "Add bell pepper strips & spring onion greens, cook for 10 minutes.",
      "Boil orecchiette and fold directly into the pan.",
      "Serve warm and enjoy."
    ],
    "tips": [
      "Fenchelsaat verleiht der Putenmasse die typische Salsiccia-Note."
    ],
    "tipsEN": [
      "Fennel seeds give turkey meat that authentic salsiccia flavor."
    ]
  },
  {
    "id": "mid-it-13",
    "title": "Rigatoni alla Carbonara „Solar Midday“ (ohne Käse & Schwein)",
    "titleEN": "Rigatoni alla Carbonara 'Solar Midday' (Dairy-Free & Pork-Free)",
    "mealName": "Rigatoni alla Carbonara 'Solar Midday'",
    "description": "Durum-Rigatoni mit knusprigen Putenbrust-Streifen, cremigem Eigelb und frischem Lauchzwiebelgrün.",
    "descriptionEN": "Durum rigatoni with crispy turkey breast strips, creamy egg yolk, and fresh spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pasta",
      "Carbonara",
      "Pute",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Rigatoni",
        "amountEN": "200g durum rigatoni"
      },
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "150g Putenbrust, in Würfeln",
        "amountEN": "150g turkey breast, diced"
      },
      {
        "name": "Eier",
        "nameEN": "Eggs",
        "amount": "3 frische Eigelb",
        "amountEN": "3 fresh egg yolks"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Cayennepfeffer",
        "amountEN": "1 pinch sea salt & cayenne pepper"
      }
    ],
    "instructions": [
      "Rigatoni in Salzwasser al dente kochen.",
      "Putenbrustwürfel in Ghee knusprig braun anbraten.",
      "Heiße Pasta abgießen, vom Herd nehmen und Eigelb rasch mit Lauchzwiebelgrün unterrühren.",
      "Mit Meersalz & Cayennepfeffer servieren."
    ],
    "instructionsEN": [
      "Cook rigatoni in salted water until al dente.",
      "Sear turkey breast cubes in ghee until crispy brown.",
      "Drain hot pasta, remove from heat, quickly stir in egg yolks with spring onion greens.",
      "Season with sea salt & cayenne pepper and serve."
    ],
    "tips": [
      "Eigelb bindet die Pasta cremig, ganz ohne Milchprodukte oder geschmolzenen Käse."
    ],
    "tipsEN": [
      "Egg yolk creates a creamy coating without dairy or melted cheese."
    ]
  },
  {
    "id": "mid-it-14",
    "title": "Farfalle mit Pesto Genovese aus Basilikum & Pinienkernen",
    "titleEN": "Farfalle with Pesto Genovese from Basil & Pine Nuts",
    "mealName": "Farfalle with Pesto Genovese",
    "description": "Durum-Farfalle gehüllt in ein frisches Pesto aus Basilikum, Pinienkernen, Knoblauchgrün und Olivenöl.",
    "descriptionEN": "Durum farfalle coated in fresh pesto made from basil, pine nuts, garlic greens, and olive oil.",
    "timeWindow": "Midday",
    "diet": "Vegan",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pasta",
      "Pesto",
      "Basilikum",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Farfalle",
        "amountEN": "200g durum farfalle"
      },
      {
        "name": "Baumnüsse & Mandeln",
        "nameEN": "Tree Nuts & Almonds",
        "amount": "40g Pinienkerne",
        "amountEN": "40g pine nuts"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Olivenöl & Baumöle",
        "nameEN": "Olive Oil & Tree Oils",
        "amount": "3 EL Olivenöl",
        "amountEN": "3 tbsp olive oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & frischer Basilikum",
        "amountEN": "1 pinch sea salt & fresh basil"
      }
    ],
    "instructions": [
      "Farfalle in Salzwasser kochen.",
      "Frischen Basilikum, Pinienkerne, Knoblauchgrün, Olivenöl & Meersalz im Mörser oder Mixer fein pürieren.",
      "Gekochte Farfalle abgießen und sofort mit dem frischen Pesto vermengen.",
      "Lauwarm servieren."
    ],
    "instructionsEN": [
      "Boil farfalle in salted water.",
      "Blend fresh basil, pine nuts, garlic greens, olive oil & sea salt into a smooth pesto.",
      "Drain cooked farfalle and toss immediately with fresh pesto.",
      "Serve warm."
    ],
    "tips": [
      "Frische Pinienkerne & Basilikum eignen sich hervorragend für das Mittagsfenster."
    ],
    "tipsEN": [
      "Fresh pine nuts & basil are ideal for the Midday Window."
    ]
  },
  {
    "id": "mid-it-15",
    "title": "Fusilli mit Rinderhack-Tomaten-Sauce & Kräutern der Provence",
    "titleEN": "Fusilli with Beef & Tomato Sauce & Herbs de Provence",
    "mealName": "Fusilli with Beef & Tomato Sauce",
    "description": "Spiralnudeln aus Durum-Weizen in reichhaltiger Rinderhackfleisch-Sauce mit Kräutern und Lauchzwiebelgrün.",
    "descriptionEN": "Durum fusilli in rich minced beef sauce seasoned with Mediterranean herbs and spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Fusilli",
      "Rind",
      "Kräuter",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "200g Durum-Fusilli",
        "amountEN": "200g durum fusilli"
      },
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "250g Strauchtomaten-Passata",
        "amountEN": "250g bush tomato passata"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "4 Stängel Lauchzwiebelgrün",
        "amountEN": "4 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Kräuter der Provence",
        "amountEN": "1 pinch sea salt & herbs de Provence"
      }
    ],
    "instructions": [
      "Fusilli al dente kochen.",
      "Rinderhackfleisch mit Lauchzwiebelgrün in Ghee anbraten.",
      "Passata & mediterrane Kräuter einrühren, 15 Minuten köcheln lassen.",
      "Fusilli unter die Sauce heben und servieren."
    ],
    "instructionsEN": [
      "Cook fusilli until al dente.",
      "Sauté minced beef with spring onion greens in ghee.",
      "Stir in passata & Mediterranean herbs, simmer for 15 minutes.",
      "Fold fusilli into sauce and serve."
    ],
    "tips": [
      "Durch Fusilli-Spiralen haftet die Rindersauce besonders gut."
    ],
    "tipsEN": [
      "Fusilli spirals catch the savory beef sauce exceptionally well."
    ]
  },
  {
    "id": "mid-de-04",
    "title": "Deutsche Frikadellen „Klassik Solar“ mit Dinkel-Hafer-Flocken (Midday)",
    "titleEN": "German Meatballs 'Classic Solar' with Spelt-Oat Flakes (Midday)",
    "mealName": "German Meatballs 'Classic Solar'",
    "description": "Saftige Rinderhack-Frikadellen gebunden mit Dinkel-Haferflocken, Lauchzwiebelgrün und Knoblauchgrün.",
    "descriptionEN": "Juicy beef meatballs bound with spelt-oat flakes, spring onion greens, and garlic greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Frikadellen",
      "Rind",
      "Haferflocken",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "350g Rinderhackfleisch",
        "amountEN": "350g minced beef"
      },
      {
        "name": "Hafer & Haferflocken",
        "nameEN": "Oats & Oatmeal",
        "amount": "3 EL zarte Haferflocken",
        "amountEN": "3 tbsp rolled oats"
      },
      {
        "name": "Eier",
        "nameEN": "Eggs",
        "amount": "1 frisches Ei",
        "amountEN": "1 fresh egg"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "1 EL Knoblauchgrün",
        "amountEN": "1 tbsp garlic greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Cayennepfeffer",
        "amountEN": "1 pinch sea salt & cayenne pepper"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Haferflocken, Ei, gehacktem Lauchzwiebelgrün, Knoblauchgrün & Meersalz verkneten.",
      "4 gleich große Frikadellen formen.",
      "In Ghee bei mittlerer Hitze von beiden Seiten je 7 Minuten knusprig braun braten.",
      "Warm servieren."
    ],
    "instructionsEN": [
      "Mix minced beef with oats, egg, chopped spring onion greens, garlic greens & sea salt.",
      "Form 4 equal-sized meatballs.",
      "Pan-fry in ghee on medium heat for 7 minutes per side until crispy brown.",
      "Serve warm."
    ],
    "tips": [
      "Haferflocken sind ein perfekter glutenarmer Binder für Frikadellen am Mittag."
    ],
    "tipsEN": [
      "Oats are a perfect low-gluten binder for meatballs at midday."
    ]
  },
  {
    "id": "mid-de-05",
    "title": "Hackbraten „Omas Art Solar“ mit Strauchtomaten-Gravy (Midday)",
    "titleEN": "German Meatloaf 'Grandma Style Solar' with Bush Tomato Gravy (Midday)",
    "mealName": "German Meatloaf with Bush Tomato Gravy",
    "description": "Deftiger Rinderhackbraten gewürzt mit Lauchzwiebelgrün, gebacken in aromatischer Strauchtomaten-Gravy.",
    "descriptionEN": "Hearty beef meatloaf seasoned with spring onion greens, baked in aromatic bush tomato gravy.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "servings": 3,
    "difficulty": "Mittel",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Hackbraten",
      "Rind",
      "Tomaten",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "500g Rinderhackfleisch",
        "amountEN": "500g minced beef"
      },
      {
        "name": "Eier",
        "nameEN": "Eggs",
        "amount": "1 frisches Ei",
        "amountEN": "1 fresh egg"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "2 EL Dinkelmehl",
        "amountEN": "2 tbsp spelt flour"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "300g Strauchtomaten-Passata",
        "amountEN": "300g bush tomato passata"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Thymian",
        "amountEN": "1 pinch sea salt & thyme"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Ei, Dinkelmehl, gehacktem Lauchzwiebelgrün und Meersalz vermengen.",
      "Zu einem länglichen Laib formen und in eine gefettete Auflaufform legen.",
      "Strauchtomaten-Passata mit Thymian um den Hackbraten gießen.",
      "Bei 180°C im Ofen 40 Minuten garen, in Scheiben schneiden und mittags genießen."
    ],
    "instructionsEN": [
      "Mix minced beef with egg, spelt flour, chopped spring onion greens, and sea salt.",
      "Shape into a loaf and place in a greased baking dish.",
      "Pour bush tomato passata with thyme around the meatloaf.",
      "Bake at 180°C for 40 minutes, slice, and enjoy at midday."
    ],
    "tips": [
      "Ein zeitloser Sonntagsbraten-Klassiker für das Mittagsfenster."
    ],
    "tipsEN": [
      "A timeless Sunday roast classic adapted for the Midday Window."
    ]
  },
  {
    "id": "mid-de-06",
    "title": "Königsberger Klopse „Solar Midday“ in Kapern-Dinkel-Sauce",
    "titleEN": "Königsberg Meatballs 'Solar Midday' in Caper-Spelt Sauce",
    "mealName": "Königsberg Meatballs in Caper Sauce",
    "description": "Zarte Kalb- oder Rinderklopse in cremiger Dinkel-Ghee-Sauce mit Kapern auf dämpfendem Basmati-Reis.",
    "descriptionEN": "Tender veal or beef meatballs in creamy spelt-ghee sauce with capers over steaming basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Klopse",
      "Rind",
      "Kapern",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "350g Rinderhackfleisch oder Kalb",
        "amountEN": "350g minced beef or veal"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "1 EL Dinkelmehl",
        "amountEN": "1 tbsp spelt flour"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "2 EL Kapern & 1 Prise Meersalz",
        "amountEN": "2 tbsp capers & 1 pinch sea salt"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Lauchzwiebelgrün & Meersalz verkneten, kleine Klopse formen.",
      "Klopse in leicht kochendem Salzwasser 12 Minuten gar ziehen lassen.",
      "Aus Ghee, Dinkelmehl und Kochsud eine helle Sauce rühren, Kapern dazugeben.",
      "Klopse in der Sauce auf Basmati-Reis servieren."
    ],
    "instructionsEN": [
      "Mix minced beef with spring onion greens & sea salt, form small meatballs.",
      "Simmer meatballs gently in salted water for 12 minutes.",
      "Make a light sauce from ghee, spelt flour, and broth, stir in capers.",
      "Serve meatballs in sauce over basmati rice."
    ],
    "tips": [
      "Kapern wachsen an Sträuchern und passen hervorragend ins Midday Window."
    ],
    "tipsEN": [
      "Capers grow on bushes and fit perfectly into the Midday Window."
    ]
  },
  {
    "id": "eve-de-04",
    "title": "Gekochte Rinder-Hackbällchen in cremigem Pastinaken-Sud (Evening)",
    "titleEN": "Boiled Beef Meatballs in Creamy Parsnip Broth (Evening)",
    "mealName": "Boiled Beef Meatballs in Parsnip Broth",
    "description": "Saftige Rinderhackbällchen gewürzt mit weißem Lauchzwiebel-Schaft, serviert in püriertem Pastinaken-Sud mit Röstkartoffeln.",
    "descriptionEN": "Juicy beef meatballs seasoned with white spring onion stems, served in pureed parsnip broth with roasted potatoes.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Hackbällchen",
      "Pastinake",
      "Kartoffeln",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Wurzelgemüse & Rüben",
        "nameEN": "Root Vegetables & Turnips",
        "amount": "300g Pastinaken, gewürfelt",
        "amountEN": "300g parsnips, diced"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "250g Kartoffeln",
        "amountEN": "250g potatoes"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Pastinaken & weiße Lauchzwiebel-Schäfte in Salzwasser weich kochen und feinpürieren.",
      "Rinderhackfleisch mit Knoblauch & Meersalz verkneten, Bällchen formen.",
      "Hackbällchen im Pastinaken-Sud 12 Minuten gar ziehen lassen.",
      "Zusammen mit knusprigen Röstkartoffeln abends genießen."
    ],
    "instructionsEN": [
      "Boil parsnips & white spring onion stems in salted water, puree smooth.",
      "Knead minced beef with garlic & sea salt, form meatballs.",
      "Poach meatballs in parsnip broth for 12 minutes.",
      "Enjoy in the evening alongside crispy roasted potatoes."
    ],
    "tips": [
      "Pastinaken & Kartoffeln spenden reichlich Erdwurzel-Energie am Abend."
    ],
    "tipsEN": [
      "Parsnips & potatoes provide abundant earth-root energy in the evening."
    ]
  },
  {
    "id": "mid-de-07",
    "title": "Schmorkohl mit Rinderhackfleisch & Kümmel (Midday)",
    "titleEN": "Braised Cabbage with Minced Beef & Caraway (Midday)",
    "mealName": "Braised Cabbage with Minced Beef",
    "description": "Zarter Weißkohl oder Spitzkohl geschmort mit Rinderhackfleisch, Kümmel und Lauchzwiebelgrün.",
    "descriptionEN": "Tender white cabbage braised with minced beef, caraway seeds, and spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Schmorkohl",
      "Kohl",
      "Rind",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Brokkoli & Kohlarten",
        "nameEN": "Broccoli & Cabbage Types",
        "amount": "400g Spitzkohl, in Streifen",
        "amountEN": "400g pointed cabbage, sliced"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 TL Kümmel & 1 Prise Meersalz",
        "amountEN": "1 tsp caraway seeds & 1 pinch sea salt"
      }
    ],
    "instructions": [
      "Rinderhackfleisch in Ghee kräftig krümelig anbraten.",
      "Spitzkohlstreifen & Lauchzwiebelgrün hinzugeben und 5 Minuten mitanbraten.",
      "Mit etwas Wasser ablöschen, Kümmel & Meersalz hinzufügen.",
      "Abgedeckt 20 Minuten weich schmoren und mittags genießen."
    ],
    "instructionsEN": [
      "Brown minced beef in ghee until crumbly.",
      "Add pointed cabbage slices & spring onion greens, sauté for 5 minutes.",
      "Deglaze with a little water, add caraway seeds & sea salt.",
      "Cover and braise gently for 20 minutes, enjoy at midday."
    ],
    "tips": [
      "Kohl ist ein oberirdisches Strauchgemüse und ideal für das Mittagsfenster."
    ],
    "tipsEN": [
      "Cabbage grows above ground and is ideal for the Midday Window."
    ]
  },
  {
    "id": "eve-de-05",
    "title": "Deftiges Hack-Kartoffel-Pfännchen mit weißem Lauch (Evening)",
    "titleEN": "Hearty Beef & Potato Skillet with White Leek (Evening)",
    "mealName": "Hearty Beef & Potato Skillet",
    "description": "Rinderhackfleisch gebraten mit würfeligen Röstkartoffeln, weißem Lauchzwiebel-Schaft und Knoblauch.",
    "descriptionEN": "Minced beef fried with diced roasted potatoes, white spring onion stems, and garlic.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Kartoffeln",
      "Rind",
      "Pfanne",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "350g gekochte Kartoffeln, gewürfelt",
        "amountEN": "350g cooked potatoes, diced"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Majoran",
        "amountEN": "1 pinch sea salt & marjoram"
      }
    ],
    "instructions": [
      "Kartoffelwürfel in Ghee goldbraun und knusprig anbraten.",
      "Rinderhackfleisch, weiße Lauchzwiebel-Schäfte & Knoblauch dazugeben und durchbraten.",
      "Mit Meersalz & Majoran abschmecken.",
      "Heiß aus der Pfanne servieren."
    ],
    "instructionsEN": [
      "Fry potato cubes in ghee until golden brown and crispy.",
      "Add minced beef, white spring onion stems & garlic, cook thoroughly.",
      "Season with sea salt & marjoram.",
      "Serve hot straight from the skillet."
    ],
    "tips": [
      "Ein rustikaler Klassiker für das Abendfenster mit Erdwurzeln."
    ],
    "tipsEN": [
      "A rustic classic for the Evening Window with earth roots."
    ]
  },
  {
    "id": "mid-it-16",
    "title": "Parmaschinken-Röllchen auf Dinkel-Bruschetta mit Basilikum",
    "titleEN": "Parma Ham Rolls on Spelt Bruschetta with Basil",
    "mealName": "Parma Ham Rolls on Spelt Bruschetta",
    "description": "Luftgetrockneter Parmaschinken auf knusprigem Dinkelbrot, belegt mit gewürfelten Strauchtomaten und Basilikum.",
    "descriptionEN": "Air-cured Parma ham served on crispy toasted spelt bread, topped with diced bush tomatoes and fresh basil.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Schinken",
      "Dinkel",
      "Bruschetta",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "100g Parmaschinken (Prosciutto)",
        "amountEN": "100g Parma ham (Prosciutto)"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "4 Scheiben Dinkelbrot",
        "amountEN": "4 slices spelt bread"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten",
        "amountEN": "200g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "2 Stängel Lauchzwiebelgrün",
        "amountEN": "2 stalks spring onion greens"
      },
      {
        "name": "Olivenöl & Baumöle",
        "nameEN": "Olive Oil & Tree Oils",
        "amount": "1 EL kaltgepresstes Olivenöl",
        "amountEN": "1 tbsp cold-pressed olive oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & frischer Basilikum",
        "amountEN": "1 pinch sea salt & fresh basil"
      }
    ],
    "instructions": [
      "Dinkelbrotscheiben im Ofen oder Toaster knusprig anrösten.",
      "Strauchtomaten würfeln, mit Lauchzwiebelgrün, Olivenöl & Meersalz anmachen.",
      "Tomaten-Mischung auf das Dinkelbrot geben und mit Parmaschinken-Röllchen & Basilikum anrichten."
    ],
    "instructionsEN": [
      "Toast spelt bread slices until crispy.",
      "Dice bush tomatoes, mix with spring onion greens, olive oil & sea salt.",
      "Top spelt toast with tomato mix, add Parma ham rolls and fresh basil."
    ],
    "tips": [
      "Luftgetrockneter Naturschinken ohne Zusatzstoffe passt hervorragend am Mittag."
    ],
    "tipsEN": [
      "Air-cured natural ham without additives is great for the Midday Window."
    ]
  },
  {
    "id": "mid-es-04",
    "title": "Serrano-Schinken-Pfanne mit Paprika & Basmati-Reis",
    "titleEN": "Serrano Ham Skillet with Bell Peppers & Basmati Rice",
    "mealName": "Serrano Ham Skillet with Basmati Rice",
    "description": "Würzige Serrano-Schinkenstreifen gebraten mit Paprika, Lauchzwiebelgrün und Basmati-Reis.",
    "descriptionEN": "Flavorful Serrano ham strips pan-fried with bell peppers, spring onion greens, and basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Spanisch",
    "cuisineEN": "Spanish",
    "isPreloaded": true,
    "tags": [
      "Spanien",
      "Schinken",
      "Reis",
      "Paprika",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "120g Serrano-Schinken, in Streifen",
        "amountEN": "120g Serrano ham, sliced"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "2 Paprika (rot & gelb)",
        "amountEN": "2 bell peppers (red & yellow)"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Basmati-Reis gar kochen.",
      "Serrano-Schinkenstreifen in Ghee anbraten, Paprikastreifen & Lauchzwiebelgrün dazugeben.",
      "5 Minuten braten, Reis unterheben und warm servieren."
    ],
    "instructionsEN": [
      "Cook basmati rice.",
      "Pan-fry Serrano ham strips in ghee, add bell pepper slices & spring onion greens.",
      "Sauté for 5 minutes, fold in rice, and serve warm."
    ],
    "tips": [
      "Der herzhafte Serrano-Schinken bringt natürliches Salz und Würze."
    ],
    "tipsEN": [
      "Savory Serrano ham adds natural salt and flavor to the dish."
    ]
  },
  {
    "id": "mid-gr-04",
    "title": "Souvlaki-Spieße vom Hähnchen mit Dinkel-Reis & Strauchtomaten",
    "titleEN": "Chicken Souvlaki Skewers with Spelt Rice & Bush Tomatoes",
    "mealName": "Chicken Souvlaki Skewers with Spelt Rice",
    "description": "Zarte Hähnchenbrust-Spieße gewürzt mit Oregano & Zitrone, serviert mit Dinkel-Kritharaki.",
    "descriptionEN": "Tender chicken breast skewers seasoned with oregano & lemon, served with spelt kritharaki pasta.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Griechisch",
    "cuisineEN": "Greek",
    "isPreloaded": true,
    "tags": [
      "Griechenland",
      "Hähnchen",
      "Souvlaki",
      "Dinkel",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "350g Hähnchenbrust, gewürfelt",
        "amountEN": "350g chicken breast, diced"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "150g Dinkel-Kritharaki",
        "amountEN": "150g spelt kritharaki"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "150g Strauchtomaten",
        "amountEN": "150g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 TL Oregano & Zitrone",
        "amountEN": "1 tsp oregano & lemon juice"
      }
    ],
    "instructions": [
      "Hähnchenwürfel auf Holzspieße stecken, mit Oregano, Zitronensaft & Meersalz marinieren.",
      "Spieße in Ghee in der Pfanne 12 Minuten rundum goldbraun braten.",
      "Dinkel-Kritharaki kochen, mit Strauchtomaten-Würfeln vermengen und servieren."
    ],
    "instructionsEN": [
      "Thread chicken cubes onto wooden skewers, marinate with oregano, lemon juice & sea salt.",
      "Pan-fry skewers in ghee for 12 minutes until golden brown.",
      "Cook spelt kritharaki, toss with diced bush tomatoes, and serve."
    ],
    "tips": [
      "Frische Kräuter wie Oregano unterstützen die Verdauung am Mittag."
    ],
    "tipsEN": [
      "Fresh herbs like oregano support digestion at midday."
    ]
  },
  {
    "id": "mid-mx-05",
    "title": "Mexikanische Tacos mit Rinderhackfleisch & Paprika-Salsa",
    "titleEN": "Mexican Tacos with Minced Beef & Bell Pepper Salsa",
    "mealName": "Mexican Tacos with Minced Beef",
    "description": "Dinkel- oder Maistortillas gefüllt mit würzigem Rinderhackfleisch, Strauchtomaten und Lauchzwiebelgrün.",
    "descriptionEN": "Spelt or corn tortillas stuffed with savory minced beef, bush tomatoes, and spring onion greens.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Mexikanisch",
    "cuisineEN": "Mexican",
    "isPreloaded": true,
    "tags": [
      "Mexiko",
      "Tacos",
      "Rind",
      "Paprika",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Rinderhackfleisch",
        "amountEN": "300g minced beef"
      },
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "4 Tortillas (Dinkel oder Mais)",
        "amountEN": "4 tortillas (spelt or corn)"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten",
        "amountEN": "200g bush tomatoes"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Cayennepfeffer",
        "amountEN": "1 pinch sea salt & cayenne pepper"
      }
    ],
    "instructions": [
      "Rinderhackfleisch in Ghee mit Lauchzwiebelgrün & Cayennepfeffer kräftig anbraten.",
      "Strauchtomaten würfeln und als frische Salsa anmachen.",
      "Tortillas erwärmen, mit Hackfleisch & Salsa füllen und warm genießen."
    ],
    "instructionsEN": [
      "Sauté minced beef in ghee with spring onion greens & cayenne pepper.",
      "Dice bush tomatoes to create fresh salsa.",
      "Warm tortillas, fill with beef & salsa, and enjoy warm."
    ],
    "tips": [
      "Eine schmackhafte Taco-Variante frei von geschmolzenem Käse."
    ],
    "tipsEN": [
      "A delicious taco variation free of melted cheese."
    ]
  },
  {
    "id": "mid-fr-05",
    "title": "Französisches Hähnchen-Geschnetzeltes „Estragon“ mit Basmati",
    "titleEN": "French Sliced Chicken 'Tarragon' with Basmati Rice",
    "mealName": "French Sliced Chicken 'Tarragon'",
    "description": "Cremig eingekochte Hähnchenbrust-Streifen mit frischem Estragon, Knoblauchgrün und Basmati-Reis.",
    "descriptionEN": "Tender sliced chicken breast simmered with fresh tarragon, garlic greens, and basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": [
      "Frankreich",
      "Hähnchen",
      "Estragon",
      "Reis",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenbrust, in Streifen",
        "amountEN": "300g chicken breast, sliced"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 EL frischer Estragon & 1 Prise Meersalz",
        "amountEN": "1 tbsp fresh tarragon & 1 pinch sea salt"
      }
    ],
    "instructions": [
      "Basmati-Reis kochen.",
      "Hähnchenbrust-Streifen in Ghee anbraten, Lauchzwiebelgrün & Knoblauchgrün dazugeben.",
      "Mit etwas Wasser ablöschen, frischen Estragon einrühren und 10 Minuten köcheln lassen.",
      "Auf Reis servieren."
    ],
    "instructionsEN": [
      "Cook basmati rice.",
      "Sauté sliced chicken breast in ghee, add spring onion greens & garlic greens.",
      "Deglaze with a splash of water, stir in fresh tarragon, simmer for 10 minutes.",
      "Serve over rice."
    ],
    "tips": [
      "Estragon verleiht dem zarten Hähnchenfleisch ein vornehm aromatisches Bukett."
    ],
    "tipsEN": [
      "Tarragon lends an elegant, aromatic bouquet to tender chicken."
    ]
  },
  {
    "id": "mid-tr-01",
    "title": "Türkisches Kuru Fasulye (Rinderhack-Bohnen-Eintopf) mit Reis",
    "titleEN": "Turkish Kuru Fasulye (Minced Beef & Bean Stew) with Rice",
    "mealName": "Turkish Kuru Fasulye with Rice",
    "description": "Traditioneller Weißbohnen-Eintopf mit Rinderhackfleisch, Tomatenpassata und Basmati-Reis.",
    "descriptionEN": "Traditional white bean stew cooked with minced beef, bush tomato passata, served with basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Türkisch",
    "cuisineEN": "Turkish",
    "isPreloaded": true,
    "tags": [
      "Türkei",
      "Bohnen",
      "Rind",
      "Reis",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "250g Rinderhackfleisch",
        "amountEN": "250g minced beef"
      },
      {
        "name": "Bohnen & Erbsen",
        "nameEN": "Beans & Peas",
        "amount": "250g weiße Bohnen (gekocht)",
        "amountEN": "250g cooked white beans"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten-Passata",
        "amountEN": "200g bush tomato passata"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Lauchzwiebelgrün in Ghee braun anbraten.",
      "Strauchtomaten-Passata & weiße Bohnen dazugeben, 20 Minuten sanft köcheln.",
      "Basmati-Reis kochen und dazu servieren."
    ],
    "instructionsEN": [
      "Brown minced beef with spring onion greens in ghee.",
      "Add bush tomato passata & white beans, simmer gently for 20 minutes.",
      "Cook basmati rice and serve alongside."
    ],
    "tips": [
      "Weiße Bohnen sind nährstoffreich und passen perfekt zu Rind & Reis."
    ],
    "tipsEN": [
      "White beans are nutrient-dense and complement beef & rice perfectly."
    ]
  },
  {
    "id": "mid-it-17",
    "title": "Scaloppine al Limone (Putenmedaillons in Zitronensud)",
    "titleEN": "Scaloppine al Limone (Turkey Medallions in Lemon Broth)",
    "mealName": "Scaloppine al Limone with Spaghetti",
    "description": "Zarte Putenbrust-Schnitzel in erfrischender Zitronensauce auf Durum-Spaghetti.",
    "descriptionEN": "Tender turkey breast cutlets in refreshing lemon sauce served over durum spaghetti.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Italienisch",
    "cuisineEN": "Italian",
    "isPreloaded": true,
    "tags": [
      "Italien",
      "Pute",
      "Zitrone",
      "Spaghetti",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Putenbrust-Schnitzel",
        "amountEN": "300g turkey breast cutlets"
      },
      {
        "name": "Hartweizen & Grieß",
        "nameEN": "Durum Wheat & Semolina",
        "amount": "180g Durum-Spaghetti",
        "amountEN": "180g durum spaghetti"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "1 EL Dinkelmehl",
        "amountEN": "1 tbsp spelt flour"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "2 Stängel Lauchzwiebelgrün",
        "amountEN": "2 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "Saft einer frischen Zitrone & Meersalz",
        "amountEN": "Fresh juice of 1 lemon & sea salt"
      }
    ],
    "instructions": [
      "Puten-Schnitzel dünn klopfen, in Dinkelmehl wenden und in Ghee je 3 Minuten braten.",
      "Spaghetti in Salzwasser garen.",
      "Zitronensaft & Lauchzwiebelgrün in die Fleischpfanne geben, kurz aufkochen.",
      "Spaghetti auf Tellern anrichten, Medaillons darauflegen und mit Zitronensud beträufeln."
    ],
    "instructionsEN": [
      "Pound turkey cutlets thin, dredge in spelt flour, fry in ghee for 3 minutes per side.",
      "Cook spaghetti in salted water.",
      "Add lemon juice & spring onion greens to the pan, bring briefly to a boil.",
      "Plate spaghetti, arrange cutlets on top, and drizzle with lemon sauce."
    ],
    "tips": [
      "Zitrone verleiht Geflügelfleisch eine feine Frische am Mittag."
    ],
    "tipsEN": [
      "Lemon gives poultry a bright, refreshing flavor at midday."
    ]
  },
  {
    "id": "mid-us-01",
    "title": "Pulled Chicken Bowl mit Paprika & Quinoa",
    "titleEN": "Pulled Chicken Bowl with Bell Peppers & Quinoa",
    "mealName": "Pulled Chicken Bowl with Quinoa",
    "description": "Zart gezupftes Hähnchenfleisch auf Quinoa mit bunten Paprikawürfeln und Tamari-Dressing.",
    "descriptionEN": "Tender shredded chicken served on quinoa with colorful bell peppers and tamari dressing.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Amerikanisch",
    "cuisineEN": "American",
    "isPreloaded": true,
    "tags": [
      "USA",
      "Hähnchen",
      "Quinoa",
      "Paprika",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenbrust",
        "amountEN": "300g chicken breast"
      },
      {
        "name": "Pseudogetreide (Quinoa / Buchweizen)",
        "nameEN": "Pseudograins (Quinoa / Buckwheat)",
        "amount": "120g Quinoa",
        "amountEN": "120g quinoa"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "1 Paprika, gewürfelt",
        "amountEN": "1 bell pepper, diced"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 TL Tamari & 1 Prise Meersalz",
        "amountEN": "1 tsp tamari & 1 pinch sea salt"
      }
    ],
    "instructions": [
      "Hähnchenbrust in Brühe 15 Minuten gar kochen und mit zwei Gabeln zupfen.",
      "Quinoa kochen.",
      "Gezupftes Hähnchenfleisch in Ghee mit Paprikawürfeln & Lauchzwiebelgrün kurz anbraten.",
      "Auf Quinoa anrichten und mit Tamari beträufeln."
    ],
    "instructionsEN": [
      "Poach chicken breast in broth for 15 minutes, shred with two forks.",
      "Cook quinoa.",
      "Sauté shredded chicken in ghee with diced bell peppers & spring onion greens.",
      "Serve over quinoa and drizzle with tamari."
    ],
    "tips": [
      "Proteinreiche Bowl für sportliche Energie am Mittag."
    ],
    "tipsEN": [
      "Protein-rich bowl for midday athletic energy."
    ]
  },
  {
    "id": "mid-de-08",
    "title": "Deftige Schinken-Dinkel-Pfanne mit Paprika & Schnittlauch",
    "titleEN": "Hearty Ham & Spelt Skillet with Bell Peppers & Chives",
    "mealName": "Hearty Ham & Spelt Skillet",
    "description": "Würfel von deftigem Rohschinken gebraten mit Dinkel-Grieß-Nudeln, Paprika und Schnittlauch.",
    "descriptionEN": "Diced raw ham pan-fried with spelt semolina pasta, bell peppers, and fresh chives.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Schinken",
      "Dinkel",
      "Pfanne",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "120g roher Schinken, gewürfelt",
        "amountEN": "120g raw ham, diced"
      },
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "180g Dinkel-Nudeln",
        "amountEN": "180g spelt pasta"
      },
      {
        "name": "Paprika & Gemüsepaprika",
        "nameEN": "Bell Pepper",
        "amount": "1 rote Paprika",
        "amountEN": "1 red bell pepper"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Dinkel-Nudeln al dente kochen.",
      "Schinkenwürfel in Ghee anbraten, Paprikawürfel & Lauchzwiebelgrün mitdünsten.",
      "Nudeln dazugeben, durchschwenken und warm servieren."
    ],
    "instructionsEN": [
      "Cook spelt pasta until al dente.",
      "Sauté diced ham in ghee, add diced bell peppers & spring onion greens.",
      "Toss in pasta and serve warm."
    ],
    "tips": [
      "Schnell zubereitetes Pfannengericht für die Mittagspause."
    ],
    "tipsEN": [
      "Quick skillet meal for a busy lunch break."
    ]
  },
  {
    "id": "mid-in-05",
    "title": "Lamm-Keema-Curry mit Knoblauchgrün & Basmati",
    "titleEN": "Lamb Keema Curry with Garlic Greens & Basmati",
    "mealName": "Lamb Keema Curry with Basmati Rice",
    "description": "Feines Lammhackfleisch in milder Tomaten-Currysauce mit Knoblauchgrün auf Basmati-Reis.",
    "descriptionEN": "Fine minced lamb simmered in mild tomato curry sauce with garlic greens over basmati rice.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Indisch",
    "cuisineEN": "Indian",
    "isPreloaded": true,
    "tags": [
      "Indien",
      "Lamm",
      "Curry",
      "Basmati",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Lammhackfleisch",
        "amountEN": "300g minced lamb"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Basmati-Reis",
        "amountEN": "150g basmati rice"
      },
      {
        "name": "Tomaten & Tomatenmark",
        "nameEN": "Tomatoes & Tomato Paste",
        "amount": "200g Strauchtomaten-Puree",
        "amountEN": "200g bush tomato puree"
      },
      {
        "name": "Knoblauchgrün / Schnittknoblauch",
        "nameEN": "Garlic Greens",
        "amount": "2 EL Knoblauchgrün",
        "amountEN": "2 tbsp garlic greens"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "3 Stängel Lauchzwiebelgrün",
        "amountEN": "3 stalks spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 TL Kreuzkümmel & 1 Prise Meersalz",
        "amountEN": "1 tsp cumin & 1 pinch sea salt"
      }
    ],
    "instructions": [
      "Lammhackfleisch in Gheekrümelig braun braten.",
      "Knoblauchgrün, Lauchzwiebelgrün, Kreuzkümmel & Strauchtomaten-Puree dazugeben.",
      "15 Minuten köcheln lassen und auf Basmati-Reis anrichten."
    ],
    "instructionsEN": [
      "Brown minced lamb in ghee until crumbly.",
      "Add garlic greens, spring onion greens, cumin & bush tomato puree.",
      "Simmer for 15 minutes and serve over basmati rice."
    ],
    "tips": [
      "Lammfleisch bringt eine kräftig-würzige Note ins Midday Window."
    ],
    "tipsEN": [
      "Lamb adds a rich, savory depth to the Midday Window."
    ]
  },
  {
    "id": "mid-vn-02",
    "title": "Vietnamesisches Bun Cha Hähnchen-Hackbällchen-Bowl",
    "titleEN": "Vietnamese Bun Cha Chicken Meatball Bowl",
    "mealName": "Vietnamese Bun Cha Chicken Bowl",
    "description": "Würzige Hähnchen-Hackbällchen serviert auf Reisnudeln mit frischem Koriander und Tamari.",
    "descriptionEN": "Flavorful chicken meatballs served over rice vermicelli noodles with fresh cilantro and tamari.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Einfach",
    "cuisine": "Vietnamesisch",
    "cuisineEN": "Vietnamese",
    "isPreloaded": true,
    "tags": [
      "Vietnam",
      "Hähnchen",
      "Reisnudeln",
      "Koriander",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Hähnchenhackfleisch",
        "amountEN": "300g minced chicken"
      },
      {
        "name": "Basmati-Reis",
        "nameEN": "Basmati Rice",
        "amount": "150g Reis-Vermicelli",
        "amountEN": "150g rice vermicelli"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Sesamöl & Pflanzliche Öle",
        "nameEN": "Sesame Oil & Plant Oils",
        "amount": "1 EL Sesamöl",
        "amountEN": "1 tbsp sesame oil"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 EL Tamari & frischer Koriander",
        "amountEN": "1 tbsp tamari & fresh cilantro"
      }
    ],
    "instructions": [
      "Hähnchenhackfleisch mit gehacktem Lauchzwiebelgrün & Meersalz verkneten, kleine Bällchen formen.",
      "In Sesamöl in der Pfanne 10 Minuten braten.",
      "Reisnudeln kurz kochen, abgießen und mit Bällchen, Koriander & Tamari anrichten."
    ],
    "instructionsEN": [
      "Mix minced chicken with chopped spring onion greens & sea salt, form small meatballs.",
      "Pan-fry in sesame oil for 10 minutes.",
      "Cook rice vermicelli, drain, and serve with meatballs, cilantro & tamari."
    ],
    "tips": [
      "Frisches Koriandergrün belebt die Gehirnaktivität am Nachmittag."
    ],
    "tipsEN": [
      "Fresh cilantro greens stimulate afternoon mental clarity."
    ]
  },
  {
    "id": "mid-de-09",
    "title": "Schwäbische Hackfleisch-Maultaschen (Dinkelteig) mit Lauchgrün",
    "titleEN": "Swabian Beef Maultaschen (Spelt Dough) with Leek Greens",
    "mealName": "Swabian Beef Maultaschen with Leek Greens",
    "description": "Dinkel-Nudelteig gefüllt mit Rinderhackfleisch & Lauchzwiebelgrün, serviert in klarer Ghee-Kräuterbrühe.",
    "descriptionEN": "Spelt pasta dough stuffed with minced beef & spring onion greens, served in clear ghee-herb broth.",
    "timeWindow": "Midday",
    "diet": "Omnivore",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Anspruchsvoll",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Maultaschen",
      "Rind",
      "Dinkel",
      "Mittag"
    ],
    "ingredients": [
      {
        "name": "Dinkel & Dinkelmehl",
        "nameEN": "Spelt & Spelt Flour",
        "amount": "200g Dinkel-Nudelteig",
        "amountEN": "200g spelt pasta dough"
      },
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "250g Rinderhackfleisch",
        "amountEN": "250g minced beef"
      },
      {
        "name": "Eier",
        "nameEN": "Eggs",
        "amount": "1 frisches Ei",
        "amountEN": "1 fresh egg"
      },
      {
        "name": "Lauchzwiebeln (grüner Teil)",
        "nameEN": "Spring Onion (green part)",
        "amount": "1 Bund Lauchzwiebelgrün",
        "amountEN": "1 bunch spring onion greens"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Petersilie",
        "amountEN": "1 pinch sea salt & parsley"
      }
    ],
    "instructions": [
      "Rinderhackfleisch mit Ei, Lauchzwiebelgrün & Meersalz gut vermengen.",
      "Füllung auf den Dinkelteig streichen, aufrollen und in Maultaschen schneiden.",
      "In siedender Salzwasser-Brühe 12 Minuten gar ziehen lassen.",
      "Mit etwas Ghee & Petersilie servieren."
    ],
    "instructionsEN": [
      "Mix minced beef thoroughly with egg, spring onion greens & sea salt.",
      "Spread filling on spelt dough, roll up, and slice into maultaschen dumplings.",
      "Poach in simmering salted broth for 12 minutes.",
      "Serve with a touch of ghee & fresh parsley."
    ],
    "tips": [
      "Der süddeutsche Spezialitäten-Klassiker schmeckt am Mittag hervorragend."
    ],
    "tipsEN": [
      "The South German classic dumpling adapted for the Midday Window."
    ]
  },
  {
    "id": "eve-de-06",
    "title": "Deftiger Hirschbraten mit Pastinakenpüree & Wurzelgravy",
    "titleEN": "Hearty Venison Roast with Parsnip Mash & Root Gravy",
    "mealName": "Hearty Venison Roast with Parsnip Mash",
    "description": "Zarter Hirschbraten geschmort mit weißen Lauchzwiebel-Schäften, serviert auf Pastinakenpüree.",
    "descriptionEN": "Tender venison roast braised with white spring onion stems, served on creamy parsnip mash.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
    "servings": 3,
    "difficulty": "Anspruchsvoll",
    "cuisine": "Deutsch",
    "cuisineEN": "German",
    "isPreloaded": true,
    "tags": [
      "Deutschland",
      "Hirsch",
      "Pastinake",
      "Brataus",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "500g Hirschkeule / Hirschfleisch",
        "amountEN": "500g venison roast"
      },
      {
        "name": "Wurzelgemüse & Rüben",
        "nameEN": "Root Vegetables & Turnips",
        "amount": "400g Pastinaken, gekocht",
        "amountEN": "400g parsnips, cooked"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "3 Zehen Knoblauch",
        "amountEN": "3 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "2 EL Ghee",
        "amountEN": "2 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz & Wacholder",
        "amountEN": "1 pinch sea salt & juniper berries"
      }
    ],
    "instructions": [
      "Hirschbraten in Ghee scharf anbraten.",
      "Weiße Lauchzwiebel-Schäfte, Knoblauch & Wacholderbeeren dazugeben, mit Salzwasser aufgießen.",
      "Abgedeckt 45 Minuten zart schmoren.",
      "Pastinaken mit Ghee pürieren, Braten aufschneiden und mit der Wurzelgravy servieren."
    ],
    "instructionsEN": [
      "Sear venison roast on high heat in ghee.",
      "Add white spring onion stems, garlic & juniper berries, pour in salted water.",
      "Cover and braise gently for 45 minutes until tender.",
      "Mash parsnips with ghee, slice roast, and serve with root gravy."
    ],
    "tips": [
      "Wildfleisch & Wurzeln spenden tiefen Erholungsschlaf im Evening Window."
    ],
    "tipsEN": [
      "Game meat & root vegetables foster deep restorative sleep."
    ]
  },
  {
    "id": "eve-uk-04",
    "title": "Britischer Wildschwein-Gulaschtopf mit Röstkartoffeln",
    "titleEN": "British Wild Boar Stew with Roasted Potatoes",
    "mealName": "British Wild Boar Stew with Roasted Potatoes",
    "description": "Deftiges Wildschweingulasch geschmort mit Champignons, weißem Lauch und knusprigen Röstkartoffeln.",
    "descriptionEN": "Hearty wild boar stew braised with mushrooms, white spring onion stems, and crispy roasted potatoes.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Britisch",
    "cuisineEN": "British",
    "isPreloaded": true,
    "tags": [
      "Großbritannien",
      "Wildschwein",
      "Kartoffeln",
      "Pilze",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "350g Wildschweinfleisch, gewürfelt",
        "amountEN": "350g wild boar meat, diced"
      },
      {
        "name": "Kartoffeln",
        "nameEN": "Potato",
        "amount": "300g Kartoffeln",
        "amountEN": "300g potatoes"
      },
      {
        "name": "Champignons & Spezielle Speisepilze",
        "nameEN": "Mushrooms & Culinary Fungi",
        "amount": "150g Champignons",
        "amountEN": "150g mushrooms"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Wildschweinfleisch, weiße Lauchzwiebel-Schäfte & Champignons in Ghee anbraten.",
      "Mit Wasser aufgießen und 40 Minuten weich schmoren.",
      "Kartoffelecken separat im Ofen knusprig rösten und zusammen abends servieren."
    ],
    "instructionsEN": [
      "Sauté wild boar meat, white spring onion stems & mushrooms in ghee.",
      "Pour in water and braise gently for 40 minutes.",
      "Roast potato wedges separately until crispy, serve together in the evening."
    ],
    "tips": [
      "Wildfleisch ist reich an Nährstoffen und ideal für späte Mahlzeiten."
    ],
    "tipsEN": [
      "Wild game is nutrient-dense and ideal for evening meals."
    ]
  },
  {
    "id": "eve-fr-06",
    "title": "Französischer Entenbrust-Eintopf mit weißen Lauchzwiebeln & Pastinake",
    "titleEN": "French Duck Breast Stew with White Spring Onions & Parsnip",
    "mealName": "French Duck Breast Stew with Parsnip",
    "description": "Saftige Entenbrust-Würfel sanft geschmort mit weißem Lauchzwiebelschaft, Knoblauch und Pastinaken.",
    "descriptionEN": "Succulent duck breast cubes gently braised with white spring onion stems, garlic, and parsnips.",
    "timeWindow": "Evening",
    "diet": "Omnivore",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Mittel",
    "cuisine": "Französisch",
    "cuisineEN": "French",
    "isPreloaded": true,
    "tags": [
      "Frankreich",
      "Ente",
      "Pastinake",
      "Lauch",
      "Abend"
    ],
    "ingredients": [
      {
        "name": "Rindfleisch & Geflügel",
        "nameEN": "Beef & Poultry",
        "amount": "300g Entenbrust, gewürfelt",
        "amountEN": "300g duck breast, diced"
      },
      {
        "name": "Wurzelgemüse & Rüben",
        "nameEN": "Root Vegetables & Turnips",
        "amount": "300g Pastinaken, in Scheiben",
        "amountEN": "300g parsnips, sliced"
      },
      {
        "name": "Zwiebeln (weißer Teil)",
        "nameEN": "Onion (white bulb/stem)",
        "amount": "1 Bund weiße Lauchzwiebel-Schäfte",
        "amountEN": "1 bunch white spring onion stems"
      },
      {
        "name": "Knoblauch",
        "nameEN": "Garlic",
        "amount": "2 Zehen Knoblauch",
        "amountEN": "2 cloves garlic"
      },
      {
        "name": "Ghee (Ersatz für Butter)",
        "nameEN": "Ghee (Clarified Butter)",
        "amount": "1 EL Ghee",
        "amountEN": "1 tbsp ghee"
      },
      {
        "name": "Meersalz",
        "nameEN": "Sea Salt",
        "amount": "1 Prise Meersalz",
        "amountEN": "1 pinch sea salt"
      }
    ],
    "instructions": [
      "Entenbrustwürfel im eigenen Fett & Ghee kross anbraten.",
      "Weiße Lauchzwiebel-Schäfte, Knoblauch & Pastinakenscheiben dazugeben.",
      "Mit Wasser aufgießen, 25 Minuten weich dünsten und warm genießen."
    ],
    "instructionsEN": [
      "Sear duck breast cubes in their own fat & ghee until crispy.",
      "Add white spring onion stems, garlic & sliced parsnips.",
      "Pour in water, simmer gently for 25 minutes, and enjoy warm."
    ],
    "tips": [
      "Edles Geflügel und unterirdisches Wurzelgemüse für genussvolle Abende."
    ],
    "tipsEN": [
      "Fine poultry and underground roots for indulgent evenings."
    ]
  }
];
