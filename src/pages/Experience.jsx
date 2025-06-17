import { FaProjectDiagram, FaCode, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { MdWork, MdOutlineAutoAwesome } from "react-icons/md";
import sticker from '../assets/9cc7b648-1a33-4d02-836c-2af4a8fe95f7.webp';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Técnico de Planificación Eléctrica",
      company: "REDEIA",
      period: "May 2024 - Ene 2025",
      location: "Madrid, España",
      icon: <FaChartLine className="text-[#0083bf] text-xl" />,
      highlights: [
        "Análisis y tratamiento de datos para optimización de redes eléctricas",
        "Desarrollo de visualizaciones interactivas con Python y Power BI",
        "Automatización de procesos con scripts en Python"
      ],
      tags: ["Python", "Power BI", "Automatización"]
    },
    {
      id: 2,
      role: "Delivery Analyst",
      company: "Deloitte",
      period: "Mar 2023 - Jun 2023",
      location: "Madrid, España",
      icon: <FaShieldAlt className="text-[#0083bf] text-xl" />,
      highlights: [
        "Detección de amenazas de seguridad mediante SIEM (IBM QRadar)",
        "Análisis forense de campañas de phishing/malware",
        "Implementación de medidas preventivas"
      ],
      tags: ["Ciberseguridad", "SIEM", "Phishing"]
    },
    {
      id: 3,
      role: "Desarrollador Appian",
      company: "INETUM",
      period: "Mar 2022 - Jun 2022",
      location: "Madrid, España",
      icon: <FaCode className="text-[#0083bf] text-xl" />,
      highlights: [
        "Desarrollo de aplicaciones low-code para gestión de procesos",
        "Mejora de eficiencia operativa",
        "Integración con sistemas legacy mediante APIs REST"
      ],
      tags: ["Appian", "Low-Code", "BPM"]
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="w-52 h-52 overflow-hidden mb-6">
            <img
              src={sticker}
              alt="Sticker experiencia"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Experiencia Profesional</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones técnicas con impacto medible en la empresa
          </p>
        </div>

        {/* Timeline de experiencias */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Línea vertical */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-[#0083bf]/20 -z-10"></div>

              {/* Punto decorativo */}
              <div className="absolute left-5 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#0083bf] group-hover:scale-125 transition-transform"></div>

              {/* Card */}
              <div className="ml-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                      <span className="mr-3">{exp.icon}</span>
                      {exp.role}
                    </h2>
                    <p className="text-lg text-[#0083bf] font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-medium">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 pl-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0083bf] rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#0083bf]/10 text-[#0083bf] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional para proyectos destacados */}
        <div className="mt-20 bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <MdOutlineAutoAwesome className="text-[#0083bf] mr-3 text-2xl" />
            Logros Clave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Premio BBVA */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-800">🏆 Premio BBVA - Potencial de Incubación</h3>
              <p className="text-gray-500 text-sm mt-1">Junio 2023</p>
              <p className="text-gray-700 mt-2">
                Plataforma para gestión de voluntariados corporativos con ONGs, desarrollada con:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* TFM Computer Vision */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-800">🔍 TFM: Detección de residuos con Computer Vision</h3>
              <p className="text-gray-500 text-sm mt-1">2024</p>
              <p className="text-gray-700 mt-2">
                Modelo de visión artificial con TensorFlow para clasificación de residuos.
              </p>
              <a
                href="https://github.com/SHervas03/TFM"
                className="mt-3 inline-flex items-center text-[#0083bf] hover:underline text-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}