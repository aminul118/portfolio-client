'use client';

import { contact } from '@/actions/contact';
import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormValidation } from '@/validations/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  type FormType = z.infer<typeof contactFormValidation>;

  const form = useForm<FormType>({
    resolver: zodResolver(contactFormValidation),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (payload: FormType) => {
    try {
      setLoading(true);
      const res = await contact(payload);
      if (res.statusCode === 200 && res.success) {
        toast.success(res.message);
        setLoading(false);
        form.reset();
      }
    } catch {
      setLoading(false);
    }
  };

  return (
    <div
      className="mt-6 ml-auto w-full max-w-xl rounded-lg p-6"
      data-aos="fade-left"
    >
      <h2 className="text-primary/80 mb-4 text-center text-2xl font-bold">
        Contact Me
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="min-h-36"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            {loading ? (
              <>
                <ButtonSpinner /> Submit
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
