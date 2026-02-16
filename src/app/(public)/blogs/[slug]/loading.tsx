import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const BlogDetailsLoading = () => {
  return (
    <Container className="py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
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
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <Skeleton className="mb-6 h-7 w-1/2" />
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4"
                >
                  <Skeleton className="aspect-video w-full rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default BlogDetailsLoading;
