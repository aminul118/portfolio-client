'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IUser } from '@/types/api.types';
import UsersColum from './UsersColum';

const UsersTable = ({ users }: { users: IUser[] }) => {
  return (
    <TableManageMent
      columns={UsersColum}
      data={users}
      getRowKey={(u) => u._id}
    />
  );
};

export default UsersTable;
