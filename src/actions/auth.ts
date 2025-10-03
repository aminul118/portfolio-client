/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import envVars from '@/config/env.config';
import { apiPost } from '@/lib/apiClient';

// Register
export async function registerUser(formData: any) {
  return await apiPost({
    endpoint: '/user/register',
    tag: 'USER',
    data: formData,
  });
}

// Login
export async function loginUser(formData: any) {
  return await apiPost({
    endpoint: '/auth/login',
    tag: 'USER',
    data: formData,
  });
}

interface IPayload {
  plainPassword: string;
  token: string;
}

export async function setPasswordAction(payload: IPayload) {
  const { plainPassword, token } = payload;

  try {
    const res = await fetch(`${envVars.baseUrl}/auth/set-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(plainPassword),
      cache: 'no-store',
    });

    return await res.json();
  } catch (err) {
    console.error('setPasswordAction error:', err);
    throw err;
  }
}
