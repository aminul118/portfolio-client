'use client';

import envVars from '@/config/env.config';
import { ApiResponse } from '@/types';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface SuccessConfig<T> {
  loadingText?: string;
  message?: string;
  redirectPath?: string;
  cleanUrl?: boolean;
  isRefresh?: boolean;
  onSuccess?: (data?: T) => void;
}

interface ExecuteOptions<T> {
  action: () => Promise<ApiResponse<T>>;
  success?: SuccessConfig<T>;
  errorMessage?: string;
}

const useActionHandler = () => {
  const router = useRouter();

  const executePost = async <T>({
    action,
    success,
    errorMessage = 'Something went wrong',
  }: ExecuteOptions<T>): Promise<boolean> => {
    const toastId = toast.loading(success?.loadingText || 'Processing...');

    try {
      const res = await action();

      // API response console in development
      if (envVars.nodeEnv === 'development') {
        console.log('RES==>', res);
      }

      if (res?.success) {
        toast.success(res.message || success?.message || 'Success', {
          id: toastId,
        });

        success?.onSuccess?.(res.data);

        if (success?.redirectPath) {
          success.cleanUrl
            ? router.replace(success.redirectPath)
            : router.push(success.redirectPath);
        }

        // Page refresh and re call the API
        if (success?.isRefresh) {
          router.refresh();
        }

        return true;
      }

      toast.error(res?.message || errorMessage, { id: toastId });
      return false;
    } catch (error: any) {
      // Unwanted error console in development
      if (envVars.nodeEnv === 'development') {
        console.log('RES==>', error.message);
      }
      toast.error(error?.message || errorMessage, { id: toastId });
      return false;
    }
  };

  return { executePost };
};

export default useActionHandler;
