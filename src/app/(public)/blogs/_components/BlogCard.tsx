'use client';

import DateFormat from '@/components/common/formater/date-format';
import { Card, CardContent } from '@/components/ui/card';
import { IBlog } from '@/types';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, content, thumbnail, createdAt, slug }: IBlog) => {
  // Simple helper to strip HTML or Plate JSON and truncate for the excerpt
  const getExcerpt = (content: string, limit: number = 100) => {
    if (!content) return '';

    let text = '';
    if (content.trim().startsWith('[')) {
      try {
        const parsed = JSON.parse(content);
        // Recursive function to extract text from Plate JSON
        const extractText = (nodes: any[]): string => {
          return nodes
            .map((node) => {
              if (node.text) return node.text;
              if (node.children) return extractText(node.children);
              return '';
            })
            .join(' ');
        };
        text = extractText(parsed);
      } catch {
        text = content.replace(/<[^>]*>?/gm, '');
      }
    } else {
      text = content.replace(/<[^>]*>?/gm, '');
    }

    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className="group relative h-full overflow-hidden border-white/10 bg-slate-900/50 px-0 pt-0 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={thumbnail || '/default-avatar.png'}
            fill
            alt={title || 'Blog Post'}
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

          {/* Float Badge */}
          {/* <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-blue-600/80 text-xs font-semibold text-white backdrop-blur-md hover:bg-blue-600"
            >
              Article
            </Badge>
          </div> */}
        </div>

        <CardContent className="flex flex-col gap-3 p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Calendar className="size-3 text-blue-400" />
            <DateFormat date={createdAt} />
          </div>

          {/* Title */}
          <h3 className="line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
            {getExcerpt(content, 120)}
          </p>

          {/* Footer / Read More */}
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3">
            <Link href={`/blogs/${slug}`}>Read Article</Link>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
