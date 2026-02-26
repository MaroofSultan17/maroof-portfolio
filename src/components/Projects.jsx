import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, categories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      layout
      className="card group flex flex-col overflow-hidden"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              project.status === "Live"
                ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
            }`}
          >
            {project.status}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-600 font-medium">
            {project.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-brand-500 dark:text-brand-400 font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiGithub size={15} />
              <span>Code</span>
            </motion.a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-600">
              <FiLock size={14} />
              <span>Private</span>
            </span>
          )}

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm text-brand-500 dark:text-brand-400 hover:text-brand-600 dark:hover:text-brand-300 font-medium transition-colors ml-auto"
            >
              <FiExternalLink size={15} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          subtitle="From SaaS platforms to enterprise eCommerce — real products, real impact."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                active === cat
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
