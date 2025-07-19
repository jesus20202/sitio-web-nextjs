'use client';
import { 
  Calendar,
  Hotel,
  Crown,
  UserCheck,
  Megaphone,
  Store,
  Grid3X3,
  Shield,
  Cross,
  HelpCircle,
  ArrowLeft,
  Users
} from "lucide-react";

export default function DashboardPage() {
  const dashboardBlocks = [
    {
      id: 1,
      title: "GENERAL INFO",
      icon: <ArrowLeft className="w-8 h-8" />,
      description: "Información general del evento"
    },
    {
      id: 2,
      title: "SCHEDULE",
      icon: <Calendar className="w-8 h-8" />,
      description: "Horarios y cronograma"
    },
    {
      id: 3,
      title: "HOTEL",
      icon: <Hotel className="w-8 h-8" />,
      description: "Información de hospedaje"
    },
    {
      id: 4,
      title: "VISITING DIGNITARIES",
      icon: <Crown className="w-8 h-8" />,
      description: "Dignatarios visitantes"
    },
    {
      id: 5,
      title: "REGISTRATION",
      icon: <UserCheck className="w-8 h-8" />,
      description: "Registro de participantes"
    },
    {
      id: 6,
      title: "SOUVENIR PROGRAM ADS",
      icon: <Megaphone className="w-8 h-8" />,
      description: "Programa de recuerdos"
    },
    {
      id: 7,
      title: "VENDORS",
      icon: <Store className="w-8 h-8" />,
      description: "Proveedores y vendedores"
    },
    {
      id: 8,
      title: "ORDER OF HIGH PRIESTHOOD",
      icon: <Grid3X3 className="w-8 h-8" />,
      description: "Orden del Alto Sacerdocio"
    },
    {
      id: 9,
      title: "ORDER OF THE SILVER TROWEL",
      icon: <Shield className="w-8 h-8" />,
      description: "Orden de la Paleta de Plata"
    },
    {
      id: 10,
      title: "PAST COMMANDERS ASSOCIATION",
      icon: <Cross className="w-8 h-8" />,
      description: "Asociación de Comandantes Pasados"
    },
    {
      id: 11,
      title: "HELP | CONTACT",
      icon: <HelpCircle className="w-8 h-8" />,
      description: "Ayuda y contacto"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-primary-blue text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold uppercase tracking-wider">Dashboard</h1>
          <a
            href="/"
            className="bg-white text-primary-blue font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors text-sm"
          >
            Logout
          </a>
        </div>
      </header>
      
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-blue rounded-xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider text-center">
              Panel de Control
            </h2>
            <p className="text-white text-center mb-8">
              Accede a todas las secciones y herramientas del sistema
            </p>
          </div>

          {/* Grid de bloques principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            {dashboardBlocks.slice(0, 10).map((block) => (
              <div 
                key={block.id}
                className="bg-primary-blue hover:bg-secondary-blue text-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 group-hover:bg-opacity-30 transition-all duration-300">
                    {block.icon}
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wide leading-tight">
                    {block.title}
                  </h3>
                  <p className="text-xs text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bloque de ayuda - más ancho */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <div className="bg-primary-blue hover:bg-secondary-blue text-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 group-hover:bg-opacity-30 transition-all duration-300">
                    {dashboardBlocks[10].icon}
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wide">
                    {dashboardBlocks[10].title}
                  </h3>
                  <p className="text-xs text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {dashboardBlocks[10].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional */}
            <div className="mt-8 bg-primary-blue rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white text-primary-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Gestión Integral</h3>
                  <p className="text-white text-sm">
                    Sistema completo para la administración de eventos y organizaciones
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-primary-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Seguridad</h3>
                  <p className="text-white text-sm">
                    Acceso controlado y seguro a toda la información
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-primary-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Soporte 24/7</h3>
                  <p className="text-white text-sm">
                    Asistencia técnica disponible en todo momento
                  </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}