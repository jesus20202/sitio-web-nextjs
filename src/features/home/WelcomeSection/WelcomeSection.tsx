import { Button } from '@/components/ui/Button';

export default function WelcomeSection() {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Bienvenidos al Rito York de la Masonería en Perú
          </h2>
        </div>

        {/* Layout de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Texto */}
          <div>
            <div className="space-y-4 text-base leading-relaxed text-gray-700 mb-8">
              <p>
                La masonería es la organización fraternal más antigua y grande del mundo. El Rito York es un sistema de grados practicado principalmente en América para los Maestros Masones que desean adquirir mayor conocimiento y experiencia en el arte de la masonería.
              </p>
              
              <p>
                El Rito York genera un significado más profundo y relaciones más estrechas, mientras examina las lecciones fundamentales que enseña la masonería. Proporciona herramientas adicionales para ayudar a responder las preguntas: ¿Cuál es mi relación con Dios? ¿Cuál es mi relación con los demás? ¿Cuál es mi propósito?
              </p>
              
              <p>
                Descubrimos, preservamos y defendemos los principios más puros del tiempo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="px-6 py-3">
                ¿Qué es el Rito York?
              </Button>
              <Button variant="secondary" className="px-6 py-3">
                Solicitar Información
              </Button>
            </div>
          </div>

          {/* Columna derecha - Emblemas */}
          <div className="text-center">
            {/* Escudo principal */}
            <div className="mb-6">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed border-gray-400 mx-auto rounded-lg flex items-center justify-center text-xs text-gray-600">
                ESCUDO
              </div>
            </div>
            
            {/* Emblemas de York Rite */}
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded-full flex items-center justify-center text-xs text-red-600">
                CRA
              </div>
              <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center text-xs text-blue-600">
                CC
              </div>
            </div>
            
            <p className="text-sm text-gray-600 leading-tight">
              Emblemas del Rito York<br />
              <span className="text-xs">Capítulo del Real Arco • Consejo Críptico • Caballeros Templarios</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
