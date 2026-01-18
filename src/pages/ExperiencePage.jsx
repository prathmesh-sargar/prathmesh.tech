import { ExperienceData } from "../data/experienceData";

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

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
