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

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: string;
  picture?: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  auths: Auth[];
  createdAt: string;
  updatedAt: string;
}

export interface Auth {
  provider: string;
  providerId: string;
}

export interface IBlog {
  _id?: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
}

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  liveLink: string;
  content: string;
  technology: string[];
  thumbnail: string;
  photos?: string[];
  createdAt: Date;
  updatedAt: Date;
  isFeatured: boolean;
}

export interface IExperience {
  _id: string;
  position: string;
  companyName: string;
  timeline: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
