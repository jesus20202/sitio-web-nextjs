'use client';

import { useSection } from '@/hooks/useSection';


export default function HistoryPage() {
  const {} = useSection();

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded shadow p-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <img src="/chapter-logo.png" alt="Gran Capítulo" className="w-40 h-40 object-contain mb-2" />
              <div className="text-xl font-bold text-blue-700 uppercase">Capítulo</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/council-logo.png" alt="Gran Consejo" className="w-40 h-40 object-contain mb-2" />
              <div className="text-xl font-bold text-blue-700 uppercase">Gran Consejo</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/commandery-logo.png" alt="Gran Comandancia" className="w-40 h-40 object-contain mb-2" />
              <div className="text-xl font-bold text-blue-700 uppercase">Gran Comandancia</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-sm text-blue-700">
            <a href="#" className="hover:underline">Dignatarios Masónicos</a>
            <a href="#" className="hover:underline">Estado de Perú (PDF)</a>
            <a href="#" className="hover:underline">Un Hombre Puede Hacer la Diferencia (PDF)</a>
          </div>
          <hr className="my-4" />
          <div className="text-center mt-8">
            <h2 className="text-xl font-semibold mb-2">Información Histórica</h2>
            <p className="mb-4 text-gray-700 text-sm">
              El contenido e información contenidos en la Información Histórica del Gran Rito York de Perú están dedicados a:
            </p>
            <div className="font-semibold mb-2">Muy Excelente Compañero<br />Kenneth G. Hope</div>
            <div className="text-gray-700 text-sm mb-4">
              <div>Premio al Servicio Distinguido – Plata</div>
              <div>Premio al Servicio Distinguido – Bronce</div>
              <div>Caballero de la Cruz de Honor de York</div>
              <div>Caballero Comendador del Templo</div>
              <div>Gran Sumo Sacerdote Honorario</div>
              <div>Muy Ilustre Gran Maestro Honorario</div>
              <div>Gran Comandante Honorario</div>
              <div>Ex Gran Secretario del Gran Capítulo de Masones del Arco Real de Perú</div>
              <div>Ex Gran Registrador del Gran Consejo de Masones Crípticos de Perú</div>
              <div>Ex Gran Registrador de la Gran Comandancia de Caballeros Templarios de Perú</div>
            </div>
            <div className="text-gray-600 text-xs">
              A través de la devoción, el amor, la dedicación y incontables horas de investigación, Ken documentó la siguiente información histórica:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}