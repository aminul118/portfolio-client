'use client';

import AminulLogo from '@/components/common/AminulLogo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IUser } from '@/types';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { navItems, NavMenu } from './nav-menu';
import UserAvatar from './NavUser';
import PortalButton from './PortalButton';

interface MobileProps {
  navItems: NavMenu[];
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  user?: IUser;
}

const Navbar = ({ user }: { user: IUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [active, setActive] = useState(pathname);

  // Sync active state with pathname (handles back/forward navigation)
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      if (!hidden && !menuOpen) setHidden(true); // Don't hide header if menu is open
    } else {
      if (hidden) setHidden(false);
    }
    if (latest > 50) {
      if (!scrolled) setScrolled(true);
    } else {
      if (scrolled) setScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 z-50 w-full transition-colors duration-300',
          scrolled || menuOpen
            ? 'border-b border-white/5 bg-slate-950/80 py-4 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-4',
        )}
      >
        <nav className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <AminulLogo className="ml-2 lg:ml-0" />

          {/* Desktop Navigation - Centered Floating Style */}
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

          {/* Right Side - User/Portal */}
          <div className="hidden items-center gap-4 lg:flex">
            {user ? <UserAvatar user={user} /> : <PortalButton />}
          </div>

          {/* Mobile Hamburger */}
          <div className="relative z-50 mr-2 lg:hidden">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={24}
              color="#fff" // White color for better visibility on dark bg
              rounded
              label="Toggle Menu"
            />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <Mobile navItems={navItems} setMenuOpen={setMenuOpen} user={user} />
        )}
      </AnimatePresence>
    </>
  );
};

const Mobile = ({ navItems, setMenuOpen, user }: MobileProps) => {
  const pathname = usePathname();

  // Stagger variants for the list items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-slate-950/95 lg:hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex w-full flex-col items-center gap-6 px-6"
      >
        {navItems.map(({ title, href }) => {
          const isActive = pathname === href;
          return (
            <motion.div
              key={title}
              variants={itemVariants}
              className="w-full max-w-sm"
            >
              <Link
                href={href}
                className={cn(
                  'group relative flex w-full items-center justify-center rounded-2xl py-4 text-2xl font-bold tracking-wide transition-all duration-300',
                  isActive
                    ? 'bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white',
                )}
                onClick={() => setMenuOpen(false)}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-indicator"
                    className="absolute left-4 h-2 w-2 rounded-full bg-blue-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
          className="mt-8 flex w-full max-w-sm justify-center border-t border-white/10 pt-8"
        >
          {user ? (
            <div onClick={() => setMenuOpen(false)}>
              <UserAvatar user={user} />
            </div>
          ) : (
            <Button
              asChild
              size="lg"
              className="group relative h-14 w-full overflow-hidden rounded-full bg-slate-900 font-bold text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]"
            >
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                {/* Rotating Animated Border */}
                <div className="absolute inset-0 rounded-full border border-white/10 p-px">
                  <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#06b6d4_50%,#3b82f6_100%)]" />
                </div>
                <div className="absolute inset-px rounded-full bg-slate-900" />
                <span className="relative z-10 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-lg tracking-wide text-transparent">
                  Portal / Login
                </span>
              </Link>
            </Button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
