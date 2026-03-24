import envVars from '@/config/env.config';
import { cookies } from 'next/headers';

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) return null;

  try {
    const res = await fetch(`${envVars.apiUrl}/user/me`, {
      headers: {
        Authorization: accessToken,
      },
      next: { tags: ['user'] },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
};
