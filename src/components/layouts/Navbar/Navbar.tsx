'use client';

import AminulLogo from '@/components/common/AminulLogo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // 👈 assuming your cn() is here
import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems, NavMenu } from './nav-menu';

interface MobileProps {
  navItems: NavMenu[];
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-slate-900 shadow-md">
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-4">
        {/* Logo */}
        <AminulLogo />

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map(({ title, href }) => {
            const isActive = pathname === href;

            return (
              <li key={title} className="group relative">
                <Link
                  href={href}
                  className={cn(
                    'transition-colors duration-300',
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-300',
                  )}
                >
                  {title}
                </Link>

                {/* Animated underline */}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-blue-400 transition-transform duration-300 group-hover:scale-x-100',
                    isActive && 'scale-x-100',
                  )}
                />
              </li>
            );
          })}
          <li>
            <Button asChild>
              <Link href={'/login'}>Portal</Link>
            </Button>
          </li>
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
  const pathname = usePathname();

  return (
    <div className="absolute top-16 left-0 z-40 flex w-full flex-col items-center space-y-4 bg-slate-950 py-6 shadow-md md:hidden">
      {navItems.map(({ title, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={title}
            href={href}
            className={cn(
              'text-lg transition-colors duration-300',
              isActive
                ? 'text-blue-400 underline underline-offset-4'
                : 'text-gray-300 hover:text-blue-300',
            )}
            onClick={() => setMenuOpen(false)}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
