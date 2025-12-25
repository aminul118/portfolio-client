'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IExperience } from '@/types/api.types';
import { revalidateTag } from 'next/cache';

const addExperience = async (formdata: FormData) => {
  const payload = {
    position: String(formdata.get('position') || ''),
    companyName: String(formdata.get('companyName') || ''),
    timeline: String(formdata.get('timeline') || ''),
    description: String(formdata.get('description') || ''),
  };

  const res = await serverFetch.post<ApiResponse<IExperience>>('/experience', {
    body: JSON.stringify(payload),
  });

  revalidateTag('EXPERIENCE', 'max');

  return res;
};

const UpdateExperience = async (formdata: FormData, id: string) => {
  const payload = {
    position: String(formdata.get('position') || ''),
    companyName: String(formdata.get('companyName') || ''),
    timeline: String(formdata.get('timeline') || ''),
    description: String(formdata.get('description') || ''),
  };

  const res = await serverFetch.put<ApiResponse<IExperience>>(
    `/experience/${id}`,
    {
      body: JSON.stringify(payload),
    },
  );

  revalidateTag('EXPERIENCE', 'max');

  return res;
};

export { addExperience, UpdateExperience };
