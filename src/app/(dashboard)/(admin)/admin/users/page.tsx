import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import UsersFilters from '@/components/modules/Admin/users/UsersFiltes';
import UsersTable from '@/components/modules/Admin/users/UsersTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getUsers } from '@/services/user/user';
import { SearchParams } from '@/types/react.types';

import { Metadata } from 'next';

const UsersPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getUsers(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Registered Users"
        filters={<UsersFilters />}
        meta={meta}
      >
        <UsersTable users={data} />
      </ClientTableWrapper>
    </>
  );
};

export default UsersPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Registered Users | SHRL',
};
// >> SEO End
