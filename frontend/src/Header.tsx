import { ShoppingBagIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  cartCount: number;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMenuClick: () => void;
  onReserveClick: () => void;
}

function Header({ cartCount, searchTerm, onSearchChange, onMenuClick, onReserveClick }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              GastroMenu
            </span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Traži jelo (npr. Pizza, Burger)..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-slate-100 focus:bg-white transition-colors"
                value={searchTerm}
                onChange={onSearchChange}
              />
              <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="hidden md:block text-slate-600 hover:text-primary font-medium transition-colors"
            >
              Meni
            </button>
            <button
              onClick={onReserveClick}
              className="hidden sm:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Rezerviši
            </button>
            <button className="relative p-2 text-slate-600 hover:text-primary rounded-full hover:bg-indigo-50 transition-colors">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;