/* eslint-disable @typescript-eslint/no-explicit-any */
import envVars from '@/config/env.config';
import axios from 'axios';
import { revalidateTag } from 'next/cache';
export interface IApiParams {
  [key: string]: string | number | undefined;
}

export interface IFetchOptions {
  cache?: RequestCache; // 'force-cache' | 'no-store' | 'reload' | 'only-if-cached'
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export const apiGet = async <T>(
  endpoint: string,
  params: IApiParams = {},
  fetchOptions: IFetchOptions = {
    cache: 'force-cache',
  },
): Promise<T> => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const convertQuery = query.toString();

  const url = `${envVars.baseUrl}${endpoint}${
    convertQuery ? `?${convertQuery}` : ''
  }`;

  const res = await fetch(url, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json() as Promise<T>;
};

export const apiDelete = async <T>({
  endpoint,
  tag,
}: {
  endpoint: string;
  tag?: string;
}): Promise<T> => {
  try {
    const res = await axios.delete<T>(`${envVars.baseUrl}${endpoint}`);

    // revalidate cache for fresh UI
    if (tag) {
      (revalidateTag as any)(tag);
    }

    return res.data;
  } catch (error: any) {
    throw new Error(
      `DELETE /${endpoint} failed ==> ${error.response?.status || error.message}`,
    );
  }
};

interface ApiPostParams<T> {
  endpoint: string;
  data: T;
  tag?: string;
}

export const apiPost = async <T, R>({
  endpoint,
  data,
  tag,
}: ApiPostParams<T>): Promise<R> => {
  try {
    const res = await axios.post<R>(`${envVars.baseUrl}${endpoint}`, data);

    //  Revalidate cache if tag is provided
    if (tag) {
      (revalidateTag as any)(tag);
    }

    return res.data;
  } catch (error: any) {
    throw new Error(
      `POST ${endpoint} failed ==> ${error.response?.status || error.message}`,
    );
  }
};
