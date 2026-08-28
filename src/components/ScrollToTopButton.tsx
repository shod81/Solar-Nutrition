import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('app.scrollToTop')}
      title={t('app.scrollToTop')}
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 text-white shadow-xl hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-700/50 backdrop-blur-md cursor-pointer group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-white" />
    </button>
  );
};
