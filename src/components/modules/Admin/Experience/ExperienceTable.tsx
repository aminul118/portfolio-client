export const dynamic = 'force-dynamic'; // prevent prerendering errors

import ExperienceActions from '@/components/modules/Admin/Experience/ExperienceActions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { IExperience } from '@/types/api.types';

const ExperienceTable = async ({
  experiences,
}: {
  experiences: IExperience[];
}) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Timeline</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {experiences?.map((user, index) => (
          <TableRow key={user._id} className="hover:bg-primary/10">
            <TableCell>{index + 1}</TableCell>
            <TableCell>{user.position}</TableCell>
            <TableCell>{user.companyName}</TableCell>
            <TableCell className="font-medium">{user.timeline}</TableCell>
            <TableCell className="font-medium">
              <ExperienceActions experience={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExperienceTable;
