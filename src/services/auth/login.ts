/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import envVars from '@/config/env.config';
import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { ILogin } from '@/types/api.types';
import { setAccessToken, setRefreshToken } from './cookie-token';

const loginAction = async (payload: Record<string, string>) => {
  try {
    const res = await serverFetch.post<ApiResponse<ILogin>>('/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res?.data) {
      return { success: false, error: 'Invalid server response' };
    }

    const { accessToken, refreshToken, user } = res.data;

    await setAccessToken(accessToken);
    await setRefreshToken(refreshToken);

    revalidate('ME');

    return {
      success: true,
      user,
      message: 'Login successful',
    };
  } catch (error: any) {
    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
      throw error;
    }

    return {
      success: false,
      user: null,
      message:
        envVars.nodeEnv === 'development'
          ? error.message
          : 'Login Failed. You might have entered incorrect email or password.',
    };
  }
};

export { loginAction };
