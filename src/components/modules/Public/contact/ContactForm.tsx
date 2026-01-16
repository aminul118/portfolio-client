/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import SubmitButton from '@/components/common/button/submit-button';
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
import { Textarea } from '@/components/ui/textarea';
import useActionHandler from '@/hooks/useActionHandler';
import { contactAction } from '@/services/contact/contact';
import { contactSchemaZodValidation } from '@/zod/contact';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof contactSchemaZodValidation>;

const ContactForm = () => {
  const { executePost } = useActionHandler();
  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchemaZodValidation),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    await executePost({
      action: () => contactAction(data),
      success: {
        onSuccess: () => form.reset(),
        message: 'Message send to authority successfully',
        loadingText: 'Message sending to authority..',
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ml-auto w-full max-w-lg space-y-6"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" autoComplete="name" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your full name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Your email address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Discuss about project" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Message topic
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-36"
                  placeholder="Write your message here..."
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Full message
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          loading={form.formState.isSubmitting}
          text="Send Message"
        />
      </form>
    </Form>
  );
};

export default ContactForm;
