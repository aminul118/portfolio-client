/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import Logo from '@/components/layouts/Logo';
import Password from '@/components/ui/password';
import images from '@/config/images';
import { cn } from '@/lib/utils';
import { useRegisterMutation } from '@/redux/features/auth/auth.api';
import { registrationFormValidation } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const RegisterForm = ({ className }: { className?: string }) => {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();
  const form = useForm<z.infer<typeof registrationFormValidation>>({
    resolver: zodResolver(registrationFormValidation),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof registrationFormValidation>) => {
    const { firstName, lastName, email, phone, password } = data;
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    try {
      const res = await register(payload).unwrap();
      console.log('RES==>', res);
      if (res.success) {
        toast.success(res.message);
      }

      if (res.statusCode === 201) {
        router.push(`/verify?email=${email}`);
      }
    } catch (error: any) {
      if (error?.status === 400) {
        toast.error(error.data?.message || 'User already exists');
      } else {
        toast.error('Failed to create user');
      }
    }
  };

  return (
    <div
      className={cn('flex flex-col gap-6 rounded-lg shadow-lg', className)}
      data-aos="fade-left"
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Lottie */}
          {/* Image Section */}
          <div className="bg-muted relative hidden md:block">
            <Image
              className="absolute inset-0 h-full w-full object-cover brightness-[0.5] grayscale dark:brightness-[0.2]"
              src={images.auth}
              height={400}
              width={400}
              alt="Login Image"
            />
          </div>

          {/* Right side form */}
          <div className="p-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <Link href={'/'}>
                <Logo />
              </Link>
              <p className="text-muted-foreground text-balance">
                Register to Smart Healthcare & Research Ltd.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-12 space-y-6"
              >
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                          placeholder="john.doe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Password
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Password
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !form.formState.isValid}
                >
                  {isLoading ? (
                    <>
                      Register <ButtonSpinner />
                    </>
                  ) : (
                    ' Register'
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center text-sm">
              You already have an account?
              <Link href="/login">
                <Button variant="link" className="p-0 pl-1">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
