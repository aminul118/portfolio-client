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
import GradientTitle from '@/components/ui/gradientTitle';
import Password from '@/components/ui/password';
import useActionHandler from '@/hooks/useActionHandler';
import { changePassword } from '@/services/auth/change-password';
import { passwordChangeValidation } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof passwordChangeValidation>;

const ChangePasswordForm = () => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(passwordChangeValidation),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: FormValues) => {
    const { confirmNewPassword, ...rest } = data;
    await executePost({
      action: () => changePassword(rest),
      success: {
        onSuccess: () => {
          form.reset();
        },
        message: 'Password changed successfully.',
        loadingText: 'Password changing...',
      },
      errorMessage: 'Failed to change password.',
    });
  };

  return (
    <div className="mx-auto w-full max-w-md py-12">
      <GradientTitle className="mb-8 text-left" title="Change Your Password" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Old Password */}
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Password placeholder="Enter your old password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Password placeholder="Enter your new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm New Password */}
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Password placeholder="Re-enter new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton
            loading={form.formState.isSubmitting}
            text="Password Change"
          />
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
