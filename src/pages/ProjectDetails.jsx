import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { techMap } from "../data/techMap";
import { Code2 } from "lucide-react";

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
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition cursor-pointer"
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
      {/* <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-800"
          >
            {tech}
          </span>
        ))}
      </div> */}
      <div>
        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          <Code2 size={14} />
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((key, idx) => {
            const tech = techMap[key];

            if (!tech) return null;

            return (
              <span
                key={idx}
                className="
        flex items-center gap-2
        px-3 py-1 rounded-md text-xs font-semibold
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-700
        text-slate-700 dark:text-slate-300
        shadow-sm
      "
              >
                <img
                  src={tech.icon}
                  alt={tech.label}
                  className="w-4 h-4 object-contain"
                />
                {tech.label}
              </span>
            );
          })}
        </div>
      </div>
      <br />

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
        {/* Live Demo – Primary */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex items-center gap-2
      px-6 py-2.5 rounded-lg
      bg-gradient-to-br from-black to-neutral-800
      dark:from-white dark:to-neutral-200
      text-white dark:text-black
      text-sm font-semibold
      shadow-md shadow-black/20 dark:shadow-white/10
      hover:scale-[1.02] hover:shadow-lg
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-black dark:focus-visible:ring-white
    "
        >
          <BiGlobe size={18} />
          Live Demo
        </a>

        {/* Source Code – Secondary */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex items-center gap-2
      px-6 py-2.5 rounded-lg
      border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      text-neutral-800 dark:text-neutral-200
      text-sm font-medium
      hover:bg-neutral-100 dark:hover:bg-neutral-800
      hover:border-neutral-400 dark:hover:border-neutral-600
      hover:scale-[1.02]
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
    "
        >
          <BsGithub size={18} />
          Source Code
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
