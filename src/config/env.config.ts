const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
const nodeEnv = process.env.NODE_ENV;
const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN as string;
const accessSecret = process.env.JWT_ACCESS_SECRET as string;
const refreshSecret = process.env.JWT_REFRESH_SECRET as string;
const accessTokenMaxAge = parseInt(process.env.JWT_ACCESS_EXPIRES as string);
const refreshTokenMaxAge = parseInt(process.env.JWT_REFRESH_EXPIRES as string);

const envVars = {
  nodeEnv,
  baseUrl,
  domain,
  jwt: {
    accessSecret,
    refreshSecret,
    accessTokenMaxAge,
    refreshTokenMaxAge,
  },
};

export default envVars;
