import { useEffect, useState } from "react";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import type { IconType } from "react-icons";
import { SiElasticsearch, SiLaravel, SiMongodb, SiNodedotjs, SiRabbitmq, SiReact, SiRedis, SiSymfony } from "react-icons/si";
import { siteData } from "@/data/site";

const { personal } = siteData;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const ORBIT = 48;
const chips: { icon?: IconType; label: string; color: string; angle: number }[] = [
  { icon: SiNodedotjs, label: "Node.js", color: "#5fa04e", angle: 232 },
  { label: "BullMQ", color: "currentColor", angle: 270 },
  { icon: SiReact, label: "React", color: "#61dafb", angle: 307 },
  { icon: SiRedis, label: "Redis", color: "#ff4438", angle: 345 },
  { icon: SiSymfony, label: "Symfony", color: "currentColor", angle: 18 },
  { icon: SiRabbitmq, label: "RabbitMQ", color: "#ff6600", angle: 66 },
  { icon: SiMongodb, label: "MongoDB", color: "#47a248", angle: 101 },
  { icon: SiElasticsearch, label: "Elasticsearch", color: "#00bfb3", angle: 135 },
  { icon: SiLaravel, label: "Laravel", color: "#ff2d20", angle: 166 },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    document.documentElement.classList.toggle("dark", !dark);
    try {
      localStorage.setItem("ms-theme", dark ? "light" : "dark");
    } catch {}
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
    <div className="relative mx-auto aspect-square w-full max-w-[230px] sm:max-w-[400px] lg:max-w-[500px]">
      <div
        className="spin-slow absolute inset-[9%] rounded-full [background:conic-gradient(var(--blue)_0_33%,var(--yellow)_0_66%,var(--red)_0)]"
        aria-hidden="true"
      />
      <img
        src="/maroof-sultan.webp"
        alt="Portrait of Maroof Sultan"
        width={480}
        height={480}
        fetchPriority="high"
        className="absolute inset-[11%] h-[78%] w-[78%] rounded-full border-[6px] border-bg object-cover"
      />

      {chips.map(({ icon: Icon, label, color, angle }, i) => {
        const radians = (angle * Math.PI) / 180;
        return (
          <span
            key={label}
            className="group absolute -translate-x-1/2 -translate-y-1/2 hover:z-10 focus-within:z-10"
            style={{ left: `${50 + ORBIT * Math.cos(radians)}%`, top: `${50 + ORBIT * Math.sin(radians)}%` }}
          >
            <span
              role="img"
              aria-label={label}
              tabIndex={0}
              className="float relative grid h-10 min-w-10 sm:h-14 sm:min-w-14 cursor-default place-items-center rounded-2xl border border-line bg-surface px-2 shadow-xl shadow-black/20 transition-colors hover:border-fg/40 focus:outline-none focus-visible:border-blue"
              style={{ animationDelay: `${(i * 0.7) % 4}s` }}
            >
              <span
                className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-fg px-2.5 py-1 text-xs font-semibold text-bg opacity-0 shadow-lg transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                aria-hidden="true"
              >
                {label}
              </span>
              {Icon ? (
                <Icon className="h-5 w-5 sm:h-7 sm:w-7" style={{ color }} aria-hidden="true" />
              ) : (
                <span className="text-[11px] sm:text-sm font-bold" style={{ color }} aria-hidden="true">
                  {label}
                </span>
              )}
            </span>
          </span>
        );
      })}

      <div
        className="float absolute left-[-6%] top-[34%] hidden sm:block rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl shadow-black/20"
        style={{ animationDelay: "0.9s" }}
      >
        <p className="text-2xl font-bold text-fg">2.5+ yrs</p>
        <p className="text-sm text-muted">building products</p>
      </div>
      <div
        className="float absolute right-[-8%] bottom-[18%] hidden sm:flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 shadow-xl shadow-black/20"
        style={{ animationDelay: "2.1s" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" aria-hidden="true" />
        <span className="text-sm font-semibold text-fg">Open to opportunities</span>
      </div>
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...nav.map((n) => n.href.slice(1))].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
                <a
                  href={href}
                  aria-current={active === href ? "true" : undefined}
                  className={`relative py-2 text-lg font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-blue after:transition-transform after:duration-300 ${
                    active === href ? "text-fg after:scale-x-100" : "text-muted hover:text-fg after:scale-x-0"
                  }`}
                >
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
                  aria-current={active === href ? "true" : undefined}
                  className={`block py-3 text-2xl font-semibold ${active === href ? "text-blue" : "text-fg"}`}
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
        className="scroll-mt-20 flex flex-1 flex-col-reverse items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:flex-row lg:justify-between lg:gap-16"
      >
        <div className="rise max-w-2xl" style={{ animationDelay: "120ms" }}>
          <h1>
            <span className="block text-lg sm:text-xl font-semibold text-blue">
              {personal.name}, {personal.role}
            </span>
            <span className="mt-4 block text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-fg">
              I build the products that keep streaming, payments and stores running.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted">
            Full stack work with React, Node.js, Laravel and Symfony: interfaces, APIs, queue
            workers and payment flows for platforms with thousands of users.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary">
              See my work
            </a>
            <a href={personal.cv} download="Maroof_Sultan_Resume.pdf" className="btn-outline">
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
        className="rise group mb-10 hidden sm:inline-flex items-center gap-4 self-center text-lg font-semibold text-fg"
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
