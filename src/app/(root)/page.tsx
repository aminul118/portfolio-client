import About from '@/components/modules/About/About';
import Contact from '@/components/modules/contact/Contact';
import Education from '@/components/modules/Home/Education';
import HeroBanner from '@/components/modules/Home/HeroBanner';
import FeaturedProjects from '@/components/modules/Projects/FeaturedProjects';
import OtherSkills from '@/components/modules/Skills/OtherSkills';
import Skills from '@/components/modules/Skills/Skills';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills />
      <OtherSkills />
      <Education />
      {/* <Experience /> */}
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default HomePage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
// >> SEO End
