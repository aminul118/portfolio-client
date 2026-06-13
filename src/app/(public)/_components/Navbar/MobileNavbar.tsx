'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IUser } from '@/types';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { NavMenu } from './nav-menu';
import UserAvatar from './NavUser';

interface MobileNavbarProps {
  navItems: NavMenu[];
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  user?: IUser;
}

const MobileNavbar = ({ navItems, setMenuOpen, user }: MobileNavbarProps) => {
  const pathname = usePathname();

  // Aranis-style staggering animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // Snappy, premium easing
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={() => setMenuOpen(false)}
      />

      {/* Sheet sliding from right */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 right-0 z-40 flex w-[75%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-slate-950 px-6 pt-24 pb-8 shadow-2xl lg:hidden"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex w-full flex-col gap-2"
        >
          {navItems.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <motion.div
                key={title}
                variants={itemVariants}
                className="w-full"
              >
                <Link
                  href={href}
                  className={cn(
                    'group relative flex w-full items-center justify-start rounded-xl px-5 py-3.5 text-sm font-medium tracking-wide transition-all duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white',
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute inset-0 rounded-xl bg-blue-500/20"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{title}</span>
                </Link>
              </motion.div>
            );
          })}

          {/* Mobile Portal / User Section */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex w-full justify-start border-t border-white/10 pt-6"
          >
            {user ? (
              <div onClick={() => setMenuOpen(false)}>
                <UserAvatar user={user} />
              </div>
            ) : (
              <Button
                asChild
                size="lg"
                className="group relative h-12 w-full overflow-hidden rounded-xl bg-slate-900 font-bold text-white shadow-md transition-all duration-300 hover:bg-slate-800"
              >
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <span className="relative z-10 text-base tracking-wide text-white">
                    Portal / Login
                  </span>
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
