import React from 'react';
import { Trash2, AlertCircle, CheckCircle2, Sparkles, Plus, Utensils } from 'lucide-react';
import type { FoodItem, WindowId, TransitionType } from '../types/solar';
import { checkMealCombination } from '../utils/combinationChecker';
import type { ValidationResult } from '../utils/combinationChecker';
import { useTranslation } from '../i18n';

interface CombinationCheckerProps {
  currentMeal: FoodItem[];
  onRemoveFood: (index: number) => void;
  onClearMeal: () => void;
  transition: TransitionType;
  activeMealWindow: WindowId | null;
  isFullMoon: boolean;
  onAskAiForMeal?: () => void;
}

export const CombinationChecker: React.FC<CombinationCheckerProps> = ({
  currentMeal,
  onRemoveFood,
  onClearMeal,
  transition,
  activeMealWindow,
  isFullMoon,
  onAskAiForMeal,
}) => {
  const { t, tFood, locale } = useTranslation();

  const validation: ValidationResult | null = checkMealCombination(
    currentMeal,
    transition,
    activeMealWindow,
    isFullMoon,
    locale
  );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl border border-orange-100 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-orange-500 p-2.5 text-white shadow-md">
            <Utensils className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">{t('checker.title')}</h3>
            <p className="text-xs text-slate-500">
              {t('checker.subtitle')}
            </p>
          </div>
        </div>

        {currentMeal.length > 0 && (
          <button
            onClick={onClearMeal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" /> {t('checker.clearMeal')}
          </button>
        )}
      </div>

      {/* Selected Foods Pills Container */}
      <div className="min-h-[80px] p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center gap-2">
        {currentMeal.length > 0 ? (
          currentMeal.map((food, index) => {
            const { name: displayName } = tFood(food);
            return (
              <span
                key={`${food.name}-${index}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold shadow-sm border border-emerald-200 animate-fadeIn hover:bg-rose-50 hover:text-rose-900 hover:border-rose-200 transition-colors group cursor-pointer"
                onClick={() => onRemoveFood(index)}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 group-hover:text-rose-600" />
                <span>{displayName}</span>
                <span className="text-emerald-500 group-hover:text-rose-600 font-bold ml-1">×</span>
              </span>
            );
          })
        ) : (
          <div className="w-full text-center text-slate-400 text-xs py-4 flex flex-col items-center gap-1">
            <Plus className="h-5 w-5 text-slate-300" />
            <span>{t('checker.emptyMeal')}</span>
          </div>
        )}
      </div>

      {/* Validation Result Alert */}
      {validation && (
        <div
          className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm animate-fadeIn ${
            validation.type === 'error'
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : validation.type === 'warning'
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}
        >
          {validation.type === 'error' ? (
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          )}
          <div className="font-medium">{validation.message}</div>
        </div>
      )}

      {/* Action Footer */}
      {onAskAiForMeal && currentMeal.length > 0 && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onAskAiForMeal}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:from-orange-600 hover:to-amber-600 transition-all active:scale-95"
          >
            <Sparkles className="h-4 w-4" /> {t('checker.generateRecipeBtn')}
          </button>
        </div>
      )}
    </div>
  );
};
