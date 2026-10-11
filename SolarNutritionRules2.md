# Solar Nutrition — Vollständiges Regelwerk

> Extrahiert aus dem SolarNutrition-Repository (App-Quellen).  
> Primärquellen: `src/i18n/de.ts` (Rules Guide), `src/utils/solarCalculator.ts`, `src/utils/lunarCalculator.ts`, `src/utils/combinationChecker.ts`, `src/data/solarDatabase.ts`, `public/api/ai-proxy.php`.

**Kernprinzip:** *„Es kommt nicht darauf an, WAS Du isst, sondern WANN Du es isst."* — Nach den Lehren von Adano Ley & Atom Bergstrom.

Alle Zeitangaben beziehen sich auf die **Wahre Sonnenzeit (True Solar Time)** am Standort des Nutzers (Equation of Time + Längengradkorrektur), nicht auf die Uhren-/Ortszeit.

---

## 1. Die drei Wachstumszonen (Hauptfenster)

### 1.1 Morning Window (Morgen) — 00:00 – 12:00 Solarzeit

- **Prinzip:** Nahrungsmittel, die an **BÄUMEN** wachsen: Früchte, Nüsse, Samen, Baumöle (z. B. Avocadoöl, Kokosöl) und Arabica-Kaffee.
- **Besondere Zeitregeln des Fensters:**
  - Zitrusfrüchte nur **09:00 – 11:00** (streng allein).
  - Mandeln am besten als **erste Nahrung** (**07:00 – 09:00**, roh & eingeweicht).

### 1.2 Midday Window (Mittag) — 12:00 – 18:00 Solarzeit

- **Prinzip:** Nahrungsmittel, die an **STRÄUCHERN** oder **RANKEN** wachsen (mind. ~10 cm / 4 inches über dem Boden), Getreide, 2- & 4-beinige Landtiere sowie **Forelle** (Sonderausnahme).
- **Besondere Zeitregeln des Fensters:**
  - Melonen nur **15:00 – 17:00** (streng allein).
  - Beeren am besten **15:00 – 17:00**.

### 1.3 Evening Window (Abend) — 18:00 – 24:00 Solarzeit

- **Prinzip:** Nahrungsmittel, die **UNTER DER ERDE** (Wurzeln), **IM WASSER** (Meeresfrüchte, Fisch, Algen) oder in Dunkelheit wachsen (Pilze, CAM-Pflanzen).
- **Besondere Zeitregeln des Fensters:**
  - Keine Zitrus- oder Melonen-Regeln am Abend.
  - **Kartoffeln nur am Abend.**

### 1.4 Any Time Window (Zeitneutral) — ganztägig

- **Prinzip:** Zeitneutrale Nahrungsmittel, die zu jeder Tageszeit verzehrt und mit allen Fenstern kombiniert werden können.
- **Hinweis:** In Maßen verzehren; ideal zum Verfeinern.
- Beispiele laut Datenbank: Reis (weiß/braun/wild), Reisnudeln, Butter, Sahne, Ghee, Olivenöl, Salz, weißer Zucker (sparsam), Sake / Reisvodka/Soju.

---

## 2. Übergangszeiten (Transitions / Bridges)

In diesen halbstündigen Fenstern dürfen Nahrungsmittel aus **angrenzenden** Wachstumszonen kombiniert werden.

| Bridge | Solarzeit | Erlaubte Kombination |
|---|---|---|
| **Dawn / Bridge 1** | **11:30 – 12:00** | Morning (Baum) + Midday (Strauch/Getreide/Landtiere) |
| **Dusk / Bridge 2** | **18:30 – 19:00** | Midday + Evening (Wurzeln/Pilze/Meeresfrüchte) |
| **Night / Bridge 3** | **00:30 – 01:00** | Evening + Morning |

