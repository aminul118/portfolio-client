import { MetaProps } from '@/types';
import { Metadata } from 'next';

const baseUrl = 'https://www.aminuldev.site';

const generateMetaTags = ({
  title,
  description,
  keywords,
  image = '/assets/banner/aminul.png',
  path = '',
}: MetaProps): Metadata => {
  const normalizedPath = path ? `${baseUrl}/${path}` : baseUrl;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    category: 'Portfolio',
    openGraph: {
      type: 'website',
      url: normalizedPath,
      title,
      description,
      siteName: 'Aminul Islam',
      images: [{ url: imageUrl, alt: title }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: 'summary_large_image',
      site: '@aminuldev',
      creator: '@aminuldev',
      title,
      description,
      images: [imageUrl],
    },
    applicationName: 'Aminul Islam',
    alternates: {
      canonical: normalizedPath,
      languages: {
        'en-US': `${baseUrl}/en-US`,
      },
    },
    facebook: { appId: '580317868506376' },
    manifest: '/manifest.webmanifest',
    authors: [
      {
        name: 'Aminul Islam',
      },
    ],
  };
};

export { generateMetaTags };
