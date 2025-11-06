/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

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
import { Textarea } from '@/components/ui/textarea';
import { useCreateContactMutation } from '@/redux/features/contact/contact.api';
import { contactFormValidation } from '@/validations/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof contactFormValidation>;

const ContactForm = () => {
  const [contact] = useCreateContactMutation();
  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormValidation),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const toastId = toast.loading('Message Sending');
    try {
      const res = await contact(data).unwrap();

      if (res.statusCode === 200) {
        toast.success(res.message || 'Message sent', { id: toastId });
      }
      form.reset();
    } catch (error: any) {
      toast.error('Message not sent!');
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="ml-auto w-full max-w-md space-y-6 xl:max-w-lg"
        >
          {/* Top row: Name + Email */}
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Your full name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

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
          </div>

          {/* Subject (full width) */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Joining Your Team" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  The topic of your message
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message (full width) */}
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
                  Your full message
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
