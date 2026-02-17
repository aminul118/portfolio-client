import BackButton from '@/components/common/button/back-button';
import LatestProjects from '@/components/modules/Public/Projects/LatestProjects';
import PhotoGallery from '@/components/modules/Public/Projects/PhotoGallery';
import HtmlContent from '@/components/rich-text/core/html-content';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import metaConfig from '@/config/meta.config';
import { getSingleProject } from '@/services/project/projects';
import { Params } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const ProjectDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const data = await getSingleProject(slug);
  const project = data?.data;

  if (!project) {
    notFound();
  }

  return (
    <Container className="mt-16 lg:mt-22">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-3 overflow-hidden lg:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold sm:text-3xl">{project?.title}</h1>
            <div className="flex items-center gap-2">
              <BackButton />
              <Button asChild>
                <Link href={project?.liveLink} target="_blank">
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>

          <Image
            src={project?.thumbnail}
            alt={project.title}
            width={800}
            height={400}
            className="mt-4 w-full rounded-lg object-cover"
          />

          <HtmlContent
            content={project.content}
            className="mt-5 text-justify"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {project?.technology?.map((tech, i) => {
              return (
                <Button
                  variant="outline"
                  key={i}
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  {tech}
                </Button>
              );
            })}
          </div>
        </div>

        <aside className="space-y-6 lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <h3 className="mb-6 text-xl font-bold text-white">
              Latest Projects
            </h3>
            <div className="grid gap-6">
              <LatestProjects currentSlug={slug} />
            </div>
          </div>
        </aside>
      </div>

      {/* Photos Gallery */}
      {project?.photos && project.photos.length > 0 && (
        <PhotoGallery photos={project.photos} title={project.title} />
      )}
    </Container>
  );
};

export default ProjectDetailsPage;

// SEO Metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSingleProject(slug);
  const project = data?.data;

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  const cleanDescription =
    project.content?.replace(/<[^>]*>/g, '').slice(0, 160) ||
    `Details about ${project.title}`;

  return {
    title: project.title,
    description: cleanDescription,
    openGraph: {
      title: project.title,
      description: cleanDescription,
      url: `${metaConfig.baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}