> **Hinweis zu Abweichungen im Repo:**  
> - Der Rules Guide (`guide.*`) und `solarCalculator.ts` verwenden die obigen Halbstunden-Fenster (11:30–12:00 / 18:30–19:00 / 00:30–01:00).  
> - UI-Labels `windows.dawnTransition` / `windows.duskTransition` sowie der Solar-AI-Chef-Systemkontext in `ai-proxy.php` nennen teilweise längere Intervalle (Dawn 11:30–12:30, Dusk 18:00–19:00).  
> - Im Code wird die Night-Bridge intern ebenfalls als Transition-Typ `Dawn` markiert; die fachliche Regel laut Guide ist Evening+Morning.

---

## 3. Erdwurzeln- / Stängelregel (Root Vegetables Rule)

- Der **oberirdische** grüne Stängel-/Blätterteil (z. B. Lauchzwiebelgrün, Knoblauchgrün, Karottengrün, Selleriestängel) gehört ins **Midday Window** (12:00–18:00).
- Der **unterirdische** Teil (Zwiebelknollen, Knoblauchzehen, Karotten, Sellerieknolle) gehört ins **Evening Window** (18:00–24:00).

---

## 4. Besondere Ausnahmen & Tonika

| Regel | Inhalt |
|---|---|
| **Kiwi & Passionsfrucht** | Werden trotz Rankenwachstum als **Morning (Baum)**-Früchte eingeordnet. |
| **Zitrusfrüchte (09:00–11:00)** | Müssen immer **STRENG ALLEIN** gegessen werden. |
| **Melonen (15:00–17:00)** | Müssen immer **STRENG ALLEIN** gegessen werden. |
| **Mandeln (07:00–09:00)** | Erste Nahrung des Tages (roh & eingeweicht); reguliert Salzsäure. |
| **CAM-Pflanzen** (Ananas, Aloe Vera, Nopales) | Wegen Nachtstoffwechsel ins **Evening**-Fenster. |
| **Adanos Cobalamin Tonic** (Morning) | Arabica-Kaffee + Ahornsirup + dunkler Backkakao (B12-Booster). |
| **Adanos „Heavy Hitter“** (Mitternacht) | Leberreinigungs-Tonikum: 1 Knoblauchzehe, Saft ½ Zitrone & 1 TL Olivenöl. **Exakt um Mitternacht** einnehmen. Bei Durchfall sofort abbrechen. |
| **Forelle** | Sonderausnahme: Midday-Fenster (sonst Meeres-/Wasser-Nahrung eher Evening). |
| **Vanille** | Ranke an Bäumen — sowohl Morning als auch Midday geeignet. |
| **Dual-Zone (Midday & Evening)** | Semolina-Durum-Weizenpasta, Miso, Tamari/Sojasauce, Tofu & Tempeh. |
| **Cayennepfeffer** | Spezialkraut: zu **jeder** Tageszeit; einzige erlaubte Pfefferart (gemahlen). |
| **Kräuter / `isHerb`** | Gelten im Kombinations-Checker als zeitneutral und erzeugen keine Zonen-Konflikte. |
| **Umeboshi-Pflaume** | Morgen-Hormonbalancer, allein verzehren. |
| **Tomatensaft mit Melasse** | Midday-Hormonbalancer. |
| **Ananassaft + Aloe Vera + Tequila** | Abend-Hormonbalancer (sparsam). |
| **Kochbanane** | Morning & Evening Spezialnahrung; muss gekocht werden. |
| **Eier** | Zeitneutral, abends am besten verdaut (in der Evening-Kategorie geführt). |

---

## 5. Strenge Verbote

| Verbot | Begründung / Erlaubte Alternative |
|---|---|
| **Schwarzer / Weißer / Rosa Pfeffer (gemahlen)** | Verboten (Gallenblasen-Schädigung durch Siliziumkristalle). Erlaubt: **Pfeffer-Sud** (ganze Körner aufkochen & durch 3 Kaffeefilter filtern) oder **Cayennepfeffer**. |
| **Fleisch + Milch/Käse** | Niemals Fleisch und Milchprodukte in einer Mahlzeit mischen. |
| **Geschmolzener Käse** | Käse darf nicht stark erhitzt/geschmolzen werden. |
| **Kohlensäure & Frittiertes** | Stark belastend für die Verdauung. |
| **Popcorn mit Hülsen** | Im AI-Chef-Systemkontext explizit als forbidden genannt (`popcorn with hulls`). |

