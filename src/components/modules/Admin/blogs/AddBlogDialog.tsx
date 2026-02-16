'use client';

import SubmitButton from '@/components/common/button/submit-button';
import PlateRichEditor from '@/components/rich-text/core/rich-editor';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
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
import { createBlog } from '@/services/blogs/blogs';
import { addBlogSchema } from '@/zod/blog';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, X } from 'lucide-react';
import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof addBlogSchema>;

const AddBlogDialog = () => {
  const [open, setOpen] = useState(false);
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(addBlogSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  //  Submit handler
  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // Exclude the raw Files from the JSON blob
    const { thumbnail, photos, ...rest } = data;
    formData.append('data', JSON.stringify(rest));

    if (thumbnail instanceof File) {
      formData.append('thumbnail', thumbnail);
    }

    if (photos && photos.length > 0) {
      photos.forEach((photo) => {
        formData.append('photos', photo);
      });
    }

    await executePost({
      action: () => createBlog(formData),
      success: {
        onSuccess: () => {
          form.reset();
          setOpen(false);
        },
        loadingText: 'Blog adding...',
        message: 'Blog added successfully',
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus /> Add Blog
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="lg:max-w-4xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Blog</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill in your blog details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

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
                    <FormLabel>
                      Thumbnail <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      {/* Pass the onChange handler AS A PROP */}
                      <SingleImageUploader
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
                    <FormLabel>Photos</FormLabel>
                    <FormControl>
                      {/* Pass the onChange handler AS A PROP */}
                      <MultipleImageDrop
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
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Suspense fallback={<div>Loading editor…</div>}>
                      <PlateRichEditor
                        value={field.value}
                        onChange={field.onChange}
                        height={500}
                      />
                    </Suspense>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}

            <AlertDialogFooter className="pt-4">
              <AlertDialogCancel type="button">
                <X /> Cancel
              </AlertDialogCancel>
              <SubmitButton
                loading={form.formState.isSubmitting}
                text="Blog add"
                loadingEffect
                loadingText="Blog adding"
                icon={<Plus />}
              />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddBlogDialog;
