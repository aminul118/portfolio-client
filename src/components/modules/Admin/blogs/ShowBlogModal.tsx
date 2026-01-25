import DateFormat from '@/components/common/formater/date-format';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import HtmlContent from '@/components/ui/HtmlContent';
import { IBlog, IModal } from '@/types';
import Image from 'next/image';

interface Props extends IModal {
  blog: IBlog;
}

const ShowBlogModal = ({ blog, open, setOpen }: Props) => {
  const { content, createdAt, thumbnail, title } = blog;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-3xl"
      >
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>

        <div className="space-y-2 text-sm">
          {/* Date */}
          {createdAt && (
            <div className="text-xs">
              User Created: <DateFormat date={createdAt} />
            </div>
          )}

          {/* Content */}
          {content && <HtmlContent className="mt-4" content={content} />}

          <div className="mt-6 grid grid-cols-2 gap-4">
            {thumbnail && (
              <Image
                src={thumbnail}
                width={300}
                height={300}
                alt={title}
                className="h-64 w-96 object-cover"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowBlogModal;