---

## 6. Kombinations-Checker — Logik der App

Quelle: `src/utils/combinationChecker.ts`.

1. **Leerer Teller / < 1 Food:** keine Bewertung.
2. **Vollmond-Tag** (`isFullMoon`) und ≥ 2 Foods: **alle Kombinationen erlaubt** (Erfolg).
3. **`isForbidden`-Food** in der Mahlzeit: Fehler (derzeit sind in `solarDatabase.ts` keine Foods mit `isForbidden: true` hinterlegt; die Prüfung existiert dennoch).
4. Bei ≥ 2 Foods:
   - **Citrus** darf nicht mit anderen Foods kombiniert werden.
   - **Melon** darf nicht mit anderen Foods kombiniert werden.
   - **Meat + Dairy** gleichzeitig → Fehler.
5. Bei genau 1 Food: Hinweis, mehr hinzuzufügen (Erfolg/Info).
6. Bei ≥ 2 Foods ohne obige Konflikte:
   - Foods mit `isHerb` und Foods aus dem **AnyTime**-Fenster werden bei der Zonenprüfung ignoriert.
   - Liegen alle übrigen Foods in **einer** Zone → perfekte Kombination.
   - Liegen sie in mehreren Zonen:
     - **Dawn-Transition:** nur Morning + Midday erlaubt.
     - **Dusk-Transition:** nur Midday + Evening erlaubt.
     - Sonst → Zonen-Mismatch-Fehler.

Zusätzliche UI-Hinweise (`combinationMessages` / `checker`):

- Mischen verschiedener Wachstumszonen außerhalb der Übergangszeiten ist nicht empfohlen.
- Am Vollmond-Tag sind alle Zonenkombinationen erlaubt.
- In aktiver Übergangszeit sind angrenzende Zonen erlaubt.

---

## 7. Mondwochen-Regeln (Lunar Week)

Quelle: `src/utils/lunarCalculator.ts`.

Die **7-Tage-Mondwoche** umfasst die Tage **−3 … +3** relativ zum Vollmond-Kalendertag:

| Tag der Mondwoche | Label | Effekt auf aktives Fenster (wenn Mondwoche aktiviert) |
|---|---|---|
| 1 | Drei Tage vor Vollmond | Fenster **rückwärts** verschieben |
| 2 | Zwei Tage vor Vollmond | Fenster **rückwärts** verschieben |
| 3 | Ein Tag vor Vollmond | Fenster **rückwärts** verschieben |
| 4 | **Vollmond** | **Keine Verschiebung** — alle Wuchszonen & Kombinationen erlaubt |
| 5 | Erster Tag nach Vollmond | Fenster **vorwärts** verschieben |
| 6 | Zweiter Tag nach Vollmond | Fenster **vorwärts** verschieben |
| 7 | Dritter Tag nach Vollmond | Fenster **vorwärts** verschieben |

**Verschiebungsrichtung:**

- **Vor Vollmond (Tage 1–3):** Morning → Evening, Midday → Morning, Evening → Midday  
- **Nach Vollmond (Tage 5–7):** Morning → Midday, Midday → Evening, Evening → Morning  
- **Vollmond-Tag:** unverändert / alles erlaubt  
- Außerhalb der Mondwoche oder wenn der Toggle „Mondwoche“ aus ist: normale Solar-Fenster

---

## 8. Regeln des Solar AI Chefkochs

Quelle: Systemkontext in `public/api/ai-proxy.php` (wird jedem User-Prompt vorangestellt und an Google Gemini gesendet).

```
You are an expert on the Solar Nutrition diet based on the teachings of Adano Ley and Atom Bergstrom.
Core Rules:
1. "It's not WHAT you eat, but WHEN you eat it".
2. Morning (00:00-12:00): Foods from TREES (fruits, nuts, tree oils).
3. Midday (12:00-18:00): Foods from BUSHES/VINES (4+ inches off ground), grains, 2/4-legged land animals.
4. Evening (18:00-24:00): Foods UNDERGROUND, IN WATER, fungi, algae, seafood.
5. Dawn Transition (11:30-12:30): Morning + Midday foods.
6. Dusk Transition (18:00-19:00): Midday + Evening foods.
7. CRITICAL: Kiwi & Passion fruit are MORNING (tree) exception. Citrus alone 9-11am. Melons alone 3-5pm.
8. FORBIDDEN: Ground black pepper (use cayenne), melted cheese, meat + dairy together, popcorn with hulls, carbonated drinks.
```

