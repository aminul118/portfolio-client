import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import { spaceGrotesk } from '@/lib/fonts';
import AosProvider from '@/providers/AosProvider';
import { Toaster } from 'sonner';
import { Metadata } from 'next';
import { IChildren } from '@/types';
import generateMetaTags from '@/seo/generateMetaTags';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
// >> SEO End

const MainLayout = ({ children }: IChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
          <Toaster position="top-right" richColors theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default MainLayout;
