import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IExperience } from '@/types/api.types';

export const getExperience = async (query?: Record<string, any>) => {
  const { data } = await serverFetch.get<ApiResponse<IExperience[]>>(
    '/experience',
    {
      query,
      next: {
        tags: ['EXPERIENCE'],
      },
    },
  );

  return {
    data,
  };
};
