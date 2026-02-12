import { Skeleton } from '@/components/ui/skeleton';

const ExperienceLoading = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:mt-28">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Section Heading Skeleton */}
      <div className="mx-auto max-w-2xl space-y-3 px-2 py-12 text-center text-white/60">
        <Skeleton className="mx-auto h-10 w-48" />
        <Skeleton className="mx-auto h-4 w-full max-w-md" />
      </div>

      {/* Timeline Skeleton */}
      <div className="relative mx-auto mt-16 max-w-6xl pb-12">
        {/* Vertical Line */}
        <div className="absolute top-0 left-9 h-full w-0.5 bg-white/10 md:left-1/2 md:-ml-px" />

        <div className="space-y-8 md:space-y-12">
          {Array.from({ length: 4 }).map((_, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative mb-8 flex w-full flex-col items-center justify-between md:mb-12 md:flex-row ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer */}
                <div className="hidden w-5/12 md:block" />

                {/* Timeline Node */}
                <div className="border-background absolute top-0 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 bg-slate-800 md:left-1/2 md:-ml-5 md:h-12 md:w-12">
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>

                {/* Content Card Skeleton */}
                <div className="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-5/12">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                    {/* Date Badge */}
                    <div className="mb-4 flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>

                    <Skeleton className="mb-2 h-6 w-3/4" />
                    <div className="mb-4 flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-5/6" />
                      <Skeleton className="h-3 w-4/6" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLoading;
