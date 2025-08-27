import metaConfig from '@/config/seo.config';
import { staticRoutes } from '@/Seo/staticRoutes';
import { Routes } from '@/types';
import { MetadataRoute } from 'next';

const generateSitemapEntries = (routes: Routes[]): MetadataRoute.Sitemap => {
  return routes.map((route) => ({
    url: `${metaConfig.baseUrl}/${route?.url}`.replace(/\/+$/, ''),
    lastModified: new Date(),
    changeFrequency: route?.changeFrequency,
    priority: route?.priority,
  }));
};

const sitemap = (): MetadataRoute.Sitemap => {
  return [...generateSitemapEntries(staticRoutes)];
};

export default sitemap;
