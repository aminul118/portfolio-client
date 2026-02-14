'use client';

import { cn } from '@/lib/utils';
import { IUser } from '@/types/api.types';
import { KeyRound, Palette, User } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ChangePasswordClient from './ChangePasswordClient';
import ProfileClient from './ProfileClient';
import ThemeClient from './ThemeClient';

type Props = {
  user: IUser;
};

const navigationItems = [
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    description: 'Manage your personal information',
  },
  {
    id: 'password',
    label: 'Password',
    icon: KeyRound,
    description: 'Update your password',
  },
  {
    id: 'theme',
    label: 'Appearance',
    icon: Palette,
    description: 'Customize theme and appearance',
  },
];

const SettingsClient = ({ user }: Props) => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'profile';

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <Link
                  key={item.id}
                  href={`/admin/settings?tab=${item.id}`}
                  className={cn(
                    'flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'hover:bg-muted',
                  )}
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    <div
                      className={cn(
                        'text-xs',
                        isActive
                          ? 'text-primary-foreground/80'
                          : 'text-muted-foreground',
                      )}
                    >
                      {item.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {activeTab === 'profile' && <ProfileClient user={user} />}
          {activeTab === 'password' && <ChangePasswordClient />}
          {activeTab === 'theme' && <ThemeClient />}
        </main>
      </div>
    </div>
  );
};

export default SettingsClient;
