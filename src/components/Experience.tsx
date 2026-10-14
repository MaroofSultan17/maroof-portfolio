import { FiArrowUpRight } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

const accents = ["bg-blue", "bg-yellow", "bg-red"];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've shipped production software.">
      <ol className="space-y-6">
        {siteData.experiences.map((exp, i) => (
          <li key={exp.id} className="reveal card p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl font-bold text-[#1f2028] ${accents[i % accents.length]}`}
                  aria-hidden="true"
                >
                  {exp.company[0]}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">{exp.role}</h3>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-lg font-medium text-muted hover:text-fg transition-colors"
                    >
                      {exp.company}
                      <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-muted">{exp.company}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <span className="rounded-full bg-bg px-4 py-1.5 text-sm font-semibold text-fg">{exp.period}</span>
                <span className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">
                  {exp.type}, {exp.location}
                </span>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-fg">{exp.description}</p>
            <ul className="mt-4 grid gap-3 lg:grid-cols-2 lg:gap-x-10">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed text-muted">
                  <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accents[i % accents.length]}`} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
