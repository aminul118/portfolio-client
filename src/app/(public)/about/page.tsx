import AboutDetails from '@/components/modules/Public/About/AboutDetails';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const AboutPage = () => {
  return (
    <>
      <AboutDetails />
    </>
  );
};

export default AboutPage;

// SEO
export const metadata: Metadata = generateMetaTags({
  title: 'About Me | Md. Aminul Islam - Full Stack Developer',
  description:
    'Learn more about Md. Aminul Islam, a dedicated Full Stack Developer and SEO Specialist. Passionate about building scalable, user-centric web applications and solving complex problems.',
  keywords:
    'About Aminul Islam, Full Stack Developer Biography, Software Engineer Profile, MERN Stack Developer Info, Developer Background, Career Summary, Tech Enthusiast, Dhaka Bangladesh Developer',
  websitePath: '/about',
});
