import React, { useEffect } from 'react';
import { X, Info, AlertTriangle, Flame, Plus, Check } from 'lucide-react';
import type { FoodItem, WindowId } from '../types/solar';
import { useTranslation } from '../i18n';

interface FoodDetailModalProps {
  food: FoodItem | null;
  parentWindowId?: WindowId;
  onClose: () => void;
  onAddToMeal?: (food: FoodItem) => void;
  isInMeal?: boolean;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  food,
  parentWindowId,
  onClose,
  onAddToMeal,
  isInMeal = false,
}) => {
  const { t, tFood, tFoodType } = useTranslation();

  useEffect(() => {
    if (!food) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [food, onClose]);

  if (!food) return null;

  const { name: displayName, specialRule: displayRule } = tFood(food);

  const windowLabelKey = parentWindowId ? `foodModal.windowLabel.${parentWindowId}` : '';

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="food-modal-title" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
          <div className="rounded-xl bg-orange-100 p-3 text-orange-600 font-bold text-lg">
            {food.foodType === 'Fruit' && '🍎'}
            {food.foodType === 'Vegetable' && '🥦'}
            {food.foodType === 'Grain' && '🌾'}
            {food.foodType === 'Meat' && '🥩'}
            {food.foodType === 'Dairy' && '🧀'}
            {food.foodType === 'Nut' && '🥜'}
            {food.foodType === 'Seafood' && '🦐'}
            {food.foodType === 'Freshwater Fish' && '🐟'}
            {food.foodType === 'Oil' && '🫒'}
            {food.foodType === 'Spice' && '🌿'}
            {food.foodType === 'Beverage' && '🍵'}
            {food.foodType === 'Alcohol' && '🍷'}
            {food.foodType === 'Spirit' && '🥃'}
            {food.foodType === 'Citrus' && '🍊'}
            {food.foodType === 'Melon' && '🍉'}
            {!['Fruit','Vegetable','Grain','Meat','Dairy','Nut','Seafood','Freshwater Fish','Oil','Spice','Beverage','Alcohol','Spirit','Citrus','Melon'].includes(food.foodType) && '🥗'}
          </div>
          <div>
            <h3 id="food-modal-title" className="text-2xl font-bold text-slate-900">{displayName}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                {tFoodType(food.foodType)}
              </span>
              {parentWindowId && windowLabelKey && (
                <span className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-800">
                  {t(windowLabelKey)}
                </span>
              )}
              {food.isWeightLoss && (
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                  <Flame className="h-3 w-3 text-emerald-600" /> {t('foodModal.weightLoss')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Content / Rules */}
        <div className="mt-5 space-y-4 text-sm text-slate-600">
          {displayRule ? (
            <div className="rounded-xl bg-amber-50 p-4 border border-amber-200 text-amber-900 flex items-start gap-2.5">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-amber-950">{t('foodModal.ruleLabel')}</strong>
                <p className="mt-0.5 text-xs sm:text-sm">{displayRule}</p>
              </div>
            </div>
          ) : (
            <p className="text-slate-600">{t('foodModal.noRule')}</p>
          )}

          {food.isForbidden && (
            <div className="rounded-xl bg-rose-50 p-4 border border-rose-200 text-rose-900 flex items-start gap-2.5">
              <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-rose-950">{t('foodModal.forbiddenLabel')}</strong>
                <p className="mt-0.5 text-xs sm:text-sm">{t('foodModal.forbiddenText')}</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900">
            {t('foodModal.close')}
          </button>

          {onAddToMeal && (
            <button
              onClick={() => { onAddToMeal(food); onClose(); }}
              disabled={isInMeal}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-sm ${
                isInMeal
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700 active:scale-95'
              }`}
            >
              {isInMeal ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {isInMeal ? t('foodModal.alreadyInMeal') : t('foodModal.addToMeal')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
