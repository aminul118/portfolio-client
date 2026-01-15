/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCookie, verifyAccessToken } from '@/lib/jwt';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './cookie-token';

export interface IAccessToken {
  accessToken: string;
  refreshToken: string;
}

const getNewAccessToken = async () => {
  try {
    const accessToken = await getCookie('accessToken');
    const refreshToken = await getCookie('refreshToken');

    //Case 1: Both tokens are missing - user is logged out
    if (!accessToken && !refreshToken) {
      return {
        tokenRefreshed: false,
      };
    }

    // Case 2 : Access Token exist- and need to verify
    if (accessToken) {
      const verifiedToken = await verifyAccessToken(accessToken);

      if (verifiedToken) {
        return {
          tokenRefreshed: false,
        };
      }
    }

    //Case 3 : refresh Token is missing- user is logged out
    if (!refreshToken) {
      return {
        tokenRefreshed: false,
      };
    }

    // API Call - serverFetch will skip getNewAccessToken for /auth/refresh-token endpoint
    const res = await serverFetch.post<ApiResponse<IAccessToken>>(
      '/auth/refresh-token',
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
    );

    console.log('access token refreshed!!');

    await removeAccessToken();
    await setAccessToken(res.data.accessToken);

    await removeRefreshToken();
    await setRefreshToken(res.data.refreshToken);

    return {
      tokenRefreshed: true,
      success: true,
      message: 'Token refreshed successfully',
    };
  } catch (error: any) {
    return {
      tokenRefreshed: false,
      success: false,
      message: error?.message || 'Something went wrong',
    };
  }
};

export { getNewAccessToken };
