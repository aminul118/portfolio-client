import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getProjects } from '@/services/projects';
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
      <FeaturedCard projects={data} />
    </Container>
  );
};

export default FeaturedProjectsSlider;
