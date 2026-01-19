import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lens } from "../../ui/lightswind/lens";
import { TbLoader2 } from "react-icons/tb";
import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { techMap } from "../../data/techMap";
import { Code2 } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="
        group relative cursor-pointer
        rounded-2xl overflow-hidden
        bg-white/70 dark:bg-neutral-900/70
        border border-gray-200 dark:border-neutral-800
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Lens zoomFactor={2} lensSize={140}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Lens>

        {/* STATUS BADGE */}
        <div className="absolute top-3 left-3 z-10">
          {project.status === "In Progress" ? (
            <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
              <TbLoader2 className="animate-spin" />
              In Progress
            </span>
          ) : (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/80 text-white">
              Live
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:underline underline-offset-4">
          {project.title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
          {project.description[0]}
        </p>

        {/* TAGS */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="
                text-[11px] px-2.5 py-1 rounded-full
                bg-gray-100 dark:bg-neutral-800
                text-gray-700 dark:text-gray-300
                border border-gray-200 dark:border-neutral-700
              "
            >
              {tech}
            </span>
          ))}
        </div> */}
        <div>
    

          <div className="flex flex-wrap gap-2 mt-2">
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

        {/* ACTIONS */}
        <div
          className="mt-6 flex items-center justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {project.status !== "In Progress" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 text-sm font-medium
                text-gray-700 dark:text-gray-300
                hover:text-black dark:hover:text-white
                transition
              "
            >
              <BiGlobe size={18} />
              Live
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 text-sm font-medium
              text-gray-700 dark:text-gray-300
              hover:text-black dark:hover:text-white
              transition
            "
          >
            <BsGithub size={18} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
