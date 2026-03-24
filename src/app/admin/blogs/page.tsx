import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogsTable from '@/components/modules/Admin/Blogs/BlogsTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getBlogs } from '@/services/Blogs/blogs';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

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
    <Link href="/admin/blogs/create">
      <Button>
        <Plus className="mr-2 h-4 w-4" /> Add Blog
      </Button>
    </Link>
  );
};

// SEO
export const metadata: Metadata = {
  title: 'Blogs | Aminul Islam',
};
