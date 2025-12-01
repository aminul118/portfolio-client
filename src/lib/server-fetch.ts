import buildUrl from '@/utils/buildUrl';

type FetchOptions = RequestInit & {
  query?: Record<string, any>;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = buildUrl(endpoint, query);

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
};

const serverFetch = {
  get: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'POST' }),

  put: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'PUT' }),

  patch: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'PATCH' }),

  delete: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'DELETE' }),
};

export default serverFetch;
