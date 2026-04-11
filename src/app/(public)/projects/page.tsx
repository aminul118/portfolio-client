import Grid from '@/components/common/Grid';
import TableFilters from '@/components/common/table/TableFilters';
import ClientWrapper from '@/components/common/wrapper/ClientWrapper';
import ProjectCard from '@/components/modules/Public/Projects/ProjectCard';
import SectionBanner from '@/components/ui/SectionBanner';
import generateMetaTags from '@/seo/generateMetaTags';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const { data, meta } = await getProjects({ ...params, limit: '12' });

  return (
    <>
      <SectionBanner
        heading="My Projects"
        description="A showcase of my recent work, featuring full-stack applications, interactive web tools, and innovative coding solutions."
        className="pt-16"
      />
      <ClientWrapper meta={meta}>
        <section className="container mx-auto px-2 py-8 pt-4">
          <TableFilters />

          <Grid className="mt-6">
            {data?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </Grid>
        </section>
      </ClientWrapper>
    </>
  );
};

export default ProjectPage;

//  SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Portfolio Projects | Md. Aminul Islam - Web Development Showcase',
  description:
    'Discover the portfolio of Md. Aminul Islam, featuring innovative MERN stack applications, Next.js websites, and high-performance web solutions. View live demos and code.',
  keywords:
    'Aminul Islam Projects, Web Development Portfolio, MERN Stack Projects, Next.js Portfolio, React Projects, Full Stack Applications, Software Case Studies, Web App Examples, GitHub Projects',
  websitePath: '/projects',
});
