import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Plus, Trash2, Check, Printer, CheckSquare, Square } from 'lucide-react';
import type { ShoppingListItem } from '../types/solar';
import { useTranslation } from '../i18n';

interface ShoppingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: ShoppingListItem[];
  onUpdateItems: (items: ShoppingListItem[]) => void;
}

export const ShoppingListModal: React.FC<ShoppingListModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateItems,
}) => {
  const { t } = useTranslation();
  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');

  // Keyboard shortcut listener: ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleToggleCheck = (id: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    onUpdateItems(updated);
  };

  const handleDeleteItem = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    onUpdateItems(updated);
  };

  const handleClearChecked = () => {
    const updated = items.filter((item) => !item.checked);
    onUpdateItems(updated);
  };

  const handleClearAll = () => {
    if (confirm(t('shopping.confirmClearAll') || 'Möchtest du wirklich alle Einträge aus der Einkaufsliste löschen?')) {
      onUpdateItems([]);
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: ShoppingListItem = {
      id: `item_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name: newItemName.trim(),
      amount: newItemAmount.trim(),
      checked: false,
    };

    onUpdateItems([newItem, ...items]);
    setNewItemName('');
    setNewItemAmount('');
  };

  const handlePrint = () => {
    window.print();
  };

  const checkedCount = items.filter((i) => i.checked).length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shopping-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 animate-scaleUp space-y-4 printable-recipe">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-100 text-orange-600">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <h3 id="shopping-modal-title" className="text-xl font-extrabold text-slate-900">
                {t('shopping.title') || 'Solar-Einkaufsliste'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {t('shopping.subtitle', { total: items.length, checked: checkedCount }) ||
                  `${items.length} Zutaten (${checkedCount} abgehakt)`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {items.length > 0 && (
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                title={t('shopping.printTooltip') || 'Einkaufsliste drucken'}
              >
                <Printer className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Add custom item form */}
        <form onSubmit={handleAddItem} className="flex gap-2 no-print">
          <input
            type="text"
            placeholder={t('shopping.placeholderName') || 'Zutat hinzufügen...'}
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          />
          <input
            type="text"
            placeholder={t('shopping.placeholderAmount') || 'Menge (z.B. 200g)'}
            value={newItemAmount}
            onChange={(e) => setNewItemAmount(e.target.value)}
            className="w-28 rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          />
          <button
            type="submit"
            disabled={!newItemName.trim()}
            className="px-3.5 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 flex items-center justify-center"
          >
            <Plus className="h-4 w-4" />
          </button>
        </form>

        {/* Info Hint Banner */}
        <div className="p-3 rounded-2xl bg-orange-50/80 border border-orange-200/80 flex items-start gap-2 text-xs text-orange-900 no-print">
          <span className="shrink-0 text-base">💡</span>
          <p className="leading-snug font-medium">
            {t('shopping.recipeHint') ||
              'Du kannst Zutaten mit 1 Klick auf „🛒 Zur Einkaufsliste“ direkt aus jedem Rezept im Rezeptkatalog hinzufügen!'}
          </p>
        </div>

        {/* Shopping Items List Container */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2 max-h-[50vh]">
          {items.length === 0 ? (
            <div className="text-center py-10 px-4 space-y-3">
              <div className="inline-flex p-4 rounded-full bg-slate-100 text-slate-400">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <p className="text-sm font-bold text-slate-700">
                {t('shopping.emptyTitle') || 'Deine Einkaufsliste ist leer'}
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                {t('shopping.emptyDesc') ||
                  'Füge Zutaten mit einem Klick aus deinen Lieblingsrezepten im Rezeptkatalog hinzu!'}
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleToggleCheck(item.id)}
                className={`flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer select-none ${
                  item.checked
                    ? 'bg-slate-50/70 border-slate-200 opacity-60'
                    : 'bg-white border-slate-200/80 shadow-xs hover:border-orange-300'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <button type="button" className="text-orange-600 shrink-0">
                    {item.checked ? (
                      <CheckSquare className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <Square className="h-5 w-5 text-slate-300" />
                    )}
                  </button>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-bold truncate ${
                        item.checked ? 'line-through text-slate-400' : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                    </p>
                    {item.recipeSource && (
                      <p className="text-[10px] text-orange-600 font-semibold truncate">
                        {item.recipeSource}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.amount && (
                    <span className="px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[11px] font-extrabold text-orange-700">
                      {item.amount}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteItem(item.id);
                    }}
                    className="p-1.5 text-slate-300 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors no-print"
                    title={t('shopping.deleteItem') || 'Eintrag löschen'}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="border-t border-slate-100 pt-3 flex items-center justify-between no-print">
            <button
              onClick={handleClearChecked}
              disabled={checkedCount === 0}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-40 transition-colors flex items-center gap-1.5"
            >
              <Check className="h-4 w-4 text-emerald-600" />
              {t('shopping.clearChecked') || 'Abgehakte löschen'}
            </button>

            <button
              onClick={handleClearAll}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="h-4 w-4" />
              {t('shopping.clearAll') || 'Alle löschen'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
