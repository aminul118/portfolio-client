'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const DashboardThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <DropdownMenuItem onClick={toggleTheme}>
      {theme === 'dark' ? (
        <>
          <Sun className="h-5 w-5" />
          Light Theme
        </>
      ) : (
        <>
          <Moon className="h-5 w-5" />
          Dark Theme
        </>
      )}
    </DropdownMenuItem>
  );
};

export default DashboardThemeToggle;
