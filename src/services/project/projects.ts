'use server';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IProject } from '@/types';

const getProjectById = async (id: string) => {
  return await serverFetch.get<ApiResponse<IProject>>(`/projects/${id}`, {
    cache: 'no-store',
  });
};

const getProjects = async (query?: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<IProject[]>>('/projects', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['PROJECTS'],
    },
  });
};

export { getProjectById, getProjects };
