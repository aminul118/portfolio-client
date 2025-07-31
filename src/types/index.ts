import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export type Params = {
  params: Promise<{ slug: string }>;
};

export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  path?: string;
};

export type Routes = {
  url: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export type TChildren = Readonly<{
  children: React.ReactNode;
}>;

export type TParams = {
  params: Promise<{ id: string }>;
};

export interface ISeo {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  author?: string;
}

export type TAbout = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type THobby = {
  icon: React.ElementType;
  label: string;
};

export interface IProjects {
  id: number;
  project_name: string;
  portal_img?: string;
  project_img: string;
  liveLink: string;
  github?: string;
  about: string;
  features: string[];
  tech: string[];
}
