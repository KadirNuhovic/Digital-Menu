import { MenuItem } from './MenuItemCard';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemoveItem: (index: number) => void;
}

function CartModal({ isOpen, onClose, items, onRemoveItem }: CartModalProps) {
  if (!isOpen) return null;

  // Računanje ukupne cene
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop (Tamna pozadina) */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-surface rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up transform transition-all border border-slate-700">
        
        {/* Header Modala */}
        <div className="bg-surface p-5 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-bold text-text-main">Vaša korpa</h3>
          <button onClick={onClose} className="p-2 -mr-2 text-text-secondary hover:text-white hover:bg-slate-700 rounded-full transition-colors">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Lista jela */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-text-secondary py-8">
              Vaša korpa je prazna.
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-background p-3 rounded-2xl border border-slate-700 hover:border-primary/30 transition-colors group">
                <div className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shadow-sm" />
                  <div>
                    <h4 className="font-semibold text-text-main text-sm">{item.name}</h4>
                    <span className="text-primary font-bold text-sm">{item.price} RSD</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveItem(index)}
                  className="text-slate-500 hover:text-red-500 p-2 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer sa ukupnom cenom */}
        {items.length > 0 && (
          <div className="p-6 bg-background/50 border-t border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-text-secondary font-medium">Ukupno:</span>
              <span className="text-2xl font-extrabold text-text-main">{total} RSD</span>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-slate-900 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Poruči odmah
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;