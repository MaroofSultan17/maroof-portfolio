import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export interface FooterProps {
  personal?: PersonalGetResponseDTO;
}

export default function Footer({ personal }: FooterProps) {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const githubUrl = personal?.github || "https://github.com/MaroofSultan17";
  const linkedinUrl = personal?.linkedin || "https://www.linkedin.com/in/maroofsultan";
  const email = personal?.email || "maroofsultan.dev@gmail.com";

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={scrollToTop}
            className="font-display font-bold text-xl gradient-text hover:opacity-80 transition-opacity"
          >
            Maroof Sultan.
          </button>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: githubUrl, label: "GitHub" },
              { icon: FiLinkedin, href: linkedinUrl, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2.5 rounded-lg text-muted hover:text-primary hover:bg-surface border border-transparent hover:border-border transition-all"
                aria-label={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          <p className="text-xs font-mono text-muted">
            © {year} Maroof Sultan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
