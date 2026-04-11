import metaConfig from '@/config/meta.config';
import generateSitemapEntries from '@/seo/generateSitemapEntries';
import { staticRoutes } from '@/seo/staticRoutes';
import { getBlogs } from '@/services/blogs/blogs';
import { getProjects } from '@/services/project/projects';
import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const [blogsResponse, projectsResponse] = await Promise.all([
    getBlogs({ limit: '1000' }),
    getProjects({ limit: '1000' }),
  ]);

  const blogEntries: MetadataRoute.Sitemap =
    blogsResponse?.data?.map((blog) => ({
      url: `${metaConfig.baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    })) || [];

  const projectEntries: MetadataRoute.Sitemap =
    projectsResponse?.data?.map((project) => ({
      url: `${metaConfig.baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt || project.createdAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    })) || [];

  const staticEntries = generateSitemapEntries(staticRoutes);

  return [...staticEntries, ...blogEntries, ...projectEntries];
};

export default sitemap;
