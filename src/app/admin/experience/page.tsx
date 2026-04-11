import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AddExperienceModal from '@/components/modules/Admin/Experience/AddExperienceModal';
import ExperienceTable from '@/components/modules/Admin/Experience/ExperienceTable';
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
