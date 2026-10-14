import { useState } from "react";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { SiNodedotjs, SiLaravel, SiRedis, SiMongodb, SiReact, SiSymfony } from "react-icons/si";
import { siteData } from "@/data/site";

const { personal } = siteData;

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Tech chips orbiting the portrait; positions are % of the portrait box.
const chips = [
  { icon: SiNodedotjs, label: "Node.js", color: "#5fa04e", pos: "left-[2%] top-[14%]", delay: "0s" },
  { icon: SiLaravel, label: "Laravel", color: "#ff2d20", pos: "left-[-4%] top-[58%]", delay: "1.2s" },
  { icon: SiReact, label: "React", color: "#61dafb", pos: "right-[0%] top-[6%]", delay: "2.4s" },
  { icon: SiRedis, label: "Redis", color: "#ff4438", pos: "right-[-5%] top-[46%]", delay: "0.6s" },
  { icon: SiMongodb, label: "MongoDB", color: "#47a248", pos: "right-[14%] bottom-[0%]", delay: "1.8s" },
  { icon: SiSymfony, label: "Symfony", color: "currentColor", pos: "left-[22%] bottom-[-2%]", delay: "3s" },
];

function ThemeToggle() {
  // index.html sets the initial class before paint, so read it back here.
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    document.documentElement.classList.toggle("dark", !dark);
    try {
      localStorage.setItem("ms-theme", dark ? "light" : "dark");
    } catch {
      /* private mode: theme just won't persist */
    }
    setDark(!dark);
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-12 w-12 place-items-center rounded-full border-2 border-line text-fg hover:border-fg transition-colors"
    >
      {dark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[500px]">
      <div
        className="spin-slow absolute inset-[9%] rounded-full [background:conic-gradient(var(--blue)_0_33%,var(--yellow)_0_66%,var(--red)_0)]"
        aria-hidden="true"
      />
      <img
        src="/maroof-sultan.jpg"
        alt="Portrait of Maroof Sultan"
        width={480}
        height={480}
        fetchPriority="high"
        className="absolute inset-[11%] h-[78%] w-[78%] rounded-full border-[6px] border-bg object-cover"
      />

      {chips.map(({ icon: Icon, label, color, pos, delay }) => (
        <div
          key={label}
          className={`float absolute ${pos} grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-line bg-surface shadow-xl shadow-black/20`}
          style={{ animationDelay: delay }}
          title={label}
        >
          <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color }} aria-label={label} />
        </div>
      ))}

      <div
        className="float absolute left-[-6%] top-[34%] hidden sm:block rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl shadow-black/20"
        style={{ animationDelay: "0.9s" }}
      >
        <p className="text-2xl font-bold text-fg">2.5+ yrs</p>
        <p className="text-sm text-muted">building backends</p>
      </div>
      <div
        className="float absolute right-[-8%] bottom-[18%] hidden sm:flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 shadow-xl shadow-black/20"
        style={{ animationDelay: "2.1s" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" aria-hidden="true" />
        <span className="text-sm font-semibold text-fg">Open to remote</span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="text-xl font-bold tracking-tight text-fg">
          Maroof Sultan
        </a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-lg font-medium text-muted hover:text-fg transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-12 w-12 place-items-center rounded-full border-2 border-line text-fg lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Sections" className="border-t border-line/60 px-5 pb-6 pt-2 lg:hidden">
          <ul>
            {nav.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-semibold text-fg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function Hero() {
  return (
    <div className="flex min-h-[calc(100svh-5rem)] flex-col">
      <section
        id="top"
        className="scroll-mt-20 flex flex-1 flex-col-reverse items-center gap-10 py-10 lg:flex-row lg:justify-between lg:gap-16"
      >
        <div className="rise max-w-2xl" style={{ animationDelay: "120ms" }}>
          <h1>
            <span className="block text-lg sm:text-xl font-semibold text-blue">
              {personal.name}, {personal.role}
            </span>
            <span className="mt-4 block text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-fg">
              I build the backends that keep streaming, payments and stores running.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted">
            APIs, queue workers and payment flows with Node.js, Laravel and Symfony, for
            platforms with thousands of users.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary">
              See my work
            </a>
            <a href={personal.cv} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FiDownload className="h-5 w-5" aria-hidden="true" />
              Résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: FiGithub, href: personal.github, label: "GitHub" },
              { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="rise w-full lg:w-auto lg:flex-1" style={{ animationDelay: "240ms" }}>
          <Portrait />
        </div>
      </section>

      <a
        href="#about"
        className="rise group mb-10 hidden sm:inline-flex items-center gap-5 self-start text-lg font-semibold text-fg"
        style={{ animationDelay: "400ms" }}
      >
        <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-line transition-colors group-hover:border-fg">
          <FiArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" aria-hidden="true" />
        </span>
        Learn more about Maroof
      </a>
    </div>
  );
}
