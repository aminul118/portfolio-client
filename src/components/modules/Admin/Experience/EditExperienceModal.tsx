'use client';

import SubmitButton from '@/components/common/button/submit-button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
import useActionHandler from '@/hooks/useActionHandler';
import { updateExperience } from '@/services/experience/experience';
import { IExperience } from '@/types/api.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SquarePen, X } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/* =======================
   Validation Schema
======================= */
const formSchema = z.object({
  position: z.string().min(2, {
    message: 'Position must be at least 2 characters.',
  }),
  companyName: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  timeline: z.string().min(2, {
    message: 'Timeline must be at least 2 characters.',
  }),
  description: z.string().min(6, {
    message: 'Description must be at least 6 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  experience: IExperience;
}

/* =======================
   Component
======================= */
const EditExperienceModal = ({ open, setOpen, experience }: Props) => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: '',
      companyName: '',
      timeline: '',
      description: '',
    },
  });

  /* =======================
     Reset form on data change
  ======================= */
  useEffect(() => {
    if (experience) {
      form.reset({
        position: experience.position,
        companyName: experience.companyName,
        timeline: experience.timeline,
        description: experience.description,
      });
    }
  }, [experience, form]);

  /* =======================
     Submit Handler
  ======================= */
  const onSubmit = async (values: FormValues) => {
    await executePost({
      action: () => updateExperience(values, experience._id),
      success: {
        loadingText: 'Experience updating...',
        message: 'Experience updated successfully',
        onSuccess: () => {
          form.reset();
          setOpen(false);
        },
      },
      errorMessage: 'Failed to update experience.',
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="lg:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Experience</AlertDialogTitle>
          <AlertDialogDescription>
            Update your work experience details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-6"
          >
            {/* Position */}
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

            {/* Company Name */}
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

            {/* Timeline */}
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

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your role and responsibilities..."
                      className="min-h-52"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Footer */}
            <AlertDialogFooter className="pt-4">
              <AlertDialogCancel type="button" onClick={() => setOpen(false)}>
                <X className="mr-1 h-4 w-4" />
                Cancel
              </AlertDialogCancel>

              {/* Submit button */}
              <SubmitButton
                loading={form.formState.isSubmitting}
                loadingEffect
                loadingText="Updating Experience "
                text="Update Experience"
                icon={<SquarePen />}
              />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditExperienceModal;
