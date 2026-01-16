'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IProject } from '@/types';
import { revalidateTag } from 'next/cache';

const createProject = async (formData: FormData) => {
  const body = new FormData();

  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<IProject>>('/projects', {
    body,
  });
  revalidate('projects');
  return res;
};

const getProjectById = async (id: string) => {
  return await serverFetch.get<ApiResponse<IProject>>(`/projects/${id}`, {
    cache: 'no-store',
  });
};

const deleteSingleProject = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<IProject>>(
    `/projects/${id}`,
  );
  revalidateTag('projects', 'max');
  return res;
};

const getProjects = async (query?: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<IProject[]>>('/projects', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['projects'],
    },
  });
};

export { createProject, deleteSingleProject, getProjectById, getProjects };
