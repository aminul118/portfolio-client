import { z } from 'zod';

// Registration
export const registrationFormValidation = z
  .object({
    firstName: z.string().min(2, { message: 'First name is required' }),
    lastName: z.string().min(2, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(10, { message: 'Phone number is too short' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// Login
export const loginFormValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export const forgotPasswordValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const otpValidation = z.object({
  otp: z
    .string()
    .min(6, 'OTP must be 6 digits')
    .max(6, 'OTP must be 6 digits')
    .regex(/^\d+$/, 'OTP must only contain numbers'),
});

export const resetPasswordValidation = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const passwordChangeValidation = z
  .object({
    oldPassword: z.string().min(6, {
      message: 'Old password must be at least 6 characters.',
    }),
    newPassword: z.string().min(6, {
      message: 'New password must be at least 6 characters.',
    }),
    confirmNewPassword: z.string().min(6, {
      message: 'Confirm password must be at least 6 characters.',
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match.",
    path: ['confirmNewPassword'],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'New password cannot be the same as old password.',
    path: ['newPassword'],
  });
