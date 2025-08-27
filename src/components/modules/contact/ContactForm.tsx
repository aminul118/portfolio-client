'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

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
    <div className=" p-6 rounded-lg w-full mx-auto mt-6" data-aos="fade-left">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary/80">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div>
          <Input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your Name"
            className="w-full p-2 px-4 border rounded bg-slate-800 border-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
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
            className="w-full p-2 px-4 border rounded bg-slate-800 border-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <Textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your Message"
            className="w-full p-2 px-4 border rounded h-24 bg-slate-800 border-none resize-none"
          ></Textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
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
