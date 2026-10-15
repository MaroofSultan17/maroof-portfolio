import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteData } from "@/data/site";
import { nav } from "./Hero";

const { personal } = siteData;

const socials = [
  { icon: FiGithub, href: personal.github, label: "GitHub", external: true },
  { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn", external: true },
  { icon: FiMail, href: `mailto:${personal.email}`, label: "Email", external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-bold text-fg">{personal.name}</p>
          <p className="mt-1 text-sm text-muted">Full stack software engineer · {personal.location}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="hover:text-fg transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-3">
          {socials.map(({ icon: Icon, href, label, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-line text-muted hover:border-fg hover:text-fg transition-colors"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-fg transition-colors">
          Back to top
          <FiArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
