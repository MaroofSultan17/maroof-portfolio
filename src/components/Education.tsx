import { FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

const accents = ["text-blue bg-blue/15", "text-yellow bg-yellow/15"];

export default function Education() {
  const { education, certifications } = siteData;

  return (
    <Section id="education" title="Education" subtitle="Degrees, certifications and the things I did around them.">
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((edu, i) => (
          <article key={edu.degree} className="reveal card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${accents[i % accents.length]}`}>
                <FiBookOpen className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">{edu.degree}</h3>
                <p className="mt-1 font-medium text-muted">{edu.institution}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-bg px-4 py-1.5 text-sm font-semibold text-fg">{edu.period}</span>
              <span className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">{edu.grade}</span>
            </div>
            <ul className="mt-5 space-y-3">
              {edu.details.map((d) => (
                <li key={d} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <article className="reveal card p-6 sm:p-8 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/15 text-teal">
              <FiAward className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold text-fg">Certifications</h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-2xl bg-bg px-4 py-3">
                <p className="font-semibold leading-snug text-fg">{c.name}</p>
                {c.issuer && <p className="mt-1 text-sm text-muted">{c.issuer}</p>}
              </li>
            ))}
          </ul>
        </article>

        <article className="reveal card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red/15 text-red">
              <FiStar className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold text-fg">Honors</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {siteData.honors.map((h) => (
              <li key={h} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
