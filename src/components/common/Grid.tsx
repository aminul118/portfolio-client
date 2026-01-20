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
        'grid items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
