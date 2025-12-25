import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ProjectFilters from '@/components/modules/Admin/Projects/ProjectFilters';
import ProjectTable from '@/components/modules/Admin/Projects/ProjectTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getProjects(params);
  console.log(data);

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
