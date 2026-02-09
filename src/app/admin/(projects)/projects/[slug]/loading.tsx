'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const ChipSkeleton = () => <Skeleton className="h-6 w-20 rounded-md" />;

const RowSkeleton = () => (
  <div className="flex items-center gap-2">
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-4 w-56" />
  </div>
);

const ProjectDetailsLoading = () => {
  return (
    <div className="container mx-auto w-11/12 space-y-6 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Skeleton className="h-9 w-72" />

        <div className="flex items-center gap-2">
          <Button variant="outline" disabled>
            <Skeleton className="h-4 w-14" />
          </Button>
          <Button disabled>
            <Skeleton className="h-4 w-14" />
          </Button>
        </div>
      </div>

      {/* Thumbnail */}
      <Skeleton className="h-[280px] w-full rounded-lg" />

      {/* Details */}
      <div className="space-y-4">
        <RowSkeleton />
        <RowSkeleton />
        <RowSkeleton />

        {/* Technologies */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <div className="flex flex-wrap gap-2">
            <ChipSkeleton />
            <ChipSkeleton />
            <ChipSkeleton />
            <ChipSkeleton />
            <ChipSkeleton />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[95%]" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>

        {/* Gallery */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        </div>

        {/* Meta */}
        <div className="space-y-2 border-t pt-4">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-56" />
          <Skeleton className="h-3 w-56" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLoading;
