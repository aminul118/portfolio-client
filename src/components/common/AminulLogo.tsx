import icons from '@/constants/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const AminulLogo = ({ className }: { className?: string }) => {
  return (
    <>
      <Link
        aria-label="Navigate to home page"
        href="/"
        className={cn('flex items-center text-2xl font-semibold', className)}
      >
        <Image
          src={icons.logo}
          height={40}
          width={40}
          alt="Md Aminul Islam Developer logo"
          priority={true}
        />
        Aminul
      </Link>
    </>
  );
};

export default AminulLogo;
