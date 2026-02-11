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
  title: 'Portfolio Projects | Md. Aminul Islam - Web Development Showcase',
  description:
    'Discover the portfolio of Md. Aminul Islam, featuring innovative MERN stack applications, Next.js websites, and high-performance web solutions. View live demos and code.',
  keywords:
    'Aminul Islam Projects, Web Development Portfolio, MERN Stack Projects, Next.js Portfolio, React Projects, Full Stack Applications, Software Case Studies, Web App Examples, GitHub Projects',
  websitePath: '/projects',
});
