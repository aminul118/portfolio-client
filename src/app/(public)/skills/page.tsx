import OtherSkills from '@/components/modules/Public/Skills/OtherSkills';
import Skills from '@/components/modules/Public/Skills/Skills';
import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

const SkillsPage = () => {
  return (
    <>
      <Skills />
      <OtherSkills />
    </>
  );
};

export default SkillsPage;

// SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Technical Skills & Expertise | Md. Aminul Islam',
  description:
    "Detailed overview of Md. Aminul Islam's technical skills. Expertise in JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, AWS, and modern web technologies.",
  keywords:
    'Aminul Islam Skills, JavaScript Expert, React Developer, Next.js Expert, Node.js Developer, MERN Stack Skills, TypeScript, Web Development Technologies, Programming Expertise, Software Engineering Skills',
  websitePath: '/skills',
});
