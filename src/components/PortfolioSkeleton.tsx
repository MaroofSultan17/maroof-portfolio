import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function PortfolioSkeleton() {
  return (
    <div className="min-h-screen bg-bg text-primary font-body overflow-x-hidden selection:bg-primary-light selection:text-primary">
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 glass-panel">
        <div className="section-container h-16 flex items-center justify-between">
          <Skeleton className="h-6 w-12 rounded-lg" />
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-14 rounded" />
            <Skeleton className="h-4 w-14 rounded" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-20 rounded-lg hidden sm:block" />
            <Skeleton className="h-9 w-9 rounded-lg" />
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="min-h-[85vh] flex items-center section-padding">
          <div className="section-container w-full grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Skeleton className="h-7 w-56 rounded-full" />
              <div className="space-y-3">
                <Skeleton className="h-12 sm:h-16 w-4/5 rounded-2xl" />
                <Skeleton className="h-8 sm:h-10 w-3/5 rounded-xl" />
              </div>
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-11/12 rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </div>
              <div className="flex flex-wrap gap-3 pt-3">
                <Skeleton className="h-11 w-36 rounded-xl" />
                <Skeleton className="h-11 w-36 rounded-xl" />
                <Skeleton className="h-11 w-11 rounded-xl" />
                <Skeleton className="h-11 w-11 rounded-xl" />
              </div>
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-border">
                <Skeleton className="h-16 rounded-xl" />
                <Skeleton className="h-16 rounded-xl" />
                <Skeleton className="h-16 rounded-xl" />
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-28 rounded" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                </div>
                <div className="space-y-3 my-auto py-6">
                  <Skeleton className="h-5 w-3/4 rounded" />
                  <Skeleton className="h-5 w-2/3 rounded" />
                  <Skeleton className="h-5 w-4/5 rounded" />
                  <Skeleton className="h-5 w-1/2 rounded" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border/50">
          <div className="section-container space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <Skeleton className="h-4 w-16 mx-auto rounded" />
              <Skeleton className="h-8 w-64 mx-auto rounded-lg" />
              <Skeleton className="h-4 w-80 mx-auto rounded" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="space-y-3">
                    <Skeleton className="h-10 w-10 rounded-xl" />
                    <Skeleton className="h-5 w-32 rounded" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Skeleton className="h-3.5 w-full rounded" />
                    <Skeleton className="h-3.5 w-4/5 rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border/50">
          <div className="section-container space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <Skeleton className="h-4 w-20 mx-auto rounded" />
              <Skeleton className="h-8 w-72 mx-auto rounded-lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-40 rounded-lg" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-32 rounded" />
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-5/6 rounded" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
