'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';

const changePassword = async (payload: Record<string, string>) => {
  return await serverFetch.post<ApiResponse<null>>('/auth/change-password', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export { changePassword };
