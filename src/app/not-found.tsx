import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-primary-blue mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Página no encontrada
        </h3>
        <p className="text-gray-600 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link 
          href="/"
          className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-secondary-blue transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}