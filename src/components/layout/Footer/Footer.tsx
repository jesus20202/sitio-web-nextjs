export default function Footer() {
  return (
    <footer className="bg-[#4b4b56] text-white">
      {/* Sección principal del footer */}
      <div className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Grand Chapter */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-white">
                Gran Capítulo
              </h3>
              <h4 className="text-sm mb-6 uppercase text-gray-300">
                Masones del Real Arco
              </h4>
              <div className="flex items-center justify-center mx-auto mb-4">
                <img src="/images/logos/logo1.png" alt="Gran Capítulo" className="w-32 h-32 mx-auto object-contain bg-white rounded-full" />
              </div>
            </div>

            {/* Grand Council */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-white">
                Gran Consejo
              </h3>
              <h4 className="text-sm mb-6 uppercase text-gray-300">
                Masones Crípticos
              </h4>
              <div className="flex items-center justify-center mx-auto mb-4">
                <img src="/images/logos/logo2.png" alt="Gran Consejo" className="w-32 h-32 mx-auto object-contain bg-white rounded-full" />
              </div>
            </div>

            {/* Grand Commandery */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-white">
                Gran Comandancia
              </h3>
              <h4 className="text-sm mb-6 uppercase text-gray-300">
                Caballeros Templarios
              </h4>
              <div className="flex items-center justify-center mx-auto mb-4">
                <img src="/images/logos/logo3.png" alt="Gran Comandancia" className="w-32 h-32 mx-auto object-contain bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-red-900 py-4 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white mb-4 md:mb-0">
              © 2025 | Gran Rito York de Perú
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-accent-gold text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-white hover:text-accent-gold text-sm transition-colors">Términos de Uso</a>
              <a href="#" className="text-white hover:text-accent-gold text-sm transition-colors">Aviso Legal</a>
            </div>
            {/* Login en el footer */}
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <a href="/login-admin" className="bg-white text-primary-blue font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors text-sm">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}