import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectsLoading = () => {
  return (
    <Container>
      {/* Section Heading Skeleton */}
      <Skeleton className="mx-auto mt-6 h-10 w-5/12" />
      <Skeleton className="mx-auto mt-4 h-4 w-2/4" />
      <Skeleton className="mx-auto mt-2 h-4 w-1/4" />

      {/* Project Cards Skeleton - matches ProjectCard layout */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg"
          >
            {/* Image Skeleton */}
            <Skeleton className="h-[200px] w-full rounded-none 2xl:h-[300px]" />

            {/* Title Skeleton */}
            <div className="px-4 pt-4 pb-2">
              <Skeleton className="h-6 w-3/4" />
            </div>

            {/* Tech Stack Skeleton */}
            <div className="mt-auto flex flex-wrap items-center gap-1.5 px-4 pt-3 pb-4">
              <Skeleton className="h-7 w-16 rounded-md" />
              <Skeleton className="h-7 w-20 rounded-md" />
              <Skeleton className="h-7 w-14 rounded-md" />
              <Skeleton className="h-7 w-10 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProjectsLoading;
