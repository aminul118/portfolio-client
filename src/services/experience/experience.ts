'use server';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IExperience } from '@/types/api.types';

const getExperience = async (query?: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IExperience[]>>('/experience', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['EXPERIENCE'],
    },
  });
};

export { getExperience };
