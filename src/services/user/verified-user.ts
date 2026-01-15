/* eslint-disable @typescript-eslint/no-explicit-any */
import { verifyAccessToken } from '@/lib/jwt';
import type { NextRequest } from 'next/server';

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

const getVerifiedUser = async (
  req?: NextRequest,
): Promise<DecodedToken | null> => {
  try {
    let accessToken: string | null = null;

    if (req) {
      accessToken = req.cookies.get('accessToken')?.value ?? null;
    } else {
      const { cookies } = await import('next/headers');
      const cookieStore = cookies();
      accessToken = (await cookieStore).get('accessToken')?.value ?? null;
    }

    if (!accessToken) return null;

    const verifiedUser = await verifyAccessToken(accessToken);
    if (!verifiedUser) return null;

    // Optionally: validate shape more strictly
    const { userId, email, role, iat, exp } = verifiedUser as any;
    if (!userId || !email) return null;

    return { userId, email, role, iat, exp } as DecodedToken;
  } catch (err) {
    // Helpful for debugging — remove or tone down in prod
    console.error('getVerifiedUser error:', (err as Error).message ?? err);
    return null;
  }
};

export default getVerifiedUser;
