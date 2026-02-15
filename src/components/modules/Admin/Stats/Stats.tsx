import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IStats } from '@/types';

interface StatsProps {
  stats: IStats;
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="space-y-8">
      {/* Primary Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Users */}
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.userCount}</div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="border-l-4 border-l-purple-500 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.projectCount}</div>
          </CardContent>
        </Card>

        {/* Blogs */}
        <Card className="border-l-4 border-l-pink-500 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Total Blogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.blogCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Detailed Stats */}
      <div className="space-y-4">
        <h3 className="text-foreground/80 text-lg font-semibold">
          Invoice Overview
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-green-50/50 shadow-sm dark:bg-green-900/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600 dark:text-green-400">
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 dark:text-green-500">
                ৳ {stats.invoice.totalEarnings.toLocaleString()}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Paid invoices
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-50/50 shadow-sm dark:bg-red-900/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400">
                Total Due
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700 dark:text-red-500">
                ৳ {stats.invoice.totalDue.toLocaleString()}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Pending & Unpaid
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50/50 shadow-sm dark:bg-blue-900/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Total Invoices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-500">
                {stats.invoice.totalCount}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Life time count
              </p>
            </CardContent>
          </Card>

          {/* Status Breakdown */}
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Status Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" /> Paid
                </span>
                <span className="font-medium">
                  {stats.invoice.statusDistribution.PAID}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />{' '}
                  Pending
                </span>
                <span className="font-medium">
                  {stats.invoice.statusDistribution.PENDING}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500" /> Unpaid
                </span>
                <span className="font-medium">
                  {stats.invoice.statusDistribution.UNPAID}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stats;
