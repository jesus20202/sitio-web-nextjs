export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2 px-3 sm:px-5 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Mensaje izquierdo */}
        <div className="text-white/90 text-center sm:text-left">
        </div>
        
        {/* Enlaces derecha */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Redes sociales */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-white/80 hover:text-white text-sm">f</a>
            <a href="#" className="text-white/80 hover:text-white text-sm">@</a>
            <a href="#" className="text-white/80 hover:text-white text-sm">𝕏</a>
          </div>
          
          {/* Buscador */}
          <div className="flex items-center">
            <input 
              type="text"
              placeholder="Buscar..."
              className="bg-white/20 text-white placeholder-white/60 px-3 py-1 text-xs rounded border-none outline-none w-20 sm:w-24 focus:w-28 sm:focus:w-32 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}