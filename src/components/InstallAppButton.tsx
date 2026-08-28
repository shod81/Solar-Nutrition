import React, { useState, useEffect } from 'react';
import { Download, Check, Share } from 'lucide-react';
import { useTranslation } from '../i18n';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallAppButton: React.FC = () => {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
    if (isStandalone) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsInstalled(true);
      }
    } else {
      // Show iOS / Safari guide or general prompt
      setShowIosGuide(true);
    }
  };

  if (isInstalled) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-800 border border-emerald-300/60 shadow-xs">
        <Check className="h-4 w-4 text-emerald-600" />
        <span>{t('app.pwaInstalled') || 'App installiert'}</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-3.5 py-2 text-xs font-extrabold text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-orange-300/40"
        title={t('app.installApp')}
      >
        <Download className="h-4 w-4 animate-bounce" />
        <span>{t('app.installApp')}</span>
      </button>

      {/* iOS / Browser Install Instructions Modal */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 text-center space-y-4 animate-scaleUp">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Share className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">{t('app.installApp')}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('app.installGuide', { share: 'Teilen / Share', dots: '3 Punkte / 3 Dots' })}
            </p>
            <div className="rounded-xl bg-orange-50 p-3 text-xs font-bold text-orange-900 border border-orange-200">
              {t('app.installGuideStep')}
            </div>
            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};
