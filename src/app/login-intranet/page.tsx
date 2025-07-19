'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter(); // Inicializa useRouter
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    console.log('Login attempt:', formData);
    router.push('/dashboard-intranet'); // Redirige al dashboard-intranet
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-100">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <div className="text-white text-2xl font-bold">RY</div>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2 uppercase tracking-wider">
            INTRANET
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Acceso exclusivo para miembros autorizados
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="usuario@ejemplo.com"
                autoComplete="username"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="********"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Mantener sesión activa
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg shadow hover:bg-blue-800 transition-colors uppercase tracking-wider"
          >
            Ingresar
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <a href="#" className="block text-blue-900 hover:text-blue-800 text-sm">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Rito York Perú - Sistema de Acceso
            </p>
            
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-center">
            <h3 className="text-sm font-medium text-blue-900 mb-1">
              Acceso Restringido
            </h3>
            <p className="text-xs text-blue-700">
              Este sistema está destinado únicamente para miembros autorizados del Rito York Perú.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}