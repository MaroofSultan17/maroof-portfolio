import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { projects, categories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { FiGithub, FiExternalLink, FiLock, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps"
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
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // Re-initialize carousel when filtered projects change
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [emblaApi, filtered]);

  return (
    <section id="projects" className="section-pad bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          subtitle="From SaaS platforms to enterprise eCommerce — real products, real impact."
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-10 mb-12">
          {/* Filter tabs - with horizontal scroll on mobile */}
          <div className="flex-1 overflow-x-auto pb-4 sm:pb-0 no-scrollbar">
            <div className="flex justify-start gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
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
          </div>

          {/* Navigation Buttons - Top Position for Modern UI */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all border border-gray-200 dark:border-gray-700"
              aria-label="Previous project"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all border border-gray-200 dark:border-gray-700"
              aria-label="Next project"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex items-stretch gap-6 px-1 py-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <div key={project.title} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)] min-w-0">
                    <ProjectCard project={project} index={i} />
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {filtered.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selectedIndex === index 
                  ? "w-10 bg-brand-500 shadow-[0_0_12px_rgba(14,165,233,0.4)]" 
                  : "w-2 bg-gray-300 dark:bg-gray-800 hover:bg-brand-500/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
