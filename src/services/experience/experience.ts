import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IExperience } from '@/types/api.types';

const getExperience = async (query?: Record<string, string>) => {
  const { data, meta } = await serverFetch.get<ApiResponse<IExperience[]>>(
    '/experience',
    {
      query,
      cache: 'force-cache',
      next: {
        tags: ['EXPERIENCE'],
      },
    },
  );

  return {
    data,
    meta,
  };
};

export { getExperience };
