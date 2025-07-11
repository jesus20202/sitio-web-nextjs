'use client';

import { useState } from 'react';
import { mainNavigation } from '@/data/navigation';
import { useSection } from '@/hooks/useSection';
import { useRouter } from 'next/navigation';

export default function MainNavigation() {
  const { activeSection, setActiveSection, setActivePage } = useSection();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string, href: string) => {
    setActiveSection(sectionId);
    setActivePage(null);
    setIsMenuOpen(false); // Cerrar menú en móvil
    router.push(href);
  };

  return (
    <nav className="bg-red-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center">
          {mainNavigation.map((item, index) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleSectionChange(item.id, item.href)}
                className={`block no-underline py-4 px-6 font-medium text-sm uppercase tracking-wider transition-all duration-300 border-l border-red-900 ${
                  activeSection === item.id
                    ? 'bg-white text-red-900'
                    : 'text-white hover:bg-red-950 hover:text-white'
                } ${index === mainNavigation.length - 1 ? 'border-r border-white/10' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile menu button */}
          <div className="flex justify-between items-center py-4">
            <span className="text-white font-medium">GRAN RITO DE YORK</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu items */}
          {isMenuOpen && (
            <div className="pb-4">
              {mainNavigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id, item.href)}
                  className={`block w-full text-left py-3 px-4 text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white text-red-900'
                      : 'text-white hover:bg-red-950'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}