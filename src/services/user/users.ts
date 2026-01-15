'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';

const getMe = async () => {
  return await serverFetch.get<ApiResponse<IUser>>('/user/me', {
    cache: 'force-cache',
    next: {
      tags: ['ME'],
    },
  });
};

const getUsers = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IUser[]>>('/user/all-users', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['users'],
    },
  });
};

export { getMe, getUsers };
