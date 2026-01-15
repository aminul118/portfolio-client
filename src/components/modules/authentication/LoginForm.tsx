'use client';

import SubmitButton from '@/components/common/button/submit-button';
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
import { loginAction } from '@/services/auth/login';
import {
  getDefaultDashboardRoute,
  UserRole,
} from '@/services/user/user-access';
import { loginFormValidation } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof loginFormValidation>;

const LoginForm = () => {
  const { redirect } = useSearchParamsValues('redirect');
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(loginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await loginAction(values);

      if (res.success) {
        router.push(
          redirect || getDefaultDashboardRoute(res.user?.role as UserRole),
        );
        toast.success(res.message || 'Login successful!');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
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
                <Password placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton loading={form.formState.isSubmitting} />
      </form>
    </Form>
  );
};

export default LoginForm;
