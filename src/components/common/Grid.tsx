import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
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
