export interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  websitePath?: string;
}

export interface Routes {
  url: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}
