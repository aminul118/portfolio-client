import DateFormat from '@/components/common/formater/date-format';
import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import generateMetaTags from '@/seo/generateMetaTags';
import { getSingleBlog } from '@/services/blogs/blogs';
import { Params } from '@/types';
import { notFound } from 'next/navigation';

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: blog } = await getSingleBlog(slug);

  if (!blog) {
    notFound();
  }
  const { content, createdAt, title, thumbnail } = blog;

  return (
    <Container>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xs text-gray-500">
        Post Date: <DateFormat date={createdAt} />
      </p>
      <HtmlContent content={content} className="mt-8" />
    </Container>
  );
};

export default BlogDetailsPage;

//  SEO
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const { data: blog } = await getSingleBlog(slug);

  if (!blog) {
    notFound();
  }
  const { content, title, thumbnail } = blog;
  return generateMetaTags({
    title: `${title}`,
    description: content?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
    keywords: `${title}, Blog`,
    image: thumbnail || '',
    websitePath: `/blogs/${slug}`,
  });
}
