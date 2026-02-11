import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const InvoiceDetailsLoading = () => {
  return (
    <div className="mx-auto w-11/12 space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="pt-4">
          <Skeleton className="h-10 w-48 rounded-md" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-20 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>

      {/* Payable To & Invoice Info Skeletons */}
      <div className="flex items-center justify-between gap-12">
        {/* Payable To Skeleton */}
        <Card className="w-full max-w-lg rounded-2xl">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Invoice Info Skeleton */}
        <Card className="w-full max-w-lg rounded-2xl">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Items Skeleton */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-16" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Table Header Skeleton */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="col-span-2">
              <Skeleton className="h-4 w-8" />
            </div>
            <div className="col-span-2 text-right">
              <Skeleton className="ml-auto h-4 w-10" />
            </div>
            <div className="col-span-2 text-right">
              <Skeleton className="ml-auto h-4 w-12" />
            </div>
          </div>
          <Separator />

          {/* Item Rows Skeletons */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-12 gap-2">
              <div className="col-span-6">
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="col-span-2">
                <Skeleton className="h-4 w-4" />
              </div>
              <div className="col-span-2">
                <Skeleton className="ml-auto h-4 w-12" />
              </div>
              <div className="col-span-2">
                <Skeleton className="ml-auto h-4 w-16" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Totals Skeleton */}
      <Card className="ml-auto w-full max-w-lg rounded-2xl">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-16" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-24" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceDetailsLoading;
