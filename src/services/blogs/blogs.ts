'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IBlog } from '@/types';

const createBlog = async (formData: FormData) => {
  const body = new FormData();

  body.append('data', formData.get('data') as string);
  body.append('thumbnail', formData.get('thumbnail') as File);
  body.append('photos', formData.getAll('photos').toString());

  const photos = formData.getAll('photos') as File[];

  photos.forEach((file) => {
    body.append('photos', file);
  });

  const res = await serverFetch.post<ApiResponse<IBlog>>('/blogs/create', {
    body,
  });
  revalidate('blog');
  return res;
};

const updateBlog = async (formData: FormData, slug: string) => {
  const body = new FormData();

  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<IBlog>>(`/blogs/${slug}`, {
    body,
  });
  revalidate('blog');
  return res;
};

const getBlogs = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IBlog[]>>('/blogs', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['blog'],
    },
  });
};

const getSingleBlog = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IBlog>>(`/blogs/${slug}`);
};

const deleteSingleBlog = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IBlog>>(`/blogs/${slug}`);
  revalidate('blog');
  return res;
};

export { createBlog, deleteSingleBlog, getBlogs, getSingleBlog, updateBlog };
