import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ProjectTable from '@/components/modules/Admin/Projects/ProjectTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getProjects(params);

  return (
    <>
      <ClientTableWrapper tableTitle="Projects" meta={meta} action={<Action />}>
        <TableFilters />
        <ProjectTable projects={data} />
      </ClientTableWrapper>
    </>
  );
};

export default ProjectPage;

const Action = () => {
  return (
    <Button asChild>
      <Link href="/admin/add-project">
        <Plus /> Add Projects
      </Link>
    </Button>
  );
};

// SEO
export const metadata: Metadata = {
  title: 'Project | Aminul Islam',
};
