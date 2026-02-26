import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={scrollToTop}
            className="font-display font-bold text-xl gradient-text hover:opacity-80 transition-opacity"
          >
            Maroof Sultan
          </button>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personal.github },
              { icon: FiLinkedin, href: personal.linkedin },
              { icon: FiMail, href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
            © {year} Maroof Sultan
          </p>
        </div>
      </div>
    </footer>
  );
}
