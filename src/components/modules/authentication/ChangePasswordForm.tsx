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
import GradientTitle from '@/components/ui/gradientTitle';
import Password from '@/components/ui/password';
import { useChangePasswordMutation } from '@/redux/features/auth/auth.api';
import { passwordChangeValidation } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof passwordChangeValidation>;

const ChangePasswordForm = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(passwordChangeValidation),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (values: FormValues) => {
    const { oldPassword, newPassword } = values;
    const payload = { oldPassword, newPassword };

    try {
      const res = await changePassword(payload).unwrap();
      if (res.statusCode === 200) {
        toast.success('Password changed successfully.');
        form.reset();
        return;
      }
    } catch {
      toast.error('Failed to change password. Please try again.');
      return;
    }
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

          <Button type="submit" className="w-full">
            {isLoading ? (
              <>
                Change Password <ButtonSpinner />
              </>
            ) : (
              'Change Password'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
