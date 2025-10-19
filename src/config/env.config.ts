import getEnv from '@/helpers/getEnv';

const envVars = {
  baseUrl: getEnv('NEXT_PUBLIC_BASE_URL'),
  GA_ID: getEnv('Google_Analytics_ID'),
  GTM_ID: getEnv('Google_Tag_Manager_ID'),
};

export default envVars;
