import Grid from '@/components/common/Grid';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPageLoading = () => {
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

        {/* Blog Cards Grid */}
        <Grid className="mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card
              key={i}
              className="overflow-hidden border-white/5 bg-slate-900/50 pt-0"
            >
              {/* Thumbnail Skeleton */}
              <Skeleton className="aspect-video w-full rounded-none" />

              <CardContent className="space-y-4 p-5">
                {/* Title */}
                <Skeleton className="h-6 w-11/12" />

                {/* Excerpt */}
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/5" />

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Skeleton className="h-3 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default BlogPageLoading;
