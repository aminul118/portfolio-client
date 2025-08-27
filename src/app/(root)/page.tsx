import About from '@/components/modules/About/About';
import Contact from '@/components/modules/contact/Contact';
import Education from '@/components/modules/Home/Education';
import Experience from '@/components/modules/Experience/Experience';
import HeroBanner from '@/components/modules/HeroSection/HeroBanner';
import Projects from '@/components/modules/Projects/Projects';
import OtherSkills from '@/components/modules/Skills/OtherSkills';
import Skills from '@/components/modules/Skills/Skills';
import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
// >> SEO End

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills />
      <OtherSkills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
