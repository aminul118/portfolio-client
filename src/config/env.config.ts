const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
const accessSecret = process.env.JWT_SECRET as string;
const nodeEnv = process.env.NODE_ENV;
const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN as string;

const envVars = {
  nodeEnv,
  baseUrl,
  domain,
  jwt: {
    accessSecret,
  },
};

export default envVars;
