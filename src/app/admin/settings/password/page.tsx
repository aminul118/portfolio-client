import ChangePasswordClient from '@/app/admin/settings/_components/ChangePasswordClient';
import { Metadata } from 'next';

export default function PasswordPage() {
  return <ChangePasswordClient />;
}

// SEO Metadata
export const metadata: Metadata = {
  title: 'Change Password | Md. Aminul Islam',
};
