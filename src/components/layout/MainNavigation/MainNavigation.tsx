'use client';

import { mainNavigation } from '@/data/navigation';
import { useSection } from '@/hooks/useSection';
import { useRouter } from 'next/navigation';

export default function MainNavigation() {
  const { activeSection, setActiveSection, setActivePage } = useSection();
  const router = useRouter();

  const handleSectionChange = (sectionId: string, href: string) => {
    setActiveSection(sectionId);
    setActivePage(null); // Limpiar página activa
    
    router.push(href);
  };

  return (
    <nav className="bg-red-900">
      <ul className="flex justify-center items-center max-w-7xl mx-auto">
        {mainNavigation.map((item, index) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => handleSectionChange(item.id, item.href)}
              className={`block no-underline py-4 px-6 font-medium text-sm uppercase tracking-wider transition-all duration-300 border-l border-red-900 ${
                activeSection === item.id
                  ? 'bg-white text-red-900' // ACTIVO
                  : 'text-white hover:bg-red-950 hover:text-white' // HOVER corregido
              } ${index === mainNavigation.length - 1 ? 'border-r border-white/10' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}