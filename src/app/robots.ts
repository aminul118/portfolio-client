import metaConfig from '@/config/meta.config';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin', '/dashboard', '/user', '/api'],
      },
    ],
    sitemap: [`${metaConfig.baseUrl}/sitemap.xml`],
  };
};

export default robots;
