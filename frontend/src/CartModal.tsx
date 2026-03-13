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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up transform transition-all">
        
        {/* Header Modala */}
        <div className="bg-white p-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">Vaša korpa</h3>
          <button onClick={onClose} className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Lista jela */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-slate-500 py-8">
              Vaša korpa je prazna.
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors group">
                <div className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shadow-sm" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{item.name}</h4>
                    <span className="text-primary font-bold text-sm">{item.price} RSD</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveItem(index)}
                  className="text-slate-300 hover:text-red-500 p-2 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer sa ukupnom cenom */}
        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 font-medium">Ukupno:</span>
              <span className="text-2xl font-extrabold text-slate-900">{total} RSD</span>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Poruči odmah
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;