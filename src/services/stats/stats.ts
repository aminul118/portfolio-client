'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IStats } from '@/types';

const getAdminStats = async (query?: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<IStats>>('/stats', {
    query,
  });
};

export { getAdminStats };
