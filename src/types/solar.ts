/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 */

export type WindowId = 'Morning' | 'Midday' | 'Evening' | 'AnyTime';
export type TransitionType = 'Dawn' | 'Dusk' | null;

export interface FoodItem {
  id: string;
  name: string;       // display name (de, fallback)
  nameEN?: string;    // English name
  foodType: string;
  isWeightLoss?: boolean;
  isHerb?: boolean;
  isForbidden?: boolean;
  specialRule?: string;    // German special rule
  specialRuleEN?: string;  // English special rule
}

export interface Category {
  id?: string;
  name: string;     // German category name
  nameKey?: string; // i18n key for category name
  foods: FoodItem[];
}

export interface TimeWindowColor {
  start: string;
  end: string;
  text: string;
  border: string;
  badge: string;
}

export interface TimeWindow {
  id: WindowId;
  name: string;
  timeRange: string;
  principle: string;
  specialRules: string;
  // i18n keys
  nameKey?: string;
  timeRangeKey?: string;
  principleKey?: string;
  specialRulesKey?: string;
  colors: TimeWindowColor;
  categories: Category[];
}

export interface LocationInfo {
  lat: number;
  lon: number;
  name: string;
  timeZone: string;
}

export interface SolarPhase {
  window: WindowId;
  transition: TransitionType;
  trueSolarTime: Date | null;
}

export interface LunarCycle {
  phaseName: string;
  phaseIcon: string;
  isFullMoonDay: boolean;
  isLunarWeek: boolean;
  lunarPhase: 'NotInWeek' | 'PreFullMoon' | 'FullMoonDay' | 'PostFullMoon';
  dayOfLunarWeek: number; // 0 if not in week, 1-7 during week
  lunarWeekDayLabel: string; // e.g. 'Drei Tage vor Vollmond', 'Vollmond', 'Erster Tag nach Vollmond'
  fullMoonDate: Date | null;
}

export interface RecipeIngredient {
  name: string;
  nameEN?: string;
  amount: string;
  amountEN?: string;
  window?: WindowId;
  isOptional?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  titleEN?: string;
  mealName: string;
  mealNameEN?: string;
  description: string;
  descriptionEN?: string;
  timeWindow: WindowId | 'Dawn Transition' | 'Dusk Transition' | 'Night Transition';
  diet: 'Omnivore' | 'Vegetarian' | 'Vegan' | 'Pescetarian';
  dietEN?: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Einfach' | 'Mittel' | 'Anspruchsvoll';
  cuisine: string;
  cuisineEN?: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  instructionsEN?: string[];
  tips?: string[];
  tipsEN?: string[];
  isPreloaded?: boolean;
  tags?: string[];
}

export interface ShoppingListItem {
  id: string;
  name: string;
  amount: string;
  checked: boolean;
  recipeSource?: string;
  category?: string;
}
