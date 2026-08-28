import React, { useState, useCallback, useEffect, useMemo, type ReactNode } from 'react';
import { UI_DICTIONARIES } from './uiDicts';
import { urFoods } from './locales/ur/foods';
import { bnFoods } from './locales/bn/foods';
import { nlFoods } from './locales/nl/foods';
import { dkFoods } from './locales/dk/foods';
import { seFoods } from './locales/se/foods';
import { esFoods } from './locales/es/foods';
import { frFoods } from './locales/fr/foods';
import { itFoods } from './locales/it/foods';
import { ptFoods } from './locales/pt/foods';
import { trFoods } from './locales/tr/foods';
import { plFoods } from './locales/pl/foods';
import { arFoods } from './locales/ar/foods';
import { hiFoods } from './locales/hi/foods';
import { zhFoods } from './locales/zh/foods';
import { jaFoods } from './locales/ja/foods';
import { noFoods } from './locales/no/foods';
import { ruFoods } from './locales/ru/foods';
import { fiFoods } from './locales/fi/foods';
import { urRecipes } from './locales/ur/recipes';
import { bnRecipes } from './locales/bn/recipes';
import { nlRecipes } from './locales/nl/recipes';
import { dkRecipes } from './locales/dk/recipes';
import { seRecipes } from './locales/se/recipes';
import { esRecipes } from './locales/es/recipes';
import { frRecipes } from './locales/fr/recipes';
import { itRecipes } from './locales/it/recipes';
import { ptRecipes } from './locales/pt/recipes';
import { trRecipes } from './locales/tr/recipes';
import { plRecipes } from './locales/pl/recipes';
import { arRecipes } from './locales/ar/recipes';
import { hiRecipes } from './locales/hi/recipes';
import { zhRecipes } from './locales/zh/recipes';
import { jaRecipes } from './locales/ja/recipes';
import { noRecipes } from './locales/no/recipes';
import { ruRecipes } from './locales/ru/recipes';
import { fiRecipes } from './locales/fi/recipes';
import { SUPPORTED_LANGUAGES } from './languages';
import type { FoodItem, Recipe, RecipeIngredient } from '../types/solar';
import { SOLAR_NUTRITION_DATABASE } from '../data/solarDatabase';
import { I18nContext, type Locale } from './I18nContext';

const uiDicts = UI_DICTIONARIES;
const foodDicts: Record<string, Record<string, { name: string; specialRule?: string }>> = {
  ur: urFoods,
  bn: bnFoods,
  nl: nlFoods,
  dk: dkFoods,
  se: seFoods,
  es: esFoods,
  fr: frFoods,
  it: itFoods,
  pt: ptFoods,
  tr: trFoods,
  pl: plFoods,
  ar: arFoods,
  hi: hiFoods,
  zh: zhFoods,
  ja: jaFoods,
  no: noFoods,
  ru: ruFoods,
  fi: fiFoods,
};
const recipeDicts: Record<string, Record<string, any>> = {
  ur: urRecipes,
  bn: bnRecipes,
  nl: nlRecipes,
  dk: dkRecipes,
  se: seRecipes,
  es: esRecipes,
  fr: frRecipes,
  it: itRecipes,
  pt: ptRecipes,
  tr: trRecipes,
  pl: plRecipes,
  ar: arRecipes,
  hi: hiRecipes,
  zh: zhRecipes,
  ja: jaRecipes,
  no: noRecipes,
  ru: ruRecipes,
  fi: fiRecipes,
};

const STORAGE_KEY = 'solar_nutrition_locale';

