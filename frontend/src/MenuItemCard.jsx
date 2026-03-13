import { useState } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

function MenuItemCard({ item, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Resetuje stanje dugmeta posle 2 sekunde
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900 shadow-sm">
          {item.price} RSD
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">{item.category}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
        <p className="text-slate-500 text-sm mb-4 flex-1">{item.desc}</p>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full mt-auto py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center
            ${added
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'border-2 border-slate-200 text-slate-800 hover:border-orange-600 hover:text-orange-600'
            }`}
        >
          {added ? (
            <>
              <CheckIcon className="h-5 w-5 mr-2" />
              Dodato!
            </>
          ) : (
            <>
              <PlusIcon className="h-5 w-5 mr-2" />
              Dodaj u korpu
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;