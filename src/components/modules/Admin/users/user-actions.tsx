'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUpdateRoleMutation } from '@/redux/features/user/user.api';
import { IUser } from '@/types/api.types';
import { EllipsisIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { UserDetailsModal } from './UserDetailsModal';

const UserActions = ({ user }: { user: IUser }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { _id, role } = user;

  const [updateRole] = useUpdateRoleMutation();

  const handleRoleChange = async () => {
    try {
      const newRole = role === 'USER' ? 'ADMIN' : 'USER';
      const result = await updateRole({
        id: _id,
        userInfo: { role: newRole },
      }).unwrap();
      console.log('Role updated:', result);
      toast.success(result.message);
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Edit item"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem
            onClick={() => {
              setDetailsOpen(true);
            }}
          >
            User Details
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {role === 'USER' && (
            <DropdownMenuItem onClick={handleRoleChange}>
              <span>Promote to Admin</span>
            </DropdownMenuItem>
          )}
          {role === 'ADMIN' && (
            <DropdownMenuItem onClick={handleRoleChange}>
              <span>Demote to User</span>
            </DropdownMenuItem>
          )}

          {role !== 'SUPER_ADMIN' && <DropdownMenuSeparator />}
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modals */}

      <UserDetailsModal
        open={detailsOpen}
        setOpen={setDetailsOpen}
        user={user}
      />
    </>
  );
};

export default UserActions;
