import SettingsClient from '@/components/modules/Admin/settings/SettingsClient';
import { getMe } from '@/services/user/users';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Patient Management',
  description: 'Manage your account settings and preferences',
};

const SettingsPage = async () => {
  const { data: user } = await getMe();

  return <SettingsClient user={user} />;
};

export default SettingsPage;
