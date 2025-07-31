import { Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const footerSections = [
  {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '/#about',
      },
      {
        label: 'Services',
        href: '/#services',
      },

      {
        label: 'Team',
        href: '/#team',
      },
      {
        label: 'Blogs',
        href: '/blogs',
      },
    ],
  },

  {
    title: 'Legal',
    links: [
      {
        label: 'Privacy Policy',
        href: '/legal/privacy-policy',
      },
      {
        label: 'Terms of Service',
        href: '/legal/terms',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2B3A] text-white">
      <Card className="border-none bg-[#1C2B3A] shadow-none">
        <CardContent className="container  mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between gap-10 text-sm">
          {/* Logo + Description */}
          <div>
            <h2 className="text-primary text-2xl font-bold mb-4">
              Shah Mubarak
            </h2>
            <p className="text-muted-foreground max-w-96">
              Revolutionizing financial technology for businesses and
              individuals worldwide.
            </p>
          </div>

          {/* Footer Sections (Mapped with URLs) */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D3E50] text-muted-foreground text-xs px-6 py-6  mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p>
          {new Date().getFullYear()} Shah Mubarak. All rights reserved.
          Investment opportunities subject to qualification and regulatory
          approval.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>651 N Broad St, Middletown, DE 19709</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@shahmubaruk.com">info@shahmubaruk.com</a>
          </div>
          <a href="https://shahmubaruk.com" className="underline">
            shahmubaruk.com
          </a>
        </div>
      </div>
    </footer>
  );
}
