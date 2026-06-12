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
import { Textarea } from '@/components/ui/textarea';
import useActionHandler from '@/hooks/useActionHandler';
import {
  addExperience,
  updateExperience,
} from '@/services/experience/experience';
import { IExperience } from '@/types/api.types';
import { experienceValidationSchema } from '@/zod/experience';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, SquarePen, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof experienceValidationSchema>;

interface Props {
  experience?: IExperience;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const ExperienceModal = ({
  experience,
  open: externalOpen,
  setOpen: externalSetOpen,
}: Props) => {
  const { executePost } = useActionHandler();
  const [internalOpen, setInternalOpen] = useState(false);

  // Use external state if provided, otherwise fallback to internal state.
  const isControlled =
    externalOpen !== undefined && externalSetOpen !== undefined;
  const open = isControlled ? externalOpen : internalOpen;
  const setOpen = isControlled ? externalSetOpen : setInternalOpen;

  const isEdit = !!experience;

  const form = useForm<FormValues>({
    resolver: zodResolver(experienceValidationSchema),
    defaultValues: {
      position: '',
      companyName: '',
      timeline: '',
      description: '',
    },
  });

  // Reset form on data change or modal open
  useEffect(() => {
    if (open) {
      if (experience) {
        form.reset({
          position: experience.position,
          companyName: experience.companyName,
          timeline: experience.timeline,
          description: experience.description,
        });
      } else {
        form.reset({
          position: '',
          companyName: '',
          timeline: '',
          description: '',
        });
      }
    }
  }, [experience, open, form]);

  const onSubmit = async (values: FormValues) => {
    if (isEdit && experience) {
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
    } else {
      await executePost({
        action: () => addExperience(values),
        success: {
          onSuccess: () => {
            form.reset();
            setOpen(false);
          },
          loadingText: 'Experience adding...',
          message: 'Experience added successfully',
        },
        errorMessage: 'Failed to add experience.',
      });
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* Only render the trigger button if it's not controlled (i.e. Add Mode default trigger) */}
      {!isControlled && (
        <AlertDialogTrigger asChild>
          <Button>
            <Plus /> Add Experience
          </Button>
        </AlertDialogTrigger>
      )}

      <AlertDialogContent className={isEdit ? 'lg:max-w-xl' : 'lg:max-w-2xl'}>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isEdit ? 'Edit Experience' : 'Add Experience'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isEdit
              ? 'Update your work experience details below.'
              : 'Please fill in your work experience details below.'}
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
                loadingText={
                  isEdit ? 'Updating Experience...' : 'Adding Experience...'
                }
                text={isEdit ? 'Update Experience' : 'Add Experience'}
                icon={isEdit ? <SquarePen /> : <Plus />}
              />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExperienceModal;
