import React, { useState, useEffect, useRef } from 'react';
import { X, MapPin, Search, Navigation as NavigationIcon, Loader2 } from 'lucide-react';
import type { LocationInfo } from '../types/solar';
import { geocodeAddress, reverseGeocode, fetchLocationSuggestions } from '../utils/solarCalculator';
import { useTranslation } from '../i18n';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateLocation: (loc: LocationInfo) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onUpdateLocation,
}) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<LocationInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLFormElement>(null);

  // Debounced live autocomplete search effect
  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setSuggestions([]);
      setIsSuggesting(false);
      return;
    }

    setIsSuggesting(true);
    const timer = setTimeout(async () => {
      const results = await fetchLocationSuggestions(searchQuery);
      setSuggestions(results);
      setIsSuggesting(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleGpsLocation = () => {
    if (!navigator.geolocation) {
      setError(t('locationModal.errorGeoNotSupported'));
      return;
    }
    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const name = await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          onUpdateLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            name,
            timeZone,
          });
          setIsLoading(false);
          onClose();
        } catch {
          setError(t('locationModal.errorDetails'));
          setIsLoading(false);
        }
      },
      (err) => {
        console.error(err);
        setError(t('locationModal.errorDenied'));
        setIsLoading(false);
      }
    );
  };

  const handleSelectSuggestion = (loc: LocationInfo) => {
    onUpdateLocation(loc);
    setSearchQuery('');
    setSuggestions([]);
    onClose();
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (suggestions.length > 0) {
      handleSelectSuggestion(suggestions[0]);
      return;
    }

    setIsLoading(true);
    setError(null);

    const result = await geocodeAddress(searchQuery);
    if (result) {
      onUpdateLocation(result);
      setIsLoading(false);
      onClose();
    } else {
      setError(t('locationModal.errorNotFound', { query: searchQuery }));
      setIsLoading(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="location-modal-title" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md overflow-visible rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 animate-scaleUp space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 id="location-modal-title" className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" /> {t('locationModal.title')}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600">
          {t('locationModal.description')} <strong>{t('locationModal.descriptionBold')}</strong> {t('locationModal.descriptionEnd')}
        </p>

        {/* GPS Button */}
        <button
          onClick={handleGpsLocation}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-xs font-bold text-white shadow-md hover:bg-orange-600 active:scale-95 transition-all"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <NavigationIcon className="h-4 w-4" />
          )}
          <span>{t('locationModal.gpsButton')}</span>
        </button>

        <div className="relative flex items-center justify-center">
          <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase">{t('locationModal.orAddress')}</span>
          <div className="absolute inset-0 -z-10 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
        </div>

        {/* Manual Address Form with Live Autocomplete */}
        <form onSubmit={handleSearchSubmit} className="space-y-3 relative" ref={dropdownRef}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('locationModal.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-slate-50 pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-800 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            {isSuggesting && (
              <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin text-orange-500" />
            )}
          </div>

          {/* Autocomplete Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-11 z-50 rounded-2xl bg-white p-2 shadow-2xl border border-orange-100 max-h-56 overflow-y-auto space-y-1 animate-fadeIn">
              <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {t('locationModal.suggestions')}
              </div>
              {suggestions.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  onClick={() => handleSelectSuggestion(item)}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors group"
                >
                  <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-800 group-hover:text-orange-700 truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {Math.abs(item.lat).toFixed(4)}° {item.lat >= 0 ? 'N' : 'S'}, {Math.abs(item.lon).toFixed(4)}° {item.lon >= 0 ? 'E' : 'W'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !searchQuery.trim()}
            className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all disabled:opacity-50"
          >
            {isLoading ? t('locationModal.searching') : t('locationModal.searchButton')}
          </button>
        </form>

        {error && <p className="text-xs font-semibold text-rose-600 text-center">{error}</p>}
      </div>
    </div>
  );
};
