import fonts from '@/config/fonts.config';
import AosProvider from '@/providers/AosProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { Children } from '@/types';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

const MainLayout = ({ children }: Children) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={fonts.spaceGrotesk.className} suppressHydrationWarning>
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
    </>
  );
};

export default MainLayout;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
// >> SEO End
