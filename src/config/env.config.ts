const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
const accessSecret = process.env.JWT_SECRET;

const envVars = {
  baseUrl,
  jwt: {
    accessSecret,
  },
};

export default envVars;
