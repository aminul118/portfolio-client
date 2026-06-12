import AddExperienceModal from '@/app/admin/experience/_components/AddExperienceModal';
import ExperienceTable from '@/app/admin/experience/_components/ExperienceTable';
import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getExperience } from '@/services/experience/experience';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const ExperiencePage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getExperience(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="Projects"
        meta={meta}
        action={<AddExperienceModal />}
      >
        <TableFilters />
        <ExperienceTable experiences={data} />
      </ClientTableWrapper>
    </>
  );
};

export default ExperiencePage;

//  SEO
export const metadata: Metadata = {
  title: 'Experience | Aminul Islam',
};
