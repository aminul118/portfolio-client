export interface ITeamMember {
  _id: string;
  name: string;
  designation: string[];
  shrlDesignation: string;
  email: string;
  phone: string;
  photo: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEvent {
  _id: string;
  title: string;
  photos: string[];
  content: string;
  slug: string;
  createdAt: string;
}

export interface IScrollingText {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUpcomingEvent {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  photo: string;
  details: string;
}

export interface ITeamJoinRequest {
  name: string;
  email: string;
  phone: string;
  gender: string;
  occupation: string;
  organization: string;
  field_of_interest: string;
  Why_join_team: string;
  time_commitment: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface IAiTraining {
  _id: string;
  question: string;
  answer: string;
  createdAt: string;
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

export interface IUpcomingEvent {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  photo: string;
  details: string;
  createdAt: string;
  updatedAt: string;
}
