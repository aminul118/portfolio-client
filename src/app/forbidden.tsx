'use client';

import { Button } from '@/components/ui/button';
import { Undo } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Forbidden = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className="height-adjust grid place-items-center text-center">
      <div className="space-y-6 rounded-lg border bg-none p-24 shadow-2xl">
        <h1 className="text-9xl font-extrabold text-red-500">403</h1>
        <div>
          <h2 className="mb-3 text-4xl font-semibold">Forbidden</h2>
          <p>You are not authorized to access this resource..</p>
        </div>
        <div className="mt-12 grid grid-cols-2 items-center justify-center gap-3">
          <Button variant="outline" onClick={handleBack}>
            <Undo /> previous page
          </Button>
          <Button asChild>
            <Link href="/"> Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Forbidden;
