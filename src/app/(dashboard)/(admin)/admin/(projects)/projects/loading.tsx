import TableSkeleton from '@/components/common/loader/TableSkeleton';

const ProjectsPageLoading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />;
    </>
  );
};

export default ProjectsPageLoading;
