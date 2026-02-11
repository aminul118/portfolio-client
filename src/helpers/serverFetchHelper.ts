import generateQueryUrl from '@/lib/generateQueryUrl';
import { getCookie } from '@/lib/jwt';
import { logger } from '@/lib/logger';
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
  logger.info(`SERVER FETCH: [${options.method || 'GET'}] ${url}`);
  const accessToken = await getCookie('accessToken');

  //to stop recursion loop
  if (endpoint !== '/auth/refresh-token') {
    await getNewAccessToken();
  }

  const res = await fetch(url, {
    headers: {
      Cookie: accessToken ? `accessToken=${accessToken}` : '',
      ...headers,
    },
    ...rest,
  });

  return res.json() as Promise<T>;
};

export default serverFetchHelper;
