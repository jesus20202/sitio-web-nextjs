'use client';

import { useState } from 'react';
import { useSection } from '@/hooks/useSection';

const hrefToPageId: Record<string, string> = {
  '/about/overview': 'overview',
  '/about/royal-arch': 'history',
  '/about/cryptic': 'connect',
  '/about/knights-templar': 'locator',
  '/about/requirements': 'other-organizations',
  '/locations/chapters': 'locator',  
  '/locations/cities': 'cities',
  '/events/calendar': 'calendar',
  '/events/officers-conference': 'officers-conference',
  '/events/grand-sessions': 'grand-sessions',
  '/events/form-event': 'form-event',
  '/news/newsContent': 'newsContent',
  '/news/workman': 'workman',
  '/news/swordtrowel': 'swordtrowel',
  '/news/crosscrown': 'crosscrown',
  '/contact/general': 'general',
  '/history/chapter': 'chapter',
  '/history/council': 'council',
  '/history/commandery': 'commandery',
  '/history/founding': 'founding',
  '/history/events': 'events',
};

export default function SecondaryNavigation() {
  const { currentConfig, setActivePage } = useSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const handleDropdownClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const pageId = hrefToPageId[href];
    setActivePage(pageId || null);
    setIsMenuOpen(false);
  };

  const handleDirectClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const pageId = hrefToPageId[href];
    setActivePage(pageId || null);
    setIsMenuOpen(false);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <nav className="bg-nav-secondary-gray border-b border-gray-300 min-h-[60px]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5">
        <div className="flex justify-between items-center h-full">
          {/* Logo izquierda - dinámico */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={currentConfig.logo.image}
              alt={currentConfig.logo.title}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded"
            />
            <div className="text-sm sm:text-lg font-bold text-primary-blue leading-tight">
              <div>{currentConfig.logo.title}</div>
              <div className="text-xs sm:text-base">{currentConfig.logo.subtitle}</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 justify-center">
            {currentConfig.navigation.map((item) => (
              <li key={item.label} className="relative group">
                {item.items ? (
                  <>
                    <a
                      href={item.href || "#"}
                      onClick={(e) => item.href ? handleDirectClick(item.href, e) : e.preventDefault()}
                      className="flex items-center text-gray-700 no-underline py-4 px-4 text-sm font-medium transition-all duration-300 uppercase tracking-wider hover:bg-gray-300 hover:text-primary-blue"
                    >
                      {item.label}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                    <div className="hidden group-hover:block absolute bg-white min-w-[240px] shadow-xl z-50 top-full left-0 border border-gray-300 rounded">
                      {item.items.map((subItem, index) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleDropdownClick(subItem.href, e)}
                          className={`block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-blue transition-colors ${
                            index < item.items!.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleDirectClick(item.href!, e)}
                    className="block text-gray-700 no-underline py-4 px-4 text-sm font-medium transition-all duration-300 uppercase tracking-wider hover:bg-gray-300 hover:text-primary-blue"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-300 py-4">
            {currentConfig.navigation.map((item) => (
              <div key={item.label} className="mb-4">
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center justify-between w-full font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 py-2 px-2 hover:bg-gray-100 rounded"
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform ${openDropdowns.includes(item.label) ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdowns.includes(item.label) && (
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleDropdownClick(subItem.href, e)}
                            className="block text-sm text-gray-600 hover:text-primary-blue transition-colors py-1"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleDirectClick(item.href!, e)}
                    className="block font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 py-2 px-2 hover:bg-gray-100 rounded"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}