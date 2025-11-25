import envVars from '@/config/env.config';

export type Query = Record<string, any>;

export const QueryParams = (path: string, query: Query = {}) => {
  const url = new URL(`${envVars.baseUrl}/${path}`);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  });

  return url.toString();
};
