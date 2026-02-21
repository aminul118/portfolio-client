import NotFound from '@/components/common/error/NotFound';
import Grid from '@/components/common/Grid';
import TableFilters from '@/components/common/table/TableFilters';
import ClientWrapper from '@/components/common/wrapper/ClientWrapper';
import BlogCard from '@/components/modules/Public/blogs/BlogCard';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';
import generateMetaTags from '@/seo/generateMetaTags';
import { getBlogs } from '@/services/blogs/blogs';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const BlogsPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data: blogs, meta } = await getBlogs({ ...params, limit: '12' });

  return (
    <>
      <ClientWrapper meta={meta}>
        <Container className="pt-20">
          <TableFilters />
          {blogs?.length > 0 ? (
            <Grid className="mt-6">
              {blogs.map((blog) => {
                return <BlogCard key={blog._id} {...blog} />;
              })}
            </Grid>
          ) : (
            <NotFound
              title="Blogs Not Found"
              description="When Aminul Islam adds blogs, you will find it here."
            />
          )}
        </Container>
      </ClientWrapper>
    </>
  );
};

export default BlogsPage;

//  SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Tech Blogs & Insights | Md. Aminul Islam',
  description:
    'Read the latest articles and insights on Web Development, MERN Stack, Next.js, TypeScript, and software engineering best practices by Md. Aminul Islam.',
  keywords:
    'Web Development Blogs, MERN Stack Tutorials, Next.js Guides, TypeScript Tips, Software Engineering, Coding Best Practices, React JS, Tech Insights, Aminul Islam Blog',
  websitePath: '/blogs',
});
