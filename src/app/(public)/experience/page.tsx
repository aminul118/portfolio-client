import Experience from '@/components/modules/Public/Experience/Experience';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ExperiencePage = () => {
  return (
    <>
      <Experience />
    </>
  );
};

export default ExperiencePage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Experience | Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
  websitePath: '/projects',
});
// >> SEO End
