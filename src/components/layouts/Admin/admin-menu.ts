import { MenuGroup } from '@/types';
import {
  BookOpen,
  Briefcase,
  FileCheck,
  Gauge,
  SquareChartGantt,
  Users,
} from 'lucide-react';

const adminSidebarMenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      { name: 'Dashboard', url: '/admin', icon: Gauge },
      { name: 'Projects', url: '/admin/projects', icon: SquareChartGantt },
      { name: 'Blogs', url: '/admin/blogs', icon: BookOpen },
      { name: 'Experience', url: '/admin/experience', icon: Briefcase },
      { name: 'Users', url: '/admin/users', icon: Users },
      { name: 'Invoice', url: '/admin/invoice', icon: FileCheck },
    ],
  },
];

export { adminSidebarMenu };
