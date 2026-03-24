import { MenuGroup } from '@/types';
import {
  BookOpen,
  Briefcase,
  FileCheck,
  Globe,
  LayoutDashboard,
  SquareChartGantt,
  Users,
} from 'lucide-react';

const adminSidebarMenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      { name: 'Dashboard', url: '/admin', icon: LayoutDashboard },
      { name: 'Projects', url: '/admin/projects', icon: SquareChartGantt },
      { name: 'Blogs', url: '/admin/blogs', icon: BookOpen },
      { name: 'Experience', url: '/admin/experience', icon: Briefcase },
      { name: 'Invoice', url: '/admin/invoice', icon: FileCheck },
      { name: 'Users', url: '/admin/users', icon: Users },
      { name: 'Website', url: '/', icon: Globe },
    ],
  },
];

export { adminSidebarMenu };
