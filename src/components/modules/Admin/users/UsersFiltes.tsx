import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import SearchFilter from '@/components/common/searching/SearchFilter';
import Sorting from '@/components/common/sorting/Sorting';
import NewUserModal from './NewUserModal';

// Users Filter
const UsersFilters = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between gap-2">
        <SearchFilter />
        <div className="flex items-center justify-between gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />
          <ClearAllFilter />
          <RefreshButton />
          <NewUserModal />
        </div>
      </div>
    </div>
  );
};

export default UsersFilters;
