import CardSkeleton from '@/components/common/loader/CardSkeleton';
import { Card } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectsLoading = () => {
  return (
    <Container>
      <Skeleton className="mx-auto mt-6 h-10 w-5/12" />
      <Skeleton className="mx-auto mt-4 h-4 w-2/4" />
      <Skeleton className="mx-auto mt-2 h-4 w-1/4" />
      {/* Card Skeleton */}
      <CardSkeleton count={6}>
        <Card className="space-y-2 p-4 shadow-sm">
          <Skeleton className="mx-auto mt-2 h-4 w-3/4" />
          <Skeleton className="h-40 w-full rounded-lg" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
        </Card>
      </CardSkeleton>
    </Container>
  );
};

export default ProjectsLoading;
