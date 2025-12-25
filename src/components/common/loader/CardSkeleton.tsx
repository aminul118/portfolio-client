import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ItemConfig {
  height?: string;
  width?: string;
  rounded?: string;
}

interface CardSkeletonProps {
  count?: number;
  gridColumn?: string;
  gap?: string;
  items?: ItemConfig[];
  className?: string;
}

const CardSkeleton = ({
  count = 3,
  gridColumn = '3',
  gap = 'gap-4',
  className,
  items = [
    { height: '40', width: 'full', rounded: 'rounded-lg' },
    { height: '4', width: '3/4', rounded: 'rounded' },
    { height: '4', width: '1/2', rounded: 'rounded' },
    { height: '10', width: 'full', rounded: 'rounded-md' },
  ],
}: CardSkeletonProps) => {
  return (
    <Container>
      <div
        className={cn(
          `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridColumn}`,
          gap,
        )}
      >
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col space-y-4 rounded-sm border p-4 shadow-sm',
              className,
            )}
          >
            {items.map((item, i) => (
              <Skeleton
                key={i}
                className={cn(
                  item.height && `h-${item.height}`,
                  item.width && `w-${item.width}`,
                  item.rounded ?? '',
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CardSkeleton;
