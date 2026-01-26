import z from 'zod';

const addBlogSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters.' }),
  thumbnail: z.instanceof(File).optional().or(z.null()),
  photos: z.array(z.instanceof(File)).optional(),
});

export { addBlogSchema };
