import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const BlogDetailsLoading = () => {
  return (
    <Container>
      {/* Title */}
      <Skeleton className="h-9 w-3/4 sm:h-10" />

      {/* Date */}
      <Skeleton className="mt-2 h-3 w-40" />

      {/* Blog Content Skeleton */}
      <div className="mt-8 space-y-4">
        {/* Paragraph 1 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Inline image placeholder */}
        <Skeleton className="my-4 h-56 w-full rounded-lg sm:h-72 md:h-80" />

        {/* Paragraph 2 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Sub-heading */}
        <Skeleton className="mt-2 h-7 w-2/5" />

        {/* Paragraph 3 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsLoading;
