'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
          Swal.fire({
            title: 'Good job!',
            text: 'Email successfully sent!',
            icon: 'success',
          });
          reset(); // Reset the form fields after submission
        },
        () => {
          // console.log(err);
          console.log(process.env.Service_ID);
          Swal.fire({
            title: 'Oops...',
            text: 'Failed to send message, please try again.',
            icon: 'error',
          });
        },
      );
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg w-full mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div>
          <input
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
          <input
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
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your Message"
            className="w-full p-2 px-4 border rounded h-24 bg-slate-800 border-none resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
