import envVars from '@/config/env.config';
import { ApiResponse } from '@/types';

interface GetOptions {
  query?: Record<string, any>;
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export const apiGet = async <T>(
  url: string,
  options: GetOptions = {},
): Promise<ApiResponse<T>> => {
  const baseUrl = envVars.baseUrl;

  // Build URL
  const fullUrl = new URL(`${baseUrl}/${url}`);

  if (options.query) {
    Object.entries(options.query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        fullUrl.searchParams.append(key, String(value));
      }
    });
  }

  const res = await fetch(fullUrl.toString(), {
    method: 'GET',
    cache: options.cache || 'force-cache',
    next: {
      revalidate: options.next?.revalidate,
      tags: options.next?.tags,
    },
  });

  if (res.status === 404) {
    throw new Error('NOT_FOUND');
  }

  if (!res.ok) {
    throw new Error(`API Error: ${res.statusText}`);
  }

  return res.json();
};
