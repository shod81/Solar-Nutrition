import React from 'react';
import { LayoutGrid, UtensilsCrossed, BookOpen, HelpCircle } from 'lucide-react';
import { useTranslation } from '../i18n';
import { LanguageSelector } from './LanguageSelector';

export type NavTab = 'dashboard' | 'checker' | 'recipes' | 'guide';

interface NavigationProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  const tabs: { id: NavTab; label: string; shortLabel: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'dashboard',
      label: t('nav.dashboard'),
      shortLabel: t('nav.dashboardShort') || 'Zonen',
      icon: <LayoutGrid className="h-4 w-4" />,
    },
    {
      id: 'recipes',
      label: t('nav.recipes'),
      shortLabel: t('nav.recipesShort') || 'Rezepte',
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: 'checker',
      label: t('nav.checker'),
      shortLabel: t('nav.checkerShort') || 'Checker',
      icon: <UtensilsCrossed className="h-4 w-4" />,
    },
    {
      id: 'guide',
      label: t('nav.guide'),
      shortLabel: t('nav.guideShort') || 'Regeln',
      icon: <HelpCircle className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <nav className="flex-1 overflow-hidden p-1 sm:p-1.5 bg-slate-900/10 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-inner">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pr-3 sm:pr-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-white text-orange-600 shadow-md border border-orange-100 ring-1 ring-orange-400/20'
                    : 'text-slate-700 hover:bg-white/60 hover:text-slate-900'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="inline sm:hidden">{tab.shortLabel}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      isActive ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="shrink-0">
        <LanguageSelector />
      </div>
    </div>
  );
};
