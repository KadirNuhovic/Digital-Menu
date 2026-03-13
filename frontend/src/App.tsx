import { useState, useEffect } from 'react'
import axios from 'axios'

// Komponente
import Header from './Header';
import Hero from './Hero';
import MenuList from './MenuList';
import Footer from './Footer';

// Uvozimo tip
import { MenuItem } from './MenuItemCard';

function App() {
  // Dodajemo generičke tipove <MenuItem[]> za state
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<MenuItem[]>([]);

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

  // Filtriranje pretrage
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (itemToAdd: MenuItem) => {
    setCart([...cart, itemToAdd]);
    // Ovde bi mogla ići naprednija logika, npr. grupisanje istih item-a
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      <Header 
        cartCount={cart.length}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onMenuClick={scrollToProducts}
        onReserveClick={() => alert("Funkcija rezervacije je u pripremi!")}
      />

      <Hero onMenuClick={scrollToProducts} />

      {/* PRODUCTS GRID */}
      <main id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Naša Ponuda</h2>
          {!loading && (
            <span className="text-sm font-semibold text-primary-dark bg-primary/10 px-3 py-1 rounded-full">
              Pronađeno: {filteredItems.length} jela
            </span>
          )}
        </div>

        <MenuList loading={loading} items={filteredItems} onAddToCart={handleAddToCart} />
      </main>

      <Footer />
    </div>
  )
}

export default App