'use client';

import { Button } from '@/components/ui/button';
import { useTransition } from '@/context/useTransition';
import { usePathname, useRouter } from 'next/navigation';

const ClearAllFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isPending, startTransition } = useTransition();

  const handleClear = () => {
    startTransition(() => {
      router.push(pathname);
    });
  };

  return (
    <Button disabled={isPending} onClick={handleClear}>
      Clear Filter
    </Button>
  );
};

export default ClearAllFilter;
