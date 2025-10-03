'use server';

import { apiPost } from '@/lib/apiClient';
import { contactValidation } from '@/validations/contactValidation';
import z from 'zod';

export async function contact(formData: z.infer<typeof contactValidation>) {
  return await apiPost({
    endpoint: '/contact',
    tag: 'contact',
    data: formData,
  });
}
