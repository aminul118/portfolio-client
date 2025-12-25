'use client';

import { AppDataContext } from '@/context/auth-context';
import { useUserInfoQuery } from '@/redux/features/user/user.api';
import { Children } from '@/types';

export const AppDataProvider = ({ children }: Children) => {
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
