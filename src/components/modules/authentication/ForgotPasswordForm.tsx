/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import SubmitButton from '@/components/common/button/submit-button';
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
import useActionHandler from '@/hooks/useActionHandler';
import { cn } from '@/lib/utils';
import { forgotPassword } from '@/services/auth/forgotPassword';

import { forgotPasswordValidation } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof forgotPasswordValidation>;

const ForgotPasswordForm = ({ className }: { className?: string }) => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordValidation),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    await executePost({
      action: () => forgotPassword(data),
      success: {
        onSuccess: () => {
          form.reset();
        },
        redirectPath: '/login',
        loadingText: 'Password recover link sending to your email....',
        message: 'Check your email to recover',
      },
      errorMessage: 'Failed to send link to your email',
    });
  };

  return (
    <div data-aos="fade-right" className={cn('w-full', className)}>
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

              <SubmitButton text="Send" loading={form.formState.isSubmitting} />
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
