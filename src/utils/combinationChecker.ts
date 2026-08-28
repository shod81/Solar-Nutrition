import type { FoodItem, WindowId, TransitionType } from '../types/solar';
import { SOLAR_NUTRITION_DATABASE } from '../data/solarDatabase';
import type { Locale } from '../i18n';
import { UI_DICTIONARIES } from '../i18n/uiDicts';

export interface ValidationResult {
  type: 'error' | 'warning' | 'success';
  message: string;
}

function getMsg(locale: Locale, key: string, vars?: Record<string, string>): string {
  const dict = UI_DICTIONARIES[locale] || UI_DICTIONARIES['en'] || UI_DICTIONARIES['de'];
  let val = dict?.chefModal?.[key] || dict?.checker?.[key] || dict?.combinationMessages?.[key];
  if (!val) {
    val = UI_DICTIONARIES['de']?.chefModal?.[key] || UI_DICTIONARIES['de']?.checker?.[key] || UI_DICTIONARIES['de']?.combinationMessages?.[key] || key;
  }
  if (vars) {
    return val.replace(/\{\{(\w+)\}\}/g, (_: string, k: string) => vars[k] || '');
  }
  return val;
}

export const checkMealCombination = (
  meal: FoodItem[],
  transition: TransitionType,
  activeMealWindow: WindowId | null,
  isFullMoon: boolean = false,
  locale: Locale = 'de'
): ValidationResult | null => {
  if (meal.length < 1) {
    return null;
  }

  if (isFullMoon && meal.length >= 2) {
    return {
      type: 'success',
      message: getMsg(locale, 'fullMoonSuccess'),
    };
  }

  for (const food of meal) {
    const foodName = food.name;
    if (food.isForbidden) {
      return {
        type: 'error',
        message: getMsg(locale, 'forbiddenFood', { foodName }),
      };
    }
  }

  if (meal.length > 1) {
    for (const food of meal) {
      const foodName = food.name;
      if (food.foodType === 'Citrus') {
        return {
          type: 'error',
          message: getMsg(locale, 'citrusAlone', { foodName }),
        };
      }
      if (food.foodType === 'Melon') {
        return {
          type: 'error',
          message: getMsg(locale, 'melonAlone', { foodName }),
        };
      }
    }

    const hasMeat = meal.some((f) => f.foodType === 'Meat');
    const hasDairy = meal.some((f) => f.foodType === 'Dairy');
    if (hasMeat && hasDairy) {
      return {
        type: 'error',
        message: getMsg(locale, 'meatDairyConflict'),
      };
    }
  }

  if (meal.length < 2) {
    return {
      type: 'success',
      message: getMsg(locale, 'addMoreFoodsMsg'),
    };
  }

  const windowsInMeal = new Set<WindowId>();

  meal.forEach((mealFood) => {
    if (mealFood.isHerb) return;

    const isAnyTime = SOLAR_NUTRITION_DATABASE.some(
      (tw) => tw.id === 'AnyTime' && tw.categories.some((cat) => cat.foods.some((f) => f.name === mealFood.name))
    );
    if (isAnyTime) return;

    const possibleWindows: WindowId[] = [];
    SOLAR_NUTRITION_DATABASE.forEach((tw) => {
      if (tw.id !== 'AnyTime' && tw.categories.some((c) => c.foods.some((f) => f.name === mealFood.name))) {
        possibleWindows.push(tw.id);
      }
    });

    if (possibleWindows.length === 0) return;

    if (activeMealWindow && possibleWindows.includes(activeMealWindow)) {
      windowsInMeal.add(activeMealWindow);
    } else {
      windowsInMeal.add(possibleWindows[0]);
    }
  });

  if (windowsInMeal.size <= 1) {
    return {
      type: 'success',
      message: getMsg(locale, 'perfectCombination'),
    };
  }

  if (transition === 'Dawn') {
    const isViolation = Array.from(windowsInMeal).some((w) => w !== 'Morning' && w !== 'Midday');
    if (isViolation) {
      return {
        type: 'error',
        message: getMsg(locale, 'dawnViolation'),
      };
    }
    return {
      type: 'success',
      message: getMsg(locale, 'dawnSuccess'),
    };
  } else if (transition === 'Dusk') {
    const isViolation = Array.from(windowsInMeal).some((w) => w !== 'Midday' && w !== 'Evening');
    if (isViolation) {
      return {
        type: 'error',
        message: getMsg(locale, 'duskViolation'),
      };
    }
    return {
      type: 'success',
      message: getMsg(locale, 'duskSuccess'),
    };
  } else {
    return {
      type: 'error',
      message: getMsg(locale, 'zoneMismatchWarning'),
    };
  }
};
