import DateFormat from '@/components/common/formater/date-format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IUser } from '@/types/api.types';
import { BadgeCheck } from 'lucide-react';
import UserActions from './user-actions';

const UsersTable = ({ users }: { users: IUser[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Picture</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Verify</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user, index: number) => (
          <TableRow key={user._id} className="hover:bg-primary/10">
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.picture} alt={user.fullName} />
                <AvatarFallback>
                  {user.fullName?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="font-medium">{user.role}</TableCell>
            <TableCell>
              {user.isVerified ? (
                <Badge className="bg-green-800 text-white">
                  <BadgeCheck /> Verified
                </Badge>
              ) : (
                <Badge variant="secondary">Unverified</Badge>
              )}
            </TableCell>
            <TableCell>
              <DateFormat date={user.createdAt} />
            </TableCell>
            <TableCell className="text-center">
              <UserActions user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
