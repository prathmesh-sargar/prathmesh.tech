import { ExperienceData } from "../data/experienceData";
import { techMap } from "../data/techMap";

const ExperiencePage = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Work Experience
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          My professional experience across freelance, internships, and
          production-grade projects.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {ExperienceData.map((exp) => (
          <div
            key={exp.id}
            className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black shadow-sm p-6"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.company} • {exp.type}
                </p>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.date}
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {exp.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <br />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((key, idx) => {
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
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
