import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ProjectPage = () => {
  return <div></div>;
};

export default ProjectPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Projects | Aminul Islam',
  websitePath: '/projects',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
});
// >> SEO End
