import z from 'zod';

export const aiValidation = z.object({
  question: z.string().min(5, {
    message: 'Question text must be at least 10 characters.',
  }),
  answer: z.string().min(5, {
    message: 'Answer text must be at least 10 characters.',
  }),
});
