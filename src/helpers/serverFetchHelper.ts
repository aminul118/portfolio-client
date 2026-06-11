'use server';

import generateQueryUrl from '@/lib/generateQueryUrl';
import { getCookie } from '@/lib/jwt';

export type FetchOptions = RequestInit & {
  query?: Record<string, string>;
  skipAuth?: boolean;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = generateQueryUrl(endpoint, query);

  const makeRequest = async () => {
    let accessToken = null;
    if (!options.skipAuth) {
      accessToken = await getCookie('accessToken');
    }

    return fetch(url, {
      headers: {
        ...(accessToken ? { Cookie: `accessToken=${accessToken}` } : {}),
        ...headers,
      },
      ...rest,
    });
  };

  // 1) Make request
  try {
    const res = await makeRequest();
    return (await res.json()) as T;
  } catch (error: any) {
    if (
      error.message?.includes('fetch failed') ||
      error.cause?.code === 'ECONNREFUSED'
    ) {
      console.warn(
        `[Build Warning] Backend offline, mock empty for ${endpoint}`,
      );
      return { data: [], meta: null } as unknown as T;
    }
    throw error;
  }
};

export default serverFetchHelper;
