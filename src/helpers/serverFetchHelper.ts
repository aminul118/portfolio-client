'use server';

import generateQueryUrl from '@/lib/generateQueryUrl';
import { getCookie } from '@/lib/jwt';
import { getNewAccessToken } from '@/services/auth/getNewAccessToken';

export type FetchOptions = RequestInit & {
  query?: Record<string, string>;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = generateQueryUrl(endpoint, query);

  const makeRequest = async () => {
    const accessToken = await getCookie('accessToken');

    return fetch(url, {
      headers: {
        ...(accessToken ? { Cookie: `accessToken=${accessToken}` } : {}),
        ...headers,
      },
      ...rest,
    });
  };

  // 1) First try
  let res = await makeRequest();

  // 2) If unauthorized, refresh and retry once
  if (
    (res.status === 401 || res.status === 403) &&
    endpoint !== '/auth/refresh-token'
  ) {
    const refreshed = (await getNewAccessToken()) as any;

    // if refresh failed, return original response body (or throw)
    if (!refreshed.success) {
      return (await res.json()) as T;
    }

    // 3) Retry once with the new access token
    res = await makeRequest();
  }

  return (await res.json()) as T;
};

export default serverFetchHelper;
