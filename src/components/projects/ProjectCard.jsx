import { FaGithub, FaExternalLinkAlt, FaRegFileAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-[#0083bf]/10 text-[#0083bf] rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-4 mt-auto">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener" className="flex items-center text-gray-700 hover:text-[#0083bf] transition-colors text-sm">
            <FaGithub className="mr-2" /> Código
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener" className="flex items-center text-gray-700 hover:text-[#0083bf] transition-colors text-sm">
            <FaExternalLinkAlt className="mr-2" /> Demo
          </a>
        )}
        {project.reportUrl && (
          <a href={project.reportUrl} target="_blank" className="flex items-center text-gray-700 hover:text-[#0083bf] transition-colors text-sm">
            <FaRegFileAlt className="mr-2" /> Memoria
          </a>
        )}
      </div>
    </div>
  );
};