import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center"
    >
      <span className="inline-block font-mono text-sm font-medium text-primary mb-3 tracking-widest uppercase">
        {label}
      </span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl mx-auto text-muted text-base sm:text-lg lg:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
