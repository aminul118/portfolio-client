import React from 'react';
export type { MetaProps, Routes } from './meta.types';
export type { IChildren, IGlobalError, IParams } from './react.types';

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
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
