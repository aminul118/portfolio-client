'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';

const forgotPassword = async (payload: Record<string, string>) => {
  return await serverFetch.post<ApiResponse<null>>('/auth/forgot-password', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export { forgotPassword };
