import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useTranslation, type Locale } from '../i18n';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

export const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === locale) ?? SUPPORTED_LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
          isOpen
            ? 'bg-white text-orange-600 border-orange-200 shadow-md'
            : 'text-slate-700 bg-white/60 border-slate-200/80 hover:bg-white hover:text-slate-900'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Select language / Sprache wählen"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.nativeName}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 z-50 min-w-[180px] max-h-72 overflow-y-auto rounded-xl bg-white border border-orange-100 shadow-2xl animate-fadeIn">
          <div className="sticky top-0 bg-white px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-b border-slate-100 z-10">
            Sprache / Language
          </div>
          <ul role="listbox" className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  role="option"
                  aria-selected={locale === lang.code}
                  onClick={() => {
                    setLocale(lang.code as Locale);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-colors text-left ${
                    locale === lang.code
                      ? 'bg-orange-50 text-orange-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="flex-1">{lang.nativeName}</span>
                  {lang.dir === 'rtl' && (
                    <span className="text-[9px] bg-indigo-100 text-indigo-800 px-1 rounded font-mono">RTL</span>
                  )}
                  {locale === lang.code && (
                    <Check className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
