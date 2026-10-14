import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export interface NavbarProps {
  toggle: (e?: React.MouseEvent | React.KeyboardEvent) => void;
  isDark: boolean;
}

export default function Navbar({ toggle, isDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (scrolled !== isScrolled) setScrolled(isScrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      const current = links.reduce((acc, link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          return id;
        }
        return acc;
      }, "home");

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    setActive(id);
    setOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "glass-panel border-border shadow-sm shadow-black/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="font-display font-bold text-xl tracking-tight gradient-text"
        >
          MS.
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors duration-200 ${
                active === l.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }`}
              aria-current={active === l.href.replace("#", "") ? "true" : undefined}
            >
              {active === l.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-mono font-medium transition-colors"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={(e) => toggle(e)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-lg text-muted hover:text-primary hover:bg-surface border border-border transition-colors flex items-center justify-center"
          >
            {isDark ? (
              <FiSun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <FiMoon className="w-4 h-4 text-primary transition-transform hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg text-muted hover:text-primary hover:bg-surface border border-border transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel border-t border-border px-4 py-4"
          >
            <nav className="flex flex-col gap-1.5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === l.href.replace("#", "")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted hover:text-primary hover:bg-surface"
                  }`}
                >
                  <span>{l.label}</span>
                  {active === l.href.replace("#", "") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
