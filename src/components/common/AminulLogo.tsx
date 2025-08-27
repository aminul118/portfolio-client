import icons from '@/constants/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AminulLogo = () => {
  return (
    <>
      <Link
        aria-label="Navigate to home page"
        href="/"
        className="text-2xl font-semibold flex items-center"
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
