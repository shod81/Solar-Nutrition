import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Search, Clock, Users, Flame, BookOpen, ChevronRight, Printer, Heart, Globe, Share2, Check, ShoppingCart } from 'lucide-react';
import { PRELOADED_RECIPES } from '../data/preloadedRecipes';
import type { Recipe, RecipeIngredient, WindowId } from '../types/solar';
import { useTranslation } from '../i18n';

interface RecipeCatalogProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
  activeSolarWindow: WindowId;
  onAddRecipeToShoppingList?: (recipe: Recipe, multiplier: number) => void;
}

export const RecipeCatalog: React.FC<RecipeCatalogProps> = ({
  favoriteRecipes,
  onToggleFavorite,
  activeSolarWindow,
  onAddRecipeToShoppingList,
}) => {
  const { t, tRecipe, tIngredient, locale } = useTranslation();
  const [showAddedToShoppingToast, setShowAddedToShoppingToast] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const rId = params.get('recipe');
      if (rId) {
        return PRELOADED_RECIPES.find((r) => r.id === rId) || null;
      }
    }
    return null;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWindowFilter, setSelectedWindowFilter] = useState<string>('All');
  const [selectedDietFilter, setSelectedDietFilter] = useState<string>('All');
  const [selectedCuisineFilter, setSelectedCuisineFilter] = useState<string>('All');
  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const [isFridgeMode, setIsFridgeMode] = useState<boolean>(false);
  const [selectedFridgeIngredients, setSelectedFridgeIngredients] = useState<string[]>([]);
  const [fridgeCatFilter, setFridgeCatFilter] = useState<'all' | 'veggies' | 'fruits' | 'nuts' | 'grains' | 'proteins'>('all');
  const [fridgeSearch, setFridgeSearch] = useState<string>('');

  const FRIDGE_INGREDIENTS_CATALOG = useMemo(
    () => [
      // Gemüse & Pilze
      { de: 'Avocado', en: 'Avocado', icon: '🥑', cat: 'veggies' },
      { de: 'Zucchini', en: 'Zucchini', icon: '🥒', cat: 'veggies' },
      { de: 'Tomate', en: 'Tomato', icon: '🍅', cat: 'veggies' },
      { de: 'Spinat', en: 'Spinach', icon: '🥬', cat: 'veggies' },
      { de: 'Brokkoli', en: 'Broccoli', icon: '🥦', cat: 'veggies' },
      { de: 'Blumenkohl', en: 'Cauliflower', icon: '🥦', cat: 'veggies' },
      { de: 'Süßkartoffel', en: 'Sweet Potato', icon: '🍠', cat: 'veggies' },
      { de: 'Kürbis', en: 'Pumpkin', icon: '🎃', cat: 'veggies' },
      { de: 'Karotte', en: 'Carrot', icon: '🥕', cat: 'veggies' },
      { de: 'Paprika', en: 'Bell Pepper', icon: '🫑', cat: 'veggies' },
      { de: 'Gurke', en: 'Cucumber', icon: '🥒', cat: 'veggies' },
      { de: 'Aubergine', en: 'Eggplant', icon: '🍆', cat: 'veggies' },
      { de: 'Rote Bete', en: 'Beetroot', icon: '🧅', cat: 'veggies' },
      { de: 'Zwiebel', en: 'Onion', icon: '🧅', cat: 'veggies' },
      { de: 'Knoblauch', en: 'Garlic', icon: '🧄', cat: 'veggies' },
      { de: 'Steinpilze', en: 'Porcini Mushrooms', icon: '🍄', cat: 'veggies' },
      { de: 'Champignons', en: 'Button Mushrooms', icon: '🍄', cat: 'veggies' },
      { de: 'Fenchel', en: 'Fennel', icon: '🌿', cat: 'veggies' },
      { de: 'Lauch', en: 'Leek', icon: '🥬', cat: 'veggies' },

      // Obst & Baumfrüchte
      { de: 'Apfel', en: 'Apple', icon: '🍎', cat: 'fruits' },
      { de: 'Banane', en: 'Banana', icon: '🍌', cat: 'fruits' },
      { de: 'Feige', en: 'Fig', icon: '🍇', cat: 'fruits' },
      { de: 'Zitrone', en: 'Lemon', icon: '🍋', cat: 'fruits' },
      { de: 'Orange', en: 'Orange', icon: '🍊', cat: 'fruits' },
      { de: 'Birne', en: 'Pear', icon: '🍐', cat: 'fruits' },
      { de: 'Mango', en: 'Mango', icon: '🥭', cat: 'fruits' },
      { de: 'Papaya', en: 'Papaya', icon: '🥭', cat: 'fruits' },
      { de: 'Dattel', en: 'Date', icon: '🌴', cat: 'fruits' },
      { de: 'Erdbeere', en: 'Strawberry', icon: '🍓', cat: 'fruits' },
      { de: 'Blaubeere', en: 'Blueberry', icon: '🫐', cat: 'fruits' },
      { de: 'Oliven', en: 'Olives', icon: '🫒', cat: 'fruits' },

      // Nüsse & Saaten
      { de: 'Walnuss', en: 'Walnut', icon: '🥜', cat: 'nuts' },
      { de: 'Mandel', en: 'Almond', icon: '🥜', cat: 'nuts' },
      { de: 'Mandelmus', en: 'Almond Butter', icon: '🍯', cat: 'nuts' },
      { de: 'Cashew', en: 'Cashew', icon: '🥜', cat: 'nuts' },
      { de: 'Sesam', en: 'Sesame', icon: '⚪', cat: 'nuts' },
      { de: 'Kürbiskerne', en: 'Pumpkin Seeds', icon: '🎃', cat: 'nuts' },
      { de: 'Sonnenblumenkerne', en: 'Sunflower Seeds', icon: '🌻', cat: 'nuts' },
      { de: 'Kokosnuss', en: 'Coconut', icon: '🥥', cat: 'nuts' },

      // Getreide & Hülsenfrüchte
      { de: 'Dinkel', en: 'Spelt', icon: '🌾', cat: 'grains' },
      { de: 'Hafer', en: 'Oats', icon: '🌾', cat: 'grains' },
      { de: 'Reis', en: 'Rice', icon: '🍚', cat: 'grains' },
      { de: 'Kichererbsen', en: 'Chickpeas', icon: '🫘', cat: 'grains' },
      { de: 'Linsen', en: 'Lentils', icon: '🫘', cat: 'grains' },
      { de: 'Quinoa', en: 'Quinoa', icon: '🌾', cat: 'grains' },
      { de: 'Buchweizen', en: 'Buckwheat', icon: '🌾', cat: 'grains' },

      // Proteine & Fette
      { de: 'Lachs', en: 'Salmon', icon: '🐟', cat: 'proteins' },
      { de: 'Thunfisch', en: 'Tuna', icon: '🐟', cat: 'proteins' },
      { de: 'Garnelen', en: 'Shrimp', icon: '🦐', cat: 'proteins' },
      { de: 'Pute', en: 'Turkey', icon: '🍗', cat: 'proteins' },
      { de: 'Hähnchen', en: 'Chicken', icon: '🍗', cat: 'proteins' },
      { de: 'Eier', en: 'Eggs', icon: '🥚', cat: 'proteins' },
      { de: 'Halloumi', en: 'Halloumi', icon: '🧀', cat: 'proteins' },
      { de: 'Ghee', en: 'Ghee', icon: '🧈', cat: 'proteins' },
      { de: 'Olivenöl', en: 'Olive Oil', icon: '🫒', cat: 'proteins' },
      { de: 'Butter', en: 'Butter', icon: '🧈', cat: 'proteins' },
      { de: 'Joghurt', en: 'Yogurt', icon: '🥛', cat: 'proteins' },
    ],
    []
  );

  const toggleFridgeIngredient = (ingName: string) => {
    setSelectedFridgeIngredients((prev) =>
      prev.includes(ingName) ? prev.filter((i) => i !== ingName) : [...prev, ingName]
    );
    setSelectedRecipe(null);
  };

  // Localization helpers
  const getRecipeTitle = useCallback((r: Recipe) => tRecipe(r).title, [tRecipe]);
  const getRecipeDesc = useCallback((r: Recipe) => tRecipe(r).description, [tRecipe]);
  const getRecipeCuisine = useCallback((r: Recipe) => tRecipe(r).cuisine, [tRecipe]);
  const getRecipeInstructions = useCallback((r: Recipe) => tRecipe(r).instructions, [tRecipe]);
  const getRecipeTips = useCallback((r: Recipe) => tRecipe(r).tips, [tRecipe]);
  const getIngredientName = useCallback((ing: RecipeIngredient) => tIngredient(ing).name, [tIngredient]);
  const getIngredientAmount = useCallback((ing: RecipeIngredient) => tIngredient(ing).amount, [tIngredient]);

  const getFridgeMatchCount = useCallback(
    (recipe: Recipe) => {
      if (selectedFridgeIngredients.length === 0) return 0;
      const rTitle = (tRecipe(recipe).title || '').toLowerCase();
      const rDesc = (tRecipe(recipe).description || '').toLowerCase();
      const rTags = (recipe.tags || []).map((t) => t.toLowerCase());
      const rIngs = recipe.ingredients.map((ing) => (tIngredient(ing).name || '').toLowerCase());

      let count = 0;
      selectedFridgeIngredients.forEach((selIng) => {
        const target = selIng.toLowerCase();
        const inIngs = rIngs.some((ing) => ing.includes(target));
        const inTitle = rTitle.includes(target);
        const inDesc = rDesc.includes(target);
        const inTags = rTags.some((t) => t.includes(target));
        if (inIngs || inTitle || inDesc || inTags) {
          count++;
        }
      });
      return count;
    },
    [selectedFridgeIngredients, tRecipe, tIngredient]
  );
  const getWindowLabel = (w: string) => {
    if (w === 'Morning') return t('windows.Morning');
    if (w === 'Midday') return t('windows.Midday');
    if (w === 'Evening') return t('windows.Evening');
    if (w === 'Dawn Transition') return t('recipes.filterDawn');
    if (w === 'Dusk Transition') return t('recipes.filterDusk');
    if (w === 'Night Transition') return t('recipes.filterNight');
    return w;
  };

  const getDietLabel = (d: string) => {
    if (d === 'Omnivore') return t('recipes.filterOmni');
    if (d === 'Vegetarian') return t('recipes.filterVeg');
    if (d === 'Vegan') return t('recipes.filterVegan');
    return d;
  };

  const getCanonicalCuisineCode = (c: string): string => {
    const lc = (c || '').toLowerCase();
    if (lc.includes('deutsch') || lc.includes('german') || lc.includes('bayerisch') || lc.includes('alemann') || lc.includes('alemán') || lc.includes('tedesca')) return 'German';
    if (lc.includes('italien') || lc.includes('italian') || lc.includes('italiana')) return 'Italian';
    if (lc.includes('spanisch') || lc.includes('spanish') || lc.includes('español') || lc.includes('spagnol')) return 'Spanish';
    if (lc.includes('griech') || lc.includes('greek') || lc.includes('griego') || lc.includes('greca') || lc.includes('grecq')) return 'Greek';
    if (lc.includes('französisch') || lc.includes('french') || lc.includes('francé') || lc.includes('français')) return 'French';
    if (lc.includes('chinesisch') || lc.includes('chinese') || lc.includes('chino') || lc.includes('cinese')) return 'Chinese';
    if (lc.includes('mexik') || lc.includes('mexican') || lc.includes('mexicano') || lc.includes('messican')) return 'Mexican';
    if (lc.includes('indisch') || lc.includes('indian') || lc.includes('indio') || lc.includes('indien')) return 'Indian';
    if (lc.includes('japan') || lc.includes('japoné') || lc.includes('giappon')) return 'Japanese';
    if (lc.includes('türkisch') || lc.includes('turkish') || lc.includes('turco') || lc.includes('turque')) return 'Turkish';
    if (lc.includes('britisch') || lc.includes('british') || lc.includes('britán') || lc.includes('schott')) return 'British';
    if (lc.includes('amerikan') || lc.includes('american') || lc.includes('americano') || lc.includes('améric')) return 'American';
    if (lc.includes('vietnam')) return 'Vietnamese';
    if (lc.includes('belgisch') || lc.includes('belgian') || lc.includes('belga') || lc.includes('belge')) return 'Belgian';
    if (lc.includes('österreich') || lc.includes('austrian') || lc.includes('austriac') || lc.includes('autrich')) return 'Austrian';
    if (lc.includes('schweiz') || lc.includes('swiss') || lc.includes('suizo') || lc.includes('svizz') || lc.includes('suisse')) return 'Swiss';
    if (lc.includes('schwed') || lc.includes('swedish') || lc.includes('sueco') || lc.includes('svedes') || lc.includes('suéd')) return 'Swedish';
    if (lc.includes('polnisch') || lc.includes('polish') || lc.includes('polaco') || lc.includes('polacc') || lc.includes('polon')) return 'Polish';
    if (lc.includes('portugies') || lc.includes('portuguese') || lc.includes('portugué') || lc.includes('portoghes') || lc.includes('brasil')) return 'Portuguese';
    if (lc.includes('ungarisch') || lc.includes('hungarian') || lc.includes('húngaro') || lc.includes('ungherese') || lc.includes('hongroi')) return 'Hungarian';
    if (lc.includes('marokk') || lc.includes('moroccan') || lc.includes('marroqu') || lc.includes('marocc') || lc.includes('maroc')) return 'Moroccan';
    if (lc.includes('argentin')) return 'Argentinian';
    if (lc.includes('peru')) return 'Peruvian';
    if (lc.includes('thailänd') || lc.includes('thai') || lc.includes('tailan') || lc.includes('thaï')) return 'Thai';
    if (lc.includes('asiat') || lc.includes('asian') || lc.includes('asiát')) return 'Asian';
    if (lc.includes('europ') || lc.includes('europé')) return 'European';
    if (lc.includes('mediterran') || lc.includes('mediterrán') || lc.includes('méditerr')) return 'Mediterranean';
    if (lc.includes('solar') || lc.includes('spezialit') || lc.includes('specialty')) return 'Solar Specialty';
    if (lc.includes('internat')) return 'International';
    return c || 'International';
  };

  const getLocalizedCuisineName = useCallback((code: string): string => {
    const canonical = getCanonicalCuisineCode(code);
    const cuisineNames: Record<string, Record<string, string>> = {
      German: {
        de: 'Deutsch', en: 'German', es: 'Alemán', it: 'Tedesca', fr: 'Allemande',
        ja: 'ドイツ料理', zh: '德国料理', tr: 'Alman', ar: 'ألماني', ur: 'جرمن',
        hi: 'जर्मन', bn: 'জার্মান', pt: 'Alemã', ru: 'Немецкая', pl: 'Niemiecka',
        nl: 'Duits', dk: 'Tysk', se: 'Tysk', no: 'Tysk', fi: 'Saksalainen'
      },
      Italian: {
        de: 'Italienisch', en: 'Italian', es: 'Italiano', it: 'Italiana', fr: 'Italienne',
        ja: 'イタリア料理', zh: '意大利料理', tr: 'İtalyan', ar: 'إيطالي', ur: 'اطالوی',
        hi: 'इतालवी', bn: 'ইতালীয়', pt: 'Italiana', ru: 'Итальянская', pl: 'Włoska',
        nl: 'Italiaans', dk: 'Italiensk', se: 'Italiensk', no: 'Italiensk', fi: 'Italialainen'
      },
      Spanish: {
        de: 'Spanisch', en: 'Spanish', es: 'Español', it: 'Spagnola', fr: 'Espagnole',
        ja: 'スペイン料理', zh: '西班牙料理', tr: 'İspanyol', ar: 'إسباني', ur: 'ہسپانوی',
        hi: 'स्पैनिश', bn: 'স্প্যানিশ', pt: 'Espanhola', ru: 'Испанская', pl: 'Hiszpańska',
        nl: 'Spaans', dk: 'Spansk', se: 'Spansk', no: 'Spansk', fi: 'Espanjalainen'
      },
      French: {
        de: 'Französisch', en: 'French', es: 'Francés', it: 'Francese', fr: 'Française',
        ja: 'フランス料理', zh: '法国料理', tr: 'Fransız', ar: 'فرنسي', ur: 'فرانسیسی',
        hi: 'फ़्रेंच', bn: 'ফরাসি', pt: 'Francesa', ru: 'Французская', pl: 'Francuska',
        nl: 'Frans', dk: 'Fransk', se: 'Fransk', no: 'Fransk', fi: 'Ranskalainen'
      },
      Greek: {
        de: 'Griechisch', en: 'Greek', es: 'Griego', it: 'Greca', fr: 'Grecque',
        ja: 'ギリシャ料理', zh: '希腊料理', tr: 'Yunan', ar: 'يوناني', ur: 'يوناني',
        hi: 'ग्रीक', bn: 'গ্রীক', pt: 'Grega', ru: 'Греческая', pl: 'Grecka',
        nl: 'Grieks', dk: 'Græsk', se: 'Grekisk', no: 'Gresk', fi: 'Kreikkalainen'
      },
      Chinese: {
        de: 'Chinesisch', en: 'Chinese', es: 'Chino', it: 'Cinese', fr: 'Chinoise',
        ja: '中华料理', zh: '中餐', tr: 'Çin', ar: 'صيني', ur: 'چینی',
        hi: 'चीनी', bn: 'চীনা', pt: 'Chinesa', ru: 'Китайская', pl: 'Chińska',
        nl: 'Chinees', dk: 'Kinesisk', se: 'Kinesisk', no: 'Kinesisk', fi: 'Kiinalainen'
      },
      Mexican: {
        de: 'Mexikanisch', en: 'Mexican', es: 'Mexicano', it: 'Messicana', fr: 'Mexicaine',
        ja: 'メキシコ料理', zh: '墨西哥料理', tr: 'Meksika', ar: 'مكسيكي', ur: 'میکسیکن',
        hi: 'मेक्सिकन', bn: 'মেক্সিকান', pt: 'Mexicana', ru: 'Мексиканская', pl: 'Meksykańska',
        nl: 'Mexicaans', dk: 'Mexikansk', se: 'Mexikansk', no: 'Meksikansk', fi: 'Meksikolainen'
      },
      Indian: {
        de: 'Indisch', en: 'Indian', es: 'Indio', it: 'Indiana', fr: 'Indienne',
        ja: 'インド料理', zh: '印度料理', tr: 'Hint', ar: 'هندي', ur: 'ہندوستانی',
        hi: 'भारतीय', bn: 'ভারতীয়', pt: 'Indiana', ru: 'Индийская', pl: 'Indyjska',
        nl: 'Indiaas', dk: 'Indisk', se: 'Indisk', no: 'Indisk', fi: 'Intialainen'
      },
      Japanese: {
        de: 'Japanisch', en: 'Japanese', es: 'Japonés', it: 'Giapponese', fr: 'Japonaise',
        ja: '日本料理', zh: '日本料理', tr: 'Japon', ar: 'ياباني', ur: 'جاپانی',
        hi: 'जापानी', bn: 'जাপানি', pt: 'Japonesa', ru: 'Японская', pl: 'Japońska',
        nl: 'Japans', dk: 'Japansk', se: 'Japansk', no: 'Japansk', fi: 'Japanilainen'
      },
      Turkish: {
        de: 'Türkisch', en: 'Turkish', es: 'Turco', it: 'Turca', fr: 'Turque',
        ja: 'トルコ料理', zh: '土耳其料理', tr: 'Türk', ar: 'تركي', ur: 'ترکی',
        hi: 'तुर्की', bn: 'তুর্কি', pt: 'Turca', ru: 'Турецкая', pl: 'Turecka',
        nl: 'Turks', dk: 'Tyrkisk', se: 'Turkisk', no: 'Tyrkisk', fi: 'Turkkilainen'
      },
      British: {
        de: 'Britisch', en: 'British', es: 'Británico', it: 'Britannica', fr: 'Britannique',
        ja: 'イギリス料理', zh: '英国料理', tr: 'İngiliz', ar: 'بريطاني', ur: 'برطانوی',
        hi: 'ब्रिटिश', bn: 'ব্রিটিশ', pt: 'Britânica', ru: 'Британская', pl: 'Brytyjska',
        nl: 'Brits', dk: 'Britisk', se: 'Brittisk', no: 'Britisk', fi: 'Brittiläinen'
      },
      American: {
        de: 'Amerikanisch', en: 'American', es: 'Americano', it: 'Americana', fr: 'Américaine',
        ja: 'アメリカ料理', zh: '美式料理', tr: 'Amerikan', ar: 'أمريكي', ur: 'امریکی',
        hi: 'अमेरिकी', bn: 'আমেরিকান', pt: 'Americana', ru: 'Американская', pl: 'Amerykańska',
        nl: 'Amerikaans', dk: 'Amerikansk', se: 'Amerikansk', no: 'Amerikansk', fi: 'Amerikkalainen'
      },
      Vietnamese: {
        de: 'Vietnamesisch', en: 'Vietnamese', es: 'Vietnamita', it: 'Vietnamita', fr: 'Vietnamienne',
        ja: 'ベトナム料理', zh: '越南料理', tr: 'Vietnam', ar: 'فيتنامي', ur: 'ویتنامی',
        hi: 'वियतनामी', bn: 'ভিয়েতনামী', pt: 'Vietnamita', ru: 'Вьетнамская', pl: 'Wietnamska',
        nl: 'Vietnamees', dk: 'Vietnamesisk', se: 'Vietnamesisk', no: 'Vietnamesisk', fi: 'Vietnamilainen'
      },
      Belgian: {
        de: 'Belgisch', en: 'Belgian', es: 'Bélga', it: 'Belga', fr: 'Belge',
        ja: 'ベルギー料理', zh: '比利时料理', tr: 'Belçika', ar: 'بلجيكي', ur: 'بلجیمی',
        hi: 'बेल्जियम', bn: 'বেলজিয়ান', pt: 'Belga', ru: 'Бельгийская', pl: 'Belgijska',
        nl: 'Belgisch', dk: 'Belgisk', se: 'Belgisk', no: 'Belgisk', fi: 'Belgialainen'
      },
      Austrian: {
        de: 'Österreichisch', en: 'Austrian', es: 'Austriaco', it: 'Austriaca', fr: 'Autrichienne',
        ja: 'オーストリア料理', zh: '奥地利料理', tr: 'Avusturya', ar: 'نمساوي', ur: 'آسٹریائی',
        hi: 'ऑस्ट्रियाई', bn: 'অস্ট্রিয়ান', pt: 'Austríaca', ru: 'Австрийская', pl: 'Austriacka',
        nl: 'Oostenrijks', dk: 'Østrigsk', se: 'Österrikisk', no: 'Østerriksk', fi: 'Itävaltalainen'
      },
      Swiss: {
        de: 'Schweizerisch', en: 'Swiss', es: 'Suizo', it: 'Svizzera', fr: 'Suisse',
        ja: 'スイス料理', zh: '瑞士料理', tr: 'İsviçre', ar: 'سويسري', ur: 'سوئس',
        hi: 'स्विस', bn: 'সুইস', pt: 'Suíça', ru: 'Швейцарская', pl: 'Szwajcarska',
        nl: 'Zwitsers', dk: 'Schweizisk', se: 'Schweizisk', no: 'Sveitsisk', fi: 'Sveitsiläinen'
      },
      Swedish: {
        de: 'Schwedisch', en: 'Swedish', es: 'Sueco', it: 'Svedese', fr: 'Suédoise',
        ja: 'スウェーデン料理', zh: '瑞典料理', tr: 'İsveç', ar: 'سويدي', ur: 'سویڈش',
        hi: 'स्वीडिश', bn: 'সুইডিশ', pt: 'Sueca', ru: 'Шведская', pl: 'Szwedzka',
        nl: 'Zweeds', dk: 'Svensk', se: 'Svensk', no: 'Svensk', fi: 'Ruotsalainen'
      },
      Polish: {
        de: 'Polnisch', en: 'Polish', es: 'Polaco', it: 'Polacca', fr: 'Polonaise',
        ja: 'ポーランド料理', zh: '波兰料理', tr: 'Polonya', ar: 'بولندي', ur: 'پولش',
        hi: 'पोलिश', bn: 'पোলিশ', pt: 'Polonesa', ru: 'Польская', pl: 'Polska',
        nl: 'Pools', dk: 'Polsk', se: 'Polsk', no: 'Polsk', fi: 'Puolalainen'
      },
      Portuguese: {
        de: 'Portugiesisch', en: 'Portuguese', es: 'Portugués', it: 'Portoghese', fr: 'Portugaise',
        ja: 'ポルトガル料理', zh: '葡萄牙料理', tr: 'Portekiz', ar: 'برتغالي', ur: 'پرتگالی',
        hi: 'पुर्तगाली', bn: 'পর্তুগিজ', pt: 'Portuguesa', ru: 'Португальская', pl: 'Portugalska',
        nl: 'Portugees', dk: 'Portugisisk', se: 'Portugisisk', no: 'Portugisisk', fi: 'Portugalilainen'
      },
      Hungarian: {
        de: 'Ungarisch', en: 'Hungarian', es: 'Húngaro', it: 'Ungherese', fr: 'Hongroise',
        ja: 'ハンガリー料理', zh: '匈牙利料理', tr: 'Macar', ar: 'مجري', ur: 'ہنگری',
        hi: 'हंगेरियन', bn: 'হাঙ্গেরীয়', pt: 'Húngara', ru: 'Венгерская', pl: 'Węgierska',
        nl: 'Hongaars', dk: 'Ungarsk', se: 'Ungersk', no: 'Ungarsk', fi: 'Unkarilainen'
      },
      Moroccan: {
        de: 'Marokkanisch', en: 'Moroccan', es: 'Marroquí', it: 'Marocchina', fr: 'Marocaine',
        ja: 'モロッコ料理', zh: '摩洛哥料理', tr: 'Fas', ar: 'مغربي', ur: 'مراکشی',
        hi: 'मोरक्कन', bn: 'মরোক্কান', pt: 'Marroquina', ru: 'Марокканская', pl: 'Marokańska',
        nl: 'Marokkaans', dk: 'Marokkansk', se: 'Marockansk', no: 'Marokkansk', fi: 'Marokkolainen'
      },
      Argentinian: {
        de: 'Argentinisch', en: 'Argentinian', es: 'Argentino', it: 'Argentina', fr: 'Argentine',
        ja: 'アルゼンチン料理', zh: '阿根廷料理', tr: 'Arjantin', ar: 'أرجنتيني', ur: 'ارجنٹائنی',
        hi: 'अर्जेंटिनियन', bn: 'আর্জেন্টাইন', pt: 'Argentina', ru: 'Аргентинская', pl: 'Argentyńska',
        nl: 'Argentijns', dk: 'Argentinsk', se: 'Argentinsk', no: 'Argentinsk', fi: 'Argentiinalainen'
      },
      Peruvian: {
        de: 'Peruanisch', en: 'Peruvian', es: 'Peruano', it: 'Peruviana', fr: 'Péruvienne',
        ja: 'ペルー料理', zh: '秘鲁料理', tr: 'Peru', ar: 'بيروفي', ur: 'پیروی',
        hi: 'पेरू', bn: 'পেরুভিয়ান', pt: 'Peruana', ru: 'Перуанская', pl: 'Peruwiańska',
        nl: 'Peruaans', dk: 'Peruansk', se: 'Peruansk', no: 'Peruansk', fi: 'Perulainen'
      },
      Thai: {
        de: 'Thailändisch', en: 'Thai', es: 'Tailandés', it: 'Thailandese', fr: 'Thaïlandaise',
        ja: 'タイ料理', zh: '泰国料理', tr: 'Tayland', ar: 'تايلاندي', ur: 'تھائی',
        hi: 'थाई', bn: 'थाई', pt: 'Tailandesa', ru: 'Тайская', pl: 'Tajska',
        nl: 'Thais', dk: 'Thailandsk', se: 'Thailändsk', no: 'Thailandsk', fi: 'Thaimaalainen'
      },
      Asian: {
        de: 'Asiatisch', en: 'Asian', es: 'Asiático', it: 'Asiatica', fr: 'Asiatique',
        ja: 'アジア料理', zh: '亚洲料理', tr: 'Asya', ar: 'آسيوي', ur: 'ایشیائی',
        hi: 'एशियाई', bn: 'এশিয়ান', pt: 'Asiática', ru: 'Азиатская', pl: 'Azjatycka',
        nl: 'Aziatisch', dk: 'Asiatisk', se: 'Asiatisk', no: 'Asiatisk', fi: 'Aasiatainen'
      },
      European: {
        de: 'Europäisch', en: 'European', es: 'Europeo', it: 'Europea', fr: 'Européenne',
        ja: 'ヨーロッパ料理', zh: '欧洲料理', tr: 'Avrupa', ar: 'أوروبي', ur: 'یورپی',
        hi: 'यूरोपीय', bn: 'ইউরোপীয়', pt: 'Europeia', ru: 'Европейская', pl: 'Europejska',
        nl: 'Europees', dk: 'Europæisk', se: 'Europeisk', no: 'Europeisk', fi: 'Eurooppalainen'
      },
      Mediterranean: {
        de: 'Mediterran', en: 'Mediterranean', es: 'Mediterráneo', it: 'Mediterranea', fr: 'Méditerranéenne',
        ja: '地中海料理', zh: '地中海料理', tr: 'Akdeniz', ar: 'متوسطي', ur: 'بحيرة روم',
        hi: 'भूमध्यसागरीय', bn: 'মেডিটেরেনিয়ান', pt: 'Mediterrânea', ru: 'Средиземноморская', pl: 'Śródziemnomorska',
        nl: 'Mediterraans', dk: 'Middelhavs', se: 'Medelhavs', no: 'Middelhavs', fi: 'Välimerellinen'
      },
      International: {
        de: 'International', en: 'International', es: 'International', it: 'Internazionale', fr: 'Internationale',
        ja: '国際料理', zh: '国际料理', tr: 'Uluslararası', ar: 'دولي', ur: 'بین الاقوامی',
        hi: 'अंतर्राष्ट्रीय', bn: 'আন্তর্জাতিক', pt: 'Internacional', ru: 'Международная', pl: 'Międzynarodowa',
        nl: 'Internationaal', dk: 'International', se: 'Internationell', no: 'Internasjonal', fi: 'Kansainvälinen'
      }
    };

    const entry = cuisineNames[canonical];
    if (entry) {
      return entry[locale] || entry['en'] || canonical;
    }
    return code;
  }, [locale]);

  const getCuisineFlag = (c: string) => {
    const canonical = getCanonicalCuisineCode(c);
    if (canonical === 'German') return '🇩🇪';
    if (canonical === 'Italian') return '🇮🇹';
    if (canonical === 'Spanish') return '🇪🇸';
    if (canonical === 'Greek') return '🇬🇷';
    if (canonical === 'French') return '🇫🇷';
    if (canonical === 'Chinese') return '🇨🇳';
    if (canonical === 'Mexican') return '🇲🇽';
    if (canonical === 'Indian') return '🇮🇳';
    if (canonical === 'Japanese') return '🇯🇵';
    if (canonical === 'Turkish') return '🇹🇷';
    if (canonical === 'British') return '🇬🇧';
    if (canonical === 'American') return '🇺🇸';
    if (canonical === 'Vietnamese') return '🇻🇳';
    if (canonical === 'Belgian') return '🇧🇪';
    if (canonical === 'Austrian') return '🇦🇹';
    if (canonical === 'Swiss') return '🇨🇭';
    if (canonical === 'Swedish') return '🇸🇪';
    if (canonical === 'Polish') return '🇵🇱';
    if (canonical === 'Portuguese') return '🇵🇹';
    if (canonical === 'Hungarian') return '🇭🇺';
    if (canonical === 'Moroccan') return '🇲🇦';
    if (canonical === 'Argentinian') return '🇦🇷';
    if (canonical === 'Peruvian') return '🇵🇪';
    if (canonical === 'Thai') return '🇹🇭';
    return '🌐';
  };

  const isCountryCuisine = (c: string) => {
    return getCuisineFlag(c) !== '🌐';
  };

  const getDifficultyLabel = (diff: string) => {
    if (diff === 'Einfach' || diff === 'Easy') {
      return t('recipes.diffEasy');
    }
    if (diff === 'Mittel' || diff === 'Medium') {
      return t('recipes.diffMedium');
    }
    if (diff === 'Anspruchsvoll' || diff === 'Advanced') {
      return t('recipes.diffAdvanced');
    }
    return diff;
  };

  const isFavorite = useCallback(
    (recipe: Recipe | null) => {
      if (!recipe) return false;
      return favoriteRecipes.some(
        (f) => (f.id && recipe.id && f.id === recipe.id) || (f.title && recipe.title && f.title === recipe.title)
      );
    },
    [favoriteRecipes]
  );

  // Keyboard shortcut listener: ESC or Backspace/Delete to return to recipe list
  useEffect(() => {
    if (!selectedRecipe) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        setSelectedRecipe(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRecipe]);

  const isMountedRef = React.useRef(false);

  // Sync selectedRecipe with URL search params ?recipe=
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    const url = new URL(window.location.href);
    if (selectedRecipe) {
      url.searchParams.set('tab', 'recipes');
      url.searchParams.set('recipe', selectedRecipe.id);
    } else {
      url.searchParams.delete('recipe');
    }
    window.history.replaceState(null, '', url.toString());
  }, [selectedRecipe]);

  // Popstate URL recipe parameter detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loadRecipeFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const rId = params.get('recipe');
      if (rId) {
        const found = PRELOADED_RECIPES.find((r) => r.id === rId);
        setSelectedRecipe(found || null);
      } else {
        setSelectedRecipe(null);
      }
    };

    window.addEventListener('popstate', loadRecipeFromUrl);
    return () => window.removeEventListener('popstate', loadRecipeFromUrl);
  }, []);

  const handleShare = useCallback(() => {
    if (!selectedRecipe || typeof window === 'undefined') return;
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const shareUrl = `${origin}${pathname}?tab=recipes&recipe=${selectedRecipe.id}&lang=${locale}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setShowCopiedToast(true);
          setTimeout(() => setShowCopiedToast(false), 2500);
        })
        .catch(() => {
          prompt(t('recipes.shareTooltip'), shareUrl);
        });
    } else {
      prompt(t('recipes.shareTooltip'), shareUrl);
    }
  }, [selectedRecipe, locale, t]);

  const allRecipes = useMemo(() => {
    return [...PRELOADED_RECIPES];
  }, []);

  const { countryCuisines, otherCuisines, availableCuisines } = useMemo(() => {
    const map = new Map<string, number>();
    allRecipes.forEach((r) => {
      const rawCuisine = getRecipeCuisine(r);
      const canonicalCode = getCanonicalCuisineCode(rawCuisine);
      if (canonicalCode) {
        map.set(canonicalCode, (map.get(canonicalCode) || 0) + 1);
      }
    });

    const countries: [string, number, string][] = [];
    const others: [string, number, string][] = [];

    map.forEach((count, canonicalCode) => {
      const localizedName = getLocalizedCuisineName(canonicalCode);
      if (isCountryCuisine(canonicalCode)) {
        countries.push([canonicalCode, count, localizedName]);
      } else {
        others.push([canonicalCode, count, localizedName]);
      }
    });

    countries.sort((a, b) => a[2].localeCompare(b[2], locale));
    others.sort((a, b) => a[2].localeCompare(b[2], locale));

    const combined: [string, number, string][] = [...countries, ...others];

    return {
      countryCuisines: countries,
      otherCuisines: others,
      availableCuisines: combined,
    };
  }, [allRecipes, locale, getLocalizedCuisineName, getRecipeCuisine]);

  const popularCuisines = useMemo(() => {
    const priorityKeywordsMap: Record<string, string[]> = {
      de: ['german', 'italian', 'austrian', 'greek', 'spanish'],
      en: ['american', 'british', 'italian', 'mexican', 'indian'],
      it: ['italian', 'spanish', 'french', 'greek', 'german'],
      es: ['spanish', 'mexican', 'argentinian', 'italian', 'peruvian'],
      fr: ['french', 'italian', 'belgian', 'moroccan', 'spanish'],
      ja: ['japanese', 'chinese', 'vietnamese', 'italian', 'indian'],
      zh: ['chinese', 'japanese', 'vietnamese', 'thai', 'indian'],
      tr: ['turkish', 'oriental', 'greek', 'italian', 'indian'],
      ar: ['oriental', 'moroccan', 'turkish', 'indian', 'italian'],
      ur: ['indian', 'oriental', 'turkish', 'chinese', 'italian'],
      hi: ['indian', 'oriental', 'turkish', 'chinese', 'italian'],
      bn: ['indian', 'oriental', 'chinese', 'italian', 'turkish'],
      pt: ['portuguese', 'spanish', 'italian', 'french', 'german'],
      ru: ['polish', 'german', 'italian', 'hungarian', 'greek'],
      pl: ['polish', 'german', 'italian', 'hungarian', 'greek'],
      nl: ['belgian', 'italian', 'french', 'german', 'indian'],
      dk: ['swedish', 'italian', 'german', 'french', 'spanish'],
      se: ['swedish', 'italian', 'german', 'french', 'spanish'],
      no: ['swedish', 'italian', 'german', 'french', 'spanish'],
      fi: ['swedish', 'italian', 'german', 'french', 'spanish'],
    };

    const keywords = priorityKeywordsMap[locale] || priorityKeywordsMap['de'];
    const picked: [string, number, string][] = [];
    const used = new Set<string>();

    keywords.forEach((kw) => {
      const found = availableCuisines.find(([code]) => code.toLowerCase().includes(kw) && !used.has(code));
      if (found) {
        picked.push(found);
        used.add(found[0]);
      }
    });

    if (picked.length < 5) {
      const sortedByCount = [...availableCuisines].sort((a, b) => b[1] - a[1]);
      for (const item of sortedByCount) {
        if (!used.has(item[0])) {
          picked.push(item);
          used.add(item[0]);
          if (picked.length >= 5) break;
        }
      }
    }

    return picked.slice(0, 5);
  }, [availableCuisines, locale]);

  const filteredRecipes = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const tokens = q.split(/[\s\-_,]+/).filter(Boolean);

    const isSearchActive = q.length > 0;

    const scoredRecipes: { recipe: Recipe; score: number; index: number }[] = [];

    allRecipes.forEach((r, originalIndex) => {
      const isFav = isFavorite(r);

      // Window Filter
      const matchesWindow =
        selectedWindowFilter === 'All' ||
        (selectedWindowFilter === 'Favorites' && isFav) ||
        r.timeWindow === selectedWindowFilter ||
        (selectedWindowFilter === 'Current' && r.timeWindow === activeSolarWindow);

      // Diet Filter
      const matchesDiet = selectedDietFilter === 'All' || r.diet === selectedDietFilter;

      // Cuisine Filter
      const recipeCanonical = getCanonicalCuisineCode(getRecipeCuisine(r));
      const matchesCuisine =
        selectedCuisineFilter === 'All' ||
        recipeCanonical === getCanonicalCuisineCode(selectedCuisineFilter);

      if (!matchesWindow || !matchesDiet || !matchesCuisine) {
        return;
      }

      if (!isSearchActive) {
        scoredRecipes.push({ recipe: r, score: 0, index: originalIndex });
        return;
      }

      // Check special queries like 'fav' / 'herz'
      if ((q.includes('fav') || q.includes('liebling') || q.includes('herz')) && isFav) {
        scoredRecipes.push({ recipe: r, score: 100, index: originalIndex });
        return;
      }

      const locTitle = getRecipeTitle(r).toLowerCase();
      const locDesc = getRecipeDesc(r).toLowerCase();
      const rawTitleDE = (r.title || '').toLowerCase();
      const rawTitleEN = (r.titleEN || '').toLowerCase();
      const mealName = (r.mealName || '').toLowerCase();
      const rawDescDE = (r.description || '').toLowerCase();
      const rawDescEN = (r.descriptionEN || '').toLowerCase();
      const tags = (r.tags || []).map((t) => t.toLowerCase());

      const ingNames = r.ingredients.map((ing) =>
        `${getIngredientName(ing)} ${ing.name} ${ing.nameEN || ''} ${getIngredientAmount(ing)} ${ing.amount} ${ing.amountEN || ''}`.toLowerCase()
      );
      const instructions = getRecipeInstructions(r)
        .concat(r.instructionsEN || [])
        .map((s) => s.toLowerCase());

      let score = 0;

      // 1. Exact raw query match in title
      if (locTitle === q || rawTitleDE === q || rawTitleEN === q || mealName === q) {
        score += 1000;
      } else if (
        locTitle.includes(q) ||
        rawTitleDE.includes(q) ||
        rawTitleEN.includes(q) ||
        mealName.includes(q)
      ) {
        score += 500;
      }

      // 2. Query in tags
      if (tags.some((t) => t === q)) {
        score += 300;
      } else if (tags.some((t) => t.includes(q))) {
        score += 150;
      }

      // 3. Query in description
      if (locDesc.includes(q) || rawDescDE.includes(q) || rawDescEN.includes(q)) {
        score += 100;
      }

      // 4. Query in ingredients
      if (ingNames.some((ing) => ing.includes(q))) {
        score += 60;
      }

      // 5. Token matching
      let matchedTokenCount = 0;
      for (const tok of tokens) {
        if (tok.length < 2) continue;

        const inTitle =
          locTitle.includes(tok) ||
          rawTitleDE.includes(tok) ||
          rawTitleEN.includes(tok) ||
          mealName.includes(tok);
        const inTags = tags.some((t) => t.includes(tok));
        const inDesc = locDesc.includes(tok) || rawDescDE.includes(tok) || rawDescEN.includes(tok);
        const inIng = ingNames.some((ing) => ing.includes(tok));
        const inInst = instructions.some((s) => s.includes(tok));

        if (inTitle) {
          score += 80;
          matchedTokenCount++;
        } else if (inTags) {
          score += 50;
          matchedTokenCount++;
        } else if (inDesc) {
          score += 30;
          matchedTokenCount++;
        } else if (inIng) {
          score += 20;
          matchedTokenCount++;
        } else if (inInst) {
          score += 10;
          matchedTokenCount++;
        }
      }

      if (tokens.length > 1 && matchedTokenCount >= tokens.length) {
        score += 200; // Bonus for matching all search words
      }

      // Slight boost if recipe matches the currently selected window filter
      if (selectedWindowFilter !== 'All' && r.timeWindow === selectedWindowFilter) {
        score += 5;
      }

      // Fridge Mode scoring & strict filtering
      if (isFridgeMode && selectedFridgeIngredients.length > 0) {
        const matchCount = getFridgeMatchCount(r);
        if (matchCount > 0) {
          score += matchCount * 500;
        } else {
          score = 0; // strictly require at least 1 ingredient match in Fridge Mode
        }
      }

      if (score > 0) {
        scoredRecipes.push({ recipe: r, score, index: originalIndex });
      }
    });

    if (isSearchActive || (isFridgeMode && selectedFridgeIngredients.length > 0)) {
      scoredRecipes.sort((a, b) => b.score - a.score || a.index - b.index);
    }

    return scoredRecipes.map((s) => s.recipe);
  }, [
    allRecipes,
    isFavorite,
    searchTerm,
    selectedWindowFilter,
    activeSolarWindow,
    selectedDietFilter,
    selectedCuisineFilter,
    isFridgeMode,
    selectedFridgeIngredients,
    getFridgeMatchCount,
    getIngredientName,
    getRecipeCuisine,
    getRecipeTitle,
    getIngredientAmount,
    getRecipeInstructions,
    getRecipeDesc,
  ]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Search & Filters Header */}
      <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm space-y-4 no-print">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-500" /> {t('recipes.title')}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold border border-orange-200/60 shadow-xs">
                {filteredRecipes.length === allRecipes.length
                  ? (t('recipes.totalRecipesLabel') || '{count} Rezepte').replace('{count}', String(allRecipes.length))
                  : (t('recipes.showingFilteredCount') || 'Zeige {filtered} von {total} Rezepten')
                      .replace('{filtered}', String(filteredRecipes.length))
                      .replace('{total}', String(allRecipes.length))}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('recipes.subtitle')}
            </p>
          </div>

          <div className="relative flex-1 md:max-w-xs">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('recipes.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-100 pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
          </div>
        </div>

        {/* Filter Badges */}
        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
          {/* Window & Diet Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-500">{t('recipes.filterWindow')}</span>
              {['All', 'Current', 'Morning', 'Midday', 'Evening', 'Dawn Transition', 'Dusk Transition', 'Night Transition'].map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    setSelectedWindowFilter(selectedWindowFilter === w ? 'All' : w);
                    setSelectedRecipe(null);
                  }}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    selectedWindowFilter === w
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {w === 'All' && t('recipes.filterAll')}
                  {w === 'Current' && t('recipes.filterCurrent')}
                  {w === 'Morning' && t('recipes.filterMorning')}
                  {w === 'Midday' && t('recipes.filterMidday')}
                  {w === 'Evening' && t('recipes.filterEvening')}
                  {w === 'Dawn Transition' && t('recipes.filterDawn')}
                  {w === 'Dusk Transition' && t('recipes.filterDusk')}
                  {w === 'Night Transition' && t('recipes.filterNight')}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-500">{t('recipes.filterDiet')}</span>
              {['All', 'Omnivore', 'Vegetarian', 'Vegan'].map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setSelectedDietFilter(selectedDietFilter === d ? 'All' : d);
                    setSelectedRecipe(null);
                  }}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    selectedDietFilter === d
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {d === 'All' && t('recipes.filterAll')}
                  {d === 'Omnivore' && t('recipes.filterOmni')}
                  {d === 'Vegetarian' && t('recipes.filterVeg')}
                  {d === 'Vegan' && t('recipes.filterVegan')}
                </button>
              ))}

              {/* Favoriten Button directly after Vegan */}
              <button
                onClick={() => {
                  setSelectedWindowFilter(selectedWindowFilter === 'Favorites' ? 'All' : 'Favorites');
                  setSelectedRecipe(null);
                }}
                className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  selectedWindowFilter === 'Favorites'
                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
                    : 'bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200'
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${selectedWindowFilter === 'Favorites' ? 'fill-current text-white' : 'fill-rose-500 text-rose-500'}`} />
                <span>{t('recipes.filterFavorites') || 'Favoriten'}</span>
                <span className="font-mono text-xs">({favoriteRecipes.length})</span>
              </button>
            </div>
          </div>

          {/* Cuisine / Regionality Filter Dropdown & Quick Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-100 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-500 flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-orange-500" />
                {t('recipes.filterCuisine') || 'Küche / Land'}:
              </span>

              {/* Styled Compact Dropdown */}
              <div className="relative">
                <select
                  value={selectedCuisineFilter}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedCuisineFilter(val);
                    if (val !== 'All') {
                      setSelectedWindowFilter('All');
                      setSelectedDietFilter('All');
                      setSearchTerm('');
                    }
                    setSelectedRecipe(null);
                  }}
                  className="rounded-xl bg-slate-100 border border-slate-200 pl-3 pr-8 py-1.5 font-bold text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer transition-all appearance-none"
                >
                  <option value="All">
                    🌐 {t('recipes.filterAllCuisines') || 'Alle Küchen & Regionen'} ({allRecipes.length})
                  </option>
                  {countryCuisines.length > 0 && (
                    <optgroup label={`── ${t('recipes.groupCountries') || 'Länder & Nationalitäten'} ──`}>
                      {countryCuisines.map(([cCode, count, locName]) => (
                        <option key={cCode} value={cCode}>
                          {getCuisineFlag(cCode)} {locName} ({count})
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {otherCuisines.length > 0 && (
                    <optgroup label={`── ${t('recipes.groupOthers') || 'Weitere Kategorien'} ──`}>
                      {otherCuisines.map(([cCode, count, locName]) => (
                        <option key={cCode} value={cCode}>
                          {getCuisineFlag(cCode)} {locName} ({count})
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                  ▼
                </div>
              </div>

              {/* Active Cuisine Tag Badge with Clear (X) */}
              {selectedCuisineFilter !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-100 border border-orange-200 text-orange-900 font-bold animate-fadeIn">
                  <span>{getCuisineFlag(selectedCuisineFilter)}</span>
                  <span>{getLocalizedCuisineName(selectedCuisineFilter)}</span>
                  <button
                    onClick={() => {
                      setSelectedCuisineFilter('All');
                      setSelectedRecipe(null);
                    }}
                    className="ml-1 text-orange-700 hover:text-orange-950 font-extrabold hover:bg-orange-200 rounded-full w-4 h-4 inline-flex items-center justify-center text-xs transition-colors"
                    title="Filter aufheben"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>

            {/* Quick-Filter Shortcuts for Top 5 Cuisines tailored to active UI locale */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <span>{t('recipes.topCuisines') || 'Beliebt:'}</span>
              {popularCuisines.map(([cCode, _, locName]) => (
                <button
                  key={cCode}
                  onClick={() => {
                    if (selectedCuisineFilter === cCode) {
                      setSelectedCuisineFilter('All');
                    } else {
                      setSelectedCuisineFilter(cCode);
                      setSelectedWindowFilter('All');
                      setSelectedDietFilter('All');
                      setSearchTerm('');
                    }
                    setSelectedRecipe(null);
                  }}
                  className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                    selectedCuisineFilter === cCode
                      ? 'bg-orange-600 text-white shadow-sm ring-1 ring-orange-400'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  title={selectedCuisineFilter === cCode ? 'Klicken zum Deaktivieren' : `Filter nach ${locName}`}
                >
                  {getCuisineFlag(cCode)} {locName}
                </button>
              ))}
            </div>
          </div>

          {/* Fridge Mode Toggle & Tag Cloud */}
          <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setIsFridgeMode(!isFridgeMode);
                  setSelectedRecipe(null);
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-extrabold text-xs transition-all border cursor-pointer ${
                  isFridgeMode
                    ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-400/40'
                    : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                }`}
              >
                <span>🥑 {t('recipes.fridgeMode') || 'Was ist im Kühlschrank? (Resteverwertung)'}</span>
                {selectedFridgeIngredients.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-white text-amber-900 text-[10px] font-black shadow-xs">
                    {selectedFridgeIngredients.length}
                  </span>
                )}
              </button>
              {isFridgeMode && selectedFridgeIngredients.length > 0 && (
                <button
                  onClick={() => setSelectedFridgeIngredients([])}
                  className="text-xs text-amber-700 hover:text-amber-900 font-bold underline"
                >
                  {t('recipes.clearFridgeIngredients') || 'Auswahl zurücksetzen'}
                </button>
              )}
            </div>

            {isFridgeMode && (
              <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-3 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-2.5">
                  <p className="text-xs text-amber-950 font-extrabold flex items-center gap-1.5">
                    <span>💡</span>
                    <span>{t('recipes.fridgeHint') || 'Wähle vorhandene Zutaten aus. Die besten Rezeptmatches werden oben angezeigt:'}</span>
                  </p>

                  {/* Search Input within Fridge Mode */}
                  <div className="relative flex items-center">
                    <Search className="absolute left-2.5 h-3.5 w-3.5 text-amber-600" />
                    <input
                      type="text"
                      placeholder={t('recipes.fridgeSearchPlaceholder') || 'Zutat suchen oder neu...'}
                      value={fridgeSearch}
                      onChange={(e) => setFridgeSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && fridgeSearch.trim()) {
                          e.preventDefault();
                          toggleFridgeIngredient(fridgeSearch.trim());
                          setFridgeSearch('');
                        }
                      }}
                      className="w-full sm:w-48 rounded-xl bg-white border border-amber-200 pl-8 pr-3 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                    {fridgeSearch.trim() && (
                      <button
                        onClick={() => {
                          toggleFridgeIngredient(fridgeSearch.trim());
                          setFridgeSearch('');
                        }}
                        className="ml-1 text-[11px] font-extrabold text-white bg-amber-600 hover:bg-amber-700 px-2 py-1 rounded-lg shrink-0"
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Pills Bar (Wrapping smoothly on Mobile) */}
                <div className="flex flex-wrap items-center gap-1.5 py-0.5 text-xs font-bold">
                  {[
                    { id: 'all', label: t('recipes.catAll') || 'Alle (50)', icon: '🛒' },
                    { id: 'veggies', label: t('recipes.catVeggies') || 'Gemüse & Pilze', icon: '🥦' },
                    { id: 'fruits', label: t('recipes.catFruits') || 'Obst', icon: '🍎' },
                    { id: 'nuts', label: t('recipes.catNuts') || 'Nüsse & Saaten', icon: '🥜' },
                    { id: 'grains', label: t('recipes.catGrains') || 'Getreide & Hülse', icon: '🌾' },
                    { id: 'proteins', label: t('recipes.catProteins') || 'Proteine & Fette', icon: '🐟' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFridgeCatFilter(cat.id as any)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer select-none active:scale-95 ${
                        fridgeCatFilter === cat.id
                          ? 'bg-amber-700 text-white shadow-sm ring-1 ring-amber-800'
                          : 'bg-white text-amber-950 border border-amber-200/90 hover:bg-amber-100/70'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Active Tag Cloud Bar */}
                {selectedFridgeIngredients.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-amber-100/70 border border-amber-200">
                    <span className="text-[11px] font-bold text-amber-900 mr-1">
                      {t('recipes.selectedFridgeTags') || 'Ausgewählt:'}
                    </span>
                    {selectedFridgeIngredients.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-600 text-white font-extrabold text-[11px] shadow-2xs"
                      >
                        <span>{tag}</span>
                        <button
                          onClick={() => toggleFridgeIngredient(tag)}
                          className="hover:text-amber-200 font-bold ml-0.5 cursor-pointer"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Ingredients Touch-Friendly Pills */}
                <div className="flex flex-wrap gap-1.5 max-h-64 overflow-y-auto pr-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {FRIDGE_INGREDIENTS_CATALOG.filter((item) => {
                    const name = (locale === 'en' ? item.en : item.de).toLowerCase();
                    const matchesCat = fridgeCatFilter === 'all' || item.cat === fridgeCatFilter;
                    const matchesSearch = !fridgeSearch.trim() || name.includes(fridgeSearch.trim().toLowerCase());
                    return matchesCat && matchesSearch;
                  }).map((item) => {
                    const name = locale === 'en' ? item.en : item.de;
                    const isSelected = selectedFridgeIngredients.includes(name);
                    return (
                      <button
                        key={item.de}
                        onClick={() => toggleFridgeIngredient(name)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                          isSelected
                            ? 'bg-amber-600 text-white shadow-xs scale-105 border border-amber-700'
                            : 'bg-white text-slate-800 border border-amber-200/90 hover:bg-amber-100/80 hover:border-amber-300'
                        }`}
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span>{name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Recipe Cards or Detail View */}
      {selectedRecipe ? (
        /* Detailed Recipe View with Schema.org JSON-LD & Microdata */
        <div
          itemScope
          itemType="https://schema.org/Recipe"
          className="printable-recipe bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-xl space-y-6 animate-fadeIn"
        >
          {/* Print Watermark Header (Only visible on paper printouts) */}
          <div className="hidden print:flex items-center justify-between border-b-2 border-orange-500 pb-3 mb-4">
            <div>
              <h1 className="text-xl font-extrabold text-slate-900">☀️ SolarNutrition — Rezeptblatt</h1>
              <p className="text-xs text-slate-500">Ernährung nach Wahrer Sonnenzeit &amp; 3 Wachstumszonen</p>
            </div>
            <div className="text-right text-xs text-slate-500 font-semibold">
              <p>{getWindowLabel(selectedRecipe.timeWindow)}</p>
              <p>{getLocalizedCuisineName(selectedRecipe.cuisine)}</p>
            </div>
          </div>
          {/* Schema.org JSON-LD structured data for Search Engines */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Recipe',
                name: getRecipeTitle(selectedRecipe),
                description: getRecipeDesc(selectedRecipe),
                prepTime: `PT${selectedRecipe.prepTimeMinutes}M`,
                cookTime: `PT${selectedRecipe.cookTimeMinutes}M`,
                totalTime: `PT${selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes}M`,
                recipeYield: `${Math.round(selectedRecipe.servings * servingsMultiplier)} servings`,
                recipeCategory: selectedRecipe.timeWindow,
                recipeCuisine: getRecipeCuisine(selectedRecipe),
                keywords: selectedRecipe.tags ? selectedRecipe.tags.join(', ') : undefined,
                recipeIngredient: selectedRecipe.ingredients.map(
                  (ing) => `${getIngredientAmount(ing)} ${getIngredientName(ing)}`
                ),
                recipeInstructions: getRecipeInstructions(selectedRecipe).map((step, i) => ({
                  '@type': 'HowToStep',
                  position: i + 1,
                  text: step,
                })),
              }),
            }}
          />

          <div className="flex items-center justify-between border-b border-slate-100 pb-4 no-print">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
              title={t('recipes.backToList')}
            >
              {t('recipes.backToList')}{' '}
              <span className="text-[10px] text-slate-400 font-normal">{t('recipes.backHint')}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200/60 font-semibold text-xs transition-colors relative cursor-pointer"
                title={t('recipes.shareTooltip')}
              >
                {showCopiedToast ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
                <span>{t('recipes.share')}</span>
                {showCopiedToast && (
                  <span className="absolute -bottom-9 right-0 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap animate-fadeIn z-50">
                    {t('recipes.linkCopied')}
                  </span>
                )}
              </button>
              <button
                onClick={() => onToggleFavorite(selectedRecipe)}
                className={`p-2 rounded-xl border transition-all ${
                  isFavorite(selectedRecipe)
                    ? 'bg-rose-50 border-rose-200 text-rose-600 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200'
                }`}
                title={t('recipes.favTooltip')}
              >
                <Heart className={`h-5 w-5 ${isFavorite(selectedRecipe) ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
              {onAddRecipeToShoppingList && (
                <button
                  onClick={() => {
                    onAddRecipeToShoppingList(selectedRecipe, servingsMultiplier);
                    setShowAddedToShoppingToast(true);
                    setTimeout(() => setShowAddedToShoppingToast(false), 2500);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-600 text-white hover:bg-orange-700 shadow-sm font-semibold text-xs transition-colors relative cursor-pointer"
                  title={t('shopping.addRecipeTooltip') || 'Zutaten zur Einkaufsliste hinzufügen'}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('shopping.addRecipe') || 'Zur Einkaufsliste'}</span>
                  {showAddedToShoppingToast && (
                    <span className="absolute -bottom-9 right-0 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap animate-fadeIn z-50">
                      ✓ {t('shopping.addedToast') || 'Zutaten hinzugefügt!'}
                    </span>
                  )}
                </button>
              )}
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                title={t('recipes.printTooltip')}
              >
                <Printer className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 mb-2">
              <span itemProp="recipeCategory">{getWindowLabel(selectedRecipe.timeWindow)}</span> •{' '}
              {getDietLabel(selectedRecipe.diet)} •{' '}
              <span itemProp="recipeCuisine">{getLocalizedCuisineName(getRecipeCuisine(selectedRecipe))}</span>
            </div>
            <h2 itemProp="name" className="text-3xl font-extrabold text-slate-900">
              {getRecipeTitle(selectedRecipe)}
            </h2>
            <p itemProp="description" className="mt-2 text-sm text-slate-600">
              {getRecipeDesc(selectedRecipe)}
            </p>
          </div>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
            <meta itemProp="prepTime" content={`PT${selectedRecipe.prepTimeMinutes}M`} />
            <meta itemProp="cookTime" content={`PT${selectedRecipe.cookTimeMinutes}M`} />
            <meta itemProp="totalTime" content={`PT${selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes}M`} />
            
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-orange-500" />
              {t('recipes.prepTime')} {selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes}{' '}
              {t('recipes.min')}
            </div>
            <div className="flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-emerald-500" />
              {t('recipes.difficulty')} {getDifficultyLabel(selectedRecipe.difficulty)}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Users className="h-4 w-4 text-slate-500" />
              <span>{t('recipes.servings')}</span>
              <div className="flex items-center gap-1 bg-white rounded-lg border border-slate-300 px-2 py-1">
                <button
                  onClick={() => setServingsMultiplier(Math.max(0.5, servingsMultiplier - 0.5))}
                  className="px-1.5 py-0.5 text-slate-600 hover:bg-slate-100 rounded font-bold"
                >
                  -
                </button>
                <span itemProp="recipeYield" className="px-1 font-bold text-orange-600">
                  {Math.round(selectedRecipe.servings * servingsMultiplier)}
                </span>
                <button
                  onClick={() => setServingsMultiplier(servingsMultiplier + 0.5)}
                  className="px-1.5 py-0.5 text-slate-600 hover:bg-slate-100 rounded font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Ingredients & Instructions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                🥗 {t('recipes.ingredients')}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    itemProp="recipeIngredient"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <span className="font-medium">{getIngredientName(ing)}</span>
                    <span className="font-bold text-orange-600">{getIngredientAmount(ing)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                👩‍🍳 {t('recipes.instructions')}
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                {getRecipeInstructions(selectedRecipe).map((step, i) => (
                  <li key={i} itemProp="recipeInstructions" className="pl-1">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Practical Tips */}
          {getRecipeTips(selectedRecipe) && getRecipeTips(selectedRecipe)!.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
              <strong className="block font-bold">{t('recipes.tip')}</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {getRecipeTips(selectedRecipe)!.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        /* Recipe Cards Grid with Schema.org Microdata & Full-Card Click */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => {
              const isFav = isFavorite(recipe);
              const handleSelectCard = () => {
                setSelectedRecipe(recipe);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };

              return (
                <div
                  key={`${recipe.id}-${index}`}
                  itemScope
                  itemType="https://schema.org/Recipe"
                  role="button"
                  tabIndex={0}
                  onClick={handleSelectCard}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectCard();
                    }
                  }}
                  aria-label={getRecipeTitle(recipe)}
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-300 hover:ring-2 hover:ring-orange-500/20 cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <meta itemProp="prepTime" content={`PT${recipe.prepTimeMinutes}M`} />
                  <meta itemProp="cookTime" content={`PT${recipe.cookTimeMinutes}M`} />
                  <meta itemProp="totalTime" content={`PT${recipe.prepTimeMinutes + recipe.cookTimeMinutes}M`} />
                  <meta itemProp="recipeCategory" content={recipe.timeWindow} />
                  <meta itemProp="recipeCuisine" content={getRecipeCuisine(recipe)} />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-[11px] font-bold text-orange-800">
                          {getWindowLabel(recipe.timeWindow)}
                        </span>
                        {isFridgeMode && selectedFridgeIngredients.length > 0 && (
                          <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-900 border border-amber-300 shadow-xs">
                            ✨ {getFridgeMatchCount(recipe)}/{selectedFridgeIngredients.length} {t('recipes.matchBadge') || 'Zutaten da'}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(recipe);
                        }}
                        className={`p-2 rounded-xl transition-all z-10 ${
                          isFav
                            ? 'bg-rose-50 text-rose-500 hover:bg-rose-100 border border-rose-200 shadow-sm'
                            : 'bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 border border-slate-200/60'
                        }`}
                        title={t('recipes.favTooltip')}
                      >
                        <Heart className={`h-4 w-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    <h4
                      itemProp="name"
                      className="font-extrabold text-base text-slate-900 group-hover:text-orange-600 transition-colors"
                    >
                      {getRecipeTitle(recipe)}
                    </h4>

                    <p itemProp="description" className="text-xs text-slate-600 line-clamp-2">
                      {getRecipeDesc(recipe)}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-orange-500" />
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes} {t('recipes.min')}
                    </span>

                    <span className="flex items-center gap-1 font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-0.5 transition-transform">
                      {t('recipes.showRecipe')} <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              );
            })
          ) : selectedWindowFilter === 'Favorites' ? (
            <div className="col-span-full py-12 px-4 text-center bg-rose-50/50 rounded-2xl border border-dashed border-rose-200 space-y-3 animate-fadeIn">
              <div className="mx-auto w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                <Heart className="h-6 w-6 fill-current" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">{t('recipes.noFavoritesYet')}</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">{t('recipes.noFavoritesHint')}</p>
            </div>
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 font-medium bg-white rounded-2xl border border-dashed border-slate-300">
              {t('recipes.noRecipes')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
