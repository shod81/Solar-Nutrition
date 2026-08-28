import type { TimeWindow, FoodItem } from '../types/solar';

// MORNING FOODS
export const TREE_FRUITS: FoodItem[] = [
  { name: 'Açaí', nameEN: 'Açaí', foodType: 'Fruit', isWeightLoss: true, specialRule: 'A berry from a palm tree, best in the Morning.', specialRuleEN: 'A berry from a palm tree, best eaten in the Morning window.' },
  { name: 'Ackee', nameEN: 'Ackee', foodType: 'Fruit', specialRule: 'Must be properly ripened and prepared; uncooked or unripe ackee is toxic.', specialRuleEN: 'Must be properly ripened and prepared; uncooked or unripe ackee is toxic.' },
  { name: 'Apfel (Apple)', nameEN: 'Apple', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Aprikose (Apricot)', nameEN: 'Apricot', foodType: 'Fruit' },
  { name: 'Avocado', nameEN: 'Avocado', foodType: 'Fruit' },
  { name: 'Banane (Banana)', nameEN: 'Banana', foodType: 'Fruit' },
  { name: 'Black Sapote', nameEN: 'Black Sapote', foodType: 'Fruit', specialRule: 'Also known as the "chocolate pudding fruit".', specialRuleEN: 'Also known as the "chocolate pudding fruit".' },
  { name: 'Brotfrucht (Breadfruit)', nameEN: 'Breadfruit', foodType: 'Fruit' },
  { name: 'Cherimoya', nameEN: 'Cherimoya', foodType: 'Fruit' },
  { name: 'Dattel (Date)', nameEN: 'Date', foodType: 'Fruit' },
  { name: 'Durian', nameEN: 'Durian', foodType: 'Fruit' },
  { name: 'Feige (Fig)', nameEN: 'Fig', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Guave (Guava)', nameEN: 'Guava', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Jackfrucht (Jackfruit)', nameEN: 'Jackfruit', foodType: 'Fruit' },
  { name: 'Kirsche (Cherry)', nameEN: 'Cherry', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Kiwi', nameEN: 'Kiwi', foodType: 'Fruit', isWeightLoss: true, specialRule: 'Sonderausnahme: Adano ordnet die Kiwi trotz Rankenwachstum als Morning (Baum)-Frucht ein.', specialRuleEN: 'Special exception: Adano classifies the kiwi as a Morning (Tree) fruit despite its vine growth.' },
  { name: 'Kokosnuss (Coconut)', nameEN: 'Coconut', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Kakaobohnen (Cacao)', nameEN: 'Cacao Beans', foodType: 'Dessert', specialRule: 'Vom Kakaobaum, ideal am Morgen.', specialRuleEN: 'From the cacao tree, ideal in the Morning window.' },
  { name: 'Kaffee (Coffee Arabica)', nameEN: 'Coffee (Arabica)', foodType: 'Beverage', specialRule: 'Vom Kaffeebaum, ideal am Morgen.', specialRuleEN: 'From the coffee tree, ideal in the Morning window.' },
  { name: 'Lychee', nameEN: 'Lychee', foodType: 'Fruit' },
  { name: 'Mango', nameEN: 'Mango', foodType: 'Fruit' },
  { name: 'Mangostane (Mangosteen)', nameEN: 'Mangosteen', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Maulbeere (Mulberry)', nameEN: 'Mulberry', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Nektarine (Nectarine)', nameEN: 'Nectarine', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Oliven (Olives)', nameEN: 'Olives', foodType: 'Fruit' },
  { name: 'Orangenblütenhonig (Orange Honey)', nameEN: 'Orange Blossom Honey', foodType: 'Honey', specialRule: 'Von Baumblüten, am besten morgens.', specialRuleEN: 'From tree blossoms, best consumed in the morning.' },
  { name: 'Papaya', nameEN: 'Papaya', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Passionsfrucht (Passion Fruit)', nameEN: 'Passion Fruit', foodType: 'Fruit', isWeightLoss: true, specialRule: 'Sonderausnahme: Adano ordnet die Passionsfrucht trotz Rankenwachstum als Morning (Baum)-Frucht ein.', specialRuleEN: 'Special exception: Adano classifies passion fruit as a Morning (Tree) fruit despite its vine growth.' },
  { name: 'Pfirsich (Peach)', nameEN: 'Peach', foodType: 'Fruit' },
  { name: 'Pflaume (Plum)', nameEN: 'Plum', foodType: 'Fruit' },
  { name: 'Birne (Pear)', nameEN: 'Pear', foodType: 'Fruit' },
  { name: 'Granatapfel (Pomegranate)', nameEN: 'Pomegranate', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Quitte (Quince)', nameEN: 'Quince', foodType: 'Fruit', isWeightLoss: true },
  { name: 'Sternfrucht (Starfruit)', nameEN: 'Starfruit (Carambola)', foodType: 'Fruit', isWeightLoss: true },
];

export const CITRUS_FRUITS: FoodItem[] = [
  { name: 'Grapefruit', nameEN: 'Grapefruit', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { name: 'Zitrone (Lemon)', nameEN: 'Lemon', foodType: 'Citrus', specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { name: 'Limette (Lime)', nameEN: 'Lime', foodType: 'Citrus', specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { name: 'Orange', nameEN: 'Orange', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { name: 'Pomelo', nameEN: 'Pomelo', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { name: 'Mandarine (Tangerine/Satsuma)', nameEN: 'Tangerine / Satsuma', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
];

export const NUTS_AND_SEEDS: FoodItem[] = [
  { name: 'Mandeln (Almonds)', nameEN: 'Almonds', foodType: 'Nut', specialRule: 'ERSTE NAHRUNG DES TAGES (07:00-09:00 Solarzeit), roh & eingeweicht. Reguliert Salzsäure.', specialRuleEN: 'FIRST FOOD OF THE DAY (07:00-09:00 Solar Time), raw & soaked. Regulates stomach acid.' },
  { name: 'Paranüsse (Brazil Nuts)', nameEN: 'Brazil Nuts', foodType: 'Nut' },
  { name: 'Cashews', nameEN: 'Cashews', foodType: 'Nut' },
  { name: 'Esskastanien / Maronen (Chestnuts)', nameEN: 'Chestnuts', foodType: 'Nut' },
  { name: 'Haselnüsse (Hazelnuts)', nameEN: 'Hazelnuts', foodType: 'Nut' },
  { name: 'Macadamianüsse (Macadamia)', nameEN: 'Macadamia Nuts', foodType: 'Nut' },
  { name: 'Pekannüsse (Pecans)', nameEN: 'Pecans', foodType: 'Nut' },
  { name: 'Pinienkerne (Pine Nuts)', nameEN: 'Pine Nuts', foodType: 'Nut' },
  { name: 'Pistazien (Pistachios)', nameEN: 'Pistachios', foodType: 'Nut', isWeightLoss: true },
  { name: 'Walnüsse (Walnuts)', nameEN: 'Walnuts', foodType: 'Nut' },
  { name: 'Sternanisch (Star Anise)', nameEN: 'Star Anise', foodType: 'Spice', isHerb: true },
];

export const OILS_FATS_MORNING: FoodItem[] = [
  { name: 'Mandelöl (Almond Oil)', nameEN: 'Almond Oil', foodType: 'Oil' },
  { name: 'Avocadoöl (Avocado Oil)', nameEN: 'Avocado Oil', foodType: 'Oil' },
  { name: 'Kokosöl (Coconut Oil)', nameEN: 'Coconut Oil', foodType: 'Oil', isWeightLoss: true },
  { name: 'Haselnussöl (Hazelnut Oil)', nameEN: 'Hazelnut Oil', foodType: 'Oil' },
  { name: 'Macadamiaöl (Macadamia Oil)', nameEN: 'Macadamia Oil', foodType: 'Oil' },
  { name: 'Walnussöl (Walnut Oil)', nameEN: 'Walnut Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_MORNING: FoodItem[] = [
  { name: 'Piment (Allspice)', nameEN: 'Allspice', foodType: 'Spice', isHerb: true },
  { name: 'Nelken (Cloves)', nameEN: 'Cloves', foodType: 'Spice', isHerb: true },
  { name: 'Ahornsirup (Maple Syrup)', nameEN: 'Maple Syrup', foodType: 'Sweetener', specialRule: 'Vom Saft des Ahornbaums.', specialRuleEN: 'From the sap of the maple tree.' },
  { name: 'Muskatnuss (Nutmeg)', nameEN: 'Nutmeg', foodType: 'Spice', isHerb: true },
  { name: 'Vanille (Vanilla)', nameEN: 'Vanilla', foodType: 'Spice', isHerb: true, specialRule: 'Ranke an Bäumen. Sowohl für Morning als auch Midday geeignet.', specialRuleEN: 'Vine that grows on trees. Suitable for both Morning and Midday windows.' },
];

export const SPECIAL_FOODS_MORNING: FoodItem[] = [
  { name: 'Adanos Cobalamin Tonic', nameEN: "Adano's Cobalamin Tonic", foodType: 'Special Food', specialRule: 'B12 Booster: Arabica-Kaffee + Ahornsirup + dunkler Backkakao.', specialRuleEN: 'B12 Booster: Arabica coffee + maple syrup + dark baking cacao.' },
  { name: 'Umeboshi-Pflaume', nameEN: 'Umeboshi Plum', foodType: 'Special Food', isWeightLoss: true, specialRule: 'Morgen-Hormonbalancer, allein verzehren.', specialRuleEN: 'Morning hormone balancer, eat alone.' },
];

export const ALCOHOL_SPIRITS_MORNING: FoodItem[] = [
  { name: 'Calvados (Apfelbrand)', nameEN: 'Calvados (Apple Brandy)', foodType: 'Spirit', specialRule: 'Nur 100% aus Äpfeln (Baum).', specialRuleEN: 'Only 100% from apples (tree).' },
  { name: 'Kirschwasser (Kirsch Brandy)', nameEN: 'Kirschwasser (Cherry Brandy)', foodType: 'Spirit', specialRule: 'Aus Kirschen (Baum).', specialRuleEN: 'Made from cherries (tree).' },
  { name: 'Slivovitz (Pflaumenbrand)', nameEN: 'Slivovitz (Plum Brandy)', foodType: 'Spirit', specialRule: 'Aus Pflaumen (Baum).', specialRuleEN: 'Made from plums (tree).' },
];

// MIDDAY FOODS
export const VEGETABLES: FoodItem[] = [
  { name: 'Paprika (Bell Pepper)', nameEN: 'Bell Pepper', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Brokkoli (Broccoli)', nameEN: 'Broccoli', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Rosenkohl (Brussels Sprouts)', nameEN: 'Brussels Sprouts', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Blumenkohl (Cauliflower)', nameEN: 'Cauliflower', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Weißkohl / Rotkohl (Cabbage)', nameEN: 'White / Red Cabbage', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Sellerienstängel (Celery Stalks)', nameEN: 'Celery Stalks', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Die grünen Stängel sind Midday, die Knolle ist Evening.', specialRuleEN: 'The green stalks are Midday; the bulb (celeriac) is Evening.' },
  { name: 'Gurke (Cucumber)', nameEN: 'Cucumber', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Auberginen (Eggplant)', nameEN: 'Aubergine (Eggplant)', foodType: 'Vegetable' },
  { name: 'Grünkohl (Kale)', nameEN: 'Kale', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Kohlrabi', nameEN: 'Kohlrabi', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Lauch / Porree (Grünes Blatt)', nameEN: 'Leek (Green Part)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Grüner Teil ist Midday, die weiße Knolle ist Evening.', specialRuleEN: 'The green part is Midday; the white bulb is Evening.' },
  { name: 'Frühlingszwiebel (Grüner Teil)', nameEN: 'Spring Onion (Green Part)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Grüner Teil ist Midday, das Weiße ist Evening.', specialRuleEN: 'The green part is Midday; the white part is Evening.' },
  { name: 'Salat (Lettuce)', nameEN: 'Lettuce', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Okra', nameEN: 'Okra', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Kürbis (Pumpkin)', nameEN: 'Pumpkin', foodType: 'Vegetable' },
  { name: 'Spinat (Spinach)', nameEN: 'Spinach', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Zucchini', nameEN: 'Courgette (Zucchini)', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Tomate (Tomato)', nameEN: 'Tomato', foodType: 'Vegetable', specialRule: 'Wächst an einer Ranke, gilt als Midday-Nahrung.', specialRuleEN: 'Grows on a vine, classified as Midday food.' },
];

export const GRAINS_AND_LEGUMES: FoodItem[] = [
  { name: 'Amaranth', nameEN: 'Amaranth', foodType: 'Grain', isWeightLoss: true },
  { name: 'Gerste (Barley)', nameEN: 'Barley', foodType: 'Grain' },
  { name: 'Schwarze Bohnen (Black Beans)', nameEN: 'Black Beans', foodType: 'Legume' },
  { name: 'Buchweizen (Buckwheat)', nameEN: 'Buckwheat', foodType: 'Grain', isWeightLoss: true },
  { name: 'Kichererbsen (Chickpeas)', nameEN: 'Chickpeas', foodType: 'Legume' },
  { name: 'Edamame', nameEN: 'Edamame', foodType: 'Legume', isWeightLoss: true },
  { name: 'Grüne Bohnen (Green Beans)', nameEN: 'Green Beans', foodType: 'Legume', isWeightLoss: true },
  { name: 'Linsen (Lentils)', nameEN: 'Lentils', foodType: 'Legume', isWeightLoss: true },
  { name: 'Hafer (Oats)', nameEN: 'Oats', foodType: 'Grain', isWeightLoss: true },
  { name: 'Erbsen (Peas)', nameEN: 'Peas', foodType: 'Legume', isWeightLoss: true },
  { name: 'Quinoa', nameEN: 'Quinoa', foodType: 'Grain', isWeightLoss: true },
  { name: 'Roggen (Rye)', nameEN: 'Rye', foodType: 'Grain' },
  { name: 'Semolina Durum Wheat Pasta', nameEN: 'Semolina Durum Wheat Pasta', foodType: 'Pasta', specialRule: 'Dual-Zone: Sowohl für Midday als auch Evening geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { name: 'Dinkel (Spelt)', nameEN: 'Spelt', foodType: 'Grain' },
  { name: 'Weizen (Wheat)', nameEN: 'Wheat', foodType: 'Grain' },
  { name: 'Miso', nameEN: 'Miso', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Midday als auch Evening geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { name: 'Tamari / Sojasauce', nameEN: 'Tamari / Soy Sauce', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Midday als auch Evening geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { name: 'Tofu & Tempeh', nameEN: 'Tofu & Tempeh', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Midday als auch Evening geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
];

export const BERRIES_AND_MELONS: FoodItem[] = [
  { name: 'Brombeere (Blackberry)', nameEN: 'Blackberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { name: 'Blaubeere (Blueberry)', nameEN: 'Blueberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { name: 'Himbeere (Raspberry)', nameEN: 'Raspberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { name: 'Erdbeere (Strawberry)', nameEN: 'Strawberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { name: 'Weintrauben (Grapes)', nameEN: 'Grapes', foodType: 'Berry', specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { name: 'Cantaloupe-Melone', nameEN: 'Cantaloupe Melon', foodType: 'Melon', specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
  { name: 'Honigmelone (Honeydew)', nameEN: 'Honeydew Melon', foodType: 'Melon', specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
  { name: 'Wassermelone (Watermelon)', nameEN: 'Watermelon', foodType: 'Melon', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
];

export const BEVERAGES_MIDDAY: FoodItem[] = [
  { name: 'Grüner Tee (Green Tea)', nameEN: 'Green Tea', foodType: 'Beverage', isWeightLoss: true },
  { name: 'Kombucha', nameEN: 'Kombucha', foodType: 'Beverage', isWeightLoss: true },
  { name: 'Mate-Tee (Mate)', nameEN: 'Maté Tea', foodType: 'Beverage' },
];

export const DAIRY_MIDDAY: FoodItem[] = [
  { name: 'Käse (Cheese)', nameEN: 'Cheese', foodType: 'Dairy', specialRule: 'Achtung: Niemals schmelzen und nicht mit Fleisch kombinieren!', specialRuleEN: 'Important: Never melt and do not combine with meat!' },
  { name: 'Kefir', nameEN: 'Kefir', foodType: 'Dairy', specialRule: 'Midday-Nahrung, in kleinen Mengen auch Evening möglich.', specialRuleEN: 'Midday food; small amounts also possible in the Evening.' },
  { name: 'Milch (Milk)', nameEN: 'Milk', foodType: 'Dairy', specialRule: 'Nicht mit Fleisch kombinieren!', specialRuleEN: 'Do not combine with meat!' },
  { name: 'Joghurt (Yogurt)', nameEN: 'Yogurt', foodType: 'Dairy', specialRule: 'Midday-Nahrung, in kleinen Mengen zeitneutral.', specialRuleEN: 'Midday food; in small amounts time-neutral.' },
];

export const LAND_ANIMALS: FoodItem[] = [
  { name: 'Rindfleisch (Beef)', nameEN: 'Beef', foodType: 'Meat', specialRule: 'Niemals mit Milchprodukten (Milch, Käse) kombinieren!', specialRuleEN: 'Never combine with dairy products (milk, cheese)!' },
  { name: 'Hähnchen (Chicken)', nameEN: 'Chicken', foodType: 'Meat', specialRule: 'Niemals mit Milchprodukten kombinieren!', specialRuleEN: 'Never combine with dairy products!' },
  { name: 'Ente (Duck)', nameEN: 'Duck', foodType: 'Meat' },
  { name: 'Lamm (Lamb)', nameEN: 'Lamb', foodType: 'Meat' },
  { name: 'Schweinefleisch (Pork)', nameEN: 'Pork', foodType: 'Meat' },
  { name: 'Pute / Truthahn (Turkey)', nameEN: 'Turkey', foodType: 'Meat' },
  { name: 'Hirsch / Reh (Venison)', nameEN: 'Venison', foodType: 'Meat' },
];

export const FRESHWATER_FISH_MIDDAY: FoodItem[] = [
  { name: 'Forelle (Trout)', nameEN: 'Trout', foodType: 'Freshwater Fish', specialRule: 'Sonderausnahme für das Midday-Fenster.', specialRuleEN: 'Special exception for the Midday window.' },
];

export const HERBS: FoodItem[] = [
  { name: 'Basilikum (Basil)', nameEN: 'Basil', foodType: 'Herb', isHerb: true },
  { name: 'Koriander (Cilantro)', nameEN: 'Coriander / Cilantro', foodType: 'Herb', isHerb: true },
  { name: 'Dill', nameEN: 'Dill', foodType: 'Herb', isHerb: true },
  { name: 'Minze (Mint)', nameEN: 'Mint', foodType: 'Herb', isHerb: true },
  { name: 'Oregano', nameEN: 'Oregano', foodType: 'Herb', isHerb: true },
  { name: 'Petersilie (Parsley)', nameEN: 'Parsley', foodType: 'Herb', isHerb: true },
  { name: 'Rosmarin (Rosemary)', nameEN: 'Rosemary', foodType: 'Herb', isHerb: true },
  { name: 'Salbei (Sage)', nameEN: 'Sage', foodType: 'Herb', isHerb: true },
  { name: 'Thymian (Thyme)', nameEN: 'Thyme', foodType: 'Herb', isHerb: true },
];

export const OILS_FATS_MIDDAY: FoodItem[] = [
  { name: 'Rapsöl (Canola Oil)', nameEN: 'Rapeseed / Canola Oil', foodType: 'Oil' },
  { name: 'Leinöl (Flaxseed Oil)', nameEN: 'Flaxseed Oil', foodType: 'Oil', isWeightLoss: true },
  { name: 'Kürbiskernöl (Pumpkin Seed Oil)', nameEN: 'Pumpkin Seed Oil', foodType: 'Oil', isWeightLoss: true },
  { name: 'Sesamöl (Sesame Oil)', nameEN: 'Sesame Oil', foodType: 'Oil' },
  { name: 'Sonnenblumenöl (Sunflower Oil)', nameEN: 'Sunflower Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_MIDDAY: FoodItem[] = [
  { name: 'Kardamom (Cardamom)', nameEN: 'Cardamom', foodType: 'Spice', isHerb: true },
  { name: 'Cayennepfeffer (Cayenne Pepper)', nameEN: 'Cayenne Pepper', foodType: 'Spice', isWeightLoss: true, isHerb: true, specialRule: 'SPEZIALKRÄUTER: Zu jeder Tageszeit verwendbar! Einzige erlaubte Pfefferart.', specialRuleEN: 'SPECIAL HERB: Usable at any time of day! The only permitted pepper type.' },
  { name: 'Chili (Chili Pepper)', nameEN: 'Chilli Pepper', foodType: 'Spice', isHerb: true },
  { name: 'Kreuzkümmel (Cumin)', nameEN: 'Cumin', foodType: 'Spice', isHerb: true },
  { name: 'Paprikapulver (Paprika)', nameEN: 'Paprika', foodType: 'Spice', isHerb: true },
  { name: 'Rohrzucker (Unrefined Cane Sugar)', nameEN: 'Unrefined Cane Sugar', foodType: 'Sweetener', specialRule: 'Aus Zuckerrohr (Strauch).', specialRuleEN: 'From sugar cane (bush).' },
];

export const SPECIAL_FOODS_MIDDAY: FoodItem[] = [
  { name: 'Tomatensaft mit Melasse', nameEN: 'Tomato Juice with Molasses', foodType: 'Special Food', specialRule: 'Midday-Hormonbalancer.', specialRuleEN: 'Midday hormone balancer.' },
];

export const ALCOHOL_SPIRITS_MIDDAY: FoodItem[] = [
  { name: 'Bier (Beer)', nameEN: 'Beer', foodType: 'Alcohol', specialRule: 'Aus Gerste/Getreide.', specialRuleEN: 'Made from barley / grain.' },
  { name: 'Gin', nameEN: 'Gin', foodType: 'Spirit', specialRule: 'Aus Getreide & Wacholderbeeren.', specialRuleEN: 'Made from grain & juniper berries.' },
  { name: 'Rum', nameEN: 'Rum', foodType: 'Spirit', specialRule: 'Aus Zuckerrohr.', specialRuleEN: 'Made from sugar cane.' },
  { name: 'Whiskey / Bourbon', nameEN: 'Whisky / Bourbon', foodType: 'Spirit', specialRule: 'Aus Getreide (Mais, Roggen, Weizen).', specialRuleEN: 'Made from grain (maize, rye, wheat).' },
  { name: 'Wein (Wine)', nameEN: 'Wine', foodType: 'Alcohol', specialRule: 'Aus Trauben (Ranke).', specialRuleEN: 'Made from grapes (vine).' },
];

// EVENING FOODS
export const ROOT_VEGETABLES: FoodItem[] = [
  { name: 'Artischockenherz (Artichoke Heart)', nameEN: 'Artichoke Heart', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Das Herz wächst bodennah.', specialRuleEN: 'The heart grows close to the ground.' },
  { name: 'Spargel (Asparagus)', nameEN: 'Asparagus', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Evening, da das Wachstum unter der Erde beginnt.', specialRuleEN: 'Evening, as growth begins underground.' },
  { name: 'Bambussprossen (Bamboo Shoots)', nameEN: 'Bamboo Shoots', foodType: 'Vegetable', specialRule: 'Evening, da das Wachstum unter der Erde beginnt.', specialRuleEN: 'Evening, as growth begins underground.' },
  { name: 'Rote Bete (Beetroot)', nameEN: 'Beetroot', foodType: 'Vegetable' },
  { name: 'Möhre / Karotte (Carrot)', nameEN: 'Carrot', foodType: 'Vegetable' },
  { name: 'Knollensellerie (Celeriac)', nameEN: 'Celeriac (Celery Root)', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Daikon-Rettich (Daikon)', nameEN: 'Daikon Radish', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Fenchelknolle (Fennel Bulb)', nameEN: 'Fennel Bulb', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Knoblauch (Garlic)', nameEN: 'Garlic', foodType: 'Vegetable', isHerb: true },
  { name: 'Ingwer (Ginger)', nameEN: 'Ginger', foodType: 'Vegetable', isHerb: true, specialRule: 'Achtung: Starker Blutverdünner!', specialRuleEN: 'Caution: Powerful blood thinner!' },
  { name: 'Meerrettich (Horseradish)', nameEN: 'Horseradish', foodType: 'Vegetable', isHerb: true },
  { name: 'Zwiebelknolle (Onion)', nameEN: 'Onion', foodType: 'Vegetable' },
  { name: 'Pastinake (Parsnip)', nameEN: 'Parsnip', foodType: 'Vegetable' },
  { name: 'Kartoffel (Potato)', nameEN: 'Potato', foodType: 'Vegetable', specialRule: 'NUR IM EVENING FENSTER!', specialRuleEN: 'ONLY IN THE EVENING WINDOW!' },
  { name: 'Rettich / Radieschen (Radish)', nameEN: 'Radish', foodType: 'Vegetable', isWeightLoss: true },
  { name: 'Süßkartoffel (Sweet Potato)', nameEN: 'Sweet Potato', foodType: 'Vegetable' },
  { name: 'Schalotte (Shallot)', nameEN: 'Shallot', foodType: 'Vegetable' },
  { name: 'Topinambur / Yams', nameEN: 'Jerusalem Artichoke / Yam', foodType: 'Vegetable' },
];

export const GROUND_LEGUMES: FoodItem[] = [
  { name: 'Erdnüsse (Peanuts)', nameEN: 'Peanuts', foodType: 'Legume', specialRule: 'Wachsen unter der Erde.', specialRuleEN: 'Grow underground.' },
];

export const FUNGI_AND_WATER_FOODS: FoodItem[] = [
  { name: 'Aloe Vera Saft', nameEN: 'Aloe Vera Juice', foodType: 'Beverage', specialRule: 'CAM-Pflanze, am besten im Evening.', specialRuleEN: 'CAM plant, best in the Evening window.' },
  { name: 'Chlorella & Spirulina', nameEN: 'Chlorella & Spirulina', foodType: 'Algae', isWeightLoss: true },
  { name: 'Pilze (Mushrooms)', nameEN: 'Mushrooms', foodType: 'Fungus' },
  { name: 'Nopales (Kaktusblätter)', nameEN: 'Nopales (Cactus Pads)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'CAM-Pflanze, Evening.', specialRuleEN: 'CAM plant, Evening window.' },
  { name: 'Ananas (Pineapple)', nameEN: 'Pineapple', foodType: 'Fruit', isWeightLoss: true, specialRule: 'CAM-Pflanze! Trotz Frucht eine Evening-Nahrung.', specialRuleEN: 'CAM plant! Despite being a fruit, classified as Evening food.' },
  { name: 'Meeresalgen (Seaweed)', nameEN: 'Seaweed', foodType: 'Algae', isWeightLoss: true },
  { name: 'Trüffel (Truffles)', nameEN: 'Truffles', foodType: 'Fungus' },
  { name: 'Brunnenkresse (Watercress)', nameEN: 'Watercress', foodType: 'Vegetable', isWeightLoss: true },
];

export const SEAFOOD: FoodItem[] = [
  { name: 'Sardellen / Anchovis', nameEN: 'Anchovies', foodType: 'Seafood' },
  { name: 'Kabeljau / Dorsch (Cod)', nameEN: 'Cod', foodType: 'Seafood' },
  { name: 'Krabben / Garnelen (Shrimp/Crab)', nameEN: 'Prawns / Shrimp / Crab', foodType: 'Seafood' },
  { name: 'Hummer (Lobster)', nameEN: 'Lobster', foodType: 'Seafood' },
  { name: 'Makrele (Mackerel)', nameEN: 'Mackerel', foodType: 'Seafood' },
  { name: 'Muscheln (Mussels/Clams)', nameEN: 'Mussels / Clams', foodType: 'Seafood' },
  { name: 'Oktopus / Tintenfisch (Squid)', nameEN: 'Octopus / Squid', foodType: 'Seafood' },
  { name: 'Austern (Oysters)', nameEN: 'Oysters', foodType: 'Seafood' },
  { name: 'Lachs (Salmon)', nameEN: 'Salmon', foodType: 'Freshwater Fish' },
  { name: 'Sardinen (Sardines)', nameEN: 'Sardines', foodType: 'Seafood' },
  { name: 'Jakobsmuscheln (Scallops)', nameEN: 'Scallops', foodType: 'Seafood' },
  { name: 'Thunfisch (Tuna)', nameEN: 'Tuna', foodType: 'Seafood' },
];

export const EXOTIC_ANIMAL_PRODUCTS_EVENING: FoodItem[] = [
  { name: 'Kaviar (Caviar)', nameEN: 'Caviar', foodType: 'Fish Roe' },
  { name: 'Ei (Egg)', nameEN: 'Egg', foodType: 'Animal Product', specialRule: 'Eier sind zwar zeitneutral, werden aber abends am besten verdaut.', specialRuleEN: 'Eggs are time-neutral but are best digested in the evening.' },
];

export const OILS_FATS_EVENING: FoodItem[] = [
  { name: 'Erdnussöl (Peanut Oil)', nameEN: 'Peanut Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_EVENING: FoodItem[] = [
  { name: 'Agavendicksaft (Agave Nectar)', nameEN: 'Agave Nectar', foodType: 'Sweetener' },
  { name: 'Zimt (Cinnamon)', nameEN: 'Cinnamon', foodType: 'Spice', isHerb: true, specialRule: 'Baumrinde -> Evening-Gewürz.', specialRuleEN: 'Tree bark → Evening spice.' },
  { name: 'Safran (Saffron)', nameEN: 'Saffron', foodType: 'Spice', isHerb: true },
  { name: 'Meersalz (Sea Salt)', nameEN: 'Sea Salt', foodType: 'Spice', isHerb: true, specialRule: 'DAS bevorzugte Salz für das Evening-Fenster.', specialRuleEN: 'THE preferred salt for the Evening window.' },
  { name: 'Rübenzucker (Unrefined Beet Sugar)', nameEN: 'Unrefined Beet Sugar', foodType: 'Sweetener', specialRule: 'Aus Zuckerrüben (Wurzel).', specialRuleEN: 'Made from sugar beet (root).' },
];

export const SPECIAL_FOODS_EVENING: FoodItem[] = [
  { name: 'Ananassaft + Aloe Vera Saft + Tequila', nameEN: 'Pineapple Juice + Aloe Vera Juice + Tequila', foodType: 'Tonic', specialRule: 'Abend-Hormonbalancer. Sparsam verwenden.', specialRuleEN: 'Evening hormone balancer. Use sparingly.' },
  { name: 'Kochbanane (Plantain)', nameEN: 'Plantain (Cooking Banana)', foodType: 'Fruit', specialRule: 'Morning & Evening Spezialnahrung. Muss gekocht werden.', specialRuleEN: 'Morning & Evening special food. Must be cooked.' },
];

export const ALCOHOL_SPIRITS_EVENING: FoodItem[] = [
  { name: 'Tequila (100% Agave)', nameEN: 'Tequila (100% Agave)', foodType: 'Spirit', specialRule: 'Aus der Agave (Erdpflanze).', specialRuleEN: 'Made from agave (earth plant).' },
  { name: 'Vodka aus Kartoffeln', nameEN: 'Potato Vodka', foodType: 'Spirit', specialRule: 'Nur wenn 100% aus Kartoffeln.', specialRuleEN: 'Only if 100% made from potatoes.' },
];

// ANYTIME FOODS
export const ANY_TIME_FOODS: FoodItem[] = [
  { name: 'Brauner Reis (Brown Rice)', nameEN: 'Brown Rice', foodType: 'Grain', specialRule: 'Zeitneutrales Getreide.', specialRuleEN: 'Time-neutral grain.' },
  { name: 'Butter', nameEN: 'Butter', foodType: 'Fat', specialRule: 'Zeitneutrales Fett.', specialRuleEN: 'Time-neutral fat.' },
  { name: 'Sahne (Cream)', nameEN: 'Cream', foodType: 'Dairy', specialRule: 'Zeitneutrale Molkerei.', specialRuleEN: 'Time-neutral dairy.' },
  { name: 'Ghee (Klärbutter)', nameEN: 'Ghee (Clarified Butter)', foodType: 'Fat', specialRule: 'Zeitneutrales Fett.', specialRuleEN: 'Time-neutral fat.' },
  { name: 'Olivenöl (Olive Oil)', nameEN: 'Olive Oil', foodType: 'Oil', specialRule: 'Zeitneutrales Öl für alle Fenster.', specialRuleEN: 'Time-neutral oil for all windows.' },
  { name: 'Reisnudeln (100% Reis)', nameEN: 'Rice Noodles (100% Rice)', foodType: 'Pasta', specialRule: 'Zeitneutrale Nudeln.', specialRuleEN: 'Time-neutral noodles.' },
  { name: 'Salz (Diamond Crystal Kosher)', nameEN: 'Salt (Diamond Crystal Kosher)', foodType: 'Spice', isHerb: true, specialRule: 'Bevorzugtes reines Salz für Morning, Midday & Dawn.', specialRuleEN: 'Preferred pure salt for Morning, Midday & Dawn.' },
  { name: 'Weißer Reis (White Rice)', nameEN: 'White Rice', foodType: 'Grain', specialRule: 'Zeitneutrales Getreide.', specialRuleEN: 'Time-neutral grain.' },
  { name: 'Wildreis (Wild Rice)', nameEN: 'Wild Rice', foodType: 'Grain', specialRule: 'Adano-Empfehlung: 5 Teile brauner Reis + 1 Teil Wildreis für ein vollständiges Protein.', specialRuleEN: "Adano's recommendation: 5 parts brown rice + 1 part wild rice for a complete protein." },
  { name: 'Weißer Zucker (Refined White Sugar)', nameEN: 'Refined White Sugar', foodType: 'Sweetener', specialRule: 'Zeitneutral, sparsam als Medizin verwenden.', specialRuleEN: 'Time-neutral; use sparingly as medicine.' },
];

export const ALCOHOL_SPIRITS_ANYTIME: FoodItem[] = [
  { name: 'Sake (Reiswein)', nameEN: 'Sake (Rice Wine)', foodType: 'Alcohol', specialRule: 'Aus Reis (zeitneutral).', specialRuleEN: 'Made from rice (time-neutral).' },
  { name: 'Vodka aus Reis / Soju', nameEN: 'Rice Vodka / Soju', foodType: 'Spirit', specialRule: 'Aus Reis (zeitneutral).', specialRuleEN: 'Made from rice (time-neutral).' },
];

export const SOLAR_NUTRITION_DATABASE: TimeWindow[] = [
  {
    id: 'Morning',
    name: 'Morning Window (Morgen)',
    nameKey: 'windowData.morningName',
    timeRange: '00:00 bis 12:00 Solarzeit',
    timeRangeKey: 'windowData.morningRange',
    principle: 'Ernähre Dich von Nahrungsmitteln, die an BÄUMEN wachsen: Früchte & Nüsse.',
    principleKey: 'windowData.morningPrinciple',
    specialRules: 'Zitrusfrüchte nur 09:00 - 11:00 (streng allein). Mandeln am besten als erste Nahrung (07:00-09:00).',
    specialRulesKey: 'windowData.morningSpecial',
    colors: {
      start: 'from-amber-100',
      end: 'to-orange-200',
      text: 'text-amber-950',
      border: 'border-amber-300',
      badge: 'bg-amber-500 text-white',
    },
    categories: [
      { name: 'Baumfrüchte (Tree Fruits)', nameKey: 'categories.treeFruits', foods: TREE_FRUITS },
      { name: 'Zitrusfrüchte (09:00-11:00 Allein)', nameKey: 'categories.citrus', foods: CITRUS_FRUITS },
      { name: 'Nüsse & Samen', nameKey: 'categories.nuts', foods: NUTS_AND_SEEDS },
      { name: 'Öle & Fette', nameKey: 'categories.oilsMorning', foods: OILS_FATS_MORNING },
      { name: 'Gewürze & Süßungsmittel', nameKey: 'categories.spicesMorning', foods: SPICES_SWEETENERS_MORNING },
      { name: 'Spezialnahrung & Tonika', nameKey: 'categories.specialMorning', foods: SPECIAL_FOODS_MORNING },
      { name: 'Spirituosen (Baum)', nameKey: 'categories.spiritsMorning', foods: ALCOHOL_SPIRITS_MORNING },
    ],
  },
  {
    id: 'Midday',
    name: 'Midday Window (Mittag)',
    nameKey: 'windowData.middayName',
    timeRange: '12:00 bis 18:00 Solarzeit',
    timeRangeKey: 'windowData.middayRange',
    principle: 'Ernähre Dich von Pflanzen, die an STRÄUCHERN oder RANKEN wachsen (mind. 10cm hoch), Getreide sowie 2- und 4-beinigen Landtieren.',
    principleKey: 'windowData.middayPrinciple',
    specialRules: 'Melonen nur 15:00 - 17:00 (streng allein). Beeren am besten 15:00 - 17:00.',
    specialRulesKey: 'windowData.middaySpecial',
    colors: {
      start: 'from-emerald-100',
      end: 'to-teal-200',
      text: 'text-emerald-950',
      border: 'border-emerald-300',
      badge: 'bg-emerald-600 text-white',
    },
    categories: [
      { name: 'Strauchgemüse', nameKey: 'categories.vegetables', foods: VEGETABLES },
      { name: 'Getreide & Hülsenfrüchte', nameKey: 'categories.grains', foods: GRAINS_AND_LEGUMES },
      { name: 'Beeren & Melonen (15:00-17:00)', nameKey: 'categories.berries', foods: BERRIES_AND_MELONS },
      { name: 'Getränke & Tee', nameKey: 'categories.beveragesMidday', foods: BEVERAGES_MIDDAY },
      { name: 'Milchprodukte', nameKey: 'categories.dairy', foods: DAIRY_MIDDAY },
      { name: 'Landtiere & Geflügel', nameKey: 'categories.landAnimals', foods: LAND_ANIMALS },
      { name: 'Süßwasserfisch (Ausnahme Forelle)', nameKey: 'categories.freshwaterFish', foods: FRESHWATER_FISH_MIDDAY },
      { name: 'Kräuter', nameKey: 'categories.herbs', foods: HERBS },
      { name: 'Öle & Fette', nameKey: 'categories.oilsMidday', foods: OILS_FATS_MIDDAY },
      { name: 'Gewürze & Süßungsmittel', nameKey: 'categories.spicesMidday', foods: SPICES_SWEETENERS_MIDDAY },
      { name: 'Spirituosen (Getreide/Strauch)', nameKey: 'categories.spiritsMidday', foods: ALCOHOL_SPIRITS_MIDDAY },
    ],
  },
  {
    id: 'Evening',
    name: 'Evening Window (Abend)',
    nameKey: 'windowData.eveningName',
    timeRange: '18:00 bis 24:00 Solarzeit',
    timeRangeKey: 'windowData.eveningRange',
    principle: 'Ernähre Dich von Nahrungsmitteln, die UNTER DER ERDE oder IM WASSER wachsen, Pilzen sowie Meeresfrüchten.',
    principleKey: 'windowData.eveningPrinciple',
    specialRules: 'Keine Zitrus- oder Melonen-Regeln am Abend. Kartoffeln nur am Abend!',
    specialRulesKey: 'windowData.eveningSpecial',
    colors: {
      start: 'from-sky-100',
      end: 'to-indigo-200',
      text: 'text-indigo-950',
      border: 'border-indigo-300',
      badge: 'bg-indigo-600 text-white',
    },
    categories: [
      { name: 'Wurzelgemüse', nameKey: 'categories.rootVegetables', foods: ROOT_VEGETABLES },
      { name: 'Erd-Hülsenfrüchte (Erdnüsse)', nameKey: 'categories.groundLegumes', foods: GROUND_LEGUMES },
      { name: 'Pilze & Wasserpflanzen (CAM)', nameKey: 'categories.fungi', foods: FUNGI_AND_WATER_FOODS },
      { name: 'Meeresfrüchte & Fisch', nameKey: 'categories.seafood', foods: SEAFOOD },
      { name: 'Exotische Tierprodukte & Eier', nameKey: 'categories.exoticAnimal', foods: EXOTIC_ANIMAL_PRODUCTS_EVENING },
      { name: 'Öle & Fette', nameKey: 'categories.oilsEvening', foods: OILS_FATS_EVENING },
      { name: 'Gewürze & Meersalz', nameKey: 'categories.spicesEvening', foods: SPICES_SWEETENERS_EVENING },
      { name: 'Spezialnahrung & Tonika', nameKey: 'categories.specialEvening', foods: SPECIAL_FOODS_EVENING },
      { name: 'Spirituosen (Erdpflanzen/Kartoffel)', nameKey: 'categories.spiritsEvening', foods: ALCOHOL_SPIRITS_EVENING },
    ],
  },
  {
    id: 'AnyTime',
    name: 'Any Time Window (Zeitneutral)',
    nameKey: 'windowData.anytimeName',
    timeRange: 'Ganztägig verwendbar',
    timeRangeKey: 'windowData.anytimeRange',
    principle: 'Zeitneutrale Nahrungsmittel, die zu jeder Tageszeit verzehrt und mit allen Fenstern kombiniert werden können.',
    principleKey: 'windowData.anytimePrinciple',
    specialRules: 'In Maßen verzehren. Perfekt zum Verfeinern.',
    specialRulesKey: 'windowData.anytimeSpecial',
    colors: {
      start: 'from-slate-100',
      end: 'to-slate-200',
      text: 'text-slate-900',
      border: 'border-slate-300',
      badge: 'bg-slate-700 text-white',
    },
    categories: [
      { name: 'Zeitneutrale Grundnahrungsmittel', nameKey: 'categories.anytime', foods: ANY_TIME_FOODS },
      { name: 'Spirituosen (Reis)', nameKey: 'categories.spiritsAnytime', foods: ALCOHOL_SPIRITS_ANYTIME },
    ],
  },
];
