import { useContext } from 'react';
import { I18nContext, type I18nContextValue } from './I18nContext';

export const useTranslation = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider');
  return ctx;
};
