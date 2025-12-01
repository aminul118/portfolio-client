import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IProject } from '@/types';

export const getProjectById = async (id: string) => {
  const { data } = await serverFetch.get<ApiResponse<IProject>>(
    `/projects/${id}`,
    {
      cache: 'force-cache',
    },
  );
  return {
    data,
  };
};

export const getProjects = async (query?: Record<string, any>) => {
  const { data, meta } = await serverFetch.get<ApiResponse<IProject[]>>(
    '/projects',
    {
      query,
      cache: 'no-store',
      next: {
        tags: ['PROJECTS'],
      },
    },
  );

  return {
    data,
    meta,
  };
};
