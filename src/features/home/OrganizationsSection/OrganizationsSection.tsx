import { organizations } from '@/data/organizations';
import { Button } from '@/components/ui/Button';

export default function OrganizationsSection() {
  const memberOrganizations = organizations.filter(org => org.type === 'member');
  const supportingOrganizations = organizations.filter(org => org.type === 'supporting');

  return (
    <section className="bg-gray-light py-20 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Sección de Búsqueda */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-primary-blue mb-10">
            Buscar ubicaciones
          </h2>
          <div className="max-w-md mx-auto">
            <div className="relative flex">
              <input
                type="text"
                placeholder="CÓDIGO POSTAL"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg text-center text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
              <Button 
                variant="primary"
                className="px-8 py-3 text-sm rounded-l-none border-l-0"
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>

        {/* Organizaciones Miembro */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-gray-800 mb-10 uppercase tracking-wider">
            Miembro orgulloso de...
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {memberOrganizations.map((org) => (
              <div key={org.id} className="flex flex-col items-center">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 mb-3 shadow-md">
                  LOGO
                </div>
                <span className="text-sm text-gray-700 max-w-[120px] text-center leading-tight font-medium">
                  {org.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizaciones que Apoyamos */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-10 uppercase tracking-wider">
            Apoyamos con orgullo a...
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {supportingOrganizations.map((org) => (
              <div key={org.id} className="flex flex-col items-center">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 mb-3 shadow-md">
                  LOGO
                </div>
                <span className="text-sm text-gray-700 max-w-[140px] text-center leading-tight font-medium">
                  {org.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
