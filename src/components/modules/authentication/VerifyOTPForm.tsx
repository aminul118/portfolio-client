'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from '@/redux/features/auth/auth.api';
import validation from '@/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const VerifyOTPForm = () => {
  const [counter, setCounter] = useState(60); // 1 min timer
  const [sendOTP] = useSendOtpMutation();
  const [verifyOTP, { isLoading }] = useVerifyOtpMutation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');

  const form = useForm<z.infer<typeof validation.auth.otpValidation>>({
    resolver: zodResolver(validation.auth.otpValidation),
    defaultValues: {
      otp: '',
    },
  });

  // Countdown effect
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const onSubmit = async (
    value: z.infer<typeof validation.auth.otpValidation>,
  ) => {
    try {
      if (!email) {
        toast.error('Email Not Found..');
      }
      const res = await verifyOTP({ email, otp: value.otp }).unwrap();
      if (res.success) {
        toast.success(`OTP verified successfully!`);
        router.push('/user');
      }
    } catch (err: any) {
      toast.error(err?.data?.message || 'Invalid OTP');
    }
  };

  const handleResend = async () => {
    try {
      const res = await sendOTP({ email }).unwrap();
      if (res.success) {
        toast.success(`OTP Send to ${email}`);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || 'Error sending OTP');
      setCounter(60);
    }
  };

  return (
    <div data-aos="fade-left" className="flex items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Link href={'/'}>
            <Logo />
          </Link>
          <CardTitle className="text-center text-xl font-semibold">
            Verify Your Email
          </CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Enter the 6-digit code we sent to your email
          </p>
        </CardHeader>

        <CardContent className="space-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex max-w-sm flex-col items-center justify-center gap-6"
            >
              {/* OTP Field */}
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center gap-2">
                    <FormLabel className="sr-only">OTP</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        {...field}
                        className="gap-2 text-lg"
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="mt-4" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-64" disabled={isLoading}>
                {isLoading ? (
                  <>
                    Verify OTP <ButtonSpinner />
                  </>
                ) : (
                  'Verify OTP'
                )}
              </Button>
            </form>
          </Form>

          {/* Resend OTP Section */}
          <div className="text-center text-sm">
            {counter > 0 ? (
              <Button variant="link" disabled className="text-muted-foreground">
                {` Resend available in ${counter}`}
              </Button>
            ) : (
              <Button variant="link" onClick={handleResend}>
                Resend OTP
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTPForm;
