'use client';

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
import SubmitButton from '@/components/ui/submit-button';
import { Textarea } from '@/components/ui/textarea';
import { addExperience } from '@/services/experience/addExperience';
import { experienceValidationSchema } from '@/validations/experience';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

type FormValues = z.infer<typeof experienceValidationSchema>;

const AddExperienceModal = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(experienceValidationSchema),
    defaultValues: {
      position: '',
      companyName: '',
      timeline: '',
      description: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    const fd = new FormData();

    fd.append('position', values.position);
    fd.append('companyName', values.companyName);
    fd.append('timeline', values.timeline);
    fd.append('description', values.description);

    const res = await addExperience(fd);

    if (res?.success) {
      toast.success('Experience added!');
      form.reset();
    } else {
      toast.error(res?.message || 'Upload failed');
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Add Experience</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Experience</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill in your work experience details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

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
              <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
              <SubmitButton>Save</SubmitButton>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddExperienceModal;
