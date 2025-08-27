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
    <header className="bg-slate-900 fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="w-full px-2 md:px-0 py-4 container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <AminulLogo />

        {/* Middle: Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
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
          <div className="absolute top-16 left-0 w-full bg-slate-950 text-primary/80 flex flex-col items-center space-y-4 py-6 md:hidden z-40 shadow-md">
            {navItems.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="hover:text-green-400 transition-colors"
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
