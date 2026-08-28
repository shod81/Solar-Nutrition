import React from 'react';
import { Sun, MapPin, Sparkles, Clock, Compass, Moon, Heart, ShoppingCart, Bell } from 'lucide-react';
import type { SolarPhase, LunarCycle, LocationInfo, WindowId } from '../types/solar';
import { useTranslation } from '../i18n';

import { InstallAppButton } from './InstallAppButton';

interface HeaderProps {
  currentTime: Date;
  solarPhase: SolarPhase;
  lunarCycle: LunarCycle;
  locationInfo: LocationInfo | null;
  onOpenLocationModal: () => void;
  isLunarWeekEnabled: boolean;
  onToggleLunarWeek: () => void;
  effectiveWindowId: WindowId;
  shoppingListCount?: number;
  onOpenShoppingListModal?: () => void;
  areNotificationsEnabled?: boolean;
  onToggleNotifications?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTime,
  solarPhase,
  lunarCycle,
  locationInfo,
  onOpenLocationModal,
  isLunarWeekEnabled,
  onToggleLunarWeek,
  effectiveWindowId,
  shoppingListCount = 0,
  onOpenShoppingListModal,
  areNotificationsEnabled = false,
  onToggleNotifications,
}) => {
  const { t, tLunar, locale } = useTranslation();

  const formatTime = (date: Date | null) => {
    if (!date) return '--:--';
    return date.toLocaleTimeString(locale === 'en' ? 'en-GB' : 'de-DE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const isShifted =
    isLunarWeekEnabled &&
    lunarCycle.isLunarWeek &&
    !solarPhase.transition &&
    !lunarCycle.isFullMoonDay &&
    effectiveWindowId !== solarPhase.window;

  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-600/10 p-6 backdrop-blur-xl border border-orange-200/50 shadow-xl">
      {/* Background Glow Deco */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Title & Subtitle */}
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 border border-orange-200">
              <Sun className="h-3.5 w-3.5 text-orange-500 animate-spin-slow" />
              {t('app.tagline')}
            </div>
            <InstallAppButton />
            <a
              href="https://paypal.me/Hodrius"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-3.5 py-2 text-xs font-extrabold text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-blue-400/40"
              title="PayPal Hodrius"
            >
              <Heart className="h-4 w-4 text-rose-300 fill-rose-300 animate-pulse" />
              <span>{t('app.donatePaypal')}</span>
            </a>
            {onOpenShoppingListModal && (
              <button
                onClick={onOpenShoppingListModal}
                className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 px-3.5 py-2 text-xs font-extrabold text-white shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer border border-orange-400/40 relative"
                title={t('shopping.title') || 'Solar-Einkaufsliste'}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>{t('shopping.title') || 'Einkaufsliste'}</span>
                {shoppingListCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white text-orange-600 text-[10px] font-black shadow-xs">
                    {shoppingListCount}
                  </span>
                )}
              </button>
            )}
            {onToggleNotifications && (
              <button
                onClick={onToggleNotifications}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold shadow-md active:scale-95 transition-all cursor-pointer border ${
                  areNotificationsEnabled
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-400/40'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                }`}
                title={
                  areNotificationsEnabled
                    ? t('notifications.activeTooltip') || 'Sonnenzeit-Erinnerungen aktiv (10 Min. vor Phasenwechsel)'
                    : t('notifications.inactiveTooltip') || 'Sonnenzeit-Erinnerungen aktivieren'
                }
              >
                <Bell className={`h-4 w-4 ${areNotificationsEnabled ? 'text-amber-300 animate-pulse' : ''}`} />
                <span className="hidden sm:inline">
                  {areNotificationsEnabled
                    ? t('notifications.active') || 'Erinnerung An'
                    : t('notifications.inactive') || 'Erinnerung'}
                </span>
              </button>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2.5">
            <img src="/favicon.svg" alt="Solar Nutrition Logo" className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shadow-md border border-amber-300/40 hover:scale-105 transition-transform" />
            <span>Solar<span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Nutrition</span></span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-lg">
            {t('app.quote')}
          </p>
        </div>

        {/* Live Clocks & Status Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Local Time Card */}
          <div className="flex flex-col justify-center rounded-xl bg-white/80 p-3 shadow-sm border border-orange-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {t('app.localTime')}
            </div>
            <div className="mt-1 text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              {formatTime(currentTime)}
            </div>
          </div>

          {/* True Solar Time Card */}
          <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 text-white shadow-md">
            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-100">
              <Compass className="h-3.5 w-3.5 text-amber-200" />
              {t('app.trueSolarTime')}
            </div>
            <div className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight">
              {formatTime(solarPhase.trueSolarTime)}
            </div>
          </div>

          {/* Location Picker Badge */}
          <button
            onClick={onOpenLocationModal}
            className="col-span-2 sm:col-span-1 flex flex-col justify-center rounded-xl bg-white/80 p-3 shadow-sm border border-orange-100 hover:bg-orange-50/80 transition-all text-left group"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium group-hover:text-orange-600">
              <MapPin className="h-3.5 w-3.5 text-orange-500" />
              {t('app.location')}
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-orange-700" title={locationInfo?.name}>
              {locationInfo ? locationInfo.name : t('app.setLocation')}
            </div>
            {locationInfo && (
              <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                {Math.abs(locationInfo.lat).toFixed(4)}° {locationInfo.lat >= 0 ? 'N' : 'S'}, {Math.abs(locationInfo.lon).toFixed(4)}° {locationInfo.lon >= 0 ? 'E' : 'W'}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Moon Phase & Transition Bar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-orange-200/40 text-xs text-slate-700">
        {/* Active Phase Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-slate-500">{t('app.currentPhase')}</span>

          {lunarCycle.isFullMoonDay && isLunarWeekEnabled ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 text-xs font-bold text-slate-950 shadow-sm border border-yellow-300">
              {t('app.fullMoonDay')}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              {effectiveWindowId === 'Morning' && t('windows.Morning')}
              {effectiveWindowId === 'Midday' && t('windows.Midday')}
              {effectiveWindowId === 'Evening' && t('windows.Evening')}
            </span>
          )}

          {isShifted && (
            <span className="inline-flex items-center gap-1 rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-900 border border-indigo-300 animate-pulse">
              <Moon className="h-3 w-3 text-indigo-600" />
              {t('app.lunarWeek')} ({tLunar(lunarCycle.lunarWeekDayLabel)})
            </span>
          )}

          {solarPhase.transition && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900 border border-amber-300">
              <Sparkles className="h-3 w-3 text-amber-600" />
              {solarPhase.transition === 'Dawn' ? t('windows.dawnTransition') : t('windows.duskTransition')}
            </span>
          )}
        </div>

        {/* Lunar Phase Toggle Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-slate-700 bg-white/80 px-3 py-1 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-base">{lunarCycle.phaseIcon}</span>
            <span className="font-bold">{tLunar(lunarCycle.phaseName)}</span>
            {isLunarWeekEnabled && lunarCycle.isLunarWeek && lunarCycle.lunarWeekDayLabel && (
              <span className="ml-1 rounded bg-indigo-100 px-2 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-200">
                {tLunar(lunarCycle.lunarWeekDayLabel)}
              </span>
            )}
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isLunarWeekEnabled}
              onChange={onToggleLunarWeek}
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600 relative"></div>
            <span className="text-xs font-semibold text-slate-600">
              {t('app.lunarRules')}
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};
