import { useState } from 'react';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  cartCount: number;
  onMenuClick: () => void;
  onReserveClick: () => void;
  onCartClick: () => void;
}

function Header({ cartCount, onMenuClick, onReserveClick, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-primary to-amber-400 bg-clip-text text-transparent">
              GastroMenu
            </span>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            <a href="#about" className="text-gray-300 hover:text-primary font-semibold transition-all duration-300 hover:-translate-y-0.5 tracking-wider relative group">
              O NAMA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button onClick={onMenuClick} className="text-gray-300 hover:text-primary font-semibold transition-all duration-300 hover:-translate-y-0.5 tracking-wider relative group">
              MENI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a href="#gallery" className="text-gray-300 hover:text-primary font-semibold transition-all duration-300 hover:-translate-y-0.5 tracking-wider relative group">
              GALERIJA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary font-semibold transition-all duration-300 hover:-translate-y-0.5 tracking-wider relative group">
              KONTAKT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
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
              className="relative p-2.5 text-gray-300 hover:text-primary rounded-full hover:bg-primary/10 transition-colors"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-gray-900">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-4 border-t border-slate-700 pt-4">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-primary font-semibold tracking-wider">O NAMA</a>
            <button onClick={() => { onMenuClick(); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-primary font-semibold tracking-wider">MENI</button>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-primary font-semibold tracking-wider">GALERIJA</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-primary font-semibold tracking-wider">KONTAKT</a>
            <button
              onClick={() => { onReserveClick(); setIsMobileMenuOpen(false); }}
              className="bg-primary hover:bg-primary-dark text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 transition-all w-full sm:hidden"
            >
              Rezerviši
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;