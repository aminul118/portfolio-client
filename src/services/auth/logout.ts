'use server';

import envVars from '@/config/env.config';
import { cookies } from 'next/headers';

const logOut = async () => {
  const cookieStore = await cookies();

  cookieStore.delete({
    name: 'accessToken',
    path: '/',
    domain: envVars.domain,
  });

  cookieStore.delete({
    name: 'refreshToken',
    path: '/',
    domain: envVars.domain,
  });

  return { success: true };
};

export default logOut;
