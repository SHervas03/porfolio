import { FaTools, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sticker from '../assets/32a8759c-a326-48f0-afd1-af2e5e731b72.webp';

export default function Maintenance() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 h-full bg-white">
            {/* Contenedor del sticker */}
            <div className="mx-auto mb-8 w-60 h-60 rounded-md p-2">
                <img
                    src={sticker}
                    alt="Sticker de mantenimiento"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Contenido textual */}
            <div className="text-center max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center">
                    <FaTools className="mr-2 text-[#0083bf]" />
                    Sitio en mantenimiento
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                    Estamos realizando actualizaciones para mejorar tu experiencia.
                    Por favor, vuelve más tarde.
                </p>

                {/* Detalles adicionales */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-center text-gray-700">
                        <FaEnvelope className="mr-2 text-[#0083bf]" />
                        <span>Contacto: sergiohervas9@gmail.com</span>
                    </div>
                </div>

                {/* Botón de acción */}
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-2 bg-[#0083bf] text-white rounded-md hover:bg-[#006a99] transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}