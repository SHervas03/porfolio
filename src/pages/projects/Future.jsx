import { EmptyState } from "../../components/projects/EmptyState";
import { FaRegLightbulb } from "react-icons/fa";

export default function Future() {
  
  const projects = [];

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