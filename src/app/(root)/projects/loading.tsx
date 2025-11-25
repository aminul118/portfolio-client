import { Card } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';

const ProjectsLoading = () => {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div id="projects">
      <SectionHeading heading="Projects" description="Loading projects..." />
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {skeletonCards.map((_, index) => (
          <Card
            key={index}
            className="group animate-pulse rounded-lg shadow-md"
          >
            {/* Title skeleton */}
            <div className="mx-auto my-3 h-6 w-3/4 rounded"></div>

            {/* Image skeleton */}
            <div className="h-[150px] w-full rounded 2xl:h-[350px]"></div>

            {/* Buttons skeleton */}
            <div className="grid grid-cols-3 gap-2 p-4">
              <div className="h-8 w-full rounded"></div>
              <div className="h-8 w-full rounded"></div>
              <div className="h-8 w-full rounded"></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsLoading;
