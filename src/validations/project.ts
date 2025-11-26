import z from 'zod';

const projectValidationSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  slug: z.string().min(2, { message: 'Slug is required.' }),
  liveLink: z.string().url({ message: 'Enter a valid URL.' }),
  github: z.string().url().optional(),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters.' }),
  technology: z
    .array(z.string().min(1))
    .min(1, { message: 'Add at least one technology.' }),
  thumbnail: z.instanceof(File, { message: 'Thumbnail is required.' }),
  photos: z.array(z.instanceof(File)).optional(),
  isFeatured: z.boolean().optional(),
});

export { projectValidationSchema };
