/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
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
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useForgotPasswordMutation } from '@/redux/features/auth/auth.api';
import validation from '@/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const form = useForm<
    z.infer<typeof validation.auth.forgotPasswordValidation>
  >({
    resolver: zodResolver(validation.auth.forgotPasswordValidation),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof validation.auth.forgotPasswordValidation>,
  ) => {
    console.log('Forgot password values:', values);
    // 🔑 Call forgot password API here

    try {
      const res = await forgotPassword({ email: values.email }).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message || 'Check Your email');
      }
      form.reset();
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
    }
  };

  return (
    <div data-aos="fade-right" className={cn('w-full', className)} {...props}>
      <Card className="mx-auto w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Logo />
          <CardTitle className="text-center text-xl font-semibold">
            Forgot Password?
          </CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Enter your email address to reset your password
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
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
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
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
                    <ButtonSpinner /> Send Reset Email
                  </>
                ) : (
                  <>
                    <Send /> Send Reset Email
                  </>
                )}
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

export default ForgotPasswordForm;
