export default function Header() {
  return (
    <header className="bg-white py-3 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo placeholder */}
          <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center text-xs text-gray-600 rounded">
            LOGO
          </div>
          
          {/* Título */}
          <div>
            <h1 className="text-2xl font-bold text-primary-blue leading-tight">
              Grand York Rite
            </h1>
            <h2 className="text-xl font-bold text-primary-blue leading-tight">
              of California
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}