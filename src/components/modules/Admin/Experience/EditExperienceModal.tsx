'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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
import { Textarea } from '@/components/ui/textarea';
import { IExperience } from '@/types/api.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';

// ✅ Validation schema
const formSchema = z.object({
  position: z
    .string()
    .min(2, { message: 'Position must be at least 2 characters.' }),
  companyName: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters.' }),
  timeline: z
    .string()
    .min(2, { message: 'Timeline must be at least 2 characters.' }),
  description: z
    .string()
    .min(6, { message: 'Description must be at least 6 characters.' }),
});

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  experience: IExperience;
}

const EditExperienceModal = ({ open, setOpen, experience }: Props) => {
  const { companyName, description, position, timeline } = experience;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position,
      companyName,
      timeline,
      description,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('✅ Form submitted:', values);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Experience</AlertDialogTitle>

          <AlertDialogDescription>
            Edit your work experience details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* ✅ Move form outside of AlertDialogDescription */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-6"
          >
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Google, Microsoft..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan 2020 - Dec 2023" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your role..."
                      {...field}
                      className="min-h-52"
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

export default EditExperienceModal;
