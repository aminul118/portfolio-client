import { staticRoutes } from '@/Seo/staticRoutes';
import { Routes } from '@/types';
import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.aminuldev.site';
const lastModified = new Date();

const generateSitemapEntries = (routes: Routes[]): MetadataRoute.Sitemap => {
  return routes.map((route) => ({
    url: `${baseUrl}/${route?.url}`.replace(/\/+$/, ''),
    lastModified,
    changeFrequency: route?.changeFrequency,
    priority: route?.priority,
  }));
};

const sitemap = (): MetadataRoute.Sitemap => {
  return [...generateSitemapEntries(staticRoutes)];
};

export default sitemap;
