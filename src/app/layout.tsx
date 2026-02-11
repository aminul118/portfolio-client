import envVars from '@/config/env.config';
import fonts from '@/config/fonts.config';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { Children } from '@/types';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const MainLayout = ({ children }: Children) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics gaId={envVars.analytics.googleAnalytics} />
        <body className={fonts.spaceGrotesk.className} suppressHydrationWarning>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" richColors theme="dark" />
          </ThemeProvider>
        </body>
        <GoogleTagManager gtmId={envVars.analytics.googleTagManagerId} />
      </html>
    </>
  );
};

export default MainLayout;

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: 'Md. Aminul Islam | Full Stack Developer & SEO Specialist',
  description:
    'Md. Aminul Islam is a professional Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Expert in building scalable, SEO-optimized web applications and delivering high-performance solutions.',
  keywords:
    'Md. Aminul Islam, Full Stack Developer, MERN Stack Developer, Next.js Expert, React Developer, TypeScript, SEO Specialist, Software Engineer, Web Development, API Development, TabEdge, Dhaka, Bangladesh, Aminul118',
});
