import z from 'zod';

const addBlogSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  slug: z
    .string()
    .min(3, { message: 'Slug must be at least 3 characters.' })
    .regex(/^[a-z0-9-]+$/, {
      message: 'Slug can only contain lowercase letters, numbers, and hyphens.',
    }),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters.' }),
  thumbnail: z.instanceof(File).optional().or(z.null()),
});

export { addBlogSchema };
