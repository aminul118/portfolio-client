import TableSkeleton from '@/components/common/loader/TableSkeleton';

const InvoiceLoading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />;
    </>
  );
};

export default InvoiceLoading;
