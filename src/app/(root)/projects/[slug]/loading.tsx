import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container className="space-y-6 py-6">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-3/4" />

      {/* Button Skeleton */}
      <Skeleton className="h-10 w-32" />

      {/* Image Skeleton */}
      <Skeleton className="h-96 w-full rounded-md" />

      {/* Content Skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Technology Tag Skeletons */}
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </Container>
  );
};

export default Loading;
