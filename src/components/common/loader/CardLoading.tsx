import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  size?: number;
}

const CardLoading = ({ size = 3 }: Props) => {
  const skeletonCards = Array.from({ length: size });

  return (
    <Container>
      <SectionHeading heading="Projects" description="Loading projects..." />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {skeletonCards.map((_, index) => (
          <Card key={index} className="rounded-lg shadow-md">
            <CardContent className="space-y-4 p-4">
              {/* Title Skeleton */}
              <Skeleton className="mx-auto h-6 w-3/4" />

              {/* Image Skeleton */}
              <Skeleton className="h-[150px] w-full rounded-md 2xl:h-[350px]" />

              {/* Buttons Skeleton */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <Skeleton className="h-8 w-full rounded-md" />
                <Skeleton className="h-8 w-full rounded-md" />
                <Skeleton className="h-8 w-full rounded-md" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CardLoading;
