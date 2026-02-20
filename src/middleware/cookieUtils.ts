import { NextResponse } from 'next/server';
import baseCookieOption from '../config/cookie.config';
import envVars from '../config/env.config';

/**
 * Attaches refreshed tokens to a NextResponse.
 * Used to maintain session after an automatic token refresh in middleware.
 */
export const attachTokensToResponse = (
  res: NextResponse,
  accessToken: string | null,
  refreshToken: string | null,
) => {
  if (accessToken) {
    res.cookies.set('accessToken', accessToken, {
      ...baseCookieOption,
      maxAge: Number(envVars.jwt.accessTokenMaxAge) || 60 * 60,
    });
    if (refreshToken) {
      res.cookies.set('refreshToken', refreshToken, {
        ...baseCookieOption,
        maxAge: Number(envVars.jwt.refreshTokenMaxAge) || 60 * 60 * 24 * 7,
      });
    }
  }
  return res;
};
