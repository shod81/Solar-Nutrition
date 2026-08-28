/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 */

import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import type { NavTab } from './components/Navigation';
import { TimeWindowView } from './components/TimeWindowView';
import { CombinationChecker } from './components/CombinationChecker';
import { RulesGuide } from './components/RulesGuide';
import { FoodDetailModal } from './components/FoodDetailModal';
import { LocationModal } from './components/LocationModal';
import { ShoppingListModal } from './components/ShoppingListModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';

const RecipeCatalog = lazy(() =>
  import('./components/RecipeCatalog').then((m) => ({ default: m.RecipeCatalog }))
);

function RecipeCatalogSkeleton() {
  return (
    <div className="space-y-6 animate-pulse p-4">
      <div className="h-12 bg-slate-200/60 rounded-2xl w-full" />
      <div className="h-10 bg-slate-200/50 rounded-xl w-3/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-44 bg-slate-200/50 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

import type { FoodItem, WindowId, LocationInfo, Recipe, ShoppingListItem } from './types/solar';
import { calculateTrueSolarTime, getSolarPhase } from './utils/solarCalculator';
import { getLunarCycle, getEffectiveActiveWindow } from './utils/lunarCalculator';
import {
  isNotificationSupported,
  requestNotificationPermission,
  checkAndTriggerSolarPhaseNotification,
} from './utils/solarNotificationManager';
import { useTranslation } from './i18n';

export function App() {
  const { t, locale } = useTranslation();
  // Navigation & View state
  const [activeTab, setActiveTabState] = useState<NavTab>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const recipeParam = params.get('recipe');
      if (recipeParam) return 'recipes';
      const tabParam = params.get('tab') as NavTab | null;
      if (tabParam && ['dashboard', 'checker', 'recipes', 'guide'].includes(tabParam)) {
        return tabParam;
      }
    }
    return 'dashboard';
  });

  const setActiveTab = useCallback((newTab: NavTab) => {
    setActiveTabState(newTab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', newTab);
      if (newTab !== 'recipes') {
        url.searchParams.delete('recipe');
      }
      window.history.pushState(null, '', url.toString());
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const recipeParam = params.get('recipe');
      const tabParam = params.get('tab') as NavTab | null;
      if (recipeParam) {
        setActiveTabState('recipes');
      } else if (tabParam && ['dashboard', 'checker', 'recipes', 'guide'].includes(tabParam)) {
        setActiveTabState(tabParam);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Time & Location State
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(() => {
    try {
      const saved = localStorage.getItem('solar-nutrition-location');
      return saved ? JSON.parse(saved) : { lat: 52.52, lon: 13.405, name: 'Berlin, Deutschland', timeZone: 'Europe/Berlin' };
    } catch {
      return { lat: 52.52, lon: 13.405, name: 'Berlin, Deutschland', timeZone: 'Europe/Berlin' };
    }
  });

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isLunarWeekEnabled, setIsLunarWeekEnabled] = useState(false);

  // Meal & Selected Items State
  const [currentMeal, setCurrentMeal] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [selectedFoodWindow, setSelectedFoodWindow] = useState<WindowId | undefined>(undefined);

  // Favorites State
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(() => {
    try {
      const saved = localStorage.getItem('solar-nutrition-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Shopping List State
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>(() => {
    try {
      const saved = localStorage.getItem('solar-nutrition-shopping-list');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isShoppingListModalOpen, setIsShoppingListModalOpen] = useState(false);

  const handleUpdateShoppingList = useCallback((items: ShoppingListItem[]) => {
    setShoppingList(items);
    try {
      localStorage.setItem('solar-nutrition-shopping-list', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save shopping list', e);
    }
  }, []);

  const handleAddRecipeToShoppingList = useCallback((recipe: Recipe, multiplier: number = 1) => {
    setShoppingList((prev) => {
      const newItems: ShoppingListItem[] = recipe.ingredients.map((ing) => {
        let amt = ing.amount || '';
        if (multiplier !== 1 && amt) {
          amt = `${amt} (x${multiplier})`;
        }
        return {
          id: `item_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
          name: ing.name,
          amount: amt,
          checked: false,
          recipeSource: recipe.title,
        };
      });
      const updated = [...newItems, ...prev];
      try {
        localStorage.setItem('solar-nutrition-shopping-list', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save shopping list', e);
      }
      return updated;
    });
  }, []);

  // Notifications State
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('solar-nutrition-notifications-enabled');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const handleToggleNotifications = useCallback(async () => {
    if (!areNotificationsEnabled) {
      if (!isNotificationSupported()) {
        alert(t('notifications.notSupported') || 'Browser-Benachrichtigungen werden von diesem Gerät nicht unterstützt.');
        return;
      }
      const granted = await requestNotificationPermission();
      if (granted) {
        setAreNotificationsEnabled(true);
        localStorage.setItem('solar-nutrition-notifications-enabled', JSON.stringify(true));
      } else {
        alert(t('notifications.permissionDenied') || 'Benachrichtigungs-Berechtigung im Browser abgelehnt.');
      }
    } else {
      setAreNotificationsEnabled(false);
      localStorage.setItem('solar-nutrition-notifications-enabled', JSON.stringify(false));
    }
  }, [areNotificationsEnabled, t]);

  // Live Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Save location & favorites to localStorage
  useEffect(() => {
    if (locationInfo) {
      localStorage.setItem('solar-nutrition-location', JSON.stringify(locationInfo));
    }
  }, [locationInfo]);

  useEffect(() => {
    localStorage.setItem('solar-nutrition-favorites', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  // Calculate True Solar Time & Solar Phase
  const trueSolarTime = useMemo(() => {
    if (!locationInfo) return currentTime;
    return calculateTrueSolarTime(currentTime, locationInfo.lon, locationInfo.timeZone);
  }, [currentTime, locationInfo]);

  // Check for phase change notifications
  useEffect(() => {
    if (areNotificationsEnabled && trueSolarTime) {
      checkAndTriggerSolarPhaseNotification(trueSolarTime, locale);
    }
  }, [trueSolarTime, areNotificationsEnabled, locale]);

  const solarPhase = useMemo(() => {
    return getSolarPhase(trueSolarTime);
  }, [trueSolarTime]);

  const lunarCycle = useMemo(() => {
    return getLunarCycle(trueSolarTime);
  }, [trueSolarTime]);

  // Auto sync lunar week toggle when lunar week begins
  useEffect(() => {
    if (lunarCycle.isLunarWeek) {
      setIsLunarWeekEnabled(true);
    }
  }, [lunarCycle.isLunarWeek]);

  // Effective Window calculation (with Lunar Week shifts)
  const effectiveWindowId = useMemo(() => {
    return getEffectiveActiveWindow(
      solarPhase.window,
      solarPhase.transition,
      lunarCycle,
      isLunarWeekEnabled
    );
  }, [solarPhase.window, solarPhase.transition, lunarCycle, isLunarWeekEnabled]);

  // Meal Builder Handlers
  const handleAddToMeal = useCallback((food: FoodItem) => {
    setCurrentMeal((prev) => {
      if (prev.some((f) => f.name === food.name)) return prev;
      return [...prev, food];
    });
  }, []);

  const handleRemoveFromMealByName = useCallback((foodName: string) => {
    setCurrentMeal((prev) => prev.filter((f) => f.name !== foodName));
  }, []);

  const handleRemoveFromMeal = useCallback((index: number) => {
    setCurrentMeal((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleClearMeal = useCallback(() => {
    setCurrentMeal([]);
  }, []);

  const handleToggleFavorite = useCallback((recipe: Recipe) => {
    setFavoriteRecipes((prev) => {
      const exists = prev.some(
        (r) => (r.id && recipe.id && r.id === recipe.id) || (r.title && recipe.title && r.title === recipe.title)
      );
      if (exists) {
        return prev.filter(
          (r) => !((r.id && recipe.id && r.id === recipe.id) || (r.title && recipe.title && r.title === recipe.title))
        );
      }
      return [...prev, recipe];
    });
  }, []);

  const handleSelectFoodModal = useCallback((food: FoodItem, windowId?: WindowId) => {
    setSelectedFood(food);
    setSelectedFoodWindow(windowId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-16 selection:bg-orange-500 selection:text-white">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Header */}
        <Header
          currentTime={currentTime}
          solarPhase={solarPhase}
          lunarCycle={lunarCycle}
          locationInfo={locationInfo}
          onOpenLocationModal={() => setIsLocationModalOpen(true)}
          isLunarWeekEnabled={isLunarWeekEnabled}
          onToggleLunarWeek={() => setIsLunarWeekEnabled(!isLunarWeekEnabled)}
          effectiveWindowId={effectiveWindowId}
          shoppingListCount={shoppingList.length}
          onOpenShoppingListModal={() => setIsShoppingListModalOpen(true)}
          areNotificationsEnabled={areNotificationsEnabled}
          onToggleNotifications={handleToggleNotifications}
        />

        {/* Navigation Tabs */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content Areas based on activeTab */}
        <main className="space-y-6">
          {/* Active Meal Builder Bar (Sticky overview if items added) */}
          {currentMeal.length > 0 && activeTab !== 'checker' && (
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-orange-600 text-white shadow-lg animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold">
                <span>{t('app.activeMealBar', { count: currentMeal.length })}</span>
                <span className="truncate max-w-xs sm:max-w-md opacity-90 font-normal">
                  {currentMeal.map((f) => f.name).join(', ')}
                </span>
              </div>
              <button
                onClick={() => setActiveTab('checker')}
                className="px-3 py-1 bg-white text-orange-600 rounded-lg text-xs font-bold hover:bg-orange-50 transition-colors shrink-0"
              >
                {t('app.check')}
              </button>
            </div>
          )}

          {/* TAB 1: DASHBOARD / TIME WINDOW VIEW */}
          {activeTab === 'dashboard' && (
            <TimeWindowView
              effectiveWindowId={effectiveWindowId}
              lunarCycle={lunarCycle}
              onSelectFood={handleSelectFoodModal}
              onAddToMeal={handleAddToMeal}
              onRemoveFromMealByName={handleRemoveFromMealByName}
              currentMeal={currentMeal}
            />
          )}

          {/* TAB 2: COMBINATION CHECKER */}
          {activeTab === 'checker' && (
            <CombinationChecker
              currentMeal={currentMeal}
              onRemoveFood={handleRemoveFromMeal}
              onClearMeal={handleClearMeal}
              transition={solarPhase.transition}
              activeMealWindow={effectiveWindowId}
              isFullMoon={lunarCycle.isFullMoonDay && isLunarWeekEnabled}
              /* onAskAiForMeal={() => setActiveTab('ai')} */
            />
          )}

          {/* TAB 3: RECEPT CATALOG */}
          {activeTab === 'recipes' && (
            <Suspense fallback={<RecipeCatalogSkeleton />}>
              <RecipeCatalog
                favoriteRecipes={favoriteRecipes}
                onToggleFavorite={handleToggleFavorite}
                activeSolarWindow={effectiveWindowId}
                onAddRecipeToShoppingList={handleAddRecipeToShoppingList}
              />
            </Suspense>
          )}

          {/* TAB 4: RULES & GUIDE */}
          {activeTab === 'guide' && <RulesGuide />}
        </main>

        {/* Footer */}
        <footer className="pt-12 pb-6 text-center text-xs text-slate-500 space-y-3 border-t border-slate-200">
          <div className="flex justify-center">
            <a
              href="https://paypal.me/Hodrius"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all cursor-pointer"
            >
              <span>💙 {t('app.donatePaypal')} (PayPal.me/Hodrius)</span>
            </a>
          </div>
          <p className="font-bold text-slate-700">{t('app.footerTitle')}</p>
          <p>{t('app.footer')}</p>
        </footer>
      </div>

      {/* Modals */}
      <FoodDetailModal
        food={selectedFood}
        parentWindowId={selectedFoodWindow}
        onClose={() => setSelectedFood(null)}
        onAddToMeal={handleAddToMeal}
        isInMeal={currentMeal.some((m) => m.name === selectedFood?.name)}
      />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onUpdateLocation={setLocationInfo}
      />

      <ShoppingListModal
        isOpen={isShoppingListModalOpen}
        onClose={() => setIsShoppingListModalOpen(false)}
        items={shoppingList}
        onUpdateItems={handleUpdateShoppingList}
      />

      {/* Floating Scroll To Top Button (hidden on mobile) */}
      <ScrollToTopButton />
    </div>
  );
}
export default App;
