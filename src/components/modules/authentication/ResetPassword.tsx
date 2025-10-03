'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { setPasswordAction } from '@/actions/auth';
import Logo from '@/components/layouts/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Password from '@/components/ui/password';
import { cn } from '@/lib/utils';
import { resetPasswordValidation } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ResetPassword = ({ props }: { props: Record<string, any> }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof resetPasswordValidation>>({
    resolver: zodResolver(resetPasswordValidation),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof resetPasswordValidation>) => {
    console.log('Forgot password values:', values);

    const payload = {
      plainPassword: values.password,
      token: props.token,
    };

    const res = await setPasswordAction(payload);
    if (res.statusCode === 200) {
      toast.success(res.message);
      router.push('/login');
    }
  };

  return (
    <div data-aos="fade-right" className={cn('w-full')}>
      <Card className="mx-auto w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Logo />
          <CardTitle className="text-center text-xl font-semibold">
            Reset Your Password
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
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

              <Button type="submit" className="w-full">
                Set Your Password
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            Back to{' '}
            <Link href="/login">
              <Button variant="link" className="p-0 pl-1">
                Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
