import TopLoadingBar from '@/components/common/loader/TopLoadingBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import envVars from '@/config/env.config';
import fonts from '@/config/fonts.config';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/Seo/generateMetaTags';
import generateViewport from '@/Seo/generateViewport';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { Children } from '@/types';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import { Toaster } from 'sonner';
import { getMe } from '@/services/User/getMe';
import { AuthProvider } from '@/providers/AuthProvider';

const MainLayout = async ({ children }: Children) => {
  const user = await getMe();

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics gaId={envVars.analytics.googleAnalytics} />
        <body className={fonts.spaceGrotesk.className} suppressHydrationWarning>
          <TopLoadingBar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider initialUser={user}>
              <TooltipProvider>{children}</TooltipProvider>
            </AuthProvider>
            <Toaster position="top-right" richColors theme="dark" />
          </ThemeProvider>
        </body>
        <GoogleTagManager gtmId={envVars.analytics.googleTagManagerId} />
      </html>
    </>
  );
};


export default MainLayout;

//  SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Md. Aminul Islam | Full Stack Developer & SEO Specialist',
  description:
    'Md. Aminul Islam is a professional Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Expert in building scalable, SEO-optimized web applications and delivering high-performance solutions.',
  keywords:
    'Md. Aminul Islam, Full Stack Developer, MERN Stack Developer, Next.js Expert, React Developer, TypeScript, SEO Specialist, Software Engineer, Web Development, API Development, TabEdge, Dhaka, Bangladesh, Aminul118',
});

export const viewport: Viewport = generateViewport();
