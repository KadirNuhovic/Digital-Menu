function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white mb-4 block">GastroMenu</span>
            <p className="text-slate-400 max-w-sm">
              Moderno gastronomsko iskustvo u srcu grada. Posetite nas i uživajte u ukusima.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Linkovi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Početna</a></li>
              <li><a href="#products-section" className="hover:text-orange-500 transition-colors">Meni</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">O nama</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Beogradska 123, Beograd</li>
              <li>+381 11 123 4567</li>
              <li>info@gastromenu.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GastroMenu. Sva prava zadržana.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 text-white cursor-pointer transition-colors">FB</a>
            <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 text-white cursor-pointer transition-colors">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;