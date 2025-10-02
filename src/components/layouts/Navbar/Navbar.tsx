'use client';
import AminulLogo from '@/components/common/AminulLogo';
import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Skills',
    href: '/#skills',
  },
  {
    title: 'Experience',
    href: '/#experience',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-slate-900 shadow-md">
      <nav className="container mx-auto flex w-full items-center justify-between px-2 py-4 md:px-0">
        {/* Left: Logo */}
        <AminulLogo />

        {/* Middle: Nav Links (Desktop) */}
        <ul className="hidden space-x-6 text-sm font-medium text-gray-300 md:flex">
          {navItems.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="hover:primary/80 transition-colors">
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#fff"
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="text-primary/80 absolute top-16 left-0 z-40 flex w-full flex-col items-center space-y-4 bg-slate-950 py-6 shadow-md md:hidden">
            {navItems.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="transition-colors hover:text-green-400"
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
