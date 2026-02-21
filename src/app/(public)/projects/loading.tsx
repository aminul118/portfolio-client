import Grid from '@/components/common/Grid';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectsLoading = () => {
  return (
    <div className="pb-12">
      {/* Section Banner Skeleton */}
      <div className="relative flex h-64 w-full items-center justify-center bg-slate-900/50 pt-16">
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-4 px-4 text-center">
          <Skeleton className="h-10 w-2/3 lg:h-12" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      <section className="container mx-auto px-4 py-8 pt-4">
        {/* Filters Skeleton */}
        <div className="mb-8 flex items-center justify-between">
          <Skeleton className="h-10 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>

        {/* Project Cards Grid */}
        <Grid className="mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/5 bg-slate-900/50"
            >
              {/* Image Skeleton */}
              <Skeleton className="aspect-video w-full rounded-none" />

              <div className="flex flex-1 flex-col p-5">
                {/* Title Skeleton */}
                <Skeleton className="mb-4 h-6 w-4/5" />

                <div className="mt-auto space-y-3">
                  {/* Tech Stack Skeleton */}
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-14" />
                  </div>

                  {/* Buttons Skeleton */}
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-9 flex-1" />
                    <Skeleton className="h-9 flex-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default ProjectsLoading;
