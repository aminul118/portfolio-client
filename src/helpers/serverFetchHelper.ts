import generateQueryUrl from '@/lib/generateQueryUrl';
import { getCookie } from '@/lib/jwt';

export type FetchOptions = RequestInit & {
  query?: Record<string, string>;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = generateQueryUrl(endpoint, query);
  const accessToken = await getCookie('accessToken');

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      Cookie: accessToken ? `accessToken=${accessToken}` : '',
    },
    ...rest,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
};

export default serverFetchHelper;
