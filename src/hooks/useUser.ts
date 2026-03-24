import { useAuth } from '@/providers/AuthProvider';

export const useUser = () => {
  const { user, loading, refreshUser } = useAuth();
  
  return {
    user,
    isLoading: loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN',
    refreshUser,
  };
};
