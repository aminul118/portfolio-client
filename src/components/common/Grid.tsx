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
        'grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
