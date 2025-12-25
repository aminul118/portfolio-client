/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import baseCookieOption from '@/config/cookie.config';
import { setCookie, verifyToken } from '@/lib/jwt';

import serverFetch from '@/lib/server-fetch';
import {
  getDefaultDashboardRoute,
  isValidRedirectForRole,
  UserRole,
} from '@/services/user/user-access';
import { ApiResponse, IUser } from '@/types';
import { redirect } from 'next/navigation';

type UserRes = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

type LoginResult =
  | { success: true; message: string }
  | { success: false; message: string; details?: unknown };

const loginUser = async (
  _currentState: unknown,
  formData: FormData,
): Promise<LoginResult> => {
  try {
    const redirectTo = formData.get('redirect'); // FormDataEntryValue | null

    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    const loginData = { email, password };

    // serverFetch should throw if request fails with non-2xx, but guard anyway
    const res = await serverFetch.post<ApiResponse<UserRes>>('/auth/login', {
      body: JSON.stringify(loginData),
    });

    // Adjust this based on your actual ApiResponse shape: some wrappers use res.data.data
    const payload = (res as any).data ?? null;
    if (!payload) {
      return {
        success: false,
        message: 'No response payload from auth server',
      };
    }

    const { accessToken, refreshToken } = payload as UserRes;

    if (!accessToken || !refreshToken) {
      return { success: false, message: 'Tokens missing from server response' };
    }

    // set cookies (make sure baseCookieOption has secure/httpOnly etc)
    await setCookie('accessToken', accessToken, { ...baseCookieOption });
    await setCookie('refreshToken', refreshToken, { ...baseCookieOption });

    // verify token safely (some implementations may throw)
    let verifiedToken: any;
    try {
      verifiedToken = verifyToken(accessToken);
    } catch (err) {
      // token verification failed
      return {
        success: false,
        message: 'Token verification failed',
        details: err,
      };
    }

    if (!verifiedToken || typeof verifiedToken === 'string') {
      return { success: false, message: 'Invalid token format' };
    }

    const userRole: UserRole = verifiedToken.role;

    if (redirectTo) {
      const requestedPath = redirectTo.toString();
      if (isValidRedirectForRole(requestedPath, userRole)) {
        redirect(requestedPath);
      } else {
        redirect(getDefaultDashboardRoute(userRole));
      }
      // redirect will terminate the response (Next will throw), so no return needed after it.
    }

    return { success: true, message: 'Login successful' };
  } catch (err) {
    // include error details to help debug, but be careful not to leak secrets to the client
    console.error('loginUser error:', err);
    return {
      success: false,
      message: 'Something went wrong during login',
      details: err,
    };
  }
};

export { loginUser };
