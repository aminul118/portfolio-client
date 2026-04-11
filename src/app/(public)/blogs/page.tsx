import NotFound from '@/components/common/error/NotFound';
import Grid from '@/components/common/Grid';
import TableFilters from '@/components/common/table/TableFilters';
import ClientWrapper from '@/components/common/wrapper/ClientWrapper';
import BlogCard from '@/components/modules/Public/blogs/BlogCard';
import SectionBanner from '@/components/ui/SectionBanner';
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
      <SectionBanner
        heading="Blogs & Insights"
        description="Exploring the world of web development, sharing experiences, and documenting the journey of building modern applications."
        className="pt-16"
      />
      <ClientWrapper meta={meta}>
        <section className="container mx-auto px-2 py-8 pt-4">
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
        </section>
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
