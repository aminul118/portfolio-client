const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
const accessSecret = process.env.JWT_SECRET;
const NODE = process.env.NODE_ENV;

const envVars = {
  NODE,
  baseUrl,
  jwt: {
    accessSecret,
  },
};

export default envVars;
