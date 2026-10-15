import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteData } from "@/data/site";

const { personal } = siteData;

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="grid gap-10 sm:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-fg">Maroof Sultan</p>
          <p className="mt-2 max-w-xs text-muted">
            Full stack software engineer building video streaming, payments and eCommerce products.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-semibold text-fg">Explore</p>
          <ul className="mt-3 space-y-2 text-muted">
            {["About", "Projects", "Experience", "Skills", "Education", "Contact"].map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase()}`} className="hover:text-fg transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-fg">Connect</p>
          <ul className="mt-3 flex gap-3">
            {[
              { icon: FiGithub, href: personal.github, label: "GitHub" },
              { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-line text-muted hover:border-fg hover:text-fg transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-12 text-sm text-muted">© {new Date().getFullYear()} Maroof Sultan</p>
    </footer>
  );
}
