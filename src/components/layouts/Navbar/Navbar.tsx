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
} from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, NavMenu } from './nav-menu';
import UserAvatar from './NavUser';

interface MobileProps {
  navItems: NavMenu[];
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      if (!hidden) setHidden(true);
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
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-slate-900/80 py-4 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-4',
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <AminulLogo />

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
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
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
          {user ? (
            <UserAvatar user={user} />
          ) : (
            <Button
              asChild
              size="sm"
              className="relative overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
            >
              <Link href="/login">Portal</Link>
            </Button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#fff" // White color for better visibility on dark bg
            rounded
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && <Mobile navItems={navItems} setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </motion.header>
  );
};

const Mobile = ({ navItems, setMenuOpen }: MobileProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden border-b border-white/10 bg-slate-900/95 backdrop-blur-xl lg:hidden"
    >
      <div className="container mx-auto flex flex-col items-center gap-1 p-4">
        {navItems.map(({ title, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={title}
              href={href}
              className={cn(
                'relative w-full rounded-lg py-2.5 text-center text-base font-medium transition-all',
                isActive
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white',
              )}
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          );
        })}
        {/* Mobile Portal / User Section */}
        <div className="mt-4 flex w-full justify-center border-t border-white/5 pt-4">
          {/* Note: In a real app, you might want to pass 'user' prop to Mobile component too */}
          <Button
            asChild
            size="sm"
            className="w-full max-w-xs rounded-full bg-linear-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-lg"
          >
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Portal / Login
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
