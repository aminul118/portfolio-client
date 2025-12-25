'use client';

import AppPagination from '@/components/common/pagination/AppPagination';
import GradientTitle from '@/components/ui/gradientTitle';
import { TransitionContext } from '@/context/useTransition';
import { cn } from '@/lib/utils';
import { IMeta } from '@/types';
import { ReactNode, useTransition } from 'react';
import CenterSpinner from '../loader/CenterSpinner';
import GoToPage from '../pagination/GoToPage';
import PaginationStatus from '../pagination/PaginationStatus';

const ClientTableWrapper = ({
  tableTitle,
  filters,
  children,
  meta,
  loader = <CenterSpinner />,
}: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <TransitionContext.Provider value={{ startTransition, isPending }}>
      <section className="relative">
        <div className="mb-4 flex justify-start">
          <GradientTitle title={tableTitle} />
        </div>

        <>{filters}</>
        <div className="relative">
          <div className={cn(isPending && 'opacity-20')}>{children}</div>

          {/* Centered Loader OVER content */}
          {isPending && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {loader}
            </div>
          )}
        </div>

        {/* Pagination */}
        {meta && (
          <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <GoToPage totalPage={meta.totalPage} />
            <div className="flex items-center gap-4">
              <PaginationStatus meta={meta} />
              <AppPagination className="justify-end" meta={meta} />
            </div>
          </div>
        )}
      </section>
    </TransitionContext.Provider>
  );
};

export default ClientTableWrapper;

interface Props {
  tableTitle: string;
  filters?: ReactNode;
  children: ReactNode;
  meta?: IMeta;
  loader?: ReactNode;
}
