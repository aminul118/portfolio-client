import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IStats } from '@/types';

interface StatsProps {
  stats: IStats;
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Users */}
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.userCount}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Total Projects</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.projectCount}
        </CardContent>
      </Card>

      {/* Total Earnings */}
      <Card>
        <CardHeader>
          <CardTitle>Total Earnings</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold text-green-600">
          ৳ {stats.invoice.totalEarnings}
        </CardContent>
      </Card>

      {/* Total Due */}
      <Card>
        <CardHeader>
          <CardTitle>Total Due (Pending)</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold text-red-500">
          ৳ {stats.invoice.totalDue}
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
