import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ExperienceFilters from '@/components/modules/Admin/Experience/ExperienceFilters';
import ExperienceTable from '@/components/modules/Admin/Experience/ExperienceTable';
import { getExperience } from '@/services/experience/experience';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const ExperiencePage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const { data } = await getExperience(params);

  return (
    <div>
      <ClientTableWrapper
        tableTitle="Experiences"
        filters={<ExperienceFilters />}
      >
        <ExperienceTable experiences={data} />
      </ClientTableWrapper>
    </div>
  );
};

export default ExperiencePage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Experience | Aminul Islam',
};
// >> SEO End
