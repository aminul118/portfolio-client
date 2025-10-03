// lib/auth.ts
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) return null;

  try {
    // If you want full verification (with secret)
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    // If you just want to read role/email/etc (no signature check):
    const decoded = jwt.decode(token) as DecodedToken | null;

    return decoded;
  } catch (err) {
    console.error('Failed to decode token', err);
    return null;
  }
}
