import ExperienceTable from '@/components/modules/Admin/Experience/ExperienceTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const ExperiencePage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;

  return (
    <div>
      <ExperienceTable props={resolvedSearchparams} />
    </div>
  );
};

export default ExperiencePage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Experience | Aminul Islam',
};
// >> SEO End
