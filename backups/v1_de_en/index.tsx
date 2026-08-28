import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { de } from './de';
import { en } from './en';

export type Locale = 'de' | 'en';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const translations: Record<Locale, any> = { de, en };

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'solar_nutrition_locale';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved === 'de' || saved === 'en') ? saved : 'de';
  });

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);
  }, []);

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const dict = translations[locale] as any;
    const parts = key.split('.');
    let result: any = dict;
    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        // Fallback to de
        let fallback: any = translations['de'];
        for (const p of parts) {
          if (fallback && typeof fallback === 'object' && p in fallback) {
            fallback = fallback[p];
          } else {
            return key; // key not found anywhere
          }
        }
        result = typeof fallback === 'string' ? fallback : key;
        break;
      }
    }
    if (typeof result !== 'string') return key;

    if (vars) {
      return result.replace(/\{\{(\w+)\}\}/g, (_, varKey) =>
        vars[varKey] !== undefined ? String(vars[varKey]) : `{{${varKey}}}`
      );
    }
    return result;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider');
  return ctx;
};
