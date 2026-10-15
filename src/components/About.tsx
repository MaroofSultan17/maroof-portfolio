import { FiBookOpen } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

const stats = [
  { value: "2.5+", label: "years in production", color: "text-blue" },
  { value: "7K+", label: "users on Gempacked", color: "text-yellow" },
  { value: "40K+", label: "products in its catalog", color: "text-red" },
  { value: "3", label: "companies shipped for", color: "text-teal" },
];

export default function About() {
  const edu = siteData.education[0];

  return (
    <Section id="about" title="About me" subtitle="The parts of products people rely on but never see.">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="reveal lg:col-span-3 space-y-5 text-lg sm:text-xl leading-relaxed text-muted">
          <p>
            I'm a full stack software engineer from Pakistan. For the last 2.5+ years I've built{" "}
            <span className="text-fg font-medium">React interfaces, video pipelines, payment flows and
            background workers</span>, and the APIs that tie them together.
          </p>
          <p>
            Right now I'm at{" "}
            <a href="https://buggcy.com" target="_blank" rel="noopener noreferrer" className="font-medium text-fg underline decoration-blue decoration-2 underline-offset-4 hover:text-blue">
              Buggcy
            </a>
            , working across the stack on FilmLauncher, a streaming and crowdfunding platform for
            independent films. Before that I spent about a year and a half at AlphaSoft360 on{" "}
            <a href="https://www.gempacked.com" target="_blank" rel="noopener noreferrer" className="font-medium text-fg underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow">
              Gempacked
            </a>
            , a wholesale store with 7,000+ users and 40,000+ products, where I also mentored four to five junior developers.
          </p>
          <p>
            Most of my work sits in the parts users never see but always feel: how fast a page loads,
            how safely a payment goes through, and how a database holds up as data grows.
          </p>
        </div>

        <div className="reveal lg:col-span-2 space-y-4">
          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className={`block text-4xl sm:text-5xl font-bold tracking-tight ${s.color}`}>{s.value}</span>
                  <span className="mt-2 block text-sm text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="card flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue/15 text-blue">
              <FiBookOpen className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-fg">{edu.degree}, {edu.grade}</p>
              <p className="text-sm text-muted">
                {edu.institution}, {edu.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
