import DateFormat from '@/components/common/formater/date-format';
import HtmlContent from '@/components/rich-text/core/html-content';
import Container from '@/components/ui/Container';
import metaConfig from '@/config/meta.config';
import { generateJsonLd } from '@/seo/generateJsonLd';
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
  const { content, createdAt, title, updatedAt, thumbnail } = blog;

  const cleanDescription = (text: string) => {
    if (!text) return '';
    if (text.trim().startsWith('[')) {
      try {
        const parsed = JSON.parse(text);
        const extractText = (nodes: any[]): string => {
          return nodes
            .map((node) => {
              if (node.text) return node.text;
              if (node.children) return extractText(node.children);
              return '';
            })
            .join(' ');
        };
        return extractText(parsed);
      } catch {
        return text.replace(/<[^>]*>/g, '');
      }
    }
    return text.replace(/<[^>]*>/g, '');
  };

  // JSON-LD data for BlogPosting
  const jsonLd = generateJsonLd('BlogPosting', {
    headline: title,
    image: thumbnail || metaConfig.baseImage,
    datePublished: createdAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Person',
      name: metaConfig.authors_name,
      url: metaConfig.authorPortfolio,
    },
    description: cleanDescription(content).slice(0, 160),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${metaConfig.baseUrl}/blogs/${slug}`,
    },
  });

  return (
    <article>
      {/* Dynamic JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd}
        key="blog-jsonld"
      />

      <Container className="py-20 lg:py-24">
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="font-medium text-blue-400">
              {metaConfig.authors_name}
            </span>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1">
              <span>Post Date:</span>
              <DateFormat date={createdAt} />
            </div>
          </div>
        </header>

        <HtmlContent
          content={content}
          className="prose prose-invert prose-blue prose-headings:text-white prose-p:text-slate-300 prose-a:text-blue-400 max-w-none"
        />
      </Container>
    </article>
  );
};

export default BlogDetailsPage;

//  SEO Metatag
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const { data: blog } = await getSingleBlog(slug);

  if (!blog) {
    notFound();
  }
  const { content, title, thumbnail } = blog;

  const getCleanText = (content: string) => {
    if (!content) return '';
    if (content.trim().startsWith('[')) {
      try {
        const parsed = JSON.parse(content);
        const extractText = (nodes: any[]): string => {
          return nodes
            .map((node) => {
              if (node.text) return node.text;
              if (node.children) return extractText(node.children);
              return '';
            })
            .join(' ');
        };
        return extractText(parsed);
      } catch {
        return content.replace(/<[^>]*>/g, '');
      }
    }
    return content.replace(/<[^>]*>/g, '');
  };

  const description = getCleanText(content).slice(0, 160);

  return generateMetaTags({
    title: `${title} | Aminul Islam Blog`,
    description,
    keywords: `${title}, Aminul Islam, Web Development, Tech Blog, Next.js`,
    image: thumbnail || metaConfig.baseImage,
    websitePath: `/blogs/${slug}`,
  });
}
