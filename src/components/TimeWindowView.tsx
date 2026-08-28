import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Plus, Info, Check } from 'lucide-react';
import { SOLAR_NUTRITION_DATABASE } from '../data/solarDatabase';
import type { FoodItem, WindowId, LunarCycle } from '../types/solar';
import { useTranslation } from '../i18n';

interface TimeWindowViewProps {
  effectiveWindowId: WindowId;
  lunarCycle: LunarCycle;
  onSelectFood: (food: FoodItem, windowId: WindowId) => void;
  onAddToMeal: (food: FoodItem) => void;
  onRemoveFromMealByName?: (foodName: string) => void;
  currentMeal: FoodItem[];
}

export const TimeWindowView: React.FC<TimeWindowViewProps> = ({
  effectiveWindowId,
  lunarCycle,
  onSelectFood,
  onAddToMeal,
  onRemoveFromMealByName,
  currentMeal,
}) => {
  const { t, tFood, tFoodType } = useTranslation();
  const [activeWindowTab, setActiveWindowTab] = useState<WindowId>(effectiveWindowId);
  const [searchTerm, setSearchTerm] = useState('');
  const [weightLossOnly, setWeightLossOnly] = useState(false);

  React.useEffect(() => {
    setActiveWindowTab(effectiveWindowId);
  }, [effectiveWindowId]);

  const activeWindowData = useMemo(() => {
    return SOLAR_NUTRITION_DATABASE.find((w) => w.id === activeWindowTab) || SOLAR_NUTRITION_DATABASE[0];
  }, [activeWindowTab]);


  // Helper: get localized window name
  const getWindowName = (w: typeof activeWindowData) => {
    if (w.nameKey) return t(w.nameKey);
    return w.name;
  };

  // Helper: get localized category name
  const getCategoryName = (cat: typeof activeWindowData.categories[0]) => {
    if (cat.nameKey) return t(cat.nameKey);
    return cat.name;
  };

  const filteredCategories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return activeWindowData.categories
      .map((cat) => {
        const matchingFoods = cat.foods.filter((food) => {
          const { name: displayName } = tFood(food);
          const matchesQuery = query === '' || displayName.toLowerCase().includes(query) || food.foodType.toLowerCase().includes(query);
          const matchesWeightLoss = !weightLossOnly || !!food.isWeightLoss;
          return matchesQuery && matchesWeightLoss;
        });
        return { ...cat, foods: matchingFoods };
      })
      .filter((cat) => cat.foods.length > 0);
  }, [activeWindowData, searchTerm, weightLossOnly, tFood]);

  const isCurrentActive = activeWindowTab === effectiveWindowId;

  const handleFoodButtonClick = (food: FoodItem, isInMeal: boolean) => {
    if (isInMeal) {
      if (onRemoveFromMealByName) {
        onRemoveFromMealByName(food.name);
      }
    } else {
      onAddToMeal(food);
    }
  };

  return (
    <div className="space-y-6">
      {/* Time Window Tabs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-orange-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {SOLAR_NUTRITION_DATABASE.map((window) => {
            const isTabSelected = activeWindowTab === window.id;
            const isEffective = effectiveWindowId === window.id;
            return (
              <button
                key={window.id}
                onClick={() => setActiveWindowTab(window.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isTabSelected
                    ? `${window.colors.badge} shadow-md scale-105`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{getWindowName(window).split(' ')[0]}</span>
                {isEffective && (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" title={t('timeWindow.currentWindow')} />
                )}
              </button>
            );
          })}
        </div>

        {/* Search & Weight Loss Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('timeWindow.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-100 pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
            />
          </div>

          <button
            onClick={() => setWeightLossOnly(!weightLossOnly)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
              weightLossOnly
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title={t('timeWindow.weightLossOnly')}
          >
            <Flame className={`h-4 w-4 ${weightLossOnly ? 'text-white' : 'text-emerald-500'}`} />
            <span className="hidden sm:inline">{t('timeWindow.weightLossFilter')}</span>
          </button>
        </div>
      </div>

      {/* Main Window Card Header */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeWindowData.colors.start} ${activeWindowData.colors.end} p-6 sm:p-8 shadow-xl border ${activeWindowData.colors.border}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold text-slate-900 shadow-sm">
                {activeWindowData.timeRangeKey ? t(activeWindowData.timeRangeKey) : activeWindowData.timeRange}
              </span>
              {isCurrentActive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> {t('timeWindow.activeNow')}
                </span>
              )}
              {lunarCycle.isLunarWeek && isCurrentActive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  <Sparkles className="h-3 w-3" /> {t('timeWindow.lunarWeekRules')}
                </span>
              )}
            </div>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-extrabold ${activeWindowData.colors.text}`}>
              {getWindowName(activeWindowData)}
            </h2>
            <p className="mt-2 text-sm sm:text-base opacity-90 max-w-2xl text-slate-800 font-medium">
              {activeWindowData.principleKey ? t(activeWindowData.principleKey) : activeWindowData.principle}
            </p>
            {activeWindowData.specialRules && (
              <p className="mt-1 text-xs text-slate-700 italic">
                <strong>{t('timeWindow.specialRuleLabel')}</strong>{' '}
                {activeWindowData.specialRulesKey ? t(activeWindowData.specialRulesKey) : activeWindowData.specialRules}
              </p>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-8 space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.name} className="space-y-3">
                <h3 className="text-sm font-extrabold tracking-wider uppercase text-slate-700/80 border-b border-slate-900/10 pb-1">
                  {getCategoryName(category)} ({category.foods.length})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {category.foods.map((food) => {
                    const isInMeal = currentMeal.some((m) => m.name === food.name || m.id === food.id);
                    const { name: displayName, specialRule: displayRule } = tFood(food);
                    return (
                      <div
                        key={food.name}
                        className={`group flex items-center justify-between p-3.5 rounded-2xl backdrop-blur-md transition-all duration-200 border ${
                          isInMeal
                            ? 'bg-emerald-50/95 border-emerald-400 shadow-md ring-2 ring-emerald-400/30'
                            : 'bg-white/80 hover:bg-white border-white/60 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div
                          onClick={() => onSelectFood(food, activeWindowData.id)}
                          className="flex-1 cursor-pointer pr-2"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className={`font-bold text-sm transition-colors ${
                              isInMeal ? 'text-emerald-950 font-extrabold' : 'text-slate-800 group-hover:text-orange-600'
                            }`}>
                              {displayName}
                            </span>
                            {food.isWeightLoss && (
                              <span title={t('timeWindow.weightLossFilter')}>
                                <Flame className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500" />
                              </span>
                            )}
                          </div>
                          <span className={`text-[11px] font-medium block mt-0.5 ${
                            isInMeal ? 'text-emerald-700 font-semibold' : 'text-slate-500'
                          }`}>
                            {tFoodType(food.foodType)} {isInMeal && `• ${t('checker.currentMeal')}`}
                          </span>
                          {displayRule && (
                            <p className="text-[10px] text-amber-700 truncate mt-1 max-w-[180px]">
                              ℹ️ {displayRule}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onSelectFood(food, activeWindowData.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            title={t('timeWindow.showDetails')}
                          >
                            <Info className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleFoodButtonClick(food, isInMeal)}
                            className={`p-1.5 rounded-lg transition-all active:scale-90 ${
                              isInMeal
                                ? 'text-emerald-700 bg-emerald-200/80 hover:bg-rose-100 hover:text-rose-700 shadow-xs'
                                : 'text-orange-600 hover:bg-orange-100 bg-orange-50/50'
                            }`}
                            title={isInMeal ? t('timeWindow.inCheckerRemove') : t('timeWindow.addToChecker')}
                          >
                            {isInMeal ? <Check className="h-4 w-4 stroke-[3]" /> : <Plus className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 font-medium bg-white/40 rounded-2xl border border-dashed border-slate-300">
              {t('timeWindow.noFoodsFound')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
