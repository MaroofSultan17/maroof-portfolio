import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiServer, FiVideo, FiDatabase, FiLayout, FiTerminal } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

const categoryIcons: Record<string, typeof FiServer> = {
  "Backend & Systems": FiServer,
  "Streaming & APIs": FiVideo,
  "Databases & Caching": FiDatabase,
  "Frontend Engineering": FiLayout,
  "DevOps & Cloud": FiTerminal,
};

export interface SkillsProps {
  skills: SkillGroupGetResponseDTO[];
}

export default function Skills({ skills }: SkillsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="section-padding bg-surface/40">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technical Capabilities"
          subtitle="A battle-tested stack honed over 2.5+ years building production SaaS, streaming, and eCommerce platforms."
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {skills.map((group, idx) => {
            const Icon = categoryIcons[group.category] || FiServer;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="surface-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
