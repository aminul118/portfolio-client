'use client';

import ReactQuil from '@/components/common/rich-text/ReactQuil';
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  liveLink: z
    .string()
    .url({ message: 'Enter a valid URL.' })
    .min(5, { message: 'Live link is required.' }),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters.' }),
  technology: z
    .array(z.string().min(1))
    .min(1, { message: 'Add at least one technology.' }),
});

const AddProjectModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      liveLink: '',
      content: '',
      technology: ['Next Js'],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('✅ Form submitted:', values);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Add Project</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-5xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Project</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill in your Project details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Panda Mart" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="liveLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Link</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <ReactQuil
                      height={300}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter className="pt-4">
              <AlertDialogCancel type="button">
                <X className="mr-1 h-4 w-4" /> Cancel
              </AlertDialogCancel>
              <Button type="submit">
                <Check className="mr-1 h-4 w-4" /> Save
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddProjectModal;
