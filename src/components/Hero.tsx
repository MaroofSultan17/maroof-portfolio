import { motion } from "framer-motion";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageSquare,
  FiVideo,
  FiServer,
  FiArrowDown,
} from "react-icons/fi";
import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiLaravel,
  SiSymfony,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const getTechIcon = (tech: string) => {
  switch (tech) {
    case "Node.js":
      return <SiNodedotjs className="text-emerald-500 w-3.5 h-3.5" />;
    case "Express.js":
    case "Express":
      return <SiExpress className="text-neutral-400 dark:text-neutral-300 w-3.5 h-3.5" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-500 w-3.5 h-3.5" />;
    case "Laravel":
      return <SiLaravel className="text-red-500 w-3.5 h-3.5" />;
    case "Symfony":
      return <SiSymfony className="text-primary w-3.5 h-3.5" />;
    case "React":
      return <SiReact className="text-sky-400 w-3.5 h-3.5" />;
    case "Next.js":
      return <SiNextdotjs className="text-primary w-3.5 h-3.5" />;
    case "PostgreSQL":
      return <SiPostgresql className="text-sky-600 w-3.5 h-3.5" />;
    case "MySQL":
      return <SiMysql className="text-blue-600 w-3.5 h-3.5" />;
    case "MongoDB":
      return <SiMongodb className="text-emerald-600 w-3.5 h-3.5" />;
    case "Redis":
      return <SiRedis className="text-rose-500 w-3.5 h-3.5" />;
    case "Docker":
      return <SiDocker className="text-sky-500 w-3.5 h-3.5" />;
    case "Streaming":
      return <FiVideo className="text-purple-400 w-3.5 h-3.5" />;
    case "REST APIs":
      return <FiServer className="text-amber-400 w-3.5 h-3.5" />;
    default:
      return null;
  }
};

export interface HeroProps {
  personal: PersonalGetResponseDTO;
}

export default function Hero({ personal }: HeroProps) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(2,132,199,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="section-container text-center max-w-4xl">
        <motion.div {...fadeUp(0.05)} className="flex justify-center mb-6">
          <Badge variant="default" className="gap-2 px-4 py-1.5 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Senior Roles & Remote Opportunities
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-primary mb-3"
        >
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gradient-text" : ""}>
              {word}
              {i === 0 ? " " : ""}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="font-display font-semibold text-xl sm:text-2xl text-muted mb-6"
        >
          {personal.role}
        </motion.p>

        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-wrap justify-center items-center gap-x-3.5 gap-y-2.5 mb-8 max-w-4xl mx-auto"
        >
          {personal.tagline.map((tech, index) => (
            <div key={tech} className="flex items-center gap-2 group">
              <span className="p-1.5 rounded-lg bg-surface border border-border group-hover:border-primary/40 transition-colors shadow-sm flex items-center justify-center">
                {getTechIcon(tech)}
              </span>
              <span className="font-mono text-xs sm:text-sm font-medium text-muted tracking-wide">
                {tech}
              </span>
              {index < personal.tagline.length - 1 && (
                <span className="ml-2 w-1 h-1 rounded-full bg-border hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          {...fadeUp(0.45)}
          className="max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          Software Engineer building high-throughput SaaS, video streaming, and eCommerce platforms.
          Specialized in video pipeline engineering with Mux, background queue workers with BullMQ on Redis,
          and robust REST API architecture.
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/25 hover:bg-primary-hover transition-all"
            aria-label="View featured projects"
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl surface-card text-primary font-semibold text-sm hover:border-primary/40 flex items-center justify-center gap-2 transition-all"
            aria-label="Contact Maroof Sultan"
          >
            <FiMessageSquare className="w-4 h-4 text-primary" />
            <span>Contact Me</span>
          </motion.button>

          <motion.a
            href={personal.cv || "/resume.pdf"}
            download="Maroof_Sultan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-border surface-card text-muted hover:text-primary font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            aria-label="Download Resume"
          >
            <FiDownload className="w-4 h-4 text-primary" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-4"
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
              whileHover={{ y: -2 }}
              className="p-3 rounded-xl surface-card text-muted hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="p-3 flex items-center justify-center text-muted hover:text-primary transition-colors"
          aria-label="Scroll down to about section"
        >
          <FiArrowDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
