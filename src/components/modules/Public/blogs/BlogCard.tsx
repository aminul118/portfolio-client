import DateFormat from '@/components/common/formater/date-format';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import HtmlContent from '@/components/ui/HtmlContent';
import { IBlog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, content, thumbnail, createdAt, slug }: IBlog) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="overflow-hidden pt-0">
        <div className="relative overflow-hidden">
          <Image
            src={thumbnail || '/default-avatar.png'}
            width={400}
            height={200}
            alt={title || 'Blogs'}
            priority
            className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 xl:h-70"
          />
        </div>
        <CardContent>
          <CardTitle className="mb-1 text-lg font-semibold">{title}</CardTitle>
          <p className="text-xs text-gray-500">
            Post Date: <DateFormat date={createdAt} />
          </p>

          <HtmlContent content={content} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
