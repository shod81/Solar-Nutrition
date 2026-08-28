import { createContext } from 'react';
import type { SupportedLocale } from './languages';
import type { FoodItem, Recipe, RecipeIngredient } from '../types/solar';

export type Locale = SupportedLocale;

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tFood: (food: FoodItem) => { name: string; specialRule?: string };
  tRecipe: (recipe: Recipe) => {
    title: string;
    description: string;
    cuisine: string;
    instructions: string[];
    tips?: string[];
  };
  tIngredient: (ing: RecipeIngredient) => { name: string; amount: string };
  tFoodType: (type: string) => string;
  tLunar: (text: string) => string;
  dir: 'ltr' | 'rtl';
}

export const I18nContext = createContext<I18nContextValue | null>(null);
