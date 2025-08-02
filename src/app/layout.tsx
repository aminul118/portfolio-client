import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import { spaceGrotesk } from '@/lib/fonts';
import AosProvider from '@/providers/AosProvider';
import { Toaster } from 'sonner';
import { TChildren } from '@/types';
import { Metadata } from 'next';
import { generateMetaTags } from '@/Seo/genarateMetaTags';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, Firebase, TypeScript, MongoDB, and scalable web applications. Currently working at TabEdge, an American payment solution company, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, MongoDB Expert, Firebase Expert, Mongoose, TypeScript Developer, Full-Stack Developer, Web Development, JavaScript Developer, Frontend Engineer, Backend Developer, API Development, Cloud Computing, Payment Solutions, E-commerce Development, TabEdge, TabEdge Developer, Web Application Designer, Graphic Designer, UI/UX Developer, SEO Specialist, Scalable Web Apps, Progressive Web Apps, Startup Tech, SaaS Developer, DevOps, Software Engineer, Aminul118, Hyper118',
  image: '/assets/banner/aminul.png',
});
// >> SEO End

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={spaceGrotesk.className} suppressHydrationWarning>
          <AosProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </AosProvider>
          <Toaster position="top-center" />
        </body>
      </html>
    </>
  );
};

export default MainLayout;
