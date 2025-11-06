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

export interface IExperience {
  _id?: string;
  position: string;
  companyName: string;
  timeline: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
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
