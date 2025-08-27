import metaConfig from '@/config/seo.config';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      disallow: '/private/',
    },
    sitemap: `${metaConfig.baseUrl}/sitemap.xml`,
  };
};

export default robots;
