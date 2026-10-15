import type { IconType } from "react-icons";
import { FiArrowUpRight, FiChevronDown, FiGithub, FiLock, FiCalendar, FiDroplet, FiFolder } from "react-icons/fi";
import { siteData, type Project } from "@/data/site";
import Section from "./Section";

const covers: Record<string, { bg: string; icon: IconType }> = {
  roundhere: { bg: "bg-blue", icon: FiCalendar },
  dhobbee: { bg: "bg-red", icon: FiDroplet },
};

const stages = [
  { name: "Upload", tool: "Mux" },
  { name: "Encode", tool: "Mux" },
  { name: "Process", tool: "BullMQ" },
  { name: "Notify", tool: "RabbitMQ" },
  { name: "Stream", tool: "HLS" },
];
const CYCLE_SECONDS = 6;

function Pipeline() {
  return (
    <figure className="rounded-2xl bg-bg p-5 sm:p-6">
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
      <figcaption className="mt-4 text-sm text-muted">A film's path from upload to adaptive playback.</figcaption>
    </figure>
  );
}

function Status({ project }: { project: Project }) {
  const dot =
    { Live: "bg-[#34d399]", "Pre launch": "bg-yellow", "In progress": "bg-blue", Completed: "bg-teal" }[project.status] ??
    "bg-muted";
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-bg px-3 py-1 text-sm font-medium text-fg">
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {project.status}
    </span>
  );
}

function Cover({ project, sizes, className = "" }: { project: Project; sizes: string; className?: string }) {
  if (project.image) {
    const img = (
      <img
        src={project.image}
        srcSet={`${project.image.replace(".webp", "-800.webp")} 800w, ${project.image} 1600w`}
        sizes={sizes}
        alt={project.imageAlt ?? project.title}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className={`aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
      />
    );
    return (
      <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} preview image`} className="block overflow-hidden">
        {img}
      </a>
    );
  }
  const cover = covers[project.id] ?? { bg: "bg-yellow", icon: FiFolder };
  const Icon = cover.icon;
  return (
    <div className={`grid aspect-video place-items-center ${cover.bg} ${className}`}>
      <Icon className="h-20 w-20 text-[#1f2028]/80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  if (!project.caseStudy) {
    return null;
  }
  const rows: [string, string][] = [
    ["Problem", project.caseStudy.problem],
    ["What I did", project.caseStudy.contribution],
    ["Key decisions", project.caseStudy.decisions],
  ];
  return (
    <details className="group/cs mt-4">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-semibold text-fg hover:text-blue transition-colors [&::-webkit-details-marker]:hidden">
        Read the case study
        <FiChevronDown className="h-4 w-4 transition-transform group-open/cs:rotate-180" aria-hidden="true" />
      </summary>
      <dl className="mt-4 space-y-4 border-l-2 border-blue pl-5 text-muted leading-relaxed">
        {rows.map(([term, text]) => (
          <div key={term}>
            <dt className="font-semibold text-fg">{term}</dt>
            <dd className="mt-1">{text}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const link = "inline-flex items-center gap-1.5 font-semibold text-fg hover:text-blue transition-colors";
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={link}>
          Visit site
          <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={link}>
          <FiGithub className="h-5 w-5" aria-hidden="true" />
          View code
        </a>
      )}
      {project.privateNote && (
        <span className="inline-flex items-center gap-1.5 font-medium text-muted">
          <FiLock className="h-4 w-4" aria-hidden="true" />
          {project.privateNote}
        </span>
      )}
    </div>
  );
}

function Tech({ items, max = items.length }: { items: string[]; max?: number }) {
  const hidden = items.length - max;
  const chip = "rounded-full border border-line px-2.5 py-0.5 text-xs text-muted";
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {items.slice(0, max).map((t) => (
        <li key={t} className={chip}>
          {t}
        </li>
      ))}
      {hidden > 0 && (
        <li className={chip} title={items.slice(max).join(", ")}>
          +{hidden}
        </li>
      )}
    </ul>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="text-sm leading-relaxed text-muted">
      <span className="block font-medium text-fg/80">{project.role}</span>
      <span className="block">{project.period}</span>
    </p>
  );
}

export default function Projects() {
  const [featured, ...rest] = siteData.projects;

  return (
    <Section id="projects" title="Projects" subtitle="Products I've built, contributed to and studied.">
      <article className="reveal card group grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Status project={featured} />
            <Meta project={featured} />
          </div>
          <h3 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-fg">{featured.title}</h3>
          <p className="mt-2 text-lg font-medium text-blue">{featured.subtitle}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{featured.description}</p>
          <Tech items={featured.tech} />
          <div className="mt-6">
            <ProjectLinks project={featured} />
          </div>
          <CaseStudy project={featured} />
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-line">
            <Cover project={featured} sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
          <Pipeline />
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <article key={project.id} className="reveal card group flex flex-col overflow-hidden">
            <Cover project={project} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <Status project={project} />
                <span className="text-xs text-muted">{project.period}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-fg">{project.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-blue">{project.subtitle}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted line-clamp-3">{project.description}</p>
              <Tech items={project.tech} max={4} />
              <div className="mt-auto pt-5">
                <div className="border-t border-line pt-4 text-sm">
                  <ProjectLinks project={project} />
                </div>
                <CaseStudy project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
