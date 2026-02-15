'use client';

import SubmitButton from '@/components/common/button/submit-button';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MultipleImageDrop from '@/components/ui/multiple-image-drop';
import SingleImageUploader from '@/components/ui/single-image-uploader';
import useActionHandler from '@/hooks/useActionHandler';
import { updateBlog } from '@/services/blogs/blogs';
import { IBlog, IModal } from '@/types';
import { updateBlogSchema } from '@/zod/blog';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { Suspense, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof updateBlogSchema>;

interface Props extends IModal {
  blog: IBlog;
}

const UpdateBlogModal = ({ blog, open, setOpen }: Props) => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(updateBlogSchema),
    defaultValues: {
      title: blog.title || '',
      content: blog.content || '',
      thumbnail: blog.thumbnail || null,
      photos: blog.photos || [],
    },
  });

  useEffect(() => {
    if (blog) {
      form.reset({
        title: blog.title,
        content: blog.content,
        thumbnail: blog.thumbnail,
        photos: blog.photos,
      });
    }
  }, [blog, form]);

  //  Submit handler
  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // 1. Separate new files and existing URLs
    const { thumbnail, photos, ...rest } = data;

    const newPhotos = photos?.filter((p): p is File => p instanceof File) || [];
    const remainingPhotos =
      photos?.filter((p): p is string => typeof p === 'string') || [];

    // 2. Add standard data with remaining photo URLs
    formData.append(
      'data',
      JSON.stringify({
        ...rest,
        thumbnail: thumbnail instanceof File ? undefined : thumbnail,
        photos: remainingPhotos,
      }),
    );

    // 3. Append new thumbnail if selected
    if (thumbnail instanceof File) {
      formData.append('thumbnail', thumbnail);
    }

    // 4. Append all new photo files
    if (newPhotos.length > 0) {
      newPhotos.forEach((photo) => {
        formData.append('photos', photo);
      });
    }

    await executePost({
      action: () => updateBlog(formData, blog._id),
      success: {
        onSuccess: () => {
          setOpen(false);
        },
        loadingText: 'Blog updating...',
        message: 'Blog updated successfully',
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="scrollbar-thin max-h-[90vh] overflow-y-auto lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormDescription>
                    The main heading for your blog post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-6">
              {/* 🔹 Thumbnail Upload */}
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail (Optional)</FormLabel>
                    <FormControl>
                      <SingleImageUploader
                        defaultValue={blog.thumbnail}
                        onChange={(file) => field.onChange(file)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* 🔹 Photos Upload */}
              <FormField
                control={form.control}
                name="photos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photos (Optional)</FormLabel>
                    <FormControl>
                      <MultipleImageDrop
                        defaultValues={blog.photos}
                        onChange={(file) => field.onChange(file)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 🔹 Content/Bio */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Writer</FormLabel>
                  <FormControl>
                    <Suspense fallback={<div>Loading editor…</div>}>
                      <ReactQuil
                        value={field.value}
                        onChange={field.onChange}
                        height={400}
                      />
                    </Suspense>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-4">
              <SubmitButton
                loading={form.formState.isSubmitting}
                text="Update Blog"
                loadingEffect
                loadingText="Updating..."
                icon={<Save className="h-4 w-4" />}
              />
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBlogModal;
