'use client';

export default function GrandCommanderyPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-full">
        {/* Hero Section */}
        <div className="relative mb-0">
          <div className="w-full h-80 overflow-hidden">
            <img
              src="/hero-templar.jpg"
              alt="Knights Templar Hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg tracking-wide">
              ¿DEFENDERÁS LA VERDADERA PALABRA Y LO QUE ES JUSTO?
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 drop-shadow-lg tracking-wide">
              DESCUBRE LAS ÓRDENES TEMPLARIAS
            </h2>
            <div className="flex gap-4 justify-center">
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition">APRENDE MÁS</a>
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition">ENCUENTRA UNA COMANDANCIA</a>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/templar-logo.png"
                alt="Grand Commandery Logo"
                className="w-40 h-40 object-contain mb-6"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
              Bienvenido al Rito York de California de la Francmasonería
            </h2>
            <h3 className="text-xl font-medium text-gray-700 text-center mb-8">
              y
              <br />
              Gran Comandancia de Caballeros Templarios de California
            </h3>

            {/* Vision and Mission Statements */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">DECLARACIÓN DE VISIÓN</h4>
                <p className="text-gray-700">Administradores fieles de la Caridad y la Comunidad.</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">DECLARACIÓN DE MISIÓN</h4>
                <p className="text-gray-700">Sirviendo a los Masones Cristianos a través de la Caridad, la Fe y la Comunidad.</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-12">
              <h4 className="text-lg font-bold text-gray-800 text-center mb-6">VALORES FUNDAMENTALES</h4>
              <p className="text-center text-gray-700 mb-8">
                Bajo la Paternidad de Dios, nuestros valores cristianos intemporales son guiados por los principios básicos de la Masonería.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Diversidad</h5>
                  <p className="text-sm text-gray-600">Fomentando y afirmando los diversos orígenes de nuestros miembros.</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Fe</h5>
                  <p className="text-sm text-gray-600">Manteniendo los valores cristianos en todo momento.</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Compañerismo</h5>
                  <p className="text-sm text-gray-600">Construyendo lazos fraternales duraderos entre miembros a través del respeto mutuo y la camaradería.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Servicio</h5>
                  <p className="text-sm text-gray-600">Demostrando compasión e impacto a través de acciones caritativas y participación comunitaria.</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Crecimiento</h5>
                  <p className="text-sm text-gray-600">Fomentando el desarrollo espiritual, personal y organizacional.</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-gray-800 mb-2">Integridad</h5>
                  <p className="text-sm text-gray-600">Manteniendo altos estándares éticos y honestidad en todas las interacciones.</p>
                </div>
              </div>

              <div className="text-center">
                <h5 className="font-bold text-gray-800 mb-2">Legado</h5>
                <p className="text-sm text-gray-600">Honrando el rico patrimonio y rituales de nuestra Orden.</p>
              </div>
            </div>

            {/* Strategic Plan Link */}
            <div className="text-center mb-12">
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition">
                Gran Comandancia de California-Plan Estratégico 2023-2025
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded font-semibold text-sm transition">¿QUÉ SON LAS ÓRDENES TEMPLARIAS?</a>
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded font-semibold text-sm transition">SOLICITAR INFORMACIÓN</a>
            </div>

            {/* Search Section */}
            <div className="text-center pt-8 border-t border-gray-200 mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Buscar Ubicaciones</h3>
              <form className="flex gap-2 justify-center">
                <input
                  type="text"
                  placeholder="código postal"
                  className="border border-gray-300 rounded px-4 py-2 w-full max-w-[200px] focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-semibold text-sm transition"
                >
                  Buscar
                </button>
              </form>
            </div>

            {/* Membership & Support Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
              {/* Proud Member */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-6">MIEMBRO ORGULLOSO DE...</h3>
                <div className="flex justify-center">
                  <img
                    src="/grand-encampment-logo.png"
                    alt="Grand Encampment Logo"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
              {/* Proudly Supporting */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-6">APOYANDO CON ORGULLO</h3>
                <div className="flex justify-center">
                  <img
                    src="/ktef-logo.png"
                    alt="KTEF Logo"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 underline text-sm hover:text-blue-800">
                    y otras Órdenes Templarias...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}