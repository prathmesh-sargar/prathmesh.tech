import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <p className="pt-32 text-center text-gray-600 dark:text-gray-400">
        Project not found
      </p>
    );
  }

  return (
    <section className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
      >
        <BsArrowLeft />
        Back to projects
      </button>

      {/* Hero Image */}
      <div className="relative mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm"
        />
      </div>

      {/* Title & Meta */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {project.timeline}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          What I Built
        </h2>
        <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-black text-white text-sm font-medium hover:opacity-90 transition"
        >
          <BiGlobe size={18} />
          Live Demo
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 dark:border-neutral-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-900 transition"
        >
          <BsGithub size={18} />
          Source Code
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
