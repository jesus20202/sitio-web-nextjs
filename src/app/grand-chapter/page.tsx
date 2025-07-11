'use client';

export default function GrandChapterPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-full">
        {/* Sección Hero */}
        <div className="relative mb-0">
          <div className="w-full h-80 overflow-hidden">
            <img
              src="/hero-chapter.jpg"
              alt="Imagen Hero de Masones del Real Arco"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-wide">
              ¿ENCONTRARÁS LA PALABRA VERDADERA?
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 drop-shadow-lg tracking-wide">
              DESCUBRE EL RITO CAPITULAR Y EL SANTO REAL ARCO
            </h2>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition"
              >
                MÁS INFORMACIÓN
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold text-sm transition"
              >
                ENCUENTRA UN CAPÍTULO
              </a>
            </div>
          </div>
        </div>

        {/* Sección de Bienvenida */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/chapter-logo.png"
                alt="Logotipo del Gran Capítulo"
                className="w-40 h-40 object-contain mb-6"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
              Bienvenido al Rito de York de la Masonería de California
            </h2>
            <h3 className="text-xl font-medium text-gray-700 text-center mb-8">
              y al
              <br />
              Gran Capítulo de Masones del Real Arco
            </h3>
            <p className="text-gray-700 mb-10 text-base leading-relaxed text-center max-w-5xl mx-auto">
              La Masonería es la organización fraternal más antigua y grande del
              mundo. El Rito de York es un sistema de grados practicado
              principalmente en América para los Maestros Masones que desean más
              conocimiento y experiencia en el arte de la Masonería. El Rito de
              York genera un significado y relaciones más profundos mientras
              examina las lecciones fundamentales enseñadas en la Masonería.
              Proporciona herramientas adicionales para ayudar a responder las
              preguntas: ¿Cuál es mi relación con Dios? ¿Cuál es mi relación con
              las demás personas? ¿Cuál es mi propósito? Descubrimos,
              preservamos y defendemos los principios más verdaderos del tiempo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded font-semibold text-sm transition"
              >
                ¿QUÉ ES EL RITO CAPITULAR?
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded font-semibold text-sm transition"
              >
                SOLICITAR INFORMACIÓN
              </a>
            </div>

            {/* Sección de Búsqueda y Becas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
              {/* Búsqueda */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Buscar ubicaciones
                </h3>
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="código postal"
                    className="border border-gray-300 rounded px-4 py-2 w-full max-w-[160px] focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-semibold text-sm transition"
                  >
                    Buscar
                  </button>
                </form>
              </div>
              {/* Información de Becas */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  INFORMACIÓN DE BECAS
                </h3>
                <div className="text-sm text-gray-700 mb-3">
                  <span className="font-bold">
                    Fondo de Becas Fred DeBarrow &amp; Jerrold Wohlfarth
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Ayudando a los miembros de nuestras Órdenes Masónicas
                    Juveniles de California en su educación universitaria
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Arco Iris para Niñas – Hijas de Job – DeMolay para Niños
                  <br />
                  (Por favor, haga clic y descargue el .pdf)
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Política
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Solicitud
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Solicitud de Renovación
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Solicitud PDF (rellenable)
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