### Deutsch zusammengefasst (AI-Chef-Regelset)

1. Es kommt nicht darauf an, **was**, sondern **wann** man isst.
2. **Morgen (00:00–12:00):** Baumnahrung (Früchte, Nüsse, Baumöle).
3. **Mittag (12:00–18:00):** Strauch-/Rankennahrung (≥ 4 inches / ~10 cm), Getreide, 2-/4-beinige Landtiere.
4. **Abend (18:00–24:00):** Unter der Erde, im Wasser, Pilze, Algen, Meeresfrüchte.
5. **Dawn (laut AI-Proxy 11:30–12:30):** Morning + Midday.
6. **Dusk (laut AI-Proxy 18:00–19:00):** Midday + Evening.
7. **Kritisch:** Kiwi & Passionsfrucht = Morning-Ausnahme; Zitrus allein 9–11 Uhr; Melonen allein 15–17 Uhr.
8. **Verboten:** gemahlener schwarzer Pfeffer (Cayenne nutzen), geschmolzener Käse, Fleisch + Milchprodukte, Popcorn mit Hülsen, kohlensäurehaltige Getränke.

> Die Night-Bridge (00:30–01:00), die Mondwoche, der Heavy Hitter, CAM-Pflanzen und weitere Guide-Details sind im AI-Proxy-Systemkontext **nicht** explizit enthalten — sie gelten aber weiterhin als App-/Guide-Regeln.

---

## 9. Fenster-Prinzipien (Originaltexte aus der Datenbank)

| Fenster | Zeit | Prinzip | Spezielle Regeln |
|---|---|---|---|
| Morning | 00:00 bis 12:00 Solarzeit | Ernähre Dich von Nahrungsmitteln, die an BÄUMEN wachsen: Früchte & Nüsse. | Zitrusfrüchte nur 09:00 - 11:00 (streng allein). Mandeln am besten als erste Nahrung (07:00-09:00). |
| Midday | 12:00 bis 18:00 Solarzeit | Ernähre Dich von Pflanzen, die an STRÄUCHERN oder RANKEN wachsen (mind. 10cm hoch), Getreide sowie 2- und 4-beinigen Landtieren. | Melonen nur 15:00 - 17:00 (streng allein). Beeren am besten 15:00 - 17:00. |
| Evening | 18:00 bis 24:00 Solarzeit | Ernähre Dich von Nahrungsmitteln, die UNTER DER ERDE oder IM WASSER wachsen, Pilzen sowie Meeresfrüchten. | Keine Zitrus- oder Melonen-Regeln am Abend. Kartoffeln nur am Abend! |
| AnyTime | Ganztägig verwendbar | Zeitneutrale Nahrungsmittel, die zu jeder Tageszeit verzehrt und mit allen Fenstern kombiniert werden können. | In Maßen verzehren. Perfekt zum Verfeinern. |

---

## 10. Nahrungsmittel-Sonderregeln (vollständig aus `solarDatabase.ts`)

### Morning

