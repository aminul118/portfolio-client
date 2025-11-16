import { IUser } from '@/types/api.types';
import { createContext } from 'react';

interface AppDataContextProps {
  userData: IUser;
  userLoading: boolean;
}

export const AppDataContext = createContext<AppDataContextProps | undefined>(
  undefined,
);
