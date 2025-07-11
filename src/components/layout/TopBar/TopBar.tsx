export default function TopBar() {
  return (
    <div className="bg-header-purple text-white py-2 px-5 text-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mensaje izquierdo */}
        <div className="text-white/90">
          DESDE LAS ESTACIONES... HASTA LAS VIDAS QUE TRIUNFARON
        </div>
        
        {/* Enlaces derecha */}
        <div className="flex items-center space-x-4">
          {/* Redes sociales */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-white/80 hover:text-white text-sm">f</a>
            <a href="#" className="text-white/80 hover:text-white text-sm">@</a>
            <a href="#" className="text-white/80 hover:text-white text-sm">𝕏</a>
          </div>
          
          {/* Separador */}
          <div className="text-white/60">|</div>
          
          {/* Enlaces de usuario */}
          <div className="flex items-center space-x-3">
            <a href="#" className="text-white/90 hover:text-white uppercase tracking-wider">
              Miembros
            </a>
            <a href="#" className="text-white/90 hover:text-white uppercase tracking-wider">
              Login
            </a>
          </div>
          
          {/* Buscador */}
          <div className="flex items-center">
            <input 
              type="text"
              placeholder="Buscar..."
              className="bg-white/20 text-white placeholder-white/60 px-3 py-1 text-xs rounded border-none outline-none w-24 focus:w-32 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}