import { IUser } from '@/types/apiData.types';
import { createContext } from 'react';

interface AppDataContextProps {
  userData: IUser;
  userLoading: boolean;
}

export const AppDataContext = createContext<AppDataContextProps | undefined>(
  undefined,
);
