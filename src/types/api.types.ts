export interface ILogin {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

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

export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface IInvoiceItem {
  itemName: string;
  quantity: string;
  price: number;
  total: number;
}

interface IPayableTo {
  name: string;
  address?: string;
  phone?: string;
}

export interface IInvoice {
  _id?: string;
  invoiceNo?: string;
  invoiceDate?: string;
  payableTo: IPayableTo;
  items: IInvoiceItem[];
  subTotal: number;
  discount: number;
  tax: number;
  grandTotal: number;
  pdfUrl?: string;
  note?: string;
  createdAt?: string;
  updatedAt?: string;
}
