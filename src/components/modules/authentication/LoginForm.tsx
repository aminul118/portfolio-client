'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
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
import Password from '@/components/ui/password';
import useSearchParamsValues from '@/hooks/useSearchParamsValues';
import { useLoginMutation } from '@/redux/features/auth/auth.api';
import { Role } from '@/types';
import { loginValidationZodSchema } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof loginValidationZodSchema>;

const LoginForm = ({ className }: { className?: string }) => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const { callbackUrl } = useSearchParamsValues('callbackUrl');

  const form = useForm<FormValues>({
    resolver: zodResolver(loginValidationZodSchema),
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
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
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
                  <Password type="password" placeholder="********" {...field} />
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
      </Form>
    </div>
  );
};

export default LoginForm;
