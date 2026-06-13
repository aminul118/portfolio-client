'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavMenu } from './nav-menu';

interface DesktopNavbarProps {
  navItems: NavMenu[];
}

const DesktopNavbar = ({ navItems }: DesktopNavbarProps) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  // Sync active state with pathname (handles back/forward navigation)
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-1.5 shadow-sm backdrop-blur-sm lg:flex">
      {navItems.map(({ title, href }) => {
        const isActive = active === href;

        return (
          <Link
            key={title}
            href={href}
            onClick={() => setActive(href)}
            className={cn(
              'relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200',
              isActive ? 'text-white' : 'text-slate-200 hover:text-white',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="navbar-active-pill"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full bg-blue-600/20"
                style={{ borderRadius: 9999 }}
              />
            )}
            <span className="relative z-10">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopNavbar;
