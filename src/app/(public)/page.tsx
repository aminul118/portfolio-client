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
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