| Nahrungsmittel (DE) | English | Sonderregel (DE) | Special Rule (EN) |
|---|---|---|---|
| Açaí | Açaí | A berry from a palm tree, best in the Morgen. | A berry from a palm tree, best eaten in the Morning window. |
| Ackee | Ackee | Must be properly ripened and prepared; uncooked or unripe ackee is toxic. | Must be properly ripened and prepared; uncooked or unripe ackee is toxic. |
| Black Sapote | Black Sapote | Also known as the "chocolate pudding fruit". | Also known as the "chocolate pudding fruit". |
| Kiwi | Kiwi | Sonderausnahme: Adano ordnet die Kiwi trotz Rankenwachstum als Morgen (Baum)-Frucht ein. | Special exception: Adano classifies the kiwi as a Morning (Tree) fruit despite its vine growth. |
| Kakaobohnen | Cacao Beans | Vom Kakaobaum, ideal am Morgen. | From the cacao tree, ideal in the Morning window. |
| Kaffee | Coffee (Arabica) | Vom Kaffeebaum, ideal am Morgen. | From the coffee tree, ideal in the Morning window. |
| Orangenblütenhonig | Orange Blossom Honey | Von Baumblüten, am besten morgens. | From tree blossoms, best consumed in the morning. |
| Passionsfrucht | Passion Fruit | Sonderausnahme: Adano ordnet die Passionsfrucht trotz Rankenwachstum als Morgen (Baum)-Frucht ein. | Special exception: Adano classifies passion fruit as a Morning (Tree) fruit despite its vine growth. |
| Grapefruit | Grapefruit | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Zitrone | Lemon | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Limette | Lime | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Orange | Orange | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Pomelo | Pomelo | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Mandarine | Tangerine / Satsuma | STRENG ALLEIN zwischen 09:00 - 11:00 Solarzeit verzehren! | STRICTLY ALONE between 09:00 – 11:00 Solar Time! |
| Mandeln | Almonds | ERSTE NAHRUNG DES TAGES (07:00-09:00 Solarzeit), roh & eingeweicht. Reguliert Salzsäure. | FIRST FOOD OF THE DAY (07:00-09:00 Solar Time), raw & soaked. Regulates stomach acid. |
| Ahornsirup | Maple Syrup | Vom Saft des Ahornbaums. | From the sap of the maple tree. |
| Vanille | Vanilla | Ranke an Bäumen. Sowohl für Morgen als auch Mittag geeignet. | Vine that grows on trees. Suitable for both Morning and Midday windows. |
| Adanos Cobalamin Tonic |  | B12 Booster: Arabica-Kaffee + Ahornsirup + dunkler Backkakao. | B12 Booster: Arabica coffee + maple syrup + dark baking cacao. |
| Umeboshi-Pflaume | Umeboshi Plum | Morgen-Hormonbalancer, allein verzehren. | Morning hormone balancer, eat alone. |
| Calvados | Calvados (Apple Brandy) | Nur 100% aus Äpfeln (Baum). | Only 100% from apples (tree). |
| Kirschwasser | Kirschwasser (Cherry Brandy) | Aus Kirschen (Baum). | Made from cherries (tree). |
| Slivovitz | Slivovitz (Plum Brandy) | Aus Pflaumen (Baum). | Made from plums (tree). |

### Midday

