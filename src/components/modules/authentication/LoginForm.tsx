'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import Logo from '@/components/layouts/Logo';
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
import Password from '@/components/ui/password';
import images from '@/config/images';
import { cn } from '@/lib/utils';
import { useLoginMutation } from '@/redux/features/auth/auth.api';
import { Role } from '@/types';
import { loginFormValidation } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof loginFormValidation>;

const LoginForm = ({ className }: { className?: string }) => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const searchParams = useSearchParams(); // ✅ read query params
  const callbackUrl = searchParams.get('callbackUrl');

  const form = useForm<FormValues>({
    resolver: zodResolver(loginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await login(data).unwrap();
      toast.success(res.message || 'User login successfully');
      if (res?.data?.user?.role === Role.ADMIN) {
        router.push(callbackUrl || '/admin');
      } else if (res?.data?.user?.role === Role.USER) {
        router.push(callbackUrl || '/dashboard');
      } else {
        router.push('/');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('ERR=>', error);
      if (error.status === 401) {
        toast.error('Email or password Incorrect');
      }
      if (error.status === 400) {
        toast.error('Email or password Incorrect');
      }
      if (error.status === 900) {
        router.push(`/verify?email=${data.email}`);
        toast.error('You are not verified User. ');
      }
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg shadow-lg',
        className,
      )}
      data-aos="fade-right"
    >
      <Card className="w-full max-w-5xl overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Form Section */}
          <div className="flex flex-col justify-center gap-6 p-6 md:p-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="grid place-items-center">
                  <Link href={'/'}>
                    <Logo />
                  </Link>
                  <p className="text-muted-foreground mt-4 text-center">
                    Login to your Smart Healthcare & Research Ltd. portal
                  </p>
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
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
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      Login <ButtonSpinner />
                    </>
                  ) : (
                    <>Login</>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-center text-sm">
                {"Don't have an account?"}
                <Link href="/register">
                  <Button variant="link" className="p-0 pl-1">
                    Sign up
                  </Button>
                </Link>
              </div>
            </Form>
          </div>

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
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
