'use server';

import envVars from '@/config/env.config';
import axios from 'axios';
import { revalidateTag } from 'next/cache';

interface FormValues {
  title: string;
  slug: string;
  liveLink: string;
  github?: string;
  content: string;
  technology: string[];
  isFeatured?: boolean;
  thumbnail: File;
  photos?: File[];
}

export async function addProjectAction(values: FormValues) {
  try {
    const formData = new FormData();

    const payload = {
      title: values.title,
      slug: values.slug,
      liveLink: values.liveLink,
      github: values.github || '',
      content: values.content,
      technology: values.technology,
      isFeatured: values.isFeatured || false,
    };

    formData.append('data', JSON.stringify(payload));
    formData.append('thumbnail', values.thumbnail);

    if (values.photos) {
      values.photos.forEach((file) => formData.append('photos', file));
    }

    const res = await axios.post(`${envVars.baseUrl}/projects`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    revalidateTag('PROJECTS', 'max');

    return res.data;
  } catch (err: any) {
    console.error('Upload error:', err);
    return {
      success: false,
      message: err.response?.data?.message || 'Upload failed',
    };
  }
}
