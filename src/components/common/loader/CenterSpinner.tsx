'use client';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const CenterSpinner = ({ className }: Props) => {
  return (
    <div className={cn('mt-22 flex flex-col items-center gap-3', className)}>
      <span className="h-14 w-14 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      <p className="text-muted-foreground text-sm">Loading…</p>
    </div>
  );
};

export default CenterSpinner;