| Nahrungsmittel (DE) | English | Sonderregel (DE) | Special Rule (EN) |
|---|---|---|---|
| Sellerienstängel | Celery Stalks | Die grünen Stängel sind Mittag, die Knolle ist Abend. | The green stalks are Midday; the bulb (celeriac) is Evening. |
| Lauch / Porree | Leek (Green Part) | Grüner Teil ist Mittag, die weiße Knolle ist Abend. | The green part is Midday; the white bulb is Evening. |
| Frühlingszwiebel | Spring Onion (Green Part) | Grüner Teil ist Mittag, das Weiße ist Abend. | The green part is Midday; the white part is Evening. |
| Tomate | Tomato | Wächst an einer Ranke, gilt als Mittag-Nahrung. | Grows on a vine, classified as Midday food. |
| Semolina Durum Wheat Pasta | Semolina Durum Wheat Pasta | Dual-Zone: Sowohl für Mittag als auch Abend geeignet. | Dual-Zone: Suitable for both Midday and Evening windows. |
| Miso | Miso | Dual-Zone: Sowohl für Mittag als auch Abend geeignet. | Dual-Zone: Suitable for both Midday and Evening windows. |
| Tamari / Sojasauce | Tamari / Soy Sauce | Dual-Zone: Sowohl für Mittag als auch Abend geeignet. | Dual-Zone: Suitable for both Midday and Evening windows. |
| Tofu & Tempeh | Tofu & Tempeh | Dual-Zone: Sowohl für Mittag als auch Abend geeignet. | Dual-Zone: Suitable for both Midday and Evening windows. |
| Brombeere | Blackberry | Am besten zwischen 15:00 - 17:00 Solarzeit. | Best between 15:00 – 17:00 Solar Time. |
| Blaubeere | Blueberry | Am besten zwischen 15:00 - 17:00 Solarzeit. | Best between 15:00 – 17:00 Solar Time. |
| Himbeere | Raspberry | Am besten zwischen 15:00 - 17:00 Solarzeit. | Best between 15:00 – 17:00 Solar Time. |
| Erdbeere | Strawberry | Am besten zwischen 15:00 - 17:00 Solarzeit. | Best between 15:00 – 17:00 Solar Time. |
| Weintrauben | Grapes | Am besten zwischen 15:00 - 17:00 Solarzeit. | Best between 15:00 – 17:00 Solar Time. |
| Cantaloupe-Melone | Cantaloupe Melon | STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren! | STRICTLY ALONE between 15:00 – 17:00 Solar Time! |
| Honigmelone | Honeydew Melon | STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren! | STRICTLY ALONE between 15:00 – 17:00 Solar Time! |
| Wassermelone | Watermelon | STRENG ALLEIN zwischen 15:00 - 17:00 Solarzeit verzehren! | STRICTLY ALONE between 15:00 – 17:00 Solar Time! |
| Käse | Cheese | Achtung: Niemals schmelzen und nicht mit Fleisch kombinieren! | Important: Never melt and do not combine with meat! |
| Kefir | Kefir | Mittag-Nahrung, in kleinen Mengen auch Abend möglich. | Midday food; small amounts also possible in the Evening. |
| Milch | Milk | Nicht mit Fleisch kombinieren! | Do not combine with meat! |
| Joghurt | Yogurt | Mittag-Nahrung, in kleinen Mengen zeitneutral. | Midday food; in small amounts time-neutral. |
| Rindfleisch | Beef | Niemals mit Milchprodukten (Milch, Käse) kombinieren! | Never combine with dairy products (milk, cheese)! |
| Hähnchen | Chicken | Niemals mit Milchprodukten kombinieren! | Never combine with dairy products! |
| Forelle | Trout | Sonderausnahme für das Mittag-Fenster. | Special exception for the Midday window. |
| Cayennepfeffer | Cayenne Pepper | SPEZIALKRÄUTER: Zu jeder Tageszeit verwendbar! Einzige erlaubte Pfefferart. | SPECIAL HERB: Usable at any time of day! The only permitted pepper type. |
| Rohrzucker | Unrefined Cane Sugar | Aus Zuckerrohr (Strauch). | From sugar cane (bush). |
| Bier | Beer | Aus Gerste/Getreide. | Made from barley / grain. |
| Gin | Gin | Aus Getreide & Wacholderbeeren. | Made from grain & juniper berries. |
| Rum | Rum | Aus Zuckerrohr. | Made from sugar cane. |
| Whiskey / Bourbon | Whisky / Bourbon | Aus Getreide (Mais, Roggen, Weizen). | Made from grain (maize, rye, wheat). |
| Wein | Wine | Aus Trauben (Ranke). | Made from grapes (vine). |

### Evening

