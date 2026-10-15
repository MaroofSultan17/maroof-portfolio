import { FiArrowUpRight } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

const accents = ["bg-blue", "bg-yellow", "bg-red", "bg-teal"];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've shipped production software.">
      <ol className="ml-4 sm:ml-6 space-y-6 sm:space-y-8 border-l-2 border-line">
        {siteData.experiences.map((exp, i) => (
          <li key={exp.id} className="reveal relative pl-7 sm:pl-12">
            <span
              className={`absolute top-0 -left-[17px] sm:-left-[25px] grid h-8 w-8 sm:h-12 sm:w-12 place-items-center rounded-lg sm:rounded-xl text-base sm:text-xl font-bold text-[#1f2028] ring-4 ring-bg ${accents[i % accents.length]}`}
              aria-hidden="true"
            >
              {exp.company[0]}
            </span>

            <article className="card grid gap-5 p-5 sm:p-8 lg:grid-cols-[15rem_1fr] lg:gap-10">
              <header>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">{exp.period}</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-fg">{exp.role}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-lg font-medium text-blue hover:underline"
                  >
                    {exp.company}
                    <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-medium text-blue">{exp.company}</p>
                )}
                <span className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">{exp.type}</span>
              </header>

              <div className="max-w-3xl">
                <p className="leading-relaxed text-fg">{exp.description}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted">
                      <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accents[i % accents.length]}`} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
