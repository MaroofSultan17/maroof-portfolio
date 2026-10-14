import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMessageSquare } from "react-icons/fi";
import { SiNodedotjs, SiLaravel, SiSymfony, SiReact, SiNextdotjs } from "react-icons/si";
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
    case "Laravel":
      return <SiLaravel className="text-red-500 w-3.5 h-3.5" />;
    case "Symfony":
      return <SiSymfony className="text-primary w-3.5 h-3.5" />;
    case "React":
      return <SiReact className="text-sky-400 w-3.5 h-3.5" />;
    case "Next.js":
      return <SiNextdotjs className="text-primary w-3.5 h-3.5" />;
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
      </div>

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
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mb-8 max-w-3xl mx-auto"
        >
          {personal.tagline.map((tech) => (
            <div
              key={tech}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-muted hover:border-primary/30 transition-colors shadow-sm"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
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
    </section>
  );
}
