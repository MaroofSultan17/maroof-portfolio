import type { IconType } from "react-icons";
import { FiArrowUpRight, FiChevronDown, FiShoppingBag, FiCalendar, FiDroplet } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

type Project = (typeof siteData.projects)[number];

// Cover colour and icon per project; FilmLauncher gets the live pipeline instead.
const covers: Record<string, { bg: string; icon: IconType }> = {
  gempacked: { bg: "bg-yellow", icon: FiShoppingBag },
  roundhere: { bg: "bg-blue", icon: FiCalendar },
  dhobbee: { bg: "bg-red", icon: FiDroplet },
};

// What a film goes through in the FilmLauncher backend, in order.
const stages = [
  { name: "Upload", tool: "Signed URL" },
  { name: "Encode", tool: "Mux" },
  { name: "Queue", tool: "BullMQ" },
  { name: "Notify", tool: "RabbitMQ" },
  { name: "Stream", tool: "HLS" },
];
const CYCLE_SECONDS = 6;

function Pipeline() {
  return (
    <figure className="flex h-full flex-col justify-center rounded-2xl bg-bg p-6 sm:p-8">
      <div className="relative" style={{ ["--cycle" as string]: `${CYCLE_SECONDS}s` }}>
        <div className="hidden sm:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-line" aria-hidden="true">
          <span className="pipeline-pulse absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue shadow-[0_0_16px_var(--blue)]" />
        </div>
        <ol className="relative grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {stages.map((stage, i) => (
            <li
              key={stage.name}
              className="pipeline-stage relative flex sm:block items-baseline justify-between rounded-xl border-2 border-line bg-bg px-3 py-3 sm:text-center text-muted"
              style={{ animationDelay: `${(i / (stages.length - 1)) * CYCLE_SECONDS}s` }}
            >
              <span className="block text-sm font-bold">{stage.name}</span>
              <span className="block text-xs opacity-80">{stage.tool}</span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-5 text-sm text-muted">
        A film's path through the backend I build, from upload to adaptive playback.
      </figcaption>
    </figure>
  );
}

function Status({ project }: { project: Project }) {
  const dot = { Live: "bg-[#34d399]", "Pre-launch": "bg-yellow" }[project.status] ?? "bg-muted";
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-bg px-3 py-1 text-sm font-medium text-fg">
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {project.status}
    </span>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <details className="group mt-6">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-semibold text-fg hover:text-blue transition-colors [&::-webkit-details-marker]:hidden">
        Read the case study
        <FiChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <dl className="mt-4 space-y-4 border-l-2 border-blue pl-5 text-muted leading-relaxed">
        {[
          ["Problem", project.caseStudy.problem],
          ["What I did", project.caseStudy.contribution],
          ["Key decisions", project.caseStudy.decisions],
        ].map(([term, text]) => (
          <div key={term}>
            <dt className="font-semibold text-fg">{term}</dt>
            <dd className="mt-1">{text}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const href = project.live;
  if (!href) return <span className="font-medium text-muted">Private repository</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold text-fg hover:text-blue transition-colors"
    >
      Visit site
      <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

function Tech({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [featured, ...rest] = siteData.projects;

  return (
    <Section id="projects" title="Projects" subtitle="Production platforms I've built and contributed to.">
      <article className="reveal card grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Status project={featured} />
            <span className="text-sm text-muted">{featured.role}</span>
          </div>
          <h3 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-fg">{featured.title}</h3>
          <p className="mt-2 text-lg font-medium text-blue">{featured.subtitle}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{featured.description}</p>
          <Tech items={featured.tech} />
          <div className="mt-6">
            <ProjectLink project={featured} />
          </div>
          <CaseStudy project={featured} />
        </div>
        <Pipeline />
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => {
          const cover = covers[project.id];
          const Icon = cover.icon;
          return (
            <article key={project.id} className="reveal card group flex flex-col overflow-hidden">
              <div className={`relative grid h-48 place-items-center overflow-hidden ${cover.bg}`}>
                <Icon
                  className="h-20 w-20 text-[#1f2028]/80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden="true"
                />
                <span className="absolute left-4 top-4">
                  <Status project={project} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-fg">{project.title}</h3>
                <p className="mt-1 font-medium text-muted">{project.subtitle}</p>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{project.description}</p>
                <Tech items={project.tech} />
                <div className="mt-6">
                  <ProjectLink project={project} />
                </div>
                <CaseStudy project={project} />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
