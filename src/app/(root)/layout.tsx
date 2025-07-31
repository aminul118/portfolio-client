import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { generateMetaTags } from '@/Seo/genarateMetaTags';
import { Children } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Shah Mubaruk Business Consulting: Guiding Growth, Inspiring Success!',
  description:
    'Shah Mubaruk Business Consulting provides expert guidance across business strategy, financial analysis, startup support, international expansion, and more. Your partner in sustainable growth.',
  keywords:
    'Shah Mubaruk, business consulting, startup support, financial analysis, Bangladesh consulting, business strategy, US company formation, fundraising, digital marketing, operational improvement, technology consulting',
  image: '/ss/hero-bg.png',
  path: 'https://www.shahmubaruk.com/ss/hero-bg.png',
});
// >> SEO End

const RootLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-464px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
