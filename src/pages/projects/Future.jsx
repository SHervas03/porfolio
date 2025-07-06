import { EmptyState } from "../../components/projects/EmptyState";
import { FaRegLightbulb } from "react-icons/fa";

export default function Future() {

  const projects = [
    {
      id: 1,
      title: "BetFriends - Apuestas entre grupos",
      description: "App móvil para que amigos hagan apuestas divertidas dentro de su grupo o compitiendo contra otros grupos."
    },
    {
      id: 2,
      title: "Friends Awards - Premios entre amigos",
      description: "Web interactiva para votar premios divertidos entre amigos, con nominaciones y resultados en tiempo real."
    },
    {
      id: 3,
      title: "Curso Udemy - React y TypeScript",
      description: "Guia completa de creacion de más de 10 proyectos."
    },
    {
      id: 4,
      title: "Curso Udemy - Spring",
      description: "Spring Framework 6 & Spring Boot 3 desde cero a experto."
    },
    {
      id: 5,
      title: "Curso Udemy - Docker",
      description: "Aprende Docker de cero a experto: con Compose y Swarm"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Proyectos Futuros</h1>

        {projects.length > 0 ? (
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaRegLightbulb className="text-yellow-500 mr-2" />
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FaRegLightbulb}
            title="¡Ideas en incubación!"
            subtitle="Próximamente se revelarán nuevos proyectos"
          />
        )}
      </div>
    </section>
  );
}