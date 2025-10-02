'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        'RvKwnqQ10ee8aGF6d', // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          // console.log(res);
          toast.success('Email successfully sent!');
          reset();
        },
        () => {
          // console.log(err);
          console.log(process.env.Service_ID);
          toast.error('Failed to send message, please try again');
        },
      );
  };

  return (
    <div className="mx-auto mt-6 w-full rounded-lg p-6" data-aos="fade-left">
      <h2 className="text-primary/80 mb-4 text-center text-2xl font-bold">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-4"
      >
        {/* Name Field */}
        <div>
          <Input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your Name"
            className="w-full rounded border border-none bg-slate-800 p-2 px-4"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            placeholder="Your Email"
            className="w-full rounded border border-none bg-slate-800 p-2 px-4"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <Textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your Message"
            className="h-24 w-full resize-none rounded border border-none bg-slate-800 p-2 px-4"
          ></Textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
