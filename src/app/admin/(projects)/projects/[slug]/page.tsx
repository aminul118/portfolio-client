import NotFound from '@/components/common/error/NotFound';
import ProjectDetails from '@/components/modules/Admin/Projects/ProjectDetails';
import { getSingleProject } from '@/services/Project/projects';
import { Params } from '@/types';

const ProjectDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: project } = await getSingleProject(slug);
  console.log(project);

  if (!project) {
    return <NotFound title="Project not found" />;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
