import About from '@/components/Home/About/About';
import Contact from '@/components/Home/contact/Contact';
import Education from '@/components/Home/Education';
import Experience from '@/components/Home/Experience/Experience';
import HeroBanner from '@/components/Home/HeroSection/HeroBanner';
import Projects from '@/components/Home/Projects/Projects';
import OtherSkills from '@/components/Home/Skills/OtherSkills';
import Skills from '@/components/Home/Skills/Skills';
import { generateMetaTags } from '@/Seo/genarateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, Firebase, TypeScript, MongoDB, and scalable web applications. Currently working at TabEdge, an American payment solution company, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, MongoDB Expert, Firebase Expert, Mongoose, TypeScript Developer, Full-Stack Developer, Web Development, JavaScript Developer, Frontend Engineer, Backend Developer, API Development, Cloud Computing, Payment Solutions, E-commerce Development, TabEdge, TabEdge Developer, Web Application Designer, Graphic Designer, UI/UX Developer, SEO Specialist, Scalable Web Apps, Progressive Web Apps, Startup Tech, SaaS Developer, DevOps, Software Engineer, Aminul118, Hyper118',
  image: '/assets/banner/aminul.png',
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
