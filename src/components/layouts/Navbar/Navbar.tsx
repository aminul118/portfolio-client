'use client';

import AminulLogo from '@/components/common/AminulLogo';
import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
import { navItems, NavMenu } from './nav-menu';

interface MobileProps {
  navItems: NavMenu[];
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-slate-900 shadow-md">
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-4">
        {/* Logo */}
        <AminulLogo />

        {/* Desktop Nav */}
        <ul className="hidden space-x-6 text-sm font-medium text-gray-300 md:flex">
          {navItems.map(({ title, href }) => (
            <li key={title}>
              <Link
                href={href}
                className="transition-colors hover:text-green-400"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#fff"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && <Mobile navItems={navItems} setMenuOpen={setMenuOpen} />}
    </header>
  );
};

const Mobile = ({ navItems, setMenuOpen }: MobileProps) => {
  return (
    <div className="absolute top-16 left-0 z-40 flex w-full flex-col items-center space-y-4 bg-slate-950 py-6 shadow-md md:hidden">
      {navItems.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className="text-gray-300 transition-colors hover:text-green-400"
          onClick={() => setMenuOpen(false)}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
