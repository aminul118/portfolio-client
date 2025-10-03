const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const GA_ID = process.env.NEXT_PUBLIC_Google_Analytics_ID;
const GTM_ID = process.env.NEXT_PUBLIC_Google_Tag_Manager_ID;

const envVars = {
  baseUrl,
  GA_ID,
  GTM_ID,
};

export default envVars;
