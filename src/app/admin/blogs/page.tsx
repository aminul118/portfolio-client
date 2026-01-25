import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AddBlogDialog from '@/components/modules/Admin/blogs/AddBlogDialog';
import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getBlogs } from '@/services/blogs/blogs';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const BlogPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getBlogs(params);
  return (
    <>
      <ClientTableWrapper tableTitle="Blogs" meta={meta} action={<Actions />}>
        <TableFilters />
        <BlogsTable blogs={data} />
      </ClientTableWrapper>
    </>
  );
};

export default BlogPage;

const Actions = () => {
  return (
    <>
      <AddBlogDialog />
    </>
  );
};

// SEO
export const metadata: Metadata = {
  title: 'Blogs | Aminul Islam',
};
