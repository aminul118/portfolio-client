const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const googleAnalytics = process.env.Google_Analytics_ID;

const envVars = {
  baseUrl,
  GA_ID: googleAnalytics,
};

export default envVars;
