import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import AddExperienceModal from './AddExperienceModal';

const ExperienceFilters = () => {
  return (
    <div className="pb-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AppSearching />
        <div className="flex flex-wrap items-center justify-end gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting />
          <ClearAllFilter />
          <RefreshButton />
          <AddExperienceModal />
        </div>
      </div>
    </div>
  );
};

export default ExperienceFilters;
