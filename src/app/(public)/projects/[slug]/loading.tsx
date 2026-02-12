import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectDetailsLoading = () => {
  return (
    <Container className="mt-16 space-y-6 lg:mt-22">
      {/* Title + Buttons Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-9 w-3/5 sm:h-10" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>
      </div>

      {/* Main Image Skeleton */}
      <Skeleton className="mt-4 h-64 w-full rounded-lg sm:h-80 md:h-96" />

      {/* Content Skeleton */}
      <div className="mt-5 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Technology Tags Skeleton */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-24 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-22 rounded-md" />
        <Skeleton className="h-8 w-18 rounded-md" />
      </div>

      {/* Photo Gallery Skeleton */}
      <div className="mt-6 space-y-4">
        <Skeleton className="h-7 w-40" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <Skeleton className="aspect-video w-full rounded-lg" />
          <Skeleton className="aspect-video w-full rounded-lg" />
          <Skeleton className="aspect-video w-full rounded-lg" />
          <Skeleton className="aspect-video w-full rounded-lg" />
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetailsLoading;
