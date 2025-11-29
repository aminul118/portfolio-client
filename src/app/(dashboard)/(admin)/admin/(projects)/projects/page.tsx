import ProjectTable from '@/components/modules/Projects/ProjectTable';
import { ISearchParams } from '@/types';

const ProjectPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <>
      <ProjectTable props={resolvedSearchparams} />
    </>
  );
};

export default ProjectPage;
