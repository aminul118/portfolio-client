import CardSkeleton from '@/components/common/loader/CardSkeleton';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getProjects } from '@/services/project/projects';
import { Suspense } from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedProjectsSlider = async () => {
  const params = { isFeatured: true };
  const { data } = await getProjects(params);

  return (
    <Container className="text-center">
      <SectionHeading
        heading="Featured Projects"
        description="A showcase of my work blending creativity and functionality."
      />
      <Suspense fallback={<CardSkeleton count={3} />}>
        <FeaturedCard projects={data} />
      </Suspense>
    </Container>
  );
};

export default FeaturedProjectsSlider;
