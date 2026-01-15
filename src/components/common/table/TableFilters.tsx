import { ReactNode } from 'react';
import RefreshButton from '../button/refresh-button';
import ClearAllFilter from '../filtering/ClearAllFilter';
import PageLimit from '../pagination/PageLimit';
import SearchFilter from '../searching/SearchFilter';
import Sorting, { SortOption } from '../sorting/Sorting';

interface IProps {
  children?: ReactNode;
  sortOptions?: SortOption[];
  pageNumbers?: number[];
}

const TableFilters = ({
  children,
  sortOptions,
  pageNumbers = [10, 20, 30, 40],
}: IProps) => {
  return (
    <div className="pb-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SearchFilter />
        <div className="flex flex-wrap items-center justify-end gap-2">
          <PageLimit pageNumbers={pageNumbers} />
          <Sorting sortOptions={sortOptions} />
          <ClearAllFilter />
          <RefreshButton />
          {children}
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
