import HtmlContent from '@/components/common/formater/HtmlContent';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { getProjectById } from '@/services/project/projects';
import { Params } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const ProjectDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const data = await getProjectById(slug);
  const project = data?.data;

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-3xl font-bold">{project?.title}</h1>
        <Button asChild className="w-32">
          <Link href={project?.liveLink} target="_blank">
            Live Demo
          </Link>
        </Button>
      </div>

      <Image
        src={project?.thumbnail}
        alt={project.title}
        width={800}
        height={400}
      />

      <HtmlContent content={project.content} className="mt-5 text-justify" />
      <div className="mt-4 flex gap-2">
        {project?.technology?.map((tech, i) => {
          return (
            <Button variant="outline" key={i} className="">
              {tech}
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectDetailsPage;
