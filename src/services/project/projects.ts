'use server';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IProject } from '@/types';
import { revalidateTag } from 'next/cache';

const getProjectById = async (id: string) => {
  return await serverFetch.get<ApiResponse<IProject>>(`/projects/${id}`, {
    cache: 'no-store',
  });
};

const deleteSingleProject = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<IProject>>(
    `/projects/${id}`,
  );
  revalidateTag('PROJECTS', 'max');
  return res;
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

export { deleteSingleProject, getProjectById, getProjects };
