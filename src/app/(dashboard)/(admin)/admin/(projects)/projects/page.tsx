import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ProjectFilters from '@/components/modules/Admin/Projects/ProjectFilters';
import ProjectTable from '@/components/modules/Admin/Projects/ProjectTable';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const { data, meta } = await getProjects(params);

  return (
    <>
      <ClientTableWrapper
        meta={meta}
        tableTitle="Projects"
        filters={<ProjectFilters />}
      >
        <ProjectTable projects={data} />
      </ClientTableWrapper>
    </>
  );
};

export default ProjectPage;
