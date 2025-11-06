'use client';

import { AppDataContext } from '@/context/auth-context';
import { useUserInfoQuery } from '@/redux/features/user/user.api';
import { IChildren } from '@/types';

export const AppDataProvider = ({ children }: IChildren) => {
  const { data, isLoading: userLoading } = useUserInfoQuery(undefined);
  const userData = data?.data;

  const value = {
    userData,
    userLoading,
  };
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
