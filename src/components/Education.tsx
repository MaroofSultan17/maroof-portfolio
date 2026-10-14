import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiCalendar, FiBookOpen } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

export interface EducationProps {
  education: EducationGetResponseDTO[];
}

export default function Education({ education }: EducationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="section-padding">
      <div className="section-container max-w-4xl">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Formal foundation in computer science, software design, and distributed systems."
        />

        <div ref={ref} className="mt-12 space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <FiBookOpen className="text-primary w-5 h-5 flex-shrink-0" />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-primary">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-muted text-base font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-sm text-muted">
                  <Badge variant="outline" className="gap-1.5 font-mono text-xs text-muted">
                    <FiCalendar className="w-3.5 h-3.5 text-primary" />
                    {edu.period}
                  </Badge>
                  {edu.cgpa && (
                    <Badge variant="default" className="gap-1.5 font-mono text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-semibold">
                      <FiAward className="w-3.5 h-3.5" />
                      CGPA {edu.cgpa}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
