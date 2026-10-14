import type { IconType } from "react-icons";
import { FiServer, FiVideo, FiDatabase, FiLayout, FiTerminal } from "react-icons/fi";
import { siteData } from "@/data/site";
import Section from "./Section";

const looks: Record<string, { icon: IconType; tint: string }> = {
  "Backend & Systems": { icon: FiServer, tint: "bg-blue/15 text-blue" },
  "Streaming & APIs": { icon: FiVideo, tint: "bg-red/15 text-red" },
  "Databases & Caching": { icon: FiDatabase, tint: "bg-yellow/15 text-yellow" },
  "Frontend Engineering": { icon: FiLayout, tint: "bg-teal/15 text-teal" },
  "DevOps & Cloud": { icon: FiTerminal, tint: "bg-fg/10 text-fg" },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="The tools I reach for in production.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteData.skills.map((group) => {
          const { icon: Icon, tint } = looks[group.category] ?? looks["Backend & Systems"];
          return (
            <div key={group.category} className="reveal card p-6 sm:p-8">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-fg">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full bg-bg px-3 py-1.5 text-sm font-medium text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
