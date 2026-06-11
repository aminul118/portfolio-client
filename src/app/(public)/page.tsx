import Education from '@/app/(public)/_components/Education';
import Experience from '@/app/(public)/_components/Experience';
import FeaturedProjects from '@/app/(public)/_components/FeaturedProjects';
import HeroBanner from '@/app/(public)/_components/HeroBanner';
import About from '@/app/(public)/about/_componnets/About';
import Contact from '@/app/(public)/contact/_components/Contact';
import OtherSkills from '@/app/(public)/skills/_components/OtherSkills';
import Skills from '@/app/(public)/skills/_components/Skills';
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

//  SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Md. Aminul Islam | Full Stack Developer & SEO Specialist',
  description:
    'Md. Aminul Islam is a professional Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Building scalable, high-performance, and SEO-optimized web applications.',
  keywords:
    'Md. Aminul Islam, Full Stack Developer, MERN Stack, Next.js, React, TypeScript, SEO Specialist, Software Engineer, Web Development, API Development, TabEdge, Dhaka, Bangladesh',
  websitePath: '/',
});
