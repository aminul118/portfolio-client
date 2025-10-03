import z from 'zod';

export const contactValidation = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.email({ message: 'Give Valid Email' }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(8, {
    message: 'Message must be at least 8 characters.',
  }),
});
