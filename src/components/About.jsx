import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm font-mono text-brand-500 dark:text-brand-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="section-pad bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          subtitle="A full-stack engineer passionate about clean code, scalable systems, and great user experiences."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mt-14"
        >
          {/* Bio */}
          <motion.div variants={item}>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-5">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Full-Stack Developer with 2+ years of experience building scalable web applications.
              Expert in <strong className="text-gray-900 dark:text-white">Laravel</strong> and{" "}
              <strong className="text-gray-900 dark:text-white">Symfony</strong> backends, paired
              with modern frontends using{" "}
              <strong className="text-gray-900 dark:text-white">Vue.js</strong> and{" "}
              <strong className="text-gray-900 dark:text-white">Livewire</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I&apos;ve delivered end-to-end{" "}
              <strong className="text-gray-900 dark:text-white">SaaS platforms</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">enterprise eCommerce</strong>, and{" "}
              <strong className="text-gray-900 dark:text-white">REST APIs</strong> for
              international clients — integrating payment gateways like{" "}
              <strong className="text-gray-900 dark:text-white">Stripe</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">PayPal</strong>, and{" "}
              <strong className="text-gray-900 dark:text-white">Braintree</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently pursuing BS Computer Science at{" "}
              <strong className="text-gray-900 dark:text-white">COMSATS University Islamabad</strong>{" "}
              with a CGPA of <strong className="text-brand-500">3.80/4.00</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Laravel", "Symfony", "PHP", "REST APIs", "SaaS", "TailwindCSS"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={item}>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
              Core Skills
            </h3>
            {skills.top.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              Supporting Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.supporting.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
