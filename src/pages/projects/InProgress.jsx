import { ProjectCard } from "../../components/projects/ProjectCard";
import { EmptyState } from "../../components/projects/EmptyState";
import { FaRegClock } from "react-icons/fa";

export default function InProgress() {
  
  const projects = []; 

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Proyectos en Progreso</h1>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FaRegClock}
            title="¡En construcción!"
            subtitle="Actualmente no hay proyectos públicos en desarrollo"
          />
        )}
      </div>
    </section>
  );
}