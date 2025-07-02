import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaCalendarAlt } from 'react-icons/fa';

export default function Footer() {
  const lastUpdate = "02/07/2025";
  
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido superior */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo y derechos */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-[#0083bf]">Mi Portfolio</span>
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-6">
            <a href="https://github.com/SHervas03" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0083bf] transition-colors" aria-label="GitHub">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/shervas03" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0083bf] transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/s.hervs._" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0083bf] transition-colors" aria-label="Instagram">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Línea separadora y fecha de actualización */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-2 sm:mb-0">
            Desarrollado con React, Tailwind CSS y mucho café ☕
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-2 text-[#0083bf]" />
            <span>Última actualización: {lastUpdate}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}