import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * SectionHeader Component
 * Standardized header for all major landing sections.
 *
 * @param {Object} props
 * @param {string} props.label - Small uppercase label (e.g., "CONTACT")
 * @param {string} props.title - Main heading title
 * @param {string} [props.subtitle] - Optional descriptive text
 */
export default function SectionHeader({ label, title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center"
    >
      <span className="inline-block font-mono text-sm font-medium text-brand-500 dark:text-brand-400 mb-3 tracking-widest uppercase">
        {label}
      </span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
