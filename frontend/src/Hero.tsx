interface HeroProps {
  onMenuClick: () => void;
}

function Hero({ onMenuClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Ukus koji se <br />
          <span className="text-primary">pamti zauvek.</span>
        </h1>
        <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          Najbolji sastojci, vrhunski kuvari i ambijent koji oduzima dah.
          Istražite naš digitalni meni i poručite odmah.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onMenuClick}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl transform hover:scale-105"
          >
            Pogledaj Meni
          </button>
        </div>
      </div>
      {/* Background decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200 via-slate-50 to-slate-50 pointer-events-none"></div>
    </section>
  );
}

export default Hero;