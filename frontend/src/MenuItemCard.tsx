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
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col opacity-0 animate-fade-in-up hover:-translate-y-2"
      style={style}
    >
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
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.category}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
        <p className="text-slate-500 text-sm mb-4 flex-1">{item.desc}</p>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full mt-auto py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center
            ${added
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'border-2 border-slate-200 text-slate-800 hover:bg-primary hover:text-white hover:border-primary'
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