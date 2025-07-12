'use client';

export default function GrandCouncilPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-full">
        {/* Hero Section */}
        <div className="relative mb-0">
          <div className="w-full h-80 overflow-hidden">
            <img
              src="/hero-cryptic.jpg"
              alt="Cryptic Masons Hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg tracking-wide">
              ¿CÓMO PRESERVARÁS LA VERDADERA PALABRA Y TU LEGADO?
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 drop-shadow-lg tracking-wide">
              DESCUBRE EL RITO CRÍPTICO
            </h2>
            <div className="flex gap-4 justify-center">
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition">APRENDE MÁS</a>
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition">ENCUENTRA UN CONSEJO</a>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/cryptic-logo.png"
                alt="Grand Council Logo"
                className="w-40 h-40 object-contain mb-6"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
              Bienvenido al Rito York de Perú de la Francmasonería
            </h2>
            <h3 className="text-xl font-medium text-gray-700 text-center mb-8">
              y el
              <br />
              Gran Consejo de Masones Crípticos de Perú
            </h3>
            <p className="text-gray-700 mb-10 text-base leading-relaxed text-center max-w-5xl mx-auto">
              La Francmasonería es la organización fraternal más antigua y grande del mundo. El Rito York es un sistema de grados practicado principalmente en América para Maestros Masones que desean mayor conocimiento y experiencia en el arte de la Francmasonería. El Rito York crea significado más profundo y relaciones mientras examina las lecciones fundamentales enseñadas en la Francmasonería. Proporciona herramientas adicionales para ayudar a responder las preguntas: ¿Cuál es mi relación con Dios? ¿Cuál es mi relación con otras personas? ¿Cuál es mi propósito? Descubrimos, preservamos y defendemos los principios más verdaderos del tiempo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded font-semibold text-sm transition">¿QUÉ ES EL RITO CRÍPTICO?</a>
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
                    src="/council-badge.png"
                    alt="General Grand Council Badge"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
              {/* Proudly Supporting */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-6">APOYANDO CON ORGULLO</h3>
                <div className="flex justify-center">
                  <img
                    src="/cmmrf-logo.png"
                    alt="CMMRF Logo"
                    className="w-48 h-32 object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-gray-800">CMMRF</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">FUNDACIÓN DE INVESTIGACIÓN MÉDICA</span>
                    <br />
                    <span className="font-semibold">DE MASONES CRÍPTICOS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}