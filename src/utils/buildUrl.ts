import envVars from '@/config/env.config';

const buildUrl = (endpoint: string, query?: Record<string, any>) => {
  const url = new URL(`${envVars.baseUrl}${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
};

export default buildUrl;
