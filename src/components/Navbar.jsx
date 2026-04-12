import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ toggle, isDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setScrolled(isScrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

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

  const handleNav = (href) => {
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
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-in-out border-b ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-gray-200/60 dark:border-gray-700/60 shadow-lg shadow-black/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="font-display font-bold text-xl tracking-tight gradient-text"
        >
          MS
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
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                active === l.href.replace("#", "")
                  ? "text-brand-600 dark:text-brand-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
              aria-current={active === l.href.replace("#", "") ? "true" : undefined}
            >
              {active === l.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-brand-500/10 dark:bg-brand-400/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            onClick={(e) => toggle(e)}
            style={{ viewTransitionName: "theme-toggle" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggle(e)}
            aria-label="Toggle theme"
            className="p-3 min-w-[48px] min-h-[48px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center"
          >
            <div className="pointer-events-none flex items-center justify-center">
              <DarkModeSwitch
                checked={isDark}
                onChange={() => {}}
                size={20}
                moonColor="#9CA3AF"
                sunColor="#4B5563"
              />
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 min-w-[48px] min-h-[48px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-gray-200/60 dark:border-gray-700/60"
          >
            <nav className="px-4 py-6 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl text-base font-semibold transition-all ${
                    active === l.href.replace("#", "")
                      ? "bg-brand-500/10 text-brand-500 dark:text-brand-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span>{l.label}</span>
                  {active === l.href.replace("#", "") && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-brand-500"
                    />
                  )}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
