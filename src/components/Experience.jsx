import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-6 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-brand-500 ring-4 ring-white dark:ring-gray-950 z-10">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <div className="card p-5 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <FiBriefcase size={13} className="text-brand-500" />
              <span className="text-brand-500 dark:text-brand-400 font-semibold text-sm">
                {exp.company}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {exp.type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <FiCalendar size={13} />
            <span className="font-mono text-xs">{exp.period}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 italic">
          {exp.description}
        </p>

        <ul className="space-y-2.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 sm:gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          subtitle="2+ years of shipping production software across product and service companies."
        />

        <div className="mt-14 relative md:pl-10">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
