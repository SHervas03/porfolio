import { FaGraduationCap, FaLaptopCode, FaCode, FaGlobe, FaBrain, FaTools, FaChartLine } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import sticker from '../assets/b35ab4ba-20b5-4993-8fec-eff3d0d900ab.webp';

export default function About() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="w-52 h-52 overflow-hidden mb-6">
            <img
              src={sticker}
              alt="Sticker sobre mí"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sobre mí</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Data Scientist | Full-Stack Developer | Transformación Digital
          </p>
        </div>

        {/* Sección: Quién soy */}
        <div className="mb-16 bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-[#0083bf] w-6 h-6 rounded-full mr-3"></span>
            ¿Quién soy?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Titulado en <strong>Data Science y Business Analytics</strong> con experiencia en desarrollo de software e inteligencia artificial.
            Combino habilidades técnicas (Python, JavaScript, TensorFlow) con competencias en transformación digital y metodologías ágiles.
            Apasionado por crear soluciones que integran análisis de datos, automatización y experiencia de usuario.
          </p>
        </div>

        {/* Grid de 2 columnas: Formación + Habilidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Formación académica */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaGraduationCap className="text-[#0083bf] mr-3 text-2xl" />
              Formación
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="font-medium text-gray-900 flex items-center">
                  <IoMdSchool className="mr-2 text-[#0083bf]" />
                  Máster en Organizaciones Ágiles
                </h3>
                <p className="text-gray-600 ml-7">Fundación Universidad-Empresa (2024-2025)</p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 flex items-center">
                  <IoMdSchool className="mr-2 text-[#0083bf]" />
                  Máster en Data Science y Business Analytics
                </h3>
                <p className="text-gray-600 ml-7">IMF Smart Education (2023-2024)</p>
                <p className="text-gray-500 text-sm ml-7">Tesis: Detección de residuos con Computer Vision</p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 flex items-center">
                  <IoMdSchool className="mr-2 text-[#0083bf]" />
                  Doble Grado Superior en Desarrollo de Aplicaciones Web
                </h3>
                <p className="text-gray-600 ml-7">IMF Smart Education (2022-2023)</p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 flex items-center">
                  <IoMdSchool className="mr-2 text-[#0083bf]" />
                  Grado Superior en Desarrollo de Aplicaciones Multiplataforma
                </h3>
                <p className="text-gray-600 ml-7">IMF Smart Education (2020-2022)</p>
              </li>
            </ul>
          </div>

          {/* Habilidades técnicas */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaLaptopCode className="text-[#0083bf] mr-3 text-2xl" />
              Habilidades técnicas
            </h2>

            {/* Data Science */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <FaChartLine className="mr-2 text-[#0083bf]" />
                Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'Pandas', 'Power BI', 'Scikit-Learn', 'Numpy'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0083bf]/10 text-[#0083bf] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Desarrollo */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <FaCode className="mr-2 text-[#0083bf]" />
                Desarrollo
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Node.js', 'React', 'HTML/CSS', 'PHP', 'MySQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0083bf]/10 text-[#0083bf] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Herramientas */}
            <div>
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <FaTools className="mr-2 text-[#0083bf]" />
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'VS Code', 'PyCharm', 'Firebase'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0083bf]/10 text-[#0083bf] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Idiomas y Competencias blandas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Idiomas */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaGlobe className="text-[#0083bf] mr-3 text-2xl" />
              Idiomas
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Español</h3>
                <p className="text-gray-600">Nativo</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Inglés</h3>
                <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                  <div>
                    <p className="text-gray-500">Comprensión</p>
                    <p className="text-gray-700">B2 (First Certificate)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expresión</p>
                    <p className="text-gray-700">B1/B2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competencias blandas */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaBrain className="text-[#0083bf] mr-3 text-2xl" />
              Competencias clave
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Trabajo en equipo', 'Adaptabilidad', 'Storytelling',
                'Gestión de proyectos', 'Resolución de problemas', 'Inteligencia emocional'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}