| Nahrungsmittel (DE) | English | Sonderregel (DE) | Special Rule (EN) |
|---|---|---|---|
| Artischockenherz | Artichoke Heart | Das Herz wächst bodennah. | The heart grows close to the ground. |
| Spargel | Asparagus | Abend, da das Wachstum unter der Erde beginnt. | Evening, as growth begins underground. |
| Bambussprossen | Bamboo Shoots | Abend, da das Wachstum unter der Erde beginnt. | Evening, as growth begins underground. |
| Ingwer | Ginger | Achtung: Starker Blutverdünner! | Caution: Powerful blood thinner! |
| Kartoffel | Potato | NUR IM EVENING Fenster! | ONLY IN THE EVENING WINDOW! |
| Erdnüsse | Peanuts | Wachsen unter der Erde. | Grow underground. |
| Aloe Vera Saft | Aloe Vera Juice | CAM-Pflanze, am besten im Abend. | CAM plant, best in the Evening window. |
| Nopales | Nopales (Cactus Pads) | CAM-Pflanze, Abend. | CAM plant, Evening window. |
| Ananas | Pineapple | CAM-Pflanze! Trotz Frucht eine Abend-Nahrung. | CAM plant! Despite being a fruit, classified as Evening food. |
| Ei | Egg | Eier sind zwar zeitneutral, werden aber abends am besten verdaut. | Eggs are time-neutral but are best digested in the evening. |
| Zimt | Cinnamon | Baumrinde -> Abend-Gewürz. | Tree bark → Evening spice. |
| Grobes Kosher-Salz | Kosher Salt | DAS bevorzugte Salz für das Abend-Fenster. | THE preferred salt for the Evening window. |
| Rübenzucker | Unrefined Beet Sugar | Aus Zuckerrüben (Wurzel). | Made from sugar beet (root). |
| Ananassaft + Aloe Vera Saft + Tequila | Pineapple Juice + Aloe Vera Juice + Tequila | Abend-Hormonbalancer. Sparsam verwenden. | Evening hormone balancer. Use sparingly. |
| Kochbanane | Plantain (Cooking Banana) | Morgen & Abend Spezialnahrung. Muss gekocht werden. | Morning & Evening special food. Must be cooked. |
| Tequila | Tequila (100% Agave) | Aus der Agave (Erdpflanze). | Made from agave (earth plant). |
| Vodka aus Kartoffeln | Potato Vodka | Nur wenn 100% aus Kartoffeln. | Only if 100% made from potatoes. |

### AnyTime

| Nahrungsmittel (DE) | English | Sonderregel (DE) | Special Rule (EN) |
|---|---|---|---|
| Brauner Reis | Brown Rice | Zeitneutrales Getreide. | Time-neutral grain. |
| Butter | Butter | Zeitneutrales Fett. | Time-neutral fat. |
| Sahne | Cream | Zeitneutrale Molkerei. | Time-neutral dairy. |
| Ghee | Ghee (Clarified Butter) | Zeitneutrales Fett. | Time-neutral fat. |
| Olivenöl | Olive Oil | Zeitneutrales Öl für alle Fenster. | Time-neutral oil for all windows. |
| Reisnudeln | Rice Noodles (100% Rice) | Zeitneutrale Nudeln. | Time-neutral noodles. |
| Salz | Salt (Kosher) | Bevorzugtes reines Salz für Morgen, Mittag & Dawn. | Preferred pure salt for Morning, Midday & Dawn. |
| Weißer Reis | White Rice | Zeitneutrales Getreide. | Time-neutral grain. |
| Wildreis | Wild Rice | Adano-Empfehlung: 5 Teile brauner Reis + 1 Teil Wildreis für ein vollständiges Protein. |  |
| Weißer Zucker | Refined White Sugar | Zeitneutral, sparsam als Medizin verwenden. | Time-neutral; use sparingly as medicine. |
| Sake | Sake (Rice Wine) | Aus Reis (zeitneutral). | Made from rice (time-neutral). |
| Vodka aus Reis / Soju | Rice Vodka / Soju | Aus Reis (zeitneutral). | Made from rice (time-neutral). |


---

## 11. Quellenverzeichnis im Repo

| Thema | Datei(en) |
|---|---|
| Rules-Guide UI-Texte (DE/EN) | `src/i18n/de.ts`, `src/i18n/en.ts` (`guide.*`, `windowData.*`) |
| Rules-Guide Komponente | `src/components/RulesGuide.tsx` |
| True Solar Time & Transitions | `src/utils/solarCalculator.ts` |
| Mondwoche / Vollmond-Verschiebung | `src/utils/lunarCalculator.ts` |
| Kombinationslogik | `src/utils/combinationChecker.ts` |
| Nahrungsmittel & Sonderregeln | `src/data/solarDatabase.ts` |
| Solar AI Chef System Prompt | `public/api/ai-proxy.php` (`$systemContext`) |
| Domain-Typen | `src/types/solar.ts` |

---

*Ende der extrahierten Regelsammlung.*
