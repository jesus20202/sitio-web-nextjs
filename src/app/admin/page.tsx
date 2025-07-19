'use client';

import { useState } from 'react';
import { ChevronLeft, Edit3, Users, Settings, BarChart3, HelpCircle, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'content', icon: Edit3, label: 'Editar Contenido', href: '#' },
    { id: 'users', icon: Users, label: 'Gestionar Usuarios', href: '#' },
    { id: 'settings', icon: Settings, label: 'Configuración', href: '#' },
    { id: 'analytics', icon: BarChart3, label: 'Revisar Estadísticas', href: '#' },
    { id: 'support', icon: HelpCircle, label: 'Soporte Técnico', href: '#' },
    { id: 'logout', icon: LogOut, label: 'Logout', href: '/' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-blue-900 text-white flex flex-col transition-all duration-200 shadow-lg`}>
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute left-64 top-8 -ml-3 bg-blue-900 text-white rounded-full p-1 shadow-md hover:bg-blue-800 z-10"
          style={{ left: sidebarCollapsed ? '77px' : '253px' }}
        >
          <ChevronLeft className={`w-4 h-4 ${sidebarCollapsed ? 'rotate-180' : ''}`} />
        </button>

        {/* Header */}
        <div className="py-6 px-4 border-b border-blue-800">
          <h2 className={`font-bold uppercase tracking-wider ${sidebarCollapsed ? 'text-xs text-center' : 'text-lg'}`}>
            {sidebarCollapsed ? 'PA' : 'Panel de Administración'}
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col py-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '#') {
                    e.preventDefault();
                    setActiveSection(item.id);
                  }
                }}
                className={`flex items-center gap-3 mx-3 px-3 py-3 rounded hover:bg-blue-800 ${
                  activeSection === item.id ? 'bg-blue-800' : ''
                }`}
              >
                <Icon className={`${sidebarCollapsed ? 'w-5 h-5' : 'w-5 h-5'}`} />
                {!sidebarCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Bienvenido, Administrador</h1>
            <p className="text-gray-600">Gestiona el contenido y configuración del sitio.</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Primary Content Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* General Information */}
              <div className="bg-white rounded-lg shadow border p-6">
                <h2 className="text-lg font-bold text-blue-900 mb-4">Información General</h2>
                <p className="text-gray-600 mb-6">
                  Aquí puedes realizar cambios en el contenido del sitio, gestionar usuarios y revisar estadísticas.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Gestión de Contenido</h3>
                    <p className="text-sm text-gray-600">Administra páginas, artículos y recursos del sitio web.</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Control de Usuarios</h3>
                    <p className="text-sm text-gray-600">Gestiona permisos y accesos de los miembros.</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Configuración</h3>
                    <p className="text-sm text-gray-600">Ajusta parámetros y preferencias del sistema.</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Soporte</h3>
                    <p className="text-sm text-gray-600">Accede a herramientas de ayuda y documentación.</p>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-lg shadow border p-6">
                <h2 className="text-lg font-bold text-blue-900 mb-4">Estado del Sistema</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Servidor</span>
                    <span className="text-green-600 font-medium">Operativo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Base de Datos</span>
                    <span className="text-green-600 font-medium">Conectada</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sistema de Archivos</span>
                    <span className="text-green-600 font-medium">Disponible</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              
              {/* Quick Access */}
              <div className="bg-white rounded-lg shadow border p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Acceso Rápido</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                    <div className="font-medium text-gray-900">Nuevo Artículo</div>
                    <div className="text-sm text-gray-600">Crear contenido nuevo</div>
                  </button>
                  <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                    <div className="font-medium text-gray-900">Gestión de Archivos</div>
                    <div className="text-sm text-gray-600">Administrar documentos</div>
                  </button>
                  <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                    <div className="font-medium text-gray-900">Configuración</div>
                    <div className="text-sm text-gray-600">Ajustar parámetros</div>
                  </button>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}