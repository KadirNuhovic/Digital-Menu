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
      className="group bg-surface rounded-3xl shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden border border-slate-700 flex flex-col opacity-0 animate-fade-in-up hover:-translate-y-2 hover:border-primary/50"
      style={style}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-lg ring-1 ring-slate-900/5">
          {item.price} RSD
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.category}</div>
        <h3 className="text-xl font-bold text-text-main mb-2">{item.name}</h3>
        <p className="text-text-secondary text-sm mb-6 flex-1 leading-relaxed">{item.desc}</p>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full mt-auto py-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center active:scale-95
            ${added
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-slate-700/50 text-text-main hover:bg-primary hover:text-slate-900 shadow-sm hover:shadow-lg hover:shadow-primary/20'
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