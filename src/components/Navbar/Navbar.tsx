'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AminulLogo from '../common/AminulLogo';

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
    href: '/projects',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#050B16]">
      <nav className="w-full px-2 md:px-0  py-4 container mx-auto text-white flex items-center justify-between sticky top-0 z-50">
        {/* Left: Logo */}
        <AminulLogo />

        {/* Middle: Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          {navItems.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="hover:text-white transition-colors">
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#050B16] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-40 shadow-md">
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
