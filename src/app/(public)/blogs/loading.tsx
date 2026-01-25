import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPageLoading = () => {
  return (
    <>
      <Container>
        <Skeleton className="mx-auto mb-12 h-10 w-md" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse overflow-hidden pt-0">
              {/* Image Skeleton */}
              <Skeleton className="h-48 w-full xl:h-70" />

              {/* Card Content Skeleton */}
              <CardContent>
                <CardTitle>
                  <Skeleton className="mb-2 h-5 w-3/4" />
                </CardTitle>
                <Skeleton className="h-3 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogPageLoading;
