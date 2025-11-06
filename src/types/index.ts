import React from 'react';
export type { MenuGroup } from './admin-menu';
export type { MetaConfig, MetaProps, Routes } from './meta.types';
export type {
  DivProps,
  ElementProps,
  IChildren,
  IGlobalError,
  IParams,
  ISearchParams,
  SectionProps,
} from './react.types';

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
  meta?: IMeta;
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

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPER_ADMIN = 'SUPER_ADMIN',
}
