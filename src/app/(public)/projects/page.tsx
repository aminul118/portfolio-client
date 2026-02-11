import Grid from '@/components/common/Grid';
import ProjectCard from '@/components/modules/Public/Projects/ProjectCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import generateMetaTags from '@/seo/generateMetaTags';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const { data, meta } = await getProjects(params);

  return (
    <>
      <Container className="py-8">
        <SectionHeading
          heading="Projects"
          description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
        />
        <Grid>
          {data?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectPage;

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: 'Projects | Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
  websitePath: '/projects',
});
