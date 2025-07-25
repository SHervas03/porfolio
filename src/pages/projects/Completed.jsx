import { ProjectCard } from "../../components/projects/ProjectCard";
import { EmptyState } from "../../components/projects/EmptyState";
import { FaRegSmile } from "react-icons/fa";

export default function Completed() {

  const projects = [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Proyectos Completados</h1>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FaRegSmile}
            title="¡Vaya!"
            subtitle="Parece que no hay proyectos completados aún"
            additionalText="(Pero pronto habrá novedades)"
          />
        )}
      </div>
    </section>
  );
}