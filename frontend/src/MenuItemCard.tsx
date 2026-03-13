import { useState } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

// Definišemo kako izgleda jedno jelo (koristićemo ovo i u drugim fajlovima)
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number | string;
  image: string;
  desc: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  style?: React.CSSProperties;
}

function MenuItemCard({ item, onAddToCart, style }: MenuItemCardProps) {
  const [added, setAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Resetuje stanje dugmeta posle 2 sekunde
  };

  return (
    <div 
      className="group bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col opacity-0 animate-fade-in-up hover:-translate-y-1"
      style={style}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-slate-900 shadow-lg ring-1 ring-slate-900/5">
          {item.price} RSD
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.category}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
        <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">{item.desc}</p>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full mt-auto py-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center active:scale-95
            ${added
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-slate-50 text-slate-900 hover:bg-primary hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/30'
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