'use client';

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

  const handleDropdownClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const pageId = hrefToPageId[href];
    setActivePage(pageId || null);
  };

  const handleDirectClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const pageId = hrefToPageId[href];
    setActivePage(pageId || null);
  };

  return (
    <nav className="bg-nav-secondary-gray border-b border-gray-300 min-h-[60px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-full">
          {/* Logo izquierda - dinámico */}
          <div className="flex items-center gap-3">
            <img
              src={currentConfig.logo.image}
              alt={currentConfig.logo.title}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="text-lg font-bold text-primary-blue leading-tight">
              <div>{currentConfig.logo.title}</div>
              <div className="text-base">{currentConfig.logo.subtitle}</div>
            </div>
          </div>

          {/* Navegación derecha - dinámica */}
          <ul className="flex items-center gap-6">
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
            {/* Search icon */}
            <li>
              <button className="p-2 text-gray-600 hover:text-primary-blue transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}