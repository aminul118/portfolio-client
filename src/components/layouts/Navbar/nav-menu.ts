export interface NavMenu {
  title: string;
  href: string;
}

const navItems: NavMenu[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Experience', href: '/experience' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export { navItems };
