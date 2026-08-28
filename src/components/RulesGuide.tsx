import React from 'react';
import { HelpCircle, Sun, Moon, Sparkles, ShieldAlert, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n';

export const RulesGuide: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-orange-100 shadow-xl">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 mb-2">
          <HelpCircle className="h-4 w-4 text-orange-600" /> {t('guide.badge')}
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">{t('guide.title')}</h2>
        <p className="mt-1 text-sm text-slate-600">
          {t('guide.subtitle')}
        </p>
      </div>

      {/* 3 Main Windows Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-lg">
            <Sun className="h-5 w-5 text-amber-600" /> {t('guide.morningWindow')}
          </div>
          <span className="inline-block text-xs font-bold text-amber-700">{t('guide.morningTime')}</span>
          <p className="text-xs text-slate-700 leading-relaxed">
            {t('guide.morningDesc')}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-lg">
            <Sun className="h-5 w-5 text-emerald-600" /> {t('guide.middayWindow')}
          </div>
          <span className="inline-block text-xs font-bold text-emerald-700">{t('guide.middayTime')}</span>
          <p className="text-xs text-slate-700 leading-relaxed">
            {t('guide.middayDesc')}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
          <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-lg">
            <Moon className="h-5 w-5 text-indigo-600" /> {t('guide.eveningWindow')}
          </div>
          <span className="inline-block text-xs font-bold text-indigo-700">{t('guide.eveningTime')}</span>
          <p className="text-xs text-slate-700 leading-relaxed">
            {t('guide.eveningDesc')}
          </p>
        </div>
      </div>

      {/* Transition Times Section */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-orange-500" /> {t('guide.transitionsTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <strong className="block font-bold text-slate-900 text-sm mb-1">{t('guide.dawnTitle')}</strong>
            <p className="leading-relaxed">{t('guide.dawnDesc')}</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <strong className="block font-bold text-slate-900 text-sm mb-1">{t('guide.duskTitle')}</strong>
            <p className="leading-relaxed">{t('guide.duskDesc')}</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <strong className="block font-bold text-slate-900 text-sm mb-1">{t('guide.nightTitle')}</strong>
            <p className="leading-relaxed">{t('guide.nightDesc')}</p>
          </div>
        </div>

        {/* Root Vegetables Rule Box */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium">
          🌱 <strong>{t('guide.rootVegetablesRule')}</strong>
        </div>
      </div>

      {/* Special Rules & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
        <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3">
          <h4 className="font-bold text-orange-950 text-base flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-600" /> {t('guide.exceptionsTitle')}
          </h4>
          <ul className="space-y-2 text-slate-700">
            <li>• {t('guide.kiwi')}</li>
            <li>• {t('guide.citrus')}</li>
            <li>• {t('guide.melons')}</li>
            <li>• {t('guide.almonds')}</li>
            <li>• {t('guide.cam')}</li>
            <li>• {t('guide.tonic')}</li>
            <li>• {t('guide.heavyHitter')}</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
          <h4 className="font-bold text-rose-950 text-base flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-rose-600" /> {t('guide.forbiddenTitle')}
          </h4>
          <ul className="space-y-2 text-slate-700">
            <li>• ❌ {t('guide.pepper')}</li>
            <li>• ❌ {t('guide.meatDairy')}</li>
            <li>• ❌ {t('guide.meltedCheese')}</li>
            <li>• ❌ {t('guide.carbonated')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
