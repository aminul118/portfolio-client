import { apiGet } from '@/lib/api/api';
import { IExperience } from '@/types/api.types';

export const getExperience = async (query?: Record<string, any>) => {
  const res = await apiGet<IExperience[]>('experience', {
    query,
    next: {
      tags: ['EXPERIENCE'],
    },
  });

  return res;
};
