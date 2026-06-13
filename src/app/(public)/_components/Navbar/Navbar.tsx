'use client';

import AminulLogo from '@/components/common/AminulLogo';
import { cn } from '@/lib/utils';
import { IUser } from '@/types';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { navItems } from './nav-menu';
import UserAvatar from './NavUser';
import PortalButton from './PortalButton';

const Navbar = ({ user }: { user: IUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

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

          {/* Desktop Navigation */}
          <DesktopNavbar navItems={navItems} />

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
          <MobileNavbar
            navItems={navItems}
            setMenuOpen={setMenuOpen}
            user={user}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
