import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "./SectionHeader";

export default function PortfolioSkeleton() {
  return (
    <div className="w-full">
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(2,132,199,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="section-container text-center max-w-4xl w-full">
          <div className="flex justify-center mb-6">
            <Skeleton className="h-7 w-72 rounded-full" />
          </div>

          <div className="flex justify-center mb-3">
            <Skeleton className="h-14 sm:h-20 w-72 sm:w-[500px] rounded-2xl" />
          </div>

          <div className="flex justify-center mb-6">
            <Skeleton className="h-7 sm:h-8 w-44 sm:w-56 rounded-lg" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-3.5 gap-y-2.5 mb-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-7 w-24 rounded-lg" />
                {i < 9 && <span className="ml-2 w-1 h-1 rounded-full bg-border/40 hidden sm:block" />}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-2.5 mb-10">
            <Skeleton className="h-4 sm:h-5 w-full rounded" />
            <Skeleton className="h-4 sm:h-5 w-11/12 mx-auto rounded" />
            <Skeleton className="h-4 sm:h-5 w-3/4 mx-auto rounded" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <Skeleton className="w-full sm:w-36 h-12 rounded-xl" />
            <Skeleton className="w-full sm:w-36 h-12 rounded-xl" />
            <Skeleton className="w-full sm:w-44 h-12 rounded-xl" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Skeleton className="w-11 h-11 rounded-xl" />
            <Skeleton className="w-11 h-11 rounded-xl" />
            <Skeleton className="w-11 h-11 rounded-xl" />
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="section-container">
          <SectionHeader
            label="About"
            title="Engineering Background"
            subtitle="Building reliable distributed web applications, streaming pipelines, and high-volume commerce platforms."
          />

          <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <Skeleton className="h-8 w-4/5 rounded-xl" />
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-11/12 rounded" />
                <Skeleton className="h-4 w-4/5 rounded" />
              </div>
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </div>
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-4/5 rounded" />
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="surface-card p-5 flex flex-col justify-between"
                >
                  <Skeleton className="w-10 h-10 rounded-xl mb-4" />
                  <div>
                    <Skeleton className="h-5 w-3/4 rounded mb-2" />
                    <Skeleton className="h-3.5 w-full rounded mb-1.5" />
                    <Skeleton className="h-3.5 w-4/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-surface/40">
        <div className="section-container">
          <SectionHeader
            label="Skills"
            title="Technical Capabilities"
            subtitle="A battle-tested stack honed over 2.5+ years building production SaaS, streaming, and eCommerce platforms."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="surface-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <Skeleton className="w-10 h-10 rounded-xl" />
                    <Skeleton className="h-6 w-36 rounded-lg" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((j) => (
                      <Skeleton key={j} className="h-7 w-20 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-padding">
        <div className="section-container max-w-4xl">
          <SectionHeader
            label="Experience"
            title="Career History"
            subtitle="Hands-on software engineering across distributed video streaming, enterprise eCommerce, and scheduling platforms."
          />

          <div className="mt-14 relative border-l-2 border-border/60 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[35px] top-7 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-border ring-4 ring-bg z-10" />
                <div className="surface-card p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <Skeleton className="h-6 w-48 rounded mb-2" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-28 rounded" />
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </div>
                    <Skeleton className="h-6 w-36 rounded-full" />
                  </div>
                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-11/12 rounded" />
                    <Skeleton className="h-4 w-4/5 rounded" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[1, 2, 3, 4, 5].map((t) => (
                      <Skeleton key={t} className="h-6 w-16 rounded-md" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-surface/30">
        <div className="section-container">
          <SectionHeader
            label="Projects"
            title="Featured Production Work"
            subtitle="Real-world streaming infrastructure, enterprise eCommerce, and scheduling platforms."
          />

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-9 w-28 rounded-xl" />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="surface-card flex flex-col h-full overflow-hidden p-6 sm:p-7 space-y-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
                <div>
                  <Skeleton className="h-7 w-40 rounded mb-2" />
                  <Skeleton className="h-4 w-52 rounded" />
                </div>
                <div className="space-y-2 py-2">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-5/6 rounded" />
                  <Skeleton className="h-4 w-4/6 rounded" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((t) => (
                    <Skeleton key={t} className="h-6 w-16 rounded-md" />
                  ))}
                </div>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <Skeleton className="h-4 w-28 rounded" />
                  <Skeleton className="h-3 w-20 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-padding">
        <div className="section-container max-w-4xl">
          <SectionHeader
            label="Education"
            title="Academic Background"
            subtitle="Formal foundation in computer science, software design, and distributed systems."
          />

          <div className="mt-12">
            <div className="surface-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Skeleton className="h-7 w-64 rounded mb-2" />
                <Skeleton className="h-4 w-44 rounded" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-28 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-surface/30">
        <div className="section-container">
          <SectionHeader
            label="Contact"
            title="Let's Build Something Great"
            subtitle="Open to senior engineering roles, high-impact backend contracts, and technical consulting."
          />

          <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Skeleton className="h-8 w-48 rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
              </div>
              <div className="space-y-3 pt-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="surface-card p-4 rounded-xl flex items-center gap-4"
                  >
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-16 rounded" />
                      <Skeleton className="h-4 w-40 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="surface-card p-7 sm:p-9 rounded-2xl space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16 rounded" />
                    <Skeleton className="h-11 w-full rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16 rounded" />
                    <Skeleton className="h-11 w-full rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-11 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-32 w-full rounded-xl" />
                </div>
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
