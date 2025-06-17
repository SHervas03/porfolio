import { useEffect, useState, useRef, useMemo } from 'react';
import { FiMenu, FiX, FiGlobe, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { routesConfig } from '../../../routes/routesConfig';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimer = useRef(null);
  const dropdownAreaRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainNavItems = useMemo(() =>
    routesConfig.filter(route => route.meta?.showInNav !== false),
    [routesConfig]
  );

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const classNamePath = (path) => {
    const isActive = path === "/" ?
      location.pathname === path :
      location.pathname.startsWith(path);
    return `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${isActive
      ? "border-[#0083bf] text-black"
      : "border-transparent text-black hover:border-[#0083bf] duration-300"
      }`;
  };

  const handleDropdownToggle = (path) => {
    clearTimeout(dropdownTimer.current);
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  const handleMouseEnterDropdownArea = (path) => {
    clearTimeout(dropdownTimer.current);
    setActiveDropdown(path);
  };

  const handleMouseLeaveDropdownArea = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-sm" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Inicio">
                <span className="text-xl font-bold text-[#0083bf]">Mi Porfolio</span>
              </Link>
            </div>

            {/* Menú desktop */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {mainNavItems.map((route) => (
                <div key={route.path} className="relative">
                  {route.children ? (
                    <div
                      ref={dropdownAreaRef}
                      className="relative py-3 -my-3 px-1"
                      onMouseEnter={() => handleMouseEnterDropdownArea(route.path)}
                      onMouseLeave={handleMouseLeaveDropdownArea}
                    >
                      <button
                        className={`${classNamePath(route.path)} inline-flex items-center`}
                        onClick={() => handleDropdownToggle(route.path)}
                        aria-expanded={activeDropdown === route.path}
                        aria-controls={`dropdown-${route.path}`}
                        aria-haspopup="true"
                      >
                        {route.meta.navName}
                        {activeDropdown === route.path ? (
                          <FiChevronUp className="ml-1 transition-transform duration-200" aria-hidden="true" />
                        ) : (
                          <FiChevronDown className="ml-1 transition-transform duration-200" aria-hidden="true" />
                        )}
                      </button>

                      <div
                        id={`dropdown-${route.path}`}
                        role="menu"
                        className={`absolute left-0 w-48 bg-white shadow-lg ring-1 ring-[#0083bf] p-2 rounded-sm ring-opacity-5 z-50 ${activeDropdown === route.path
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 translate-y-1 invisible pointer-events-none'
                          } transition-all duration-300 ease-out`}
                        style={{ top: 'calc(100% + 4px)' }}
                      >
                        {route.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path.startsWith('/') ? child.path : `${route.path}/${child.path}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0083bf] hover:text-white rounded-sm transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                            role="menuitem"
                            aria-current={location.pathname.startsWith(`${route.path}/${child.path}`) ? 'page' : undefined}
                          >
                            {child.meta.navName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={route.path}
                      className={classNamePath(route.path)}
                      aria-current={location.pathname === route.path ? 'page' : undefined}
                    >
                      {route.meta.navName}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selector de idioma desktop */}
          <div className="hidden md:flex md:items-center">
            <div className="relative">
              <label htmlFor="language-selector" className="sr-only">Seleccionar idioma</label>
              <select
                id="language-selector"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent border-none text-black py-2 pl-3 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009ee1] text-sm font-medium"
              >
                <option value="es">ES</option>
              </select>
              <FiGlobe className="absolute right-2 top-2.5 text-black" aria-hidden="true" />
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#009ee1]"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="h-6 w-6" aria-hidden="true" /> : <FiMenu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil expandido */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="px-4 h-16 flex items-center justify-between border-b border-gray-200">
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Inicio" onClick={toggleMenu}>
                <span className="text-xl font-bold text-[#0083bf]">Mi Porfolio</span>
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-grow px-4 pt-4 pb-3 overflow-y-auto">
            <nav className="space-y-2" aria-label="Navegación móvil">
              {mainNavItems.map((route) => (
                <div key={route.path}>
                  {route.children ? (
                    <div className="mb-2">
                      <button
                        onClick={() => handleDropdownToggle(route.path)}
                        aria-expanded={activeDropdown === route.path}
                        aria-controls={`mobile-dropdown-${route.path}`}
                        aria-haspopup="true"
                        className={`w-full flex justify-between items-center p-3 rounded-md ${location.pathname.startsWith(route.path)
                          ? 'bg-[#0083bf] text-white'
                          : 'text-gray-700 hover:bg-[#0083bf]/10'
                          }`}
                      >
                        {route.meta.navName}
                        {activeDropdown === route.path ? (
                          <FiChevronUp className="ml-1" aria-hidden="true" />
                        ) : (
                          <FiChevronDown className="ml-1" aria-hidden="true" />
                        )}
                      </button>

                      <div
                        id={`mobile-dropdown-${route.path}`}
                        role="menu"
                        className={`pl-4 mt-1 space-y-1 transition-all duration-300 ${activeDropdown === route.path ? 'block' : 'hidden'
                          }`}
                      >
                        {route.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path.startsWith('/') ? child.path : `${route.path}/${child.path}`}
                            onClick={toggleMenu}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-[#0083bf]/10 transition-colors duration-200"
                            role="menuitem"
                            aria-current={location.pathname.startsWith(`${route.path}/${child.path}`) ? 'page' : undefined}
                          >
                            {child.meta.navName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={route.path}
                      onClick={toggleMenu}
                      className={`block p-3 rounded-md ${location.pathname === route.path
                        ? 'bg-[#0083bf] text-white'
                        : 'text-gray-700 hover:bg-[#0083bf]/10'
                        }`}
                      aria-current={location.pathname === route.path ? 'page' : undefined}
                    >
                      {route.meta.navName}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Selector de idioma móvil */}
          <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
            <div className="relative">
              <label htmlFor="mobile-language-selector" className="sr-only">Seleccionar idioma</label>
              <select
                id="mobile-language-selector"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-white border border-gray-300 text-black py-2 pl-3 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009ee1] text-sm font-medium w-full"
              >
                <option value="es">Español (ES)</option>
              </select>
              <FiGlobe className="absolute right-3 top-3 text-gray-500" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}