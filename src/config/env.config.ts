const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
const accessSecret = process.env.JWT_SECRET as string;
const nodeEnv = process.env.NODE_ENV;

const envVars = {
  nodeEnv,
  baseUrl,
  jwt: {
    accessSecret,
  },
};

export default envVars;
