import { useState } from "react";
import { motion } from "framer-motion";
import { SiLaravel, SiSymfony, SiVuedotjs, SiNextdotjs, SiNestjs } from "react-icons/si";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiLoader,
  FiGlobe,
  FiDatabase,
} from "react-icons/fi";
import { personal } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const getTechIcon = (tech) => {
  switch (tech) {
    case "Laravel":
      return <SiLaravel size={14} className="text-[#FF2D20]" />;
    case "Symfony":
      return (
        <SiSymfony size={14} className="text-gray-900 dark:text-gray-100" />
      );
    case "Vue.js":
      return <SiVuedotjs size={14} className="text-[#4FC08D]" />;
    case "Next.js":
      return (
        <SiNextdotjs size={14} className="text-gray-900 dark:text-gray-100" />
      );
    case "NestJS":
      return <SiNestjs size={14} className="text-[#E0234E]" />;
    case "SaaS":
      return <FiGlobe size={14} className="text-blue-500" />;
    case "REST APIs":
      return <FiDatabase size={14} className="text-amber-500" />;
    default:
      return null;
  }
};

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleDownload = async (e) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);

    // Simulate a brief delay to show the loader as requested
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Trigger download
    const link = document.createElement("a");
    link.href = personal.cv;
    link.download = "Maroof_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 border border-brand-500/20 dark:border-brand-400/20 text-brand-600 dark:text-brand-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-4xl sm:text-7xl md:text-8xl tracking-tight text-gray-900 dark:text-white mb-4"
        >
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gradient-text" : ""}>
              {word}
              {i === 0 ? " " : ""}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="font-display font-semibold text-lg sm:text-2xl text-gray-600 dark:text-gray-400 mb-3"
        >
          {personal.role}
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mb-10 max-w-4xl mx-auto"
        >
          {personal.tagline.map((tech, index) => (
            <div key={tech} className="flex items-center gap-2 group">
              <span className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 group-hover:border-brand-500/30 transition-colors shadow-sm">
                {getTechIcon(tech)}
              </span>
              <span className="font-mono text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide">
                {tech}
              </span>
              {index < personal.tagline.length - 1 && (
                <span className="ml-2 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          {...fadeUp(0.55)}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-lg leading-relaxed mb-10"
        >
          Building scalable web applications with clean architecture. Turning
          complex requirements into elegant, performant solutions.
        </motion.p>

        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-shadow"
            aria-label="View my featured projects"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            whileHover={{ scale: isDownloading ? 1 : 1.04 }}
            whileTap={{ scale: isDownloading ? 1 : 0.97 }}
            className={`w-full sm:w-auto px-7 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold flex items-center justify-center gap-2 transition-all ${
              isDownloading
                ? "opacity-80 cursor-not-allowed bg-gray-50 dark:bg-gray-800"
                : "hover:border-brand-500 hover:text-brand-500 dark:hover:border-brand-400 dark:hover:text-brand-400"
            }`}
            aria-label={
              isDownloading
                ? "Downloading CV..."
                : "Download my professional CV"
            }
          >
            {isDownloading ? (
              <FiLoader size={16} className="animate-spin" />
            ) : (
              <FiDownload size={16} />
            )}
            {isDownloading ? "Downloading..." : "Download CV"}
          </motion.button>
        </motion.div>

        <motion.div
          {...fadeUp(0.75)}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: personal.github, label: "GitHub" },
            { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3 }}
              className="p-3.5 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="p-2 text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors"
          aria-label="Scroll down"
        >
          <FiArrowDown size={22} />
        </motion.button>
      </div>
    </section>
  );
}
