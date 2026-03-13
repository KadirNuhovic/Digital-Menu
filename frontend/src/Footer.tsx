function Footer() {
  return (
    <footer className="bg-surface text-text-secondary py-12 border-t-2 border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-text-main mb-4 block">GastroMenu</span>
            <p className="text-text-secondary max-w-sm">
              Moderno gastronomsko iskustvo u srcu grada. Posetite nas i uživajte u ukusima.
            </p>
          </div>
          <div>
            <h4 className="text-text-main font-bold mb-4 uppercase tracking-wider text-sm">Linkovi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Početna</a></li>
              <li><a href="#products-section" className="hover:text-primary transition-colors">Meni</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">O nama</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-main font-bold mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Beogradska 123, Beograd</li>
              <li>+381 11 123 4567</li>
              <li>info@gastromenu.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary/70">
          <p>&copy; {new Date().getFullYear()} GastroMenu. Sva prava zadržana.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-slate-900 cursor-pointer transition-colors">FB</a>
            <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-slate-900 cursor-pointer transition-colors">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;