import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPageLoading = () => {
  return (
    <Container className="py-12">
      {/* Blog Cards Skeleton — matches BlogCard layout */}
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden pt-0">
            {/* Thumbnail Skeleton */}
            <Skeleton className="h-48 w-full rounded-none xl:h-70" />

            {/* Card Content Skeleton */}
            <CardContent className="space-y-3">
              {/* Title */}
              <Skeleton className="h-6 w-4/5" />

              {/* Date */}
              <Skeleton className="h-3 w-1/3" />

              {/* Content Preview */}
              <div className="space-y-2 pt-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-11/12" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default BlogPageLoading;
