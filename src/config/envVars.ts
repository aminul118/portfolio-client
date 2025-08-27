const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const envVars = {
  Analytics: {
    GA_ID: getEnv('NEXT_PUBLIC_Google_Analytics_ID'),
    GTM_ID: getEnv('NEXT_PUBLIC_Google_Tag_Manager_ID'),
  },
};

export default envVars;
