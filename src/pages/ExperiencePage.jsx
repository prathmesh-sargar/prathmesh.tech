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
                {/* ICON */}
                <div className="flex gap-3 justify-center ">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                    <img
                      src={exp.companyLogo}
                      alt="logo"
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.company} • {exp.type}
                    </p>
                     {exp.projects && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                      Freelance
                    </span>
                  )}
                  </div>
                </div>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.date}
              </span>
            </div>

            {/* CONTENT */}
{exp.projects ? (
  /* FREELANCE PROJECTS */
  <div className="space-y-6">
    {exp.projects.map((project, idx) => (
      <div key={idx}>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Client: {project.client}
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-3">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((key, i) => {
            const tech = techMap[key];
            if (!tech) return null;

            return (
              <span
                key={i}
                className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-300"
              >
                <img src={tech.icon} alt={tech.label} className="w-4 h-4" />
                {tech.label}
              </span>
            );
          })}
        </div>
      </div>
    ))}
  </div>
) : (
  /* INTERNSHIPS */
  <>
    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
      {exp.bullets.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {exp.technologies.map((key, idx) => {
        const tech = techMap[key];
        if (!tech) return null;

        return (
          <span
            key={idx}
            className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-700
            text-slate-700 dark:text-slate-300"
          >
            <img src={tech.icon} alt={tech.label} className="w-4 h-4" />
            {tech.label}
          </span>
        );
      })}
    </div>
  </>
)}

          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
