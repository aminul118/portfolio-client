import { staticRoutes } from '@/Seo/staticRoutes';
import { Routes } from '@/types';

const baseUrl = 'https://www.aminuldev.site';
const lastModified = new Date();

const generateSitemapEntries = (routes: Routes[]) => {
  return routes.map((route) => ({
    url: `${baseUrl}/${route?.url}`.replace(/\/+$/, ''),
    lastModified,
    changeFrequency: route?.changeFrequency,
    priority: route?.priority,
  }));
};

const sitemap = () => {
  return [...generateSitemapEntries(staticRoutes)];
};

export default sitemap;
