import NotFound from '@/components/common/error/NotFound';
import DateFormat from '@/components/common/formater/date-format';
import HtmlContent from '@/components/rich-text/core/html-content';
import { Button } from '@/components/ui/button';
import { getSingleBlog } from '@/services/Blogs/blogs';
import { Params } from '@/types';
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: blog } = await getSingleBlog(slug);

  if (!blog) {
    return <NotFound />;
  }

  const { content, createdAt, thumbnail, title } = blog;

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog Details</h1>
        <Link href={`/admin/blogs/${slug}/edit`}>
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Blog
          </Button>
        </Link>
      </div>

      <div className="rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}

          {/* Date */}
          {createdAt && (
            <div className="text-muted-foreground text-sm">
              User Created: <DateFormat date={createdAt} />
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {thumbnail && (
              <Image
                src={thumbnail}
                width={800}
                height={400}
                alt={title}
                className="h-auto w-full rounded-md object-cover"
              />
            )}
          </div>

          {/* Content */}
          {content && <HtmlContent className="mt-4" content={content} />}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
