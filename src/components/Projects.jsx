import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { projects, categories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import {
  FiGithub,
  FiExternalLink,
  FiLock,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

/**
 * ProjectCard Component
 * Renders a single project item with high-performance animations.
 *
 * @param {Object} props
 * @param {Object} props.project - The project data
 * @param {number} props.index - Staggering index
 */
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
      className="card group flex flex-col h-full overflow-hidden"
    >
      <div
        className={`h-2 bg-gradient-to-r ${project.color}`}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
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
          <span className="text-xs text-gray-400 dark:text-gray-600 font-semibold tracking-wide uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-brand-500 dark:text-brand-400 font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

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

        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              <FiGithub size={15} />
              <span>Repository</span>
            </motion.a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-600 italic" aria-label="Source code is proprietary">
              <FiLock size={14} />
              <span>Proprietary</span>
            </span>
          )}

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm text-brand-500 dark:text-brand-400 hover:text-brand-600 font-bold transition-colors ml-auto"
              aria-label={`Launch ${project.title} live demo`}
            >
              <FiExternalLink size={15} />
              <span>Launch</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = useMemo(() => {
    return active === "All"
      ? projects
      : projects.filter((p) => p.category === active);
  }, [active]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [emblaApi, filtered]);

  return (
    <section
      id="projects"
      className="section-pad bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Showcase"
          title="Featured Projects"
          subtitle="A selection of high-impact solutions, from enterprise systems to scalable SaaS products."
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-12 mb-12">
          <div className="flex-1 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <div className="flex justify-start gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    active === cat
                      ? "text-white shadow-lg shadow-brand-500/25"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                  }`}
                  aria-pressed={active === cat}
                  aria-label={`Filter by ${cat}`}
                >
                  {active === cat && (
                    <motion.span
                      layoutId="filter-bg"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-all border border-gray-200/50 dark:border-gray-700/50 active:scale-90"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-all border border-gray-200/50 dark:border-gray-700/50 active:scale-90"
              aria-label="Next slide"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex items-stretch gap-6 px-1 py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((project, i) => (
                  <div
                    key={project.title}
                    className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)] min-w-0"
                  >
                    <ProjectCard project={project} index={i} />
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {filtered.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                selectedIndex === index
                  ? "w-10 bg-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                  : "w-2 bg-gray-300 dark:bg-gray-800 hover:bg-brand-500/30"
              }`}
              aria-label={`Jump to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
