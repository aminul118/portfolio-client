import NewUserModal from '@/app/admin/_components/Users/NewUserModal';
import UsersTable from '@/app/admin/_components/Users/UsersTable';
import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getUsers } from '@/services/user/users';
import { SearchParams } from '@/types/react.types';

import { Metadata } from 'next';

const UsersPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getUsers(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Registered Users"
        meta={meta}
        action={<NewUserModal />}
      >
        <TableFilters />
        <UsersTable users={data} />
      </ClientTableWrapper>
    </>
  );
};

export default UsersPage;

//  SEO
export const metadata: Metadata = {
  title: 'Registered Users | SHRL',
};
