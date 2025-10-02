'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="grid min-h-screen place-items-center text-center">
      <Card className="w-full max-w-lg rounded-lg border p-10 shadow-2xl">
        {/* Next.js 15 Image Fix */}
        <Image
          src={images.notFound}
          alt="Error 404"
          height={100}
          width={100}
          className="mx-auto"
        />
        <div className="space-y-2">
          <p>{path} </p>
          <h2 className="text-4xl font-semibold">Page Not Found</h2>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
        </div>

        <Link href="/">
          <Button variant="destructive">Return to Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
