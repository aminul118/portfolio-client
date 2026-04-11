import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-14',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
