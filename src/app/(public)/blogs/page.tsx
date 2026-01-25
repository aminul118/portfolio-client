import NotFound from '@/components/common/error/NotFound';
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
  const { data: blogs, meta } = await getBlogs(params);

  return (
    <>
      <ClientWrapper meta={meta}>
        <Container className="py-12">
          {blogs?.length > 0 ? (
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
              {blogs.map((blog) => {
                return <BlogCard key={blog._id} {...blog} />;
              })}
            </div>
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

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: 'Blogs | Aminul Islam',
  description:
    'Explore the latest blogs from Aminul Islam.  covering healthcare innovations, medical research, digital health trends, and community health insights from Bangladesh and beyond.',
  keywords:
    'SHRL blogs, healthcare articles Bangladesh, medical research, SHRL news, public health insights, digital health Bangladesh, healthcare innovation, SHRL research updates, medical technology blogs, community health awareness',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'blogs',
});
