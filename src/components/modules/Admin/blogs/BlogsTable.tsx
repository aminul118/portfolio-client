'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IBlog } from '@/types';
import BlogsColum from './BlogsColum';

const BlogsTable = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <TableManageMent
      columns={BlogsColum}
      data={blogs || []}
      getRowKey={(b) => b._id}
      emptyMessage="No blog post found"
    />
  );
};

export default BlogsTable;
