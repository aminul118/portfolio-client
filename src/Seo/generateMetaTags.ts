import metaConfig from '@/config/seo.config';
import { MetaProps } from '@/types';
import { Metadata } from 'next';

const generateMetaTags = ({
  title,
  description,
  keywords,
  image = metaConfig.baseImage,
  websitePath = '',
}: MetaProps): Metadata => {
  return {
    metadataBase: new URL(metaConfig.baseUrl),
    title,
    description,
    keywords,
    category: metaConfig.website_category,
    openGraph: {
      type: 'website',
      url: `${metaConfig.baseUrl}/${websitePath}`.replace(/\/+$/, ''),
      title: title,
      description: description,
      siteName: metaConfig.site_name,
      images: [{ url: image, alt: title }],
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      site: metaConfig.twitter_site,
      creator: metaConfig.twitter_site,
      title,
      description,
      images: image,
    },
    applicationName: metaConfig.applicationName,
    alternates: {
      canonical: `${metaConfig.baseUrl}/${websitePath}`.replace(/\/+$/, ''),
      languages: {
        'en-US': `${metaConfig.baseUrl}/en-US`,
      },
    },
    facebook: {
      appId: metaConfig.facebook_app_id,
    },
    manifest: '/manifest.webmanifest',
    authors: [
      {
        name: metaConfig.authors_name,
        url: metaConfig.authorPortfolio,
      },
    ],
  };
};

export default generateMetaTags;
