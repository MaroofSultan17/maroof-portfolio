import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronDown, FiChevronUp, FiCheckCircle, FiClock, FiCode } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project, index }: { project: ProjectGetResponseDTO; index: number }) {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const isLive = project.status?.code === "live" || project.status?.name === "Live";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="surface-card flex flex-col h-full overflow-hidden"
    >
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge
            variant={isLive ? "default" : "secondary"}
            className={
              isLive
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 gap-1.5"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 gap-1.5"
            }
          >
            {isLive ? <FiCheckCircle className="w-3.5 h-3.5" /> : <FiClock className="w-3.5 h-3.5" />}
            {project.status?.name || "Completed"}
          </Badge>

          {project.role && (
            <Badge variant="outline" className="text-muted">
              {project.role}
            </Badge>
          )}
        </div>

        <h3 className="font-display font-bold text-2xl text-primary mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-semibold text-primary/80 mb-3">
          {project.subtitle}
        </p>

        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-xs font-normal">
              {t}
            </Badge>
          ))}
        </div>

        {project.caseStudy && (
          <div className="mb-6 pt-4 border-t border-border">
            <button
              onClick={() => setShowCaseStudy(!showCaseStudy)}
              className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover transition-colors py-1"
              aria-expanded={showCaseStudy}
            >
              <span className="flex items-center gap-1.5">
                <FiCode className="w-3.5 h-3.5" />
                {showCaseStudy ? "Hide Technical Case Study" : "View Technical Case Study"}
              </span>
              {showCaseStudy ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
            </button>

            <AnimatePresence>
              {showCaseStudy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-3 space-y-3.5 text-xs text-muted leading-relaxed bg-surface/70 rounded-xl p-4 border border-border"
                >
                  <div>
                    <strong className="block text-primary font-semibold mb-1">The Problem:</strong>
                    <p>{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <strong className="block text-primary font-semibold mb-1">My Contribution:</strong>
                    <p>{project.caseStudy.contribution}</p>
                  </div>
                  <div>
                    <strong className="block text-primary font-semibold mb-1">Technical Decisions:</strong>
                    <p>{project.caseStudy.decisions}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="pt-4 border-t border-border flex items-center justify-between">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Visit Platform</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs text-muted font-mono italic">Platform in private pre-launch</span>
          )}

          {project.category?.name && (
            <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
              {project.category.name}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export interface ProjectsProps {
  projects: ProjectGetResponseDTO[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "streaming", name: "Streaming & SaaS" },
    { id: "ecommerce", name: "eCommerce" },
    { id: "saas", name: "Scheduling & SaaS" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category?.code === selectedCategory || p.category?.id === selectedCategory;
  });

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Featured Production Work"
          subtitle="Real-world streaming infrastructure, enterprise eCommerce, and scheduling platforms."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface border border-border text-muted hover:text-primary hover:border-border-hover"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
