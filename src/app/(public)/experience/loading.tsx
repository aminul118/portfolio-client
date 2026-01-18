import { Skeleton } from '@/components/ui/skeleton';

const ExperienceLoading = () => {
  return (
    <section className="container mx-auto px-2 py-16">
      {/* Section heading skeleton */}
      <div className="mx-auto mb-10 max-w-xl space-y-3 text-center">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mx-auto h-4 w-full max-w-md" />
      </div>

      {/* Experience cards skeleton */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-12 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-lg bg-slate-950 p-8 shadow-lg"
          >
            <Skeleton className="h-5 w-2/3" /> {/* position */}
            <Skeleton className="h-4 w-1/2" /> {/* company */}
            <Skeleton className="h-3 w-1/3" /> {/* timeline */}
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceLoading;
