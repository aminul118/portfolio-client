import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IProject } from '@/types';

const getProjectById = async (id: string) => {
  const { data } = await serverFetch.get<ApiResponse<IProject>>(
    `/projects/${id}`,
    {
      cache: 'no-store',
    },
  );
  return {
    data,
  };
};

const getProjects = async (query?: Record<string, any>) => {
  const { data, meta } = await serverFetch.get<ApiResponse<IProject[]>>(
    '/projects',
    {
      query,
      cache: 'force-cache',
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

export { getProjectById, getProjects };
