import About from '@/components/modules/Public/About/About';
import Contact from '@/components/modules/Public/contact/Contact';
import Education from '@/components/modules/Public/Home/Education';
import Experience from '@/components/modules/Public/Home/Experience';
import FeaturedProjects from '@/components/modules/Public/Home/FeaturedProjects';
import HeroBanner from '@/components/modules/Public/Home/HeroBanner';
import OtherSkills from '@/components/modules/Public/Skills/OtherSkills';
import Skills from '@/components/modules/Public/Skills/Skills';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const HomePage = async () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills />
      <OtherSkills />
      <Education />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default HomePage;

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: 'Md. Aminul Islam | Full Stack Developer & SEO Specialist',
  description:
    'Md. Aminul Islam is a professional Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Building scalable, SEO-optimized web applications.',
  keywords:
    'Md. Aminul Islam, Full Stack Developer, MERN Stack, Next.js, React, TypeScript, SEO Specialist, Software Engineer, Web Development, TabEdge, Dhaka, Bangladesh',
});
