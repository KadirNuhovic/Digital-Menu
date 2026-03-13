import MenuItemCard, { MenuItem } from './MenuItemCard';

interface MenuListProps {
  loading: boolean;
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

function MenuList({ loading, items, onAddToCart }: MenuListProps) {
  if (loading) {
    return <div className="text-center py-20 text-text-secondary text-lg">Učitavanje menija...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-text-secondary bg-surface rounded-xl border border-slate-700">
        <h3 className="text-2xl font-bold mb-2">Nema jela u ponudi</h3>
        <p>Trenutno nema dostupnih jela u meniju. Molimo Vas, proverite kasnije.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <MenuItemCard 
          key={item.id} 
          item={item} 
          onAddToCart={onAddToCart} 
          style={{ animationDelay: `${index * 100}ms` }} />
      ))}
    </div>
  );
}

export default MenuList;