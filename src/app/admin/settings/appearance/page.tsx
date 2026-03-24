import ThemeClient from '@/components/modules/Admin/Settings/ThemeClient';
import { Metadata } from 'next';

const AppearanceSettingsPage = () => {
  return <ThemeClient />;
};

export default AppearanceSettingsPage;

// SEO Metadata
export const metadata: Metadata = {
  title: 'Appearance Settings | Md. Aminul Islam',
};
