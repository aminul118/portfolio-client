'use server';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IExperience } from '@/types/api.types';
import { revalidateTag } from 'next/cache';

const getExperience = async (query?: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IExperience[]>>('/experience', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['EXPERIENCE'],
    },
  });
};

const deleteSingleExperience = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<IExperience>>(
    `/experience/${id}`,
  );
  revalidateTag('EXPERIENCE', 'max');
  return res;
};

export { deleteSingleExperience, getExperience };