function detectBrowserLocale(): Locale {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang')?.toLowerCase();
    if (urlLang) {
      const valid = SUPPORTED_LANGUAGES.some((l) => l.code === urlLang);
      if (valid) return urlLang as Locale;
      if (urlLang === 'da') return 'dk';
      if (urlLang === 'sv') return 'se';
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const valid = SUPPORTED_LANGUAGES.some((l) => l.code === saved);
  if (valid && saved) return saved as Locale;

  if (typeof navigator === 'undefined') return 'en';

  const browserLangs = navigator.languages ? Array.from(navigator.languages) : [navigator.language || 'en'];

  for (const rawLang of browserLangs) {
    if (!rawLang) continue;
    const code = rawLang.split('-')[0].toLowerCase();

    if (SUPPORTED_LANGUAGES.some((l) => l.code === code)) {
      return code as Locale;
    }

    if (code === 'da') return 'dk';
    if (code === 'sv') return 'se';
    if (code === 'nb' || code === 'nn') return 'no';
  }

  return 'en';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(detectBrowserLocale);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === locale) ?? SUPPORTED_LANGUAGES[0];
  const dir = currentLang.dir;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', newLocale);
        window.history.replaceState(null, '', url.toString());
      }
    }
  }, []);

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const dict = uiDicts[locale] || uiDicts['en'] || uiDicts['de'];
    const parts = key.split('.');
    let result: any = dict;
    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        // Fallback chain: English -> German
        let fallback: any = uiDicts['en'];
        let found = true;
        for (const p of parts) {
          if (fallback && typeof fallback === 'object' && p in fallback) {
            fallback = fallback[p];
          } else {
            found = false;
            break;
          }
        }
        if (!found || typeof fallback !== 'string') {
          fallback = uiDicts['de'];
          for (const p of parts) {
            if (fallback && typeof fallback === 'object' && p in fallback) {
              fallback = fallback[p];
            } else {
              return key;
            }
          }
        }
        result = typeof fallback === 'string' ? fallback : key;
        break;
      }
    }
    if (typeof result !== 'string') return key;

    if (vars) {
      return result.replace(/\{{1,2}(\w+)\}{1,2}/g, (_, varKey) =>
        vars[varKey] !== undefined ? String(vars[varKey]) : `{${varKey}}`
      );
    }
    return result;
  }, [locale]);

  const tFood = useCallback((food: FoodItem): { name: string; specialRule?: string } => {
    if (locale === 'de') {
      return { name: food.name, specialRule: food.specialRule };
    }
    if (locale === 'en') {
      return { name: food.nameEN || food.name, specialRule: food.specialRuleEN || food.specialRule };
    }

    const dict = foodDicts[locale];
    if (dict && food.id && dict[food.id]) {
      const entry = dict[food.id];
      return {
        name: entry.name,
        specialRule: entry.specialRule || food.specialRuleEN || food.specialRule,
      };
    }

    return { name: food.nameEN || food.name, specialRule: food.specialRuleEN || food.specialRule };
  }, [locale]);

  const tRecipe = useCallback((recipe: Recipe) => {
    if (locale === 'de') {
      return {
        title: recipe.title,
        description: recipe.description,
        cuisine: recipe.cuisine,
        instructions: recipe.instructions,
        tips: recipe.tips,
      };
    }
    if (locale === 'en') {
      return {
        title: recipe.titleEN || recipe.title,
        description: recipe.descriptionEN || recipe.description,
        cuisine: recipe.cuisineEN || recipe.cuisine,
        instructions: recipe.instructionsEN || recipe.instructions,
        tips: recipe.tipsEN || recipe.tips,
      };
    }

    const dict = recipeDicts[locale];
    if (dict && recipe.id && dict[recipe.id]) {
      const entry = dict[recipe.id];
      return {
        title: entry.title || recipe.titleEN || recipe.title,
        description: entry.description || recipe.descriptionEN || recipe.description,
        cuisine: entry.cuisine || recipe.cuisineEN || recipe.cuisine,
        instructions: entry.instructions || recipe.instructionsEN || recipe.instructions,
        tips: entry.tips || recipe.tipsEN || recipe.tips,
      };
    }

    return {
      title: recipe.titleEN || recipe.title,
      description: recipe.descriptionEN || recipe.description,
      cuisine: recipe.cuisineEN || recipe.cuisine,
      instructions: recipe.instructionsEN || recipe.instructions,
      tips: recipe.tipsEN || recipe.tips,
    };
  }, [locale]);

  const tIngredient = useCallback((ing: RecipeIngredient) => {
    const rawName = ing.name.toLowerCase();
    const rawEN = ing.nameEN?.toLowerCase();

    let matchedFood: FoodItem | undefined;
    for (const w of SOLAR_NUTRITION_DATABASE) {
      for (const cat of w.categories) {
        for (const f of cat.foods) {
          if (
            f.id === ing.name ||
            f.name.toLowerCase() === rawName ||
            (f.nameEN && f.nameEN.toLowerCase() === rawName) ||
            (rawEN && f.name.toLowerCase() === rawEN) ||
            (rawEN && f.nameEN && f.nameEN.toLowerCase() === rawEN)
          ) {
            matchedFood = f;
            break;
          }
        }
        if (matchedFood) break;
      }
      if (matchedFood) break;
    }

    const name = matchedFood
      ? tFood(matchedFood).name
      : (locale === 'de' ? ing.name : (ing.nameEN || ing.name));

    const rawAmount = (ing.amountEN && locale !== 'de') ? ing.amountEN : ing.amount;

    const formatAmount = (amountStr: string, loc: string): string => {
      if (!amountStr) return '';
      if (loc === 'de') return amountStr;

      const unitTranslations: Record<string, Record<string, string>> = {
        stk: {
          en: 'pc', es: 'pza', it: 'pz', fr: 'pièce', ja: '個', zh: '个', tr: 'adet',
          ar: 'قطعة', ur: 'عدد', hi: 'नग', bn: 'টি', pt: 'un', ru: 'шт.', pl: 'szt.',
          nl: 'st.', dk: 'stk.', se: 'st', no: 'stk.', fi: 'kpl'
        },
        el: {
          en: 'tbsp', es: 'cda', it: 'cucch.', fr: 'c. à s.', ja: '大さじ', zh: '大匙', tr: 'y.k.',
          ar: 'م.ك', ur: 'چمچ', hi: 'बड़ा चम्मच', bn: 'টেবিল চামচ', pt: 'c. sopa', ru: 'ст. л.', pl: 'łyżka',
          nl: 'el', dk: 'spisestk.', se: 'msk', no: 'spiseskjed', fi: 'rkl'
        },
        tl: {
          en: 'tsp', es: 'cdta', it: 'cucchiaino', fr: 'c. à c.', ja: '小さじ', zh: '小匙', tr: 't.k.',
          ar: 'م.ص', ur: 'چائے چمچ', hi: 'छोटा चम्मच', bn: 'চা চামচ', pt: 'c. chá', ru: 'ч. л.', pl: 'łyżeczka',
          nl: 'tl', dk: 'tesk.', se: 'tsk', no: 'teskjed', fi: 'tl'
        },
        prise: {
          en: 'pinch', es: 'pizca', it: 'pizzico', fr: 'pincée', ja: 'ひとつまみ', zh: '一捏', tr: 'tutam',
          ar: 'رشة', ur: 'چٹکی', hi: 'चुटकी', bn: 'এক চিমটি', pt: 'pitada', ru: 'щепотка', pl: 'szczypta',
          nl: 'snufje', dk: 'knivspids', se: 'nypa', no: 'klype', fi: 'ripaus'
        },
        zehe: {
          en: 'clove', es: 'diente', it: 'spicchio', fr: 'gousse', ja: 'かけ', zh: '瓣', tr: 'diş',
          ar: 'فص', ur: 'جو', hi: 'कली', bn: 'কোয়া', pt: 'dente', ru: 'зубчик', pl: 'ząbek',
          nl: 'teentje', dk: 'fed', se: 'klyfta', no: 'fedd', fi: 'kynsi'
        },
        zehen: {
          en: 'cloves', es: 'dientes', it: 'spicchi', fr: 'gousses', ja: 'かけ', zh: '瓣', tr: 'diş',
          ar: 'فصوص', ur: 'جو', hi: 'कलियाँ', bn: 'কোয়া', pt: 'dentes', ru: 'зубчика', pl: 'ząbki',
          nl: 'tenen', dk: 'fed', se: 'klyftor', no: 'fedd', fi: 'kynttä'
        },
        bund: {
          en: 'bunch', es: 'manojo', it: 'mazzetto', fr: 'botte', ja: '束', zh: '束', tr: 'demet',
          ar: 'حزمة', ur: 'گٹھا', hi: 'गुच्छा', bn: 'আঁটি', pt: 'maço', ru: 'пучок', pl: 'pęczek',
          nl: 'bosje', dk: 'bundt', se: 'knippe', no: 'bunt', fi: 'nippu'
        },
        dose: {
          en: 'can', es: 'lata', it: 'lattina', fr: 'boîte', ja: '缶', zh: '罐', tr: 'kutu',
          ar: 'علبة', ur: 'کین', hi: 'कैन', bn: 'ক্যান', pt: 'lata', ru: 'банка', pl: 'puszka',
          nl: 'blik', dk: 'dåse', se: 'burk', no: 'boks', fi: 'tölkki'
        },
        dosen: {
          en: 'cans', es: 'latas', it: 'lattine', fr: 'boîtes', ja: '缶', zh: '罐', tr: 'kutu',
          ar: 'علب', ur: 'کین', hi: 'कैन', bn: 'क্যান', pt: 'latas', ru: 'банки', pl: 'puszki',
          nl: 'blikken', dk: 'dåser', se: 'burkar', no: 'bokser', fi: 'tölkkiä'
        },
        scheibe: {
          en: 'slice', es: 'rodaja', it: 'fetta', fr: 'tranche', ja: '枚', zh: '片', tr: 'dilim',
          ar: 'شريحة', ur: 'ٹکڑا', hi: 'स्लाइस', bn: 'টুকরো', pt: 'fatia', ru: 'ломтик', pl: 'plaster',
          nl: 'plakje', dk: 'skive', se: 'skiva', no: 'skive', fi: 'viipale'
        },
        scheiben: {
          en: 'slices', es: 'rodajas', it: 'fette', fr: 'tranches', ja: '枚', zh: '片', tr: 'dilim',
          ar: 'شرائح', ur: 'ٹکڑے', hi: 'स्लाइस', bn: 'টুকরো', pt: 'fatias', ru: 'ломтика', pl: 'plastry',
          nl: 'plakjes', dk: 'skiver', se: 'skivor', no: 'skiver', fi: 'viipaletta'
        },
        handvoll: {
          en: 'handful', es: 'puñado', it: 'pugno', fr: 'poignée', ja: 'ひとつの', zh: '一把', tr: 'avuç',
          ar: 'حفنة', ur: 'مٹھی', hi: 'मुट्ठी', bn: 'মুঠো', pt: 'puñado', ru: 'горсть', pl: 'garść',
          nl: 'handvol', dk: 'håndfuld', se: 'handfull', no: 'håndfull', fi: 'kourallinen'
        },
        nachgeschmack: {
          en: 'to taste', es: 'al gusto', it: 'q.b.', fr: 'selon le goût', ja: 'お好みで', zh: '适量', tr: 'damak tadına göre',
          ar: 'حسب الرغبة', ur: 'حسب ذائقہ', hi: 'स्वादानुसार', bn: 'স্বাদমতো', pt: 'a gosto', ru: 'по вкусу', pl: 'do smaku',
          nl: 'naar smaak', dk: 'efter smag', se: 'efter smak', no: 'etter smak', fi: 'maun mukaan'
        }
      };

      let formatted = amountStr;

      if (formatted.toLowerCase().includes('nach geschmack')) {
        const tr = unitTranslations.nachgeschmack[loc] || unitTranslations.nachgeschmack.en;
        return formatted.replace(/nach geschmack/gi, tr);
      }

      formatted = formatted
        .replace(/(\d+)\s*(?:Stk\.?|Stück)/gi, (_, n) => {
          const u = unitTranslations.stk[loc] || unitTranslations.stk.en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*EL\b/gi, (_, n) => {
          const u = unitTranslations.el[loc] || unitTranslations.el.en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*TL\b/gi, (_, n) => {
          const u = unitTranslations.tl[loc] || unitTranslations.tl.en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*(?:Prise|Prisen)\b/gi, (_, n) => {
          const u = unitTranslations.prise[loc] || unitTranslations.prise.en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*Zehen?\b/gi, (_, n) => {
          const num = parseInt(n, 10);
          const key = num === 1 ? 'zehe' : 'zehen';
          const u = unitTranslations[key][loc] || unitTranslations[key].en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*Bund\b/gi, (_, n) => {
          const u = unitTranslations.bund[loc] || unitTranslations.bund.en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*Dosen?\b/gi, (_, n) => {
          const num = parseInt(n, 10);
          const key = num === 1 ? 'dose' : 'dosen';
          const u = unitTranslations[key][loc] || unitTranslations[key].en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*Scheiben?\b/gi, (_, n) => {
          const num = parseInt(n, 10);
          const key = num === 1 ? 'scheibe' : 'scheiben';
          const u = unitTranslations[key][loc] || unitTranslations[key].en;
          return `${n} ${u}`;
        })
        .replace(/(\d+)\s*Handvoll\b/gi, (_, n) => {
          const u = unitTranslations.handvoll[loc] || unitTranslations.handvoll.en;
          return `${n} ${u}`;
        });

      return formatted;
    };

    const amount = formatAmount(rawAmount, locale);

    return { name, amount };
  }, [locale, tFood]);

  const tFoodType = useCallback((type: string): string => {
    const dict = uiDicts[locale] || uiDicts['de'];
    if (dict && dict.foodTypes && dict.foodTypes[type]) {
      return dict.foodTypes[type];
    }
    const deDict = uiDicts['de'];
    if (deDict && deDict.foodTypes && deDict.foodTypes[type]) {
      return deDict.foodTypes[type];
    }
    return type;
  }, [locale]);

  const lunarKeyMap: Record<string, string> = useMemo(() => ({
    'Neumond': 'newMoon',
    'Zunehmende Sichel': 'waxingCrescent',
    'Erstes Viertel': 'firstQuarter',
    'Zunehmender Mond': 'waxingGibbous',
    'Vollmond': 'fullMoon',
    'Abnehmender Mond': 'waningGibbous',
    'Letztes Viertel': 'lastQuarter',
    'Abnehmende Sichel': 'waningCrescent',
    'Drei Tage vor Vollmond': 'dayMinus3',
    'Zwei Tage vor Vollmond': 'dayMinus2',
    'Ein Tag vor Vollmond': 'dayMinus1',
    'Erster Tag nach Vollmond': 'dayPlus1',
    'Zweiter Tag nach Vollmond': 'dayPlus2',
    'Dritter Tag nach Vollmond': 'dayPlus3',
  }), []);

  const tLunar = useCallback((str: string): string => {
    if (!str) return '';
    const key = lunarKeyMap[str];
    if (key) return t(`lunar.${key}`);
    return t(str);
  }, [lunarKeyMap, t]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tFood, tRecipe, tIngredient, tFoodType, tLunar, dir }}>
      {children}
    </I18nContext.Provider>
  );
};
