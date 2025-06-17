import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaEnvelope } from 'react-icons/fa';
import sticker from '../assets/508dbd22-a08e-468d-a878-e68b13a4480f.webp';

export default function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.history.replaceState(null, '', location.pathname);
    }, [location]);

    const handleLinkClick = (path) => {
        navigate(path, { replace: true });
    };

    return (
        <div className="flex flex-col mt-24 items-center justify-center flex-grow py-12 px-4 sm:px-6 lg:px-8">
            {/* Contenedor del sticker */}
            <div className="mx-auto mb-8 w-60 h-60 rounded-md p-2">
                <img
                    src={sticker}
                    alt="Sticker de error 404"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Contenido principal */}
            <div className="text-center max-w-md w-full">
                <div className="flex items-center justify-center text-red-500 mb-4">
                    <FaExclamationTriangle className="mr-2 text-2xl" />
                    <h1 className="text-3xl font-bold">Error 404</h1>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Página no encontrada</h2>

                <p className="text-gray-600 mb-6">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>

                {/* Acciones */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => handleLinkClick('/')}
                        className="flex items-center justify-center px-5 py-2.5 bg-[#0083bf] text-white rounded-lg hover:bg-[#006a99] transition-colors"
                    >
                        <FaHome className="mr-2" />
                        Volver al inicio
                    </button>

                    <button
                        onClick={() => handleLinkClick('/contacto')}
                        className="flex items-center justify-center px-5 py-2.5 border border-[#0083bf] text-[#0083bf] rounded-lg hover:bg-[#0083bf]/10 transition-colors"
                    >
                        <FaEnvelope className="mr-2" />
                        Contactar soporte
                    </button>
                </div>
            </div>
        </div>
    );
}