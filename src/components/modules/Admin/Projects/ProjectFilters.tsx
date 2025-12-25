'use client';
import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import SearchFilter from '@/components/common/searching/SearchFilter';
import Sorting from '@/components/common/sorting/Sorting';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const ProjectFilters = () => {
  const sortOptions = [
    { name: 'Ascending', value: 'asc' },
    { name: 'Descending', value: 'dsc' },
    { name: 'Featured', value: 'featured' },
    { name: 'Title A-Z', value: 'title' },
  ];
  return (
    <div className="pb-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SearchFilter />
        <div className="flex flex-wrap items-center justify-end gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting sortOptions={sortOptions} />
          <ClearAllFilter />
          <RefreshButton />
          <Button asChild>
            <Link href="/admin/add-project">
              <Plus />
              Add Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectFilters;
