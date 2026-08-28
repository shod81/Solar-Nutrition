/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 */

import type { TimeWindow, FoodItem } from '../types/solar';

// MORNING FOODS
export const TREE_FRUITS: FoodItem[] = [
  { id: 'food_acai', name: 'Açaí', nameEN: 'Açaí', foodType: 'Fruit', isWeightLoss: true, specialRule: 'A berry from a palm tree, best in the Morgen.', specialRuleEN: 'A berry from a palm tree, best eaten in the Morning window.' },
  { id: 'food_ackee', name: 'Ackee', nameEN: 'Ackee', foodType: 'Fruit', specialRule: 'Must be properly ripened and prepared; uncooked or unripe ackee is toxic.', specialRuleEN: 'Must be properly ripened and prepared; uncooked or unripe ackee is toxic.' },
  { id: 'food_apfel', name: 'Apfel', nameEN: 'Apple', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_aprikose', name: 'Aprikose', nameEN: 'Apricot', foodType: 'Fruit' },
  { id: 'food_avocado', name: 'Avocado', nameEN: 'Avocado', foodType: 'Fruit' },
  { id: 'food_banane', name: 'Banane', nameEN: 'Banana', foodType: 'Fruit' },
  { id: 'food_black_sapote', name: 'Black Sapote', nameEN: 'Black Sapote', foodType: 'Fruit', specialRule: 'Also known as the "chocolate pudding fruit".', specialRuleEN: 'Also known as the "chocolate pudding fruit".' },
  { id: 'food_brotfrucht', name: 'Brotfrucht', nameEN: 'Breadfruit', foodType: 'Fruit' },
  { id: 'food_cherimoya', name: 'Cherimoya', nameEN: 'Cherimoya', foodType: 'Fruit' },
  { id: 'food_dattel', name: 'Dattel', nameEN: 'Date', foodType: 'Fruit' },
  { id: 'food_durian', name: 'Durian', nameEN: 'Durian', foodType: 'Fruit' },
  { id: 'food_feige', name: 'Feige', nameEN: 'Fig', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_guave', name: 'Guave', nameEN: 'Guava', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_jackfrucht', name: 'Jackfrucht', nameEN: 'Jackfruit', foodType: 'Fruit' },
  { id: 'food_kirsche', name: 'Kirsche', nameEN: 'Cherry', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_kiwi', name: 'Kiwi', nameEN: 'Kiwi', foodType: 'Fruit', isWeightLoss: true, specialRule: 'Sonderausnahme: Adano ordnet die Kiwi trotz Rankenwachstum als Morgen (Baum)-Frucht ein.', specialRuleEN: 'Special exception: Adano classifies the kiwi as a Morning (Tree) fruit despite its vine growth.' },
  { id: 'food_kokosnuss', name: 'Kokosnuss', nameEN: 'Coconut', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_kakaobohnen', name: 'Kakaobohnen', nameEN: 'Cacao Beans', foodType: 'Dessert', specialRule: 'Vom Kakaobaum, ideal am Morgen.', specialRuleEN: 'From the cacao tree, ideal in the Morning window.' },
  { id: 'food_kaffee', name: 'Kaffee', nameEN: 'Coffee (Arabica)', foodType: 'Beverage', specialRule: 'Vom Kaffeebaum, ideal am Morgen.', specialRuleEN: 'From the coffee tree, ideal in the Morning window.' },
  { id: 'food_lychee', name: 'Lychee', nameEN: 'Lychee', foodType: 'Fruit' },
  { id: 'food_mango', name: 'Mango', nameEN: 'Mango', foodType: 'Fruit' },
  { id: 'food_mangostane', name: 'Mangostane', nameEN: 'Mangosteen', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_maulbeere', name: 'Maulbeere', nameEN: 'Mulberry', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_nektarine', name: 'Nektarine', nameEN: 'Nectarine', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_oliven', name: 'Oliven', nameEN: 'Olives', foodType: 'Fruit' },
  { id: 'food_orangenblutenhonig', name: 'Orangenblütenhonig', nameEN: 'Orange Blossom Honey', foodType: 'Honey', specialRule: 'Von Baumblüten, am besten morgens.', specialRuleEN: 'From tree blossoms, best consumed in the morning.' },
  { id: 'food_papaya', name: 'Papaya', nameEN: 'Papaya', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_passionsfrucht', name: 'Passionsfrucht', nameEN: 'Passion Fruit', foodType: 'Fruit', isWeightLoss: true, specialRule: 'Sonderausnahme: Adano ordnet die Passionsfrucht trotz Rankenwachstum als Morgen (Baum)-Frucht ein.', specialRuleEN: 'Special exception: Adano classifies passion fruit as a Morning (Tree) fruit despite its vine growth.' },
  { id: 'food_pfirsich', name: 'Pfirsich', nameEN: 'Peach', foodType: 'Fruit' },
  { id: 'food_pflaume', name: 'Pflaume', nameEN: 'Plum', foodType: 'Fruit' },
  { id: 'food_birne', name: 'Birne', nameEN: 'Pear', foodType: 'Fruit' },
  { id: 'food_granatapfel', name: 'Granatapfel', nameEN: 'Pomegranate', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_quitte', name: 'Quitte', nameEN: 'Quince', foodType: 'Fruit', isWeightLoss: true },
  { id: 'food_sternfrucht', name: 'Sternfrucht', nameEN: 'Starfruit (Carambola)', foodType: 'Fruit', isWeightLoss: true },
];

export const CITRUS_FRUITS: FoodItem[] = [
  { id: 'food_grapefruit', name: 'Grapefruit', nameEN: 'Grapefruit', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { id: 'food_zitrone', name: 'Zitrone', nameEN: 'Lemon', foodType: 'Citrus', specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { id: 'food_limette', name: 'Limette', nameEN: 'Lime', foodType: 'Citrus', specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { id: 'food_orange', name: 'Orange', nameEN: 'Orange', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { id: 'food_pomelo', name: 'Pomelo', nameEN: 'Pomelo', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
  { id: 'food_mandarine', name: 'Mandarine', nameEN: 'Tangerine / Satsuma', foodType: 'Citrus', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 09:00 – 11:00 Solar Time!' },
];

export const NUTS_AND_SEEDS: FoodItem[] = [
  { id: 'food_mandeln', name: 'Mandeln', nameEN: 'Almonds', foodType: 'Nut', specialRule: 'ERSTE NAHRUNG DES TAGES (07:00-09:00 Solarzeit), roh & eingeweicht. Reguliert Salzsäure.', specialRuleEN: 'FIRST FOOD OF THE DAY (07:00-09:00 Solar Time), raw & soaked. Regulates stomach acid.' },
  { id: 'food_paran_sse', name: 'Paranüsse', nameEN: 'Brazil Nuts', foodType: 'Nut' },
  { id: 'food_cashews', name: 'Cashews', nameEN: 'Cashews', foodType: 'Nut' },
  { id: 'food_esskastanien_maronen', name: 'Esskastanien / Maronen', nameEN: 'Chestnuts', foodType: 'Nut' },
  { id: 'food_haseln_sse', name: 'Haselnüsse', nameEN: 'Hazelnuts', foodType: 'Nut' },
  { id: 'food_macadamian_sse', name: 'Macadamianüsse', nameEN: 'Macadamia Nuts', foodType: 'Nut' },
  { id: 'food_pekann_sse', name: 'Pekannüsse', nameEN: 'Pecans', foodType: 'Nut' },
  { id: 'food_pinienkerne', name: 'Pinienkerne', nameEN: 'Pine Nuts', foodType: 'Nut' },
  { id: 'food_pistazien', name: 'Pistazien', nameEN: 'Pistachios', foodType: 'Nut', isWeightLoss: true },
  { id: 'food_waln_sse', name: 'Walnüsse', nameEN: 'Walnuts', foodType: 'Nut' },
  { id: 'food_sternanisch', name: 'Sternanisch', nameEN: 'Star Anise', foodType: 'Spice', isHerb: true },
];

export const OILS_FATS_MORNING: FoodItem[] = [
  { id: 'food_mandel_l', name: 'Mandelöl', nameEN: 'Almond Oil', foodType: 'Oil' },
  { id: 'food_avocado_l', name: 'Avocadoöl', nameEN: 'Avocado Oil', foodType: 'Oil' },
  { id: 'food_kokos_l', name: 'Kokosöl', nameEN: 'Coconut Oil', foodType: 'Oil', isWeightLoss: true },
  { id: 'food_haselnuss_l', name: 'Haselnussöl', nameEN: 'Hazelnut Oil', foodType: 'Oil' },
  { id: 'food_macadamia_l', name: 'Macadamiaöl', nameEN: 'Macadamia Oil', foodType: 'Oil' },
  { id: 'food_walnuss_l', name: 'Walnussöl', nameEN: 'Walnut Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_MORNING: FoodItem[] = [
  { id: 'food_piment', name: 'Piment', nameEN: 'Allspice', foodType: 'Spice', isHerb: true },
  { id: 'food_nelken', name: 'Nelken', nameEN: 'Cloves', foodType: 'Spice', isHerb: true },
  { id: 'food_ahornsirup', name: 'Ahornsirup', nameEN: 'Maple Syrup', foodType: 'Sweetener', specialRule: 'Vom Saft des Ahornbaums.', specialRuleEN: 'From the sap of the maple tree.' },
  { id: 'food_muskatnuss', name: 'Muskatnuss', nameEN: 'Nutmeg', foodType: 'Spice', isHerb: true },
  { id: 'food_vanille', name: 'Vanille', nameEN: 'Vanilla', foodType: 'Spice', isHerb: true, specialRule: 'Ranke an Bäumen. Sowohl für Morgen als auch Mittag geeignet.', specialRuleEN: 'Vine that grows on trees. Suitable for both Morning and Midday windows.' },
];

export const SPECIAL_FOODS_MORNING: FoodItem[] = [
  { id: 'food_adanos_cobalamin_tonic', name: 'Adanos Cobalamin Tonic', nameEN: "Adano's Cobalamin Tonic", foodType: 'Special Food', specialRule: 'B12 Booster: Arabica-Kaffee + Ahornsirup + dunkler Backkakao.', specialRuleEN: 'B12 Booster: Arabica coffee + maple syrup + dark baking cacao.' },
  { id: 'food_umeboshi_pflaume', name: 'Umeboshi-Pflaume', nameEN: 'Umeboshi Plum', foodType: 'Special Food', isWeightLoss: true, specialRule: 'Morgen-Hormonbalancer, allein verzehren.', specialRuleEN: 'Morning hormone balancer, eat alone.' },
];

export const ALCOHOL_SPIRITS_MORNING: FoodItem[] = [
  { id: 'food_calvados', name: 'Calvados', nameEN: 'Calvados (Apple Brandy)', foodType: 'Spirit', specialRule: 'Nur 100% aus Äpfeln (Baum).', specialRuleEN: 'Only 100% from apples (tree).' },
  { id: 'food_kirschwasser', name: 'Kirschwasser', nameEN: 'Kirschwasser (Cherry Brandy)', foodType: 'Spirit', specialRule: 'Aus Kirschen (Baum).', specialRuleEN: 'Made from cherries (tree).' },
  { id: 'food_slivovitz', name: 'Slivovitz', nameEN: 'Slivovitz (Plum Brandy)', foodType: 'Spirit', specialRule: 'Aus Pflaumen (Baum).', specialRuleEN: 'Made from plums (tree).' },
];

// MIDDAY FOODS
export const VEGETABLES: FoodItem[] = [
  { id: 'food_paprika', name: 'Paprika', nameEN: 'Bell Pepper', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_brokkoli', name: 'Brokkoli', nameEN: 'Broccoli', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_rosenkohl', name: 'Rosenkohl', nameEN: 'Brussels Sprouts', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_blumenkohl', name: 'Blumenkohl', nameEN: 'Cauliflower', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_wei_kohl_rotkohl', name: 'Weißkohl / Rotkohl', nameEN: 'White / Red Cabbage', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_sellerienst_ngel', name: 'Sellerienstängel', nameEN: 'Celery Stalks', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Die grünen Stängel sind Mittag, die Knolle ist Abend.', specialRuleEN: 'The green stalks are Midday; the bulb (celeriac) is Evening.' },
  { id: 'food_gurke', name: 'Gurke', nameEN: 'Cucumber', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_auberginen', name: 'Auberginen', nameEN: 'Aubergine (Eggplant)', foodType: 'Vegetable' },
  { id: 'food_gr_nkohl', name: 'Grünkohl', nameEN: 'Kale', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_kohlrabi', name: 'Kohlrabi', nameEN: 'Kohlrabi', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_lauch_porree', name: 'Lauch / Porree', nameEN: 'Leek (Green Part)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Grüner Teil ist Mittag, die weiße Knolle ist Abend.', specialRuleEN: 'The green part is Midday; the white bulb is Evening.' },
  { id: 'food_fr_hlingszwiebel', name: 'Frühlingszwiebel', nameEN: 'Spring Onion (Green Part)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Grüner Teil ist Mittag, das Weiße ist Abend.', specialRuleEN: 'The green part is Midday; the white part is Evening.' },
  { id: 'food_salat', name: 'Salat', nameEN: 'Lettuce', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_okra', name: 'Okra', nameEN: 'Okra', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_k_rbis', name: 'Kürbis', nameEN: 'Pumpkin', foodType: 'Vegetable' },
  { id: 'food_spinat', name: 'Spinat', nameEN: 'Spinach', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_zucchini', name: 'Zucchini', nameEN: 'Courgette (Zucchini)', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_tomate', name: 'Tomate', nameEN: 'Tomato', foodType: 'Vegetable', specialRule: 'Wächst an einer Ranke, gilt als Mittag-Nahrung.', specialRuleEN: 'Grows on a vine, classified as Midday food.' },
];

export const GRAINS_AND_LEGUMES: FoodItem[] = [
  { id: 'food_amaranth', name: 'Amaranth', nameEN: 'Amaranth', foodType: 'Grain', isWeightLoss: true },
  { id: 'food_gerste', name: 'Gerste', nameEN: 'Barley', foodType: 'Grain' },
  { id: 'food_schwarze_bohnen', name: 'Schwarze Bohnen', nameEN: 'Black Beans', foodType: 'Legume' },
  { id: 'food_buchweizen', name: 'Buchweizen', nameEN: 'Buckwheat', foodType: 'Grain', isWeightLoss: true },
  { id: 'food_kichererbsen', name: 'Kichererbsen', nameEN: 'Chickpeas', foodType: 'Legume' },
  { id: 'food_edamame', name: 'Edamame', nameEN: 'Edamame', foodType: 'Legume', isWeightLoss: true },
  { id: 'food_gr_ne_bohnen', name: 'Grüne Bohnen', nameEN: 'Green Beans', foodType: 'Legume', isWeightLoss: true },
  { id: 'food_linsen', name: 'Linsen', nameEN: 'Lentils', foodType: 'Legume', isWeightLoss: true },
  { id: 'food_hafer', name: 'Hafer', nameEN: 'Oats', foodType: 'Grain', isWeightLoss: true },
  { id: 'food_erbsen', name: 'Erbsen', nameEN: 'Peas', foodType: 'Legume', isWeightLoss: true },
  { id: 'food_quinoa', name: 'Quinoa', nameEN: 'Quinoa', foodType: 'Grain', isWeightLoss: true },
  { id: 'food_roggen', name: 'Roggen', nameEN: 'Rye', foodType: 'Grain' },
  { id: 'food_semolina_durum_wheat_pasta', name: 'Semolina Durum Wheat Pasta', nameEN: 'Semolina Durum Wheat Pasta', foodType: 'Pasta', specialRule: 'Dual-Zone: Sowohl für Mittag als auch Abend geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { id: 'food_dinkel', name: 'Dinkel', nameEN: 'Spelt', foodType: 'Grain' },
  { id: 'food_weizen', name: 'Weizen', nameEN: 'Wheat', foodType: 'Grain' },
  { id: 'food_miso', name: 'Miso', nameEN: 'Miso', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Mittag als auch Abend geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { id: 'food_tamari_sojasauce', name: 'Tamari / Sojasauce', nameEN: 'Tamari / Soy Sauce', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Mittag als auch Abend geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
  { id: 'food_tofu_tempeh', name: 'Tofu & Tempeh', nameEN: 'Tofu & Tempeh', foodType: 'Legume', specialRule: 'Dual-Zone: Sowohl für Mittag als auch Abend geeignet.', specialRuleEN: 'Dual-Zone: Suitable for both Midday and Evening windows.' },
];

export const BERRIES_AND_MELONS: FoodItem[] = [
  { id: 'food_brombeere', name: 'Brombeere', nameEN: 'Blackberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { id: 'food_blaubeere', name: 'Blaubeere', nameEN: 'Blueberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { id: 'food_himbeere', name: 'Himbeere', nameEN: 'Raspberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { id: 'food_erdbeere', name: 'Erdbeere', nameEN: 'Strawberry', foodType: 'Berry', isWeightLoss: true, specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { id: 'food_weintrauben', name: 'Weintrauben', nameEN: 'Grapes', foodType: 'Berry', specialRule: 'Am besten zwischen 15:00 - 17:00 Solarzeit.', specialRuleEN: 'Best between 15:00 – 17:00 Solar Time.' },
  { id: 'food_cantaloupe_melone', name: 'Cantaloupe-Melone', nameEN: 'Cantaloupe Melon', foodType: 'Melon', specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
  { id: 'food_honigmelone', name: 'Honigmelone', nameEN: 'Honeydew Melon', foodType: 'Melon', specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
  { id: 'food_wassermelone', name: 'Wassermelone', nameEN: 'Watermelon', foodType: 'Melon', isWeightLoss: true, specialRule: 'STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren!', specialRuleEN: 'STRICTLY ALONE between 15:00 – 17:00 Solar Time!' },
];

export const BEVERAGES_MIDDAY: FoodItem[] = [
  { id: 'food_gr_ner_tee', name: 'Grüner Tee', nameEN: 'Green Tea', foodType: 'Beverage', isWeightLoss: true },
  { id: 'food_kombucha', name: 'Kombucha', nameEN: 'Kombucha', foodType: 'Beverage', isWeightLoss: true },
  { id: 'food_mate_tee', name: 'Mate-Tee', nameEN: 'Maté Tea', foodType: 'Beverage' },
];

export const DAIRY_MIDDAY: FoodItem[] = [
  { id: 'food_k_se', name: 'Käse', nameEN: 'Cheese', foodType: 'Dairy', specialRule: 'Achtung: Niemals schmelzen und nicht mit Fleisch kombinieren!', specialRuleEN: 'Important: Never melt and do not combine with meat!' },
  { id: 'food_kefir', name: 'Kefir', nameEN: 'Kefir', foodType: 'Dairy', specialRule: 'Mittag-Nahrung, in kleinen Mengen auch Abend möglich.', specialRuleEN: 'Midday food; small amounts also possible in the Evening.' },
  { id: 'food_milch', name: 'Milch', nameEN: 'Milk', foodType: 'Dairy', specialRule: 'Nicht mit Fleisch kombinieren!', specialRuleEN: 'Do not combine with meat!' },
  { id: 'food_joghurt', name: 'Joghurt', nameEN: 'Yogurt', foodType: 'Dairy', specialRule: 'Mittag-Nahrung, in kleinen Mengen zeitneutral.', specialRuleEN: 'Midday food; in small amounts time-neutral.' },
];

export const LAND_ANIMALS: FoodItem[] = [
  { id: 'food_rindfleisch', name: 'Rindfleisch', nameEN: 'Beef', foodType: 'Meat', specialRule: 'Niemals mit Milchprodukten (Milch, Käse) kombinieren!', specialRuleEN: 'Never combine with dairy products (milk, cheese)!' },
  { id: 'food_h_hnchen', name: 'Hähnchen', nameEN: 'Chicken', foodType: 'Meat', specialRule: 'Niemals mit Milchprodukten kombinieren!', specialRuleEN: 'Never combine with dairy products!' },
  { id: 'food_ente', name: 'Ente', nameEN: 'Duck', foodType: 'Meat' },
  { id: 'food_lamm', name: 'Lamm', nameEN: 'Lamb', foodType: 'Meat' },
  { id: 'food_schweinefleisch', name: 'Schweinefleisch', nameEN: 'Pork', foodType: 'Meat' },
  { id: 'food_pute_truthahn', name: 'Pute / Truthahn', nameEN: 'Turkey', foodType: 'Meat' },
  { id: 'food_hirsch_reh', name: 'Hirsch / Reh', nameEN: 'Venison', foodType: 'Meat' },
];

export const FRESHWATER_FISH_MIDDAY: FoodItem[] = [
  { id: 'food_forelle', name: 'Forelle', nameEN: 'Trout', foodType: 'Freshwater Fish', specialRule: 'Sonderausnahme für das Mittag-Fenster.', specialRuleEN: 'Special exception for the Midday window.' },
];

export const HERBS: FoodItem[] = [
  { id: 'food_basilikum', name: 'Basilikum', nameEN: 'Basil', foodType: 'Herb', isHerb: true },
  { id: 'food_koriander', name: 'Koriander', nameEN: 'Coriander / Cilantro', foodType: 'Herb', isHerb: true },
  { id: 'food_dill', name: 'Dill', nameEN: 'Dill', foodType: 'Herb', isHerb: true },
  { id: 'food_minze', name: 'Minze', nameEN: 'Mint', foodType: 'Herb', isHerb: true },
  { id: 'food_oregano', name: 'Oregano', nameEN: 'Oregano', foodType: 'Herb', isHerb: true },
  { id: 'food_petersilie', name: 'Petersilie', nameEN: 'Parsley', foodType: 'Herb', isHerb: true },
  { id: 'food_rosmarin', name: 'Rosmarin', nameEN: 'Rosemary', foodType: 'Herb', isHerb: true },
  { id: 'food_salbei', name: 'Salbei', nameEN: 'Sage', foodType: 'Herb', isHerb: true },
  { id: 'food_thymian', name: 'Thymian', nameEN: 'Thyme', foodType: 'Herb', isHerb: true },
];

export const OILS_FATS_MIDDAY: FoodItem[] = [
  { id: 'food_raps_l', name: 'Rapsöl', nameEN: 'Rapeseed / Canola Oil', foodType: 'Oil' },
  { id: 'food_lein_l', name: 'Leinöl', nameEN: 'Flaxseed Oil', foodType: 'Oil', isWeightLoss: true },
  { id: 'food_k_rbiskern_l', name: 'Kürbiskernöl', nameEN: 'Pumpkin Seed Oil', foodType: 'Oil', isWeightLoss: true },
  { id: 'food_sesam_l', name: 'Sesamöl', nameEN: 'Sesame Oil', foodType: 'Oil' },
  { id: 'food_sonnenblumen_l', name: 'Sonnenblumenöl', nameEN: 'Sunflower Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_MIDDAY: FoodItem[] = [
  { id: 'food_kardamom', name: 'Kardamom', nameEN: 'Cardamom', foodType: 'Spice', isHerb: true },
  { id: 'food_cayennepfeffer', name: 'Cayennepfeffer', nameEN: 'Cayenne Pepper', foodType: 'Spice', isWeightLoss: true, isHerb: true, specialRule: 'SPEZIALKRÄUTER: Zu jeder Tageszeit verwendbar! Einzige erlaubte Pfefferart.', specialRuleEN: 'SPECIAL HERB: Usable at any time of day! The only permitted pepper type.' },
  { id: 'food_chili', name: 'Chili', nameEN: 'Chilli Pepper', foodType: 'Spice', isHerb: true },
  { id: 'food_kreuzk_mmel', name: 'Kreuzkümmel', nameEN: 'Cumin', foodType: 'Spice', isHerb: true },
  { id: 'food_paprikapulver', name: 'Paprikapulver', nameEN: 'Paprika', foodType: 'Spice', isHerb: true },
  { id: 'food_rohrzucker', name: 'Rohrzucker', nameEN: 'Unrefined Cane Sugar', foodType: 'Sweetener', specialRule: 'Aus Zuckerrohr (Strauch).', specialRuleEN: 'From sugar cane (bush).' },
];

export const SPECIAL_FOODS_MIDDAY: FoodItem[] = [
  { id: 'food_tomatensaft_mit_melasse', name: 'Tomatensaft mit Melasse', nameEN: 'Tomato Juice with Molasses', foodType: 'Special Food', specialRule: 'Mittag-Hormonbalancer.', specialRuleEN: 'Midday hormone balancer.' },
];

export const ALCOHOL_SPIRITS_MIDDAY: FoodItem[] = [
  { id: 'food_bier', name: 'Bier', nameEN: 'Beer', foodType: 'Alcohol', specialRule: 'Aus Gerste/Getreide.', specialRuleEN: 'Made from barley / grain.' },
  { id: 'food_gin', name: 'Gin', nameEN: 'Gin', foodType: 'Spirit', specialRule: 'Aus Getreide & Wacholderbeeren.', specialRuleEN: 'Made from grain & juniper berries.' },
  { id: 'food_rum', name: 'Rum', nameEN: 'Rum', foodType: 'Spirit', specialRule: 'Aus Zuckerrohr.', specialRuleEN: 'Made from sugar cane.' },
  { id: 'food_whiskey_bourbon', name: 'Whiskey / Bourbon', nameEN: 'Whisky / Bourbon', foodType: 'Spirit', specialRule: 'Aus Getreide (Mais, Roggen, Weizen).', specialRuleEN: 'Made from grain (maize, rye, wheat).' },
  { id: 'food_wein', name: 'Wein', nameEN: 'Wine', foodType: 'Alcohol', specialRule: 'Aus Trauben (Ranke).', specialRuleEN: 'Made from grapes (vine).' },
];

// EVENING FOODS
export const ROOT_VEGETABLES: FoodItem[] = [
  { id: 'food_artischockenherz', name: 'Artischockenherz', nameEN: 'Artichoke Heart', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Das Herz wächst bodennah.', specialRuleEN: 'The heart grows close to the ground.' },
  { id: 'food_spargel', name: 'Spargel', nameEN: 'Asparagus', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'Abend, da das Wachstum unter der Erde beginnt.', specialRuleEN: 'Evening, as growth begins underground.' },
  { id: 'food_bambussprossen', name: 'Bambussprossen', nameEN: 'Bamboo Shoots', foodType: 'Vegetable', specialRule: 'Abend, da das Wachstum unter der Erde beginnt.', specialRuleEN: 'Evening, as growth begins underground.' },
  { id: 'food_rote_bete', name: 'Rote Bete', nameEN: 'Beetroot', foodType: 'Vegetable' },
  { id: 'food_m_hre_karotte', name: 'Möhre / Karotte', nameEN: 'Carrot', foodType: 'Vegetable' },
  { id: 'food_knollensellerie', name: 'Knollensellerie', nameEN: 'Celeriac (Celery Root)', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_daikon_rettich', name: 'Daikon-Rettich', nameEN: 'Daikon Radish', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_fenchelknolle', name: 'Fenchelknolle', nameEN: 'Fennel Bulb', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_knoblauch', name: 'Knoblauch', nameEN: 'Garlic', foodType: 'Vegetable', isHerb: true },
  { id: 'food_ingwer', name: 'Ingwer', nameEN: 'Ginger', foodType: 'Vegetable', isHerb: true, specialRule: 'Achtung: Starker Blutverdünner!', specialRuleEN: 'Caution: Powerful blood thinner!' },
  { id: 'food_meerrettich', name: 'Meerrettich', nameEN: 'Horseradish', foodType: 'Vegetable', isHerb: true },
  { id: 'food_zwiebelknolle', name: 'Zwiebelknolle', nameEN: 'Onion', foodType: 'Vegetable' },
  { id: 'food_pastinake', name: 'Pastinake', nameEN: 'Parsnip', foodType: 'Vegetable' },
  { id: 'food_kartoffel', name: 'Kartoffel', nameEN: 'Potato', foodType: 'Vegetable', specialRule: 'NUR IM EVENING Fenster!', specialRuleEN: 'ONLY IN THE EVENING WINDOW!' },
  { id: 'food_rettich_radieschen', name: 'Rettich / Radieschen', nameEN: 'Radish', foodType: 'Vegetable', isWeightLoss: true },
  { id: 'food_s_kartoffel', name: 'Süßkartoffel', nameEN: 'Sweet Potato', foodType: 'Vegetable' },
  { id: 'food_schalotte', name: 'Schalotte', nameEN: 'Shallot', foodType: 'Vegetable' },
  { id: 'food_topinambur_yams', name: 'Topinambur / Yams', nameEN: 'Jerusalem Artichoke / Yam', foodType: 'Vegetable' },
];

export const GROUND_LEGUMES: FoodItem[] = [
  { id: 'food_erdn_sse', name: 'Erdnüsse', nameEN: 'Peanuts', foodType: 'Legume', specialRule: 'Wachsen unter der Erde.', specialRuleEN: 'Grow underground.' },
];

export const FUNGI_AND_WATER_FOODS: FoodItem[] = [
  { id: 'food_aloe_vera_saft', name: 'Aloe Vera Saft', nameEN: 'Aloe Vera Juice', foodType: 'Beverage', specialRule: 'CAM-Pflanze, am besten im Abend.', specialRuleEN: 'CAM plant, best in the Evening window.' },
  { id: 'food_chlorella_spirulina', name: 'Chlorella & Spirulina', nameEN: 'Chlorella & Spirulina', foodType: 'Algae', isWeightLoss: true },
  { id: 'food_pilze', name: 'Pilze', nameEN: 'Mushrooms', foodType: 'Fungus' },
  { id: 'food_nopales', name: 'Nopales', nameEN: 'Nopales (Cactus Pads)', foodType: 'Vegetable', isWeightLoss: true, specialRule: 'CAM-Pflanze, Abend.', specialRuleEN: 'CAM plant, Evening window.' },
  { id: 'food_ananas', name: 'Ananas', nameEN: 'Pineapple', foodType: 'Fruit', isWeightLoss: true, specialRule: 'CAM-Pflanze! Trotz Frucht eine Abend-Nahrung.', specialRuleEN: 'CAM plant! Despite being a fruit, classified as Evening food.' },
  { id: 'food_meeresalgen', name: 'Meeresalgen', nameEN: 'Seaweed', foodType: 'Algae', isWeightLoss: true },
  { id: 'food_tr_ffel', name: 'Trüffel', nameEN: 'Truffles', foodType: 'Fungus' },
  { id: 'food_brunnenkresse', name: 'Brunnenkresse', nameEN: 'Watercress', foodType: 'Vegetable', isWeightLoss: true },
];

export const SEAFOOD: FoodItem[] = [
  { id: 'food_sardellen_anchovis', name: 'Sardellen / Anchovis', nameEN: 'Anchovies', foodType: 'Seafood' },
  { id: 'food_kabeljau_dorsch', name: 'Kabeljau / Dorsch', nameEN: 'Cod', foodType: 'Seafood' },
  { id: 'food_krabben_garnelen', name: 'Krabben / Garnelen', nameEN: 'Prawns / Shrimp / Crab', foodType: 'Seafood' },
  { id: 'food_hummer', name: 'Hummer', nameEN: 'Lobster', foodType: 'Seafood' },
  { id: 'food_makrele', name: 'Makrele', nameEN: 'Mackerel', foodType: 'Seafood' },
  { id: 'food_muscheln', name: 'Muscheln', nameEN: 'Mussels / Clams', foodType: 'Seafood' },
  { id: 'food_oktopus_tintenfisch', name: 'Oktopus / Tintenfisch', nameEN: 'Octopus / Squid', foodType: 'Seafood' },
  { id: 'food_austern', name: 'Austern', nameEN: 'Oysters', foodType: 'Seafood' },
  { id: 'food_lachs', name: 'Lachs', nameEN: 'Salmon', foodType: 'Freshwater Fish' },
  { id: 'food_sardinen', name: 'Sardinen', nameEN: 'Sardines', foodType: 'Seafood' },
  { id: 'food_jakobsmuscheln', name: 'Jakobsmuscheln', nameEN: 'Scallops', foodType: 'Seafood' },
  { id: 'food_thunfisch', name: 'Thunfisch', nameEN: 'Tuna', foodType: 'Seafood' },
];

export const EXOTIC_ANIMAL_PRODUCTS_EVENING: FoodItem[] = [
  { id: 'food_kaviar', name: 'Kaviar', nameEN: 'Caviar', foodType: 'Fish Roe' },
  { id: 'food_ei', name: 'Ei', nameEN: 'Egg', foodType: 'Animal Product', specialRule: 'Eier sind zwar zeitneutral, werden aber abends am besten verdaut.', specialRuleEN: 'Eggs are time-neutral but are best digested in the evening.' },
];

export const OILS_FATS_EVENING: FoodItem[] = [
  { id: 'food_erdnuss_l', name: 'Erdnussöl', nameEN: 'Peanut Oil', foodType: 'Oil' },
];

export const SPICES_SWEETENERS_EVENING: FoodItem[] = [
  { id: 'food_agavendicksaft', name: 'Agavendicksaft', nameEN: 'Agave Nectar', foodType: 'Sweetener' },
  { id: 'food_zimt', name: 'Zimt', nameEN: 'Cinnamon', foodType: 'Spice', isHerb: true, specialRule: 'Baumrinde -> Abend-Gewürz.', specialRuleEN: 'Tree bark → Evening spice.' },
  { id: 'food_safran', name: 'Safran', nameEN: 'Saffron', foodType: 'Spice', isHerb: true },
  { id: 'food_meersalz', name: 'Grobes Kosher-Salz', nameEN: 'Kosher Salt', foodType: 'Spice', isHerb: true, specialRule: 'DAS bevorzugte Salz für das Abend-Fenster.', specialRuleEN: 'THE preferred salt for the Evening window.' },
  { id: 'food_r_benzucker', name: 'Rübenzucker', nameEN: 'Unrefined Beet Sugar', foodType: 'Sweetener', specialRule: 'Aus Zuckerrüben (Wurzel).', specialRuleEN: 'Made from sugar beet (root).' },
];

export const SPECIAL_FOODS_EVENING: FoodItem[] = [
  { id: 'food_ananassaft_aloe_vera_saft_tequila', name: 'Ananassaft + Aloe Vera Saft + Tequila', nameEN: 'Pineapple Juice + Aloe Vera Juice + Tequila', foodType: 'Tonic', specialRule: 'Abend-Hormonbalancer. Sparsam verwenden.', specialRuleEN: 'Evening hormone balancer. Use sparingly.' },
  { id: 'food_kochbanane', name: 'Kochbanane', nameEN: 'Plantain (Cooking Banana)', foodType: 'Fruit', specialRule: 'Morgen & Abend Spezialnahrung. Muss gekocht werden.', specialRuleEN: 'Morning & Evening special food. Must be cooked.' },
];

export const ALCOHOL_SPIRITS_EVENING: FoodItem[] = [
  { id: 'food_tequila', name: 'Tequila', nameEN: 'Tequila (100% Agave)', foodType: 'Spirit', specialRule: 'Aus der Agave (Erdpflanze).', specialRuleEN: 'Made from agave (earth plant).' },
  { id: 'food_vodka_aus_kartoffeln', name: 'Vodka aus Kartoffeln', nameEN: 'Potato Vodka', foodType: 'Spirit', specialRule: 'Nur wenn 100% aus Kartoffeln.', specialRuleEN: 'Only if 100% made from potatoes.' },
];

// ANYTIME FOODS
export const ANY_TIME_FOODS: FoodItem[] = [
  { id: 'food_brauner_reis', name: 'Brauner Reis', nameEN: 'Brown Rice', foodType: 'Grain', specialRule: 'Zeitneutrales Getreide.', specialRuleEN: 'Time-neutral grain.' },
  { id: 'food_butter', name: 'Butter', nameEN: 'Butter', foodType: 'Fat', specialRule: 'Zeitneutrales Fett.', specialRuleEN: 'Time-neutral fat.' },
  { id: 'food_sahne', name: 'Sahne', nameEN: 'Cream', foodType: 'Dairy', specialRule: 'Zeitneutrale Molkerei.', specialRuleEN: 'Time-neutral dairy.' },
  { id: 'food_ghee', name: 'Ghee', nameEN: 'Ghee (Clarified Butter)', foodType: 'Fat', specialRule: 'Zeitneutrales Fett.', specialRuleEN: 'Time-neutral fat.' },
  { id: 'food_oliven_l', name: 'Olivenöl', nameEN: 'Olive Oil', foodType: 'Oil', specialRule: 'Zeitneutrales Öl für alle Fenster.', specialRuleEN: 'Time-neutral oil for all windows.' },
  { id: 'food_reisnudeln', name: 'Reisnudeln', nameEN: 'Rice Noodles (100% Rice)', foodType: 'Pasta', specialRule: 'Zeitneutrale Nudeln.', specialRuleEN: 'Time-neutral noodles.' },
  { id: 'food_salz', name: 'Salz', nameEN: 'Salt (Kosher)', foodType: 'Spice', isHerb: true, specialRule: 'Bevorzugtes reines Salz für Morgen, Mittag & Dawn.', specialRuleEN: 'Preferred pure salt for Morning, Midday & Dawn.' },
  { id: 'food_wei_er_reis', name: 'Weißer Reis', nameEN: 'White Rice', foodType: 'Grain', specialRule: 'Zeitneutrales Getreide.', specialRuleEN: 'Time-neutral grain.' },
  { id: 'food_wildreis', name: 'Wildreis', nameEN: 'Wild Rice', foodType: 'Grain', specialRule: 'Adano-Empfehlung: 5 Teile brauner Reis + 1 Teil Wildreis für ein vollständiges Protein.', specialRuleEN: "Adano's recommendation: 5 parts brown rice + 1 part wild rice for a complete protein." },
  { id: 'food_wei_er_zucker', name: 'Weißer Zucker', nameEN: 'Refined White Sugar', foodType: 'Sweetener', specialRule: 'Zeitneutral, sparsam als Medizin verwenden.', specialRuleEN: 'Time-neutral; use sparingly as medicine.' },
];

export const ALCOHOL_SPIRITS_ANYTIME: FoodItem[] = [
  { id: 'food_sake', name: 'Sake', nameEN: 'Sake (Rice Wine)', foodType: 'Alcohol', specialRule: 'Aus Reis (zeitneutral).', specialRuleEN: 'Made from rice (time-neutral).' },
  { id: 'food_vodka_aus_reis_soju', name: 'Vodka aus Reis / Soju', nameEN: 'Rice Vodka / Soju', foodType: 'Spirit', specialRule: 'Aus Reis (zeitneutral).', specialRuleEN: 'Made from rice (time-neutral).' },
];

export const SOLAR_NUTRITION_DATABASE: TimeWindow[] = [
  {
    id: 'Morning',
    name: 'Morning Window',
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
      { id: 'food_baumfr_chte', name: 'Baumfrüchte', nameKey: 'categories.treeFruits', foods: TREE_FRUITS },
      { id: 'food_zitrusfr_chte', name: 'Zitrusfrüchte', nameKey: 'categories.citrus', foods: CITRUS_FRUITS },
      { id: 'food_n_sse_samen', name: 'Nüsse & Samen', nameKey: 'categories.nuts', foods: NUTS_AND_SEEDS },
      { id: 'food_le_fette', name: 'Öle & Fette', nameKey: 'categories.oilsMorning', foods: OILS_FATS_MORNING },
      { id: 'food_gew_rze_s_ungsmittel', name: 'Gewürze & Süßungsmittel', nameKey: 'categories.spicesMorning', foods: SPICES_SWEETENERS_MORNING },
      { id: 'food_spezialnahrung_tonika', name: 'Spezialnahrung & Tonika', nameKey: 'categories.specialMorning', foods: SPECIAL_FOODS_MORNING },
      { id: 'food_spirituosen', name: 'Spirituosen', nameKey: 'categories.spiritsMorning', foods: ALCOHOL_SPIRITS_MORNING },
    ],
  },
  {
    id: 'Midday',
    name: 'Midday Window',
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
      { id: 'food_strauchgem_se', name: 'Strauchgemüse', nameKey: 'categories.vegetables', foods: VEGETABLES },
      { id: 'food_getreide_h_lsenfr_chte', name: 'Getreide & Hülsenfrüchte', nameKey: 'categories.grains', foods: GRAINS_AND_LEGUMES },
      { id: 'food_beeren_melonen', name: 'Beeren & Melonen', nameKey: 'categories.berries', foods: BERRIES_AND_MELONS },
      { id: 'food_getr_nke_tee', name: 'Getränke & Tee', nameKey: 'categories.beveragesMidday', foods: BEVERAGES_MIDDAY },
      { id: 'food_milchprodukte', name: 'Milchprodukte', nameKey: 'categories.dairy', foods: DAIRY_MIDDAY },
      { id: 'food_landtiere_gefl_gel', name: 'Landtiere & Geflügel', nameKey: 'categories.landAnimals', foods: LAND_ANIMALS },
      { id: 'food_s_wasserfisch', name: 'Süßwasserfisch', nameKey: 'categories.freshwaterFish', foods: FRESHWATER_FISH_MIDDAY },
      { id: 'food_kr_uter', name: 'Kräuter', nameKey: 'categories.herbs', foods: HERBS },
      { id: 'food_le_fette', name: 'Öle & Fette', nameKey: 'categories.oilsMidday', foods: OILS_FATS_MIDDAY },
      { id: 'food_gew_rze_s_ungsmittel', name: 'Gewürze & Süßungsmittel', nameKey: 'categories.spicesMidday', foods: SPICES_SWEETENERS_MIDDAY },
      { id: 'food_spirituosen', name: 'Spirituosen', nameKey: 'categories.spiritsMidday', foods: ALCOHOL_SPIRITS_MIDDAY },
    ],
  },
  {
    id: 'Evening',
    name: 'Evening Window',
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
      { id: 'food_wurzelgem_se', name: 'Wurzelgemüse', nameKey: 'categories.rootVegetables', foods: ROOT_VEGETABLES },
      { id: 'food_erd_h_lsenfr_chte', name: 'Erd-Hülsenfrüchte', nameKey: 'categories.groundLegumes', foods: GROUND_LEGUMES },
      { id: 'food_pilze_wasserpflanzen', name: 'Pilze & Wasserpflanzen', nameKey: 'categories.fungi', foods: FUNGI_AND_WATER_FOODS },
      { id: 'food_meeresfr_chte_fisch', name: 'Meeresfrüchte & Fisch', nameKey: 'categories.seafood', foods: SEAFOOD },
      { id: 'food_exotische_tierprodukte_eier', name: 'Exotische Tierprodukte & Eier', nameKey: 'categories.exoticAnimal', foods: EXOTIC_ANIMAL_PRODUCTS_EVENING },
      { id: 'food_le_fette', name: 'Öle & Fette', nameKey: 'categories.oilsEvening', foods: OILS_FATS_EVENING },
      { id: 'food_gew_rze_meersalz', name: 'Gewürze & Meersalz', nameKey: 'categories.spicesEvening', foods: SPICES_SWEETENERS_EVENING },
      { id: 'food_spezialnahrung_tonika', name: 'Spezialnahrung & Tonika', nameKey: 'categories.specialEvening', foods: SPECIAL_FOODS_EVENING },
      { id: 'food_spirituosen', name: 'Spirituosen', nameKey: 'categories.spiritsEvening', foods: ALCOHOL_SPIRITS_EVENING },
    ],
  },
  {
    id: 'AnyTime',
    name: 'Any Time Window',
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
      { id: 'food_zeitneutrale_grundnahrungsmittel', name: 'Zeitneutrale Grundnahrungsmittel', nameKey: 'categories.anytime', foods: ANY_TIME_FOODS },
      { id: 'food_spirituosen', name: 'Spirituosen', nameKey: 'categories.spiritsAnytime', foods: ALCOHOL_SPIRITS_ANYTIME },
    ],
  },
];
