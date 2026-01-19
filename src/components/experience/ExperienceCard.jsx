import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { techMap } from "../../data/techMap";

import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  Code2,
} from "lucide-react";

const ExperienceCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        {/* LEFT: DATE & LOCATION */}
        <div className="hidden md:flex flex-col items-end w-48 flex-shrink-0 text-right pt-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
            <Calendar size={14} />
            {item.date}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
            <MapPin size={13} />
            {item.location}
          </div>
        </div>

        {/* RIGHT: CARD */}
        <div className="flex-grow w-full">
          <div
            className="
              rounded-2xl overflow-hidden
              bg-slate-50 dark:bg-neutral-900/60
              border border-slate-200 dark:border-slate-700
              hover:border-slate-300 dark:hover:border-slate-600
              transition-all
            "
          >
            {/* HEADER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-5 md:p-6 flex justify-between items-start text-left"
            >
              <div className="flex gap-4">
                {/* ICON */}
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                  <Briefcase
                    size={20}
                    className="text-slate-700 dark:text-slate-300"
                  />
                </div>

                {/* TITLE */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Building2 size={14} />
                      {item.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {item.type}
                    </span>
                  </div>

                  {/* MOBILE DATE */}
                  <div className="md:hidden flex items-center gap-2 mt-2 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* CHEVRON */}
              <ChevronDown
                size={20}
                className={`mt-1 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 md:px-6 pb-6">
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mb-5" />

                    {/* BULLETS */}
                    <ul className="space-y-3 mb-6">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* TECH STACK */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        <Code2 size={14} />
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((key, idx) => {
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
