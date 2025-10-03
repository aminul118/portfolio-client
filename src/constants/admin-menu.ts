import { MenuGroup } from '@/types';
import {
  BookOpen,
  Briefcase,
  Gauge,
  Globe,
  SquareChartGantt,
  Users,
} from 'lucide-react';

export const adminSidebarMenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: Gauge,
      },
      {
        name: 'Resume',
        url: '/admin/users',
        icon: Users,
      },
      {
        name: 'Projects',
        url: '/admin/scrolling-texts',
        icon: SquareChartGantt,
      },
      {
        name: 'Blogs',
        url: '/admin/ai-trainings',
        icon: BookOpen,
      },
      {
        name: 'Experience',
        url: '/admin/ai-trainings',
        icon: Briefcase,
      },
      {
        name: 'Website',
        url: '/',
        icon: Globe,
      },
    ],
  },
];
