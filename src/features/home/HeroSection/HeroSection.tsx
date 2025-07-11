
export default function HeroSection() {
  return (
    <section 
        className="relative h-[500px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: 'url("/images/heroes/The-second-Jewish-Temple-by-Alex-Levin.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundColor: '#000'
        }}
      >
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/50 z-5"></div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-4xl mx-4 text-white">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold uppercase tracking-widest leading-tight text-white drop-shadow-lg">
              Descubre el Rito...
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-medium uppercase tracking-wide text-white">
              Más luz en la masonería
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-base font-semibold bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wide">
                Saber más
              </button>
              <button className="px-8 py-4 text-base font-semibold bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wide">
                Buscar ubicación
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}