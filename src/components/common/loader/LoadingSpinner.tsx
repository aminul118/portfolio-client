import images from '@/config/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn('grid place-items-center', className)}>
      <Image
        src={images.gif.spinner}
        width={100}
        height={100}
        alt="Loading spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
