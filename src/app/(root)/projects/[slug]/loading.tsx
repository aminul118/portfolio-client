import Container from '@/components/ui/Container';

const loading = () => {
  return (
    <Container>
      {/* Title skeleton */}{' '}
      <div className="my-4 h-10 w-3/4 animate-pulse rounded-md"></div>
      {/* Button skeleton */}
      <div className="mb-4 h-10 w-32 animate-pulse rounded-md"></div>
      {/* Image skeleton */}
      <div className="mb-5 h-96 w-full animate-pulse rounded-md"></div>
      {/* Content skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded-md"></div>
        <div className="h-4 w-5/6 animate-pulse rounded-md"></div>
        <div className="h-4 w-11/12 animate-pulse rounded-md"></div>
        <div className="h-4 w-3/4 animate-pulse rounded-md"></div>
      </div>
      {/* Tech buttons skeleton */}
      <div className="mt-4 flex gap-2">
        <div className="h-8 w-20 animate-pulse rounded-md"></div>
        <div className="h-8 w-20 animate-pulse rounded-md"></div>
        <div className="h-8 w-20 animate-pulse rounded-md"></div>
      </div>
    </Container>
  );
};

export default loading;
