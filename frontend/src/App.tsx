import { useState, useEffect } from 'react'
import axios from 'axios'

// Komponente
import Header from './Header';
import Hero from './Hero';
import MenuList from './MenuList';
import Footer from './Footer';
import CartModal from './CartModal';

// Uvozimo tip
import { MenuItem } from './MenuItemCard';

function App() {
  // Dodajemo generičke tipove <MenuItem[]> za state
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Sve");

  const categories = ["Sve", "Doručak", "Glavna jela", "Pića"];

  // Fetch podataka sa backend-a
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenuItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Greška pri učitavanju menija:", error);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Filtriranje jela po kategoriji
  const filteredItems = selectedCategory === "Sve"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (itemToAdd: MenuItem) => {
    setCart([...cart, itemToAdd]);
    // Ovde bi mogla ići naprednija logika, npr. grupisanje istih item-a
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-background text-text-secondary font-sans selection:bg-primary/20 selection:text-primary-dark">
      
      <Header 
        cartCount={cart.length}
        onMenuClick={scrollToProducts}
        onReserveClick={() => alert("Funkcija rezervacije je u pripremi!")}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero onMenuClick={scrollToProducts} />

      {/* PRODUCTS GRID */}
      <main id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-8 mb-12 border-b-2 border-surface pb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">Naša Ponuda</h2>
            {!loading && (
              <span className="text-sm font-bold text-primary bg-surface px-4 py-2 rounded-full">
                Ukupno: {filteredItems.length} jela
              </span>
            )}
          </div>

          {/* Kategorije */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 border-2 ${
                  selectedCategory === category
                    ? 'bg-primary text-slate-900 border-primary shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                    : 'bg-transparent text-text-secondary border-surface hover:border-primary/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <MenuList loading={loading} items={filteredItems} onAddToCart={handleAddToCart} />
      </main>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemoveItem={handleRemoveFromCart}
      />

      <Footer />
    </div>
  )
}

export default App