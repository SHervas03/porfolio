import { useRef } from 'react';
import { FaClock, FaEnvelope, FaCar, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import sticker from '../assets/2aeacec6-4d47-4213-9432-4ca0e2ac0e81.webp';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito!');
    formRef.current.reset();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con sticker */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="w-52 h-52 overflow-hidden mb-6">
            <img
              src={sticker}
              alt="Sticker de contacto"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Disponible para oportunidades laborales y colaboraciones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tarjeta de información */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Información personal</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0083bf]/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#0083bf] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Ubicación</h3>
                  <p className="text-gray-600">Madrid, España</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0083bf]/10 p-3 rounded-full mr-4">
                  <FaClock className="text-[#0083bf] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Horario</h3>
                  <p className="text-gray-600">Lunes a Viernes: 10:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0083bf]/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#0083bf] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:sergiohervas9@gmail.com" className="text-[#0083bf] hover:underline">
                    sergiohervas9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0083bf]/10 p-3 rounded-full mr-4">
                  <FaPhone className="text-[#0083bf] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Teléfono</h3>
                  <a href="tel:+34601293297" className="text-[#0083bf] hover:underline">
                    +34 601 293 297
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0083bf]/10 p-3 rounded-full mr-4">
                  <FaCar className="text-[#0083bf] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Movilidad</h3>
                  <p className="text-gray-600">Carnet de conducir B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envíame un mensaje</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0083bf] focus:border-[#0083bf] transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0083bf] focus:border-[#0083bf] transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0083bf] focus:border-[#0083bf] transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0083bf] focus:border-[#0083bf] transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#0083bf] text-white rounded-lg shadow hover:bg-[#006a99] transition-colors flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}