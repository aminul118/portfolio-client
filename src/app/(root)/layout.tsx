import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { generateMetaTags } from '@/Seo/genarateMetaTags';
import { Children } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, Firebase, TypeScript, MongoDB, and scalable web applications. Currently working at TabEdge, an American payment solution company, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, MongoDB Expert, Firebase Expert, Mongoose, TypeScript Developer, Full-Stack Developer, Web Development, JavaScript Developer, Frontend Engineer, Backend Developer, API Development, Cloud Computing, Payment Solutions, E-commerce Development, TabEdge, TabEdge Developer, Web Application Designer, Graphic Designer, UI/UX Developer, SEO Specialist, Scalable Web Apps, Progressive Web Apps, Startup Tech, SaaS Developer, DevOps, Software Engineer, Aminul118, Hyper118',
  image: '/ss/hero-bg.png',
  path: 'https://www.shahmubaruk.com/ss/hero-bg.png',
});
// >> SEO End

const RootLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-336px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
