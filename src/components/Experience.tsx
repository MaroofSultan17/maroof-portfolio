import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

function ExperienceCard({ exp, index }: { exp: ExperienceGetResponseDTO; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -left-[35px] top-7 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-primary ring-4 ring-bg z-10">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <div className="surface-card p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-primary mb-1">
              {exp.role}
            </h3>

            <div className="flex items-center gap-2.5 flex-wrap">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-sm text-primary hover:underline"
                >
                  <FiBriefcase className="w-3.5 h-3.5" />
                  {exp.company}
                  <FiExternalLink className="w-3 h-3 opacity-70" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-semibold text-sm text-primary">
                  <FiBriefcase className="w-3.5 h-3.5" />
                  {exp.company}
                </span>
              )}

              {exp.type && (
                <Badge variant="default" className="text-[11px] font-mono">
                  {exp.type}
                </Badge>
              )}

              {exp.location && (
                <Badge variant="outline" className="text-[11px] font-mono text-muted">
                  {exp.location}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-muted bg-surface px-3 py-1 rounded-full border border-border">
            <FiCalendar className="w-3.5 h-3.5 text-primary" />
            <span>{exp.period}</span>
          </div>
        </div>

        <p className="text-sm text-muted mb-5 leading-relaxed font-normal">
          {exp.description}
        </p>

        <ul className="space-y-2.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export interface ExperienceProps {
  experiences: ExperienceGetResponseDTO[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Career History"
          subtitle="Production engineering roles across SaaS, video streaming, and eCommerce platforms."
        />

        <div className="mt-14 relative md:pl-8">
          <div className="hidden md:block absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
