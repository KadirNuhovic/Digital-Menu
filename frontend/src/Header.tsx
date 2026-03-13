import { ShoppingBagIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  cartCount: number;
  onMenuClick: () => void;
  onReserveClick: () => void;
  onCartClick: () => void;
}

function Header({ cartCount, onMenuClick, onReserveClick, onCartClick }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-surface/80 backdrop-blur-lg shadow-lg border-b border-slate-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-primary bg-clip-text text-transparent">
              GastroMenu
            </span>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            <a href="#about" className="text-text-secondary hover:text-primary font-semibold transition-colors tracking-wider">O NAMA</a>
            <button onClick={onMenuClick} className="text-text-secondary hover:text-primary font-semibold transition-colors tracking-wider">MENI</button>
            <a href="#gallery" className="text-text-secondary hover:text-primary font-semibold transition-colors tracking-wider">GALERIJA</a>
            <a href="#contact" className="text-text-secondary hover:text-primary font-semibold transition-colors tracking-wider">KONTAKT</a>
          </nav>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onReserveClick}
              className="hidden sm:block bg-primary hover:bg-primary-dark text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Rezerviši
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2.5 text-text-secondary hover:text-primary rounded-full hover:bg-primary/10 transition-colors"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-white">
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