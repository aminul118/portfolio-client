import TableSkeleton from '@/components/common/loader/TableSkeleton';

const BlogsLoading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />;
    </>
  );
};

export default BlogsLoading;
