import envVars from '@/config/env.config';

// /auth/login
const serverFetchHelper = async (
  endpoint: string,
  options: RequestInit,
): Promise<Response> => {
  const { headers, ...restOptions } = options;

  console.log({ body: options.body });

  // const accessToken = await getCookie("accessToken");

  const response = await fetch(`${envVars.baseUrl}${endpoint}`, {
    headers: {
      ...headers,
      // ...(accessToken ? { "Authorization": `Bearer ${accessToken}` } : {}),
      // ...(accessToken ? { "Authorization": accessToken } : {}),
      // Cookie: accessToken ? `accessToken=${accessToken}` : "",
    },
    ...restOptions,
  });

  return response;
};

const serverFetch = {
  get: async (endpoint: string, options: RequestInit = {}): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: 'GET' }),

  post: async (
    endpoint: string,
    options: RequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: 'POST' }),

  put: async (endpoint: string, options: RequestInit = {}): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: 'PUT' }),

  patch: async (
    endpoint: string,
    options: RequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: 'PATCH' }),

  delete: async (
    endpoint: string,
    options: RequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: 'DELETE' }),
};

/**
 *
 * serverFetch.get("/auth/me")
 * serverFetch.post("/auth/login", { body: JSON.stringify({}) })
 */

export default serverFetch;
