import type { ReactNode } from "react";

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 sm:py-28">
      <header className="reveal mb-12 sm:mb-16">
        <h2 id={`${id}-title`} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-xl sm:text-2xl text-muted">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
