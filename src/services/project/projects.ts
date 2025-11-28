import { apiGet } from '@/lib/api/api';
import { IProject } from '@/types';

export const getProjects = async (query?: Record<string, any>) => {
  const res = await apiGet<IProject[]>('projects', {
    query,
    cache: 'no-store',
    next: {
      tags: ['PROJECTS'],
    },
  });

  return res;
};

export const getProjectById = async (id: string) => {
  const res = await apiGet<IProject>(`projects/${id}`, {
    cache: 'force-cache',
  });
  return res;
};
