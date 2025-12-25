'use server';

import { deleteCookie } from '@/lib/jwt';
import { redirect } from 'next/navigation';

const logOut = async () => {
  await deleteCookie('accessToken');
  await deleteCookie('refreshToken');

  redirect('/');
};

export { logOut };
