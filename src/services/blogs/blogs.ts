'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IBlog } from '@/types';

const createBlog = async (formData: FormData) => {
  const body = new FormData();

  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<IBlog>>('/blog/create', {
    body,
  });
  revalidate('blog');
  return res;
};

const updateBlog = async (formData: FormData, slug: string) => {
  const body = new FormData();

  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<IBlog>>(`/blog/${slug}`, {
    body,
  });
  revalidate('blog');
  return res;
};

const getBlogs = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IBlog[]>>('/blog', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['blog'],
    },
  });
};

const getSingleBlog = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IBlog>>(`/blog/${slug}`);
};

const deleteSingleBlog = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IBlog>>(`/blog/${slug}`);
  revalidate('blog');
  return res;
};

export { createBlog, deleteSingleBlog, getBlogs, getSingleBlog, updateBlog };
